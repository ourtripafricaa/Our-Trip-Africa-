import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Instagram, Facebook, Linkedin, Youtube, ShieldCheck, HeartHandshake, Compass } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/safariData';
import { DualBookNow } from './DualBookNow';

interface FooterProps {
  onNavigate: (view: string, extraParam?: string) => void;
  onOpenBooking: () => void;
  onOpenCloudflareGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenCloudflareGuide,
}) => {
  return (
    <footer className="bg-[#05130e] text-[#dcd4c7] border-t border-[#1a4a35] pt-16 pb-12">
      {/* Pre-Footer Action Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0a271c] via-[#0f382a] to-[#0a271c] border border-[#c5a059]/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059]">
              Your African Dream Begins Here
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#faf7f2]">
              Ready to embark on an unforgettable safari?
            </h2>
            <p className="text-sm sm:text-base text-[#dcd4c7]">
              Speak directly with our local Tanzanian safari specialists in Arusha. Whether Budget Camping, Mid-range Lodges, or Luxury Tented Suites, we tailor every moment to you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <DualBookNow size="lg" onOpenBookingModal={onOpenBooking} />
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#113a2b]">
        {/* Col 1: Brand & Bio */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={COMPANY_DETAILS.logo}
              alt="Our Trip Africa"
              className="h-14 w-14 rounded-full object-cover border-2 border-[#c5a059]/50"
            />
            <div>
              <span className="font-serif text-2xl font-bold text-white tracking-tight">
                OUR TRIP AFRICA
              </span>
              <p className="text-xs text-[#c5a059] tracking-widest font-semibold uppercase">
                Discover • Explore • Enjoy
              </p>
            </div>
          </div>

          <p className="text-sm text-[#a49a88] leading-relaxed pr-4">
            Direct local tour operator based in Kisongo, Arusha – Tanzania. We specialize in authentic wildlife safaris, Mount Kilimanjaro trekking, Zanzibar beach holidays, and cultural tribal expeditions across Tanzania, Kenya, and Uganda.
          </p>

          {/* Social Links */}
          <div className="pt-2">
            <p className="text-xs font-medium text-[#c5a059] mb-3">FOLLOW OUR JOURNEYS</p>
            <div className="flex items-center gap-3">
              <a
                href={COMPANY_DETAILS.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @ourtripafricaa"
                className="w-10 h-10 rounded-xl bg-[#0e3022] hover:bg-[#c5a059] text-white hover:text-[#081a13] flex items-center justify-center transition-all duration-200"
              >
                <Instagram size={18} />
              </a>
              <a
                href={COMPANY_DETAILS.socials.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook @ourtripafrica"
                className="w-10 h-10 rounded-xl bg-[#0e3022] hover:bg-[#c5a059] text-white hover:text-[#081a13] flex items-center justify-center transition-all duration-200"
              >
                <Facebook size={18} />
              </a>
              <a
                href={COMPANY_DETAILS.socials.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok @ourtripafrica"
                className="w-10 h-10 rounded-xl bg-[#0e3022] hover:bg-[#c5a059] text-white hover:text-[#081a13] flex items-center justify-center transition-all duration-200"
              >
                <span className="font-bold text-xs">TT</span>
              </a>
              <a
                href={COMPANY_DETAILS.socials.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube @ourtripafrica"
                className="w-10 h-10 rounded-xl bg-[#0e3022] hover:bg-[#c5a059] text-white hover:text-[#081a13] flex items-center justify-center transition-all duration-200"
              >
                <Youtube size={18} />
              </a>
              <a
                href={COMPANY_DETAILS.socials.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn @ourtripafrica"
                className="w-10 h-10 rounded-xl bg-[#0e3022] hover:bg-[#c5a059] text-white hover:text-[#081a13] flex items-center justify-center transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
            </div>
            <p className="text-[11px] text-[#7d7465] mt-2">
              Instagram: @ourtripafricaa • Other platforms: @ourtripafrica
            </p>
          </div>
        </div>

        {/* Col 2: Destinations */}
        <div className="space-y-3">
          <p className="text-sm font-serif font-bold text-white tracking-wide uppercase border-b border-[#1a4a35] pb-2">
            Safari Destinations
          </p>
          <ul className="space-y-2 text-sm text-[#a49a88]">
            <li>
              <button
                onClick={() => onNavigate('tanzania')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                Tanzania Safaris
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('kenya')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                Kenya Safaris
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('uganda')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                Uganda Gorilla Treks
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('zanzibar')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                Zanzibar Beach Holidays
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('south-africa')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                South Africa Safaris (3 Packages)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('uae')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                UAE Dubai & Desert Dunes (2 Packages)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('packages', 'Mountain Trek')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                Kilimanjaro Expeditions
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('packages', 'Cultural Safari')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                Cultural & Tribal Tours
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Company & Teams */}
        <div className="space-y-3">
          <p className="text-sm font-serif font-bold text-white tracking-wide uppercase border-b border-[#1a4a35] pb-2">
            Company & Teams
          </p>
          <ul className="space-y-2 text-sm text-[#a49a88]">
            <li>
              <button
                onClick={() => onNavigate('about')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                About Our Trip Africa
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('support-team')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                Support Team (24/7)
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('sales-team')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                Sales & Safari Planners
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('compare')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                Package Price Comparison
              </button>
            </li>
            <li>
              <button
                onClick={() => onNavigate('blog')}
                className="hover:text-[#c5a059] transition-colors text-left"
              >
                Travel Guides & News
              </button>
            </li>
            <li>
              <button
                onClick={onOpenCloudflareGuide}
                className="hover:text-[#c5a059] text-[#c5a059] transition-colors text-left font-medium"
              >
                Cloudflare Pages Setup
              </button>
            </li>
          </ul>
        </div>

        {/* Col 4: Official Contacts */}
        <div className="space-y-3">
          <p className="text-sm font-serif font-bold text-white tracking-wide uppercase border-b border-[#1a4a35] pb-2">
            Direct Contacts
          </p>
          <div className="space-y-3 text-xs text-[#a49a88]">
            <div>
              <p className="text-[10px] text-[#7d7465] uppercase font-semibold">Headquarters</p>
              <p className="text-[#faf7f2] mt-0.5">{COMPANY_DETAILS.address}</p>
            </div>

            <div>
              <p className="text-[10px] text-[#7d7465] uppercase font-semibold">WhatsApp & Call</p>
              <a
                href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-semibold hover:underline block mt-0.5"
              >
                {COMPANY_DETAILS.whatsappDisplay}
              </a>
            </div>

            <div>
              <p className="text-[10px] text-[#7d7465] uppercase font-semibold">Booking Desk</p>
              <a
                href={`mailto:${COMPANY_DETAILS.bookingEmail}`}
                className="text-[#c5a059] hover:underline block mt-0.5"
              >
                {COMPANY_DETAILS.bookingEmail}
              </a>
            </div>

            <div>
              <p className="text-[10px] text-[#7d7465] uppercase font-semibold">Support Desk</p>
              <a
                href={`mailto:${COMPANY_DETAILS.supportEmail}`}
                className="text-[#faf7f2] hover:text-[#c5a059] hover:underline block mt-0.5"
              >
                {COMPANY_DETAILS.supportEmail}
              </a>
            </div>

            <div>
              <p className="text-[10px] text-[#7d7465] uppercase font-semibold">Sales Desk</p>
              <a
                href={`mailto:${COMPANY_DETAILS.salesEmail}`}
                className="text-[#faf7f2] hover:text-[#c5a059] hover:underline block mt-0.5"
              >
                {COMPANY_DETAILS.salesEmail}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Accreditations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7d7465]">
        <p>
          @Ferever Our Trip Africa. All rights reserved. Registered Tour Operator, Arusha, Tanzania.
        </p>

        <div className="flex flex-wrap items-center gap-6">
          <span className="flex items-center gap-1.5 text-[#a49a88]">
            <ShieldCheck size={14} className="text-[#c5a059]" />
            <span>Licensed Tanzanian Operator</span>
          </span>
          <span className="flex items-center gap-1.5 text-[#a49a88]">
            <HeartHandshake size={14} className="text-[#c5a059]" />
            <span>100% Fair Porter & Guide Wages</span>
          </span>
          <span className="flex items-center gap-1.5 text-[#a49a88]">
            <Compass size={14} className="text-[#c5a059]" />
            <span>ourtripafrica.com</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
