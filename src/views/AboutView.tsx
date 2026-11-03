import React, { useState } from 'react';
import { ShieldCheck, HeartHandshake, Compass, Users, CheckCircle2, MapPin, Award, Star, Mail, MessageSquare, Sparkles, Phone, Globe, ChevronDown, Download } from 'lucide-react';
import { COMPANY_DETAILS, LOCAL_IMAGES, SAFARI_FAQS, PACKING_TIPS } from '../data/safariData';
import { DualBookNow } from '../components/DualBookNow';

interface AboutViewProps {
  onOpenBooking: () => void;
  onNavigate: (view: string) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onOpenBooking, onNavigate }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const downloadPackingList = () => {
    const text = PACKING_TIPS.map(tip => `${tip.category}:\n${tip.items.map(item => `- ${item}`).join('\n')}\n`).join('\n');
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Our_Trip_Africa_Packing_List.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#faf9f5]">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e3022]/10 border border-[#0e3022]/20 text-[#0e3022] text-xs font-semibold uppercase tracking-widest">
          <Sparkles size={13} className="text-[#c5a059]" />
          <span>Local Tanzanian Tour Operator • Kisongo, Arusha</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          About Our Trip Africa
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Born at the foothills of Mount Kilimanjaro and headquartered in Arusha, Tanzania. We specialize in private, unforgettable wildlife safaris, Kilimanjaro climbs, and Zanzibar beach escapes across East Africa and beyond.
        </p>
      </div>

      {/* MEET MR. JAMES FELIX – DIRECTOR & FOUNDER */}
      <section className="bg-[#0e3022] rounded-3xl p-8 sm:p-12 border border-[#1b4d38] shadow-xl text-white grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Photo Column */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative group w-full max-w-sm">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#c5a059] to-[#25D366] rounded-3xl opacity-30 blur-lg group-hover:opacity-50 transition duration-500" />
            <img
              src={COMPANY_DETAILS.director.photo}
              alt="Mr. James Felix - Founder and Owner of Our Trip Africa"
              className="relative w-full h-[460px] rounded-2xl object-cover shadow-2xl border-2 border-[#c5a059]/70"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#061d14]/90 backdrop-blur-md p-3.5 rounded-xl border border-[#c5a059]/40 text-center shadow-lg">
              <span className="text-sm font-serif font-bold text-white block">
                {COMPANY_DETAILS.director.name}
              </span>
              <span className="text-xs text-[#c5a059] font-medium block">
                {COMPANY_DETAILS.director.title}
              </span>
              <span className="inline-block mt-1 text-[11px] bg-[#c5a059]/20 text-[#e5c07b] px-2.5 py-0.5 rounded-full font-mono">
                {COMPANY_DETAILS.director.experience} Industry Experience
              </span>
            </div>
          </div>
        </div>

        {/* Narrative & Vision Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
              Leadership & Authentic Story
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Meet Mr. James Felix
            </h2>
          </div>

          <blockquote className="font-serif italic text-base sm:text-lg text-slate-100 border-l-4 border-[#c5a059] pl-4 py-1 leading-relaxed bg-[#061d14]/50 rounded-r-xl">
            "{COMPANY_DETAILS.director.quote}"
          </blockquote>

          <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed">
            <p>
              My name is <strong>James Felix</strong>, the Founder and Owner of Our Trip Africa, a Tanzania-based tourism company established in 2021 with a clear vision of showcasing the extraordinary beauty of Tanzania and Africa to travelers from every corner of the world.
            </p>
            <p>
              Today, Our Trip Africa is dedicated to helping international travelers explore Tanzania and Africa through carefully organized safaris, cultural experiences, beach holidays, mountain adventures, and personalized travel arrangements.
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-3 border-t border-[#1b4d38] flex flex-wrap items-center gap-4">
            <DualBookNow size="md" onOpenBookingModal={onOpenBooking} />
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 rounded-xl bg-white text-[#0e3022] font-bold text-xs border border-white cursor-pointer transition-colors"
            >
              Talk to Managing Director
            </button>
          </div>
        </div>
      </section>

      {/* SAFARI ESSENTIALS CHECKLIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">Get Prepared</span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">Safari Essentials Checklist</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PACKING_TIPS.map((tip, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900">{tip.category}</h3>
              <ul className="text-xs text-slate-600 space-y-1">
                {tip.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <button onClick={downloadPackingList} className="flex items-center gap-2 mx-auto px-6 py-3 bg-[#0e3022] text-white font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer">
          <Download size={16} />
          Download Packing List
        </button>
      </section>

      {/* SAFARI FAQS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">
            Got Questions?
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Frequently Asked Safari Questions
          </h2>
        </div>

        <div className="space-y-3">
          {SAFARI_FAQS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-serif font-bold text-sm text-slate-900">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-[#0e3022] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
