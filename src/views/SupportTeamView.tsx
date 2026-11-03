import React from 'react';
import { ShieldCheck, Phone, Mail, Clock, CheckCircle2, AlertCircle, FileText, HeartPulse, Compass, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS, TEAM_MEMBERS } from '../data/safariData';
import { DualBookNow } from '../components/DualBookNow';

export const SupportTeamView: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#faf9f5]">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e3022]/10 border border-[#0e3022]/20 text-[#0e3022] text-xs font-semibold uppercase tracking-widest">
          <Sparkles size={13} className="text-[#c5a059]" />
          <span>24/7 Traveler Care & Wilderness Safety</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Our Trip Africa Support Team
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          From the second your flight touches down at Kilimanjaro or Zanzibar until you return home, our operations desk provides continuous 24/7 care, safety monitoring, and seamless logistical coordination.
        </p>
      </div>

      {/* 24/7 Emergency Care Card (Deep Emerald Highlight) */}
      <div className="bg-[#0e3022] p-8 sm:p-10 rounded-3xl border border-[#1b4d38] shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#25D366]">
            Active On-Trip Support Line
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Need Immediate Assistance in Tanzania?
          </h2>
          <p className="text-xs sm:text-sm text-slate-200">
            Direct 24/7 WhatsApp: <strong className="text-[#25D366]">{COMPANY_DETAILS.whatsappDisplay}</strong> • Support Email: <strong className="text-white">{COMPANY_DETAILS.supportEmail}</strong>
          </p>
        </div>

        <a
          href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=Hi%20Our%20Trip%20Africa%20Support%20Team%2C%20I%20am%20inquiring%20about%20support%20services.`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1faa4f] text-white font-bold text-xs shadow-md transition-colors whitespace-nowrap shrink-0"
        >
          Message Support on WhatsApp
        </a>
      </div>

      {/* Support Team Members */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">
            Operations Desk
          </span>
          <h2 className="font-serif text-2xl font-bold text-slate-900">
            Meet Your Dedicated Support Coordinators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {TEAM_MEMBERS.support.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-[#0e3022]">
                  Safari Operations
                </span>
                <h3 className="font-serif text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{member.role}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {member.description}
              </p>

              <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
                <p className="flex items-center gap-2 text-slate-800">
                  <Mail size={14} className="text-[#0e3022]" />
                  <a href={`mailto:${member.email}`} className="hover:underline font-medium">{member.email}</a>
                </p>
                <p className="flex items-center gap-2 text-slate-800">
                  <Phone size={14} className="text-[#25D366]" />
                  <span className="font-mono">{member.phone}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-Safari Travel Preparation Hub */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">
            Safari Preparation Checklists
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            Everything You Need to Know Before Departure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0e3022]/10 text-[#0e3022] flex items-center justify-center">
              <FileText size={22} />
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">Visa & Entry Info</h3>
            <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
              <li>• Tanzanian eVisa can be obtained online prior to flight or on arrival at Kilimanjaro (JRO) / Dar es Salaam.</li>
              <li>• Tourist Visa fee: $50 for most nationalities, $100 for US citizens.</li>
              <li>• Passport must have at least 6 months validity remaining and 2 blank pages.</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 text-[#1faa4f] flex items-center justify-center">
              <HeartPulse size={22} />
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">Health & Vaccines</h3>
            <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
              <li>• Yellow Fever certificate is required only if coming from or transiting through an endemic country (&gt;12h).</li>
              <li>• Malaria prophylaxis (Malarone, Doxycycline) is recommended.</li>
              <li>• Bring high-SPF sunscreen, insect repellent (DEET 30%+), and personal prescription medicines.</li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center">
              <Compass size={22} />
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">Packing & Currency</h3>
            <ul className="text-xs text-slate-600 space-y-2 leading-relaxed">
              <li>• Pack neutral safari colors (khaki, beige, olive green). Avoid dark blue and black (attracts tsetse flies).</li>
              <li>• Currency: US Dollars (bills dated 2013 or newer) and Tanzanian Shillings (TZS).</li>
              <li>• Soft duffle bags preferred over hard suitcases for 4x4 Land Cruiser packing.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
