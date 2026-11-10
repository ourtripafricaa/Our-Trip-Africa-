import heroImage from '../assets/images/hero_african_safari_1793678271283.jpg';
import lionImage from '../assets/images/wildlife_lion_pride_1793678272340.jpg';
import kilimanjaroImage from '../assets/images/kilimanjaro_snow_peak_1793678274223.jpg';
import uaeDubaiImage from '../assets/images/uae_dubai_desert_safari_1793680109841.jpg';
import uaeAbuDhabiImage from '../assets/images/uae_abu_dhabi_grand_mosque_1793680109642.jpg';

/**
 * Our Trip Africa – Core Data Store
 * Company Details, Verified Safari Packages, Blog Articles, Team, FAQs, and Media Assets
 */

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities?: string[];
  meals?: string;
  accommodation?: string;
}

export interface SafariPackage {
  id: string;
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  destination: string;
  country: 'Tanzania' | 'Kenya' | 'Uganda' | 'Zanzibar' | 'South Africa' | 'UAE';
  category: 'Wildlife Safari' | 'Mountain Trek' | 'Beach Holiday' | 'Cultural Safari' | 'Grand Circuit' | 'City & Desert Tour';
  durationDays: number;
  durationNights: number;
  durationLabel: string;
  basePrice: number;
  currency: string;
  priceNote?: string;
  tierPricing: {
    budget: number;
    midrange: number;
    luxury: number;
  };
  minGuests: number;
  maxGuests?: number;
  rating: number;
  reviewsCount: number;
  featured: boolean;
  createdAt?: any;
  bestTime: string;
  physicalRating: 'Easy' | 'Moderate' | 'Challenging' | 'Strenuous';
  heroImage: string;
  gallery: string[];
  overview: string;
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'Travel Guides' | 'Wildlife Spotlights' | 'Cultural Experiences' | 'Company News';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  excerpt: string;
  content: string[];
  tags: string[];
  seoDescription: string;
  mapLinks?: Array<[string, string]>;
}

export const COMPANY_DETAILS = {
  name: 'Our Trip Africa',
  tagline: 'Discover. Explore. Enjoy.',
  domain: 'ourtripafrica.com',
  websiteUrl: 'https://ourtripafrica.com',
  bookingEmail: 'info@ourtripafrica.com',
  supportEmail: 'support@ourtripafrica.com',
  salesEmail: 'sales@ourtripafrica.com',
  phone: '+255 624 661 830',
  phoneRaw: '+255624661830',
  whatsappRaw: '255624661830',
  whatsappDisplay: '+255 624 661 830',
  whatsappUrl: 'https://wa.me/255624661830?text=Hi%20Our%20Trip%20Africa%2C%20I%20would%20like%20to%20plan%20a%20safari%20and%20enquire%20about%20your%20packages.',
  address: 'P.O. BOX 23125, Kisongo, Arusha – Tanzania',
  officeHours: 'Monday – Sunday: 24/7 Safari Operations & Support',
  socials: {
    facebook: { handle: '@ourtripafrica', url: 'https://www.facebook.com/ourtripafrica' },
    instagram: { handle: '@ourtripafricaa', url: 'https://www.instagram.com/ourtripafricaa' },
    tiktok: { handle: '@ourtripafrica', url: 'https://www.tiktok.com/@ourtripafrica' },
    linkedin: { handle: '@ourtripafrica', url: 'https://www.linkedin.com/in/ourtripafrica' },
    youtube: { handle: '@ourtripafrica', url: 'https://www.youtube.com/@ourtripafrica' },
  },
  logo: '/assets/aistudio/1793428227163_297558c5.jpg',
  director: {
    name: 'Mr. James Felix',
    title: 'CEO & Founder | Partnership & Sales Manager',
    experience: '15+ Years',
    photo: '/assets/aistudio/20260919_111305_8de8147f.png',
    email: 'james@ourtripafrica.com',
    phone: '+255743661830',
    quote: 'My vision is to provide meaningful travel experiences that allow visitors to discover, appreciate, and connect with the true spirit of Africa.',
    bio: 'Founder and Owner of Our Trip Africa, established in 2021 with a clear vision of showcasing the extraordinary beauty of Tanzania and Africa to travelers from every corner of the world. With over 15+ years of safari and hospitality experience, James Felix has guided and organized life-changing expeditions across the Serengeti, Ngorongoro Crater, Mount Kilimanjaro, and the coastal paradise of Zanzibar.',
    fullStory: `My name is James Felix, the Founder and Owner of Our Trip Africa, a Tanzania-based tourism company established in 2021 with a clear vision of showcasing the extraordinary beauty of Tanzania and Africa to travelers from every corner of the world.

My journey into the tourism industry was inspired by the incredible natural beauty, rich cultural heritage, diverse wildlife, and unforgettable experiences that Tanzania has to offer. I believe that Africa is one of the world's most remarkable travel destinations, with a unique combination of breathtaking landscapes, extraordinary wildlife, beautiful beaches, welcoming communities, and fascinating cultural traditions.

It was this belief, together with my passion for tourism and my desire to connect people with authentic African experiences, that inspired me to establish Our Trip Africa in 2021.

From the beginning, my vision was to create a tourism company that would not only organize trips but also provide meaningful travel experiences that allow visitors to discover, appreciate, and connect with the true spirit of Africa.

Today, Our Trip Africa is dedicated to helping international travelers explore Tanzania through carefully organized safaris, cultural experiences, beach holidays, mountain adventures, and personalized travel arrangements designed to meet the interests and expectations of different travelers.

Whether you are dreaming of a wildlife safari in the Serengeti, an adventure in the Ngorongoro Crater, a climb up Mount Kilimanjaro, a cultural experience with local communities, or a peaceful holiday on the beaches of Zanzibar, we welcome the opportunity to help you explore the possibilities.`
  }
};

export const LOCAL_IMAGES = {
  hero: heroImage,
  lion: lionImage,
  zanzibar: '/assets/aistudio/Screenshot_20260929_194629_Gallery_51f1a0f7.jpg',
  kilimanjaro: kilimanjaroImage,
  gorilla: '/assets/aistudio/1793450997914_ae622466.jpg',
  uaeDubai: uaeDubaiImage,
  uaeAbuDhabi: uaeAbuDhabiImage,
  maranguHiking: '/assets/aistudio/1776627302280_aeeffdfe.jpg',
  machameHiking: '/assets/aistudio/20261024_122515_aa5135aa.png',
  safari5Day: '/assets/aistudio/1788252043526_202ccf55.jpg',
  lakeEyasi: '/assets/aistudio/Screenshot_20260527_120120_ChatGPT_18140df3.jpg',
  migrationImage: '/assets/aistudio/20260321_120937_f48b28a3.jpg',
  logo: '/assets/aistudio/1793428227163_297558c5.jpg',
  director: '/assets/aistudio/20260919_111305_8de8147f.png',
};

export const SAFARI_PACKAGES: SafariPackage[] = [
  // 1. The Great Migration Unfolds (Flyo package)
  {
    id: 'pkg-1',
    slug: 'the-great-migration-unfolds-6d5n',
    title: 'The Great Migration Unfolds — 6D/5N',
    seoTitle: 'The Great Migration Unfolds - 6D/5N | Tanzania Tour',
    seoDescription: 'Book The Great Migration Unfolds — 6D/5N with Our Trip Africa. Explore Serengeti, Ngorongoro, Tarangire & Manyara, Tanzania on a 6 days / 5 nights wildlife safari package in Tanzania. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Arusha.',
    seoKeywords: ['Tanzania safari packages', 'Tanzania tours', 'private Tanzania safari', 'Serengeti safari', 'wildlife safari', '6 days / 5 nights'],
    destination: 'Serengeti, Ngorongoro, Tarangire & Manyara, Tanzania',
    country: 'Tanzania',
    category: 'Wildlife Safari',
    durationDays: 6,
    durationNights: 5,
    durationLabel: '6 Days / 5 Nights',
    basePrice: 1850,
    currency: 'USD',
    priceNote: 'Starting from $1,850 per person',
    tierPricing: {
      budget: 1850,
      midrange: 2450,
      luxury: 3750
    },
    minGuests: 2,
    maxGuests: 7,
    rating: 4.98,
    reviewsCount: 74,
    featured: true,
    bestTime: 'June – October & January – March',
    physicalRating: 'Easy',
    // Photo: Charles J. Sharp, Wikimedia Commons, CC BY-SA 4.0
    heroImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Western_white-bearded_wildebeest_%28Connochaetes_taurinus_mearnsi%29_Mara_River_crossing_2c.jpg/1280px-Western_white-bearded_wildebeest_%28Connochaetes_taurinus_mearnsi%29_Mara_River_crossing_2c.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Western_white-bearded_wildebeest_%28Connochaetes_taurinus_mearnsi%29_Mara_River_crossing_2c.jpg/1280px-Western_white-bearded_wildebeest_%28Connochaetes_taurinus_mearnsi%29_Mara_River_crossing_2c.jpg'
    ],
    overview: 'Follow the world-famous Great Wildebeest Migration across the boundless Serengeti plains. Witness dramatic predator interactions, descend into the primordial caldera of Ngorongoro Crater, and discover the legendary baobab giants and elephant herds of Tarangire National Park.',
    highlights: [
      'Witness the world-renowned Great Wildebeest Migration in Central & Northern Serengeti',
      'Full-day game drive on the caldera floor of Ngorongoro Crater, UNESCO World Heritage site',
      'Encounter massive elephant herds and iconic baobabs in Tarangire National Park',
      'High probability of seeing all Big Five (Lion, Leopard, Elephant, Rhino, Buffalo)',
      'Custom 4x4 pop-up roof safari vehicle with private expert English-speaking guide'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Tarangire National Park',
        description: 'Morning pickup from your hotel in Arusha. Depart through scenic Maasai plains to Tarangire National Park, celebrated for ancient baobabs and enormous elephant families. Enjoy an extensive afternoon game drive along the Tarangire River, a vital lifeline attracting lions, giraffes, zebras, and over 500 bird species.',
        meals: 'Lunch, Dinner',
        accommodation: 'Marera Valley Lodge / Eileen’s Trees Inn or similar'
      },
      {
        day: 2,
        title: 'Tarangire to Central Serengeti National Park',
        description: 'After breakfast, journey through the lush highlands of Ngorongoro into the Serengeti endless plains. Arrive in the Seronera Valley, the predator capital of Africa. Enjoy en-route game viewing as you spot cheetahs perched on termite mounds and lions lounging on kopjes.',
        meals: 'Breakfast, Picnic Lunch, Dinner',
        accommodation: 'Serengeti Heritage Tented Camp / Into Wild Africa'
      },
      {
        day: 3,
        title: 'Full Day in Serengeti National Park (Great Migration Tracking)',
        description: 'Set out at dawn for a full-day migration safari. Track massive herds of wildebeest and zebras moving across the savannah accompanied by stealthy hyenas, leopards, and lions. Pause for a bush picnic beneath an acacia tree before an afternoon game drive.',
        meals: 'Breakfast, Picnic Lunch, Dinner',
        accommodation: 'Serengeti Heritage Tented Camp / Into Wild Africa'
      },
      {
        day: 4,
        title: 'Serengeti to Ngorongoro Conservation Area',
        description: 'Enjoy a sunrise morning game drive in Serengeti to observe nocturnal predators returning from night hunts. After a leisurely brunch, journey toward the crater rim of Ngorongoro, enjoying breathtaking panoramic views over the ancient caldera.',
        meals: 'Breakfast, Picnic Lunch, Dinner',
        accommodation: 'Rhino Lodge / Ngorongoro Serena Safari Lodge'
      },
      {
        day: 5,
        title: 'Ngorongoro Crater Floor Safari',
        description: 'Early morning descent 600 meters down into the world’s largest unbroken volcanic caldera. Marvel at the density of wildlife: black rhinos grazing on the open plains, massive prides of lions, thousands of flamingos at Lake Magadi, and hippos wallowing in Ngoitoktok Springs.',
        meals: 'Breakfast, Picnic Lunch, Dinner',
        accommodation: 'Country Lodge Karatu / Farm House Valley'
      },
      {
        day: 6,
        title: 'Lake Manyara National Park & Return to Arusha',
        description: 'Morning drive to Lake Manyara National Park, tucked under the Great Rift Valley escarpment. Renowned for tree-climbing lions, troops of baboons, and pink flamingo shoals. Afternoon transfer back to Arusha or Kilimanjaro Airport (JRO) for your flight.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure / Flight home'
      }
    ]
  },

  // 2. The Spice Island Slow (Flyo package)
  {
    id: 'pkg-2',
    slug: 'the-spice-island-slow-6d5n',
    title: 'The Spice Island Slow — 6D/5N',
    seoTitle: 'The Spice Island Slow - 6D/5N | Zanzibar Tour',
    seoDescription: 'Book The Spice Island Slow — 6D/5N with Our Trip Africa. Explore Stone Town & Nungwi Beach, Zanzibar on a 6 days / 5 nights beach holiday package in Zanzibar. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Arusha.',
    seoKeywords: ['Zanzibar holiday packages', 'Zanzibar beach holidays', 'Zanzibar tours', 'Stone Town tour', 'Nungwi beach holiday', 'beach holiday', '6 days / 5 nights'],
    destination: 'Stone Town & Nungwi Beach, Zanzibar',
    country: 'Zanzibar',
    category: 'Beach Holiday',
    durationDays: 6,
    durationNights: 5,
    durationLabel: '6 Days / 5 Nights',
    basePrice: 1250,
    currency: 'USD',
    priceNote: 'Starting from $1,250 per person',
    tierPricing: {
      budget: 1250,
      midrange: 1680,
      luxury: 2890
    },
    minGuests: 2,
    maxGuests: 10,
    rating: 4.95,
    reviewsCount: 52,
    featured: true,
    bestTime: 'Year-Round (Except April rainy season)',
    physicalRating: 'Easy',
    heroImage: LOCAL_IMAGES.zanzibar,
    gallery: [
      LOCAL_IMAGES.zanzibar,
      'https://flyo4business.s3.ap-south-1.amazonaws.com/images/11972_1780907575862_WhatsApp_Image_2026_06_08_at_1.12.06_PM.jpeg',
      'https://flyo4business.s3.ap-south-1.amazonaws.com/images/11972_1780907576263_WhatsApp_Image_2026_06_08_at_1.12.07_PM__1_.jpeg',
      'https://flyo4business.s3.ap-south-1.amazonaws.com/images/11972_1780907577116_WhatsApp_Image_2026_06_08_at_1.12.08_PM__1_.jpeg'
    ],
    overview: 'Unwind along Zanzibar’s powdery white beaches, immerse yourself in the rich Arab-Swahili history of UNESCO-listed Stone Town, smell organic cloves and nutmeg on a spice plantation, and sail on a traditional wooden dhow across turquoise lagoons.',
    highlights: [
      'Guided historical walking tour through the labyrinthine alleys of Stone Town',
      'Full-day Safari Blue excursion on a traditional dhow with grilled seafood barbecue',
      'Snorkeling with colorful reef fish and dolphins in Menai Bay Marine Reserve',
      'Visit organic spice plantations and taste freshly plucked cloves, cinnamon, and vanilla',
      'Relaxation at idyllic northern beaches of Nungwi or Kendwa with minimal tidal variations'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Zanzibar & Stone Town Heritage Tour',
        description: 'Meet and greet by our team at Abeid Amani Karume International Airport (ZNZ) or ferry terminal. Check into your boutique hotel in Stone Town. Afternoon walking tour visiting the Old Fort, House of Wonders, Sultan’s Palace, and the poignant Anglican Cathedral Slave Market memorial. Evening sunset street food at Forodhani Gardens.',
        meals: 'Dinner',
        accommodation: 'Maru Maru Hotel / Tembo House Hotel'
      },
      {
        day: 2,
        title: 'Prison Island Tortoises & Organic Spice Tour',
        description: 'Board a wooden boat to Changuu (Prison Island). Feed and interact with giant Aldabra tortoises, some over 150 years old. In the afternoon, explore a countryside spice farm to discover how black pepper, nutmeg, lemongrass, and cardamom grow naturally.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Maru Maru Hotel / Tembo House Hotel'
      },
      {
        day: 3,
        title: 'Transfer to Nungwi Beach & Jozani Forest Red Colobus Monkeys',
        description: 'Depart Stone Town toward the tropical northern coast. Stop en-route at Jozani Chwaka Bay National Park, the only national park on Zanzibar, to see the rare Kirk’s Red Colobus monkeys jumping in mahogany trees. Arrive in Nungwi for beachfront check-in.',
        meals: 'Breakfast, Dinner',
        accommodation: 'Zuri Zanzibar / Amaan Beach Bungalows'
      },
      {
        day: 4,
        title: 'Safari Blue Sailing & Sandbank Feast',
        description: 'Full-day marine adventure departing from Fumba. Sail on a handcrafted Swahili dhow to sandbanks rising out of crystal-clear ocean. Snorkel over pristine coral reefs, swim in a hidden mangrove lagoon, and indulge in a lavish lunch of grilled lobster, calamari, fish, and exotic fruits.',
        meals: 'Breakfast, Seafood Lunch, Dinner',
        accommodation: 'Zuri Zanzibar / Amaan Beach Bungalows'
      },
      {
        day: 5,
        title: 'Leisure Day on Nungwi / Kendwa Beach',
        description: 'A completely relaxing day at your own rhythm. Bask on white sand, swim in crystal turquoise waters that stay swimmable regardless of tides, book a massage, or take a sunset dhow cruise.',
        meals: 'Breakfast, Dinner',
        accommodation: 'Zuri Zanzibar / Amaan Beach Bungalows'
      },
      {
        day: 6,
        title: 'Zanzibar Souvenirs & Airport Departure',
        description: 'Enjoy a leisurely breakfast overlooking the Indian Ocean. Depending on your flight schedule, pick up local spices, coffee, and kanga fabrics before your private transfer to Zanzibar Airport.',
        meals: 'Breakfast',
        accommodation: 'Departure'
      }
    ]
  },

  // 3. Summit the Roof of Africa — Machame Route (Flyo package)
  {
    id: 'pkg-3',
    slug: 'summit-the-roof-of-africa-machame-route-6d5n',
    title: 'Summit the Roof of Africa — Machame Route 6D/5N',
    seoTitle: 'Summit the Roof of Africa - Machame Route 6D/5N | Tanzania Tour',
    seoDescription: 'Book Summit the Roof of Africa — Machame Route 6D/5N with Our Trip Africa. Explore Mount Kilimanjaro, Tanzania on a 6 days / 5 nights mountain trek package in Tanzania. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Arusha.',
    seoKeywords: ['Tanzania safari packages', 'Tanzania tours', 'private Tanzania safari', 'Mount Kilimanjaro safari', 'mountain trek', '6 days / 5 nights'],
    destination: 'Mount Kilimanjaro, Tanzania',
    country: 'Tanzania',
    category: 'Mountain Trek',
    durationDays: 6,
    durationNights: 5,
    durationLabel: '6 Days / 5 Nights',
    basePrice: 1980,
    currency: 'USD',
    priceNote: 'Starting from $1,980 per person',
    tierPricing: {
      budget: 1980,
      midrange: 2450,
      luxury: 3450
    },
    minGuests: 1,
    maxGuests: 12,
    rating: 4.97,
    reviewsCount: 61,
    featured: true,
    bestTime: 'January – March & June – October',
    physicalRating: 'Strenuous',
    heroImage: LOCAL_IMAGES.kilimanjaro,
    gallery: [
      LOCAL_IMAGES.machameHiking,
      'https://flyo4business.s3.ap-south-1.amazonaws.com/images/11972_1777899200600_daniel_vargas_oOp5mgNUd2U_unsplash__1_.jpg',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The famous "Whiskey Route" is renowned as the most scenic and successful ascent route on Mount Kilimanjaro (5,895m / 19,341ft). Traverses lush rainforest, heathland, moorland, alpine desert, and arctic glaciers with exceptional altitude acclimatization.',
    highlights: [
      'Climb Uhuru Peak (5,895m) — the highest freestanding mountain on planet Earth',
      'High summit success rate via the "climb high, sleep low" acclimatization profile',
      'Scramble up the thrilling Barranco Wall with epic panoramic views',
      'Experienced WFR-certified guides, mountain chef, and dedicated porter team',
      'All mountain park permits, rescue fees, camping gear, and hearty warm meals included'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Machame Gate (1,800m) to Machame Camp (3,000m)',
        description: 'Drive from Moshi/Arusha to Machame Gate for park registration. Trek through lush, moss-draped montane rainforest filled with exotic ferns and colobus monkeys to reach Machame Camp.',
        meals: 'Lunch, Dinner',
        accommodation: 'Machame Mountain Camp'
      },
      {
        day: 2,
        title: 'Machame Camp (3,000m) to Shira Camp (3,840m)',
        description: 'Leave the rainforest behind and climb along a rocky ridge into the heather and moorland zone. Cross streams to reach the expansive Shira Plateau with panoramic views of Kibo peak.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Shira Camp'
      },
      {
        day: 3,
        title: 'Shira Camp to Lava Tower (4,630m) & Descend to Barranco (3,950m)',
        description: 'Crucial acclimatization day: ascend eastward through volcanic landscape to the Lava Tower (4,630m) for lunch, then descend into the sheltered Barranco Valley surrounded by giant groundsel plants.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Barranco Camp'
      },
      {
        day: 4,
        title: 'Barranco Camp over the Barranco Wall to Karanga (3,995m) to Barafu (4,673m)',
        description: 'Conquer the Barranco Wall, an exhilarating, non-technical scramble offering stunning photographic vistas. Traverse the Karanga Valley before the final steep push up to Barafu Camp, your summit base.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Barafu Summit Base Camp'
      },
      {
        day: 5,
        title: 'Summit Night: Barafu (4,673m) to Uhuru Peak (5,895m) & Descend to Mweka (3,100m)',
        description: 'Wake around midnight. Begin the zig-zagging scree ascent under the starry African sky. Reach Stella Point (5,756m) at sunrise as the crater rim illuminates in fiery crimson, then push for Uhuru Peak (5,895m) — Roof of Africa! Descend to Mweka Camp.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Mweka Camp'
      },
      {
        day: 6,
        title: 'Mweka Camp (3,100m) to Mweka Gate (1,640m) & Certificate Presentation',
        description: 'Gentle morning hike down through the rainforest to Mweka Gate. Receive your official gold summit certificate, celebrate with our crew’s traditional Kilimanjaro song, and transfer back to hotel.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Arusha / Moshi Hotel'
      }
    ]
  },

  // 4. The Gentle Giant — Marangu Route (Flyo package)
  {
    id: 'pkg-4',
    slug: 'the-gentle-giant-marangu-route-6d5n',
    title: 'The Gentle Giant — Marangu Route 6D/5N',
    seoTitle: 'The Gentle Giant - Marangu Route 6D/5N | Tanzania Tour',
    seoDescription: 'Book The Gentle Giant — Marangu Route 6D/5N with Our Trip Africa. Explore Mount Kilimanjaro, Tanzania on a 6 days / 5 nights mountain trek package in Tanzania. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Arusha.',
    seoKeywords: ['Tanzania safari packages', 'Tanzania tours', 'private Tanzania safari', 'Mount Kilimanjaro safari', 'mountain trek', '6 days / 5 nights'],
    destination: 'Mount Kilimanjaro, Tanzania',
    country: 'Tanzania',
    category: 'Mountain Trek',
    durationDays: 6,
    durationNights: 5,
    durationLabel: '6 Days / 5 Nights',
    basePrice: 1750,
    currency: 'USD',
    priceNote: 'Starting from $1,750 per person',
    tierPricing: {
      budget: 1750,
      midrange: 2150,
      luxury: 2950
    },
    minGuests: 1,
    maxGuests: 12,
    rating: 4.91,
    reviewsCount: 45,
    featured: false,
    bestTime: 'Year-Round (Best in dry seasons)',
    physicalRating: 'Challenging',
    heroImage: LOCAL_IMAGES.kilimanjaro,
    gallery: [
      LOCAL_IMAGES.maranguHiking,
      'https://flyo4business.s3.ap-south-1.amazonaws.com/images/11972_1777899200600_daniel_vargas_oOp5mgNUd2U_unsplash__1_.jpg',
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The classic "Coca-Cola Route" is the only Kilimanjaro trail featuring comfortable A-frame wooden sleeping huts with beds and solar power, rather than camping in tents. Gradual slopes and well-defined trails make it an enduring favorite.',
    highlights: [
      'Sleep in wooden A-frame huts (Mandara, Horombo, Kibo) with solar lighting',
      'Gradual gradient through stunning cloud forests and alpine meadows',
      'Spectacular views of Mawenzi Peak and the Kibo caldera',
      'Ascend to Gilman’s Point and Uhuru Peak (5,895m)',
      'Extra acclimatization day at Horombo Hut included'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Marangu Gate (1,870m) to Mandara Hut (2,700m)',
        description: 'Trek through thick rainforest with towering eucalyptus trees and playful blue monkeys to Mandara Hut.',
        meals: 'Lunch, Dinner',
        accommodation: 'Mandara Hut'
      },
      {
        day: 2,
        title: 'Mandara Hut (2,700m) to Horombo Hut (3,720m)',
        description: 'Ascend out of the timberline into rolling heather moorland dotted with giant lobelias to reach Horombo Hut.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Horombo Hut'
      },
      {
        day: 3,
        title: 'Acclimatization Day at Horombo Hut (Zebra Rocks hike)',
        description: 'Gentle hike to the striking striped Zebra Rocks (4,020m) for acclimatization before returning to Horombo for a warm lunch and rest.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Horombo Hut'
      },
      {
        day: 4,
        title: 'Horombo Hut to Kibo Hut (4,703m)',
        description: 'Cross the alpine desert Saddle between the jagged peak of Mawenzi and the majestic dome of Kibo. Early dinner and rest.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Kibo Hut'
      },
      {
        day: 5,
        title: 'Summit: Kibo Hut to Uhuru Peak (5,895m) & Descend to Horombo',
        description: 'Midnight summit assault via Hans Meyer Cave to Gilman’s Point (5,681m) on the crater rim, then onto Uhuru Peak! Descend back to Horombo.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Horombo Hut'
      },
      {
        day: 6,
        title: 'Horombo Hut to Marangu Gate & Transfer to Arusha',
        description: 'Descent through moorland and rainforest to Marangu Gate. Collect certificates and return to Arusha.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Arusha Hotel'
      }
    ]
  },

  // 5. 5 Days 4 Nights Private & Budget Camping/Lodge Safari (Serengeti x 2 & Ngorongoro) (Flyo package)
  {
    id: 'pkg-5',
    slug: '5-days-4-nights-private-budget-campinglodge-safari-serengeti-x-2-ngorongoro',
    title: '5 Days 4 Nights Private Safari (Serengeti x 2 & Ngorongoro)',
    seoTitle: '5 Days 4 Nights Private Safari (Serengeti x 2 & Ngorongoro) | Tanzania Tour',
    seoDescription: 'Book 5 Days 4 Nights Private Safari (Serengeti x 2 & Ngorongoro) with Our Trip Africa. Explore Tarangire, Serengeti (2 Nights) & Ngorongoro Crater, Tanzania on a 5 days / 4 nights wildlife safari package in Tanzania. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, a',
    seoKeywords: ['Tanzania safari packages', 'Tanzania tours', 'private Tanzania safari', 'Tarangire safari', 'wildlife safari', '5 days / 4 nights'],
    destination: 'Tarangire, Serengeti (2 Nights) & Ngorongoro Crater, Tanzania',
    country: 'Tanzania',
    category: 'Wildlife Safari',
    durationDays: 5,
    durationNights: 4,
    durationLabel: '5 Days / 4 Nights',
    basePrice: 1420,
    currency: 'USD',
    priceNote: 'Starting from $1,420 (Budget) / $1,950 (Mid-Range Lodge)',
    tierPricing: {
      budget: 1420,
      midrange: 1950,
      luxury: 2980
    },
    minGuests: 2,
    maxGuests: 7,
    rating: 4.96,
    reviewsCount: 88,
    featured: true,
    bestTime: 'Year-Round',
    physicalRating: 'Easy',
    heroImage: LOCAL_IMAGES.lion,
    gallery: [
      LOCAL_IMAGES.safari5Day,
      LOCAL_IMAGES.lion,
      LOCAL_IMAGES.hero,
      'https://images.unsplash.com/photo-1645494797561-0f3c1fb1bbec?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1528732533941-ffd7083d5dfe?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Our most requested classic safari! Two full days in the heart of Serengeti National Park combined with the world-famous Ngorongoro Crater and Tarangire National Park. Perfect balance of wildlife intensity, comfort, and value.',
    highlights: [
      'Two full nights in the predator-rich Seronera Valley of Central Serengeti',
      'Full game drive on the crater floor of Ngorongoro searching for rare black rhinos',
      'Encounter massive elephant herds under Tarangire’s iconic baobab trees',
      'Available in Budget Camping (spacious safari tents) or Mid-Range Lodge options',
      'Private 4x4 Land Cruiser with open pop-up roof for optimal wildlife photography'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Tarangire National Park',
        description: 'Morning drive to Tarangire National Park. Known as the elephant kingdom with herds exceeding 300 individuals. Afternoon game drive along the Tarangire riverbed.',
        meals: 'Lunch, Dinner',
        accommodation: 'Twiga Campsite / Marera Valley Lodge'
      },
      {
        day: 2,
        title: 'Tarangire to Central Serengeti National Park',
        description: 'Scenic journey through Ngorongoro highlands into Serengeti National Park. Game drive through Seronera Valley tracking big cats and herbivores.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Nyani Campsite / Serengeti Heritage Camp'
      },
      {
        day: 3,
        title: 'Full Day Wildlife Safari in Serengeti National Park',
        description: 'Sunrise game drive observing morning hunts. Full day exploring riverbanks, acacia woodlands, and kopjes teeming with lions, leopards, and cheetahs.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Nyani Campsite / Serengeti Heritage Camp'
      },
      {
        day: 4,
        title: 'Serengeti to Ngorongoro Conservation Area',
        description: 'Morning game drive in Serengeti. Afternoon journey to the Ngorongoro crater rim with dramatic sunset views overlooking the caldera.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Simba Campsite / Rhino Lodge'
      },
      {
        day: 5,
        title: 'Ngorongoro Crater Floor Safari & Return to Arusha',
        description: 'Descend 600m to the crater floor. Encounter dense populations of lions, hyenas, zebras, wildebeest, and black rhinos. Late afternoon drive back to Arusha.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ]
  },

  // 6. Lake Eyasi Hadzabe & Datoga Cultural Safari (Flyo package)
  {
    id: 'pkg-6',
    slug: 'lake-eyasi-hadzabe-datoga-cultural-safari-4d3n',
    title: 'Lake Eyasi Hadzabe & Datoga Cultural Safari — 4D/3N',
    seoTitle: 'Lake Eyasi Hadzabe & Datoga Cultural Safari - 4D/3N | Tanzania Tour',
    seoDescription: 'Book Lake Eyasi Hadzabe & Datoga Cultural Safari — 4D/3N with Our Trip Africa. Explore Lake Eyasi, Tarangire & Manyara, Tanzania on a 4 days / 3 nights cultural safari package in Tanzania. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Ar',
    seoKeywords: ['Tanzania safari packages', 'Tanzania tours', 'private Tanzania safari', 'Lake Eyasi safari', 'cultural safari', '4 days / 3 nights'],
    destination: 'Lake Eyasi, Tarangire & Manyara, Tanzania',
    country: 'Tanzania',
    category: 'Cultural Safari',
    durationDays: 4,
    durationNights: 3,
    durationLabel: '4 Days / 3 Nights',
    basePrice: 980,
    currency: 'USD',
    priceNote: 'Starting from $980 per person',
    tierPricing: {
      budget: 980,
      midrange: 1380,
      luxury: 2150
    },
    minGuests: 2,
    maxGuests: 7,
    rating: 4.94,
    reviewsCount: 38,
    featured: false,
    bestTime: 'Year-Round',
    physicalRating: 'Moderate',
    heroImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Hadzabe_Hunters.jpg?width=1400',
    gallery: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Hadzabe_Hunters.jpg?width=1400',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Tanzania_-_Young_Hadzabe_hunter_%2814533463462%29.jpg?width=1400',
      LOCAL_IMAGES.lakeEyasi
    ],
    overview: 'Step back thousands of years to walk and hunt alongside the indigenous Hadzabe bushmen — one of Earth’s last remaining click-speaking hunter-gatherer tribes. Visit the skilled Datoga blacksmiths and enjoy wildlife game drives in Tarangire.',
    highlights: [
      'Accompany Hadzabe hunter-gatherers on an authentic morning hunt with handcrafted bows',
      'Learn how the Hadzabe gather wild honey, edible roots, and make natural fire with friction',
      'Visit the Datoga pastoralist tribe and witness traditional copper and brass arrowhead forging',
      'Game drive in Tarangire National Park for elephants and predators',
      'Walking along the pink-hued shores of soda lake Lake Eyasi'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Tarangire National Park',
        description: 'Depart Arusha for game viewing in Tarangire National Park. Afternoon drive across the Rift Valley to the shores of Lake Eyasi.',
        meals: 'Lunch, Dinner',
        accommodation: 'Lake Eyasi Safari Lodge / Kisima Ngeda'
      },
      {
        day: 2,
        title: 'Dawn Hunting with the Hadzabe & Datoga Blacksmiths',
        description: 'Early dawn departure to join a Hadzabe clan. Follow men on a traditional hunt using poison-tipped arrows. Women demonstrate berry and tuber foraging. In the afternoon, visit Datoga metalworkers melting scrap metal into arrowheads.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Lake Eyasi Safari Lodge / Kisima Ngeda'
      },
      {
        day: 3,
        title: 'Lake Eyasi to Lake Manyara National Park',
        description: 'Drive to Lake Manyara. Afternoon game drive for tree-climbing lions, baboon troops, and flamingos along the lake.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Bougainvillea Safari Lodge Karatu'
      },
      {
        day: 4,
        title: 'Mto wa Mbu Cultural Village & Return to Arusha',
        description: 'Cultural walking tour through the agricultural town of Mto wa Mbu where 120 tribes coexist peacefully. Taste red bananas and banana beer. Return to Arusha.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ]
  },

  // 7. Olpopongi Maasai Cultural Village & Museum with Materuni Waterfall (Flyo package)
  {
    id: 'pkg-7',
    slug: 'olpopongi-maasai-cultural-village-museum-with-materuni-waterfall-4d3n',
    title: 'Olpopongi Maasai Village & Materuni Waterfall — 4D/3N',
    seoTitle: 'Olpopongi Maasai Village & Materuni Waterfall - 4D/3N | Tanzania Tour',
    seoDescription: 'Book Olpopongi Maasai Village & Materuni Waterfall — 4D/3N with Our Trip Africa. Explore West Kilimanjaro & Materuni Village, Tanzania on a 4 days / 3 nights cultural safari package in Tanzania. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning f',
    seoKeywords: ['Tanzania safari packages', 'Tanzania tours', 'private Tanzania safari', 'West Kilimanjaro & Materuni Village safari', 'cultural safari', '4 days / 3 nights'],
    destination: 'West Kilimanjaro & Materuni Village, Tanzania',
    country: 'Tanzania',
    category: 'Cultural Safari',
    durationDays: 4,
    durationNights: 3,
    durationLabel: '4 Days / 3 Nights',
    basePrice: 890,
    currency: 'USD',
    priceNote: 'Starting from $890 per person',
    tierPricing: {
      budget: 890,
      midrange: 1250,
      luxury: 1850
    },
    minGuests: 2,
    maxGuests: 8,
    rating: 4.96,
    reviewsCount: 33,
    featured: false,
    bestTime: 'Year-Round',
    physicalRating: 'Easy',
    heroImage: 'https://images.unsplash.com/photo-1610982330184-b26f7ea46541?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610982330184-b26f7ea46541?auto=format&fit=crop&w=1200&q=80',
      'https://flyo4business.s3.ap-south-1.amazonaws.com/images/11972_1779884752954_welcome_to_olpopongi.jpg',
      LOCAL_IMAGES.kilimanjaro
    ],
    overview: 'Experience the real Maasai lifestyle inside an authentic traditional Boma at Olpopongi, the only authorized Maasai cultural village and museum in Tanzania. Combine this with the thundering 90-meter Materuni Waterfall and Chemka Hot Springs.',
    highlights: [
      'Overnight inside a handcrafted traditional Maasai Kraal hut',
      'Walking safari with Maasai warriors learning about medicinal trees and plants',
      'Traditional spear throwing, jumping dances, and campfire storytelling',
      'Hike to the magnificent 90-meter Materuni Waterfall on the slopes of Kilimanjaro',
      'Artisanal coffee experience: pick, roast, grind, and brew fresh Chagga coffee',
      'Swim in the crystal turquoise waters of Chemka / Kikuletwa geothermal springs'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Olpopongi Maasai Village',
        description: 'Morning departure to West Kilimanjaro. Arrive at Olpopongi Maasai Cultural Village. Tour the museum, engage in traditional medicine walks with elders, and join the evening Maasai barbecue and warrior dance around the campfire.',
        meals: 'Lunch, Dinner',
        accommodation: 'Olpopongi Traditional Maasai Boma'
      },
      {
        day: 2,
        title: 'Olpopongi Bush Walk to Materuni Village',
        description: 'Morning wildlife tracking and spear throwing with warriors. Drive to Materuni Village on the slopes of Kilimanjaro for an authentic Chagga coffee tour.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Meru View Lodge / Ameg Lodge Moshi'
      },
      {
        day: 3,
        title: 'Materuni 90m Waterfall Hike & Chemka Hot Springs',
        description: 'Hike through lush banana forests to the 90m Materuni Waterfall. Afterward, relax and swim in the warm turquoise pools of Chemka (Kikuletwa) geothermal springs.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Ameg Lodge Moshi / Arusha Hotel'
      },
      {
        day: 4,
        title: 'Arusha Cultural Heritage Center & Departure',
        description: 'Visit the Arusha Cultural Heritage Center, Africa’s largest collection of African art and tanzanite gems, before airport transfer.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ]
  },

  // 8. Maasai Day Trip (Flyo package)
  {
    id: 'pkg-8',
    slug: 'maasai-day-trip-1d',
    title: 'Maasai Day Trip — 1D',
    seoTitle: 'Maasai Day Trip - 1D | Tanzania Tour',
    seoDescription: 'Book Maasai Day Trip — 1D with Our Trip Africa. Explore Monduli / Longido Maasai Steppe, Tanzania on a 1 day excursion cultural safari package in Tanzania. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Arusha.',
    seoKeywords: ['Tanzania safari packages', 'Tanzania tours', 'private Tanzania safari', 'Monduli / Longido Maasai Steppe safari', 'cultural safari', '1 day excursion'],
    destination: 'Monduli / Longido Maasai Steppe, Tanzania',
    country: 'Tanzania',
    category: 'Cultural Safari',
    durationDays: 1,
    durationNights: 0,
    durationLabel: '1 Day Excursion',
    basePrice: 370,
    currency: 'USD',
    priceNote: 'Starting from $370 per person',
    tierPricing: {
      budget: 370,
      midrange: 450,
      luxury: 580
    },
    minGuests: 1,
    maxGuests: 12,
    rating: 4.92,
    reviewsCount: 29,
    featured: false,
    bestTime: 'Year-Round',
    physicalRating: 'Easy',
    heroImage: 'https://images.unsplash.com/photo-1610982330184-b26f7ea46541?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1610982330184-b26f7ea46541?auto=format&fit=crop&w=1200&q=80',
      LOCAL_IMAGES.hero
    ],
    overview: 'An enriching single-day excursion from Arusha or Moshi to an authentic Maasai Boma. Connect directly with Maasai elders, participate in celebratory songs, observe beadwork artistry, and learn about nomadic pastoralist culture.',
    highlights: [
      'Warm welcome dance and traditional blessing by Maasai village elders',
      'Guided walk through typical mud-and-thatch Manyatta family homesteads',
      'Herbal bush medicine walk exploring indigenous acacia and wild herbs',
      'Beadwork demonstration with Maasai mamas',
      'Traditional lunch prepared with local ingredients'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Full Day Authentic Maasai Cultural Immersion',
        description: 'Morning pickup from your hotel. Drive through the acacia plains of the Maasai Steppe. Spend the day inside the boma interacting with families, learning cattle management, witnessing spear throwing, and enjoying traditional singing and dancing. Return to Arusha by 5:00 PM.',
        meals: 'Lunch',
        accommodation: 'None (Day trip)'
      }
    ]
  },

  // 9. East Africa's Hidden Cultures (Flyo package)
  {
    id: 'pkg-9',
    slug: 'east-africas-hidden-cultures-4d3n',
    title: 'East Africa’s Hidden Cultures — 4D/3N',
    seoTitle: 'East Africa’s Hidden Cultures - 4D/3N | Tanzania Tour',
    seoDescription: 'Book East Africa’s Hidden Cultures — 4D/3N with Our Trip Africa. Explore Lake Eyasi, Lake Natron & Rift Valley, Tanzania on a 4 days / 3 nights cultural safari package in Tanzania. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Arusha.',
    seoKeywords: ['Tanzania safari packages', 'Tanzania tours', 'private Tanzania safari', 'Lake Eyasi safari', 'cultural safari', '4 days / 3 nights'],
    destination: 'Lake Eyasi, Lake Natron & Rift Valley, Tanzania',
    country: 'Tanzania',
    category: 'Cultural Safari',
    durationDays: 4,
    durationNights: 3,
    durationLabel: '4 Days / 3 Nights',
    basePrice: 1150,
    currency: 'USD',
    priceNote: 'Starting from $1,150 per person',
    tierPricing: {
      budget: 1150,
      midrange: 1620,
      luxury: 2380
    },
    minGuests: 2,
    maxGuests: 7,
    rating: 4.93,
    reviewsCount: 26,
    featured: false,
    bestTime: 'June – March',
    physicalRating: 'Moderate',
    heroImage: 'https://images.unsplash.com/photo-1611652951546-7dde1b5f804c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611652951546-7dde1b5f804c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1610982330184-b26f7ea46541?auto=format&fit=crop&w=1200&q=80',
      LOCAL_IMAGES.hero
    ],
    overview: 'An off-the-beaten-track cultural odyssey exploring ancestral tribes and otherworldly volcanic landscapes. Encounter the Hadzabe hunter-gatherers, Datoga blacksmiths, and remote Maasai clans living beneath Oldoinyo Lengai (the Mountain of God).',
    highlights: [
      'Immersion with Hadzabe hunter-gatherers and Datoga pastoralists at Lake Eyasi',
      'Expedition to dramatic Lake Natron, the world’s foremost lesser flamingo breeding site',
      'Gaze upon the smoking crater of active volcano Oldoinyo Lengai',
      'Hike along the cool freshwater Engare Sero waterfalls',
      'Discover ancient hominid footprints preserved in volcanic mud'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arusha to Lake Eyasi',
        description: 'Drive from Arusha to Lake Eyasi. Afternoon visit to the Datoga tribe to see ancient jewelry and weaponsmithing.',
        meals: 'Lunch, Dinner',
        accommodation: 'Lake Eyasi Safari Lodge'
      },
      {
        day: 2,
        title: 'Hadzabe Hunting & Scenic Drive to Lake Natron',
        description: 'Join Hadzabe bushmen on a sunrise hunting excursion. Continue northward through stunning Rift Valley escarpments to Lake Natron.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Lake Natron Tented Camp'
      },
      {
        day: 3,
        title: 'Lake Natron Flamingos & Engare Sero Waterfall Hike',
        description: 'Early morning walk on the crimson salt crust of Lake Natron among thousands of flamingos. Afternoon river hike through a canyon to Engare Sero waterfalls.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Lake Natron Tented Camp'
      },
      {
        day: 4,
        title: 'Hominid Footprints & Return to Arusha',
        description: 'Visit the 120,000-year-old human footprints preserved in volcanic rock before the scenic drive back to Arusha.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ]
  },

  // 10. 8 PAX 14 DAYS SAFARIS & CULTURAL TOUR (Flyo package)
  {
    id: 'pkg-10',
    slug: '8-pax-14-days-safaris-cultural-tour-14d13n',
    title: '14 Days Grand Tanzania Safari & Cultural Expedition',
    seoTitle: '14 Days Grand Tanzania Safari & Cultural Expedition | Tanzania Tour',
    seoDescription: 'Book 14 Days Grand Tanzania Safari & Cultural Expedition with Our Trip Africa. Explore Tarangire, Central & North Serengeti, Ngorongoro, Eyasi & Kilimanjaro on a 14 days / 13 nights grand circuit package in Tanzania. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, a',
    seoKeywords: ['Tanzania safari packages', 'Tanzania tours', 'private Tanzania safari', 'Tarangire safari', 'grand circuit', '14 days / 13 nights'],
    destination: 'Tarangire, Central & North Serengeti, Ngorongoro, Eyasi & Kilimanjaro',
    country: 'Tanzania',
    category: 'Grand Circuit',
    durationDays: 14,
    durationNights: 13,
    durationLabel: '14 Days / 13 Nights',
    basePrice: 3355,
    currency: 'USD',
    priceNote: 'Starting from $3,355 per person (Group rate for 8 pax)',
    tierPricing: {
      budget: 3355,
      midrange: 4250,
      luxury: 6450
    },
    minGuests: 2,
    maxGuests: 8,
    rating: 4.99,
    reviewsCount: 31,
    featured: true,
    bestTime: 'July – October (River Crossings) or Jan – March (Calving)',
    physicalRating: 'Moderate',
    heroImage: LOCAL_IMAGES.hero,
    gallery: [
      LOCAL_IMAGES.hero,
      LOCAL_IMAGES.lion,
      LOCAL_IMAGES.kilimanjaro,
      'https://images.unsplash.com/photo-1528732533941-ffd7083d5dfe?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'The definitive two-week master safari across all wonders of Northern Tanzania. Covers Tarangire, multiple regions of the Serengeti, Ngorongoro Crater, Lake Eyasi indigenous tribes, Mto wa Mbu cultural biking, Arusha National Park, Materuni waterfalls, and Kikuletwa hot springs.',
    highlights: [
      'Comprehensive 14-day itinerary leaving no national park or cultural treasure unseen',
      'Extended 4 nights in the Serengeti covering both Central Seronera and Migration corridors',
      'Ngorongoro Crater full-day descent with prime rhino and lion viewing',
      'Hadzabe and Datoga tribal encounters at Lake Eyasi',
      'Arusha National Park guided walking safari and canoe option',
      'Chagga coffee tour at Materuni Waterfall & swim in Kikuletwa hot springs'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Arusha — Karibu Tanzania',
        description: 'Arrive at Kilimanjaro International Airport (JRO). Meet your private Our Trip Africa expedition team and transfer to your peaceful lodge in Arusha.',
        meals: 'Dinner',
        accommodation: 'Charity Hotel / Mount Meru Hotel Arusha'
      },
      {
        day: 2,
        title: 'Arusha to Tarangire National Park',
        description: 'Full day game drive in Tarangire National Park exploring giant baobabs and massive elephant herds along the Tarangire River.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Marera Valley Lodge / Twiga Lodge'
      },
      {
        day: 3,
        title: 'Tarangire to Central Serengeti National Park',
        description: 'Drive through Ngorongoro highlands to Serengeti National Park. Afternoon game drive in the Seronera Valley.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Into Wild Africa Tented Camp'
      },
      {
        day: 4,
        title: 'Central Serengeti Big Cats Safari',
        description: 'Dawn to dusk safari in the Seronera river valley tracking lion prides, elusive leopards, and cheetahs.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Into Wild Africa Tented Camp'
      },
      {
        day: 5,
        title: 'Central to Northern Serengeti (Mara River Region)',
        description: 'Journey north toward the Mara River corridor where the Great Migration herds congregate for dramatic river crossings.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Heritage Mara Camp / Kenzan Mara Tented Camp'
      },
      {
        day: 6,
        title: 'Full Day Mara River Great Migration Crossings',
        description: 'Stationed along the Mara River to witness heart-pounding wildebeest and zebra river crossings facing Nile crocodiles.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Heritage Mara Camp / Kenzan Mara Tented Camp'
      },
      {
        day: 7,
        title: 'Northern Serengeti to Ngorongoro Conservation Area',
        description: 'Morning game drive south through the savannah. Late afternoon arrival at the lush forested rim of Ngorongoro Crater.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Rhino Lodge / Ngorongoro Serena'
      },
      {
        day: 8,
        title: 'Ngorongoro Crater Floor Safari',
        description: 'Descend into the 600m caldera. High concentration of wildlife including black rhinos, hippos, lions, and flamingos.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Farm House Valley Karatu'
      },
      {
        day: 9,
        title: 'Lake Eyasi Hadzabe & Datoga Tribal Encounters',
        description: 'Early morning hunting with Hadzabe bushmen. Visit Datoga blacksmiths and walk along Lake Eyasi’s salt flats.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Lake Eyasi Safari Lodge'
      },
      {
        day: 10,
        title: 'Mto wa Mbu Cultural Village & Lake Manyara',
        description: 'Guided bicycle or walking tour in Mto wa Mbu village through rice fields and banana groves. View Lake Manyara.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Bougainvillea Safari Lodge'
      },
      {
        day: 11,
        title: 'Arusha National Park & Walking Safari',
        description: 'Game drive through Momella Lakes and Ngurdoto Crater followed by an armed ranger-guided walking safari.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Charity Hotel Arusha'
      },
      {
        day: 12,
        title: 'Materuni Waterfall & Kilimanjaro Coffee Tour',
        description: 'Hike to the 90m Materuni Waterfall. Participate in a traditional Chagga organic coffee ceremony.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Meru View Lodge / Charity Hotel'
      },
      {
        day: 13,
        title: 'Kikuletwa Geothermal Hot Springs Relaxation',
        description: 'Relax and swim in the clear turquoise pools of Kikuletwa (Chemka) hot springs surrounded by wild fig trees.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Charity Hotel Arusha'
      },
      {
        day: 14,
        title: 'Arusha Souvenirs & Airport Departure',
        description: 'Relaxation, shopping for tanzanite and local crafts, and private transfer to Kilimanjaro Airport (JRO).',
        meals: 'Breakfast',
        accommodation: 'Departure'
      }
    ]
  },

  // 11. Zanzibar Package – 4 Days / 3 Nights | Group of 8 People (Flyo package)
  {
    id: 'pkg-11',
    slug: 'zanzibar-package-4-days-3-nights-group-of-8-people',
    title: 'Zanzibar Island Getaway — 4 Days / 3 Nights',
    seoTitle: 'Zanzibar Island Getaway - 4 Days / 3 Nights | Zanzibar Tour',
    seoDescription: 'Book Zanzibar Island Getaway — 4 Days / 3 Nights with Our Trip Africa. Explore Stone Town & Safari Blue Marine Reserve, Zanzibar on a 4 days / 3 nights beach holiday package in Zanzibar. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Arus',
    seoKeywords: ['Zanzibar holiday packages', 'Zanzibar beach holidays', 'Zanzibar tours', 'Stone Town tour', 'Nungwi beach holiday', 'beach holiday', '4 days / 3 nights'],
    destination: 'Stone Town & Safari Blue Marine Reserve, Zanzibar',
    country: 'Zanzibar',
    category: 'Beach Holiday',
    durationDays: 4,
    durationNights: 3,
    durationLabel: '4 Days / 3 Nights',
    basePrice: 858,
    currency: 'USD',
    priceNote: 'Starting from $858 per person (Group of 8 rate)',
    tierPricing: {
      budget: 858,
      midrange: 1180,
      luxury: 1890
    },
    minGuests: 2,
    maxGuests: 8,
    rating: 4.96,
    reviewsCount: 42,
    featured: false,
    bestTime: 'Year-Round',
    physicalRating: 'Easy',
    heroImage: LOCAL_IMAGES.zanzibar,
    gallery: [
      LOCAL_IMAGES.zanzibar,
      'https://flyo4business.s3.ap-south-1.amazonaws.com/images/11972_1780907575862_WhatsApp_Image_2026_06_08_at_1.12.06_PM.jpeg',
      'https://flyo4business.s3.ap-south-1.amazonaws.com/images/11972_1780907576712_WhatsApp_Image_2026_06_08_at_1.12.07_PM.jpeg'
    ],
    overview: 'A fast-paced tropical holiday featuring UNESCO Stone Town, Prison Island giant tortoises, an organic spice plantation, and the world-acclaimed Safari Blue dhow cruise with fresh grilled lobster lunch on a sandbank.',
    highlights: [
      'Stone Town historic walking tour through carved doorways and bustling bazaars',
      'Visit 150-year-old giant tortoises at Prison Island (Changuu)',
      'Full-day Safari Blue dhow cruise with coral reef snorkeling and sandbank seafood feast',
      'Sensory spice farm excursion tasting cloves, cinnamon, and fresh tropical fruit',
      'Private air-conditioned minibus transportation throughout'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Zanzibar & Stone Town Cultural Tour',
        description: 'Airport meet & greet. Transfer to hotel. Afternoon walking tour of Stone Town exploring the Old Fort, House of Wonders, and Sultan’s Palace. Evening stroll at Forodhani waterfront.',
        meals: 'Dinner',
        accommodation: 'Tembo House Hotel / Maru Maru Hotel'
      },
      {
        day: 2,
        title: 'Spice Farm Tour & Prison Island Giant Tortoises',
        description: 'Morning boat ride to Prison Island to feed giant Aldabra tortoises. Afternoon spice tour discovering Zanzibar’s famous spice trade history.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Tembo House Hotel / Maru Maru Hotel'
      },
      {
        day: 3,
        title: 'Full Day Safari Blue Marine Adventure',
        description: 'Sail on a handcrafted wooden dhow across Menai Bay. Snorkel among tropical reef fish, explore mangroves, and feast on grilled lobster on an ocean sandbank.',
        meals: 'Breakfast, Seafood Lunch',
        accommodation: 'Tembo House Hotel / Ocean Paradise Resort'
      },
      {
        day: 4,
        title: 'Leisure & Zanzibar Airport Transfer',
        description: 'Morning leisure for souvenir shopping in Stone Town before your private transfer to Zanzibar International Airport.',
        meals: 'Breakfast',
        accommodation: 'Departure'
      }
    ]
  },

  // 12. Kenya Safari: 4 Days Maasai Mara Great Migration
  {
    id: 'pkg-12',
    slug: '4-days-maasai-mara-wildlife-safari',
    title: '4 Days Maasai Mara Great Migration Safari',
    seoTitle: '4 Days Maasai Mara Great Migration Safari | Kenya Tour',
    seoDescription: 'Book 4 Days Maasai Mara Great Migration Safari with Our Trip Africa. Explore Maasai Mara National Reserve, Kenya on a 4 days / 3 nights wildlife safari package in Kenya. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Arusha.',
    seoKeywords: ['Kenya safari packages', 'Kenya wildlife safari', 'Maasai Mara safari', 'Kenya private safari', 'African safari tours', 'wildlife safari', '4 days / 3 nights'],
    destination: 'Maasai Mara National Reserve, Kenya',
    country: 'Kenya',
    category: 'Wildlife Safari',
    durationDays: 4,
    durationNights: 3,
    durationLabel: '4 Days / 3 Nights',
    basePrice: 1290,
    currency: 'USD',
    priceNote: 'Starting from $1,290 (Budget) / $1,690 (Mid-Range) / $2,490 (Luxury)',
    tierPricing: {
      budget: 1290,
      midrange: 1690,
      luxury: 2490
    },
    minGuests: 2,
    maxGuests: 7,
    rating: 4.97,
    reviewsCount: 57,
    featured: true,
    bestTime: 'July – October (Great Migration) & Year-Round',
    physicalRating: 'Easy',
    heroImage: LOCAL_IMAGES.lion,
    gallery: [
      LOCAL_IMAGES.lion,
      LOCAL_IMAGES.hero,
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
    ],
    overview: 'Experience Kenya’s crown jewel: the vast savannahs of the Maasai Mara. Renowned for having the highest concentration of lions and cheetahs in Africa, spectacular Mara River crossings, and authentic Maasai cultural encounters.',
    highlights: [
      'Two full days exploring the legendary plains of Maasai Mara National Reserve',
      'Prime predator action: lion prides, cheetah hunts, and elusive leopards in riverine forests',
      'Mara River game drives to witness wildebeest herds and massive Nile crocodiles',
      'Optional hot air balloon safari over the Mara at sunrise with champagne breakfast',
      'Authentic Maasai warrior cultural village visit'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Maasai Mara National Reserve',
        description: 'Morning pickup from Nairobi. Drive through the Great Rift Valley with a scenic viewpoint stop. Arrive at Maasai Mara in time for lunch. Late afternoon game drive until sunset.',
        meals: 'Lunch, Dinner',
        accommodation: 'Enkorok Mara Camp / Mara Sopa Lodge'
      },
      {
        day: 2,
        title: 'Full Day Game Drive in Maasai Mara',
        description: 'Full day game drive with picnic lunch. Head to the Mara River border of Serengeti to observe massive herds, hippos, and crocodiles.',
        meals: 'Breakfast, Picnic Lunch, Dinner',
        accommodation: 'Enkorok Mara Camp / Mara Sopa Lodge'
      },
      {
        day: 3,
        title: 'Morning Game Drive & Maasai Village Cultural Visit',
        description: 'Dawn game drive when predators are most active. Afternoon visit to an authentic Maasai Manyatta to learn about warrior traditions and dances.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Enkorok Mara Camp / Mara Sopa Lodge'
      },
      {
        day: 4,
        title: 'Maasai Mara to Nairobi',
        description: 'Final sunrise game drive. Breakfast at camp before departing across the Great Rift Valley back to Nairobi Jomo Kenyatta Airport.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ]
  },

  // 13. Kenya Safari: 7 Days Best of Kenya Explorer
  {
    id: 'pkg-13',
    slug: '7-days-best-of-kenya-explorer',
    title: '7 Days Best of Kenya: Mara, Nakuru & Amboseli',
    seoTitle: '7 Days Best of Kenya: Mara, Nakuru & Amboseli | Kenya Tour',
    seoDescription: 'Book 7 Days Best of Kenya: Mara, Nakuru & Amboseli with Our Trip Africa. Explore Maasai Mara, Lake Nakuru & Amboseli (Kilimanjaro views), Kenya on a 7 days / 6 nights wildlife safari package in Kenya. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal plan',
    seoKeywords: ['Kenya safari packages', 'Kenya wildlife safari', 'Maasai Mara safari', 'Kenya private safari', 'African safari tours', 'wildlife safari', '7 days / 6 nights'],
    destination: 'Maasai Mara, Lake Nakuru & Amboseli (Kilimanjaro views), Kenya',
    country: 'Kenya',
    category: 'Wildlife Safari',
    durationDays: 7,
    durationNights: 6,
    durationLabel: '7 Days / 6 Nights',
    basePrice: 2180,
    currency: 'USD',
    priceNote: 'Starting from $2,180 (Budget) / $2,850 (Mid-Range) / $4,120 (Luxury)',
    tierPricing: {
      budget: 2180,
      midrange: 2850,
      luxury: 4120
    },
    minGuests: 2,
    maxGuests: 7,
    rating: 4.98,
    reviewsCount: 39,
    featured: true,
    bestTime: 'Year-Round',
    physicalRating: 'Easy',
    heroImage: LOCAL_IMAGES.kilimanjaro,
    gallery: [
      LOCAL_IMAGES.kilimanjaro,
      LOCAL_IMAGES.hero,
      LOCAL_IMAGES.lion
    ],
    overview: 'The definitive Kenyan safari circuit: iconic Maasai Mara wildlife, Lake Nakuru’s endangered white and black rhinos and flamingos, and Amboseli National Park with massive elephant herds against the snows of Mount Kilimanjaro.',
    highlights: [
      'Amboseli National Park: World’s most famous elephant portraits under Mount Kilimanjaro',
      'Lake Nakuru: Rhino sanctuary protecting both black and white rhinos, plus flamingos',
      '3 full days in Maasai Mara tracking the Big Five and Great Migration',
      'Private 4x4 Land Cruiser with knowledgeable Kenyan naturalist guide'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Amboseli National Park',
        description: 'Depart Nairobi for Amboseli at the foot of Kilimanjaro. Afternoon game drive among large elephant herds.',
        meals: 'Lunch, Dinner',
        accommodation: 'Amboseli Serena Lodge / Kibo Safari Camp'
      },
      {
        day: 2,
        title: 'Full Day in Amboseli National Park',
        description: 'Marvel at the dawn view of snow-capped Kilimanjaro. Full day safari exploring Observation Hill and Enkongo Narok swamps.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Amboseli Serena Lodge / Kibo Safari Camp'
      },
      {
        day: 3,
        title: 'Amboseli to Lake Nakuru National Park',
        description: 'Drive via Nairobi into the Great Rift Valley. Afternoon game drive in Lake Nakuru Sanctuary for rhinos and Rothschild giraffes.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Lake Nakuru Lodge / Sarova Lion Hill'
      },
      {
        day: 4,
        title: 'Lake Nakuru to Maasai Mara National Reserve',
        description: 'Scenic drive to Maasai Mara. Afternoon game drive into predator territory.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Mara Sopa Lodge / Ashnil Mara Camp'
      },
      {
        day: 5,
        title: 'Full Day in Maasai Mara',
        description: 'Full day safari tracking lion prides, cheetahs, leopards, and millions of grazing ungulates.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Mara Sopa Lodge / Ashnil Mara Camp'
      },
      {
        day: 6,
        title: 'Second Day in Maasai Mara & Cultural Immersion',
        description: 'Explore the Mara River crossings and visit a traditional Maasai community.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Mara Sopa Lodge / Ashnil Mara Camp'
      },
      {
        day: 7,
        title: 'Maasai Mara to Nairobi & Departure',
        description: 'Morning game drive, breakfast, and return to Nairobi for your onward flight.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ]
  },

  // 14. Uganda: 4 Days Bwindi Mountain Gorilla Trekking Expedition
  {
    id: 'pkg-14',
    slug: '4-days-bwindi-mountain-gorilla-trekking',
    title: '4 Days Bwindi Mountain Gorilla Trekking Expedition',
    seoTitle: '4 Days Bwindi Mountain Gorilla Trekking Expedition | Uganda Tour',
    seoDescription: 'Book 4 Days Bwindi Mountain Gorilla Trekking Expedition with Our Trip Africa. Explore Bwindi Impenetrable National Park, Uganda on a 4 days / 3 nights wildlife safari package in Uganda. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Arush',
    seoKeywords: ['Uganda safari packages', 'Uganda gorilla trekking', 'Bwindi gorilla tours', 'Uganda wildlife safari', 'Uganda tours', 'wildlife safari', '4 days / 3 nights'],
    destination: 'Bwindi Impenetrable National Park, Uganda',
    country: 'Uganda',
    category: 'Wildlife Safari',
    durationDays: 4,
    durationNights: 3,
    durationLabel: '4 Days / 3 Nights',
    basePrice: 1950,
    currency: 'USD',
    priceNote: 'Starting from $1,950 per person (Includes official $800 UWA Gorilla Permit)',
    tierPricing: {
      budget: 1950,
      midrange: 2480,
      luxury: 3850
    },
    minGuests: 1,
    maxGuests: 8,
    rating: 4.99,
    reviewsCount: 68,
    featured: true,
    bestTime: 'June – September & December – February',
    physicalRating: 'Challenging',
    heroImage: LOCAL_IMAGES.gorilla,
    gallery: [
      LOCAL_IMAGES.gorilla,
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
      LOCAL_IMAGES.hero
    ],
    overview: 'The holy grail of wildlife encounters on Earth: looking directly into the soulful brown eyes of an endangered wild mountain gorilla silverback in the mist-shrouded prehistoric rainforest of Bwindi Impenetrable National Park.',
    highlights: [
      'Official Uganda Wildlife Authority (UWA) Mountain Gorilla Trekking Permit included ($800 value)',
      'Spend 1 magical hour within meters of a habituated wild mountain gorilla family',
      'Trek with expert Uganda Wildlife Authority trackers, rangers, and researchers',
      'Scenic journey across the rolling emerald hills of southwestern Uganda ("The Pearl of Africa")',
      'Equator monument photo stop and Batwa pygmy cultural community visit'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Entebbe / Kigali to Bwindi Impenetrable Forest',
        description: 'Morning pickup from Entebbe or Kigali (Rwanda). Drive through the dramatic terraced hills of Kigezi ("Switzerland of Africa"). Check into your forest lodge nestled on the edge of the mist.',
        meals: 'Lunch, Dinner',
        accommodation: 'Bakiga Lodge / Mahogany Springs Lodge'
      },
      {
        day: 2,
        title: 'The Gorilla Trekking Day in Bwindi Rainforest',
        description: 'Early morning briefing by UWA rangers. Enter the dense tangled canopy following tracks. Encounter the gorilla family and spend one unforgettable hour observing infants play, females groom, and the silverback watch vigilantly.',
        meals: 'Breakfast, Packed Lunch, Dinner',
        accommodation: 'Bakiga Lodge / Mahogany Springs Lodge'
      },
      {
        day: 3,
        title: 'Batwa Forest Cultural Experience & Lake Bunyonyi',
        description: 'Morning walk with the indigenous Batwa forest dwellers learning ancient hunting and herbal healing techniques. Afternoon transfer to the serene, bilharzia-free waters of Lake Bunyonyi for a canoe cruise.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Birdnest Resort Lake Bunyonyi'
      },
      {
        day: 4,
        title: 'Return to Entebbe / Kigali & Departure',
        description: 'Scenic morning drive back with a stop at the Uganda Equator line for Coriolis effect demonstrations. Transfer to airport for flight.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ]
  },

  // 15. Uganda: 6 Days Gorillas & Chimpanzees Wildlife Safari
  {
    id: 'pkg-15',
    slug: '6-days-uganda-gorillas-chimps-wildlife',
    title: '6 Days Uganda Primates: Gorillas, Chimps & Wildlife',
    seoTitle: '6 Days Uganda Primates: Gorillas, Chimps & Wildlife | Uganda Tour',
    seoDescription: 'Book 6 Days Uganda Primates: Gorillas, Chimps & Wildlife with Our Trip Africa. Explore Bwindi, Kibale Forest & Queen Elizabeth National Park, Uganda on a 6 days / 5 nights wildlife safari package in Uganda. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and persona',
    seoKeywords: ['Uganda safari packages', 'Uganda gorilla trekking', 'Bwindi gorilla tours', 'Uganda wildlife safari', 'Uganda tours', 'wildlife safari', '6 days / 5 nights'],
    destination: 'Bwindi, Kibale Forest & Queen Elizabeth National Park, Uganda',
    country: 'Uganda',
    category: 'Wildlife Safari',
    durationDays: 6,
    durationNights: 5,
    durationLabel: '6 Days / 5 Nights',
    basePrice: 2890,
    currency: 'USD',
    priceNote: 'Starting from $2,890 per person (Includes Gorilla & Chimp permits)',
    tierPricing: {
      budget: 2890,
      midrange: 3580,
      luxury: 4950
    },
    minGuests: 2,
    maxGuests: 6,
    rating: 4.98,
    reviewsCount: 36,
    featured: false,
    bestTime: 'June – October & December – March',
    physicalRating: 'Challenging',
    heroImage: LOCAL_IMAGES.gorilla,
    gallery: [
      LOCAL_IMAGES.gorilla,
      LOCAL_IMAGES.lion,
      LOCAL_IMAGES.hero
    ],
    overview: 'Uganda’s premier primate and savannah safari: Mountain gorillas in Bwindi, wild chimpanzee tracking in Kibale Forest, tree-climbing lions in Ishasha, and a boat safari on the Kazinga Channel surrounded by thousands of hippos.',
    highlights: [
      'Mountain Gorilla permit ($800) + Chimpanzee trekking permit ($250) included',
      'Chimpanzee tracking in Kibale Forest National Park with 13 primate species',
      'Boat cruise on Kazinga Channel with the world’s highest density of hippos',
      'Spot rare tree-climbing lions resting in giant fig trees in Ishasha Sector',
      'Savannah game drive in Queen Elizabeth National Park for elephants and leopards'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Entebbe to Kibale Forest (Primate Capital)',
        description: 'Drive westward through lush tea plantations to Kibale National Park.',
        meals: 'Lunch, Dinner',
        accommodation: 'Turaco Treetops / Primate Lodge Kibale'
      },
      {
        day: 2,
        title: 'Chimpanzee Tracking & Transfer to Queen Elizabeth NP',
        description: 'Morning chimpanzee trekking through Kibale forest. Afternoon drive to Queen Elizabeth National Park.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Enganzi Lodge / Mweya Safari Lodge'
      },
      {
        day: 3,
        title: 'Kazinga Channel Boat Safari & Ishasha Tree-Climbing Lions',
        description: 'Morning game drive. Afternoon boat cruise on Kazinga Channel. Drive to Ishasha sector.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Ishasha Jungle Lodge'
      },
      {
        day: 4,
        title: 'Ishasha to Bwindi Impenetrable Forest',
        description: 'Morning search for tree-climbing lions. Continue into the mist-covered mountains of Bwindi.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Bakiga Lodge / Mahogany Springs'
      },
      {
        day: 5,
        title: 'Gorilla Trekking in Bwindi',
        description: 'Once-in-a-lifetime trek to spend one hour with the gentle giant mountain gorillas.',
        meals: 'Breakfast, Packed Lunch, Dinner',
        accommodation: 'Bakiga Lodge / Mahogany Springs'
      },
      {
        day: 6,
        title: 'Return to Entebbe & Departure',
        description: 'Return drive through Mbarara and Equator line to Entebbe for night departure.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ]
  },

  // 16. South Africa: 6 Days Cape Town & Greater Kruger Safari
  {
    id: 'pkg-16',
    slug: '6-days-cape-town-kruger-safari',
    title: '6 Days South Africa Highlights: Cape Town & Kruger',
    seoTitle: '6 Days South Africa Highlights: Cape Town & Kruger | South Africa Tour',
    seoDescription: 'Book 6 Days South Africa Highlights: Cape Town & Kruger with Our Trip Africa. Explore Cape Town & Greater Kruger National Park, South Africa on a 6 days / 5 nights wildlife safari package in South Africa. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal ',
    seoKeywords: ['South Africa tour packages', 'South Africa safari', 'Kruger National Park safari', 'Cape Town tours', 'South Africa holidays', 'wildlife safari', '6 days / 5 nights'],
    destination: 'Cape Town & Greater Kruger National Park, South Africa',
    country: 'South Africa',
    category: 'Wildlife Safari',
    durationDays: 6,
    durationNights: 5,
    durationLabel: '6 Days / 5 Nights',
    basePrice: 2350,
    currency: 'USD',
    priceNote: 'Starting from $2,350 per person',
    tierPricing: {
      budget: 2350,
      midrange: 3150,
      luxury: 4890
    },
    minGuests: 2,
    maxGuests: 8,
    rating: 4.96,
    reviewsCount: 41,
    featured: false,
    bestTime: 'Year-Round (Best May – October for Kruger)',
    physicalRating: 'Easy',
    heroImage: LOCAL_IMAGES.lion,
    gallery: [
      LOCAL_IMAGES.lion,
      LOCAL_IMAGES.hero,
      LOCAL_IMAGES.zanzibar
    ],
    overview: 'The quintessential South African experience combining the natural cosmopolitan beauty of Cape Town, Table Mountain, and penguin colonies with heart-pounding open-vehicle Big Five game drives in a premier private reserve in Greater Kruger.',
    highlights: [
      'Ascend iconic Table Mountain via cableway for sweeping Atlantic Ocean panoramas',
      'Cape Point, Cape of Good Hope, and Boulders Beach African Penguin colony',
      '3 days of private Big Five open-vehicle game drives in Greater Kruger private reserve',
      'Nocturnal spotlight night drives tracking leopards and hyenas',
      'Boma dinners under the southern celestial night sky'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Cape Town & V&A Waterfront',
        description: 'Arrive at Cape Town International Airport. Private transfer to your hotel. Afternoon at leisure at the vibrant Victoria & Alfred Waterfront.',
        meals: 'Dinner',
        accommodation: 'The Commodore Hotel V&A Waterfront'
      },
      {
        day: 2,
        title: 'Table Mountain & Cape Peninsula Tour',
        description: 'Ride the rotating cableway to Table Mountain summit. Continue along Chapman’s Peak Drive to Cape Point and visit African penguins at Boulders Beach.',
        meals: 'Breakfast, Lunch',
        accommodation: 'The Commodore Hotel V&A Waterfront'
      },
      {
        day: 3,
        title: 'Cape Winelands Excursion (Stellenbosch & Franschhoek)',
        description: 'Explore historical Cape Dutch architecture, vineyard cellars, and wine tasting in Franschhoek and Stellenbosch.',
        meals: 'Breakfast, Lunch',
        accommodation: 'The Commodore Hotel V&A Waterfront'
      },
      {
        day: 4,
        title: 'Fly to Kruger & Sunset Open-Vehicle Game Drive',
        description: 'Morning flight to Kruger (Hoedspruit). Transfer to private game lodge. Sunset open-vehicle safari tracking lions and rhinos. Traditional bush boma dinner.',
        meals: 'Breakfast, Dinner',
        accommodation: 'Kapama River Lodge / Shiduli Game Lodge'
      },
      {
        day: 5,
        title: 'Full Day Kruger Big Five Game Drives & Walking Safari',
        description: 'Dawn game drive with morning coffee in the bush. Bush walking safari with armed ranger. Afternoon drive into the night with spotlight.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Kapama River Lodge / Shiduli Game Lodge'
      },
      {
        day: 6,
        title: 'Final Sunrise Safari & Departure to Johannesburg',
        description: 'Final sunrise game drive to bid farewell to the African bush. Breakfast and transfer to airport for departure.',
        meals: 'Breakfast',
        accommodation: 'Departure'
      }
    ]
  },

  // 17. Kenya: 5 Days Amboseli & Tsavo Elephant Wilderness Safari (Kenya Package 3)
  {
    id: 'pkg-17',
    slug: '5-days-amboseli-tsavo-elephant-wilderness',
    title: '5 Days Amboseli & Tsavo Elephant Wilderness Safari',
    seoTitle: '5 Days Amboseli & Tsavo Elephant Wilderness Safari | Kenya Tour',
    seoDescription: 'Book 5 Days Amboseli & Tsavo Elephant Wilderness Safari with Our Trip Africa. Explore Amboseli & Tsavo West National Parks, Kenya on a 5 days / 4 nights wildlife safari package in Kenya. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Arus',
    seoKeywords: ['Kenya safari packages', 'Kenya wildlife safari', 'Maasai Mara safari', 'Kenya private safari', 'African safari tours', 'wildlife safari', '5 days / 4 nights'],
    destination: 'Amboseli & Tsavo West National Parks, Kenya',
    country: 'Kenya',
    category: 'Wildlife Safari',
    durationDays: 5,
    durationNights: 4,
    durationLabel: '5 Days / 4 Nights',
    basePrice: 1590,
    currency: 'USD',
    priceNote: 'Starting from $1,590 per person',
    tierPricing: {
      budget: 1590,
      midrange: 2150,
      luxury: 3290
    },
    minGuests: 2,
    maxGuests: 7,
    rating: 4.95,
    reviewsCount: 32,
    featured: false,
    bestTime: 'Year-Round (Best June – October & January – March)',
    physicalRating: 'Easy',
    heroImage: LOCAL_IMAGES.kilimanjaro,
    gallery: [
      LOCAL_IMAGES.kilimanjaro,
      LOCAL_IMAGES.hero,
      LOCAL_IMAGES.lion
    ],
    overview: 'A breathtaking wildlife circuit exploring southern Kenya’s most dramatic landscapes: massive elephant families beneath Mount Kilimanjaro in Amboseli, the famous red elephants of Tsavo West, and the crystal-clear natural springs of Mzima.',
    highlights: [
      'Iconic photographs of massive elephant herds with snow-capped Mount Kilimanjaro in the background',
      'Observation Hill walk offering panoramic views over Amboseli’s vast marshlands',
      'Tsavo West volcanic Shetani lava flow and Mzima Springs underwater hippo viewing chamber',
      'High probability of seeing lions, cheetahs, leopards, and endangered black rhinos in Ngulia sanctuary',
      'Private 4x4 Land Cruiser with pop-up photography roof throughout'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Nairobi to Amboseli National Park',
        description: 'Morning drive south through the scenic Maasai plains to Amboseli National Park. Arrive in time for lunch. Late afternoon game drive with breathtaking views of Mount Kilimanjaro.',
        meals: 'Lunch, Dinner',
        accommodation: 'Kibo Safari Camp / Amboseli Serena Lodge'
      },
      {
        day: 2,
        title: 'Full Day in Amboseli National Park',
        description: 'Sunrise safari when Kilimanjaro’s snow-capped peaks are clearest. Explore the Enkongo Narok swamps where elephant herds bathe alongside hippos, pelicans, and buffaloes.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Kibo Safari Camp / Amboseli Serena Lodge'
      },
      {
        day: 3,
        title: 'Amboseli to Tsavo West National Park',
        description: 'Depart after breakfast, crossing volcanic plains into Tsavo West. Visit the black Shetani lava flows and enjoy an afternoon game drive visiting the Ngulia Rhino Sanctuary.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Kilaguni Serena Safari Lodge / Severin Safari Camp'
      },
      {
        day: 4,
        title: 'Mzima Springs & Tsavo West Wilderness Safari',
        description: 'Morning walking safari at Mzima Springs. Watch hippos and crocodiles swimming from an underwater glass observatory. Afternoon game drive tracking lions and Tsavo’s famous red-dusted elephants.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Kilaguni Serena Safari Lodge / Severin Safari Camp'
      },
      {
        day: 5,
        title: 'Tsavo West to Nairobi or Diani Beach (Mombasa)',
        description: 'Final early morning game drive. Enjoy a warm lodge breakfast before departing back to Nairobi or continuing to the coastal sands of Diani Beach / Mombasa.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Departure'
      }
    ]
  },

  // 18. South Africa: 4 Days Greater Kruger Big Five Safari (South Africa Package 2)
  {
    id: 'pkg-18',
    slug: '4-days-greater-kruger-big-five-safari',
    title: '4 Days Greater Kruger Big Five Private Reserve Safari',
    seoTitle: '4 Days Greater Kruger Big Five Private Reserve Safari | South Africa Tour',
    seoDescription: 'Book 4 Days Greater Kruger Big Five Private Reserve Safari with Our Trip Africa. Explore Greater Kruger Private Game Reserve, South Africa on a 4 days / 3 nights wildlife safari package in South Africa. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal pl',
    seoKeywords: ['South Africa tour packages', 'South Africa safari', 'Kruger National Park safari', 'Cape Town tours', 'South Africa holidays', 'wildlife safari', '4 days / 3 nights'],
    destination: 'Greater Kruger Private Game Reserve, South Africa',
    country: 'South Africa',
    category: 'Wildlife Safari',
    durationDays: 4,
    durationNights: 3,
    durationLabel: '4 Days / 3 Nights',
    basePrice: 1480,
    currency: 'USD',
    priceNote: 'Starting from $1,480 per person',
    tierPricing: {
      budget: 1480,
      midrange: 1980,
      luxury: 2950
    },
    minGuests: 2,
    maxGuests: 8,
    rating: 4.97,
    reviewsCount: 38,
    featured: false,
    bestTime: 'May – October (Dry season optimal game viewing)',
    physicalRating: 'Easy',
    heroImage: LOCAL_IMAGES.lion,
    gallery: [
      LOCAL_IMAGES.lion,
      LOCAL_IMAGES.hero
    ],
    overview: 'An intensive Big Five immersion in an unfenced private game reserve sharing an open border with Kruger National Park. Enjoy off-road tracking of leopards and lions in open 4x4 vehicles, thrilling night drives, and guided bush walks with armed trackers.',
    highlights: [
      'Twice-daily open-top 4x4 game drives allowed off-road for close leopard and lion sightings',
      'Nocturnal spotlight drives tracking active predators under starlit African skies',
      'Guided morning wilderness walking safaris learning bush survival and spoor tracking',
      'Authentic open-air boma dinners around roaring log fires',
      'All-inclusive private lodge accommodation with swimming pool overlooking waterhole'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival at Greater Kruger & Sunset Safari',
        description: 'Meet at Hoedspruit Airport. Transfer to your luxury safari lodge. Afternoon high tea followed by your first open-vehicle safari. Stop for sundowner drinks in the bush before returning after dark with a spotlight.',
        meals: 'Dinner',
        accommodation: 'Shiduli Game Lodge / Kapama Buffalo Camp'
      },
      {
        day: 2,
        title: 'Full Day Big Five Tracking & Bush Walk',
        description: 'Wake up before dawn with hot coffee. Embark on a 3-hour morning game drive tracking lion prides. Return to lodge for brunch, followed by a guided walking safari. Afternoon safari until nightfall.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Shiduli Game Lodge / Kapama Buffalo Camp'
      },
      {
        day: 3,
        title: 'Private Reserve Safari & Riverbed Wildlife',
        description: 'Explore deep riverbeds and rocky outcrops for leopards and rhinos. Relax during the midday heat by the lodge swimming pool watching elephants at the waterhole. Evening boma dinner feast.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Shiduli Game Lodge / Kapama Buffalo Camp'
      },
      {
        day: 4,
        title: 'Sunrise Game Drive & Departure',
        description: 'Final early morning drive in search of cheetahs and wild dogs. Enjoy breakfast and transfer to Hoedspruit Airport for your connecting flight to Johannesburg.',
        meals: 'Breakfast',
        accommodation: 'Departure'
      }
    ]
  },

  // 19. South Africa: 8 Days Cape Town, Garden Route & Eastern Cape (South Africa Package 3)
  {
    id: 'pkg-19',
    slug: '8-days-cape-town-garden-route-safari',
    title: '8 Days Cape Town, Garden Route & Eastern Cape Big Five',
    seoTitle: '8 Days Cape Town, Garden Route & Eastern Cape Big Five | South Africa Tour',
    seoDescription: 'Book 8 Days Cape Town, Garden Route & Eastern Cape Big Five with Our Trip Africa. Explore Cape Town, Knysna, Tsitsikamma & Addo Elephant, South Africa on a 8 days / 7 nights grand circuit package in South Africa. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and p',
    seoKeywords: ['South Africa tour packages', 'South Africa safari', 'Kruger National Park safari', 'Cape Town tours', 'South Africa holidays', 'grand circuit', '8 days / 7 nights'],
    destination: 'Cape Town, Knysna, Tsitsikamma & Addo Elephant, South Africa',
    country: 'South Africa',
    category: 'Grand Circuit',
    durationDays: 8,
    durationNights: 7,
    durationLabel: '8 Days / 7 Nights',
    basePrice: 2690,
    currency: 'USD',
    priceNote: 'Starting from $2,690 per person',
    tierPricing: {
      budget: 2690,
      midrange: 3450,
      luxury: 4890
    },
    minGuests: 2,
    maxGuests: 8,
    rating: 4.98,
    reviewsCount: 29,
    featured: false,
    bestTime: 'September – May (Spring to Autumn)',
    physicalRating: 'Easy',
    heroImage: LOCAL_IMAGES.zanzibar,
    gallery: [
      LOCAL_IMAGES.zanzibar,
      LOCAL_IMAGES.lion,
      LOCAL_IMAGES.hero
    ],
    overview: 'The ultimate South African coastal and wildlife road expedition. Journey from cosmopolitan Cape Town and Table Mountain along the breathtaking Garden Route through Knysna and Tsitsikamma, culminating in a malaria-free Big Five safari in Addo Elephant National Park.',
    highlights: [
      'Table Mountain cableway and Cape Peninsula penguin colony at Boulders Beach',
      'Scenic drive along the world-renowned Garden Route coastline',
      'Oudtshoorn ancient Cango Caves and Knysna lagoon sunset cruise',
      'Tsitsikamma National Park suspension bridge walk over storm river gorge',
      'Malaria-free Big Five game drives in Addo Elephant National Park & private reserve'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Cape Town & City Orientation',
        description: 'Welcome to Cape Town. Transfer to your waterfront hotel. Afternoon at leisure exploring the Victoria & Alfred Waterfront.',
        meals: 'Dinner',
        accommodation: 'Radisson RED / Victoria & Alfred Hotel'
      },
      {
        day: 2,
        title: 'Table Mountain & Cape Point Peninsula',
        description: 'Ascend Table Mountain via cable car. Drive along Chapman’s Peak to Cape Point and visit the African penguins at Boulders Beach.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Radisson RED / Victoria & Alfred Hotel'
      },
      {
        day: 3,
        title: 'Cape Winelands to Oudtshoorn',
        description: 'Travel through the Robertson wine valley and scenic Route 62 to the semi-arid Klein Karoo. Visit the ancient limestone Cango Caves.',
        meals: 'Breakfast, Dinner',
        accommodation: 'Surval Boutique Olive Estate Oudtshoorn'
      },
      {
        day: 4,
        title: 'Oudtshoorn to Knysna & Garden Route',
        description: 'Cross the Outeniqua Mountain Pass to the lush coastal town of Knysna. Afternoon sunset catamaran cruise on Knysna Lagoon to the Heads.',
        meals: 'Breakfast, Lunch',
        accommodation: 'Protea Hotel Knysna Quays / Knysna Hollow'
      },
      {
        day: 5,
        title: 'Tsitsikamma Forest to Eastern Cape Reserve',
        description: 'Explore the indigenous ancient forests of Tsitsikamma National Park. Walk the suspension bridge over Storms River Mouth. Continue to private safari reserve.',
        meals: 'Breakfast, Dinner',
        accommodation: 'Amakhala Game Reserve / Kariega Game Reserve'
      },
      {
        day: 6,
        title: 'Full Day Eastern Cape Big Five Safari',
        description: 'Morning and afternoon open 4x4 game drives in malaria-free private wilderness. Track lions, elephants, rhinos, cheetahs, and giraffes. Bush boma dinner.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Amakhala Game Reserve / Kariega Game Reserve'
      },
      {
        day: 7,
        title: 'Addo Elephant National Park Safari',
        description: 'Game drive through Addo Elephant Park, home to over 600 wild elephants. Afternoon spa relaxation and sundowner game drive.',
        meals: 'Breakfast, Lunch, Dinner',
        accommodation: 'Amakhala Game Reserve / Kariega Game Reserve'
      },
      {
        day: 8,
        title: 'Final Sunrise Safari & Departure from Port Elizabeth (Gqeberha)',
        description: 'Final morning open-vehicle game drive. Breakfast and road transfer to Port Elizabeth Airport (PLZ) for your flight home.',
        meals: 'Breakfast',
        accommodation: 'Departure'
      }
    ]
  },

  // 20. UAE: 5 Days Dubai Luxury Desert Safari & Modern Wonders (UAE Package 1)
  {
    id: 'pkg-20',
    slug: '5-days-dubai-luxury-desert-safari',
    title: '5 Days Dubai Luxury Desert Safari & Modern Marvels',
    seoTitle: '5 Days Dubai Luxury Desert Safari & Modern Marvels | UAE Tour',
    seoDescription: 'Book 5 Days Dubai Luxury Desert Safari & Modern Marvels with Our Trip Africa. Explore Dubai & Arabian Desert, United Arab Emirates on a 5 days / 4 nights city & desert tour package in UAE. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Ar',
    seoKeywords: ['Dubai holiday packages', 'UAE tour packages', 'Dubai city tours', 'Abu Dhabi tours', 'Dubai desert safari', 'city & desert tour', '5 days / 4 nights'],
    destination: 'Dubai & Arabian Desert, United Arab Emirates',
    country: 'UAE',
    category: 'City & Desert Tour',
    durationDays: 5,
    durationNights: 4,
    durationLabel: '5 Days / 4 Nights',
    basePrice: 1150,
    currency: 'USD',
    priceNote: 'Starting from $1,150 per person',
    tierPricing: {
      budget: 1150,
      midrange: 1650,
      luxury: 2750
    },
    minGuests: 2,
    maxGuests: 12,
    rating: 4.97,
    reviewsCount: 44,
    featured: true,
    bestTime: 'October – April (Pleasant Arabian winter weather)',
    physicalRating: 'Easy',
    heroImage: LOCAL_IMAGES.uaeDubai,
    gallery: [
      LOCAL_IMAGES.uaeDubai,
      LOCAL_IMAGES.uaeAbuDhabi,
      LOCAL_IMAGES.zanzibar
    ],
    overview: 'An unforgettable fusion of Arabian desert heritage and futuristic luxury. Experience heart-pounding 4x4 red dune bashing in the Dubai Desert Conservation Reserve, sunset camel riding, an authentic Bedouin camp BBQ feast with fire dancers, the Burj Khalifa observation deck, and a luxury Dubai Marina dinner cruise.',
    highlights: [
      'Exciting 4x4 red dune desert safari, sandboarding, and camel riding at sunset',
      'VIP Bedouin desert camp with multi-course BBQ dinner, tanoura show, and belly dancing',
      'Burj Khalifa fast-track access to the 124th & 125th floor "At The Top" observation decks',
      'Dubai Marina luxury glass Dhow dinner cruise with illuminated skyscraper skyline views',
      'Old Dubai heritage walking tour: abra water taxi across Dubai Creek, Gold & Spice Souks'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai & Evening Marina Dhow Cruise',
        description: 'Meet and greet at Dubai International Airport (DXB). Private transfer to your hotel. Evening luxury wooden Dhow cruise along Dubai Marina canal with gourmet dinner beneath illuminated skyscrapers.',
        meals: 'Dinner',
        accommodation: 'Millennium Place Marina / JW Marriott Marquis Dubai'
      },
      {
        day: 2,
        title: 'Modern Dubai Tour & Burj Khalifa At The Top',
        description: 'Morning tour of modern Dubai: drive past the sail-shaped Burj Al Arab, Palm Jumeirah, and Dubai Frame. In the afternoon, visit Dubai Mall and ascend to the 124th floor of Burj Khalifa for panoramic city views. Watch the Dubai Fountain show.',
        meals: 'Breakfast',
        accommodation: 'Millennium Place Marina / JW Marriott Marquis Dubai'
      },
      {
        day: 3,
        title: 'Old Dubai Cultural Souks & Red Dune Desert Safari',
        description: 'Morning visit to Al Fahidi historical district, ride a traditional Abra boat across Dubai Creek, and explore the aromatic Spice Souk and Gold Souk. At 3:00 PM, depart in 4x4 Land Cruisers for the Lahbab red dunes. Sunset photo stops, sandboarding, camel rides, and an Arabian BBQ dinner under the stars.',
        meals: 'Breakfast, BBQ Dinner',
        accommodation: 'Millennium Place Marina / JW Marriott Marquis Dubai'
      },
      {
        day: 4,
        title: 'Day at Leisure or Optional Yacht Cruise / Miracle Garden',
        description: 'A day at leisure to relax by the hotel infinity pool, shop at the world-famous Dubai Mall or Mall of the Emirates, or book an optional private yacht charter around Palm Jumeirah.',
        meals: 'Breakfast',
        accommodation: 'Millennium Place Marina / JW Marriott Marquis Dubai'
      },
      {
        day: 5,
        title: 'Dubai Souvenirs & Airport Departure',
        description: 'Enjoy a leisurely breakfast. Last-minute shopping before your private executive transfer to Dubai International Airport (DXB) for your flight.',
        meals: 'Breakfast',
        accommodation: 'Departure'
      }
    ]
  },

  // 21. UAE: 7 Days Grand UAE Explorer: Dubai, Abu Dhabi & Arabian Sands (UAE Package 2)
  {
    id: 'pkg-21',
    slug: '7-days-grand-uae-explorer-dubai-abu-dhabi',
    title: '7 Days Grand UAE Explorer: Dubai & Abu Dhabi',
    seoTitle: '7 Days Grand UAE Explorer: Dubai & Abu Dhabi | UAE Tour',
    seoDescription: 'Book 7 Days Grand UAE Explorer: Dubai & Abu Dhabi with Our Trip Africa. Explore Dubai & Abu Dhabi, United Arab Emirates on a 7 days / 6 nights city & desert tour package in UAE. Discover iconic attractions with local travel experts, flexible budget, mid-range and luxury options, and personal planning from Arusha.',
    seoKeywords: ['Dubai holiday packages', 'UAE tour packages', 'Dubai city tours', 'Abu Dhabi tours', 'Dubai desert safari', 'city & desert tour', '7 days / 6 nights'],
    destination: 'Dubai & Abu Dhabi, United Arab Emirates',
    country: 'UAE',
    category: 'City & Desert Tour',
    durationDays: 7,
    durationNights: 6,
    durationLabel: '7 Days / 6 Nights',
    basePrice: 1890,
    currency: 'USD',
    priceNote: 'Starting from $1,890 per person',
    tierPricing: {
      budget: 1890,
      midrange: 2580,
      luxury: 3950
    },
    minGuests: 2,
    maxGuests: 12,
    rating: 4.99,
    reviewsCount: 36,
    featured: true,
    bestTime: 'October – April',
    physicalRating: 'Easy',
    heroImage: LOCAL_IMAGES.uaeAbuDhabi,
    gallery: [
      LOCAL_IMAGES.uaeAbuDhabi,
      LOCAL_IMAGES.uaeDubai,
      LOCAL_IMAGES.hero
    ],
    overview: 'The definitive United Arab Emirates experience combining the modern spectacle of Dubai with the imperial grandeur and cultural masterpieces of the capital, Abu Dhabi. Features the architectural marvel of Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, Burj Khalifa, and desert glamping.',
    highlights: [
      'Comprehensive Abu Dhabi day tour: Sheikh Zayed Grand Mosque, Louvre Abu Dhabi, and Qasr Al Watan Presidential Palace',
      'Burj Khalifa 124th floor observation deck and Dubai Mall Fountain spectacle',
      'Exclusive overnight or sunset desert glamping experience in Dubai red dunes',
      'Palm Jumeirah Monorail ride and visit to Atlantis The Royal',
      'Old Dubai Creek Abra crossing, Gold Souk, and cultural heritage exploration'
    ],
    inclusions: [
      "Airport pick-up and drop-off.",
      "Private 4x4 safari vehicle.",
      "Professional English-speaking safari guide.",
      "All national park entry fees.",
      "All accommodation as per itinerary.",
      "Meals as specified in the itinerary.",
      "Bottled drinking water during safari.",
      "Game drives.",
      "Government taxes and applicable levies.",
      "Hotel transfers as specified in the itinerary."
    ],
    exclusions: [
      "International flights.",
      "Visa fees.",
      "Travel insurance.",
      "Personal expenses.",
      "Tips and gratuities.",
      "Alcoholic and premium beverages.",
      "Laundry services.",
      "Optional activities not listed in the itinerary.",
      "Extra accommodation outside the itinerary.",
      "Any services not specifically mentioned under What's Included."
    ],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Dubai & Hotel Check-in',
        description: 'Private airport meet and transfer to your luxury Dubai hotel. Evening orientation walk around Downtown Dubai.',
        meals: 'Dinner',
        accommodation: 'JW Marriott Marquis Dubai / Address Downtown'
      },
      {
        day: 2,
        title: 'Full Day Iconic Dubai: Burj Khalifa & Dubai Mall',
        description: 'Ascend Burj Khalifa (124th & 125th floors). Walk through Dubai Aquarium underwater tunnel. Afternoon shopping in Dubai Mall and evening fountain light show.',
        meals: 'Breakfast',
        accommodation: 'JW Marriott Marquis Dubai / Address Downtown'
      },
      {
        day: 3,
        title: 'Old Dubai Heritage & Evening Desert Safari',
        description: 'Explore the wind-tower architecture of Al Fahidi, ride a wooden Abra across the Creek, and visit the Spice & Gold Souks. Afternoon 4x4 desert safari with dune bashing and Bedouin campfire banquet.',
        meals: 'Breakfast, Dinner',
        accommodation: 'JW Marriott Marquis Dubai / Address Downtown'
      },
      {
        day: 4,
        title: 'Palm Jumeirah & Marina Luxury Dhow Cruise',
        description: 'Ride the Palm Jumeirah Monorail to Atlantis. Tour Bluewaters Island and Ain Dubai. Evening 5-star dinner cruise along Dubai Marina.',
        meals: 'Breakfast, Dinner',
        accommodation: 'JW Marriott Marquis Dubai / Address Downtown'
      },
      {
        day: 5,
        title: 'Day Trip to Abu Dhabi: Sheikh Zayed Grand Mosque & Louvre',
        description: 'Scenic drive to the UAE capital, Abu Dhabi. Tour the awe-inspiring white marble Sheikh Zayed Grand Mosque with crystal chandeliers. Continue to Saadiyat Island to visit the world-class Louvre Abu Dhabi.',
        meals: 'Breakfast, Lunch',
        accommodation: 'St. Regis Abu Dhabi / JW Marriott Marquis'
      },
      {
        day: 6,
        title: 'Qasr Al Watan Presidential Palace & Corniche Drive',
        description: 'Visit the magnificent Qasr Al Watan (Palace of the Nation) celebrating Arabian design. Stroll along the Abu Dhabi Corniche before returning to Dubai.',
        meals: 'Breakfast',
        accommodation: 'JW Marriott Marquis Dubai'
      },
      {
        day: 7,
        title: 'Leisure & Airport Departure',
        description: 'Enjoy a leisurely breakfast and private transfer to Dubai International Airport (DXB) for your flight home.',
        meals: 'Breakfast',
        accommodation: 'Departure'
      }
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-6',
    slug: 'tanzania-safari-travel-guide',
    title: 'Tanzania Safaris: A Complete Guide to Wildlife, Parks and Planning Your Journey',
    category: 'Travel Guides',
    readTime: '7 min read',
    publishedDate: 'November 8, 2026',
    author: { name: 'Our Trip Africa Team', role: 'Tanzania Safari Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/1776627302280_aeeffdfe.jpg',
    excerpt: 'Discover the Serengeti, Ngorongoro Crater, Tarangire and Lake Manyara, and learn how to choose the right season, itinerary and safari style for your Tanzania adventure.',
    seoDescription: 'Plan a Tanzania safari with this guide to national parks, wildlife experiences, seasons, safari durations and budget, mid-range and luxury travel styles.',
    tags: ['Tanzania Safaris', 'Serengeti', 'Ngorongoro', 'Tarangire', 'Safari Planning'],
    content: [
      'Tanzania is one of Africa’s most rewarding safari destinations, with vast savannahs, volcanic landscapes, ancient baobab trees and remarkable concentrations of wildlife. A well-planned journey can bring together several different ecosystems and give travellers a varied picture of the country.',
      'The Serengeti National Park is famous for its open plains, resident predators and the annual movement of wildebeest and zebra. The timing and location of the herds change throughout the year, so the best route depends on your travel dates and the wildlife experiences you hope to see.',
      'The Ngorongoro Crater offers a dramatic setting for game drives and is known for its rich wildlife habitat. Tarangire National Park is celebrated for its elephant herds and baobab-studded scenery, while Lake Manyara offers a compact mix of forest, lake shore and open habitats. Your itinerary can focus on one region or combine several parks.',
      'The dry season, often from around June to October, can make wildlife easier to spot as animals gather around water sources. The green seasons bring fresh landscapes, birdlife and, in some areas, calving activity. Conditions vary by region, and every season has its own appeal.',
      'How long should you stay? A short safari can introduce you to one or two parks, while a longer journey allows more time in the Serengeti and additional stops. When planning, consider driving distances, arrival and departure times, the pace you prefer and whether you want to combine your safari with Zanzibar.',
      'Choose the comfort level that suits you. Budget trips may use simple campsites, mid-range journeys typically include comfortable lodges or tented camps, and luxury safaris feature premium accommodation and added services. The final quotation depends on dates, group size, accommodation, park fees and the itinerary.',
      'Our Trip Africa can help you compare routes and accommodation options for a private or group safari. Share your travel dates, group size and preferred budget so the team can suggest a practical itinerary.'
    ]
  },
  {
    id: 'post-7',
    slug: 'kenya-safari-guide-maasai-mara-amboseli',
    title: 'Kenya Safaris: Explore Maasai Mara, Amboseli and Kenya’s Diverse Landscapes',
    category: 'Travel Guides',
    readTime: '6 min read',
    publishedDate: 'November 8, 2026',
    author: { name: 'Our Trip Africa Team', role: 'East Africa Travel Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/1788252043526_202ccf55.jpg',
    excerpt: 'From big-cat country in the Maasai Mara to elephant views beneath Mount Kilimanjaro in Amboseli, explore the highlights of a Kenya safari.',
    seoDescription: 'A practical Kenya safari guide covering Maasai Mara, Amboseli, wildlife seasons, itinerary planning and combining Kenya with Tanzania.',
    tags: ['Kenya Safaris', 'Maasai Mara', 'Amboseli', 'East Africa'],
    content: [
      'Kenya offers a wonderful variety of safari landscapes, from rolling grasslands and open plains to lakes, woodlands and mountain views. It is an excellent destination for travellers who want memorable wildlife encounters and the opportunity to experience different regions in one trip.',
      'The Maasai Mara National Reserve is renowned for its large predator populations and open savannah scenery. It is also part of the wider Mara–Serengeti ecosystem, where wildebeest and zebra move across the border region during their annual migration. River crossings are natural events and cannot be guaranteed on a particular day.',
      'Amboseli National Park is well known for its elephants and, when weather conditions allow, striking views of Mount Kilimanjaro. Other possible additions include Lake Nakuru, often visited for its birdlife and rhinos, and Samburu, which has distinctive dry-country wildlife and scenery.',
      'The best time to visit depends on the parks and experiences you want. The drier months can offer easier game viewing in many areas, while greener months may bring beautiful scenery and excellent birdwatching. Wildlife sightings are never guaranteed, so allow enough time and keep your plans flexible.',
      'A Kenya itinerary can be arranged as a short focused safari or as a longer circuit. Travellers may also combine Kenya and Tanzania in one East African holiday, with the route planned around border logistics, flight connections, travel time and the season.',
      'When comparing safari quotations, check what is included: accommodation, meals, park fees, transport, guide services, transfers and any domestic flights. Budget, mid-range and luxury options are available depending on the location, dates and accommodation selected.',
      'Our Trip Africa can assist with planning a Kenya safari or a combined Kenya–Tanzania journey. Tell us which parks interest you, your dates and the type of experience you prefer.'
    ]
  },
  {
    id: 'post-8',
    slug: 'uganda-safari-gorilla-trekking-guide',
    title: 'Uganda Safaris: Gorilla Trekking, Wildlife and the Beauty of the Pearl of Africa',
    category: 'Wildlife Spotlights',
    readTime: '7 min read',
    publishedDate: 'November 8, 2026',
    author: { name: 'Our Trip Africa Team', role: 'East Africa Travel Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/1793450997914_ae622466.jpg',
    excerpt: 'Discover Uganda’s mountain gorillas, forest walks, savannah wildlife and scenic national parks, with practical advice for planning a responsible visit.',
    seoDescription: 'Explore Uganda safari highlights including Bwindi gorilla trekking, Queen Elizabeth National Park, Murchison Falls and travel planning tips.',
    tags: ['Uganda Safaris', 'Gorilla Trekking', 'Bwindi', 'Murchison Falls', 'Queen Elizabeth'],
    content: [
      'Uganda is often called the Pearl of Africa, and its landscapes make it a distinctive destination for nature lovers. Tropical forests, crater lakes, wetlands, rivers and savannah parks create opportunities for a varied journey that can include primates, classic game drives and beautiful scenery.',
      'Bwindi Impenetrable National Park is one of the best-known places to track endangered mountain gorillas. Gorilla trekking is conducted with trained park guides and requires a valid permit issued by the relevant wildlife authority. Permits are limited, and travellers should confirm current fees, availability and rules before making final arrangements.',
      'Queen Elizabeth National Park combines savannah game viewing with wetlands and the Kazinga Channel, where boat trips can offer views of hippos, elephants and abundant birdlife. Murchison Falls National Park is known for the Nile River, its powerful waterfall and game drives across open landscapes.',
      'Kibale Forest is a popular destination for chimpanzee tracking. As with gorilla trekking, visits are regulated to protect wildlife and reduce disturbance. Follow guide instructions, maintain the required distance and never visit primates when you are unwell.',
      'A Uganda safari may involve long road journeys between parks, so allow enough days rather than trying to fit too many locations into a short trip. Comfortable walking shoes, rain protection, neutral outdoor clothing and a small daypack are useful for forest activities.',
      'The best itinerary depends on your interests, fitness, travel dates and permit availability. A gorilla trekking holiday can be combined with other parks, or planned as a focused forest experience. Check entry requirements, health guidance and current park regulations before departure.',
      'Our Trip Africa can help coordinate a Uganda itinerary and discuss how it may fit into a wider East African holiday. Gorilla permits and other regulated activities must be confirmed before they can be treated as secured.'
    ]
  },
  {
    id: 'post-9',
    slug: 'zanzibar-holidays-beaches-culture-travel-guide',
    title: 'Zanzibar Holidays: Beautiful Beaches, Stone Town Culture and Island Experiences',
    category: 'Cultural Experiences',
    readTime: '6 min read',
    publishedDate: 'November 8, 2026',
    author: { name: 'Our Trip Africa Team', role: 'Zanzibar Travel Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/Screenshot_20260929_194629_Gallery_51f1a0f7.jpg',
    excerpt: 'Plan an island escape with Zanzibar’s beaches, historic Stone Town, spice experiences, ocean excursions and the option to add a Tanzania safari.',
    seoDescription: 'Plan Zanzibar holidays with a guide to beaches, Stone Town, spice tours, ocean activities, seasons and combining the island with a Tanzania safari.',
    tags: ['Zanzibar Holidays', 'Stone Town', 'Beach Holiday', 'Spice Tours', 'Tanzania'],
    content: [
      'Zanzibar is an inviting Indian Ocean destination where beautiful beaches meet Swahili culture and a rich history shaped by centuries of trade. Visitors can enjoy a relaxed beach stay, explore historic streets, take boat excursions or combine the island with a wildlife safari on mainland Tanzania.',
      'Stone Town is a fascinating place to discover on foot. Its narrow lanes, carved wooden doors, historic buildings and lively markets reflect a blend of African, Arab, Indian and European influences. A guided walk can help visitors understand the town’s history and cultural heritage.',
      'The island has beaches to suit different travel styles. Nungwi and Kendwa in the north are popular for swimming and sunset views, while the east coast offers a quieter atmosphere and a more noticeable tidal rhythm. Ask about the tide conditions and beach location when choosing accommodation.',
      'Spice tours introduce visitors to some of the plants and ingredients associated with Zanzibar’s history. Depending on the season and operator, other experiences may include dhow sailing, snorkelling, sandbank visits, local food experiences and excursions to nearby islands.',
      'Zanzibar can be enjoyed throughout the year, but weather patterns vary. Many visitors prefer the drier periods for beach time, while the greener or wetter seasons can offer a different atmosphere and may suit travellers with flexible plans. Check local forecasts for your travel dates.',
      'For a memorable combination, spend several days on safari in destinations such as Serengeti or Ngorongoro before flying to Zanzibar to relax by the ocean. When planning the connection, consider flight schedules, luggage arrangements and enough time between services.',
      'Whether you are planning a honeymoon, family holiday, friends’ getaway or a quiet retreat, accommodation can be selected across budget, mid-range and luxury categories. Our Trip Africa can help tailor the length of stay, excursions and transfers to your preferences.'
    ]
  }
,
  {
    id: "post-10",
    slug: "best-tour-operator-tanzania-zanzibar",
    title: "Best Tour Operator in Tanzania and Zanzibar: Why Choose Our Trip Africa?",
    category: "Company News",
    readTime: "8 min read",
    publishedDate: "November 9, 2026",
    author: { name: 'Our Trip Africa Team', role: 'Local Tanzania Travel Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/20260919_111305_8de8147f.png',
    excerpt: "Discover what to look for in a reliable Tanzania and Zanzibar tour operator, from local knowledge and carefully planned safaris to island transfers and personal guest support.",
    seoDescription: "Looking for the best tour operator in Tanzania and Zanzibar? Learn what makes a reliable local safari company and how Our Trip Africa plans wildlife, cultural and beach holidays.",
    tags: ["Best Tour Operator Tanzania","Zanzibar Tour Operator","Tanzania Safari Company","Local Safari Experts"],
    mapLinks: [["Arusha, Tanzania","https://www.google.com/maps/search/?api=1&query=Arusha+Tanzania"],["Serengeti National Park","https://www.google.com/maps/search/?api=1&query=Serengeti+National+Park+Tanzania"],["Zanzibar","https://www.google.com/maps/search/?api=1&query=Zanzibar+Tanzania"]],
    content: [
          "Choosing the right tour operator is one of the most important decisions when planning a holiday in Tanzania and Zanzibar. A good operator does much more than reserve a vehicle or hotel. The team should understand the destinations, explain realistic travel times, recommend suitable seasons, coordinate accommodation and transfers, and remain available when plans need attention. The best choice is therefore not simply the company with the lowest advertised price; it is the operator that offers clear communication, a well-designed itinerary and dependable arrangements that match the traveller’s expectations.",
          "Our Trip Africa is a Tanzania-based travel company established in 2021 and based in the Arusha area, the gateway to many of the country’s celebrated northern safari destinations. The company helps travellers plan wildlife safaris, cultural experiences, mountain adventures and Zanzibar holidays. Its aim is to connect guests with the landscapes, wildlife, communities and coastlines that make Tanzania distinctive. Whether a visitor is planning a first safari, a family holiday, a honeymoon or a longer East African journey, the itinerary can be discussed around dates, interests, group size and preferred comfort level.",
          "A strong local operator should know how the northern safari circuit fits together. Serengeti National Park is famous for open plains, predators and the Great Migration; Ngorongoro Crater offers a remarkable wildlife landscape within a volcanic caldera; Tarangire is known for elephants and baobab scenery; and Lake Manyara provides a contrasting mix of forest, lake shore and escarpment views. These places are not interchangeable, and the right combination depends on the number of days available. Our Trip Africa can help travellers compare routes rather than trying to squeeze too many parks into a rushed schedule.",
          "Zanzibar requires a different kind of planning. Travellers need to consider which coast suits them, the rhythm of ocean tides, transfer time from the airport or ferry terminal, and the balance between beach relaxation and excursions. The north around Nungwi and Kendwa is popular for swimming and sunsets, while parts of the east coast are known for wide beaches, resorts and a more noticeable tidal change. Stone Town adds history, architecture, markets and Swahili culture. A well-planned holiday allows enough time to enjoy the island rather than treating it as a quick stop after a demanding safari.",
          "One advantage of working with a Tanzania-based team is the ability to coordinate the safari and beach portions as one journey. A typical combination may begin with arrival near Kilimanjaro International Airport, continue through Tarangire, Serengeti and Ngorongoro, and finish with a flight to Zanzibar. The exact order can change according to flight schedules, park conditions, accommodation availability and the traveller’s priorities. When comparing proposals, ask whether domestic flights, airport transfers, park fees, meals, accommodation, guide services and activities are included or quoted separately.",
          "Before choosing any tour operator, ask practical questions. Who will meet you on arrival? What type of safari vehicle is used? Is the guide experienced in the parks on your route? How many people will share the vehicle? What happens if a flight is delayed? Are accommodation names and room categories stated? Is there a clear cancellation policy? Are the inclusions and exclusions written down? A professional company should welcome these questions and provide a detailed itinerary and transparent quotation. Travellers should also verify licences, payment instructions and company contact details before sending money.",
          "Our Trip Africa offers different travel styles, which may include budget, mid-range and luxury accommodation depending on destination and availability. Budget travel can be a practical way to experience the parks while keeping costs controlled. Mid-range lodges and tented camps provide additional comfort, while luxury properties focus on location, service and distinctive settings. The final cost depends on season, group size, number of nights, park fees, accommodation and transport. A fair comparison looks at the complete trip rather than comparing one headline price with another.",
          "Responsible travel should also be part of the decision. Visitors can support conservation by following park rules, keeping a respectful distance from wildlife, avoiding litter and listening to their guide. Cultural visits should be arranged respectfully, with community participation and permission rather than treating people as attractions. Travellers can ask how local guides, drivers, camps and community partners are involved in the journey. Thoughtful planning helps create a positive experience for guests while respecting the places and people who make the destination special.",
          "If you are comparing tour operators for Tanzania and Zanzibar, start with your travel dates, the experiences that matter most and the amount of time you have. Share whether you prefer a private safari or a group departure, your accommodation style and whether you want to add Kilimanjaro, cultural visits or extra beach nights. Our Trip Africa can use those details to suggest a realistic route and prepare a proposal for your consideration. A memorable holiday begins with honest advice, careful coordination and an itinerary designed around the traveller."
    ]
  },
  {
    id: "post-11",
    slug: "best-time-to-visit-tanzania-zanzibar",
    title: "Best Time to Visit Tanzania and Zanzibar: A Complete Month-by-Month Guide",
    category: "Travel Guides",
    readTime: "10 min read",
    publishedDate: "November 9, 2026",
    author: { name: 'Our Trip Africa Team', role: 'Local Tanzania Travel Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/20261024_122515_aa5135aa.png',
    excerpt: "Compare Tanzania’s safari seasons with Zanzibar’s coastal weather and choose the right months for the Great Migration, calving season, beaches and quieter travel.",
    seoDescription: "Find the best time to visit Tanzania and Zanzibar with a month-by-month guide to safari wildlife, Great Migration, calving season, rainfall and beach weather.",
    tags: ["Best Time Tanzania","Best Time Zanzibar","Tanzania Weather","Great Migration"],
    mapLinks: [["Serengeti National Park","https://www.google.com/maps/search/?api=1&query=Serengeti+National+Park"],["Ndutu, Ngorongoro Conservation Area","https://www.google.com/maps/search/?api=1&query=Ndutu+Tanzania"],["Nungwi Beach, Zanzibar","https://www.google.com/maps/search/?api=1&query=Nungwi+Beach+Zanzibar"]],
    content: [
          "There is no single perfect month for every traveller in Tanzania and Zanzibar. The best time depends on what you want to experience: excellent general wildlife viewing, the wildebeest calving season, a chance of seeing river crossings, birdwatching, fewer visitors or sunny beach days. Tanzania is a large country with different local climates, while Zanzibar has a tropical coastal climate. Planning both destinations together means balancing the safari experience with the weather and activities you want on the island.",
          "June to October is generally the long dry-season window and one of the most popular periods for a classic northern Tanzania safari. Vegetation becomes thinner in many areas and wildlife may gather around remaining water sources, which can make animals easier to spot. Days are often sunny, although early mornings in the Serengeti and Ngorongoro highlands can feel cold. This period is also associated with the northern movement of the Great Migration. The herds’ exact position changes with rainfall and grazing, so a river crossing should never be promised for a particular date.",
          "January to March is especially interesting for travellers who want to focus on the southern Serengeti and Ndutu area. The wildebeest calving season commonly takes place around this period, with large numbers of young animals attracting predators. The green landscapes can be beautiful for photography and birdlife. Weather can be warm and there may be showers, but this does not mean safari viewing stops. The right camp location matters because the herds move around the ecosystem rather than remaining in one place.",
          "November and December are often associated with the short rains. Showers can refresh the landscape, migratory birds arrive and visitor numbers may be lower than during the busiest dry-season weeks. The herds generally begin moving south as new grass develops. These months can suit travellers who appreciate green scenery and have some flexibility. Rainfall patterns vary from year to year, so it is sensible to check current conditions and choose accommodation with suitable access to the planned areas.",
          "April and May are commonly the main long-rain period in much of northern Tanzania. The countryside can be lush and atmospheric, and some properties may offer lower seasonal rates. However, heavy rain can make some tracks muddy, affect driving times and lead some camps or lodges to close temporarily. This period may suit travellers who are comfortable with changing conditions and want a quieter experience, but it requires careful checking of camp operations, road access and flight plans before booking.",
          "Zanzibar has its own seasonal considerations. June to October is often favoured for relatively dry, comfortable beach weather, while December to February is another popular warm period. April and May are generally wetter months, and some visitors prefer to avoid planning a beach-focused holiday during the heaviest rains. The island is warm throughout the year, but wind, humidity and local conditions can influence how a particular beach feels. Check the forecast close to departure and choose accommodation based on the coast and activities you prefer.",
          "Tides are an important part of choosing a Zanzibar beach. On parts of the east coast, the sea retreats significantly at low tide, revealing tidal flats and shallow lagoons. This can be beautiful for walks and observing the coastline, but it may affect swimming directly from the beach at certain hours. Nungwi and Kendwa in the north are often selected by visitors who prioritise swimming and sunset views, although sea conditions still vary. Ask the hotel or local operator about tide patterns and beach access before confirming your stay.",
          "January and February can combine warm beach conditions with a safari focused on calving season. June to October can be a strong choice for travellers who want a dry-season safari followed by beach time. November and early December may offer greener scenery and potentially quieter travel, while April and May require more flexibility. These are broad seasonal guides, not guarantees. Wildlife movements depend on rainfall, and weather can vary between the mainland parks, highlands and coast.",
          "A useful month-by-month approach is to match the month with the priority. January–March: consider southern Serengeti calving and warm Zanzibar days. April–May: expect the long rains in many regions and confirm camp operations carefully. June: the dry season develops and safari conditions often improve. July–September: popular months for northern Serengeti migration viewing and beach holidays. October: generally a good dry-season safari month, with the herds’ location changing. November–December: short rains, greener scenery and the herds moving south. Always confirm the latest park and weather advice before travel.",
          "When combining the mainland and Zanzibar, allow enough time for transfers. A safari may finish at an airstrip or in Arusha before a domestic flight to the island. Build in a sensible connection buffer, especially if separate tickets are involved, and check baggage limits for small aircraft. Our Trip Africa can help match the safari region to your travel dates and coordinate the island stay. Tell the team whether your priority is migration, calving, Big Five viewing, birding, swimming or a relaxed beach break, and the route can be planned accordingly."
    ]
  },
  {
    id: "post-12",
    slug: "best-tanzania-zanzibar-tour-packages-safari-beach",
    title: "Best Tanzania and Zanzibar Tour Packages: Safari and Beach Holiday Guide",
    category: "Travel Guides",
    readTime: "11 min read",
    publishedDate: "November 9, 2026",
    author: { name: 'Our Trip Africa Team', role: 'Local Tanzania Travel Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/Screenshot_20260527_120120_ChatGPT_18140df3.jpg',
    excerpt: "Plan a combined Tanzania wildlife safari and Zanzibar beach escape, with two sample itineraries, travel tips and advice on choosing accommodation.",
    seoDescription: "Explore Tanzania and Zanzibar tour packages with two sample safari-and-beach itineraries covering Serengeti, Ngorongoro, Tarangire and Zanzibar.",
    tags: ["Tanzania Tour Packages","Zanzibar Holiday Packages","Safari and Beach","Tanzania Itinerary"],
    mapLinks: [["Tarangire National Park","https://www.google.com/maps/search/?api=1&query=Tarangire+National+Park"],["Serengeti National Park","https://www.google.com/maps/search/?api=1&query=Serengeti+National+Park"],["Ngorongoro Crater","https://www.google.com/maps/search/?api=1&query=Ngorongoro+Crater"],["Stone Town, Zanzibar","https://www.google.com/maps/search/?api=1&query=Stone+Town+Zanzibar"]],
    content: [
          "A Tanzania and Zanzibar holiday combines two very different experiences in one journey: wildlife-rich national parks on the mainland and an Indian Ocean island known for beaches, history and Swahili culture. The most successful packages give each part enough time. Rather than rushing through several parks and leaving only one night for the coast, plan a route that allows unhurried game drives, comfortable transfers and a few days to enjoy Zanzibar.",
          "The northern safari circuit is a natural starting point for many first-time visitors. Tarangire National Park is known for elephants, baobab trees and seasonal wildlife concentrations. Serengeti National Park offers expansive plains, predators and the moving herds of the Great Migration. Ngorongoro Crater provides a distinctive caldera setting with a high density of wildlife in a relatively compact area. Lake Manyara can add forest, birdlife and lake scenery when time allows. The best combination depends on the season and the number of days available.",
          "Zanzibar adds a slower rhythm after early morning game drives. Visitors can spend time on beaches, explore Stone Town, join a spice farm visit, take a dhow cruise or arrange snorkelling and other ocean activities. The island is not just a beach destination: its architecture, food, markets and layered history make it worthwhile to spend time away from the resort. When selecting a beach hotel, consider tides, swimming conditions, location and the transfer time from the airport.",
          "Sample itinerary one: 10 Days Tanzania Safari and Zanzibar Holiday. Day 1: arrive at Kilimanjaro International Airport or Arusha, meet the local team and rest after the journey. Day 2: travel to Tarangire for a game drive among baobabs and elephant country, then overnight near the park. Day 3: continue toward the Serengeti with wildlife viewing en route. Day 4: enjoy a full day of game drives in the Serengeti, with the route selected according to the season and herd movements. Day 5: another Serengeti game drive before travelling toward the Ngorongoro highlands. Day 6: descend into Ngorongoro Crater for a game drive and continue to the next overnight stop. Day 7: transfer to the airport and fly to Zanzibar, then settle into your beach accommodation. Days 8–9: enjoy beach time and choose an optional Stone Town, spice, sailing or marine excursion. Day 10: transfer to Zanzibar Airport for departure.",
          "Sample itinerary two: 12 Days Tanzania Wildlife Safari and Zanzibar Beach Escape. Day 1: arrive in Arusha and relax. Day 2: explore Tarangire National Park. Day 3: travel through the Ngorongoro highlands toward the Serengeti, enjoying wildlife viewing along the way. Days 4–5: spend two full days exploring the Serengeti, with the area chosen to match seasonal wildlife movements. Day 6: travel to the Ngorongoro Conservation Area and overnight on the crater rim or nearby, depending on the selected lodge. Day 7: descend into the crater for a game drive, then return to Arusha or an airport connection as planned. Day 8: fly to Zanzibar and transfer to the chosen coast. Days 9–11: enjoy three days for swimming when conditions allow, relaxing, exploring Stone Town or joining selected excursions. Day 12: transfer to the airport for departure.",
          "These itineraries are planning examples, not fixed departures or guaranteed wildlife schedules. They can be adjusted for flight times, accommodation availability, park regulations, group size, budget and the season. Travellers who want more time in the Serengeti may reduce the number of other stops. Families with young children may prefer shorter driving days and lodges with suitable facilities. Honeymooners may choose a private vehicle, special room arrangements and a quieter beach property. The right package is the one that fits the travellers rather than simply including the largest number of destinations.",
          "Accommodation can be arranged in different comfort categories. Budget options may include simple campsites or practical lodges, depending on the route. Mid-range packages often use comfortable lodges and tented camps, while luxury journeys select premium properties and may include private transfers or flights to reduce road time. Compare what is actually included: park and conservation fees, accommodation, meals, vehicle, guide, airport transfers, domestic flights, excursions and taxes. Ask whether drinks, tips, travel insurance and optional activities are excluded.",
          "Before confirming a package, check passport and visa requirements for your nationality, travel insurance, recommended health advice, luggage limits on small aircraft and the cancellation terms. If you are visiting during peak months, reserve accommodation and flights early. Keep a little flexibility in the schedule in case of weather or airline changes. For Zanzibar, ask about tide conditions and whether the hotel is on the coast that best matches your preferred activities.",
          "Our Trip Africa can help tailor a Tanzania and Zanzibar package around your dates, group size, interests and preferred accommodation. Share whether you want a short safari, extra time in the Serengeti, a cultural experience or more beach days. The team can then suggest a route and provide a clear quotation with inclusions and exclusions so you can compare options confidently."
    ]
  },
  {
    id: "post-13",
    slug: "serengeti-safari-guide-wildlife-migration",
    title: "Serengeti Safari Guide: Wildlife, Great Migration, Best Time and Travel Tips",
    category: "Wildlife Spotlights",
    readTime: "10 min read",
    publishedDate: "November 9, 2026",
    author: { name: 'Our Trip Africa Team', role: 'Local Tanzania Travel Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/20260321_120937_f48b28a3.jpg',
    excerpt: "Everything to know before a Serengeti safari: regions, resident wildlife, migration seasons, game drives, accommodation and practical planning tips.",
    seoDescription: "Plan a Serengeti safari with this guide to wildlife, Great Migration timing, park regions, best months, accommodation and travel advice.",
    tags: ["Serengeti Safari","Great Migration","Tanzania Wildlife","Serengeti National Park"],
    mapLinks: [["Seronera, Central Serengeti","https://www.google.com/maps/search/?api=1&query=Seronera+Serengeti"],["Northern Serengeti","https://www.google.com/maps/search/?api=1&query=Northern+Serengeti+Tanzania"],["Ndutu Plains","https://www.google.com/maps/search/?api=1&query=Ndutu+Tanzania"]],
    content: [
          "Serengeti National Park is one of Africa’s best-known wildlife destinations, celebrated for vast grasslands, rocky kopjes, big cats and the Great Migration. The name Serengeti is often associated with endless plains, but the park is more varied than a single landscape. Open savannah, riverine woodland, rocky outcrops and seasonal grasslands support a wide range of wildlife. A well-planned safari gives time to explore different habitats and understand how the season influences where animals are likely to be found.",
          "The Great Migration is a continuous movement of wildebeest, zebra and other grazing animals through the wider Serengeti–Mara ecosystem. The herds follow fresh grazing and water, responding to rainfall rather than a fixed calendar. Calving commonly takes place on the southern plains around January to March. As the year progresses, herds move through central and western areas and later toward the northern Serengeti, where river crossings may occur. The timing varies from year to year, and no responsible operator can guarantee a crossing on a specific day.",
          "Different parts of the Serengeti offer different experiences. The central Seronera area is known for resident wildlife and can be productive throughout the year. The western corridor includes river systems and may be important as herds move north and west. The northern Serengeti is often selected during the migration period when herds are in the region. The southern plains and Ndutu area are associated with calving season. Choosing the right area for your dates is more useful than simply booking a lodge because it has the word Serengeti in its name.",
          "The park is famous for predators, including lions, leopards, cheetahs and hyenas, as well as elephants, giraffes, buffaloes, hippos, crocodiles and many antelope species. Birdlife is also rewarding, with raptors, ground birds, water-associated species and seasonal migrants. Wildlife sightings are never guaranteed: animals move freely, vegetation changes and conditions vary. A knowledgeable guide can interpret tracks, behaviour and habitat, helping guests understand the ecosystem even when a particular animal is not immediately visible.",
          "June to October is a popular dry-season period for general game viewing in many areas. January to March is an excellent time to consider the southern plains for calving activity. November and December can bring green landscapes and changing herd movements. April and May are wetter months in many parts of the region and require more attention to road conditions and camp operations. These are broad patterns; actual herd location and local rainfall should guide final decisions.",
          "A Serengeti safari usually involves game drives in a 4x4 vehicle with a professional guide. Full-day drives can be rewarding because wildlife activity changes through the day, but early starts and long hours may not suit every traveller. Some camps offer optional sunrise hot-air balloon safaris, subject to location, weather, availability and additional cost. Walking activities are only possible in approved areas with authorised guides and should never be assumed to be included in a standard game-drive package.",
          "How many days should you spend? Two nights can provide an introduction, but three or four nights allow more time to explore and reduce the feeling of rushing between regions. Longer stays are valuable for photographers and travellers hoping to follow seasonal wildlife movement. Consider the driving time from Arusha or Ngorongoro, or compare a road safari with a scheduled or charter flight to an airstrip. Flights can save time but have baggage restrictions and may increase the overall cost.",
          "Accommodation ranges from public or special campsites to permanent tented camps and lodges. Location is often as important as luxury level: a comfortable camp close to the area you want to explore can be more useful than a more elaborate property far away. Ask which region the camp is in, how long transfers take, what meals are included and whether game drives are shared or private. During popular seasons, early booking is advisable.",
          "Pack neutral, comfortable clothing, a warm layer for early mornings, sun protection, a hat, insect repellent, binoculars and camera equipment. Follow the guide’s instructions, remain inside the vehicle unless told otherwise, never feed animals and keep a respectful distance. Bring reusable water bottles where practical and take all litter away. A safari is a privilege in a protected ecosystem, and responsible behaviour helps keep it that way.",
          "Our Trip Africa can help match your Serengeti route to the month you plan to travel, whether your priority is calving, migration viewing, resident predators or a broader northern circuit. Share your dates, group size, preferred accommodation and whether you want to combine Serengeti with Ngorongoro, Tarangire or Zanzibar. A thoughtful itinerary focuses on the right region and gives you enough time to enjoy the experience."
    ]
  },
  {
    id: "post-14",
    slug: "best-safari-ngorongoro-crater-guide",
    title: "Best Safari in Ngorongoro Crater: Wildlife, Big Five and Complete Travel Guide",
    category: "Wildlife Spotlights",
    readTime: "9 min read",
    publishedDate: "November 9, 2026",
    author: { name: 'Our Trip Africa Team', role: 'Local Tanzania Travel Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/1776627302280_aeeffdfe.jpg',
    excerpt: "Discover what makes a Ngorongoro Crater safari special, the wildlife you may see, the best time to visit and how to plan a responsible crater game drive.",
    seoDescription: "Plan the best Ngorongoro Crater safari with information on wildlife, Big Five, game drives, seasons, crater access and combining the crater with Serengeti.",
    tags: ["Ngorongoro Crater Safari","Big Five Tanzania","Ngorongoro Conservation Area","Tanzania Safari"],
    mapLinks: [["Ngorongoro Crater","https://www.google.com/maps/search/?api=1&query=Ngorongoro+Crater+Tanzania"],["Ngorongoro Crater Viewpoint","https://www.google.com/maps/search/?api=1&query=Ngorongoro+Crater+Viewpoint"],["Ngorongoro Conservation Area","https://www.google.com/maps/search/?api=1&query=Ngorongoro+Conservation+Area"]],
    content: [
          "Ngorongoro Crater is one of Tanzania’s most remarkable wildlife destinations. The vast volcanic caldera creates a dramatic natural setting, with grassland, woodland, swamps and a soda lake supporting a wide range of animals. A game drive on the crater floor can offer excellent wildlife viewing within a relatively compact area, making it a highlight of many northern Tanzania itineraries. The experience is distinctive not only because of the scenery, but also because the crater is part of a wider conservation landscape where wildlife, pastoral communities and natural heritage are closely connected.",
          "The crater formed when a large volcano collapsed inward, leaving a broad bowl surrounded by steep walls. Its varied habitats provide food and water for resident wildlife through much of the year. Visitors may see lions, elephants, buffaloes, zebras, wildebeest, hippos, hyenas and many other species. The crater is also one of the places where travellers have a chance of seeing the endangered black rhinoceros, although sightings are never guaranteed. Guides use experience and current conditions to look for animals while respecting park rules.",
          "Many travellers ask whether they can see the Big Five in Ngorongoro. The crater is known for opportunities to see several of these iconic species, including lion, elephant, buffalo and, with luck, rhino. Leopards are more elusive and are not guaranteed. It is important to treat the Big Five as a wildlife wish list rather than a promise. The value of the crater lies in the whole ecosystem: open grassland, birdlife, predator-prey interactions and the striking landscape.",
          "A typical crater safari begins early, with a descent from the rim to the crater floor. The early start helps make the most of the permitted game-drive period and can offer beautiful morning light. A picnic lunch may be taken at an authorised site, depending on the itinerary and regulations. The crater floor can become busy during peak travel periods, so a good guide, patient wildlife viewing and realistic expectations make a difference. Visitors should remain in the vehicle except at designated areas and follow instructions from their guide and conservation authorities.",
          "Ngorongoro can be visited throughout the year, and wildlife viewing is often rewarding in different seasons. The dry months can make travel conditions more predictable, while the greener months may bring beautiful scenery and birdlife. Rain can affect road conditions, and the best time for a combined safari may depend on where the Great Migration herds are located in the wider conservation area and Serengeti ecosystem. Confirm current access rules, fees and conditions before travel because these can change.",
          "One day on the crater floor is a common part of a northern circuit itinerary, but the wider Ngorongoro Conservation Area deserves more attention. Depending on time and permissions, travellers may explore highland scenery, viewpoints, archaeological and cultural heritage areas, or use the region as a route between Tarangire and Serengeti. Activities outside the crater have their own rules and may require advance arrangements. Do not assume that a crater entry ticket automatically includes every activity in the conservation area.",
          "For many visitors, the best route is to combine Ngorongoro with Serengeti and Tarangire. Tarangire adds elephant-rich landscapes and baobabs; Serengeti provides expansive plains and a chance to explore seasonal migration areas; Ngorongoro adds the caldera experience. A four- to six-day northern circuit can provide a balanced introduction, while longer journeys allow more time in the Serengeti. Driving times, accommodation locations and park fees should be considered when building the route.",
          "Choose accommodation according to your travel style and route. Options around the crater highlands may offer dramatic views and convenient access for an early descent, while properties farther away may be more affordable or fit a wider itinerary. Ask whether the quotation includes conservation and crater service fees, meals, transport, guide services and accommodation. Confirm the exact lodge or camp, not just a general category, and check whether the game drive is private or shared.",
          "To prepare, bring warm clothing for the highlands, sun protection for the crater floor, comfortable shoes, binoculars and a camera. Temperatures can be cooler at the rim than on the floor. Keep a safe distance from wildlife, never feed animals and do not leave rubbish behind. Visitors should also respect local communities and follow guidance during any cultural visit. Our Trip Africa can help plan a Ngorongoro safari as part of a wider Tanzania journey and explain how it fits with Serengeti, Tarangire and Zanzibar."
    ]
  },
  {
    id: "post-15",
    slug: "top-5-best-beaches-zanzibar",
    title: "Top 5 Best Beaches in Zanzibar: A Complete Guide to the Island’s Coastline",
    category: "Cultural Experiences",
    readTime: "9 min read",
    publishedDate: "November 9, 2026",
    author: { name: 'Our Trip Africa Team', role: 'Local Tanzania Travel Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/file_0000000034ec8211874d67f6d94af87f.png',
    excerpt: "Explore five memorable Zanzibar beaches, what makes each coast different, how tides affect swimming and which areas suit couples, families and ocean lovers.",
    seoDescription: "Discover the top five beaches in Zanzibar: Nungwi, Kendwa, Paje, Jambiani and Matemwe, with tips on swimming, tides, activities and where to stay.",
    tags: ["Best Beaches Zanzibar","Nungwi Beach","Kendwa Beach","Paje Beach","Jambiani Beach","Matemwe Beach"],
    mapLinks: [["Nungwi Beach","https://www.google.com/maps/search/?api=1&query=Nungwi+Beach+Zanzibar"],["Kendwa Beach","https://www.google.com/maps/search/?api=1&query=Kendwa+Beach+Zanzibar"],["Paje Beach","https://www.google.com/maps/search/?api=1&query=Paje+Beach+Zanzibar"],["Jambiani Beach","https://www.google.com/maps/search/?api=1&query=Jambiani+Beach+Zanzibar"],["Matemwe Beach","https://www.google.com/maps/search/?api=1&query=Matemwe+Beach+Zanzibar"]],
    content: [
          "Zanzibar’s coastline is not one long, identical beach. Each area has its own character, from lively northern resorts and sunset views to quiet eastern villages, tidal lagoons and reef-fringed shores. Choosing the right beach can shape the entire holiday, especially for travellers who want to swim often, enjoy watersports, relax away from crowds or explore local life. These five beaches are among the island’s best-known choices, but conditions vary with tides, wind, season and the exact location of your hotel.",
          "1. Nungwi Beach, on the northern tip of Unguja, is one of Zanzibar’s most popular beach areas. Its appeal includes white sand, turquoise water, a range of accommodation and restaurants, and memorable sunset views. Compared with some parts of the east coast, the tide may have less impact on access to swimming at certain locations, although sea conditions always change. Nungwi is a good option for visitors who want a lively beach base with boat excursions and a choice of places to eat. Ask your hotel about the safest swimming areas and local boat activity.",
          "2. Kendwa Beach lies southwest of Nungwi and is famous for a broad stretch of pale sand and beautiful sunsets. It is often chosen by couples and travellers looking for a classic beach-holiday atmosphere, with resorts and opportunities for swimming when conditions are suitable. Kendwa can be busier during holiday periods and some evenings have a more social atmosphere. Visitors seeking quiet should compare the location of individual properties rather than assuming the whole beach is secluded. Sunset dhow cruises and other ocean excursions may be available through local operators.",
          "3. Paje Beach on the southeast coast is known for its wide shoreline, steady breezes and watersports scene, especially kitesurfing when seasonal wind conditions are suitable. The reef and tidal pattern create a striking lagoon landscape, with the sea retreating at low tide in ways that reveal sand flats and shallow pools. This is part of Paje’s beauty, but it means swimming directly from the beach depends on the tide. Paje suits active travellers, younger visitors and people who enjoy cafés, beach lodges and a relaxed village atmosphere.",
          "4. Jambiani Beach stretches along the southeast coast and is often associated with a quieter, more village-centred experience. Its long shoreline, traditional fishing and seaweed-farming activities, and small accommodation properties create a different pace from the busier northern resorts. At low tide, the ocean can retreat far from the shore, making walks across the exposed seabed possible in some areas. Visitors should be mindful of local work and community life, use local guides for activities and check tide tables before planning a swim or boat trip.",
          "5. Matemwe Beach on the northeast coast offers a more peaceful setting and is a popular base for travellers interested in reef excursions and access to the Mnemba Atoll area. The coast is known for beautiful views, boutique accommodation and a quieter atmosphere than the busiest northern beaches. Tides are noticeable, and the reef and ocean conditions influence when swimming and snorkelling are appropriate. Marine excursions should be booked with responsible operators who respect wildlife, coral and local regulations. Snorkelling conditions depend on weather and sea state, not simply the calendar.",
          "How should you choose? If you want a lively resort area and a range of restaurants, compare Nungwi and Kendwa. If kitesurfing and a laid-back social scene appeal to you, look at Paje. If you prefer a slower coastal village atmosphere, Jambiani may be a good match. If you value quieter accommodation and marine excursions, consider Matemwe. Families should check the beach entry, tides, lifeguard or safety arrangements and distance to medical services. Honeymooners may prioritise privacy, room location and transfers.",
          "Tides are a key part of Zanzibar planning, particularly on the east coast. At low tide, the sea can retreat across a wide reef flat; at high tide, water returns closer to shore. This natural cycle influences swimming, snorkelling, boat departure times and the appearance of the beach. It is not a problem to avoid automatically, but it should inform the choice of hotel and daily schedule. Ask the property for local tide information and do not walk across reef areas without guidance, footwear or knowledge of the conditions.",
          "Beach activities may include dhow sailing, snorkelling, diving, kayaking, kitesurfing, spice tours and visits to Stone Town. Choose licensed or reputable providers, use appropriate safety equipment and avoid touching coral or feeding marine animals. If you are planning a safari before the beach stay, allow time for the transfer and confirm your domestic flight baggage allowance. Our Trip Africa can help match a Zanzibar beach area to your travel style and combine it with a mainland safari."
    ]
  },
  {
    id: "post-16",
    slug: "top-10-national-parks-east-africa",
    title: "Top 10 National Parks in East Africa: Wildlife, Landscapes and What Makes Them Special",
    category: "Wildlife Spotlights",
    readTime: "12 min read",
    publishedDate: "November 9, 2026",
    author: { name: 'Our Trip Africa Team', role: 'Local Tanzania Travel Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/1793450997914_ae622466.jpg',
    excerpt: "A guide to ten outstanding protected areas across Tanzania, Kenya and Uganda, from the Serengeti plains to gorilla forests and the Mara ecosystem.",
    seoDescription: "Explore ten famous East African national parks and reserves, their wildlife, landscapes, signature experiences and practical safari highlights.",
    tags: ["East Africa National Parks","Serengeti","Maasai Mara","Bwindi","Amboseli","Safari Parks"],
    mapLinks: [["Serengeti National Park","https://www.google.com/maps/search/?api=1&query=Serengeti+National+Park"],["Ngorongoro Conservation Area","https://www.google.com/maps/search/?api=1&query=Ngorongoro+Conservation+Area"],["Tarangire National Park","https://www.google.com/maps/search/?api=1&query=Tarangire+National+Park"],["Maasai Mara National Reserve","https://www.google.com/maps/search/?api=1&query=Maasai+Mara+National+Reserve"],["Amboseli National Park","https://www.google.com/maps/search/?api=1&query=Amboseli+National+Park"],["Bwindi Impenetrable National Park","https://www.google.com/maps/search/?api=1&query=Bwindi+Impenetrable+National+Park"],["Queen Elizabeth National Park","https://www.google.com/maps/search/?api=1&query=Queen+Elizabeth+National+Park+Uganda"],["Murchison Falls National Park","https://www.google.com/maps/search/?api=1&query=Murchison+Falls+National+Park"],["Lake Manyara National Park","https://www.google.com/maps/search/?api=1&query=Lake+Manyara+National+Park"],["Volcanoes National Park","https://www.google.com/maps/search/?api=1&query=Volcanoes+National+Park+Rwanda"]],
    content: [
          "East Africa offers an extraordinary range of protected landscapes, from open savannahs and volcanic craters to tropical forests, wetlands and mountain habitats. There is no single official ranking of the region’s best parks: the right choice depends on whether you are interested in the Great Migration, elephants, mountain gorillas, chimpanzees, birdlife or dramatic scenery. This guide highlights ten well-known protected areas in Tanzania, Kenya and Uganda and explains what makes each one distinctive. Some are national parks and others are reserves or conservation areas, so their management and visitor rules differ.",
          "1. Serengeti National Park, Tanzania, is famous for its vast plains, big cats and the Great Migration. Large herds of wildebeest and zebra move through the wider ecosystem in response to seasonal rainfall and grazing. The park also supports lions, leopards, cheetahs, elephants, giraffes, buffaloes and rich birdlife. Visitors can explore different regions depending on the month, with the southern plains associated with calving and the north often considered for migration river-crossing season. Its scale means a multi-night stay is valuable.",
          "2. Ngorongoro Conservation Area, Tanzania, is best known for the Ngorongoro Crater, a dramatic volcanic caldera with grassland, woodland, swamps and a soda lake. The crater floor can offer excellent wildlife viewing, including opportunities to look for lions, elephants, buffaloes and the endangered black rhino. The wider conservation area also contains highland scenery and important cultural and archaeological heritage. It is not simply a national park; it is a multiple-use conservation landscape with specific rules for visitors and residents.",
          "3. Tarangire National Park, Tanzania, is celebrated for elephants, ancient baobab trees and seasonal wildlife concentrations around the Tarangire River. During the dry season, animals from surrounding areas may gather near remaining water, creating rewarding game-viewing opportunities. The park also supports lions, leopards, giraffes, zebras and many bird species. Its landscapes are different from the open Serengeti plains, making it an excellent addition to a northern circuit itinerary.",
          "4. Maasai Mara National Reserve, Kenya, is renowned for open grasslands, large predator populations and its role in the wider Serengeti–Mara migration system. During parts of the year, wildebeest and zebra move into the Mara region, and river crossings may occur. The reserve is also known for lions, cheetahs, elephants, giraffes and diverse plains game. Migration timing is variable, and sightings depend on rainfall and herd movement. Community conservancies around the reserve offer additional conservation and tourism models with their own rules.",
          "5. Amboseli National Park, Kenya, is famous for elephants and views toward Mount Kilimanjaro when the mountain is clear. Wetlands fed by underground water create a contrast with the surrounding dry plains and attract wildlife and birds. Amboseli is a favourite for elephant photography, although respectful distance and guide instructions are essential. The park is often combined with the Maasai Mara or with northern Tanzania for a wider East African safari.",
          "6. Bwindi Impenetrable National Park, Uganda, protects montane forest and is internationally known for mountain gorilla trekking. Visitors join guided groups with permits and follow strict rules designed to protect gorillas and people. Trekking can be physically demanding because trails pass through steep, dense forest, and the duration varies depending on where the gorilla family is located. Permits are limited and should be confirmed well in advance through the relevant authorities or an authorised operator.",
          "7. Queen Elizabeth National Park, Uganda, contains savannah, crater lakes, wetlands and the Kazinga Channel. It offers game drives, boat trips and birdwatching, with opportunities to see elephants, buffaloes, hippos, antelope and predators. The Ishasha sector is known for reports of tree-climbing lions, though sightings are never guaranteed. The variety of habitats makes the park a useful part of a longer Uganda itinerary, especially when combined with forest primate experiences.",
          "8. Murchison Falls National Park, Uganda, is shaped by the Nile River as it forces through a narrow gorge at the falls. The park combines river scenery, boat trips, open savannah and wildlife viewing. Visitors may see giraffes, elephants, buffaloes, hippos, crocodiles and a range of birds. A boat excursion toward the base of the falls provides a different perspective from game drives, while viewpoints and hikes depend on current access and safety guidance.",
          "9. Lake Manyara National Park, Tanzania, is a compact but varied park beneath the Great Rift Valley escarpment. Its habitats include groundwater forest, open areas, lake shore and woodland. The park is known for birdlife and can offer sightings of elephants, giraffes, buffaloes, hippos and other wildlife. It is sometimes associated with tree-climbing lions, but these are not guaranteed. Lake Manyara works well as a shorter stop on a northern Tanzania circuit.",
          "10. Volcanoes National Park, Rwanda, is famous for mountain gorilla trekking in the Virunga volcanic range. Guided treks pass through montane forest and bamboo habitat, and permits are required. The park also protects golden monkeys and supports conservation and research initiatives. Gorilla trekking is a special experience but requires advance planning, appropriate clothing and respect for strict wildlife-viewing rules. Rwanda’s park is often compared with Uganda’s Bwindi and Mgahinga experiences, but each destination has different terrain, permit systems and logistics.",
          "How do you choose among them? For the Great Migration and classic savannah wildlife, consider Serengeti and Maasai Mara. For elephants and Kilimanjaro scenery, look at Amboseli and Tarangire. For a crater landscape and concentrated wildlife, add Ngorongoro. For mountain gorillas, compare Bwindi and Volcanoes National Park based on permit availability, budget and route. Travellers with more time can combine several parks, but distances and border logistics should be planned realistically.",
          "Before booking, check official park rules, conservation fees, permit requirements, road conditions and accommodation availability. Gorilla permits and some specialist activities have limited capacity and should not be treated as confirmed until officially secured. Our Trip Africa can help plan Tanzania safaris and discuss wider East African combinations, while activities in other countries should be arranged with appropriately authorised local providers. Responsible travel means respecting wildlife, habitats, local communities and the rules that protect these extraordinary places."
    ]
  },
  {
    id: "post-17",
    slug: "top-10-things-to-do-tanzania-zanzibar-safari",
    title: "Top 10 Things to Do in Tanzania and Zanzibar During Your Safari Holiday",
    category: "Travel Guides",
    readTime: "11 min read",
    publishedDate: "November 9, 2026",
    author: { name: 'Our Trip Africa Team', role: 'Local Tanzania Travel Specialists', avatar: LOCAL_IMAGES.logo },
    image: '/assets/aistudio/20260321_120937_f48b28a3.jpg',
    excerpt: "From Serengeti game drives and crater safaris to Stone Town, spice farms and ocean excursions, discover ten experiences for a combined Tanzania and Zanzibar trip.",
    seoDescription: "Discover ten memorable things to do in Tanzania and Zanzibar, including wildlife safaris, cultural visits, Kilimanjaro scenery, Stone Town and beach activities.",
    tags: ["Things to Do Tanzania","Things to Do Zanzibar","Tanzania Safari Activities","Zanzibar Excursions"],
    mapLinks: [["Serengeti National Park","https://www.google.com/maps/search/?api=1&query=Serengeti+National+Park"],["Ngorongoro Crater","https://www.google.com/maps/search/?api=1&query=Ngorongoro+Crater"],["Stone Town","https://www.google.com/maps/search/?api=1&query=Stone+Town+Zanzibar"],["Nungwi Beach","https://www.google.com/maps/search/?api=1&query=Nungwi+Beach+Zanzibar"],["Mount Kilimanjaro","https://www.google.com/maps/search/?api=1&query=Mount+Kilimanjaro"]],
    content: [
          "A holiday in Tanzania and Zanzibar can be much more than a sequence of game drives and beach days. The country offers wildlife, mountains, culture, history, food and ocean experiences, while Zanzibar adds a distinctive island atmosphere shaped by Swahili heritage and the Indian Ocean. The following ten ideas can help you build a varied itinerary. Not every activity suits every traveller, so consider age, fitness, season, travel time and local conditions when choosing what to include.",
          "1. Go on a Serengeti game drive. Exploring the Serengeti with a knowledgeable guide is one of the classic Tanzania experiences. Game drives can reveal lions resting near kopjes, elephants crossing open country, giraffes browsing and large herds moving across the plains. The Great Migration moves throughout the year, following rain and fresh grazing. Choose the park region according to your dates and allow several nights if you want to explore without rushing.",
          "2. Visit Ngorongoro Crater. Descending into the crater gives visitors a chance to explore a remarkable volcanic landscape with grassland, woodland, wetlands and a lake. Wildlife can be abundant, and the crater is known for opportunities to look for several Big Five species. A crater game drive usually requires an early start and must follow conservation authority rules. Add time in the surrounding highlands if you want to enjoy the scenery beyond the crater floor.",
          "3. Explore Tarangire National Park. Tarangire is a rewarding stop for travellers interested in elephants, baobab trees and varied savannah habitats. The Tarangire River is an important water source, especially in the dry season, and wildlife may gather around it. Birdwatching can also be excellent. The park is a natural addition to a northern circuit that includes Serengeti and Ngorongoro, although the route should be planned around the number of days available.",
          "4. Experience a cultural visit respectfully. Tanzania is home to many communities with distinct languages, histories and traditions. A well-organised cultural experience can provide context about local livelihoods, food, crafts, music and the relationship between people and the environment. Choose visits arranged with community involvement and permission. Ask before taking photographs, respect personal boundaries and avoid activities that present people as performers without their consent. A thoughtful visit should be educational and mutually respectful.",
          "5. Discover Stone Town in Zanzibar. Stone Town’s narrow streets, carved doors, historic buildings and busy markets tell a story shaped by African, Arab, Indian and European connections. A guided walking tour can help explain the architecture, trade history, local food and cultural heritage. Wear comfortable shoes, dress respectfully when visiting religious or community spaces and allow time to explore at a relaxed pace. Stone Town is especially rewarding when visitors stay long enough to enjoy its atmosphere beyond a quick photo stop.",
          "6. Join a Zanzibar spice experience. Zanzibar’s spice-growing heritage is closely linked to its history and food culture. A guided farm visit may introduce cloves, cinnamon, nutmeg, vanilla, pepper and tropical fruits, depending on the farm and season. The experience is more meaningful when the guide explains how plants are grown, harvested and used in local cooking. Ask what is included in the visit and consider buying products directly from local producers where appropriate.",
          "7. Spend time on the island’s beaches. Nungwi, Kendwa, Paje, Jambiani and Matemwe each offer a different coastal atmosphere. Some are known for swimming and sunsets, others for kitesurfing, quiet stays or access to marine excursions. On parts of the east coast, tides strongly affect how far the sea retreats from the shore. Check tide times, sea conditions and hotel location before choosing a beach. Always follow local safety advice when swimming or taking a boat trip.",
          "8. Take a responsible ocean excursion. Depending on weather and operator availability, Zanzibar visitors may enjoy dhow sailing, snorkelling, diving, kayaking or a sandbank trip. Select providers who use appropriate safety equipment, respect marine protected areas and do not encourage touching coral or disturbing wildlife. Sea conditions can change, so excursions may be adjusted or cancelled for safety. If you are not a confident swimmer, tell the operator and use a properly fitted life jacket.",
          "9. See Mount Kilimanjaro or choose a mountain adventure. Even travellers who do not plan to climb Kilimanjaro can enjoy views of Africa’s highest mountain from suitable locations when the weather is clear. Those considering a trek should research route length, acclimatisation, guide requirements, fitness and seasonal conditions carefully. A summit attempt is a serious high-altitude undertaking, not a casual walk. Mount Meru and the foothills around Arusha offer other outdoor experiences for visitors with different schedules.",
          "10. Enjoy Tanzanian food and local hospitality. Try dishes such as nyama choma, pilau, ugali, fresh seafood, coconut-based curries and Zanzibar-style snacks from reputable restaurants or guided food experiences. Food is a way to understand regional ingredients and everyday life. Tell your accommodation or operator about allergies and dietary requirements in advance, and choose food and water options that suit your health needs. Markets can be fascinating places to explore with a local guide.",
          "The best combined itinerary depends on your interests. A wildlife-focused visitor may spend more nights in Serengeti and Ngorongoro, while a honeymoon couple may choose a shorter safari followed by a longer beach stay. Families may prefer shorter drives and activities with flexible timing. Our Trip Africa can help combine selected mainland experiences with Zanzibar, taking account of domestic flights, transfers, accommodation, group size and travel dates. Share your priorities so the itinerary includes the experiences that matter most to you."
    ]
  }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    author: 'David & Sarah Jenkins',
    country: 'United Kingdom',
    rating: 5,
    packageTaken: 'The Great Migration Unfolds (6D/5N)',
    text: 'Mr. James Felix and the Our Trip Africa team delivered the trip of a lifetime! From our pickup at Kilimanjaro Airport to seeing a pride of lions on a kopje in the Serengeti, everything was flawless. The private Land Cruiser was comfortable and our guide had an uncanny ability to spot leopards hidden in trees.',
    date: 'October 2026'
  },
  {
    id: 't-2',
    author: 'Marc & Chloe Dubois',
    country: 'France',
    rating: 5,
    packageTaken: 'Summit the Roof of Africa — Machame Route (6D/5N)',
    text: 'Reaching Uhuru Peak at sunrise with Our Trip Africa was life-changing. The mountain guides were exceptionally caring and monitored our oxygen levels every evening. The food our camp cook prepared at 4,600m was incredible. 100% recommend!',
    date: 'September 2026'
  },
  {
    id: 't-3',
    author: 'Dr. Michael Chen & Family',
    country: 'United States',
    rating: 5,
    packageTaken: '14 Days Grand Tanzania Safari & Cultural Expedition',
    text: 'We spent two weeks with Our Trip Africa covering Tarangire, Serengeti, Ngorongoro, and the Hadzabe tribe. Traveling with our two teenage kids, safety and engagement were our top concerns. Mr. James Felix personally ensured every detail was handled. Truly authentic African hospitality.',
    date: 'August 2026'
  },
  {
    id: 't-4',
    author: 'Elena Rossi',
    country: 'Italy',
    rating: 5,
    packageTaken: 'The Spice Island Slow — 6D/5N Zanzibar',
    text: 'The best beach holiday ever. The Safari Blue dhow cruise with fresh grilled lobster on a sandbank in the middle of the Indian Ocean was pure magic. Communicating with their team over WhatsApp was instant and easy.',
    date: 'July 2026'
  }
];

export const TEAM_MEMBERS = {
  director: COMPANY_DETAILS.director,
  support: [
    {
      name: 'Grace Mollel',
      role: 'Head of 24/7 Guest Care & Safari Operations',
      email: 'support@ourtripafrica.com',
      phone: '+255 624 661 830',
      description: 'Coordinates all airport welcomes, lodge check-ins, dietary arrangements, and flight reconfirmations.'
    },
    {
      name: 'Juma Kweka',
      role: 'Senior Fleet & Wilderness Safety Officer',
      email: 'support@ourtripafrica.com',
      phone: '+255 624 661 830',
      description: 'Supervises all custom 4x4 Land Cruisers, satellite communications, medical kits, and route navigation.'
    }
  ],
  sales: [
    {
      name: 'Erick M. Shirima',
      role: 'Head of Safari Planning & Custom Expeditions',
      email: 'sales@ourtripafrica.com',
      whatsapp: '255624661830',
      description: 'Crafts bespoke budget, midrange, and luxury itineraries tailored to your dates, group size, and wildlife bucket list.'
    },
    {
      name: 'Amina Rashid',
      role: 'International Travel Consultant',
      email: 'sales@ourtripafrica.com',
      whatsapp: '255624661830',
      description: 'Specializes in family safaris, honeymoon escapes, and combination safari-beach itineraries.'
    }
  ]
};

export const SAFARI_FAQS = [
  {
    q: 'What are the visa requirements for Tanzania and Kenya?',
    a: 'For Tanzania: Most travelers need a Tourist Visa ($50 for most nationalities, $100 for US citizens), easily obtained via the Tanzania Immigration eVisa portal or on arrival at major airports (JRO, DAR). For Kenya: Most nationalities must apply for an Electronic Travel Authorization (eTA) online before departure. Ensure your passport has at least 6 months validity and 2+ blank pages.'
  },
  {
    q: 'Do I need travel insurance for my safari?',
    a: 'Yes, travel insurance is highly recommended. Ensure your policy includes emergency medical evacuation (especially for mountain climbing or remote safaris), trip cancellation, and coverage for loss of baggage. We recommend reputable international travel insurance providers.'
  },
  {
    q: 'What are the essential packing tips for a safari?',
    a: 'Pack lightweight, breathable, neutral-colored clothing (khaki, beige, olive) for daytime. Avoid bright colors, dark blue, and black as they attract tsetse flies. Bring a warm fleece or jacket for chilly mornings and evenings, high-SPF sunscreen, polarized sunglasses, a wide-brimmed hat, insect repellent (DEET 30%+), and a good pair of walking shoes. A small daypack for your camera and personal items is ideal.'
  },
  {
    q: 'What is the best time to visit Tanzania and Kenya?',
    a: 'Both countries are fantastic year-round. Generally, the dry season (July – October) offers the best wildlife viewing as animals congregate around water sources, and it is the prime time for the Great Migration river crossings. The short rains (November – December) and long rains (April – May) offer lush landscapes and fewer crowds. January – March is wonderful for the wildebeest calving season in Southern Serengeti/Ndutu.'
  },
  {
    q: 'How does booking work and what are the payment methods?',
    a: 'You can book directly via WhatsApp (+255624661830), email (info@ourtripafrica.com), or our online booking form. We require a 30% deposit to secure your safari. Payments can be completed securely via Visa, Mastercard, Pesapal, or bank wire transfer. The remaining balance is payable 30 days prior to arrival or in cash USD upon arrival in Arusha.'
  },
  {
    q: 'Can you customize an itinerary to fit our dates and budget?',
    a: 'Yes, absolutely! We specialize in tailor-made private safaris. We can adjust the duration, parks, accommodation tier (Budget Camping, Mid-range Lodge, or Luxury Tented Camp), and combine wildlife safaris with Mount Kilimanjaro climbs or Zanzibar beach retreats.'
  }
];

export const PACKING_TIPS = [
  { category: 'Clothing', items: ['Lightweight neutral-colored clothes (khaki, beige)', 'Warm fleece/jacket for evenings', 'Comfortable walking shoes', 'Sun hat'] },
  { category: 'Health & Toiletries', items: ['High-SPF sunscreen', 'Insect repellent (DEET)', 'Personal medication', 'Lip balm'] },
  { category: 'Gear', items: ['Binoculars', 'Camera with zoom lens', 'Power bank', 'Universal adapter'] },
  { category: 'Documentation', items: ['Passport & Visa', 'Travel insurance policy', 'Yellow fever vaccination certificate', 'Flight tickets'] }
];
