import { LOCAL_IMAGES } from './safariData';

export interface DestinationStory {
  country: string;
  title: string;
  subtitle: string;
  image: string;
  introduction: string;
  story: string[];
  highlights: string[];
  bestTime: string;
  experiences: string[];
  travelNote: string;
}

export const DESTINATION_STORIES: Record<string, DestinationStory> = {
  Tanzania: {
    country: 'Tanzania',
    title: 'Discover Tanzania',
    subtitle: 'The soul of the African safari',
    image: LOCAL_IMAGES.lion,
    introduction: 'A land of vast horizons, remarkable wildlife, ancient cultures and extraordinary natural beauty.',
    story: [
      'Tanzania is a country that stays with you long after the journey ends. At first light, the savannah glows gold as elephants move between ancient baobab trees, giraffes cross the plains and lions begin to stir. In the Serengeti, the landscape seems endless, and the Great Wildebeest Migration brings one of nature’s most remarkable journeys to life. Depending on the season, enormous herds move in search of fresh grass and water, followed by the predators that share this living ecosystem.',
      'The Ngorongoro Conservation Area offers a different kind of wonder. From the crater rim, the view opens over a vast volcanic caldera where grasslands, woodland, wetlands and a soda lake support an exceptional variety of wildlife. Tarangire is famous for its elephant families and baobabs, while Lake Manyara brings forest scenery, birdlife and beautiful views beneath the Great Rift Valley escarpment. Beyond the northern circuit, travellers can discover the quieter wilderness of Nyerere and Ruaha in the south.',
      'Tanzania is also a place of people and living traditions. Around Lake Eyasi, visitors may have the opportunity to meet Hadzabe and Datoga community members through respectful, locally guided cultural visits. On the slopes of Mount Kilimanjaro, villages and coffee farms reveal another side of the country. Whether you come for a wildlife safari, a mountain climb or a cultural encounter, Tanzania offers journeys that can be shaped around your pace, interests and budget.'
    ],
    highlights: ['Serengeti National Park and the Great Migration', 'Ngorongoro Crater and its extraordinary wildlife', 'Tarangire’s elephants and giant baobab trees', 'Mount Kilimanjaro, Africa’s highest mountain', 'Lake Eyasi cultural visits with Hadzabe and Datoga communities', 'Ruaha and Nyerere for remote wilderness experiences'],
    bestTime: 'June to October is generally excellent for dry-season wildlife viewing. January to March is a rewarding period in the southern Serengeti calving areas. Wildlife and migration locations vary by season.',
    experiences: ['Private 4x4 game drives with a professional guide', 'Hot-air balloon safari where available', 'Guided Kilimanjaro trekking', 'Coffee, village and cultural experiences', 'Birdwatching and scenic nature walks where permitted'],
    travelNote: 'Tanzania is ideal for combining safari, culture and beach time. We tailor routes to the season, travel dates, comfort level and budget.'
  },
  Zanzibar: {
    country: 'Zanzibar',
    title: 'Escape to Zanzibar',
    subtitle: 'The Indian Ocean island of spices and stories',
    image: LOCAL_IMAGES.zanzibar,
    introduction: 'White-sand beaches, warm turquoise water and a rich Swahili heritage create an island escape unlike any other.',
    story: [
      'Zanzibar welcomes visitors with the rhythm of the Indian Ocean. Along the coast, palm trees lean over powder-soft beaches and traditional wooden dhows sail across clear water. Nungwi and Kendwa are loved for their beautiful sunsets and swimming beaches, while the east coast offers a quieter atmosphere, coral lagoons and a close connection to local village life. Each shoreline has its own character, making it easy to find the island experience that feels right for you.',
      'In Stone Town, narrow lanes lead past carved wooden doors, lively markets, historic buildings and waterfront cafés. The town’s architecture and food tell the story of centuries of exchange between African, Arab, Indian and European cultures. A guided walk helps bring these layers of history to life, from the old trading streets to the harbour and the Forodhani evening food market.',
      'Beyond the beaches, Zanzibar is known as the Spice Island. A guided farm visit introduces the scents and uses of cloves, cinnamon, cardamom and other spices. On the water, guests can enjoy snorkelling, diving, sandbank picnics and traditional dhow sailing, subject to sea conditions and conservation rules. Zanzibar is a wonderful place to slow down after a safari, celebrate a special occasion or simply enjoy island life.'
    ],
    highlights: ['Nungwi, Kendwa and the east-coast beaches', 'Historic Stone Town and its Swahili heritage', 'Spice farm tours and local food experiences', 'Snorkelling and diving around coral reefs', 'Jozani Forest and the Zanzibar red colobus monkey', 'Dhow cruises and sandbank excursions'],
    bestTime: 'June to October is usually cooler and drier. December to February is hot and popular for beach holidays. April and May are typically the long-rain season.',
    experiences: ['Beach stays and romantic sunset dinners', 'Stone Town guided heritage walks', 'Spice farm and village visits', 'Snorkelling, diving and marine excursions', 'Dhow sailing and island day trips'],
    travelNote: 'Boat trips and marine activities depend on tides, weather and sea conditions. We recommend responsible operators who respect reef and wildlife protection.'
  },
  Kenya: {
    country: 'Kenya',
    title: 'Experience Kenya',
    subtitle: 'Where legendary savannahs meet big skies',
    image: LOCAL_IMAGES.hero,
    introduction: 'From the Maasai Mara to the foothills of Mount Kenya, discover dramatic landscapes and extraordinary wildlife.',
    story: [
      'Kenya is one of East Africa’s most celebrated safari destinations. In the Maasai Mara, open grasslands stretch to the horizon and support large populations of lions, cheetahs, elephants, giraffes and plains game. The reserve is also part of the wider ecosystem crossed by migrating wildebeest and zebras. During the migration season, river crossings can be dramatic, but wildlife movements are natural and never guaranteed on a particular day.',
      'Further south, Amboseli is famous for its elephant herds and views of Mount Kilimanjaro on clear days. Tsavo’s vast red-earth landscapes offer a sense of scale and wilderness, while Lake Nakuru and other Rift Valley lakes are known for birdlife and important rhino conservation areas. The diversity of parks makes it possible to design a journey that balances iconic wildlife viewing with quieter scenic stops.',
      'Kenya’s appeal extends beyond its national parks. Visitors can explore Nairobi’s vibrant city life, enjoy the highland scenery around Mount Kenya or continue to the Indian Ocean coast for warm beaches and Swahili culture. Community-led experiences can introduce travellers to local traditions when arranged respectfully and with the participation of the communities themselves.'
    ],
    highlights: ['Maasai Mara National Reserve', 'Amboseli and its elephant herds', 'Tsavo East and Tsavo West', 'Lake Nakuru and Rift Valley scenery', 'Mount Kenya landscapes and highland experiences', 'Kenyan coast and Swahili culture'],
    bestTime: 'July to October is a popular period for the migration in the Maasai Mara. January to March often brings drier conditions in many safari areas. Conditions vary by region.',
    experiences: ['Guided Big Five game drives', 'Scenic flights and balloon safaris where available', 'Birdwatching and photography', 'Community-led cultural experiences', 'Coastal beach extensions'],
    travelNote: 'Kenya combines naturally with Tanzania for a cross-border East African safari. Border and park arrangements should be planned in advance.'
  },
  Uganda: {
    country: 'Uganda',
    title: 'Explore Uganda',
    subtitle: 'The Pearl of Africa',
    image: LOCAL_IMAGES.gorilla,
    introduction: 'Mist-covered forests, mountain gorillas, powerful waterfalls and lakes make Uganda a remarkable nature destination.',
    story: [
      'Uganda is a country of extraordinary contrasts. In the southwest, the ancient forests of Bwindi Impenetrable National Park shelter endangered mountain gorillas. Trekking through the forest can be challenging, but the moment spent observing a gorilla family at a respectful distance is often deeply moving. Permits are limited and must be arranged ahead of time, and visitors follow strict guidance designed to protect both people and gorillas.',
      'In Kibale Forest, guided walks offer the chance to search for chimpanzees and other primates among towering trees. Queen Elizabeth National Park brings savannah wildlife, crater lakes and boat trips along the Kazinga Channel, where hippos, elephants and many bird species may be seen. In Murchison Falls National Park, the Nile squeezes through a narrow gorge before plunging into the river below, creating one of the country’s most powerful natural spectacles.',
      'Uganda’s beauty continues around Lake Bunyonyi, the Rwenzori Mountains and the source region of the Nile. The country rewards travellers who enjoy nature, active exploration and meaningful time in the landscape. A well-planned itinerary can combine primate tracking, classic game drives, boat safaris and welcoming local experiences.'
    ],
    highlights: ['Mountain gorilla trekking in Bwindi', 'Chimpanzee tracking in Kibale Forest', 'Queen Elizabeth National Park and Kazinga Channel', 'Murchison Falls and the River Nile', 'Lake Bunyonyi and the Rwenzori region', 'Exceptional birdwatching opportunities'],
    bestTime: 'June to September and December to February are generally drier periods for trekking and wildlife travel. Rain can occur at any time in rainforest environments.',
    experiences: ['Permit-based gorilla trekking', 'Guided chimpanzee tracking', 'Boat safaris and game drives', 'Waterfall and nature excursions', 'Birdwatching and community visits'],
    travelNote: 'Gorilla and chimpanzee permits are limited, age restrictions apply and advance planning is essential. Trek difficulty depends on wildlife location and weather.'
  },
  'South Africa': {
    country: 'South Africa',
    title: 'Discover South Africa',
    subtitle: 'A world of wildlife, coastlines and culture',
    image: LOCAL_IMAGES.hero,
    introduction: 'A diverse destination where Big Five safaris, dramatic mountains, lively cities and beautiful coastlines come together.',
    story: [
      'South Africa offers an extraordinary variety of travel experiences within one country. In the Greater Kruger region, guided game drives search for the Big Five across a mosaic of woodland, riverine forest and open savannah. Private reserves and national park areas offer different styles of safari, from intimate lodge stays to self-drive adventures. Wildlife sightings are always shaped by nature, but the diversity of habitats makes every outing distinctive.',
      'Cape Town brings a striking meeting of mountain and ocean. Table Mountain rises above the city, while the Cape Peninsula road winds past rugged cliffs, beaches and viewpoints. Visitors can explore the colourful neighbourhoods, enjoy local food, visit the penguin colony at Boulders Beach and discover the history of Robben Island. Nearby, the Cape Winelands offer beautiful landscapes and celebrated food and wine experiences.',
      'Beyond Cape Town, the Garden Route follows a spectacular stretch of coastline, forests and lagoons. South Africa’s many regions invite travellers to combine safari with scenery, culture, cuisine and outdoor adventure. Whether you prefer a luxury lodge, a family holiday or an active road trip, the country offers flexible ways to explore.'
    ],
    highlights: ['Kruger National Park and Greater Kruger reserves', 'Cape Town, Table Mountain and the Cape Peninsula', 'Boulders Beach penguin colony', 'Garden Route forests and coastline', 'Cape Winelands and culinary experiences', 'Robben Island and South African heritage'],
    bestTime: 'May to September is generally a strong dry-season period for wildlife viewing in Kruger. November to March is warmer and popular for Cape Town and coastal holidays.',
    experiences: ['Big Five game drives', 'Cape Peninsula scenic touring', 'Hiking and outdoor adventures', 'Cultural and historical city tours', 'Coastal road trips and food experiences'],
    travelNote: 'Distances between regions can be substantial. Domestic flights can help connect safari areas with Cape Town and other highlights.'
  },
  UAE: {
    country: 'United Arab Emirates',
    title: 'Discover Dubai & the UAE',
    subtitle: 'Arabian heritage meets modern imagination',
    image: LOCAL_IMAGES.uaeDubai,
    introduction: 'From futuristic skylines to quiet desert dunes, the UAE offers a distinctive blend of culture, architecture and adventure.',
    story: [
      'The United Arab Emirates is a destination of striking contrasts. In Dubai, glass towers rise above historic creekside districts, luxury hotels and bustling souks. The Burj Khalifa looks out over a city shaped by ambition and innovation, while the old neighbourhoods around Dubai Creek reveal the trading heritage that helped the city grow. Visitors can move from contemporary architecture to traditional markets in a single day.',
      'Beyond the city, the Arabian Desert opens into rolling dunes and wide horizons. Guided desert excursions may include a 4x4 journey over the sand, sunset views, camel experiences and an introduction to Bedouin-inspired hospitality. Responsible operators put guest safety and respect for the desert environment first, and activities are adjusted to weather conditions.',
      'Abu Dhabi offers another perspective, with the magnificent Sheikh Zayed Grand Mosque, museums, waterfront promenades and cultural attractions. Across the Emirates, travellers can enjoy family entertainment, shopping, beaches and distinctive dining. The UAE works well as a short city break, a stopover or a longer holiday combining several emirates.'
    ],
    highlights: ['Burj Khalifa and Downtown Dubai', 'Dubai Creek, souks and historic districts', 'Guided Arabian Desert experiences', 'Sheikh Zayed Grand Mosque in Abu Dhabi', 'Louvre Abu Dhabi and cultural attractions', 'Beaches, shopping and family entertainment'],
    bestTime: 'October to April is generally the most comfortable season for outdoor sightseeing. Summer months are very hot, so outdoor activities are best planned carefully.',
    experiences: ['Guided city and architecture tours', 'Licensed desert safari experiences', 'Cultural and heritage visits', 'Shopping and culinary experiences', 'Beach and family leisure activities'],
    travelNote: 'Modest clothing is recommended when visiting religious sites. Desert activities should be booked with licensed operators and follow local safety guidance.'
  },
  Hadzabe: {
    country: 'Hadzabe Cultural Experience',
    title: 'Meet the Hadzabe Community',
    subtitle: 'A respectful cultural journey near Lake Eyasi, Tanzania',
    image: LOCAL_IMAGES.lakeEyasi,
    introduction: 'Learn about the living knowledge, language and traditions of one of Tanzania’s distinctive Indigenous communities.',
    story: [
      'Near the shores of Lake Eyasi in northern Tanzania, the Hadzabe community maintains a deep relationship with the surrounding landscape. Hadzabe people are among the few remaining communities in East Africa whose traditional livelihoods have included hunting and gathering. Their knowledge of local plants, wildlife, seasons and the environment has been developed over generations and continues to shape cultural identity today.',
      'A visit, when welcomed and organised with trusted local guides and community consent, can offer an opportunity to listen and learn. Guests may be introduced to aspects of Hadzabe language, daily life, traditional skills, fire-making, gathering knowledge or the use of a bow and arrow. What visitors experience varies, because this is a living community rather than a performance arranged on demand. Hunting demonstrations or participation should never be promised, and wildlife laws and community wishes must always be respected.',
      'The wider Lake Eyasi area is also home to Datoga communities and is surrounded by beautiful escarpment scenery, seasonal landscapes and birdlife. A thoughtful cultural visit places the community first: ask permission before taking photographs, follow the guide’s instructions, avoid intrusive questions and remember that people are sharing their time and knowledge. The aim is not to treat culture as a spectacle, but to create a genuine, respectful exchange that benefits local hosts.'
    ],
    highlights: ['Community-led cultural visit near Lake Eyasi', 'Learn about traditional knowledge of local plants and landscapes', 'Discover elements of Hadzabe language and daily life', 'Understand traditional tools and skills when shared by hosts', 'Explore the Lake Eyasi region and its scenery', 'Option to learn about Datoga culture with a local guide'],
    bestTime: 'Lake Eyasi visits can be arranged throughout much of the year. Road and activity conditions vary with seasonal rains; we confirm practical arrangements close to travel dates.',
    experiences: ['Guided cultural exchange with community consent', 'Learning about traditional gathering knowledge', 'Introduction to tools and skills when offered by hosts', 'Scenic visit around Lake Eyasi', 'Optional combination with Ngorongoro or Serengeti safari'],
    travelNote: 'The Hadzabe are a living Indigenous community, not a tourist attraction. Visits must be consent-led and locally guided. Photography, gifts and any activities should follow community guidance; no specific cultural activity or hunting encounter is guaranteed.'
  }
};
