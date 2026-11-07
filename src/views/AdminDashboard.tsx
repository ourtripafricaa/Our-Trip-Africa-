import React,{useState,useEffect} from 'react';

import {
 collection,
 onSnapshot,
 query,
 where,
 addDoc,
 setDoc,
 doc,
 deleteDoc,
 updateDoc,
 serverTimestamp
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
 const [galleryImages,GI]=useState<any[]>([]);
 const [selectedImage,SI]=useState('');

 const curatedGallery:any[]=[
  {
    "name": "Lion — Serengeti",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Serengeti%20National%20Park%2008%20-%20lion%20-%20Panthera%20leo.jpg"
  },
  {
    "name": "Elephant — Serengeti",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Serengeti%20National%20Park%2009%20-%20African%20elephant%20(Loxodonta).jpg"
  },
  {
    "name": "Giraffe — Serengeti",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Serengeti%20National%20Park%2013%20-%20giraffe%20-%20Giraffa%20camelopardalis.jpg"
  },
  {
    "name": "Great Migration",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Ngorongoro%20Conservation%20Area%2007%20-%20migration.jpg"
  },
  {
    "name": "Leopard — Serengeti",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Leopard%20tree%20Serengeti-1.jpg"
  },
  {
    "name": "Ngorongoro Crater",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Ngorongoro%20Crater%20Panorama.jpg"
  },
  {
    "name": "Mount Kilimanjaro",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Kilimanjaro%2CMoshi%201.jpg"
  },
  {
    "name": "Zanzibar Dhow",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Dhow%20boat%20Zanzibar.jpg"
  },
  {
    "name": "Safari Vehicle",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tanzania%20(Serengeti%20National%20Park)%20Safari%20vehicle%20(21113135729).jpg"
  },
  {
    "name": "Zebra — Ngorongoro",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/NgoroNgoro%20Crater%2C%20Tanzania%2C%20Africa.jpg"
  }
];

 const menus=['Overview','Visitors','Home','About Us','Contacts','Packages','Old Packages','Destinations','Bookings','Blog','Reviews','Offers','Images','Videos','Attachments','Logout'];
 const pages=['Home','About Us','Contacts'];
 const cols:any={Visitors:'siteVisits',Packages:'packages',Destinations:'destinations',Bookings:'bookings',Blog:'blogPosts',Reviews:'reviews',Offers:'offers'};

 const defaults:any={
 Home:{title:'Discover the Untamed Wonder of East Africa',heading:'Welcome to Our Trip Africa',description:'Discover. Explore. Enjoy.'},
 'About Us':{title:'About Our Trip Africa',heading:'Discover Africa With Us',description:COMPANY_DETAILS.director.bio||'',founder:COMPANY_DETAILS.director.name},
 Contacts:{title:'Contact Our Trip Africa',heading:'Plan Your African Adventure',description:'Our team is available 24/7.',phone:COMPANY_DETAILS.phone,whatsapp:COMPANY_DETAILS.whatsappDisplay,email:COMPANY_DETAILS.bookingEmail,address:COMPANY_DETAILS.address}
 };

 useEffect(()=>{
  if(cols[tab]){
   if(tab==='Visitors'){
    const since=new Date(); since.setDate(since.getDate()-6);
    const startDate=new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Dar_es_Salaam'}).format(since);
    return onSnapshot(query(collection(db,'siteVisits'),where('date','>=',startDate)),s=>S(s.docs.map(d=>({...d.data(),firestoreId:d.id}))));
   }
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

 useEffect(()=>{
  fetch('https://api.github.com/repos/ourtripafricaa/Our-Trip-Africa-/contents/public/images?ref=main')
   .then(r=>r.ok?r.json():Promise.reject(new Error('GitHub images folder haipatikani')))
   .then(data=>GI([...curatedGallery,...(Array.isArray(data)?data.filter((x:any)=>x.type==='file'&&/\.(png|jpe?g|webp|gif|avif)$/i.test(x.name)).map((x:any)=>({name:x.name,url:x.download_url})):[])]))
   .catch(err=>console.error('GitHub gallery:',err));
 },[]);

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

  try{
   const response=await fetch(
    `https://api.cloudinary.com/v1_1/mbigrxjw/${type}/upload`,
    {method:'POST',body:data}
   );

   const result=await response.json();

   if(!response.ok){
    throw new Error(result.error?.message||'Cloudinary upload failed');
   }

   if(!result.secure_url){
    throw new Error('Picha haijapata URL.');
   }

   urls.push(result.secure_url);

  }catch(error:any){
   if(error instanceof TypeError){
    throw new Error('Imeshindwa kuwasiliana na Cloudinary. Jaribu internet nyingine.');
   }
   throw error;
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
    const images:string[]=[];
    const videos=await upload(files.videos||[],'videos');
    const attachments=await upload(files.docs||[],'attachments');
    const data={...form,
     images:[...(Array.isArray(form.images)?form.images:[]),...images],
     videos:[...(Array.isArray(form.videos)?form.videos:[]),...videos],
     attachments:[...(Array.isArray(form.attachments)?form.attachments:[]),...attachments],
     heroImage:form.heroImage||form.image||'',
     image:form.image||form.heroImage||''
    };

    ['itinerary','highlights','inclusions','exclusions','gallery','tags','content'].forEach(k=>{
     if(typeof data[k]==='string'){
      try{data[k]=JSON.parse(data[k]);}catch{}
     }
    });

    if(tab==='Packages'){
     const id=edit?.static?form.id:edit?.firestoreId;
     const packageData = {
      ...data,
      ...(!edit && !form.createdAt ? {createdAt:new Date().toISOString()} : {})
     };
     await setDoc(doc(db,'packages',String(id||form.id||form.slug||Date.now())),packageData);
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

 async function changeBookingStatus(x:any,status:string){
  try{
   await updateDoc(doc(db,'bookings',x.firestoreId),{status,statusUpdatedAt:serverTimestamp()});
   if(x.email){
    await addDoc(collection(db,'mail'),{
     to:x.email,
     message:{subject:`Your Our Trip Africa enquiry ${x.bookingRef||''} - ${status.replaceAll('_',' ')}`,text:`Dear ${x.fullName||'Guest'},\\n\\nThe status of your booking enquiry ${x.bookingRef||''} for ${x.packageTitle||'your selected trip'} has been updated to: ${status.replaceAll('_',' ').toUpperCase()}.\\n\\nOur team will contact you with the next details. For assistance, WhatsApp +255624661830 or email info@ourtripafrica.com.\\n\\nOur Trip Africa`},
     createdAt:serverTimestamp()
    });
   }
  }catch(e:any){alert('Status update / email queue failed: '+e.message);}
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

 {tab==='Visitors'&&(()=>{
  const today=new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Dar_es_Salaam'}).format(new Date());
  const todayCount=items.filter(x=>x.date===today).length;
  const daily=Array.from({length:7},(_,i)=>{
   const d=new Date(); d.setDate(d.getDate()-(6-i));
   const date=new Intl.DateTimeFormat('en-CA',{timeZone:'Africa/Dar_es_Salaam'}).format(d);
   return {date,count:items.filter(x=>x.date===date).length};
  });
  const pages=Object.entries(items.reduce((acc:any,x:any)=>{const p=x.pagePath||'/';acc[p]=(acc[p]||0)+1;return acc;},{})).sort((a:any,b:any)=>b[1]-a[1]).slice(0,8);
  return <section style={{background:'white',padding:16,borderRadius:12}}>
   <h3 style={{fontSize:19,fontWeight:700}}>Website Visitor Analytics</h3>
   <p style={{color:'#52665a'}}>Anonymous daily visitor estimates for Our Trip Africa. Times use Tanzania time (EAT).</p>
   <div style={{display:'flex',gap:10,flexWrap:'wrap',margin:'14px 0'}}>
    <div style={{background:'#e9f4ec',padding:16,borderRadius:10,minWidth:145}}><small>Visitors today</small><div style={{fontSize:30,fontWeight:800,color:green}}>{todayCount}</div></div>
    <div style={{background:'#fff5df',padding:16,borderRadius:10,minWidth:145}}><small>Visitors in 7 days</small><div style={{fontSize:30,fontWeight:800,color:'#9a6b19'}}>{items.length}</div></div>
   </div>
   <h4 style={{fontWeight:700,marginTop:18}}>Daily visitors — last 7 days</h4>
   {daily.map(d=><div key={d.date} style={{display:'grid',gridTemplateColumns:'110px 1fr 35px',gap:8,alignItems:'center',margin:'10px 0'}}>
    <small>{d.date}</small><div style={{height:13,background:'#edf1ed',borderRadius:20,overflow:'hidden'}}><div style={{height:'100%',width:(items.length?Math.max(d.count/Math.max(...daily.map(x=>x.count),1)*100,d.count?3:0):0)+'%',background:'#046A38',borderRadius:20}}/></div><b>{d.count}</b>
   </div>)}
   <h4 style={{fontWeight:700,marginTop:20}}>Most viewed pages (recorded visit entries)</h4>
   {pages.length?pages.map(([page,count]:any)=><div key={page} style={{display:'flex',justifyContent:'space-between',gap:8,borderBottom:'1px solid #edf1ed',padding:'8px 0'}}><span style={{overflowWrap:'anywhere'}}>{page}</span><b>{count}</b></div>):<p>No visitor data yet. Open the public website after tracking is deployed.</p>}
   <p style={{fontSize:12,color:'#68766d',marginTop:16}}>Privacy: this counter stores a random anonymous browser ID, date and page path only. It does not collect names, email addresses or IP addresses. Repeat visits from the same browser are counted once per day. Counts are approximate and may be affected by private browsing, cleared storage, blockers or multiple devices.</p>
  </section>;
 })()}

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

 {['Packages','Destinations','Blog','Reviews','Offers'].includes(tab)&&<>
 <h3>{edit?'Edit':'Add New'} {tab}</h3>
 {tab==='Packages'&&<>
 {['id','slug','title','destination','country','category','durationDays','durationNights','durationLabel','basePrice','currency','priceNote','minGuests','maxGuests','rating','reviewsCount','featured','bestTime','physicalRating','heroImage','overview'].map(field)}
 {['tierPricing','gallery','highlights','itinerary','inclusions','exclusions'].map(field)}
 </>}
 {tab==='Destinations'&&['title','country','description','image'].map(field)}
 {tab==='Blog'&&['title','slug','category','readTime','publishedDate','image','excerpt','content','tags','seoDescription'].map(field)}
 {tab==='Reviews'&&['name','country','packageTitle','rating','review','status'].map(field)}
 {tab==='Offers'&&<><p style={{fontSize:12,color:'#52665a'}}>Set active to true to publish this offer on the homepage. Leave it false to keep it hidden.</p>{['title','description','discountLabel','validUntil','image','packageSlug','active','ctaLabel'].map(field)}</>}
 <p>Select an image from GitHub Gallery</p>
 <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(105px,1fr))',gap:8}}>
 {galleryImages.map((img:any)=><button type="button" key={img.url} onClick={()=>{SI(img.url);F({...form,image:img.url,heroImage:img.url})}} style={{border:selectedImage===img.url?'3px solid #046A38':'1px solid #ccc',background:'white',padding:5}}><img src={img.url} alt={img.name} style={{width:'100%',height:75,objectFit:'cover'}}/><small>{img.name}</small></button>)}
 </div>
 {(selectedImage||form.heroImage||form.image)&&<p>Selected image: <img src={selectedImage||form.heroImage||form.image} alt="Selected" style={{width:100,display:'block'}}/></p>}
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

 {tab==='Bookings'&&<section style={{background:'white',padding:14,borderRadius:12,marginBottom:16}}>
  <h3 style={{fontSize:18,fontWeight:700}}>Live Booking Tracker</h3>
  <p style={{fontSize:12,color:'#52665a',background:'#edf5ef',padding:10,borderRadius:8}}>Email alerts are queued when a booking arrives or its status changes. To deliver them, install Firebase Trigger Email and connect an SMTP mail provider to the <b>mail</b> collection.</p>
  <div style={{display:'flex',flexWrap:'wrap',gap:8,margin:'12px 0'}}>
   {['new','under_review','quotation_sent','confirmed','cancelled'].map(status=><div key={status} style={{background:'#edf5ef',padding:'8px 12px',borderRadius:8}}><b>{items.filter(x=>(x.status||'new')===status).length}</b><br/><small>{status.replaceAll('_',' ').toUpperCase()}</small></div>)}
  </div>
  {items.length===0?<p>No booking enquiries received yet.</p>:items.map(x=><article key={x.firestoreId} style={{border:'1px solid #dce7df',borderRadius:10,padding:12,margin:'10px 0'}}>
   <div style={{display:'flex',justifyContent:'space-between',gap:8,flexWrap:'wrap'}}><b>{x.bookingRef||x.fullName||'Booking enquiry'}</b><strong style={{color:green}}>{(x.status||'new').replaceAll('_',' ').toUpperCase()}</strong></div>
   <p><b>{x.packageTitle}</b> — {x.destination}</p><p>{x.fullName} | {x.email} | {x.phone}</p><p>Travel: {x.travelDate||'Flexible'} | Group: {x.adults} adults, {x.children} children</p><p>Estimate: {x.currency||'USD'} {x.estimatedTotal||'—'}</p>
   <label style={{display:'block',marginTop:8}}>Update booking status <select value={x.status||'new'} onChange={e=>changeBookingStatus(x,e.target.value)} style={{padding:9,border:'1px solid #ccc',borderRadius:7,marginLeft:8}}>{['new','under_review','quotation_sent','confirmed','cancelled'].map(v=><option key={v} value={v}>{v.replaceAll('_',' ').toUpperCase()}</option>)}</select></label>
  </article>)}
 </section>}
 {items.filter(x=>tab!=='Bookings').map(x=><div key={x.firestoreId} style={{background:'white',padding:12,margin:8}}>
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
