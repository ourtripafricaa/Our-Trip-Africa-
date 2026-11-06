import React,{useState,useEffect} from 'react';
import {collection,onSnapshot,addDoc,updateDoc,deleteDoc,doc,getDocs} from 'firebase/firestore';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import {signOut} from 'firebase/auth';
import {auth,db,storage} from '../lib/firebase';
import {SAFARI_PACKAGES} from '../data/safariData';

export function AdminDashboard(){
 const [tab,T]=useState('Overview');
 const [items,S]=useState<any[]>([]);
 const [edit,E]=useState<any>(null);
 const [f,F]=useState<any>({});
 const [files,Q]=useState<any>({});
 const teal='#087f83';

 const menus=['Overview','Packages','Old Packages','Destinations','Bookings','Blog','Images','Videos','Attachments','Logout'];

 const cols:any={
 Packages:'packages',Destinations:'destinations',
 Bookings:'bookings',Blog:'blogPosts',Images:'media',
 Videos:'media',Attachments:'media'
 };

 useEffect(()=>{
  const c=cols[tab];
  if(!c){S([]);return;}
  return onSnapshot(collection(db,c),s=>{
   S(s.docs.map(d=>({id:d.id,...d.data()})));
  });
 },[tab]);

 const field=(k:string,m=false)=><label style={{display:'block',margin:8}}>
 {k}<br/>
 {m?<textarea style={{width:'95%',height:65}} value={f[k]||''}
 onChange={e=>F({...f,[k]:e.target.value})}/>
 :<input style={{width:'95%',padding:9}} value={f[k]||''}
 onChange={e=>F({...f,[k]:e.target.value})}/>}
 </label>;

 async function upload(list:any[],folder:string){
  const urls=[];
  for(const file of list){
   const r=ref(storage,folder+'/'+Date.now()+file.name);
   await uploadBytes(r,file);
   urls.push(await getDownloadURL(r));
  }
  return urls;
 }

 async function save(){
  const name=cols[tab];
  if(['Images','Videos','Attachments'].includes(tab)){
   const urls=await upload(files.media||[],tab);
   for(let i=0;i<urls.length;i++)
    await addDoc(collection(db,'media'),{
     type:tab,url:urls[i],name:files.media[i].name
    });
  }else{
   const images=await upload(files.images||[],'images');
   const videos=await upload(files.videos||[],'videos');
   const attachments=await upload(files.docs||[],'attachments');
   const data={...f,
    images:[...(f.images||[]),...images],
    videos:[...(f.videos||[]),...videos],
    attachments:[...(f.attachments||[]),...attachments],
    image:images[0]||f.image||''
   };
   if(edit) await updateDoc(doc(db,name,edit.id),data);
   else await addDoc(collection(db,name),data);
  }
  E(null);F({});Q({});
  alert('Saved successfully!');
 }

 async function importOld(p:any){
  const snap=await getDocs(collection(db,'packages'));
  if(snap.docs.some(d=>d.data().title===(p.title||p.name))){
   alert('Package hii tayari ipo!');
   return;
  }
  await addDoc(collection(db,'packages'),p);
  alert('Old package imported!');
 }

 async function remove(id:string){
  if(confirm('Una uhakika wa kufuta?'))
   await deleteDoc(doc(db,cols[tab],id));
 }

 return <div style={{display:'flex',minHeight:'100vh',background:'#effafa',fontFamily:'Arial'}}>
 <aside style={{width:145,background:teal,color:'white',padding:10}}>
 <h3>OUR TRIP AFRICA</h3>
 {menus.map(x=><p onClick={()=>x==='Logout'?signOut(auth):T(x)}
 style={{padding:9,cursor:'pointer',background:tab===x?'#16b9b0':'transparent'}}>
 {x}</p>)}
 </aside>

 <main style={{padding:15,flex:1,minWidth:0}}>
 <h2 style={{color:teal}}>{tab}</h2>

 {tab==='Overview'&&<div>
 <h3>Welcome to Our Trip Africa</h3>
 <p>Manage your safari business here.</p>
 {menus.slice(1,-1).map(x=><button onClick={()=>T(x)}>{x}</button>)}
 </div>}

 {tab==='Old Packages'&&SAFARI_PACKAGES.map((p:any)=>
 <div style={{background:'white',padding:12,margin:8}}>
 <b>{p.title||p.name}</b><br/>
 <button onClick={()=>importOld(p)}>Import to Packages</button>
 </div>)}

 {['Packages','Destinations','Blog'].includes(tab)&&<>
 <h3>{edit?'Edit':'Add New'} {tab}</h3>
 {field('title')}
 {tab==='Packages'&&<>
 {field('country')}
 {field('price')}
 {field('budgetPrice')}
 {field('midrangePrice')}
 {field('luxuryPrice')}
 {field('duration')}
 {field('description',true)}
 {field('itinerary',true)}
 {field('included',true)}
 {field('excluded',true)}
 <p>Main and Gallery Images</p>
 <input type="file" accept="image/*" multiple
 onChange={e=>Q({...files,images:Array.from(e.target.files||[])})}/>
 <p>Videos</p>
 <input type="file" accept="video/*" multiple
 onChange={e=>Q({...files,videos:Array.from(e.target.files||[])})}/>
 <p>PDF / Attachments</p>
 <input type="file" multiple
 onChange={e=>Q({...files,docs:Array.from(e.target.files||[])})}/>
 </>}
 {tab==='Destinations'&&field('description',true)}
 {tab==='Blog'&&<>
 {field('category')}
 {field('description',true)}
 <input type="file" accept="image/*"
 onChange={e=>Q({...files,images:Array.from(e.target.files||[])})}/>
 </>}
 <br/>
 <button onClick={save}>SAVE</button>
 <button onClick={()=>{E(null);F({});Q({})}}>CANCEL</button>
 </>}

 {['Images','Videos','Attachments'].includes(tab)&&<>
 <h3>Upload {tab}</h3>
 <input type="file" multiple
 accept={tab==='Images'?'image/*':tab==='Videos'?'video/*':'.pdf,.doc,.docx'}
 onChange={e=>Q({media:Array.from(e.target.files||[])})}/>
 <button onClick={save}>UPLOAD</button>
 </>}

 {items.map(x=><div style={{background:'white',padding:12,margin:8,borderRadius:8}}>
 <b>{x.title||x.name||x.type}</b>
 {x.image&&<img src={x.image} width="70" alt=""/>}
 {x.url&&<a href={x.url} target="_blank">View file</a>}
 {['Packages','Destinations','Blog'].includes(tab)&&
 <button onClick={()=>{E(x);F(x)}}>EDIT</button>}
 <button onClick={()=>remove(x.id)}>DELETE</button>
 </div>)}
 </main>
 </div>;
}
