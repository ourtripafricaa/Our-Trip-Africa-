import React from 'react';
import { Mail, MapPin, MessageSquare, Clock, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/safariData';

export const ContactView: React.FC = () => {
  const bookingMail = 'mailto:info@ourtripafrica.com?cc=ourtripafricaa@gmail.com&subject=' + encodeURIComponent('Safari or holiday enquiry - Our Trip Africa');
  const supportMail = 'mailto:support@ourtripafrica.com?subject=' + encodeURIComponent('Support enquiry - Our Trip Africa');
  const salesMail = 'mailto:sales@ourtripafrica.com?subject=' + encodeURIComponent('Sales and partnership enquiry - Our Trip Africa');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 bg-[#faf9f5]">
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e3022]/10 border border-[#0e3022]/20 text-[#0e3022] text-xs font-semibold uppercase tracking-widest">
          <Sparkles size={13} className="text-[#c5a059]" />
          <span>Get in Touch With Arusha HQ</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">Contact Our Trip Africa</h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We are available 24/7. Contact our team directly by email or WhatsApp. No online enquiry or booking form is required.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="space-y-6">
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
              <MapPin size={20} className="text-[#0e3022]" />
              <span>Headquarters Location</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong className="text-slate-900">Our Trip Africa</strong><br />
              {COMPANY_DETAILS.address}<br />
              At the gateway to the Northern Safari Circuit (Serengeti, Ngorongoro, Tarangire, Manyara).
            </p>
            <div className="pt-2 text-xs text-slate-500 flex items-center gap-2 border-t border-slate-100">
              <Clock size={14} className="text-[#0e3022]" />
              <span>Office: Mon – Sun, 24/7 Safari Operations Support</span>
            </div>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
              <Mail size={20} className="text-[#0e3022]" />
              <span>Email Our Team Directly</span>
            </h3>
            <p className="text-xs text-slate-500">Choose an email address below. Your email app will open with the recipient already filled in.</p>
            <a href={bookingMail} className="block p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#c5a059] transition-colors">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Bookings & Safari Quotes</span>
              <span className="font-bold text-[#0e3022] text-sm">info@ourtripafrica.com</span>
              <span className="block text-[11px] text-slate-500 mt-1">CC: ourtripafricaa@gmail.com</span>
            </a>
            <a href={supportMail} className="block p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#c5a059] transition-colors">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">24/7 Traveler Support</span>
              <span className="font-bold text-slate-800 text-sm">support@ourtripafrica.com</span>
            </a>
            <a href="mailto:james@ourtripafrica.com" className="block p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#c5a059] transition-colors">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Direct Contact</span>
              <span className="font-bold text-slate-800 text-sm">james@ourtripafrica.com</span>
            </a>
            <a href={salesMail} className="block p-4 bg-slate-50 rounded-2xl border border-slate-200 hover:border-[#c5a059] transition-colors">
              <span className="text-[10px] uppercase text-slate-400 font-bold block">Sales & Partnerships</span>
              <span className="font-bold text-slate-800 text-sm">sales@ourtripafrica.com</span>
            </a>
          </div>
        </div>

        <div className="bg-[#0e3022] p-8 sm:p-10 rounded-3xl border border-[#1b4d38] shadow-lg text-white space-y-6">
          <div className="space-y-3">
            <MessageSquare size={28} className="text-[#25D366]" />
            <h3 className="font-serif text-2xl font-bold text-white">Talk to Our Team on WhatsApp</h3>
            <p className="text-sm text-slate-200 leading-relaxed">
              For quick questions, safari planning, availability and prices, message our reservation team directly. WhatsApp will open with your chat ready.
            </p>
          </div>
          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent('Hello Our Trip Africa! I would like help planning a safari or holiday. Please share available packages, prices and booking information.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-5 rounded-xl bg-[#25D366] hover:bg-[#1faa4f] text-white font-bold flex items-center justify-center gap-2 text-sm shadow transition-colors"
          >
            <MessageSquare size={18} />
            <span>CHAT ON WHATSAPP ({COMPANY_DETAILS.whatsappDisplay})</span>
          </a>
          <a
            href={bookingMail}
            className="w-full py-4 px-5 rounded-xl bg-[#c5a059] hover:bg-[#e3c27b] text-[#073b29] font-bold flex items-center justify-center gap-2 text-sm shadow transition-colors"
          >
            <Mail size={18} />
            <span>EMAIL OUR RESERVATION TEAM</span>
          </a>
          <p className="text-[11px] text-slate-300 text-center">No website form. Contact us directly using WhatsApp or your email app.</p>
        </div>
      </div>
    </div>
  );
};
