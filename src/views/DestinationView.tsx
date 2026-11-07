import React from 'react';
import { MapPin, CalendarDays, Compass, CheckCircle2, BookOpen, Users, ArrowRight } from 'lucide-react';
import { SAFARI_PACKAGES, SafariPackage } from '../data/safariData';
import { DESTINATION_STORIES } from '../data/destinationStories';
import { PackageCard } from '../components/PackageCard';
import { DualBookNow } from '../components/DualBookNow';

interface DestinationViewProps {
  country: 'Tanzania' | 'Kenya' | 'Uganda' | 'Zanzibar' | 'South Africa' | 'UAE' | 'Hadzabe';
  onSelectPackage: (pkg: SafariPackage) => void;
  onOpenBooking: (pkg?: SafariPackage) => void;
}

export const DestinationView: React.FC<DestinationViewProps> = ({ country, onSelectPackage, onOpenBooking }) => {
  const story = DESTINATION_STORIES[country];
  const packages = country === 'Hadzabe'
    ? SAFARI_PACKAGES.filter((p) => p.country === 'Tanzania' && /eyasi|hadzabe|cultural/i.test(p.title + ' ' + p.destination + ' ' + p.category))
    : SAFARI_PACKAGES.filter((p) => p.country === country);

  return (
    <div className="bg-[#faf9f5] text-slate-800">
      <section className="relative min-h-[480px] sm:min-h-[560px] flex items-center justify-center overflow-hidden">
        <img src={story.image} alt={story.title} className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061d14]/95 via-[#061d14]/70 to-[#061d14]/35" />
        <div className="relative z-10 max-w-7xl w-full mx-auto px-5 sm:px-8 py-20">
          <div className="max-w-3xl space-y-5">
            <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-[#e2bd78] font-bold">
              <MapPin size={15} /> {story.subtitle}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight text-white">{story.title}</h1>
            <p className="text-base sm:text-xl text-slate-100 leading-relaxed max-w-2xl">{story.introduction}</p>
            <div className="flex flex-wrap gap-3 pt-3">
              <button onClick={() => onOpenBooking()} className="inline-flex items-center gap-2 rounded-xl bg-[#c5a059] px-6 py-3 text-sm font-bold text-[#061d14] hover:bg-[#dfbd7a] transition-colors">
                Plan Your Journey <ArrowRight size={16} />
              </button>
              <a href="https://wa.me/255624661830" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/60 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Talk to Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-10 lg:gap-14">
          <article className="space-y-7">
            <div className="flex items-center gap-3 text-[#9b783e]">
              <BookOpen size={20} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">The destination story</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0e3022]">A journey worth discovering</h2>
            {story.story.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-8 text-slate-600">{paragraph}</p>
            ))}
          </article>

          <aside className="space-y-5">
            <div className="rounded-3xl bg-[#0e3022] p-6 sm:p-7 text-white shadow-xl">
              <div className="flex items-center gap-2 text-[#d7b36e] mb-4">
                <CalendarDays size={18} />
                <span className="text-xs font-bold uppercase tracking-widest">When to visit</span>
              </div>
              <p className="text-sm leading-7 text-slate-100">{story.bestTime}</p>
              <div className="h-px bg-white/15 my-5" />
              <p className="text-xs uppercase tracking-widest font-bold text-[#d7b36e] mb-2">Travel advice</p>
              <p className="text-sm leading-7 text-slate-200">{story.travelNote}</p>
              <div className="mt-6"><DualBookNow size="sm" onOpenBookingModal={() => onOpenBooking()} /></div>
            </div>
            <div className="rounded-3xl border border-[#e8dfcf] bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2 text-[#9b783e] mb-4">
                <Compass size={18} />
                <h3 className="font-serif text-xl font-bold text-[#0e3022]">Signature experiences</h3>
              </div>
              <ul className="space-y-3">
                {story.experiences.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-slate-600">
                    <CheckCircle2 size={16} className="mt-1 shrink-0 text-[#b18b4d}" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f0ede5] py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-7">
            <MapPin className="text-[#a98243]" />
            <div>
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#9b783e]">Places and highlights</p>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0e3022]">What makes this destination special</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {story.highlights.map((item, index) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-sm border border-[#e8dfcf]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0e3022] text-xs font-bold text-[#e2bd78]">{String(index + 1).padStart(2, '0')}</span>
                <p className="text-sm leading-6 font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {packages.length > 0 ? (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#9b783e]">Handpicked journeys</p>
            <h2 className="font-serif text-3xl font-bold text-[#0e3022] mt-2">{story.country} tour packages</h2>
            <p className="text-sm text-slate-500 mt-2">Explore available journeys or ask us to create a private itinerary around your dates and budget.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => <PackageCard key={pkg.id} packageItem={pkg} onSelect={onSelectPackage} onOpenBooking={onOpenBooking} />)}
          </div>
        </section>
      ) : (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 text-center">
          <Users size={30} className="mx-auto text-[#a98243] mb-4" />
          <h2 className="font-serif text-3xl font-bold text-[#0e3022]">Create a meaningful {story.country.toLowerCase()} experience</h2>
          <p className="text-slate-600 leading-7 max-w-2xl mx-auto mt-3">This experience is arranged individually with local hosts and guides. Contact our team for current availability, respectful visit arrangements and a tailor-made itinerary.</p>
          <button onClick={() => onOpenBooking()} className="mt-6 rounded-xl bg-[#0e3022] px-7 py-3 font-bold text-white hover:bg-[#174832]">Enquire About This Experience</button>
        </section>
      )}
    </div>
  );
};
