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
    ]
