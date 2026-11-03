import React from 'react';
import { MapPin, Calendar, Compass, Star, CheckCircle2, Sparkles } from 'lucide-react';
import { SAFARI_PACKAGES, SafariPackage, LOCAL_IMAGES } from '../data/safariData';
import { PackageCard } from '../components/PackageCard';
import { DualBookNow } from '../components/DualBookNow';

interface DestinationViewProps {
  country: 'Tanzania' | 'Kenya' | 'Uganda' | 'Zanzibar' | 'South Africa' | 'UAE';
  onSelectPackage: (pkg: SafariPackage) => void;
  onOpenBooking: (pkg?: SafariPackage) => void;
}

export const DestinationView: React.FC<DestinationViewProps> = ({
  country,
  onSelectPackage,
  onOpenBooking,
}) => {
  const destinationMeta: Record<
    'Tanzania' | 'Kenya' | 'Uganda' | 'Zanzibar' | 'South Africa' | 'UAE',
    {
      title: string;
      subtitle: string;
      image: string;
      description: string;
      bestMonths: string;
      parks: string[];
    }
  > = {
    Tanzania: {
      title: 'Tanzania Wildlife Safaris & Kilimanjaro',
      subtitle: 'The Crown Jewel of African Safaris',
      image: LOCAL_IMAGES.lion,
      description:
        'Home to the iconic Serengeti endless plains, the primordial caldera of Ngorongoro Crater, the elephant haven of Tarangire, and the snow-capped peak of Mount Kilimanjaro (5,895m). Tanzania offers the highest wildlife density and most dramatic predator spectacles on Earth.',
      bestMonths: 'June – October (Dry season & River crossings) and January – March (Calving season)',
      parks: [
        'Serengeti National Park',
        'Ngorongoro Conservation Area',
        'Mount Kilimanjaro (Machame & Marangu Routes)',
        'Tarangire National Park',
        'Lake Manyara National Park',
        'Lake Eyasi (Hadzabe & Datoga Tribes)',
      ],
    },
    Kenya: {
      title: 'Kenya Wildlife Safaris',
      subtitle: 'Legendary Savannahs & The Big Five',
      image: LOCAL_IMAGES.hero,
      description:
        'Witness the heart-pounding predator action of the Maasai Mara, home to the Great Migration and dense lion prides. Stand in awe of Amboseli’s giant tusker elephants beneath the majestic backdrop of Mount Kilimanjaro, and discover the red elephants of Tsavo.',
      bestMonths: 'July – October (Great Migration) and Year-Round for Big Five game drives',
      parks: [
        'Maasai Mara National Reserve',
        'Amboseli National Park',
        'Tsavo West & Tsavo East National Parks',
        'Lake Nakuru Rhino Sanctuary',
        'Great Rift Valley Viewpoints',
        'Traditional Maasai Manyattas',
      ],
    },
    Uganda: {
      title: 'Uganda Gorilla Treks & Primates',
      subtitle: 'The Pearl of Africa',
      image: LOCAL_IMAGES.gorilla,
      description:
        'Immerse yourself in prehistoric rainforests for an intimate face-to-face encounter with wild endangered mountain gorillas in Bwindi Impenetrable Forest. Track wild chimpanzees through Kibale Forest, spot tree-climbing lions in Ishasha, and cruise among thousands of hippos on the Kazinga Channel.',
      bestMonths: 'June – September & December – February (Dry trekking conditions)',
      parks: [
        'Bwindi Impenetrable National Park (Gorillas)',
        'Kibale Forest National Park (Chimpanzees)',
        'Queen Elizabeth National Park',
        'Kazinga Channel Boat Safari',
        'Lake Bunyonyi',
      ],
    },
    Zanzibar: {
      title: 'Zanzibar Beach Holidays & Spice Islands',
      subtitle: 'Turquoise Waters, White Sands & Swahili Heritage',
      image: LOCAL_IMAGES.zanzibar,
      description:
        'Bask on pristine, non-tidal white sand beaches in Nungwi and Kendwa. Wander the enchanting labyrinth of UNESCO Stone Town, savor freshly harvested cloves and cinnamon on organic spice tours, and sail on handcrafted wooden dhows for fresh seafood sandbank barbecues.',
      bestMonths: 'Year-Round (Except heavy rains in April – May)',
      parks: [
        'Nungwi & Kendwa Beachfronts',
        'Stone Town UNESCO Historical Quarter',
        'Safari Blue Marine Reserve (Menai Bay)',
        'Prison Island (Aldabra Giant Tortoises)',
        'Jozani Forest (Red Colobus Monkeys)',
      ],
    },
    'South Africa': {
      title: 'South Africa Safaris, Cape Town & Garden Route',
      subtitle: 'A World in One Country • Big Five & Coastal Splendor',
      image: LOCAL_IMAGES.hero,
      description:
        'From the world-renowned Big Five game reserves of Greater Kruger to the dramatic coastal scenery of Cape Town, Table Mountain, and the scenic Garden Route. Experience open-vehicle 4x4 safaris, world-class culinary wine estates in Stellenbosch, and penguin colonies at Boulders Beach.',
      bestMonths: 'May – September (Kruger dry season wildlife viewing) & November – March (Cape Town sunny summer)',
      parks: [
        'Greater Kruger National Park',
        'Cape Town & Table Mountain Cableway',
        'Garden Route & Tsitsikamma Forest',
        'Cape Winelands (Stellenbosch)',
        'Boulders Beach African Penguin Colony',
        'Cape of Good Hope & Chapman’s Peak',
      ],
    },
    UAE: {
      title: 'United Arab Emirates: Dubai & Abu Dhabi Adventures',
      subtitle: 'Arabian Desert Dunes & Futuristic Marvels',
      image: LOCAL_IMAGES.uaeDubai,
      description:
        'Experience the thrilling contrast between ancient Bedouin desert traditions and ultra-modern architecture. Enjoy exhilarating 4x4 red dune bashing in Lahbab, sunset camel rides, live Arabian cultural shows with barbecue dinners, Burj Khalifa vistas, and the magnificent Sheikh Zayed Grand Mosque.',
      bestMonths: 'October – April (Pleasant winter sunshine and cool desert evenings)',
      parks: [
        'Lahbab Red Dunes Desert Safari Camp',
        'Burj Khalifa & The Dubai Mall',
        'Sheikh Zayed Grand Mosque (Abu Dhabi)',
        'Dubai Creek & Traditional Gold Souks',
        'Louvre Abu Dhabi Museum Island',
        'Dubai Marina Luxury Dhow Dinner Cruise',
      ],
    },
  };

  const meta = destinationMeta[country];
  const packages = SAFARI_PACKAGES.filter((p) => p.country === country);

  return (
    <div className="space-y-12 pb-16 bg-[#faf9f5]">
      {/* Destination Hero Banner */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <img
          src={meta.image}
          alt={meta.title}
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061d14] via-[#061d14]/65 to-[#061d14]/30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#c5a059] bg-[#061d14]/90 px-4 py-1.5 rounded-full border border-[#c5a059]/40 shadow-lg">
            {meta.subtitle}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
            {meta.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {meta.description}
          </p>
        </div>
      </section>

      {/* Highlights & Best Season Info Strip (Deep Emerald & Crisp White) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0e3022] rounded-3xl p-6 sm:p-8 border border-[#1b4d38] shadow-lg text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <span className="text-xs uppercase font-semibold text-[#c5a059] tracking-wider">
              Featured Highlights
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Key Attractions & Parks Included
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-200 pt-1">
              {meta.parks.map((park, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-[#c5a059] shrink-0" />
                  <span>{park}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#061d14] p-5 sm:p-6 rounded-2xl border border-[#1b4d38] space-y-3">
            <span className="text-xs uppercase font-semibold text-[#c5a059] tracking-wider">
              Travel Planning Advice
            </span>
            <div className="space-y-2 text-xs text-slate-200">
              <p>
                <strong className="text-white">Best Travel Months:</strong> {meta.bestMonths}
              </p>
              <p>
                <strong className="text-white">Transport:</strong> Private 4x4 pop-up roof safari vehicle with window seats or executive air-conditioned touring vehicle.
              </p>
              <p>
                <strong className="text-white">Tiers Available:</strong> Budget, Mid-range Lodge, Luxury Tented Suites.
              </p>
            </div>
            <div className="pt-2">
              <DualBookNow size="sm" onOpenBookingModal={() => onOpenBooking()} />
            </div>
          </div>
        </div>
      </section>

      {/* Filtered Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <h2 className="font-serif text-2xl font-bold text-slate-900">
              {country} Packages ({packages.length})
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified Flyo pricing, private touring, professional local guide
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              packageItem={pkg}
              onSelect={onSelectPackage}
              onOpenBooking={onOpenBooking}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
