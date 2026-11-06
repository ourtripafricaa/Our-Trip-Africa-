import React,{useState,useEffect} from 'react';
import {collection,onSnapshot,addDoc,updateDoc,deleteDoc,doc,getDocs} from 'firebase/firestore';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import {signOut} from 'firebase/auth';
import {auth,db,storage} from '../lib/firebase';
import {SAFARI_PACKAGES} from '../data/safariData';

export function AdminDashboard(){
 const [tab,T]=useState('packages');
 const [items,S]=useState<any[]>([]);
 const [edit,E]=useState<any>(null);
 const [f,F]=useState<any>({});
 const [files,Q]=useState<FileList|null>(null);

 useEffect(()=>onSnapshot(collection(db,tab),s=>
 S(s.docs.map(d=>({id:d.id,...d.data()})))),[tab]);

 const set=(k:string,v:any)=>F((p:any)=>({...p,[k]:v}));

 async function save(){
 let images=f.images||[];
 if(files) for(const file of Array.from(files)){
  const r=ref(storage,'uploads/'+Date.now()+file.name);
  await uploadBytes(r,file);
  images.push(await getDownloadURL(r));
 }
 const data={...f,images,image:images[0]||f.image||''};
 if(edit) await updateDoc(doc(db,tab,edit.id),data);
 else await addDoc(collection(db,tab),data);
 E(null);F({});Q(null);
 }

 async function importOld(){
 const old=await getDocs(collection(db,'packages'));
 if(!old.empty){alert('Packages tayari zipo Firebase.');return;}
 for(const p of SAFARI_PACKAGES) await addDoc(collection(db,'packages'),p as any);
 alert('Packages za zamani zimeingizwa!');
 }

 const field=(key:string,label:string,multi=false)=>
 <label style={{display:'block',margin:'10px 0'}}>
 {label}<br/>
 {multi?<textarea style={{width:'100%',height:75}}
 value={f[key]||''} onChange={e=>set(key,e.target.value)}/>
 :<input style={{width:'100%'}} value={f[key]||''}
 onChange={e=>set(key,e.target.value)}/>}
 </label>;

 return <main style={{padding:15,maxWidth:700,margin:'auto'}}>
 <h2>Our Trip Africa Admin</h2>
 <button onClick={()=>T('packages')}>Packages</button>
 <button onClick={()=>T('blogPosts')}>Blog</button>
 <button onClick={()=>T('bookings')}>Bookings</button>
 <button onClick={()=>signOut(auth)}>Logout</button>

 {tab==='packages'&&<button onClick={importOld}>Import Old Packages</button>}

 {tab!=='bookings'&&<>
 <h3>{edit?'Edit':'Add'} {tab}</h3>
 {field('title','Title')}
 {tab==='packages'&&<>
 {field('country','Country / Destination')}
 {field('price','Starting Price')}
 {field('duration','Days / Nights')}
 {field('budgetPrice','Budget Price')}
 {field('midrangePrice','Midrange Price')}
 {field('luxuryPrice','Luxury Price')}
 {field('itinerary','Full Itinerary',true)}
 {field('included','What is Included',true)}
 {field('excluded','What is Excluded',true)}
 </>}
 {tab==='blogPosts'&&field('category','Blog Category')}
 {field('description',tab==='packages'?'Description':'Blog Content',true)}
 <p>Upload picha (unaweza kuchagua nyingi)</p>
 <input type="file" accept="image/*" multiple
 onChange={e=>Q(e.target.files)}/>
 <br/><br/>
 <button onClick={save}>SAVE</button>
 <button onClick={()=>{E(null);F({});Q(null)}}>CANCEL</button>
 </>}

 <hr/>
 {items.map(x=><div key={x.id} style={{padding:10,borderBottom:'1px solid #ccc'}}>
 <b>{x.title||x.name||'Booking'}</b>
 {x.image&&<img src={x.image} width="65" alt=""/>}
 <button onClick={()=>{E(x);F({
 ...x,title:x.title||x.name||'',
 duration:x.duration||x.days||''
 });}}>EDIT</button>
 <button onClick={()=>deleteDoc(doc(db,tab,x.id))}>DELETE</button>
 </div>)}
 </main>;
  }
