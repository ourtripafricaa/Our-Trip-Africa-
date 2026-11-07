import React from 'react';
import { ArrowRight, CalendarDays, CheckCircle2, Compass, MapPin, Users } from 'lucide-react';
import { DESTINATION_STORIES, DestinationStory } from '../data/destinationStories';

interface DestinationsViewProps {
  onNavigate: (view: string) => void;
}

const DESTINATION_ROUTES: Record<string, string> = {
  Tanzania: 'tanzania',
  Zanzibar: 'zanzibar',
  Kenya: 'kenya',
  Uganda: 'uganda',
  'South Africa': 'south-africa',
  UAE: 'uae',
  Hadzabe: 'hadzabe',
};

const DestinationSection: React.FC<{
  story: DestinationStory;
  route: string;
  index: number;
  onNavigate: (view: string) => void;
}> = ({ story, route, index, onNavigate }) => (
  <section id={route} className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-[#e8dfcf] bg-white shadow-sm">
    <div className="relative min-h-[260px] sm:min-h-[330px]">
      <img src={story.image} alt={story.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061d14]/95 via-[#061d14]/75 to-[#061d14]/20" />
      <div className="relative z-10 flex min-h-[260px] sm:min-h-[330px] items-end p-6 sm:p-10">
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e2bd78]">
            <MapPin size={15} /> Destination {String(index + 1).padStart(2, '0')} · {story.subtitle}
          </span>
          <h2 className="font-serif text-3xl font-bold leading-tight text-white sm:text-5xl">{story.title}</h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-100 sm:text-base">{story.introduction}</p>
          <button onClick={() => onNavigate(route)} className="inline-flex items-center gap-2 rounded-xl bg-[#c5a059] px-5 py-3 text-sm font-extrabold text-[#061d14] shadow-lg transition hover:bg-[#dfbd7a]">
            Explore destination <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>

    <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[minmax(0,1fr)_300px]">
      <article className="space-y-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b783e]">Discover the destination</p>
          <h3 className="mt-2 font-serif text-2xl font-bold text-[#0e3022]">The story, landscapes & experiences</h3>
        </div>
        {story.story.map((paragraph, paragraphIndex) => (
          <p key={paragraphIndex} className="text-sm leading-8 text-slate-600 sm:text-base">{paragraph}</p>
        ))}
      </article>
      <aside className="space-y-4">
        <div className="rounded-2xl bg-[#0e3022] p-5 text-white">
          <div className="mb-3 flex items-center gap-2 text-[#e2bd78]"><CalendarDays size={18} /><span className="text-xs font-bold uppercase tracking-widest">Best time to visit</span></div>
          <p className="text-sm leading-7 text-slate-100">{story.bestTime}</p>
          <div className="my-4 h-px bg-white/15" />
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#e2bd78]">Travel advice</p>
          <p className="text-sm leading-7 text-slate-200">{story.travelNote}</p>
        </div>
        <div className="rounded-2xl border border-[#e8dfcf] bg-[#faf9f5] p-5">
          <div className="mb-3 flex items-center gap-2 text-[#9b783e]"><Compass size={18} /><h4 className="font-serif text-lg font-bold text-[#0e3022]">Signature experiences</h4></div>
          <ul className="space-y-2.5">
            {story.experiences.map((experience) => <li key={experience} className="flex gap-2 text-sm leading-6 text-slate-600"><CheckCircle2 size={15} className="mt-1 shrink-0 text-[#b18b4d]" />{experience}</li>)}
          </ul>
        </div>
      </aside>
    </div>

    <div className="border-t border-[#eee7da] bg-[#faf9f5] p-5 sm:p-8">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b783e]">Places to explore</p>
        <h3 className="mt-2 font-serif text-2xl font-bold text-[#0e3022]">National Parks, Mountains & Iconic Attractions</h3>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">Discover the parks, mountains, coastlines, heritage sites and natural landmarks that make {story.country} special.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {story.places.map((place, placeIndex) => (
          <article key={place.name} className="rounded-2xl border border-[#e8dfcf] bg-white p-5">
            <div className="mb-3 flex items-center justify-between gap-2">
              <span className="rounded-full bg-[#edf3ee] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#24563d]">{place.type}</span>
              <span className="text-xs font-bold tracking-widest text-[#b18b4d]">{String(placeIndex + 1).padStart(2, '0')}</span>
            </div>
            <h4 className="mb-2 font-serif text-lg font-bold text-[#0e3022]">{place.name}</h4>
            <p className="text-sm leading-7 text-slate-600">{place.description}</p>
          </article>
        ))}
      </div>
    </div>

    {story.culture.length > 0 && (
      <div className="bg-[#0e3022] p-5 sm:p-8">
        <div className="mb-5 flex items-center gap-2 text-[#e2bd78]"><Users size={19} /><span className="text-xs font-bold uppercase tracking-[0.2em]">People, heritage & living traditions</span></div>
        <h3 className="mb-5 font-serif text-2xl font-bold text-white">Culture & Community Experiences</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {story.culture.map((item) => (
            <article key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <h4 className="mb-2 font-serif text-lg font-bold text-[#e2bd78]">{item.title}</h4>
              <p className="text-sm leading-7 text-slate-200">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    )}

    <div className="flex flex-col gap-5 p-5 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b783e]">Make it your journey</p>
        <h3 className="mt-1 font-serif text-2xl font-bold text-[#0e3022]">Explore {story.country} with Our Trip Africa</h3>
        <p className="mt-2 text-sm leading-7 text-slate-600">{story.highlights.join(' · ')}</p>
      </div>
      <button onClick={() => onNavigate(route)} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0e3022] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#1b4d38]">
        Explore destination <ArrowRight size={16} />
      </button>
    </div>
  </section>
);

export const DestinationsView: React.FC<DestinationsViewProps> = ({ onNavigate }) => {
  const destinations = Object.entries(DESTINATION_STORIES)
    .filter(([name]) => Boolean(DESTINATION_ROUTES[name]))
    .map(([name, story]) => ({ name, story, route: DESTINATION_ROUTES[name] }));

  return (
    <main className="bg-[#faf9f5] pb-16 text-slate-800">
      <section className="relative overflow-hidden bg-[#061d14] py-16 sm:py-24">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, #c5a059 0, transparent 35%), radial-gradient(circle at 80% 70%, #1b6847 0, transparent 40%)' }} />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-flex rounded-full border border-[#c5a059]/40 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#e2bd78]">Our Trip Africa · Discover · Explore · Enjoy</span>
          <h1 className="mx-auto mt-6 max-w-5xl font-serif text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">DISCOVER THE ICONIC DESTINATIONS IN AFRICA AND UAE</h1>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">Explore Tanzania, Zanzibar, Kenya, Uganda, South Africa, the United Arab Emirates and the Hadzabe cultural experience. Read destination stories, discover national parks and mountains, learn about local cultures and choose where your next journey begins.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {destinations.map(({ name, route }) => <a key={name} href={`#${route}`} className="rounded-full border border-white/20 px-4 py-2 text-xs font-semibold text-white transition hover:border-[#c5a059] hover:text-[#e2bd78]">{name}</a>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9b783e]">Every destination, one place</p>
          <h2 className="mt-2 font-serif text-3xl font-bold text-[#0e3022] sm:text-4xl">Explore Our Destinations</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">All destination information is displayed below on this page—no downloads required. Use each Explore destination button to open its dedicated travel guide and available packages.</p>
        </div>
        {destinations.map(({ story, route }, index) => (
          <DestinationSection key={story.country} story={story} route={route} index={index} onNavigate={onNavigate} />
        ))}
      </section>
    </main>
  );
};
