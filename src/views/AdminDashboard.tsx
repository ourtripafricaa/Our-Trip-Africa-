import React,{useState,useEffect} from 'react';
import {collection,onSnapshot,addDoc,updateDoc,deleteDoc,doc,setDoc} from 'firebase/firestore';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import {signOut} from 'firebase/auth';
import {auth,db,storage} from '../lib/firebase';
import {SAFARI_PACKAGES} from '../data/safariData';

export function AdminDashboard(){
 const [tab,T]=useState('Overview');
 const [items,S]=useState<any[]>([]);
 const [form,F]=useState<any>({});
 const [edit,E]=useState<any>(null);
 const [files,Q]=useState<any>({});
 const green='#046A38';
 const light='#F0F7F1';

 const menus=['Overview','Home','About Us','Contacts','Packages','Old Packages','Destinations','Bookings','Blog','Images','Videos','Attachments','Logout'];
 const pages=['Home','About Us','Contacts'];
 const cols:any={Packages:'packages',Destinations:'destinations',Bookings:'bookings',Blog:'blogPosts'};

 useEffect(()=>{
  if(cols[tab]){
   return onSnapshot(collection(db,cols[tab]),s=>
    S(s.docs.map(d=>({id:d.id,...d.data()}))));
  }
  if(pages.includes(tab)){
   return onSnapshot(doc(db,'siteContent',tab.toLowerCase().replace(' ','-')),
    s=>F(s.exists()?s.data():{}));
  }
  S([]);
 },[tab]);

 const input=(key:string)=><label style={{display:'block',margin:8}}>
 {key}<br/>
 <textarea style={{width:'95%',padding:8}}
 value={form[key]||''}
 onChange={e=>F({...form,[key]:e.target.value})}/>
 </label>;

 async function upload(list:any[],folder:string){
  let urls=[];
  for(const file of list){
   const r=ref(storage,folder+'/'+Date.now()+file.name);
   await uploadBytes(r,file);
   urls.push(await getDownloadURL(r));
  }
  return urls;
 }

 async function save(){
  if(pages.includes(tab)){
   await setDoc(doc(db,'siteContent',tab.toLowerCase().replace(' ','-')),form);
  }else if(['Images','Videos','Attachments'].includes(tab)){
   const urls=await upload(files.media||[],tab);
   for(let i=0;i<urls.length;i++)
    await addDoc(collection(db,'media'),{type:tab,url:urls[i],name:files.media[i].name});
  }else{
   const images=await upload(files.images||[],'images');
   const videos=await upload(files.videos||[],'videos');
   const docs=await upload(files.docs||[],'attachments');
   const data={...form,
    images:[...(form.images||[]),...images],
    videos:[...(form.videos||[]),...videos],
    attachments:[...(form.attachments||[]),...docs],
    image:images[0]||form.image||''
   };
   if(edit) await updateDoc(doc(db,cols[tab],edit.id),data);
   else await addDoc(collection(db,cols[tab]),data);
  }
  E(null);F({});Q({});
  alert('Saved successfully!');
 }

 function openOld(p:any){
  E(null);
  F({...p,title:p.title||p.name||'',destination:p.destination||p.country||''});
  T('Packages');
 }

 async function remove(id:string){
  if(confirm('Una uhakika wa kufuta?'))
   await deleteDoc(doc(db,cols[tab],id));
 }

 return <div style={{display:'flex',minHeight:'100vh',background:light,fontFamily:'Arial'}}>
 <aside style={{width:145,background:green,color:'white',padding:10}}>
 <h3>OUR TRIP AFRICA</h3>
 {menus.map(x=><p onClick={()=>x==='Logout'?signOut(auth):T(x)}
 style={{padding:9,cursor:'pointer',background:tab===x?'#50C878':'transparent'}}>
 {x}</p>)}
 </aside>

 <main style={{padding:15,flex:1,minWidth:0}}>
 <h2 style={{color:green}}>{tab}</h2>

 {tab==='Overview'&&<>
 <h3>Welcome to Our Trip Africa</h3>
 {menus.slice(1,-1).map(x=><button onClick={()=>T(x)}>{x}</button>)}
 </>}

 {pages.includes(tab)&&<>
 <h3>Edit {tab} Page</h3>
 {input('title')}
 {input('heading')}
 {input('description')}
 {input('phone')}
 {input('whatsapp')}
 {input('email')}
 {input('address')}
 {input('socialMedia')}
 <button onClick={save}>SAVE PAGE</button>
 </>}

 {tab==='Old Packages'&&SAFARI_PACKAGES.map((p:any,i)=>
 <div style={{background:'white',padding:12,margin:8}}>
 <b>{p.title||p.name}</b>
 <button onClick={()=>openOld(p)}>OPEN / EDIT</button>
 </div>)}

 {['Packages','Destinations','Blog'].includes(tab)&&<>
 <h3>{edit?'Edit':'Add New'} {tab}</h3>
 {input('title')}
 {tab==='Packages'&&<>
 {input('destination')}
 {input('country')}
 {input('price')}
 {input('budgetPrice')}
 {input('midrangePrice')}
 {input('luxuryPrice')}
 {input('duration')}
 {input('description')}
 {input('itinerary')}
 {input('included')}
 {input('excluded')}
 </>}
 {tab==='Destinations'&&input('description')}
 {tab==='Blog'&&input('category')}
 {tab==='Blog'&&input('content')}
 <p>Images</p>
 <input type="file" accept="image/*" multiple
 onChange={e=>Q({...files,images:Array.from(e.target.files||[])})}/>
 <p>Videos</p>
 <input type="file" accept="video/*" multiple
 onChange={e=>Q({...files,videos:Array.from(e.target.files||[])})}/>
 <p>PDF / Attachments</p>
 <input type="file" multiple
 onChange={e=>Q({...files,docs:Array.from(e.target.files||[])})}/>
 <br/><br/>
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

 {items.map(x=><div style={{background:'white',padding:12,margin:8}}>
 <b>{x.title||x.name||x.type}</b>
 {x.image&&<img src={x.image} width="65" alt=""/>}
 {x.url&&<a href={x.url}>Open file</a>}
 <button onClick={()=>{E(x);F(x);T(cols[tab]==='blogPosts'?'Blog':tab)}}>EDIT</button>
 <button onClick={()=>remove(x.id)}>DELETE</button>
 </div>)}
 </main>
 </div>;
  }
