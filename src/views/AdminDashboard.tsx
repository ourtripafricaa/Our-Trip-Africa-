import React,{useState,useEffect} from 'react';

import {
 collection,
 onSnapshot,
 addDoc,
 setDoc,
 doc,
 deleteDoc
} from 'firebase/firestore';

import {signOut} from 'firebase/auth';

import {auth,db} from '../lib/firebase';

import {
 SAFARI_PACKAGES,
 COMPANY_DETAILS,
 BLOG_POSTS
} from '../data/safariData';
export function AdminDashboard(){
 const green='#046A38';
 const [tab,T]=useState('Overview');
 const [items,S]=useState<any[]>([]);
 const [form,F]=useState<any>({});
 const [edit,E]=useState<any>(null);
 const [files,Q]=useState<any>({});
 const [busy,B]=useState(false);

 const menus=['Overview','Home','About Us','Contacts','Packages','Old Packages','Destinations','Bookings','Blog','Images','Videos','Attachments','Logout'];
 const pages=['Home','About Us','Contacts'];
 const cols:any={Packages:'packages',Destinations:'destinations',Bookings:'bookings',Blog:'blogPosts'};

 const defaults:any={
 Home:{title:'Discover the Untamed Wonder of East Africa',heading:'Welcome to Our Trip Africa',description:'Discover. Explore. Enjoy.'},
 'About Us':{title:'About Our Trip Africa',heading:'Discover Africa With Us',description:COMPANY_DETAILS.director.bio||'',founder:COMPANY_DETAILS.director.name},
 Contacts:{title:'Contact Our Trip Africa',heading:'Plan Your African Adventure',description:'Our team is available 24/7.',phone:COMPANY_DETAILS.phone,whatsapp:COMPANY_DETAILS.whatsappDisplay,email:COMPANY_DETAILS.bookingEmail,address:COMPANY_DETAILS.address}
 };

 useEffect(()=>{
  if(cols[tab]){
   return onSnapshot(collection(db,cols[tab]),s=>S(s.docs.map(d=>({...d.data(),firestoreId:d.id}))));
  }
  if(['Images','Videos','Attachments'].includes(tab)){
   return onSnapshot(collection(db,'media'),s=>S(s.docs.map(d=>({...d.data(),firestoreId:d.id})).filter(x=>x.type===tab)));
  }
  if(pages.includes(tab)){
   return onSnapshot(doc(db,'siteContent',tab.toLowerCase().replace(' ','-')),s=>F(s.exists()?{...defaults[tab],...s.data()}:defaults[tab]));
  }
  S([]);
 },[tab]);

 const field=(key:string)=> <label style={{display:'block',margin:'10px 0'}}>
 <b>{key}</b>
 <textarea style={{width:'100%',padding:10,minHeight:55}}
 value={typeof form[key]==='object'?JSON.stringify(form[key],null,2):form[key]||''}
 onChange={e=>F({...form,[key]:e.target.value})}/>
 </label>;

 const upload=async(list:any[],folder:string)=>{
 const urls:string[]=[];

 for(const file of list){
  const type=file.type.startsWith('video/')?'video':
  folder.toLowerCase()==='attachments'?'raw':'image';

  const data=new FormData();
  data.append('file',file);
  data.append('upload_preset','ourtripafrica_upload');
  data.append('folder',folder);

  const controller=new AbortController();
  const timer=setTimeout(()=>controller.abort(),30000);

  try{
   const r=await fetch(
    `https://api.cloudinary.com/v1_1/mbigrxjw/${type}/upload`,
    {method:'POST',body:data,signal:controller.signal}
   );

   const result=await r.json();

   if(!r.ok) throw new Error(result.error?.message||'Upload failed');
   if(!result.secure_url) throw new Error('Image URL missing');

   urls.push(result.secure_url);

  }catch(e:any){
   if(e.name==='AbortError'){
    throw new Error('Upload imezidi sekunde 30. Angalia internet au Cloudinary.');
   }
   throw e;
  }finally{
   clearTimeout(timer);
  }
 }

 return urls;
};
 
 async function save(){
  try{
   B(true);
   if(pages.includes(tab)){
    await setDoc(doc(db,'siteContent',tab.toLowerCase().replace(' ','-')),form);
   }else if(['Images','Videos','Attachments'].includes(tab)){
    const urls=await upload(files.media||[],tab);
    for(let i=0;i<urls.length;i++)
     await addDoc(collection(db,'media'),{type:tab,url:urls[i],name:files.media[i].name});
   }else{
    const images=await upload(files.images||[],'images');
    const videos=await upload(files.videos||[],'videos');
    const attachments=await upload(files.docs||[],'attachments');
    const data={...form,
     images:[...(Array.isArray(form.images)?form.images:[]),...images],
     videos:[...(Array.isArray(form.videos)?form.videos:[]),...videos],
     attachments:[...(Array.isArray(form.attachments)?form.attachments:[]),...attachments],
     heroImage:images[0]||form.heroImage||form.image||'',
     image:images[0]||form.image||''
    };

    ['itinerary','highlights','inclusions','exclusions','gallery','tags','content'].forEach(k=>{
     if(typeof data[k]==='string'){
      try{data[k]=JSON.parse(data[k]);}catch{}
     }
    });

    if(tab==='Packages'){
     const id=edit?.static?form.id:edit?.firestoreId;
     await setDoc(doc(db,'packages',String(id||form.id||form.slug||Date.now())),data);
    }else if(edit?.firestoreId){
     await setDoc(doc(db,cols[tab],edit.firestoreId),data);
    }else{
     await addDoc(collection(db,cols[tab]),data);
    }
   }
   E(null);F({});Q({});
   alert('Saved successfully!');
  }catch(e:any){alert('Error: '+e.message);}
  finally{B(false);}
 }

 function oldPackage(p:any){
  E({static:true});
  F({...p});
  T('Packages');
 }

 async function remove(x:any){
  if(!confirm('Una uhakika wa kufuta?'))return;
  try{
   await deleteDoc(doc(db,cols[tab]||'media',x.firestoreId));
  }catch(e:any){alert(e.message);}
 }

 const button=(label:string,fn:any)=> <button onClick={fn}
 style={{background:green,color:'white',padding:10,margin:4,border:0,borderRadius:5}}>{label}</button>;

 return <div style={{display:'flex',minHeight:'100vh',background:'#F0F7F1',fontFamily:'Arial'}}>
 <aside style={{width:145,background:green,color:'white',padding:10}}>
 <h3>OUR TRIP AFRICA</h3>
 {menus.map(x=><p key={x} onClick={()=>x==='Logout'?signOut(auth):T(x)}
 style={{padding:9,cursor:'pointer',background:tab===x?'#238B50':'transparent'}}>{x}</p>)}
 </aside>

 <main style={{padding:15,flex:1,minWidth:0}}>
 <h2 style={{color:green}}>{tab}</h2>

 {tab==='Overview'&&<>
 <h3>Welcome to Our Trip Africa Admin</h3>
 {menus.slice(1,-1).map(x=>button(x,()=>T(x)))}
 </>}

 {pages.includes(tab)&&<>
 <h3>Edit {tab} information</h3>
 {Object.keys(form).map(k=>field(k))}
 {button(busy?'Saving...':'SAVE PAGE',save)}
 </>}

 {tab==='Old Packages'&&<>
 <h3>Existing website packages</h3>
 {SAFARI_PACKAGES.map((p:any)=><div key={p.id} style={{background:'white',padding:12,margin:8}}>
 <b>{p.title}</b><br/>
 {p.destination} | {p.durationLabel}<br/>
 {button('OPEN / EDIT',()=>oldPackage(p))}
 </div>)}
 </>}

 {['Packages','Destinations','Blog'].includes(tab)&&<>
 <h3>{edit?'Edit':'Add New'} {tab}</h3>
 {tab==='Packages'&&<>
 {['id','slug','title','destination','country','category','durationDays','durationNights','durationLabel','basePrice','currency','priceNote','minGuests','maxGuests','rating','reviewsCount','featured','bestTime','physicalRating','heroImage','overview'].map(field)}
 {['tierPricing','gallery','highlights','itinerary','inclusions','exclusions'].map(field)}
 </>}
 {tab==='Destinations'&&['title','country','description','image'].map(field)}
 {tab==='Blog'&&['title','slug','category','readTime','publishedDate','image','excerpt','content','tags','seoDescription'].map(field)}
 <p>Upload Images</p>
 <input type="file" accept="image/*" multiple onChange={e=>Q({...files,images:Array.from(e.target.files||[])})}/>
 <p>Upload Videos</p>
 <input type="file" accept="video/*" multiple onChange={e=>Q({...files,videos:Array.from(e.target.files||[])})}/>
 <p>Upload PDF / Documents</p>
 <input type="file" multiple onChange={e=>Q({...files,docs:Array.from(e.target.files||[])})}/>
 <br/>
 {button(busy?'Saving...':'SAVE',save)}
 {button('CANCEL',()=>{E(null);F({});Q({})})}
 </>}

 {['Images','Videos','Attachments'].includes(tab)&&<>
 <h3>Upload {tab}</h3>
 <input type="file" multiple
 accept={tab==='Images'?'image/*':tab==='Videos'?'video/*':'.pdf,.doc,.docx'}
 onChange={e=>Q({media:Array.from(e.target.files||[])})}/>
 <br/><br/>
 <button disabled={busy} onClick={()=>save()}
 style={{background:'#046A38',color:'white',padding:14,border:0}}>
 {busy?'UPLOADING...':'UPLOAD NOW'}
 </button>
</>}

 {items.map(x=><div key={x.firestoreId} style={{background:'white',padding:12,margin:8}}>
 <b>{x.title||x.name||x.type}</b><br/>
 {x.image&&<img src={x.image} width="80" alt=""/>}
 {x.heroImage&&<img src={x.heroImage} width="80" alt=""/>}
 {x.url&&<a href={x.url} target="_blank">Open file</a>}
 {button('EDIT',()=>{E(x);F({...x});T(tab)})}
 {button('DELETE',()=>remove(x))}
 </div>)}
 </main>
 </div>;
    }
