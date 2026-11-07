import { LOCAL_IMAGES } from './safariData';

export interface DestinationPlace {
  name: string;
  type: 'National Park' | 'Mountain' | 'Island & Coast' | 'City & Heritage' | 'Nature & Adventure' | 'Desert & Landmark' | 'Cultural Experience';
  description: string;
}

export interface DestinationStory {
  country: string;
  title: string;
  subtitle: string;
  image: string;
  introduction: string;
  story: string[];
  places: DestinationPlace[];
  culture: { title: string; description: string }[];
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
    introduction: 'A land of vast horizons, remarkable wildlife, legendary mountains and living cultures.',
    story: [
      'Tanzania is one of Africa’s most rewarding destinations, bringing together immense wildlife landscapes, volcanic highlands, tropical forests, freshwater lakes and the Indian Ocean coast. A journey may begin on the endless Serengeti plains, continue into the wildlife-rich Ngorongoro highlands and finish on the beaches of Zanzibar. Each region has its own character, wildlife and rhythm, so a safari can be designed around the season, the time available and the style of travel you prefer.',
      'The country protects some of the continent’s best-known ecosystems. The northern circuit is celebrated for the Serengeti, Ngorongoro, Tarangire and Lake Manyara, while the southern and western parks offer a more remote feeling, fewer crowds in many areas and exceptional opportunities to explore varied habitats. Tanzania is also home to Africa’s highest mountain, Mount Kilimanjaro, as well as Mount Meru and the forested ranges of the Usambara and Udzungwa mountains.',
      'Tanzania’s people and cultures are just as important to its identity as its landscapes. Maasai communities maintain distinctive pastoral traditions across parts of northern Tanzania, while around Lake Eyasi visitors may learn about Hadzabe and Datoga heritage through respectful, community-led visits. Our Trip Africa can combine wildlife, mountains and cultural experiences into one carefully planned journey.'
    ],
    places: [
      { name: 'Serengeti National Park', type: 'National Park', description: 'The Serengeti is a vast ecosystem of open grasslands, rocky kopjes, river valleys and woodlands. It is famous for lions, cheetahs, leopards, elephants and the annual movement of wildebeest and zebras. The Great Migration changes location through the year, following rainfall and fresh grazing; the timing of calving and river crossings varies naturally, so sightings can never be guaranteed.' },
      { name: 'Ngorongoro Conservation Area', type: 'Nature & Adventure', description: 'The Ngorongoro highlands combine dramatic volcanic scenery with important wildlife habitats and Maasai pastoral landscapes. The Ngorongoro Crater is a remarkable caldera where visitors may see lions, elephants, buffaloes, hippos and the endangered black rhino. The wider conservation area also includes highland forests, archaeological heritage and the famous Olduvai Gorge.' },
      { name: 'Tarangire National Park', type: 'National Park', description: 'Tarangire is known for large elephant herds, ancient baobab trees and the Tarangire River, which becomes an important water source in the dry season. Seasonal wildlife concentrations can be impressive, with zebras, wildebeest, giraffes, antelopes and predators moving through the park’s varied savannah and woodland.' },
      { name: 'Lake Manyara National Park', type: 'National Park', description: 'Set beneath the Great Rift Valley escarpment, Lake Manyara offers a compact but varied landscape of groundwater forest, open floodplain, acacia woodland and alkaline lake. It is known for birdlife, elephants, baboons and other wildlife. The lake’s flamingo numbers change with water and feeding conditions.' },
      { name: 'Arusha National Park', type: 'National Park', description: 'Close to Arusha town, this scenic park is a wonderful introduction to Tanzania’s landscapes. It includes the Momella Lakes, montane forest and the dramatic slopes of Mount Meru. Guided walking safaris and canoeing on selected lakes can provide a different perspective from a traditional vehicle safari.' },
      { name: 'Nyerere National Park', type: 'National Park', description: 'One of Africa’s largest protected wilderness areas, Nyerere contains broad miombo woodlands, open plains and the Rufiji River system. Boat safaris, game drives and guided activities in permitted areas offer opportunities to experience hippos, crocodiles, elephants, wild dogs and abundant birdlife in a more remote setting.' },
      { name: 'Ruaha National Park', type: 'National Park', description: 'Ruaha is a rugged southern wilderness of baobab-dotted hills, seasonal rivers and extensive dry-country habitats. It is especially valued for its elephant populations and predators, including lions and African wild dogs. The changing flow of the Great Ruaha River shapes wildlife viewing through the seasons.' },
      { name: 'Mikumi National Park', type: 'National Park', description: 'Mikumi’s open Mkata floodplain creates classic savannah scenery and can make wildlife easier to spot across broad distances. Giraffes, zebras, buffaloes, elephants, wildebeest and several predators inhabit the park. Its location near the highway makes it a practical option for journeys between Dar es Salaam and the southern safari circuit.' },
      { name: 'Udzungwa Mountains National Park', type: 'Mountain', description: 'Udzungwa is a biodiversity-rich mountain forest known for hiking, waterfalls and endemic plants and animals. Trails climb through tropical forest to viewpoints and the impressive Sanje Waterfalls. This is a walking and nature destination rather than a conventional vehicle-based game-drive park.' },
      { name: 'Gombe Stream National Park', type: 'National Park', description: 'On the shores of Lake Tanganyika, Gombe is a small, forested park internationally associated with Jane Goodall’s long-running chimpanzee research. Visitors can trek with trained guides to observe chimpanzees in their natural habitat, subject to park rules and trekking conditions.' },
      { name: 'Mahale Mountains National Park', type: 'Mountain', description: 'Mahale combines forested mountains with the clear waters of Lake Tanganyika. It is renowned for guided chimpanzee trekking and its remote, beautiful lakeshore setting. Reaching the park is part of the adventure, and visits require careful planning around transport, permits and seasonal conditions.' },
      { name: 'Mount Kilimanjaro', type: 'Mountain', description: 'At approximately 5,895 metres, Kilimanjaro is Africa’s highest mountain and the world’s tallest free-standing mountain. Trekkers pass through cultivated foothills, rainforest, heath and moorland before reaching the alpine desert and summit zone. Routes such as Machame, Lemosho, Marangu and Rongai offer different durations and scenery; proper acclimatisation and qualified mountain crews are essential.' },
      { name: 'Mount Meru', type: 'Mountain', description: 'Rising above Arusha National Park, Mount Meru is Tanzania’s second-highest mountain and a rewarding multi-day trek. The route climbs through montane forest and open heath towards a dramatic crater rim, with expansive views that may include Kilimanjaro on clear days. It is a challenging climb and should be undertaken with the required guides and park arrangements.' },
      { name: 'Usambara Mountains', type: 'Mountain', description: 'The Usambara range in north-eastern Tanzania is known for cool highland air, green valleys, traditional villages and exceptional biodiversity. Guided walks around Lushoto and the surrounding forests reveal viewpoints, farms, waterfalls and endemic species, making the area ideal for slower-paced hiking and cultural discovery.' }
    ],
    culture: [
      { title: 'Meet the Maasai', description: 'The Maasai are a well-known Indigenous pastoral community whose heritage is deeply connected to cattle, family, age-set traditions and the landscapes of northern Tanzania and southern Kenya. Through visits arranged with participating community hosts, guests may learn about traditional homes, beadwork, clothing, music, stories and contemporary Maasai life. Maasai communities are diverse and changing; visitors should approach each encounter with respect, ask before taking photographs and support experiences that provide fair benefits to local hosts.' },
      { title: 'Discover the Hadzabe and Datoga near Lake Eyasi', description: 'Around Lake Eyasi, community-led visits can introduce guests to Hadzabe knowledge of local plants, language and traditional hunting-and-gathering heritage, as well as Datoga metalworking and pastoral traditions. These are living communities, not staged attractions. Activities depend on host consent, local guidance and current conditions; no hunting encounter or cultural performance should be promised.' },
      { title: 'Coffee, villages and Swahili heritage', description: 'From coffee-growing communities on the slopes of Kilimanjaro and Meru to coastal Swahili towns, Tanzania offers many ways to understand daily life, food, craft and local history. Thoughtfully guided visits allow travellers to learn directly from residents while respecting community priorities.' }
    ],
    highlights: ['Serengeti and the Great Migration', 'Ngorongoro Crater and Olduvai Gorge', 'Tarangire elephants and baobabs', 'Nyerere and Ruaha southern wilderness', 'Kilimanjaro and Mount Meru trekking', 'Maasai cultural experiences', 'Hadzabe and Datoga visits near Lake Eyasi'],
    bestTime: 'June to October is generally favourable for dry-season wildlife viewing in many parks. January to March is often rewarding in the southern Serengeti calving areas. Green-season travel can bring beautiful scenery and birdlife. Conditions and migration locations vary by region and year.',
    experiences: ['Private 4x4 game drives with a professional guide', 'Hot-air balloon safari where available and permitted', 'Guided mountain trekking with qualified crews', 'Walking safaris and boat safaris where permitted', 'Maasai, Hadzabe and Datoga cultural visits arranged respectfully', 'Coffee, village and Swahili heritage experiences'],
    travelNote: 'Park activities, access rules and fees vary. Mountain climbs require preparation and proper acclimatisation. Cultural visits are arranged with community consent and local hosts.'
  },
  Zanzibar: {
    country: 'Zanzibar',
    title: 'Escape to Zanzibar',
    subtitle: 'The Indian Ocean island of spices and stories',
    image: LOCAL_IMAGES.zanzibar,
    introduction: 'White-sand beaches, warm turquoise water and a rich Swahili heritage create an island escape unlike any other.',
    story: [
      'Zanzibar is an archipelago shaped by the Indian Ocean, centuries of trade and a distinctive Swahili culture. The main island, Unguja, offers palm-lined beaches, coral lagoons, fishing villages and historic towns. Nearby islands and sandbanks add opportunities for sailing, snorkelling and quiet escapes. Whether you are planning a honeymoon, family holiday or a few days of rest after a mainland safari, Zanzibar offers a relaxed change of pace.',
      'Stone Town is the historic heart of the islands. Its narrow lanes, carved doors, old merchant houses, mosques, churches and lively markets reflect generations of African, Arab, Indian and European exchange. Beyond the town, spice farms reveal the crops that helped make Zanzibar famous, while Jozani’s forest protects unique wildlife and a precious natural environment.',
      'The coastline changes character from north to east and south. Nungwi and Kendwa are popular for swimming and sunsets; the east coast is known for broad tidal flats, reef lagoons and village life. Tides, wind and sea conditions shape what activities are possible each day, so local guidance is important when planning water excursions.'
    ],
    places: [
      { name: 'Stone Town', type: 'City & Heritage', description: 'A UNESCO-listed historic town of winding lanes, carved doors, lively bazaars and waterfront heritage. Guided walks can introduce the old fort, former trading streets, historic buildings and the layered history of the Swahili coast.' },
      { name: 'Nungwi Beach', type: 'Island & Coast', description: 'At Zanzibar’s northern tip, Nungwi is known for pale sand, clear water and a lively beach atmosphere. It is a popular base for swimming, sunset dhow trips, restaurants and boat excursions, with conditions varying by tide and weather.' },
      { name: 'Kendwa Beach', type: 'Island & Coast', description: 'Kendwa offers a wide sandy shoreline and a reputation for beautiful sunsets. The beach is suitable for relaxed seaside stays and selected water activities, while responsible operators help protect the coastal environment.' },
      { name: 'Paje and Jambiani', type: 'Island & Coast', description: 'These south-eastern villages offer a laid-back coastal atmosphere, long beaches and shallow turquoise lagoons. The area is popular for kitesurfing when wind conditions are suitable, as well as village walks and learning about seaweed farming.' },
      { name: 'Jozani-Chwaka Bay National Park', type: 'Nature & Adventure', description: 'Zanzibar’s best-known terrestrial protected area safeguards forest, mangrove and other habitats. Visitors may see the endemic Zanzibar red colobus monkey with a guide and learn why forest conservation is important for the island.' },
      { name: 'Mnemba Atoll', type: 'Nature & Adventure', description: 'The waters around Mnemba are known for coral reefs and marine life, making the area popular for snorkelling and diving. Access and activities are controlled in places, and visitors should follow marine conservation guidance and avoid touching coral or wildlife.' },
      { name: 'Prison Island (Changuu)', type: 'Island & Coast', description: 'A short boat journey from Stone Town brings visitors to Changuu Island, known for its history and resident Aldabra giant tortoises. The trip is often combined with time on the water, subject to weather and boat conditions.' },
      { name: 'Spice Farms', type: 'Cultural Experience', description: 'Guided visits to working farms introduce cloves, cinnamon, nutmeg, vanilla and other spices, along with tropical fruits and local uses. These visits connect the island’s agricultural life with its long trading history.' },
      { name: 'Mafia Island', type: 'Island & Coast', description: 'South of Unguja, Mafia Island is a quieter island destination known for its marine park, reefs and relaxed coastal villages. Seasonal whale-shark encounters may be possible under responsible guidelines, but sightings are never guaranteed.' }
    ],
    culture: [
      { title: 'Swahili island life', description: 'Zanzibar’s culture is shaped by coastal trade, Islam, family life, fishing, food and the Swahili language. Local guides can introduce visitors to everyday island traditions with sensitivity to religious customs and community life.' },
      { title: 'Spice, food and craftsmanship', description: 'Taste local dishes, learn about spice cultivation and discover traditional crafts. Choose community-based experiences that recognise the knowledge and work of local producers.' }
    ],
    highlights: ['Stone Town heritage walks', 'Nungwi, Kendwa, Paje and Jambiani beaches', 'Spice farm experiences', 'Jozani Forest and red colobus monkeys', 'Mnemba marine excursions', 'Dhow sailing and sandbank trips'],
    bestTime: 'June to October is generally cooler and drier. December to February is hot and popular for beach holidays. April and May are usually the long-rain season. Sea conditions and tides affect daily activities.',
    experiences: ['Beach stays and romantic sunset dinners', 'Stone Town guided heritage walks', 'Spice farm and village visits', 'Snorkelling and diving with responsible operators', 'Dhow sailing and island day trips'],
    travelNote: 'Boat trips depend on tides, weather and sea conditions. Zanzibar is culturally conservative in many communities, so modest clothing away from resort beaches is appreciated.'
  },
  Kenya: {
    country: 'Kenya',
    title: 'Experience Kenya',
    subtitle: 'Where legendary savannahs meet big skies',
    image: LOCAL_IMAGES.hero,
    introduction: 'From the Maasai Mara to Mount Kenya and the Indian Ocean coast, discover wildlife and remarkable landscapes.',
    story: [
      'Kenya is one of East Africa’s most celebrated destinations, with open savannahs, volcanic landscapes, highland forests, lakes and a beautiful coastline. Its national reserves protect iconic wildlife, while its mountains and rural regions offer hiking, culture and scenic escapes. A journey can focus on classic Big Five safaris or combine wildlife with Nairobi, the Rift Valley and the coast.',
      'The Maasai Mara forms part of the wider Serengeti-Mara ecosystem and is known for big cats and seasonal movements of wildebeest and zebras. Amboseli offers memorable elephant encounters beneath the distant silhouette of Kilimanjaro, while Tsavo’s immense landscapes create a sense of scale and wilderness. Northern reserves such as Samburu have distinctive dry-country wildlife and a different atmosphere.',
      'Kenya is also home to Mount Kenya, the country’s highest mountain, and a coastline rich in Swahili heritage. From Lamu’s historic streets to Diani’s beaches, travellers can end a safari beside the Indian Ocean. Cultural visits should be organised with community consent and respect for local customs.'
    ],
    places: [
      { name: 'Maasai Mara National Reserve', type: 'National Park', description: 'The Mara’s rolling grasslands and river systems support lions, cheetahs, leopards, elephants, giraffes and abundant plains game. It is part of the Great Migration ecosystem, with seasonal herds moving between Tanzania and Kenya. River crossings are natural events and cannot be guaranteed.' },
      { name: 'Amboseli National Park', type: 'National Park', description: 'Amboseli is celebrated for its elephant herds and striking views of Mount Kilimanjaro on clear days. Swamps fed by underground water attract wildlife through dry periods, while open plains create excellent photographic opportunities.' },
      { name: 'Tsavo East National Park', type: 'National Park', description: 'Tsavo East is a vast, semi-arid wilderness known for red-earth scenery, the Galana River and wide open spaces. Visitors may encounter elephants, lions, giraffes, zebras and many other species across an expansive landscape.' },
      { name: 'Tsavo West National Park', type: 'National Park', description: 'Tsavo West combines volcanic hills, lava flows, springs and rugged scenery. Mzima Springs is a notable attraction, with clear water and viewing opportunities for aquatic wildlife. The park offers a varied contrast to the open plains of Tsavo East.' },
      { name: 'Lake Nakuru National Park', type: 'National Park', description: 'Lake Nakuru is known for its lake, woodland and important rhino conservation areas. Birdlife is abundant and flamingo numbers fluctuate with changing lake conditions. Rothschild’s giraffes and other wildlife may also be seen.' },
      { name: 'Samburu National Reserve', type: 'National Park', description: 'In Kenya’s dry north, Samburu protects wildlife adapted to arid habitats, including Grevy’s zebra, reticulated giraffe, gerenuk and Somali ostrich. The Ewaso Ng’iro River provides a lifeline for animals and creates attractive riverine scenery.' },
      { name: 'Mount Kenya National Park', type: 'Mountain', description: 'Mount Kenya is Africa’s second-highest mountain, with rugged peaks, glaciers, alpine moorland and forested lower slopes. Trekking routes offer multi-day adventures, while technical summits require specialist skills and equipment. The mountain is also a UNESCO World Heritage landscape.' },
      { name: 'Lake Naivasha and Hell’s Gate', type: 'Nature & Adventure', description: 'The freshwater lake is known for birdlife and boat trips, while nearby Hell’s Gate offers dramatic gorges, cliffs and geothermal scenery. Walking and cycling are possible in designated areas, subject to park rules and wildlife safety guidance.' },
      { name: 'Diani Beach and the Kenyan Coast', type: 'Island & Coast', description: 'South of Mombasa, Diani is famous for white sand, warm ocean water and palm-lined beaches. The coast also offers marine excursions, Swahili food and cultural heritage, making it a popular extension after a safari.' },
      { name: 'Lamu Old Town', type: 'City & Heritage', description: 'Lamu is a historic Swahili settlement with narrow lanes, carved doors and traditional architecture. Its heritage reflects centuries of Indian Ocean trade, and visitors can explore on foot or by traditional dhow with local guidance.' }
    ],
    culture: [
      { title: 'Meet Maasai communities', description: 'Maasai communities live across parts of Kenya and Tanzania and are known for pastoral heritage, beadwork, distinctive clothing and strong community traditions. A visit should be arranged with participating hosts, with clear permission for photography and fair benefit to the community.' },
      { title: 'Discover Kenya’s many cultures', description: 'Kenya is home to many communities, languages and artistic traditions. Local food, music, craft markets and guided heritage visits offer a richer understanding of the country beyond its wildlife parks.' }
    ],
    highlights: ['Maasai Mara and the Great Migration ecosystem', 'Amboseli elephants and Kilimanjaro views', 'Tsavo East and Tsavo West', 'Samburu and northern Kenya wildlife', 'Mount Kenya trekking', 'Diani Beach and Lamu heritage'],
    bestTime: 'July to October is popular for wildlife viewing in the Maasai Mara and the migration season, though exact herd locations vary. January to March is often drier in many regions. Coastal weather follows a different pattern.',
    experiences: ['Guided Big Five game drives', 'Balloon safaris where available', 'Mountain trekking and nature walks', 'Community-led cultural experiences', 'Indian Ocean beach extensions'],
    travelNote: 'Kenya combines naturally with Tanzania for an East African safari. Park fees, border arrangements and mountain permits should be confirmed before travel.'
  },
  Uganda: {
    country: 'Uganda',
    title: 'Explore Uganda',
    subtitle: 'The Pearl of Africa',
    image: LOCAL_IMAGES.gorilla,
    introduction: 'Mist-covered forests, mountain gorillas, powerful waterfalls, lakes and savannahs make Uganda extraordinary.',
    story: [
      'Uganda is a country of remarkable natural variety. The western region rises into forested mountains and crater lakes, while broad savannah parks protect elephants, lions, buffaloes and countless bird species. The River Nile crosses the country, creating powerful waterfalls and beautiful waterways. Uganda is especially famous for mountain gorilla and chimpanzee tracking, experiences that require careful conservation-led planning.',
      'Bwindi and Mgahinga protect mountain gorillas in the southwest, while Kibale is one of the best-known places to track chimpanzees. Queen Elizabeth National Park combines savannah, crater lakes and the wildlife-rich Kazinga Channel. Further north, Murchison Falls showcases the Nile forcing its way through a narrow gorge before plunging into the river below.',
      'The Rwenzori Mountains, Lake Bunyonyi and the source region of the Nile add hiking, scenery and cultural discovery. Uganda rewards travellers who enjoy active exploration and a mix of primate encounters, classic safaris and time in nature.'
    ],
    places: [
      { name: 'Bwindi Impenetrable National Park', type: 'National Park', description: 'Bwindi protects ancient montane rainforest and a significant population of endangered mountain gorillas. Guided gorilla trekking follows strict permit, health and distance rules to protect both visitors and gorillas. Trails can be steep, muddy and physically demanding.' },
      { name: 'Mgahinga Gorilla National Park', type: 'National Park', description: 'Part of the Virunga volcanic landscape, Mgahinga offers gorilla trekking in a dramatic setting of forested volcanoes. The park also protects golden monkeys and provides hiking opportunities on volcanic slopes with authorised guides.' },
      { name: 'Kibale Forest National Park', type: 'National Park', description: 'Kibale is celebrated for its chimpanzee population and rich primate diversity. Guided tracking walks explore tropical forest and help visitors understand primate behaviour, conservation and the importance of protecting forest habitats.' },
      { name: 'Queen Elizabeth National Park', type: 'National Park', description: 'This diverse park includes savannah, crater lakes, wetlands and the Kazinga Channel. Game drives may reveal elephants, buffaloes, antelopes and predators, while boat cruises offer close views of hippos, crocodiles and abundant waterbirds.' },
      { name: 'Murchison Falls National Park', type: 'National Park', description: 'The Nile is forced through a narrow rock cleft at Murchison Falls before plunging into a powerful cascade. The park combines river scenery with savannah game drives and boat excursions, offering opportunities to see elephants, giraffes, buffaloes and many birds.' },
      { name: 'Lake Mburo National Park', type: 'National Park', description: 'A compact park of rolling hills, acacia woodland and lakes, Lake Mburo is known for zebras, impalas, elands and diverse birdlife. Guided walking, cycling and boat activities may be available in designated areas.' },
      { name: 'Rwenzori Mountains', type: 'Mountain', description: 'Known as the Mountains of the Moon, the Rwenzori range features dramatic peaks, glaciers, high-altitude valleys and unusual afro-alpine vegetation. Multi-day treks are demanding and require specialist guides, preparation and appropriate equipment.' },
      { name: 'Mount Elgon National Park', type: 'Mountain', description: 'On Uganda’s eastern border, Mount Elgon is an ancient extinct volcano with a vast caldera, caves, waterfalls and forested slopes. Hiking routes pass through changing vegetation zones and offer a quieter mountain experience.' },
      { name: 'Lake Bunyonyi', type: 'Nature & Adventure', description: 'Surrounded by terraced green hills, Lake Bunyonyi is known for its deep water and many small islands. Canoeing, birdwatching and relaxed lakeside stays make it a peaceful stop before or after gorilla trekking.' },
      { name: 'Jinja and the Source of the Nile', type: 'Nature & Adventure', description: 'Jinja is a lively riverside town associated with the source of the Nile and a range of water-based adventures. Boat trips and selected activities are available with licensed operators and appropriate safety measures.' }
    ],
    culture: [
      { title: 'Community and cultural encounters', description: 'Uganda is home to many communities with distinctive languages, music, food and craft traditions. Community visits, local markets and cultural centres can help visitors understand the country’s diversity when experiences are organised respectfully and with local participation.' }
    ],
    highlights: ['Mountain gorilla trekking in Bwindi and Mgahinga', 'Chimpanzee tracking in Kibale', 'Queen Elizabeth National Park and Kazinga Channel', 'Murchison Falls and the River Nile', 'Rwenzori and Mount Elgon trekking', 'Lake Bunyonyi and Jinja'],
    bestTime: 'June to September and December to February are generally drier periods for trekking and wildlife travel. Rain can occur at any time in rainforest environments, and trail conditions vary.',
    experiences: ['Permit-based gorilla trekking', 'Guided chimpanzee tracking', 'Boat safaris and game drives', 'Mountain hikes and waterfall excursions', 'Birdwatching and community visits'],
    travelNote: 'Gorilla and chimpanzee permits are limited and should be booked early. Trek difficulty depends on wildlife location, terrain and weather. Follow all conservation and health guidance.'
  },
  'South Africa': {
    country: 'South Africa',
    title: 'Discover South Africa',
    subtitle: 'A world of wildlife, coastlines and culture',
    image: LOCAL_IMAGES.hero,
    introduction: 'A diverse destination where Big Five safaris, dramatic mountains, vibrant cities and beautiful coastlines meet.',
    story: [
      'South Africa offers remarkable variety, from wildlife-rich savannahs and mountain ranges to dramatic coastlines, historic towns and vibrant cities. Travellers can combine a classic safari in the Greater Kruger region with the scenery and culture of Cape Town, the Garden Route or the Cape Winelands. The country’s road networks and domestic flight connections make multi-region holidays possible with thoughtful planning.',
      'The north-east is known for its major wildlife reserves, while the south-west offers mountain landscapes, fynbos vegetation and ocean views. Table Mountain overlooks Cape Town, the Drakensberg range rises along the eastern interior and the Garden Route links forests, lagoons and beaches. Each region offers a different pace and a distinct sense of place.',
      'South Africa’s cultural heritage is equally rich, shaped by many communities, languages and histories. Museums, local guides, food experiences and community-led tours can help visitors understand the country beyond its famous scenery.'
    ],
    places: [
      { name: 'Kruger National Park', type: 'National Park', description: 'One of Africa’s best-known wildlife reserves, Kruger protects a vast range of habitats and species, including the Big Five. Visitors can explore on guided game drives or, in permitted areas, self-drive routes. Wildlife sightings vary with season, habitat and luck.' },
      { name: 'Greater Kruger Private Reserves', type: 'Nature & Adventure', description: 'Private reserves adjoining or near Kruger offer lodge-based safari experiences, often with guided drives and different access arrangements. Each reserve has its own rules and conservation approach, so activities and wildlife viewing vary by property.' },
      { name: 'Addo Elephant National Park', type: 'National Park', description: 'In the Eastern Cape, Addo protects elephants and a wide range of other wildlife across several habitats. It is a rewarding option for self-drive or guided safaris and can be combined with coastal journeys.' },
      { name: 'Kgalagadi Transfrontier Park', type: 'National Park', description: 'A dramatic semi-desert landscape of red dunes and dry riverbeds, Kgalagadi is known for black-maned lions, cheetahs, raptors and other desert-adapted wildlife. The park is remote, so visitors should plan fuel, supplies and travel logistics carefully.' },
      { name: 'Table Mountain National Park', type: 'Mountain', description: 'Table Mountain is Cape Town’s defining landmark, with hiking routes, unique fynbos vegetation and panoramic views over the city and ocean. Weather can change quickly, so visitors should check conditions and use safe routes or the cableway when operating.' },
      { name: 'Drakensberg Mountains', type: 'Mountain', description: 'The Drakensberg range features dramatic basalt cliffs, high peaks, valleys and waterfalls. It is a major destination for hiking, scenery and rock-art heritage, with routes ranging from accessible walks to demanding multi-day treks.' },
      { name: 'Blyde River Canyon', type: 'Nature & Adventure', description: 'One of the world’s great green canyons, Blyde River Canyon offers viewpoints, waterfalls and striking rock formations along the Panorama Route. It is often combined with a Kruger-area safari.' },
      { name: 'Cape Point and the Cape Peninsula', type: 'Nature & Adventure', description: 'The peninsula offers rugged cliffs, beaches, scenic roads and rich coastal biodiversity. Cape Point is a dramatic viewpoint within Table Mountain National Park, while nearby Boulders Beach is known for its African penguin colony.' },
      { name: 'Garden Route', type: 'Island & Coast', description: 'This celebrated coastal route links forests, lagoons, beaches and small towns. Visitors can enjoy hiking, scenic drives, wildlife experiences and water activities, choosing stops to suit the pace of their journey.' },
      { name: 'Cape Town and Robben Island', type: 'City & Heritage', description: 'Cape Town combines mountain and ocean scenery with food, art and history. Robben Island, accessed by authorised ferry tours, is an important heritage site associated with South Africa’s struggle against apartheid.' }
    ],
    culture: [
      { title: 'Meet South Africa’s diverse communities', description: 'South Africa is home to many cultural and language groups, each with its own history, food, music and traditions. Guided township, heritage and craft experiences should be chosen with local hosts and should respect residents’ privacy and dignity.' }
    ],
    highlights: ['Kruger and Greater Kruger safaris', 'Addo Elephant and Kgalagadi parks', 'Table Mountain and Cape Point', 'Drakensberg mountain scenery', 'Blyde River Canyon and Panorama Route', 'Cape Town, Robben Island and the Garden Route'],
    bestTime: 'May to September is generally a strong dry-season period for wildlife viewing in Kruger. November to March is warmer and popular for Cape Town and coastal holidays. Regional weather differs considerably.',
    experiences: ['Big Five game drives', 'Mountain hiking and scenic touring', 'Cultural and historical city tours', 'Coastal road trips and nature activities', 'Food, art and heritage experiences'],
    travelNote: 'Distances between regions can be substantial. Domestic flights can connect safari areas with Cape Town and other highlights. Follow local guidance on wildlife and hiking safety.'
  },
  UAE: {
    country: 'United Arab Emirates',
    title: 'Discover Dubai & the UAE',
    subtitle: 'Arabian heritage meets modern imagination',
    image: LOCAL_IMAGES.uaeDubai,
    introduction: 'From futuristic skylines to desert dunes, mountain wadis and cultural landmarks, the UAE offers variety and adventure.',
    story: [
      'The United Arab Emirates is a federation of seven emirates, each with its own character. Dubai is known for its modern skyline and historic creekside districts, while Abu Dhabi offers major cultural landmarks and island attractions. Beyond the cities, the country’s desert, mountains, mangroves and coastline provide a surprising range of outdoor experiences.',
      'Travellers can move from the Burj Khalifa and lively souks to the quiet dunes of the desert, or take a scenic journey into the Hajar Mountains. Traditional hospitality, local food and heritage sites offer a deeper view of Emirati culture alongside the country’s modern attractions.',
      'The UAE works well as a short city break, family holiday, shopping trip or stopover. Our Trip Africa can help combine Dubai with Abu Dhabi and other emirates, choosing experiences suited to the season and the traveller’s interests.'
    ],
    places: [
      { name: 'Burj Khalifa and Downtown Dubai', type: 'Desert & Landmark', description: 'The Burj Khalifa dominates the Downtown skyline and offers observation experiences with sweeping city views. Nearby attractions include Dubai Mall, the Dubai Fountain area and a range of restaurants and entertainment.' },
      { name: 'Old Dubai and Dubai Creek', type: 'City & Heritage', description: 'The creekside districts of Al Fahidi, Deira and Bur Dubai reveal the city’s trading history. Visitors can explore heritage houses, museums, textile and spice souks, and cross the creek by traditional abra boat.' },
      { name: 'Dubai Marina and Palm Jumeirah', type: 'City & Heritage', description: 'Dubai Marina is known for its waterfront promenade, towers and boat cruises. Palm Jumeirah is a landmark man-made island with resorts, beaches, restaurants and viewpoints across the Arabian Gulf.' },
      { name: 'Arabian Desert Conservation Reserve', type: 'Desert & Landmark', description: 'The desert beyond the city offers dunes, native wildlife and opportunities to learn about desert ecology. Licensed experiences may include guided drives, wildlife viewing and cultural hospitality, with activities adjusted for safety and conservation.' },
      { name: 'Abu Dhabi and Sheikh Zayed Grand Mosque', type: 'City & Heritage', description: 'The UAE capital combines grand architecture, waterfront districts and major cultural institutions. Sheikh Zayed Grand Mosque is a landmark of contemporary Islamic architecture; visitors should follow its dress code and visitor guidance.' },
      { name: 'Louvre Abu Dhabi and Saadiyat Island', type: 'City & Heritage', description: 'Louvre Abu Dhabi presents art and objects from different cultures under its distinctive dome. Saadiyat Island also has beaches and a growing cultural district, making it a rewarding day trip from Dubai.' },
      { name: 'Hajar Mountains and Hatta', type: 'Mountain', description: 'The Hajar Mountains offer rugged scenery, rocky valleys and cooler highland landscapes. Around Hatta, visitors can enjoy hiking, kayaking at the dam when operating, heritage sites and outdoor activities with suitable guides.' },
      { name: 'Sharjah Heritage Area', type: 'City & Heritage', description: 'Sharjah is known for museums, restored heritage buildings, traditional markets and cultural institutions. It offers a more heritage-focused contrast to Dubai’s modern skyline.' },
      { name: 'Ras Al Khaimah and Jebel Jais', type: 'Mountain', description: 'Jebel Jais is the UAE’s highest mountain area, known for winding mountain roads, dramatic viewpoints and selected adventure attractions. Weather, opening schedules and activity restrictions should be checked before travel.' }
    ],
    culture: [
      { title: 'Discover Emirati heritage', description: 'Learn about traditional hospitality, Arabic coffee, dates, crafts, falconry heritage and historic trading life through museums and licensed cultural experiences. Visitors should respect local customs and dress modestly at religious and heritage sites.' }
    ],
    highlights: ['Burj Khalifa and Downtown Dubai', 'Old Dubai, Dubai Creek and traditional souks', 'Desert experiences and conservation landscapes', 'Sheikh Zayed Grand Mosque and Louvre Abu Dhabi', 'Hajar Mountains, Hatta and Jebel Jais', 'Beaches, shopping and family attractions'],
    bestTime: 'October to April is generally the most comfortable season for outdoor sightseeing. Summer is extremely hot, so outdoor activities should be planned carefully and follow local advice.',
    experiences: ['Guided city and architecture tours', 'Licensed desert and nature experiences', 'Cultural and heritage visits', 'Mountain excursions and outdoor activities', 'Shopping, dining and beach leisure'],
    travelNote: 'Modest clothing is recommended at religious and heritage sites. Book desert and mountain activities with licensed operators and follow local safety guidance.'
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
    places: [
      { name: 'Lake Eyasi', type: 'Nature & Adventure', description: 'A seasonal soda lake set beneath the Rift Valley escarpment, Lake Eyasi is known for its changing shorelines, birdlife and striking scenery. It is the setting for locally guided cultural visits to Hadzabe and Datoga communities.' },
      { name: 'Hadzabe community visit', type: 'Cultural Experience', description: 'When invited by community hosts, visitors may learn about Hadzabe language, traditional knowledge of plants and landscapes, gathering practices and tools. Every visit is different and should be guided by consent, local leadership and respect for privacy.' },
      { name: 'Datoga cultural experience', type: 'Cultural Experience', description: 'With local hosts, visitors may learn about Datoga pastoral traditions, metalworking and beadwork. Experiences should be arranged transparently so the community benefits and visitors understand that customs are living and diverse.' },
      { name: 'Ngorongoro Highlands', type: 'Nature & Adventure', description: 'The nearby highlands offer volcanic scenery, farms and routes towards the Ngorongoro Conservation Area. Lake Eyasi can be combined with a northern Tanzania safari, subject to road conditions and available time.' }
    ],
    culture: [
      { title: 'A visit based on respect and consent', description: 'The Hadzabe are a living Indigenous community, not a tourist attraction. Photography, demonstrations and activities must only happen with permission. Do not assume that hunting, dancing or other activities will be offered; the community decides what it wishes to share.' }
    ],
    highlights: ['Community-led cultural visit near Lake Eyasi', 'Learn about traditional knowledge of local plants and landscapes', 'Discover elements of Hadzabe language and daily life', 'Datoga heritage and traditional metalworking', 'Explore the Lake Eyasi region and its scenery', 'Combine with Ngorongoro or Serengeti safari'],
    bestTime: 'Lake Eyasi visits can be arranged through much of the year. Road and activity conditions vary with seasonal rains; practical arrangements should be confirmed close to travel dates.',
    experiences: ['Guided cultural exchange with community consent', 'Learning about traditional gathering knowledge', 'Introduction to tools and skills when offered by hosts', 'Scenic visit around Lake Eyasi', 'Optional combination with Ngorongoro or Serengeti safari'],
    travelNote: 'Visits must be consent-led and locally guided. Photography, gifts and any activities should follow community guidance; no specific cultural activity or hunting encounter is guaranteed.'
  }
};
