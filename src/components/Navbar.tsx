import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, MessageSquare, Globe, Sparkles, ChevronDown } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/safariData';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string, extraParam?: string) => void;
  onOpenBooking: () => void;
  onOpenCloudflareGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenBooking,
  onOpenCloudflareGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [destinationsDropdownOpen, setDestinationsDropdownOpen] = useState(false);

  const destinationItems = [
    { id: 'tanzania', label: 'Tanzania Safaris & Kilimanjaro' },
    { id: 'kenya', label: 'Kenya Safaris (Maasai Mara, Amboseli)' },
    { id: 'uganda', label: 'Uganda Gorilla Treks (Bwindi)' },
    { id: 'zanzibar', label: 'Zanzibar Beach Holidays' },
    { id: 'south-africa', label: 'South Africa Safaris & Cape Town' },
    { id: 'uae', label: 'UAE Dubai & Desert Dunes' },
    { id: 'hadzabe', label: 'Hadzabe Cultural Experience (Lake Eyasi)' },
  ];

  const handleLinkClick = (id: string, extraParam?: string) => {
    onNavigate(id, extraParam);
    setMobileMenuOpen(false);
    setDestinationsDropdownOpen(false);
  };

  const isDestinationActive = ['destinations', 'tanzania', 'kenya', 'uganda', 'zanzibar', 'south-africa', 'uae', 'hadzabe'].includes(currentView);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0e3022] backdrop-blur-md border-b border-[#1b4d38] shadow-md">
      {/* Top Utility Ribbon (Deep Emerald Contrast) */}
      <div className="hidden lg:block bg-[#061d14] text-slate-300 border-b border-[#0f382a] text-xs py-2 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin size={13} className="text-[#c5a059]" />
              <span>{COMPANY_DETAILS.address}</span>
            </span>
            <span className="text-[#1b4d38]">•</span>
            <a
              href={`mailto:${COMPANY_DETAILS.bookingEmail}`}
              className="flex items-center gap-1.5 hover:text-[#c5a059] transition-colors"
            >
              <Mail size={13} className="text-[#c5a059]" />
              <span>{COMPANY_DETAILS.bookingEmail}</span>
            </a>
            <span className="text-[#1b4d38]">•</span>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#3ce07d] transition-colors font-medium"
            >
              <MessageSquare size={13} />
              <span>WhatsApp: {COMPANY_DETAILS.whatsappDisplay}</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-1.5 text-xs text-[#c5a059] hover:text-[#e5c07b] transition-colors cursor-pointer"
            >
              <Globe size={13} />
              <span className="font-bold">EN</span>
              <span>/</span>
              <span className="text-slate-500">SW</span>
            </button>
            <span className="text-[#1b4d38]">•</span>
            <button
              onClick={onOpenCloudflareGuide}
              className="inline-flex items-center gap-1.5 text-xs text-[#c5a059] hover:text-[#e5c07b] transition-colors cursor-pointer"
            >
              <Globe size={13} />
              <span>Cloudflare Pages & Domain Guide</span>
            </button>
            <span className="text-[#1b4d38]">•</span>
            <span className="text-slate-400">Direct Tanzanian Tour Operator</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 text-left shrink-0 cursor-pointer group"
        >
          <img
            src={COMPANY_DETAILS.logo}
            alt="Our Trip Africa Logo"
            className="h-12 w-12 rounded-full object-cover border border-[#c5a059]/40 shadow-sm transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col overflow-hidden">
            <span className="brand-welcome-slide text-[9px] sm:text-[10px] tracking-[0.28em] font-bold text-[#c5a059] uppercase whitespace-nowrap">
              Welcome to
            </span>
            <span className="brand-name-slide font-serif text-lg sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#c5a059] transition-colors whitespace-nowrap">
              OUR TRIP AFRICA
            </span>
            <span className="brand-tagline-slide text-[9px] sm:text-[10px] tracking-[0.16em] font-semibold text-[#c5a059] uppercase whitespace-nowrap">
              Discover. Explore. Enjoy.
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-slate-200">
          <button
            onClick={() => handleLinkClick('home')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
              currentView === 'home' ? 'text-[#c5a059] font-bold' : 'hover:text-white'
            }`}
          >
            Home
            {currentView === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5a059] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleLinkClick('destinations')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
              currentView === 'destinations' ? 'text-[#c5a059] font-bold' : 'hover:text-white'
            }`}
          >
            Explore Destinations
            {currentView === 'destinations' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5a059] rounded-full" />
            )}
          </button>

          {/* Destinations Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDestinationsDropdownOpen(true)}
            onMouseLeave={() => setDestinationsDropdownOpen(false)}
          >
            <button
              onClick={() => setDestinationsDropdownOpen(!destinationsDropdownOpen)}
              className={`flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
                isDestinationActive ? 'text-[#c5a059] font-bold' : 'hover:text-white'
              }`}
            >
              <span>Destinations</span>
              <ChevronDown size={14} className={`transition-transform ${destinationsDropdownOpen ? 'rotate-180 text-[#c5a059]' : ''}`} />
              {isDestinationActive && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5a059] rounded-full" />
              )}
            </button>

            {/* Dropdown Menu */}
            {destinationsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 bg-[#061d14] border border-[#1b4d38] rounded-2xl shadow-2xl py-2 z-50">
                {destinationItems.map((dest) => (
                  <button
                    key={dest.id}
                    onClick={() => handleLinkClick(dest.id)}
                    className={`w-full text-left px-4 py-2.5 text-xs transition-colors block cursor-pointer ${
                      currentView === dest.id
                        ? 'bg-[#0e3022] text-[#c5a059] font-bold border-l-2 border-[#c5a059]'
                        : 'text-slate-300 hover:bg-[#0e3022] hover:text-white'
                    }`}
                  >
                    {dest.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => handleLinkClick('packages')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
              currentView === 'packages' ? 'text-[#c5a059] font-bold' : 'hover:text-white'
            }`}
          >
            All Packages
            {currentView === 'packages' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5a059] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleLinkClick('safari-map')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${currentView === 'safari-map' ? 'text-[#c5a059] font-bold' : 'hover:text-white'}`}
          >
            Safari Map
          </button>
          <button
            onClick={() => handleLinkClick('compare')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
              currentView === 'compare' ? 'text-[#c5a059] font-bold' : 'hover:text-white'
            }`}
          >
            Compare Prices
            {currentView === 'compare' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5a059] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleLinkClick('blog')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
              currentView === 'blog' ? 'text-[#c5a059] font-bold' : 'hover:text-white'
            }`}
          >
            Travel Guides
            {currentView === 'blog' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5a059] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleLinkClick('about')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
              currentView === 'about' ? 'text-[#c5a059] font-bold' : 'hover:text-white'
            }`}
          >
            About Us
            {currentView === 'about' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5a059] rounded-full" />
            )}
          </button>

          <button
            onClick={() => handleLinkClick('contact')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
              currentView === 'contact' ? 'text-[#c5a059] font-bold' : 'hover:text-white'
            }`}
          >
            Contact
            {currentView === 'contact' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5a059] rounded-full" />
            )}
          </button>
          <button
            onClick={() => handleLinkClick('admin')}
            className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
              currentView === 'admin' ? 'text-[#c5a059] font-bold' : 'hover:text-white'
            }`}
          >
            Admin
            {currentView === 'admin' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c5a059] rounded-full" />
            )}
          </button>
        </nav>

        {/* Primary Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={COMPANY_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl bg-[#25D366] text-white hover:bg-[#1faa4f] transition-all whitespace-nowrap shadow-sm"
          >
            <MessageSquare size={14} />
            <span>WhatsApp Us</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-[#c5a059] text-[#061d14] hover:bg-[#d6b36d] shadow transition-all whitespace-nowrap cursor-pointer"
          >
            <Sparkles size={14} />
            <span>Plan Custom Safari</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={COMPANY_DETAILS.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-2 rounded-lg bg-[#25D366] text-white"
          >
            <MessageSquare size={18} />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-slate-200 hover:text-white bg-[#061d14] border border-[#1b4d38] cursor-pointer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#061d14] border-b border-[#1b4d38] px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-3">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleLinkClick('home')}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'home'
                  ? 'bg-[#0e3022] text-[#c5a059] font-bold border-l-2 border-[#c5a059]'
                  : 'text-slate-300 hover:bg-[#0e3022] hover:text-white'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => handleLinkClick('destinations')}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'destinations'
                  ? 'bg-[#0e3022] text-[#c5a059] font-bold border-l-2 border-[#c5a059]'
                  : 'text-slate-300 hover:bg-[#0e3022] hover:text-white'
              }`}
            >
              Explore All Destinations
            </button>

            {/* Destinations Subgroup */}
            <div className="pt-2 pb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#c5a059] px-3">
                Destinations
              </span>
              <div className="pl-2 space-y-1 mt-1">
                {destinationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      currentView === item.id
                        ? 'bg-[#0e3022] text-[#c5a059] font-bold'
                        : 'text-slate-300 hover:bg-[#0e3022] hover:text-white'
                    }`}
                  >
                    • {item.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleLinkClick('packages')}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'packages'
                  ? 'bg-[#0e3022] text-[#c5a059] font-bold border-l-2 border-[#c5a059]'
                  : 'text-slate-300 hover:bg-[#0e3022] hover:text-white'
              }`}
            >
              All Packages
            </button>

            <button onClick={() => handleLinkClick('safari-map')} className="text-left px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-[#0e3022]">Interactive Safari Map</button>
            <button
              onClick={() => handleLinkClick('compare')}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'compare'
                  ? 'bg-[#0e3022] text-[#c5a059] font-bold border-l-2 border-[#c5a059]'
                  : 'text-slate-300 hover:bg-[#0e3022] hover:text-white'
              }`}
            >
              Compare Prices
            </button>

            <button
              onClick={() => handleLinkClick('blog')}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'blog'
                  ? 'bg-[#0e3022] text-[#c5a059] font-bold border-l-2 border-[#c5a059]'
                  : 'text-slate-300 hover:bg-[#0e3022] hover:text-white'
              }`}
            >
              Travel Guides & Blog
            </button>

            <button
              onClick={() => handleLinkClick('about')}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'about'
                  ? 'bg-[#0e3022] text-[#c5a059] font-bold border-l-2 border-[#c5a059]'
                  : 'text-slate-300 hover:bg-[#0e3022] hover:text-white'
              }`}
            >
              About Us (Mr. James Felix)
            </button>

            <button
              onClick={() => handleLinkClick('contact')}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'contact'
                  ? 'bg-[#0e3022] text-[#c5a059] font-bold border-l-2 border-[#c5a059]'
                  : 'text-slate-300 hover:bg-[#0e3022] hover:text-white'
              }`}
            >
              Contact Us
            </button>
            <button
              onClick={() => handleLinkClick('admin')}
              className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                currentView === 'admin'
                  ? 'bg-[#0e3022] text-[#c5a059] font-bold border-l-2 border-[#c5a059]'
                  : 'text-slate-300 hover:bg-[#0e3022] hover:text-white'
              }`}
            >
              Admin Dashboard
            </button>
          </div>

          <div className="pt-3 border-t border-[#1b4d38] space-y-2.5">
            <button
              onClick={() => {
                onOpenBooking();
                setMobileMenuOpen(false);
              }}
              className="w-full py-3 rounded-xl bg-[#c5a059] text-[#061d14] font-bold text-center text-sm shadow cursor-pointer"
            >
              Plan Your Dream Safari
            </button>
            <a
              href={COMPANY_DETAILS.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold flex items-center justify-center gap-2 text-sm shadow"
            >
              <MessageSquare size={16} />
              <span>Chat on WhatsApp (+255624661830)</span>
            </a>
            <button
              onClick={() => {
                onOpenCloudflareGuide();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl border border-[#1b4d38] text-[#c5a059] text-xs font-medium text-center"
            >
              Deploy to Cloudflare Pages Guide
            </button>
            <button
              className="w-full py-2.5 rounded-xl border border-[#1b4d38] text-white text-xs font-medium text-center flex items-center justify-center gap-2"
            >
              <Globe size={14} />
              <span>English / Swahili</span>
            </button>
          </div>

          <div className="pt-2 text-xs text-slate-400 space-y-1">
            <p className="flex items-center gap-1.5">
              <MapPin size={12} className="text-[#c5a059]" />
              {COMPANY_DETAILS.address}
            </p>
            <p className="flex items-center gap-1.5">
              <Mail size={12} className="text-[#c5a059]" />
              {COMPANY_DETAILS.bookingEmail}
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
