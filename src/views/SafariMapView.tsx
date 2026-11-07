import React,{useState} from 'react';
import { MapPin, ExternalLink } from 'lucide-react';

const places=[
 {name:'Tanzania',region:'Serengeti & Northern Circuit',lat:-2.3333,lon:34.8333,bbox:'33.2,-4.2,36.8,-1.0'},
 {name:'Zanzibar',region:'Stone Town & Zanzibar beaches',lat:-6.1659,lon:39.2026,bbox:'39.0,-6.5,39.7,-5.7'},
 {name:'Kenya',region:'Maasai Mara & Amboseli',lat:-1.4061,lon:35.0084,bbox:'34.2,-2.2,36.2,0.1'},
 {name:'Uganda',region:'Bwindi & Queen Elizabeth',lat:-0.9973,lon:29.6983,bbox:'29.0,-1.8,31.0,0.2'},
 {name:'South Africa',region:'Kruger National Park',lat:-23.9884,lon:31.5547,bbox:'30.7,-25.0,32.6,-22.5'},
 {name:'UAE',region:'Dubai & Abu Dhabi',lat:25.2048,lon:55.2708,bbox:'54.8,24.8,56.0,25.8'},
 {name:'Hadzabe',region:'Lake Eyasi cultural experience, Tanzania',lat:-3.5,lon:35.0,bbox:'34.5,-3.9,35.5,-3.1'}
];

export const SafariMapView:React.FC=()=>{
 const [selected,setSelected]=useState(places[0]);
 const mapUrl=`https://www.openstreetmap.org/export/embed.html?bbox=${selected.bbox}&layer=mapnik&marker=${selected.lat}%2C${selected.lon}`;
 return <main className="mx-auto max-w-7xl space-y-7 px-4 py-10 sm:px-6 lg:px-8">
  <header className="rounded-3xl bg-[#0e3022] p-7 text-white sm:p-10"><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e4c681]">Explore our destinations</p><h1 className="mt-3 font-serif text-3xl font-bold sm:text-5xl">Explore Africa & UAE on the Map</h1><p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200">Choose a destination to explore its location and surrounding region. Map pins are indicative starting points for planning, not exact tour routes.</p></header>
  <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
   <aside className="rounded-3xl border border-[#c5a059]/40 bg-white p-4 shadow-sm"><h2 className="mb-3 font-bold text-[#0e3022]">Choose destination</h2><div className="grid grid-cols-2 gap-2 lg:grid-cols-1">{places.map(p=><button key={p.name} onClick={()=>setSelected(p)} className={`rounded-xl border p-3 text-left transition ${selected.name===p.name?'border-[#c5a059] bg-[#0e3022] text-white':'border-slate-200 bg-slate-50 text-slate-800 hover:border-[#c5a059]'}`}><span className="flex items-center gap-2 text-sm font-bold"><MapPin size={15}/>{p.name}</span><span className={`mt-1 block text-xs ${selected.name===p.name?'text-slate-200':'text-slate-500'}`}>{p.region}</span></button>)}</div></aside>
   <section className="overflow-hidden rounded-3xl border border-[#c5a059]/40 bg-white shadow-lg"><div className="flex flex-wrap items-center justify-between gap-3 p-4"><div><h2 className="font-serif text-2xl font-bold text-[#0e3022]">{selected.name}</h2><p className="text-sm text-slate-600">{selected.region}</p></div><a href={`https://www.openstreetmap.org/?mlat=${selected.lat}&mlon=${selected.lon}#map=8/${selected.lat}/${selected.lon}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-[#c5a059] px-4 py-2 text-xs font-bold text-[#061d14]">Open full map <ExternalLink size={14}/></a></div><iframe key={selected.name} title={`Map of ${selected.name}`} src={mapUrl} loading="lazy" className="h-[430px] w-full border-0" referrerPolicy="no-referrer-when-downgrade"/><p className="p-4 text-xs text-slate-500">Map data © OpenStreetMap contributors. Locations are indicative; ask our team to plan the route for your itinerary.</p></section>
  </div>
 </main>;
};
