import React,{useState,useEffect} from 'react';
import {collection,onSnapshot,addDoc,updateDoc,deleteDoc,doc} from 'firebase/firestore';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import {signOut} from 'firebase/auth';
import {auth,db,storage} from '../lib/firebase';
import {SAFARI_PACKAGES} from '../data/safariData';

export function AdminDashboard(){
 const [tab,T]=useState('packages');
 const [items,S]=useState<any[]>([]);
 const [edit,E]=useState<any>(null);
 const [title,N]=useState('');
 const [price,P]=useState('');
 const [desc,D]=useState('');
 const [photo,I]=useState<File|null>(null);

 useEffect(()=>onSnapshot(collection(db,tab),s=>
 S(s.docs.map(d=>({id:d.id,...d.data()})))),[tab]);

 async function save(){
 let image='';
 if(photo){
 const r=ref(storage,'images/'+Date.now());
 await uploadBytes(r,photo);
 image=await getDownloadURL(r);
 }
 const data={title,price,description:desc,image};
 if(edit) await updateDoc(doc(db,tab,edit.id),data);
 else await addDoc(collection(db,tab),data);
 E(null);N('');P('');D('');I(null);
 }

 async function importOld(){
 for(const p of SAFARI_PACKAGES)
 await addDoc(collection(db,'packages'),p as any);
 alert('Packages zimeongezwa!');
 }

 return <main style={{padding:20}}>
 <h2>Our Trip Africa Admin</h2>
 <button onClick={()=>T('packages')}>Packages</button>
 <button onClick={()=>T('blogPosts')}>Blog</button>
 <button onClick={()=>T('bookings')}>Bookings</button>
 <button onClick={()=>signOut(auth)}>Logout</button>

 {tab==='packages'&&<button onClick={importOld}>Import Old Packages</button>}

 {tab!=='bookings'&&<>
 <h3>{edit?'Edit':'Add'} {tab}</h3>
 <input placeholder="Title" value={title} onChange={e=>N(e.target.value)}/>
 <input placeholder="Price" value={price} onChange={e=>P(e.target.value)}/>
 <textarea placeholder="Description" value={desc} onChange={e=>D(e.target.value)}/>
 <input type="file" accept="image/*" onChange={e=>I(e.target.files?.[0]||null)}/>
 <button onClick={save}>SAVE</button>
 </>}

 {items.map(x=><div key={x.id}>
 <b>{x.title||x.name}</b>
 <button onClick={()=>{E(x);N(x.title||x.name||'');P(x.price||'');D(x.description||'')}}>EDIT</button>
 <button onClick={()=>deleteDoc(doc(db,tab,x.id))}>DELETE</button>
 </div>)}
 </main>;
  }
