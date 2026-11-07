import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Search, Filter, ArrowUpDown, LayoutGrid, Table, SlidersHorizontal, Sparkles, CalendarDays, MapPin, Clock3, MessageCircle, ArrowRight } from 'lucide-react';
import { SAFARI_PACKAGES, SafariPackage } from '../data/safariData';
import { PackageCard } from '../components/PackageCard';
import { PackageComparison } from '../components/PackageComparison';

interface PackagesViewProps {
  initialFilter?: string;
  onSelectPackage: (pkg: SafariPackage) => void;
  onOpenBooking: (pkg?: SafariPackage) => void;
}

export const PackagesView: React.FC<PackagesViewProps> = ({
  initialFilter,
  onSelectPackage,
  onOpenBooking,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [livePackages, setLivePackages] = useState<SafariPackage[]>([]);
  const [packagesLoaded, setPackagesLoaded] = useState(false);

  // Merge administrator-managed Firestore packages with the built-in catalogue.
  // Firestore records override static records with the same slug or id.
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'packages'), snapshot => {
      setLivePackages(snapshot.docs.map(item => ({ ...item.data(), id: item.data().id || item.id } as SafariPackage)));
      setPackagesLoaded(true);
    }, error => {
      console.error('Live packages could not be loaded; showing built-in catalogue:', error);
      setPackagesLoaded(true);
    });
    return () => unsubscribe();
  }, []);

  const packageMap = new Map<string, SafariPackage>();
  SAFARI_PACKAGES.forEach(pkg => packageMap.set(pkg.slug || pkg.id, pkg));
  livePackages.forEach(pkg => packageMap.set(pkg.slug || pkg.id, { ...(packageMap.get(pkg.slug || pkg.id) || {} as SafariPackage), ...pkg }));
  const allPackages = Array.from(packageMap.values());
  const [selectedCountry, setSelectedCountry] = useState<string>(initialFilter || 'all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhysical, setSelectedPhysical] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'duration'>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'comparison'>('grid');

  // Publish structured package information so search engines can better understand this catalog.
  useEffect(() => {
    const scriptId = 'our-trip-africa-package-list-schema';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Our Trip Africa Safari and Holiday Packages',
      description: 'Tanzania, Kenya, Uganda, Zanzibar, South Africa and Dubai safari and holiday packages by Our Trip Africa.',
      numberOfItems: allPackages.length,
      itemListElement: allPackages.map((pkg, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'TouristTrip',
          name: pkg.seoTitle || pkg.title,
          description: pkg.seoDescription || pkg.overview,
          touristType: pkg.seoKeywords || [pkg.country, pkg.category],
          url: 'https://ourtripafrica.com/#packages-' + pkg.slug
        }
      }))
    });
    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, []);

  const filteredPackages = allPackages.filter((pkg) => {
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      const match =
        String(pkg.title || '').toLowerCase().includes(term) ||
        String(pkg.destination || '').toLowerCase().includes(term) ||
        String(pkg.overview || '').toLowerCase().includes(term) ||
        (pkg.highlights || []).some((h) => String(h).toLowerCase().includes(term));
      if (!match) return false;
    }
    if (selectedCountry !== 'all' && pkg.country.toLowerCase() !== selectedCountry.toLowerCase()) return false;
    if (selectedCategory !== 'all' && pkg.category.toLowerCase() !== selectedCategory.toLowerCase()) return false;
    if (selectedPhysical !== 'all' && pkg.physicalRating.toLowerCase() !== selectedPhysical.toLowerCase()) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-asc') return a.basePrice - b.basePrice;
    if (sortBy === 'price-desc') return b.basePrice - a.basePrice;
    if (sortBy === 'duration') return a.durationDays - b.durationDays;
    return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
  });


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

  const enquiryMessage = encodeURIComponent("Hello Our Trip Africa! I would like help planning a safari or holiday. My preferred travel date is: _____. The destinations I am interested in are: _____. Please help me with a suitable itinerary and quotation.");
  const whatsappLink = `https://wa.me/255624661830?text=${enquiryMessage}`;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-[#faf9f5]">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#0e3022]">Complete Safari & Holiday Catalog</span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 mt-1">All Safari & Holiday Packages ({allPackages.length})</h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Explore Tanzania safari packages, Kenya wildlife tours, Uganda gorilla trekking, Zanzibar beach holidays, South Africa safari tours and Dubai holiday packages. Compare budget, mid-range and luxury trips with Our Trip Africa, your local travel team in Arusha, Tanzania.
          </p>
        </div>
        <div className="flex items-center gap-1 bg-white p-1 rounded-2xl border border-slate-200 shadow-sm shrink-0">
          <button onClick={() => setViewMode('grid')} className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${viewMode === 'grid' ? 'bg-[#0e3022] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>
            <LayoutGrid size={14} /><span>Cards Grid</span>
          </button>
          <button onClick={() => setViewMode('comparison')} className={`px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${viewMode === 'comparison' ? 'bg-[#0e3022] text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}>
            <Table size={14} /><span>Price Comparison</span>
          </button>
        </div>
      </div>

      {!packagesLoaded && <p className="text-xs text-slate-500">Loading latest package updates…</p>}
      {viewMode === 'comparison' ? (
        <PackageComparison packages={allPackages} onSelectPackage={onSelectPackage} onOpenBooking={onOpenBooking} />
      ) : (
        <>
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="relative">
                <Search size={15} className="absolute left-3.5 top-3.5 text-slate-400" />
                <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search parks, migration, gorillas..." className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl pl-9 pr-3 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors" />
              </div>
              <div>
                <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)} className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors">
                  <option value="all">All Destinations</option><option value="Tanzania">Tanzania</option><option value="Kenya">Kenya (3 Packages)</option><option value="Uganda">Uganda (2 Packages)</option><option value="Zanzibar">Zanzibar Island</option><option value="South Africa">South Africa (3 Packages)</option><option value="UAE">UAE (2 Packages)</option>
                </select>
              </div>
              <div>
                <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors">
                  <option value="all">All Categories</option><option value="Wildlife Safari">Wildlife Safari</option><option value="Mountain Trek">Mountain Trek (Kilimanjaro)</option><option value="Beach Holiday">Beach Holiday (Zanzibar)</option><option value="Cultural Safari">Cultural Safari</option><option value="Grand Circuit">Grand Circuit (8–14 Days)</option><option value="City & Desert Tour">City & Desert Tour (UAE)</option>
                </select>
              </div>
              <div>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="w-full bg-slate-50 text-slate-900 text-xs rounded-xl px-3 py-2.5 border border-slate-200 focus:outline-none focus:border-[#0e3022] focus:bg-white transition-colors">
                  <option value="featured">Featured First</option><option value="price-asc">Price: Low to High</option><option value="price-desc">Price: High to Low</option><option value="duration">Duration (Days)</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
              <span>Showing <strong className="text-slate-900">{filteredPackages.length}</strong> of <strong className="text-slate-900">{allPackages.length}</strong> packages</span>
              {(searchTerm || selectedCountry !== 'all' || selectedCategory !== 'all') && (
                <button onClick={() => { setSearchTerm(''); setSelectedCountry('all'); setSelectedCategory('all'); setSelectedPhysical('all'); }} className="text-[#0e3022] font-semibold hover:underline cursor-pointer">Reset Filters</button>
              )}
            </div>
          </div>
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPackages.map((pkg) => <PackageCard key={pkg.id} packageItem={pkg} onSelect={onSelectPackage} onOpenBooking={onOpenBooking} />)}
            </div>
          ) : (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-4">
              <p className="text-slate-600 text-sm">No packages matched your filter criteria.</p>
              <button onClick={() => { setSearchTerm(''); setSelectedCountry('all'); setSelectedCategory('all'); setSelectedPhysical('all'); }} className="px-4 py-2 rounded-xl bg-[#0e3022] text-white text-xs font-semibold cursor-pointer">Clear All Filters</button>
            </div>
          )}
        </>
      )}

      {/* Personalised travel-planning callout below the complete package catalogue */}
      <section className="relative overflow-hidden rounded-[2rem] border-2 border-[#c5a059] bg-[#073b29] shadow-xl">
        <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-[#c5a059]/25" />
        <div className="absolute -right-5 -bottom-24 h-64 w-64 rounded-full border border-[#c5a059]/20" />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 p-6 sm:p-9 lg:p-11 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#c5a059]/70 bg-[#c5a059]/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#e8c77f]">
              <Sparkles size={14} /> Your journey, your way
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-serif font-bold leading-tight text-white">
              Haven’t Found Your Perfect Safari Yet?
            </h2>
            <p className="mt-4 max-w-2xl text-sm sm:text-base leading-7 text-emerald-50/90">
              Tell us when you would like to travel and which destinations you dream of exploring. Whether it’s a wildlife safari, a Kilimanjaro climb, a Zanzibar escape or a multi-country adventure, our Arusha-based team will help shape the right experience for you.
            </p>
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
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#c5a059] px-5 py-4 text-sm font-extrabold text-[#073b29] shadow-md transition hover:bg-[#e3c27b]">
              <MessageCircle size={19} /> PLAN MY SAFARI WITH US <ArrowRight size={18} />
            </a>
            <p className="mt-4 text-center text-xs text-emerald-100/75">WhatsApp: +255 624 661 830 · We’re here to help, 24/7.</p>
          </div>
        </div>
      </section>

      {/* Frequently asked safari questions - visible directly on the packages page */}
      <section className="space-y-6 rounded-[2rem] border border-[#c5a059]/50 bg-white p-5 sm:p-8 lg:p-10 shadow-lg">
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
          <div>
            <h3 className="font-serif text-xl font-bold text-white">Still have a question?</h3>
            <p className="mt-1 text-sm text-emerald-50/85">Talk to our Arusha-based team and let’s plan your journey.</p>
          </div>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c5a059] px-5 py-3 text-sm font-extrabold text-[#073b29] transition hover:bg-[#e3c27b] sm:w-auto">
            <MessageCircle size={18} /> ASK US ON WHATSAPP
          </a>
        </div>
      </section>
    </div>
  );
};
