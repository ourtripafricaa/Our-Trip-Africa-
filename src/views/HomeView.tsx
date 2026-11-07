import React, { useEffect, useState } from 'react';
import { ArrowRight, Star, ShieldCheck, Compass, Heart, Users, MapPin, Sparkles, ChevronDown, CheckCircle2, MessageSquare, Mail, Globe, PlayCircle, Video, CalendarDays, Clock3, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS, LOCAL_IMAGES, SAFARI_PACKAGES, TESTIMONIALS, SAFARI_FAQS, SafariPackage } from '../data/safariData';
import { PackageCard } from '../components/PackageCard';
import { DualBookNow } from '../components/DualBookNow';
import { GuestReviews } from '../components/GuestReviews';
import { SpecialOffers } from '../components/SpecialOffers';

interface HomeViewProps {
  onNavigate: (view: string, extraParam?: string) => void;
  onSelectPackage: (pkg: SafariPackage) => void;
  onOpenBooking: (pkg?: SafariPackage) => void;
}

const TANZANIA_GALLERY = [
  {
    "name": "Lion — Serengeti",
    "file": "Serengeti National Park 08 - lion - Panthera leo.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Serengeti%20National%20Park%2008%20-%20lion%20-%20Panthera%20leo.jpg"
  },
  {
    "name": "Elephant — Serengeti",
    "file": "Serengeti National Park 09 - African elephant (Loxodonta).jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Serengeti%20National%20Park%2009%20-%20African%20elephant%20(Loxodonta).jpg"
  },
  {
    "name": "Giraffe — Serengeti",
    "file": "Serengeti National Park 13 - giraffe - Giraffa camelopardalis.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Serengeti%20National%20Park%2013%20-%20giraffe%20-%20Giraffa%20camelopardalis.jpg"
  },
  {
    "name": "Great Migration",
    "file": "Ngorongoro Conservation Area 07 - migration.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Ngorongoro%20Conservation%20Area%2007%20-%20migration.jpg"
  },
  {
    "name": "Leopard — Serengeti",
    "file": "Leopard tree Serengeti-1.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Leopard%20tree%20Serengeti-1.jpg"
  },
  {
    "name": "Ngorongoro Crater",
    "file": "Ngorongoro Crater Panorama.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Ngorongoro%20Crater%20Panorama.jpg"
  },
  {
    "name": "Mount Kilimanjaro",
    "file": "Mount Kilimanjaro,Moshi 1.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Kilimanjaro%2CMoshi%201.jpg"
  },
  {
    "name": "Zanzibar Dhow",
    "file": "Dhow boat Zanzibar.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Dhow%20boat%20Zanzibar.jpg"
  },
  {
    "name": "Safari Vehicle",
    "file": "Tanzania (Serengeti National Park) Safari vehicle (21113135729).jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tanzania%20(Serengeti%20National%20Park)%20Safari%20vehicle%20(21113135729).jpg"
  },
  {
    "name": "Zebra — Ngorongoro",
    "file": "NgoroNgoro Crater, Tanzania, Africa.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/NgoroNgoro%20Crater%2C%20Tanzania%2C%20Africa.jpg"
  },
  {
    "name": "Serengeti at Sunrise",
    "file": "004 Sunrise at Serengeti National Park Photo by Giles Laurent.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/004%20Sunrise%20at%20Serengeti%20National%20Park%20Photo%20by%20Giles%20Laurent.jpg"
  },
  {
    "name": "Tarangire Baobab Country",
    "file": "Baobab (Adansonia digitata), parque nacional de Tarangire, Tanzania, 2024-05-24, DD 78.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Baobab%20(Adansonia%20digitata)%2C%20parque%20nacional%20de%20Tarangire%2C%20Tanzania%2C%202024-05-24%2C%20DD%2078.jpg"
  },
  {
    "name": "Inside Ngorongoro Crater",
    "file": "Inside Ngorongoro crater.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Inside%20Ngorongoro%20crater.jpg"
  },
  {
    "name": "Nungwi Beach — Zanzibar",
    "file": "Nungwi Beach Zanzibar.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Nungwi%20Beach%20Zanzibar.jpg"
  },
  {
    "name": "Jambiani Seaweed Coast — Zanzibar",
    "file": "Harvesting seaweed in Jambiani.jpg",
    "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Harvesting%20seaweed%20in%20Jambiani.jpg"
  }
];

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectPackage,
  onOpenBooking,
}) => {
  const [filterDestination, setFilterDestination] = useState<string>('all');
  const [filterDuration, setFilterDuration] = useState<string>('all');
  const [filterTier, setFilterTier] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setGalleryIndex((current) => (current + 1) % TANZANIA_GALLERY.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  const featuredPackages = SAFARI_PACKAGES.filter((p) => p.featured).slice(0, 6);

  const safariFaqs = [
    { q: 'When is the best time to go on a Tanzania safari?', a: 'Tanzania offers rewarding safari experiences throughout the year. June to October is generally a popular dry-season period for wildlife viewing, while the green season brings lush scenery, birdlife and seasonal changes. The best dates depend on the parks and wildlife experiences you want.' },
    { q: 'How much does a safari cost per person?', a: 'The price depends on your destination, travel dates, group size, accommodation level and itinerary. Prices displayed on our package cards are per person and are based on a group of 6–21 travellers. Contact us for a tailored quotation if your group size or requirements are different.' },
    { q: 'What is included in the safari package price?', a: 'Each package lists its inclusions and exclusions. Depending on the itinerary, inclusions may cover a private 4x4 safari vehicle, professional English-speaking guide, park fees, accommodation, specified meals, drinking water, game drives, transfers and applicable government levies. Please check the individual package details before booking.' },
    { q: 'Are international flights included?', a: 'International flights are not included unless a package explicitly says otherwise. We can help discuss flight arrangements and airport transfers as part of your travel planning.' },
    { q: 'Can you customise a safari itinerary?', a: 'Yes. Tell us your preferred dates, destinations, trip length, interests and budget. Our team can help prepare a personalised itinerary and quotation, subject to availability.' },
    { q: 'How many people can join a group safari?', a: 'The displayed package prices are based on groups of 6–21 travellers. If you are travelling with fewer or more people, contact us so we can check the best arrangement and provide a suitable quote.' },
    { q: 'How do I book a safari with Our Trip Africa?', a: 'Choose a package and send a booking enquiry through the website, or contact us on WhatsApp. We will review your travel details, confirm availability and share the quotation and next booking steps. Sending an enquiry does not itself confirm a reservation.' },
    { q: 'Do I pay when I submit the website booking form?', a: 'No. The website form sends a booking enquiry; it does not take a card payment. Our team will contact you to confirm availability, provide the final quotation and explain the applicable payment arrangements.' },
    { q: 'Can I combine a wildlife safari with a Zanzibar beach holiday?', a: 'Yes. Many travellers combine northern Tanzania parks such as Serengeti and Ngorongoro with time in Zanzibar. We can help plan the route and timing around your interests and available flights.' },
    { q: 'Will I definitely see the Big Five or the Great Migration?', a: 'Wildlife moves freely in its natural habitat, so sightings cannot be guaranteed. Our guides use their local knowledge and current conditions to give you the best possible opportunities. Migration locations also change with the season.' },
    { q: 'What accommodation options are available?', a: 'Accommodation depends on the package and can vary by budget, mid-range or luxury level where those options are offered. Tell us your preferred comfort level and we will confirm the available choices for your dates.' },
    { q: 'Do I need a visa or travel vaccinations?', a: 'Entry and health requirements depend on your nationality, travel history and destinations. Please check official government and healthcare guidance before travelling. We can help point you towards the information you should verify, but requirements are the traveller’s responsibility.' },
    { q: 'Is airport pick-up and drop-off available?', a: 'Airport transfers are included where stated in the individual package itinerary. Share your arrival and departure flight details with our team so we can confirm the transfer arrangements.' },
    { q: 'Can you cater for vegetarian, vegan or other dietary needs?', a: 'Please tell us about dietary requirements or allergies when you enquire. We will check what can be arranged with the accommodation and service providers on your itinerary.' },
    { q: 'What should I pack for a safari?', a: 'Comfortable neutral-coloured clothing, a warm layer for cool mornings, a hat, sunglasses, sunscreen, personal medication and comfortable shoes are useful starting points. The exact packing list depends on the season and activities; we can advise once your itinerary is planned.' },
    { q: 'How soon will you reply to my enquiry?', a: 'Our team aims to provide a personalised travel solution within 24 hours. Response time can vary during busy periods, but you can also reach us directly on WhatsApp at +255 624 661 830.' }
  ];

  const handleSearch = () => {
    onNavigate('packages', filterDestination !== 'all' ? filterDestination : undefined);
  };

  return (
    <div className="space-y-20 pb-16 bg-[#faf9f5]">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Deep Emerald Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={LOCAL_IMAGES.hero}
            alt="African Safari Serengeti"
            className="w-full h-full object-cover object-center filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061d14] via-[#061d14]/65 to-[#061d14]/35" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#061d14]/40 to-[#061d14]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-28 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#061d14]/85 backdrop-blur-md border border-[#c5a059]/40 text-[#c5a059] text-xs font-semibold uppercase tracking-widest shadow-lg">
            <Sparkles size={13} />
            <span>Tanzania • Kenya • Uganda • Zanzibar • South Africa • UAE</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.15] text-balance">
            Discover the Untamed Wonder of East Africa
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed text-balance">
            Bespoke wildlife safaris, Mount Kilimanjaro expeditions, Zanzibar beach getaways, South Africa tours, and UAE desert adventures. Tailored for budget, mid-range, and luxury travelers by local specialists based in Arusha, Tanzania.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <DualBookNow
              size="lg"
              onOpenBookingModal={() => onOpenBooking()}
            />
            <button
              onClick={() => onNavigate('packages')}
              className="px-6 py-3.5 text-sm font-semibold rounded-xl bg-[#0e3022] hover:bg-[#154632] text-white border border-[#c5a059]/40 hover:border-[#c5a059] transition-all cursor-pointer whitespace-nowrap shadow-md"
            >
              Explore All {SAFARI_PACKAGES.length} Packages
            </button>
          </div>
        </div>
      </section>

      {/* 2. VALUE PROPOSITION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#0e3022] border border-[#1b4d38] p-6 rounded-3xl shadow-xl text-white">
          <div className="space-y-1 text-center sm:text-left">
            <span className="font-serif text-2xl font-bold text-[#c5a059] font-mono tabular-nums">
              15+ Years
            </span>
            <p className="text-xs font-semibold text-white">Direct Local Operator</p>
            <p className="text-[11px] text-slate-300">Based in Kisongo, Arusha</p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="font-serif text-2xl font-bold text-[#c5a059] font-mono tabular-nums">
              100% Private
            </span>
            <p className="text-xs font-semibold text-white">Custom 4x4 Land Cruisers</p>
            <p className="text-[11px] text-slate-300">Pop-up roofs & window seats</p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="font-serif text-2xl font-bold text-[#c5a059] font-mono tabular-nums">
              Budget • Luxury
            </span>
            <p className="text-xs font-semibold text-white">Transparent Pricing</p>
            <p className="text-[11px] text-slate-300">Clear inclusions & zero surprises</p>
          </div>

          <div className="space-y-1 text-center sm:text-left">
            <span className="font-serif text-2xl font-bold text-[#25D366] font-mono tabular-nums">
              24/7 Support
            </span>
            <p className="text-xs font-semibold text-white">WhatsApp & Emergency Care</p>
            <p className="text-[11px] text-slate-300">+255 624 661 830</p>
          </div>
        </div>
      </section>

      {/* 2.5 DREAM TRIP PLANNER / BUDGET CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-[#0e3022] rounded-3xl p-8 sm:p-12 border border-[#c5a059]/40 shadow-2xl text-white">
          <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#c5a059]/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-4xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-[#c5a059]/40 text-[#e4c681] text-xs font-bold uppercase tracking-[0.18em]">
              <Sparkles size={14} />
              Welcome to Our Trip Africa
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              YOUR AFRICAN ADVENTURE STARTS HERE
            </h2>
            <p className="text-base sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Feel at home as you explore the wonders of Tanzania, Kenya, Uganda, South Africa and Dubai. From breathtaking wildlife safaris to beautiful beach escapes and unforgettable cultural experiences, we turn your travel dreams into extraordinary memories.
            </p>

            <div className="pt-5 space-y-5">
              <div className="w-16 h-px bg-[#c5a059] mx-auto" />
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#e4c681]">
                LET'S PLAN YOUR DREAM JOURNEY
              </h3>
              <p className="text-lg sm:text-xl font-semibold text-white">
                Tell Us Your Budget – We'll Create the Perfect Experience!
              </p>
              <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
                Planning your African adventure should be exciting, not stressful. Simply tell us:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-left">
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 px-4 py-4">
                <CheckCircle2 className="text-[#c5a059] shrink-0" size={20} />
                <span className="text-sm font-medium">Your estimated travel budget</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 px-4 py-4">
                <CheckCircle2 className="text-[#c5a059] shrink-0" size={20} />
                <span className="text-sm font-medium">Your preferred travel dates</span>
              </div>
              <div className="flex items-center gap-3 rounded-2xl bg-white/10 border border-white/10 px-4 py-4">
                <CheckCircle2 className="text-[#c5a059] shrink-0" size={20} />
                <span className="text-sm font-medium">The number of travellers</span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Our experienced Arusha-based travel team will design a personalised holiday package tailored to your budget, interests and expectations — without compromising on quality or unforgettable experiences.
            </p>

            <p className="font-serif text-lg sm:text-xl font-bold tracking-wide text-[#e4c681]">
              YOUR DREAM. YOUR BUDGET. YOUR ADVENTURE.
            </p>
            <div className="space-y-3 pt-2">
              <p className="text-white font-semibold">Ready to begin?</p>
              <button onClick={() => onNavigate('contact')} className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#c5a059] hover:bg-[#d6b36d] text-[#061d14] font-extrabold rounded-xl text-sm sm:text-base transition-all shadow-lg hover:shadow-xl cursor-pointer">
                GET YOUR PERSONALIZED SAFARI QUOTE TODAY!
                <ArrowRight size={18} />
              </button>
              <p className="text-xs sm:text-sm text-slate-300">
                Contact Our Trip Africa and let us make your dream journey a reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DESTINATIONS SHOWCASE BENTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#c5a059]/50 bg-[#061d14] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[360px]">
            <div className="relative z-10 flex flex-col justify-center items-start px-7 py-10 sm:px-10 sm:py-14 lg:px-12">
              <span className="inline-flex items-center rounded-full border border-[#c5a059]/60 bg-[#c5a059]/10 px-4 py-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#e4c681]">
                Curated Destinations
              </span>
              <h2 className="mt-5 font-serif text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight text-white">
                DISCOVER THE ICONIC DESTINATIONS IN AFRICA AND UAE
              </h2>
              <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-200">
                From the great wildlife plains of East Africa to tropical island shores, mountain adventures and the remarkable cities of the UAE, discover journeys made unforgettable.
              </p>
              <button
                onClick={() => onNavigate('destinations')}
                className="mt-7 inline-flex items-center justify-center gap-3 rounded-xl bg-[#c5a059] px-7 py-4 text-sm font-extrabold text-[#061d14] shadow-lg transition-all hover:-translate-y-1 hover:bg-[#e4c681] cursor-pointer"
              >
                Explore All Destinations
                <ArrowRight size={18} />
              </button>
            </div>
            <div className="relative min-h-[260px] lg:min-h-full overflow-hidden">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/Elephant%20in%20the%20Savannah.jpg?width=1600"
                alt="African elephant in the Serengeti savannah, Tanzania"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#061d14] via-[#061d14]/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-[#061d14]/10" />
              <div className="absolute bottom-4 right-4 rounded-lg border border-white/20 bg-[#061d14]/80 px-3 py-2 text-[10px] text-white backdrop-blur-sm">
                Serengeti • African Elephant
                <span className="block text-[9px] text-slate-300">Photo: Eric Kilby • CC BY-SA 2.0</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Tanzania (Large Bento) */}
          <div
            onClick={() => onNavigate('tanzania')}
            className="md:col-span-8 group relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer border border-slate-200 hover:border-[#c5a059] transition-all duration-300 shadow-md"
          >
            <img
              src={LOCAL_IMAGES.lion}
              alt="Tanzania Safari Serengeti"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061d14] via-[#061d14]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="text-xs uppercase font-bold text-[#c5a059] tracking-wider">
                Premier Wildlife Kingdom
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                Tanzania Safaris & Kilimanjaro
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl line-clamp-2">
                The Great Wildebeest Migration, Ngorongoro Crater Big Five, Tarangire baobabs, and the snow-capped summit of Mount Kilimanjaro (5,895m).
              </p>
              <button
                type="button"
                onClick={(event) => { event.stopPropagation(); onNavigate('packages'); }}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#c5a059] px-4 py-2.5 text-[#061d14] font-bold text-xs shadow-lg hover:bg-[#d6b36d] transition-colors"
              >
                Explore Tanzania Packages
              </button>
            </div>
          </div>

          {/* Card 2: Zanzibar Beach */}
          <div
            onClick={() => onNavigate('zanzibar')}
            className="md:col-span-4 group relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer border border-slate-200 hover:border-[#c5a059] transition-all duration-300 shadow-md"
          >
            <img
              src={LOCAL_IMAGES.zanzibar}
              alt="Zanzibar Beach"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061d14] via-[#061d14]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
              <span className="text-xs uppercase font-bold text-[#c5a059] tracking-wider">
                Island Escape
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                Zanzibar Holidays
              </h3>
              <p className="text-xs text-slate-200 line-clamp-2">
                White-sand beaches of Nungwi, Safari Blue dhow cruises, and historic Stone Town spice alleys.
              </p>
              <button
                type="button"
                onClick={(event) => { event.stopPropagation(); onNavigate('packages'); }}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#c5a059] px-4 py-2.5 text-[#061d14] font-bold text-xs shadow-lg hover:bg-[#d6b36d] transition-colors"
              >
                Explore Zanzibar Packages
              </button>
            </div>
          </div>

          {/* Card 3: Kenya Safaris */}
          <div
            onClick={() => onNavigate('kenya')}
            className="md:col-span-4 group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer border border-slate-200 hover:border-[#c5a059] transition-all duration-300 shadow-md"
          >
            <img
              src={LOCAL_IMAGES.hero}
              alt="Kenya Maasai Mara"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061d14] via-[#061d14]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
              <span className="text-xs uppercase font-bold text-[#c5a059] tracking-wider">
                Big Five Territory
              </span>
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                Kenya Safaris (3 Packages)
              </h3>
              <p className="text-xs text-slate-200 line-clamp-2">
                Maasai Mara predator action, Amboseli giant tuskers beneath Kilimanjaro, and Tsavo red elephants.
              </p>
              <button
                type="button"
                onClick={(event) => { event.stopPropagation(); onNavigate('packages'); }}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#c5a059] px-4 py-2.5 text-[#061d14] font-bold text-xs shadow-lg hover:bg-[#d6b36d] transition-colors"
              >
                Explore Kenya Packages
              </button>
            </div>
          </div>

          {/* Card 4: Uganda Gorillas */}
          <div
            onClick={() => onNavigate('uganda')}
            className="md:col-span-4 group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer border border-slate-200 hover:border-[#c5a059] transition-all duration-300 shadow-md"
          >
            <img
              src={LOCAL_IMAGES.gorilla}
              alt="Uganda Mountain Gorilla"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061d14] via-[#061d14]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
              <span className="text-xs uppercase font-bold text-[#c5a059] tracking-wider">
                Primate Capital
              </span>
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                Uganda Mountain Gorillas
              </h3>
              <p className="text-xs text-slate-200 line-clamp-2">
                Bwindi Impenetrable Forest gorilla trekking, Kibale wild chimpanzees, and Kazinga Channel boat cruises.
              </p>
              <button
                type="button"
                onClick={(event) => { event.stopPropagation(); onNavigate('packages'); }}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#c5a059] px-4 py-2.5 text-[#061d14] font-bold text-xs shadow-lg hover:bg-[#d6b36d] transition-colors"
              >
                Explore Uganda Packages
              </button>
            </div>
          </div>

          {/* Card 5: South Africa */}
          <div
            onClick={() => onNavigate('south-africa')}
            className="md:col-span-4 group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer border border-slate-200 hover:border-[#c5a059] transition-all duration-300 shadow-md"
          >
            <img
              src={LOCAL_IMAGES.hero}
              alt="South Africa Kruger & Cape Town"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061d14] via-[#061d14]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-1.5">
              <span className="text-xs uppercase font-bold text-[#c5a059] tracking-wider">
                Rainbow Nation
              </span>
              <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                South Africa (3 Packages)
              </h3>
              <p className="text-xs text-slate-200 line-clamp-2">
                Greater Kruger Big 5 safaris, Cape Town Table Mountain, and picturesque Garden Route coastal road trips.
              </p>
              <button
                type="button"
                onClick={(event) => { event.stopPropagation(); onNavigate('packages'); }}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#c5a059] px-4 py-2.5 text-[#061d14] font-bold text-xs shadow-lg hover:bg-[#d6b36d] transition-colors"
              >
                Explore South Africa Packages
              </button>
            </div>
          </div>

          {/* Card 6: UAE Tours (Banner Width) */}
          <div
            onClick={() => onNavigate('uae')}
            className="md:col-span-12 group relative h-64 sm:h-72 rounded-3xl overflow-hidden cursor-pointer border border-slate-200 hover:border-[#c5a059] transition-all duration-300 shadow-md"
          >
            <img
              src={LOCAL_IMAGES.uaeDubai}
              alt="UAE Dubai & Desert Dunes"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061d14] via-[#061d14]/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-1.5">
                <span className="text-xs uppercase font-bold text-[#c5a059] tracking-wider">
                  Arabian Desert & Modern Marvels
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                  United Arab Emirates: Dubai & Abu Dhabi (2 Packages)
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 max-w-2xl">
                  Red dunes 4x4 desert safaris, sunset camel treks, Bedouin feasts under the stars, Burj Khalifa, and Sheikh Zayed Grand Mosque.
                </p>
              </div>
              <button
                type="button"
                onClick={(event) => { event.stopPropagation(); onNavigate('packages'); }}
                className="px-5 py-2.5 rounded-xl bg-[#c5a059] text-[#061d14] font-bold text-xs shrink-0 shadow hover:bg-[#d6b36d] transition-colors"
              >
                Explore UAE Packages
              </button>
            </div>
          {/* Card 7: Hadzabe Cultural Experience */}
          <div
            onClick={() => onNavigate('hadzabe')}
            className="md:col-span-12 group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer border border-slate-200 hover:border-[#c5a059] transition-all duration-300 shadow-md"
          >
            <img
              src={LOCAL_IMAGES.lakeEyasi}
              alt="Lake Eyasi cultural landscape and Hadzabe experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061d14] via-[#061d14]/55 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 space-y-2">
              <span className="text-xs uppercase font-bold text-[#c5a059] tracking-wider">Culture & Community • Lake Eyasi</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#c5a059] transition-colors">
                Hadzabe Cultural Experience
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-3xl">
                Discover the living knowledge, language and traditions of the Hadzabe through a respectful, locally guided visit arranged with community consent.
              </p>
              <button
                type="button"
                onClick={(event) => { event.stopPropagation(); onNavigate('packages'); }}
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-[#c5a059] px-4 py-2.5 text-[#061d14] font-bold text-xs shadow-lg hover:bg-[#d6b36d] transition-colors"
              >
                Explore Hadzabe Packages
              </button>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED PACKAGES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">
              Verified Itineraries
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 mt-1">
              Featured Safari & Holiday Packages
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('compare')}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-white hover:bg-slate-50 text-[#0e3022] border border-slate-300 shadow-sm cursor-pointer transition-colors"
            >
              Compare All Prices
            </button>
            <button
              onClick={() => onNavigate('packages')}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#0e3022] hover:bg-[#154632] text-white cursor-pointer font-bold shadow-sm transition-colors"
            >
              View All {SAFARI_PACKAGES.length} Packages
            </button>
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              packageItem={pkg}
              onSelect={onSelectPackage}
              onOpenBooking={onOpenBooking}
            />
          ))}
        </div>
      </section>

      {/* 5. SAFARI STYLES COMPARISON */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">
            Tailored To Your Style
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">
            Choose Your African Safari Comfort
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
          {/* Budget */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold text-[#0e3022]">Adventure Tier</span>
              <h3 className="font-serif text-2xl font-bold text-slate-900">Budget Camping</h3>
              <div className="text-3xl font-bold font-mono text-slate-900">
                $180 – $280 <span className="text-xs text-slate-500 font-normal">/ day</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sleep inside national parks in high-grade waterproof canvas tents. Includes private safari cook preparing hearty meals and your own private 4x4 Land Cruiser.
              </p>
            </div>
            <button onClick={() => onNavigate('packages')} className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold cursor-pointer transition-colors">
              Browse Budget Safaris
            </button>
          </div>

          {/* Mid-Range */}
          <div className="bg-[#0e3022] rounded-3xl p-6 sm:p-8 border-2 border-[#c5a059] flex flex-col justify-between space-y-6 relative shadow-2xl text-white">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#c5a059] text-[#061d14] text-[11px] font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow">
              Most Popular
            </div>
            <div className="space-y-4 pt-2">
              <span className="text-xs uppercase font-bold text-[#c5a059]">Comfort Tier</span>
              <h3 className="font-serif text-2xl font-bold text-white">Mid-Range Lodges</h3>
              <div className="text-3xl font-bold font-mono text-[#c5a059]">
                $350 – $550 <span className="text-xs text-slate-300 font-normal">/ day</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                The optimal balance of luxury and value. Stay in charming permanent safari lodges and luxury tented camps with en-suite bathrooms, hot showers, and swimming pools.
              </p>
            </div>
            <button onClick={() => onNavigate('packages')} className="w-full py-3 rounded-xl bg-[#c5a059] hover:bg-[#d6b36d] text-[#061d14] font-bold text-xs shadow-md cursor-pointer transition-colors">
              Browse Mid-Range Safaris
            </button>
          </div>
        </div>
            {/* 5.6 SLIDE GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">Visual Journey</span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">Experience Africa Through Our Gallery</h2>
          <p className="text-sm text-slate-600">A glimpse of the wildlife, landscapes and unforgettable places waiting to be explored.</p>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#061d14] border border-[#c5a059]/50 shadow-2xl">
          <div className="relative h-[300px] sm:h-[440px] lg:h-[540px]">
            {TANZANIA_GALLERY.map((photo, index) => (
              <div
                key={photo.name}
                className={`absolute inset-0 transition-opacity duration-700 ${galleryIndex === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                aria-hidden={galleryIndex !== index}
              >
                <img
                  src={photo.url}
                  alt={photo.name}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061d14]/90 via-[#061d14]/10 to-black/10" />
                <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-12 sm:right-12">
                  <span className="inline-flex rounded-full border border-[#e4c681]/60 bg-[#061d14]/70 px-3 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#e4c681] backdrop-blur">
                    Our Trip Africa • Visual Journey
                  </span>
                  <h3 className="mt-3 font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white">{photo.name}</h3>
                  <p className="mt-2 max-w-xl text-xs sm:text-sm text-slate-200">Discover the beauty, wildlife and spirit of Africa with journeys thoughtfully planned by our local team.</p>
                </div>
              </div>
            ))}

            <button
              type="button"
              onClick={() => setGalleryIndex((current) => (current - 1 + TANZANIA_GALLERY.length) % TANZANIA_GALLERY.length)}
              aria-label="Previous gallery image"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/40 bg-[#061d14]/70 text-white text-2xl backdrop-blur hover:bg-[#c5a059] hover:text-[#061d14] transition-colors"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => setGalleryIndex((current) => (current + 1) % TANZANIA_GALLERY.length)}
              aria-label="Next gallery image"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-white/40 bg-[#061d14]/70 text-white text-2xl backdrop-blur hover:bg-[#c5a059] hover:text-[#061d14] transition-colors"
            >
              ›
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-[#081a13] px-4 py-4 sm:px-7">
            <div className="flex items-center gap-2" aria-label="Choose gallery image">
              {TANZANIA_GALLERY.map((photo, index) => (
                <button
                  key={photo.name}
                  type="button"
                  onClick={() => setGalleryIndex(index)}
                  aria-label={`Show image ${index + 1}: ${photo.name}`}
                  aria-current={galleryIndex === index ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all ${galleryIndex === index ? 'w-8 bg-[#c5a059]' : 'w-2.5 bg-white/40 hover:bg-white/80'}`}
                />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-semibold tracking-wide text-[#e4c681]">
              {String(galleryIndex + 1).padStart(2, '0')} / {String(TANZANIA_GALLERY.length).padStart(2, '0')} • {TANZANIA_GALLERY[galleryIndex].name}
            </span>
          </div>
        </div>
        <p className="text-center text-[11px] text-slate-500">Selected photographs hosted by Wikimedia Commons. Image authorship and licence details are available on each original file page.</p>
        <div className="rounded-2xl border border-[#c5a059]/40 bg-[#0e3022] px-6 py-7 text-center text-white shadow-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e4c681]">Your adventure is one message away</p>
          <h3 className="mt-2 font-serif text-2xl sm:text-3xl font-bold">Seen a place you would love to visit?</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-200">Tell our Arusha team your travel dates, group size and budget. We will help you shape the right journey.</p>
          <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
            <button type="button" onClick={() => onOpenBooking()} className="rounded-xl bg-[#c5a059] px-7 py-3.5 text-sm font-extrabold text-[#061d14] shadow-lg hover:bg-[#e4c681] transition-colors">Enquire & Start Booking</button>
            <a href={COMPANY_DETAILS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/40 px-7 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors">Book on WhatsApp</a>
          </div>
        </div>
      </section></section>

      {/* Personalised safari planning and FAQ - placed immediately below the image slideshow */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="relative overflow-hidden rounded-[2rem] border-2 border-[#c5a059] bg-[#073b29] shadow-xl">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#c5a059]/25" />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 p-6 sm:p-9 lg:p-11 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#c5a059]/70 bg-[#c5a059]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e8c77f]"><Sparkles size={14} /> Your journey, your way</span>
              <h2 className="mt-5 text-3xl sm:text-4xl font-serif font-bold leading-tight text-white">Haven’t Found Your Perfect Safari Yet?</h2>
              <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-emerald-50/90">Tell us when you would like to travel and which destinations you dream of exploring. Whether it’s a wildlife safari, a Kilimanjaro climb, a Zanzibar escape or a multi-country adventure, our Arusha-based team will help shape the right experience for you.</p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <div className="flex items-center gap-3 rounded-xl border border-[#c5a059]/35 bg-white/5 px-4 py-3 text-sm text-white"><CalendarDays className="text-[#e8c77f]" size={19} /><span>Share your preferred travel dates</span></div>
                <div className="flex items-center gap-3 rounded-xl border border-[#c5a059]/35 bg-white/5 px-4 py-3 text-sm text-white"><MapPin className="text-[#e8c77f]" size={19} /><span>Choose your dream destinations</span></div>
              </div>
              <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#f0d48f]"><Clock3 size={18} /> A personalised travel solution within 24 hours.</p>
            </div>
            <div className="rounded-2xl border border-[#c5a059]/50 bg-[#0d5139] p-6 sm:p-7 shadow-lg">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#e8c77f]">Let’s plan something unforgettable</p>
              <h3 className="mt-3 text-2xl font-serif font-bold text-white">Your dream trip starts with a message.</h3>
              <p className="mt-3 text-sm leading-6 text-emerald-50/85">Send us your travel dates and preferred destinations. We’ll help you with an itinerary and a quotation tailored to your plans.</p>
              <a href="https://wa.me/255624661830?text=Hello%20Our%20Trip%20Africa!%20I%20would%20like%20help%20planning%20a%20safari%20or%20holiday.%20My%20preferred%20travel%20date%20is%3A%20_____.%20The%20destinations%20I%20am%20interested%20in%20are%3A%20_____.%20Please%20help%20me%20with%20a%20suitable%20itinerary%20and%20quotation." target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#c5a059] px-5 py-4 text-sm font-extrabold text-[#073b29] shadow-md transition hover:bg-[#e3c27b]"><MessageCircle size={19} /> PLAN MY SAFARI WITH US <ArrowRight size={18} /></a>
              <p className="mt-4 text-center text-xs text-emerald-100/75">WhatsApp: +255 624 661 830 · We’re here to help, 24/7.</p>
            </div>
          </div>
        </div>

        <div className="space-y-6 rounded-[2rem] border border-[#c5a059]/50 bg-white p-5 sm:p-8 lg:p-10 shadow-lg">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-[#0e3022]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#0e3022]">Travel with confidence</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-bold text-[#0e3022]">Safari Frequently Asked Questions</h2>
            <p className="mt-3 text-sm sm:text-base leading-7 text-slate-600">Find clear answers to common questions about safari prices, booking, travel seasons, accommodation and your journey with Our Trip Africa.</p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3">
            {safariFaqs.map((item, index) => (
              <details key={item.q} className="group overflow-hidden rounded-2xl border border-emerald-900/15 bg-[#fbfaf6] open:border-[#c5a059] open:bg-white">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 sm:px-5 text-left text-sm sm:text-base font-semibold text-[#0e3022] marker:content-none">
                  <span className="flex items-start gap-3"><span className="mt-0.5 text-xs font-bold text-[#b18a42]">{String(index + 1).padStart(2, '0')}</span>{item.q}</span>
                  <span className="shrink-0 text-xl leading-none text-[#b18a42] transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="border-t border-[#c5a059]/25 px-4 py-4 sm:px-5 text-sm leading-7 text-slate-600">{item.a}</div>
              </details>
            ))}
          </div>
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 rounded-2xl bg-[#073b29] p-5 sm:flex-row sm:px-7">
            <div><h3 className="font-serif text-xl font-bold text-white">Still have a question?</h3><p className="mt-1 text-sm text-emerald-50/85">Talk to our Arusha-based team and let’s plan your journey.</p></div>
            <a href="https://wa.me/255624661830" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c5a059] px-5 py-3 text-sm font-extrabold text-[#073b29] transition hover:bg-[#e3c27b] sm:w-auto"><MessageCircle size={18} /> ASK US ON WHATSAPP</a>
          </div>
        </div>
      </section>

      {/* SOCIAL VIDEO LINKS ON EVERY VIDEO CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-7">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0e3022]"><Video size={15}/> Watch • Follow • Explore</span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">Watch Our Trip Africa in Action</h2>
          <p className="text-sm text-slate-600">Choose a video category, then select your favourite social platform to watch more from Our Trip Africa.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Wildlife & Big Five Safaris', subtitle: 'Lions, elephants and the endless plains of Africa.', image: TANZANIA_GALLERY[0].url },
            { title: 'Zanzibar Island Escapes', subtitle: 'Turquoise water, white-sand beaches and island life.', image: LOCAL_IMAGES.zanzibar },
            { title: 'Kilimanjaro Adventures', subtitle: 'Mountain trails, breathtaking views and summit moments.', image: LOCAL_IMAGES.kilimanjaro },
            { title: 'Culture & Local Experiences', subtitle: 'Discover local communities, traditions and heritage.', image: LOCAL_IMAGES.lakeEyasi }
          ].map((item) => (
            <div key={item.title} className="overflow-hidden rounded-3xl border border-[#c5a059]/40 bg-white shadow-lg">
              <div className="relative h-48 sm:h-56 bg-[#061d14]">
                <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-[#061d14]/85 via-transparent to-transparent"/>
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-xs text-slate-200">{item.subtitle}</p>
                </div>
              </div>
              <div className="p-4 sm:p-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-600">Choose where to watch</p>
                <div className="grid grid-cols-2 gap-2">
                  <a href="https://www.facebook.com/ourtripafrica" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#1877F2] px-3 py-3 text-xs font-extrabold text-white shadow-sm transition hover:brightness-110">Watch on Facebook</a>
                  <a href="https://www.instagram.com/ourtripafricaa/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45] px-3 py-3 text-xs font-extrabold text-white shadow-sm transition hover:brightness-110">Watch on Instagram</a>
                  <a href="https://www.tiktok.com/@ourtripafrica" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#111111] px-3 py-3 text-xs font-extrabold text-white shadow-sm transition hover:bg-black">Watch on TikTok</a>
                  <a href="https://www.youtube.com/@ourtripafrica" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-[#FF0033] px-3 py-3 text-xs font-extrabold text-white shadow-sm transition hover:brightness-110">Watch on YouTube</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-500">Each video category offers all four official social links, so visitors can choose where they prefer to watch.</p>
      </section>

      <SpecialOffers onOpenBooking={() => onOpenBooking()} />

      <GuestReviews />

      {/* Customer Trust & Booking Confidence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#c5a059]/40 bg-[#0e3022] p-7 sm:p-10 text-white">
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#e4c681]">Travel With Confidence</span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold">Why Plan Your Journey With Our Trip Africa?</h2>
            <p className="text-sm text-slate-200">Clear communication, locally planned journeys and direct access to our Arusha-based team from your first enquiry to the end of your trip.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ['Local Arusha Team', 'Plan directly with a Tanzania-based safari operator.'],
              ['Tailor-Made Itineraries', 'Choose your dates, destinations, travel style and budget.'],
              ['Clear Package Details', 'Review the itinerary, inclusions and exclusions before confirming.'],
              ['Direct Guest Support', 'Reach our team by WhatsApp or email for trip planning assistance.']
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
                <ShieldCheck className="text-[#c5a059] mb-3" size={25}/>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-7 flex flex-col sm:flex-row justify-center gap-3">
            <button onClick={() => onOpenBooking()} className="rounded-xl bg-[#c5a059] px-6 py-3 text-sm font-bold text-[#061d14]">Start a Booking Enquiry</button>
            <a href={COMPANY_DETAILS.whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/30 px-6 py-3 text-center text-sm font-bold text-white">Chat With Our Team</a>
          </div>
        </div>
      </section>

      {/* 6. DIRECTOR SUMMARY (Replaced Highlighted Section) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <img src={COMPANY_DETAILS.director.photo} alt={COMPANY_DETAILS.director.name} className="w-40 h-40 rounded-full object-cover border-4 border-[#0e3022]/10" />
          <div className="flex-1 space-y-3">
            <h2 className="font-serif text-2xl font-bold text-slate-900">Meet Mr. James Felix</h2>
            <p className="text-sm text-slate-600">{COMPANY_DETAILS.director.quote}</p>
            <button onClick={() => onNavigate('about')} className="text-[#0e3022] font-semibold flex items-center gap-2 hover:text-[#c5a059] transition-colors cursor-pointer">
              Read Our Full Story <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
