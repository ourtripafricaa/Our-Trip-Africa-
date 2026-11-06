import React,{useEffect,useState} from 'react';

import {
 collection,onSnapshot,addDoc,
 updateDoc,deleteDoc,doc,getDocs
} from 'firebase/firestore';

import {
 ref,uploadBytes,getDownloadURL
} from 'firebase/storage';

import {signOut} from 'firebase/auth';

import {auth,db,storage} from '../lib/firebase';

import {SAFARI_PACKAGES} from '../data/safariData';

export function AdminDashboard(){
 const [tab,setTab]=useState('packages');
 const [items,setItems]=useState<any[]>([]);
 const [edit,setEdit]=useState<any>(null);
 const [title,setTitle]=useState('');
 const [price,setPrice]=useState('');
 const [description,setDescription]=useState('');
 const [image,setImage]=useState('');
 const [file,setFile]=useState<File|null>(null);

 useEffect(()=>{
  return onSnapshot(collection(db,tab),s=>
   setItems(s.docs.map(d=>({id:d.id,...d.data()})))
  );
 },[tab]);

 async function save(){
  let photo=image;
  if(file){
   const r=ref(storage,`uploads/${Date.now()}-${file.name}`);
   await uploadBytes(r,file);
   photo=await getDownloadURL(r);
  }
  const data={title,price,description,image:photo};
  if(edit) await updateDoc(doc(db,tab,edit.id),data);
  else await addDoc(collection(db,tab),data);
  clear();
 }
 function clear(){
  setEdit(null);setTitle('');setPrice('');
  setDescription('');setImage('');setFile(null);
 }
 function choose(x:any){
  setEdit(x);setTitle(x.title||'');
  setPrice(x.price||'');setDescription(x.description||'');
  setImage(x.image||'');
 }
 async function remove(id:string){
  if(confirm('Una uhakika wa kufuta?'))
   await deleteDoc(doc(db,tab,id));
 }
async function importOldPackages(){
 const snap = await getDocs(collection(db,'packages'));
 if(!snap.empty){
  alert('Packages tayari zimeingizwa!');
  return;
 }
 for(const p of SAFARI_PACKAGES){
  await addDoc(collection(db,'packages'),p as any);
 }
 alert('Packages za zamani zimeingizwa!');
}
 return <div style={{padding:20,maxWidth:800,margin:'auto'}}>
  <h2>Our Trip Africa Admin</h2>
  <button onClick={()=>setTab('packages')}>Packages</button>{' '}
  <button onClick={()=>setTab('blogPosts')}>Blog</button>{' '}
  <button onClick={()=>setTab('bookings')}>Bookings</button>{' '}
  <button onClick={()=>signOut(auth)}>Logout</button>
  <hr/>
  {tab!=='bookings'&&<>
   <h3>{edit?'Edit':'Add'} {tab}</h3>
   <button onClick={importOldPackages}>
Manage Old Packages
</button>
   <input placeholder="Title" value={title}
    onChange={e=>setTitle(e.target.value)}/><br/><br/>
   <input placeholder="Price" value={price}
    onChange={e=>setPrice(e.target.value)}/><br/><br/>
   <textarea placeholder="Description / Details"
    value={description}
    onChange={e=>setDescription(e.target.value)}/><br/><br/>
   <input type="file" accept="image/*"
    onChange={e=>setFile(e.target.files?.[0]||null)}/><br/>
   {image&&<img src={image} width="120" alt="Preview"/>}
   <br/>
   <button onClick={save}>SAVE</button>{' '}
   <button onClick={clear}>CANCEL</button>
  </>}
  <hr/>
  {items.map(x=><div key={x.id}
   style={{padding:10,borderBottom:'1px solid #ccc'}}>
   <b>{x.title||x.name||x.id}</b>
   {x.image&&<img src={x.image} width="70" alt=""/>}
   <button onClick={()=>choose(x)}>Edit</button>{' '}
   <button onClick={()=>remove(x.id)}>Delete</button>
  </div>)}
 </div>;
}
