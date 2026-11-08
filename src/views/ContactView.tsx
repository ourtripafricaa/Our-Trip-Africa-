import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, Clock, Globe, Shield, Sparkles } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/safariData';
import { DualBookNow } from '../components/DualBookNow';

export const ContactView: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Safari Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi Our Trip Africa! My name is ${name || 'Traveler'}. I am reaching out regarding: ${subject}.\n\nMessage: ${message || 'I would like to enquire about your safari packages.'}\n\nThank you!`;
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsappRaw}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 bg-[#faf9f5]">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e3022]/10 border border-[#0e3022]/20 text-[#0e3022] text-xs font-semibold uppercase tracking-widest">
          <Sparkles size={13} className="text-[#c5a059]" />
          <span>Get in Touch With Arusha HQ</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Contact Our Trip Africa
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          We are available 24/7. Reach out via WhatsApp for immediate chat, email our specialized departments, or visit our operations headquarters in Kisongo, Arusha – Tanzania.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Card 1: Main Headquarter */}
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

          {/* Card 2: Dedicated Email Channels */}
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-slate-900 flex items-center gap-2">
              <Mail size={20} className="text-[#0e3022]" />
              <span>Direct Department Emails</span>
            </h3>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-[10px] uppercase text-slate-400 font-bold block">General Bookings & Quotes</span>
                <a
                  href={`mailto:${COMPANY_DETAILS.bookingEmail}`}
                  className="font-bold text-[#0e3022] hover:text-[#c5a059] hover:underline text-sm block mt-0.5"
                >
                  {COMPANY_DETAILS.bookingEmail}
                </a>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-[10px] uppercase text-slate-400 font-bold block">24/7 Traveler Care & On-Trip Support</span>
                <a
                  href={`mailto:${COMPANY_DETAILS.supportEmail}`}
                  className="font-bold text-slate-800 hover:text-[#0e3022] hover:underline text-sm block mt-0.5"
                >
                  {COMPANY_DETAILS.supportEmail}
                </a>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-[10px] uppercase text-slate-400 font-bold block">Management Team</span>
                <a href="mailto:james@ourtripafrica.com" className="font-bold text-slate-800 hover:text-[#0e3022] hover:underline text-sm block mt-0.5">james@ourtripafrica.com</a>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-200">
                <span className="text-[10px] uppercase text-slate-400 font-bold block">Sales, Groups & Agency Partnerships</span>
                <a
                  href={`mailto:${COMPANY_DETAILS.salesEmail}`}
                  className="font-bold text-slate-800 hover:text-[#0e3022] hover:underline text-sm block mt-0.5"
                >
                  {COMPANY_DETAILS.salesEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: WhatsApp Instant Connect (Deep Emerald Highlight) */}
          <div className="bg-[#0e3022] p-7 rounded-3xl border border-[#1b4d38] shadow-lg text-white space-y-3">
            <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
              <MessageSquare size={18} className="text-[#25D366]" />
              <span>Instant WhatsApp Messenger</span>
            </h3>
            <p className="text-xs text-slate-200">
              Have a quick question or want to discuss pricing directly with Director Mr. James Felix?
            </p>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1faa4f] text-white font-bold flex items-center justify-center gap-2 text-xs shadow transition-colors"
            >
              <MessageSquare size={16} />
              <span>Message on WhatsApp ({COMPANY_DETAILS.whatsappDisplay})</span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          {submitted ? (
            <div className="text-center py-12 space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/20 text-[#25D366] flex items-center justify-center mx-auto border border-[#25D366]">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Message Received!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                Thank you for contacting Our Trip Africa, {name}. A member of our Arusha safari team will reply to <strong className="text-[#0e3022] font-semibold">{email}</strong> within a few hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-[#0e3022] text-white font-bold text-xs shadow cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#0e3022]">
                  Send An Enquiry
                </span>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  How Can We Help You?
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Your Name: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. David Jenkins"
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Email Address: <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. david@example.com"
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    WhatsApp or Phone Number:
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +1 555 123 4567"
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700">
                    Inquiry Subject:
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors"
                  >
                    <option value="General Safari Inquiry">General Safari Inquiry</option>
                    <option value="Serengeti & Migration Booking">Serengeti & Migration Booking</option>
                    <option value="Kilimanjaro Trekking Quote">Kilimanjaro Trekking Quote</option>
                    <option value="Zanzibar Beach Holiday">Zanzibar Beach Holiday</option>
                    <option value="Kenya Safari Booking">Kenya Safari Booking</option>
                    <option value="South Africa Tour Booking">South Africa Tour Booking</option>
                    <option value="UAE Dubai & Desert Dunes">UAE Dubai & Desert Dunes</option>
                    <option value="Uganda Gorilla Trekking">Uganda Gorilla Trekking</option>
                    <option value="Group or Agency Partnership">Group or Agency Partnership</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700">
                  Your Message: <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your estimated dates, number of people, preferred budget/tier, and dream destinations..."
                  className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3.5 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1faa4f] text-white font-bold flex items-center justify-center gap-2 text-xs cursor-pointer shadow transition-colors"
                >
                  <MessageSquare size={16} />
                  <span>Send via WhatsApp (+255624661830)</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-[#0e3022] hover:bg-[#154632] text-white font-bold flex items-center justify-center gap-2 text-xs cursor-pointer shadow transition-colors"
                >
                  <Send size={16} />
                  <span>Submit Inquiry (Email)</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
