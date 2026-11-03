import React, { useState } from 'react';
import { ArrowRight, Star, ShieldCheck, Compass, Heart, Users, MapPin, Sparkles, ChevronDown, CheckCircle2, MessageSquare, Mail, Globe } from 'lucide-react';
import { COMPANY_DETAILS, LOCAL_IMAGES, SAFARI_PACKAGES, TESTIMONIALS, SAFARI_FAQS, SafariPackage } from '../data/safariData';
import { PackageCard } from '../components/PackageCard';
import { DualBookNow } from '../components/DualBookNow';

interface HomeViewProps {
  onNavigate: (view: string, extraParam?: string) => void;
  onSelectPackage: (pkg: SafariPackage) => void;
  onOpenBooking: (pkg?: SafariPackage) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onSelectPackage,
  onOpenBooking,
}) => {
  const [filterDestination, setFilterDestination] = useState<string>('all');
  const [filterDuration, setFilterDuration] = useState<string>('all');
  const [filterTier, setFilterTier] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const featuredPackages = SAFARI_PACKAGES.filter((p) => p.featured).slice(0, 6);

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

      {/* 2.5 DON'T RUN OUT PLEASE TELL US YOUR BUDGET */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0e3022] rounded-3xl p-8 sm:p-10 border border-[#c5a059]/40 shadow-2xl text-center space-y-6 text-white">
          <p className="font-serif text-sm font-bold text-[#c5a059]">
            WARMLY WELCOME TO OUR TRIP AFRICA, FEEL FREE AS YOU ARE IN TANZANIA, KENYA, UGANDA, SOUTH AFRICA AND DUBAI, LET'S TURN YOUR DREAM INTO REALITY AND UNFORGETTABLE MEMORIES.
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
            DON'T RUN OUT<br />PLEASE TELL US YOUR BUDGET
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Planning your African safari shouldn't be stressful. Please share your estimated budget, your preferred travel dates, and the number of people in your group. Our Arusha team will expertly craft a perfect package that fits your specific needs without compromising on quality. Don't hesitate to contact us!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={() => onNavigate('contact')} className="px-6 py-3 bg-[#c5a059] hover:bg-[#d6b36d] text-[#061d14] font-bold rounded-xl text-sm transition-all shadow-md cursor-pointer">
              Share Your Budget & Requirements
            </button>
          </div>
        </div>
      </section>

      {/* 3. DESTINATIONS SHOWCASE BENTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">
              Curated Destinations
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900 mt-1">
              Iconic Safari & Travel Destinations
            </h2>
          </div>
          <button
            onClick={() => onNavigate('packages')}
            className="text-xs text-[#0e3022] hover:text-[#c5a059] flex items-center gap-1 font-semibold cursor-pointer transition-colors"
          >
            <span>View All Destinations</span>
            <ArrowRight size={14} />
          </button>
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
              <button className="px-5 py-2.5 rounded-xl bg-[#c5a059] text-[#061d14] font-bold text-xs shrink-0 shadow">
                Explore UAE Packages
              </button>
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
      </section>
      {/* 5.6 GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">Visual Journey</span>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-slate-900">Safari & Landscape Gallery</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img src="/assets/aistudio/Screenshot_20260929_194629_Gallery_51f1a0f7.jpg" alt="Zanzibar Beach" className="w-full h-64 object-cover rounded-3xl" />
            <img src={LOCAL_IMAGES.hero} alt="Safari Landscape" className="w-full h-64 object-cover rounded-3xl" />
            <img src={LOCAL_IMAGES.lion} alt="Wildlife" className="w-full h-64 object-cover rounded-3xl" />
            <img src={LOCAL_IMAGES.kilimanjaro} alt="Mount Kilimanjaro" className="w-full h-64 object-cover rounded-3xl" />
            <img src={LOCAL_IMAGES.gorilla} alt="Mountain Gorilla" className="w-full h-64 object-cover rounded-3xl" />
            <img src={LOCAL_IMAGES.uaeDubai} alt="UAE Desert" className="w-full h-64 object-cover rounded-3xl" />
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
