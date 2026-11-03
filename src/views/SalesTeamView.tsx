import React from 'react';
import { Sparkles, Mail, MessageSquare, Users, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import { COMPANY_DETAILS, TEAM_MEMBERS } from '../data/safariData';
import { DualBookNow } from '../components/DualBookNow';

interface SalesTeamViewProps {
  onOpenBooking: () => void;
  onNavigate: (view: string) => void;
}

export const SalesTeamView: React.FC<SalesTeamViewProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 bg-[#faf9f5]">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0e3022]/10 border border-[#0e3022]/20 text-[#0e3022] text-xs font-semibold uppercase tracking-widest">
          <Sparkles size={13} className="text-[#c5a059]" />
          <span>Safari Planning & Custom Expeditions</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
          Our Trip Africa Sales Team
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Meet our experienced safari architects. We build customized itineraries tailored to your travel window, wildlife wishlist, and budget preference (Budget Camping, Mid-Range Lodge, or Luxury Tented Suites).
        </p>
      </div>

      {/* Main Direct Sales Action Banner (Deep Emerald Highlight) */}
      <div className="bg-[#0e3022] p-8 sm:p-10 rounded-3xl border border-[#1b4d38] shadow-xl text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
            Direct Safari Planning Desk
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Request a Free Tailor-Made Safari Itinerary
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
            Sales Email: <a href={`mailto:${COMPANY_DETAILS.salesEmail}`} className="text-[#c5a059] font-bold hover:underline">{COMPANY_DETAILS.salesEmail}</a> • Direct WhatsApp: <a href={COMPANY_DETAILS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-bold hover:underline">{COMPANY_DETAILS.whatsappDisplay}</a>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <DualBookNow size="lg" onOpenBookingModal={onOpenBooking} />
        </div>
      </div>

      {/* Sales Team Members */}
      <section className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">
            Local Specialists
          </span>
          <h2 className="font-serif text-2xl font-bold text-slate-900">
            Our Safari Specialists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.sales.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-1">
                <span className="text-xs uppercase font-bold text-[#0e3022]">
                  Safari Specialist
                </span>
                <h3 className="font-serif text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{member.role}</p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {member.description}
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3 text-xs">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-50 text-slate-800 border border-slate-200 hover:border-[#0e3022] hover:text-[#0e3022] transition-colors font-medium"
                >
                  <Mail size={13} className="text-[#0e3022]" />
                  <span>{member.email}</span>
                </a>
                <a
                  href={`https://wa.me/${member.whatsapp}?text=Hi%20${encodeURIComponent(member.name)}%2C%20I%20would%20like%20to%20plan%20a%20safari%20trip.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] text-white hover:bg-[#1faa4f] transition-colors font-medium shadow-sm"
                >
                  <MessageSquare size={13} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialised Services */}
      <section className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">
            Specialized Safari Services
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
            What Our Sales Desk Offers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0e3022]/10 text-[#0e3022] flex items-center justify-center">
              <Users size={22} />
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">Group Bookings & Discounts</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Traveling with a family reunion, university club, or photo tour group of 6+ passengers? We provide customized group volume pricing, dual vehicle coordination, and dedicated group safari directors.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#c5a059]/20 text-[#c5a059] flex items-center justify-center">
              <Heart size={22} />
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">Honeymoons & Milestones</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Celebrate your milestone with romantic bush sundowners in the Serengeti, private candlelit dinners overlooking crater rims, hot air balloon flights with champagne breakfasts, and secluded Zanzibar beachfront villas.
            </p>
          </div>

          <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-[#0e3022]/10 text-[#0e3022] flex items-center justify-center">
              <ShieldCheck size={22} />
            </div>
            <h3 className="font-serif text-lg font-bold text-slate-900">B2B & Travel Agents</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We operate as the verified ground-handling partner in Tanzania and Kenya for international travel agencies worldwide, providing white-label safari Land Cruisers, net B2B rates, and 24/7 client dispatch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
