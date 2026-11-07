import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Sparkles, CalendarDays, ArrowRight } from 'lucide-react';

type Offer = { id:string; title:string; description?:string; discountLabel?:string; validUntil?:string; image?:string; packageSlug?:string; active?:boolean|string; ctaLabel?:string };

export const SpecialOffers: React.FC<{onOpenBooking:()=>void}> = ({onOpenBooking}) => {
 const [offers,setOffers]=useState<Offer[]>([]);
 useEffect(()=>onSnapshot(collection(db,'offers'),snap=>setOffers(snap.docs.map(d=>({id:d.id,...d.data()} as Offer))),err=>console.error('Offers unavailable:',err)),[]);
 const today=new Date().toISOString().slice(0,10);
 const visible=offers.filter(o=>(o.active===true||o.active==='true')&&(!o.validUntil||o.validUntil>=today));
 if(!visible.length)return null;
 return <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
  <div className="text-center mb-7"><span className="text-xs font-bold uppercase tracking-[.2em] text-[#a47b32]">Limited-time opportunities</span><h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-[#0e3022]">Special Safari Offers</h2><p className="mt-2 text-sm text-slate-600">Seasonal offers and selected journeys from our Arusha team.</p></div>
  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map(o=><article key={o.id} className="overflow-hidden rounded-3xl border border-[#c5a059]/40 bg-white shadow-lg">
   {o.image&&<img src={o.image} alt={o.title} loading="lazy" className="h-48 w-full object-cover"/>}
   <div className="p-5"><div className="flex flex-wrap items-center justify-between gap-2"><span className="rounded-full bg-[#0e3022] px-3 py-1 text-xs font-bold text-[#f1d18b]">{o.discountLabel||'Special offer'}</span>{o.validUntil&&<span className="flex items-center gap-1 text-[11px] text-slate-500"><CalendarDays size={13}/> Until {o.validUntil}</span>}</div>
   <h3 className="mt-3 font-serif text-xl font-bold text-slate-900">{o.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{o.description}</p>
   <button onClick={onOpenBooking} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#c5a059] px-5 py-3 text-sm font-bold text-[#061d14]">{o.ctaLabel||'Enquire about this offer'} <ArrowRight size={16}/></button></div>
  </article>)}</div>
 </section>;
};
