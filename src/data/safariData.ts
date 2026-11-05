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
    title: 'Founder and Owner of Our Trip Africa',
    experience: '15+ Years',
    photo: '/assets/aistudio/20260919_111305_8de8147f.png',
    email: 'james@ourtripafrica.com',
    phone: '+255743661850',
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
    heroImage: LOCAL_IMAGES.hero,
    gallery: [
      LOCAL_IMAGES.hero,
      LOCAL_IMAGES.lion,
      LOCAL_IMAGES.migrationImage,
      'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
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
      'Full accommodation as per itinerary (Lodge or Tented Safari Camp)',
      'Private 4x4 Safari Land Cruiser with pop-up roof for 360-degree photography',
      'Professional certified English-speaking safari driver-guide',
      'All national park entrance fees, transit fees, and Ngorongoro Crater service fee',
      'All meals throughout the safari (Breakfast, Packed picnic lunches, Hot multi-course dinners)',
      'Unlimited bottled mineral drinking water throughout all game drives',
      'Complimentary airport transfers from Kilimanjaro (JRO) or Arusha Airport'
    ],
    exclusions: [
      'International and domestic flights',
      'Tanzanian Tourist Visa ($50 or $100 for US citizens)',
      'Travel and medical insurance',
      'Alcoholic drinks and premium beverages',
      'Gratuities and tips for driver-guide and lodge staff ($20-$30 per group/day recommended)',
      'Personal laundry and souvenir shopping'
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
      'Airport / Ferry transfers in private air-conditioned van',
      '2 nights heritage hotel in Stone Town + 3 nights luxury beach resort in Nungwi/Kendwa',
      'Daily breakfast and special seafood barbecue during Safari Blue',
      'Guided Stone Town walking tour and entrance fees',
      'Prison Island tour to visit 150-year-old giant Aldabra tortoises',
      'Safari Blue dhow sailing, snorkeling gear, and seafood buffet',
      'Organic spice farm tour with tropical fruit tasting'
    ],
    exclusions: [
      'International and domestic flights to Zanzibar',
      'Zanzibar mandatory travel insurance (if applicable)',
      'Alcoholic drinks at beach resort',
      'Personal water sports (scuba diving, jet ski)',
      'Tips for local boat crew and tour guides'
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
      'All Kilimanjaro National Park fees, rescue fees, and camping permits',
      'Certified Wilderness First Responder (WFR) mountain guides and assistants',
      'Experienced mountain cook preparing 3 hot nutritious meals daily',
      'Porter team carrying personal duffle bags (up to 15kg) and camp infrastructure',
      'High-altitude 4-season mountain tents and foam sleeping mattresses',
      'Emergency oxygen cylinders and pulse oximeter monitoring twice daily',
      'Roundtrip airport transfers and pre/post trek hotel stays in Moshi/Arusha'
    ],
    exclusions: [
      'International flights and visas',
      'Personal trekking gear (sleeping bag, trekking poles, warm down jacket)',
      'Tips for mountain crew ($250-$350 total per climber recommended)',
      'Travel and high-altitude evacuation insurance'
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
      'All National Park entrance, hut accommodation, and rescue fees',
      'Licensed head mountain guide and assistant guides',
      'Mountain cook and porters',
      'All meals on the mountain (3 hearty hot meals per day)',
      'Hut accommodations with beds and mattresses',
      'Emergency oxygen and daily medical checks'
    ],
    exclusions: [
      'Personal gear and clothing',
      'Tips for guide and porter team',
      'International flights and visas'
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
      'All National Park entrance fees and Ngorongoro Crater transit & vehicle permit',
      '4 nights accommodation (Budget Safari Tents or Mid-Range Safari Lodges)',
      'Private 4x4 Land Cruiser with custom pop-up photographic roof',
      'Dedicated English-speaking professional guide',
      'Private safari chef for camping or lodge dining for lodge option',
      'All meals and unlimited bottled drinking water in vehicle'
    ],
    exclusions: [
      'International flights and tourist visas',
      'Tips for driver-guide and cook ($20-$25 per day recommended)',
      'Travel insurance and personal items'
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
    heroImage: 'https://images.unsplash.com/photo-1611652951546-7dde1b5f804c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      LOCAL_IMAGES.lakeEyasi,
      'https://flyo4business.s3.ap-south-1.amazonaws.com/images/11972_1779884611070_fc.jpg',
      LOCAL_IMAGES.hero
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
      'All cultural village entrance permits and community conservation contributions',
      'Tarangire National Park entrance fees',
      'Private 4x4 safari Land Cruiser and guide',
      'Local tribal interpreter speaking Hadzane and English',
      'All meals and bottled drinking water'
    ],
    exclusions: [
      'International flights and visas',
      'Tips for guide and community hosts'
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
      'Overnight accommodation in Olpopongi Maasai Boma and Moshi lodge',
      'Traditional Maasai meals, campfire barbecue, and breakfast',
      'Materuni waterfall guided hike and Chagga coffee ceremony',
      'Chemka hot springs entry and swimming',
      'Private 4x4 transport and English-speaking local guides'
    ],
    exclusions: [
      'Flights and visas',
      'Tips for Maasai warriors and local guides'
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
      'Roundtrip private transport from Arusha or Moshi',
      'Maasai village development fee and photo permissions',
      'Hot local lunch and bottled mineral water',
      'Professional bilingual cultural guide'
    ],
    exclusions: [
      'Personal souvenir purchases',
      'Tips for guide and community'
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
      '4x4 safari Land Cruiser with pop-up roof',
      'Professional driver-guide and dedicated local tribal guides',
      'Lake Natron conservation entry and village permits',
      'All meals and tented lodge accommodations'
    ],
    exclusions: [
      'International flights and visas',
      'Tips and travel insurance'
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
      'Full accommodation in quality lodges and tented camps across all 13 nights',
      '2 Safari 4x4 Land Cruisers with pop-up roofs for spacious viewing',
      'Professional certified English-speaking safari driver-guides throughout',
      'All meals on full board basis and unlimited bottled drinking water',
      'All national park entrance fees, crater fees, and tribal village permits',
      'Airport transfers on arrival and departure'
    ],
    exclusions: [
      'International flights and tourist visas',
      'Travel insurance and medical coverage',
      'Alcoholic drinks and sodas',
      'Gratuities for driver-guides and lodge hospitality teams'
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
      'Airport / ferry transfers on arrival and departure',
      '3 nights accommodation at selected boutique hotel / beach resort',
      'Daily breakfast and special seafood barbecue lunch during Safari Blue',
      'All tour fees (Stone Town, Spice Farm, Prison Island, Safari Blue)',
      'English-speaking certified local Zanzibar guides and marine park fees'
    ],
    exclusions: [
      'Flights and visas',
      'Optional water sports and drinks'
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
      'Roundtrip private transport from Nairobi in 4x4 Safari Land Cruiser',
      '3 nights accommodation in tented camp or luxury lodge',
      'All Maasai Mara National Reserve entry fees ($200/day peak included)',
      'All meals on full board basis and bottled drinking water',
      'Professional certified KPSGA Kenya safari driver-guide'
    ],
    exclusions: [
      'International flights and Kenya eTA / visa',
      'Hot air balloon safari ($450 per person optional)',
      'Tips for guide and camp staff'
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
      '6 nights accommodation in selected safari lodges / luxury tented camps',
      'Private 4x4 Land Cruiser with pop-up roof and fuel',
      'All Kenya Wildlife Service (KWS) park fees',
      'All meals on full board basis and drinking water in vehicle',
      'Nairobi airport transfers'
    ],
    exclusions: [
      'Flights and Kenya eTA',
      'Gratuities and personal insurance'
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
      'Official guaranteed UWA Mountain Gorilla Trekking Permit ($800 per person)',
      '3 nights accommodation at quality forest lodge in Bwindi',
      'Private 4x4 Land Cruiser with pop-up roof and fuel',
      'Professional certified Ugandan driver-guide and park ranger escorts',
      'All meals on full board basis and mineral water',
      'Entebbe or Kigali airport transfers'
    ],
    exclusions: [
      'International flights and East Africa tourist visa ($100)',
      'Porter hire during gorilla trek ($20 recommended)',
      'Tips for guide and rangers'
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
      'Both official UWA Gorilla and Chimpanzee permits',
      '5 nights quality lodge accommodation',
      'Private 4x4 Land Cruiser with expert Ugandan guide',
      'Kazinga Channel boat cruise and park fees',
      'Full board meals and drinking water'
    ],
    exclusions: [
      'Flights and visas',
      'Tips and personal items'
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
      '3 nights 4-star boutique hotel in Cape Town (V&A Waterfront / Camps Bay)',
      '2 nights luxury private safari lodge in Greater Kruger on full board',
      'Table Mountain tickets and Cape Peninsula guided day tour',
      'Twice-daily open 4x4 game drives with armed ranger and tracker',
      'Airport transfers in Cape Town and Hoedspruit/Kruger'
    ],
    exclusions: [
      'International flights and domestic flight (Cape Town to Kruger)',
      'Travel insurance and personal shopping'
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
      '4 nights accommodation in selected safari lodges or tented camps',
      'Private 4x4 Safari Land Cruiser with pop-up roof and fuel',
      'Certified English-speaking professional Kenyan naturalist guide',
      'All Kenya Wildlife Service (KWS) park entrance fees',
      'All meals on full board basis and bottled drinking water in vehicle',
      'Pick up and drop off in Nairobi or Mombasa'
    ],
    exclusions: [
      'International flights and Kenya eTA / visa',
      'Tips for driver-guide and lodge staff',
      'Personal travel and medical insurance'
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
      '3 nights accommodation at private safari lodge in Greater Kruger',
      'All meals (Breakfast, High Tea, 3-course boma dinner)',
      'Twice daily open 4x4 game drives with professional field guide and Shangaan tracker',
      'Morning bush walking safari',
      'Kruger conservation levies and reserve fees',
      'Return road transfers from Hoedspruit Eastgate Airport (HDS)'
    ],
    exclusions: [
      'Flights to/from Hoedspruit or Johannesburg',
      'Premium alcoholic cellar wines and spirits',
      'Tips for ranger and tracker'
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
      '7 nights accommodation in boutique hotels and safari lodges',
      'Private air-conditioned touring vehicle and experienced guide-driver',
      'All national park entrance fees (Table Mountain, Cape Point, Tsitsikamma, Addo)',
      'Knysna lagoon cruise and Cango Caves heritage tour',
      'Open 4x4 Big Five game drives in Eastern Cape private reserve',
      'Breakfast daily and full board during safari portion'
    ],
    exclusions: [
      'International flights and domestic flight (Port Elizabeth to Cape Town/Joburg)',
      'Optional adventure activities (bungee jump, shark cage diving)',
      'Personal travel insurance'
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
      '4 nights accommodation in 4-star or 5-star hotel in Downtown Dubai or Marina',
      'Daily international buffet breakfast',
      'Private airport transfers in executive air-conditioned vehicle',
      'Full desert safari with 4x4 dune bashing, BBQ dinner, and entertainment',
      'Burj Khalifa entrance tickets (Levels 124 & 125)',
      'Dubai Marina 5-star Dhow dinner cruise with international buffet',
      'Half-day guided Dubai City Tour with licensed English-speaking guide'
    ],
    exclusions: [
      'International flights and UAE tourist visa (if required)',
      'Tourism Dirham fee paid directly to hotel ($4-$6/room/night)',
      'Personal shopping in Dubai malls and souks'
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
      '6 nights luxury accommodation in Dubai & Abu Dhabi',
      'Daily breakfast, luxury Marina dinner cruise, and Bedouin desert banquet',
      'All entry tickets: Sheikh Zayed Mosque, Louvre Abu Dhabi, Burj Khalifa, Qasr Al Watan',
      'Private executive transportation with English-speaking licensed guide',
      '4x4 red dune desert safari with BBQ dinner and live Arabian entertainment',
      'Dubai International Airport transfers'
    ],
    exclusions: [
      'International flights and visas',
      'Hotel tourism fees',
      'Personal shopping and gratuities'
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
    id: 'post-1',
    slug: 'best-time-to-see-great-migration-serengeti',
    title: 'The Ultimate Guide to Witnessing the Great Wildebeest Migration in Tanzania',
    category: 'Travel Guides',
    readTime: '7 min read',
    publishedDate: 'March 14, 2026',
    author: {
      name: 'Erick M. Shirima',
      role: 'Managing Director & Safari Expert',
      avatar: LOCAL_IMAGES.director
    },
    image: LOCAL_IMAGES.hero,
    excerpt: 'Month-by-month breakdown of where the 2 million wildebeests, zebras, and gazelles are located throughout the Serengeti ecosystem, from calving season to the perilous Mara River crossings.',
    seoDescription: 'Complete month-by-month travel guide to the Great Wildebeest Migration in Tanzania Serengeti. Plan your safari timing for calving season or Mara River crossings.',
    tags: ['Serengeti', 'Great Migration', 'Tanzania Safari', 'Wildlife Photography'],
    content: [
      'The Great Wildebeest Migration is often heralded as the greatest wildlife spectacle on Earth. Over two million blue wildebeests, accompanied by hundreds of thousands of zebras and Thomson’s gazelles, journey in an endless 1,000-kilometer clockwise cycle between the Serengeti in Tanzania and the Maasai Mara in Kenya.',
      'January to March (Calving Season in Southern Serengeti & Ndutu): During these months, the vast short-grass plains of Southern Serengeti and the Ndutu area become nursery grounds. Roughly 8,000 calves are born every single day! This dramatic abundance draws the highest concentration of apex predators on the continent: cheetahs, leopards, hyenas, and lions hunting on open ground.',
      'April to May (The Rut and Western Corridor): As the southern plains dry up, the mega-herds march northwest toward the Western Corridor and the Grumeti River. This period coincides with the long green rains, offering dramatic skies, lush backdrops, and secluded crowd-free safari experiences.',
      'July to October (The Iconic Mara River Crossings): This is the adrenaline-fueled climax. The herds gather along the steep banks of the Mara River in Northern Serengeti. Driven by instinct, they plunge into the churning waters, braving torrential currents and giant Nile crocodiles lying in wait. Watching a crossing is an emotional, unforgettable moment.',
      'November to December (The Short Rains & Return South): After replenishing on fresh grass, the herds turn south again, crossing Lobo and eastern Serengeti toward Ndutu, completing the eternal cycle.'
    ]
  },
  {
    id: 'post-2',
    slug: 'budget-vs-midrange-vs-luxury-safari-explained',
    title: 'Safari Styles Explained: Budget Camping vs. Mid-Range Lodges vs. Luxury Tented Suites',
    category: 'Travel Guides',
    readTime: '6 min read',
    publishedDate: 'February 28, 2026',
    author: {
      name: 'Our Trip Africa Team',
      role: 'Safari Specialists',
      avatar: LOCAL_IMAGES.logo
    },
    image: LOCAL_IMAGES.lion,
    excerpt: 'Clear comparison of what to expect for each safari comfort tier in East Africa: accommodation styles, vehicle privacy, food quality, and cost breakdowns so you can choose with confidence.',
    seoDescription: 'Compare Budget Camping, Mid-Range Safari Lodges, and Luxury Tented Camps in Tanzania and Kenya. Honest pricing, vehicle specs, and amenities compared.',
    tags: ['Safari Tips', 'Safari Budget', 'Accommodations', 'Travel Planning'],
    content: [
      'One of the most frequent questions our safari planners receive at Our Trip Africa is: "What is the real difference between a budget, mid-range, and luxury safari?" Every traveler deserves complete clarity so their safari matches their expectations.',
      '1. Budget Camping Safaris ($180 - $280 per person/day): You sleep in durable two-person dome canvas tents pitched in designated public national park campsites. A dedicated private camp cook travels with you in your 4x4 Land Cruiser, preparing hearty hot three-course meals. You share park restroom/shower facilities. This is an adventurous, authentic bush immersion where you fall asleep listening to roaring lions and laughing hyenas right outside.',
      '2. Mid-Range Safari Lodges & Permanent Tented Camps ($350 - $550 per person/day): The sweet spot for 70% of travelers. You stay in comfortable wooden lodges or semi-luxury canvas chalets on raised wooden decks with en-suite bathrooms, hot running showers, flush toilets, comfortable spring beds, and Wi-Fi in common areas. Many feature swimming pools overlooking watering holes.',
      '3. Luxury & Ultra-Luxury Tented Camps ($700 - $1,500+ per person/day): Opulent, intimate tented suites located in exclusive private concessions or prime wildlife zones. Features gourmet fine dining, complimentary vintage wines, private plunge pools, butler service, open-sided luxury 4x4 vehicles, and optional fly-in bush airstrip transfers.'
    ]
  },
  {
    id: 'post-3',
    slug: 'mountain-gorilla-trekking-uganda-packing-permits',
    title: 'Everything You Need to Know Before Trekking Mountain Gorillas in Bwindi, Uganda',
    category: 'Wildlife Spotlights',
    readTime: '8 min read',
    publishedDate: 'January 19, 2026',
    author: {
      name: 'Erick M. Shirima',
      role: 'Lead Expeditions Guide',
      avatar: LOCAL_IMAGES.director
    },
    image: LOCAL_IMAGES.gorilla,
    excerpt: 'How to secure the coveted $800 UWA gorilla permit, physical fitness preparation, what to pack, and what happens during the magical 60 minutes with a wild gorilla family.',
    seoDescription: 'Complete guide to Bwindi Impenetrable Forest mountain gorilla trekking in Uganda: permit bookings, rules, packing list, and trek difficulty explained.',
    tags: ['Uganda', 'Gorilla Trekking', 'Bwindi', 'Eco Tourism'],
    content: [
      'There are fewer than 1,060 mountain gorillas remaining on our planet, surviving exclusively in the misty Virunga Volcanoes and Uganda’s ancient Bwindi Impenetrable National Park. Trekking to spend one hour with them is widely regarded as one of the most profound human-nature connections possible.',
      'Securing Permits Early: Only 8 permits per habituated gorilla family are issued daily by the Uganda Wildlife Authority (UWA) to prevent human disturbance and disease transmission. The permit costs $800 per person and 100% of proceeds fund local community schools, hospitals, and anti-poaching ranger patrols. We recommend booking permits 3 to 6 months in advance.',
      'Trek Duration & Fitness: Bwindi is named "Impenetrable" for good reason. Treks can last from 2 to 6 hours depending on where your assigned gorilla family slept the previous night. You will navigate steep volcanic ridges, dense vines, and muddy trails at elevations between 1,400m and 2,600m.',
      'Essential Packing List: Sturdy broken-in waterproof hiking boots, gardening gloves for gripping prickly vegetation, long moisture-wicking trousers tucked into socks (to keep safari ants out), long-sleeve shirts, waterproof rain poncho, and a daypack with 2 liters of water.'
    ]
  },
  {
    id: 'post-4',
    slug: 'stone-town-and-zanzibar-beaches-insiders-itinerary',
    title: 'Beyond the Postcard: The Cultural Secrets of Stone Town & Zanzibar’s North Coast',
    category: 'Cultural Experiences',
    readTime: '5 min read',
    publishedDate: 'December 12, 2025',
    author: {
      name: 'Our Trip Africa Team',
      role: 'Zanzibar Travel Desk',
      avatar: LOCAL_IMAGES.logo
    },
    image: LOCAL_IMAGES.zanzibar,
    excerpt: 'How to blend historic Swahili culture, labyrinthine spice alleys, and pristine non-tidal turquoise waters on your dream African beach holiday.',
    seoDescription: 'Zanzibar travel insider guide: Stone Town historical gems, organic spice plantations, and the best non-tidal beaches in Nungwi and Kendwa.',
    tags: ['Zanzibar', 'Stone Town', 'Beach Holidays', 'Swahili Culture'],
    content: [
      'Rising from the azure expanse of the Indian Ocean, the archipelago of Zanzibar is a melting pot of African, Arab, Persian, and Indian civilizations forged over a thousand years of Indian Ocean monsoon trade.',
      'Stone Town’s Secret Alleys: Spend your first two days lost in the narrow coral-rag alleys of Stone Town. Look closely at the carved wooden doorways: curved Gujarati brass studs once repelled war elephants, while intricate Arab archways signify Quranic blessing and noble status.',
      'Forodhani Waterfront at Twilight: As dusk settles, Forodhani Gardens transforms into an open-air seafood extravaganza. Savor hot Zanzibar pizzas, skewers of fresh kingfish, sugarcane juice crushed with ginger and lime, and fried plantains.',
      'Why Nungwi & Kendwa Win for Beach Lovers: While the eastern coast experiences vast tidal retreats of up to 1 kilometer twice a day, the northwest coast around Nungwi and Kendwa has almost no tidal variation. The turquoise ocean remains deep, crystal clear, and warm enough for swimming 24 hours a day.'
    ]
  },
  {
    id: 'post-5',
    slug: 'our-trip-africa-community-conservation-pledge',
    title: 'Sustainable Tourism: How Our Trip Africa Empowers Local Communities in Arusha',
    category: 'Company News',
    readTime: '4 min read',
    publishedDate: 'November 15, 2025',
    author: {
      name: 'Mr. James Felix',
      role: 'Founder & Owner',
      avatar: LOCAL_IMAGES.director
    },
    image: LOCAL_IMAGES.director,
    excerpt: 'Discover our grassroots conservation and community initiative in Kisongo, Arusha. 100% locally operated, paying fair living wages, and protecting indigenous wildlife habitats.',
    seoDescription: 'Read about Our Trip Africa ethical safari commitments in Arusha Tanzania: fair wages for guides and porters, village school support, and wildlife conservation.',
    tags: ['Company News', 'Ethical Travel', 'Arusha', 'Community Support'],
    content: [
      'Tourism in Africa has the power to transform lives or exploit them. When we founded Our Trip Africa at our home base in Kisongo, Arusha, we instituted a fundamental principle: true luxury must be ethical.',
      '100% Local Guide & Porter Protection: All our safari driver-guides, Kilimanjaro porters, and mountain cooks are recruited locally from communities around Arusha, Kilimanjaro, and the Serengeti. We ensure strict adherence to fair living wages, proper cold-weather gear, and balanced hot meals on mountain climbs.',
      'Direct Support for Indigenous Tribal Schools: A dedicated percentage of every safari package booked with Our Trip Africa is channeled directly to primary school supplies and clean water cisterns in rural villages around Lake Eyasi and West Kilimanjaro.',
      'Zero Single-Use Plastic Vehicle Protocol: All our custom Land Cruisers are equipped with large filtered mineral water dispensers and reusable stainless steel water bottles, eliminating thousands of plastic bottles from entering national park ecosystems every season.'
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
