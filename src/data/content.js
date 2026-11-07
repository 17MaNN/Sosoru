/**
 * Every word, dish, hour, link and image path on the site lives here.
 * Details were checked against public listings (Instagram bio, Zomato,
 * Tripadvisor) in October 2026 — re-confirm before launch.
 */

import { dishById } from './menu'

export { menuCategories, menuNote } from './menu'

export const brand = {
  name: 'Sosoru',
  kanji: '啜る',
  kanjiNote: 'to sip',
  fullName: 'Sosoru — The Pan Asian Restaurant & Bar',
  tagline: 'Pan-Asian restaurant & bar',
  locality: 'Rajpur Road, Dehradun',
  intro: 'A quieter kind of feast',
  heroSub:
    'Timber beams, kumiko screens and low warm light on Rajpur Road. Sushi, robata, ramen and sake, served slowly.',
  footerNote:
    'A Pan-Asian restaurant and bar on Rajpur Road, Dehradun. Warm pine, paper lanterns, a noren at the door and a long evening ahead.',
}

export const contact = {
  phone: { label: '+91 91053 83737', href: 'tel:+919105383737' },
  whatsapp: { label: 'WhatsApp', href: 'https://wa.me/919105383737' },
  instagram: { label: 'Instagram', handle: '@sosoru.in', href: 'https://www.instagram.com/sosoru.in/' },
  maps: {
    label: 'Google Maps',
    href: 'https://www.google.com/maps/search/?api=1&query=Sosoru%2C%20Rajpur%20Road%2C%20Dehradun',
  },
}

/** Digits only, for the wa.me link built in the reservation form. */
export const whatsappNumber = '919105383737'

export const address = {
  line1: '81A Rajpur Road',
  line2: 'Dilaram Bazar, near BIBA',
  city: 'Dehradun',
  region: 'Uttarakhand',
  country: 'India',
  note: 'Next to BIBA in Dilaram Bazar. Directions open in Google Maps.',
  lines: ['81A Rajpur Road', 'Dilaram Bazar, near BIBA', 'Dehradun, Uttarakhand'],
  mapQuery: 'Sosoru, 81A Rajpur Road, Dilaram Bazar, Dehradun',
}

/** Monday first, so `(getDay() + 6) % 7` indexes this list directly. */
export const hours = {
  short: 'Daily · 11:00 — 23:00',
  days: [
    { day: 'Monday', hours: '11:00 — 23:00' },
    { day: 'Tuesday', hours: '11:00 — 23:00' },
    { day: 'Wednesday', hours: '11:00 — 23:00' },
    { day: 'Thursday', hours: '11:00 — 23:00' },
    { day: 'Friday', hours: '11:00 — 23:00' },
    { day: 'Saturday', hours: '11:00 — 23:00' },
    { day: 'Sunday', hours: '11:00 — 23:00' },
  ],
  note: 'Kitchen and bar close at 23:00. Holiday hours are confirmed by the restaurant.',
}

/** The two groups that sit either side of the centred logo. */
export const navGroups = {
  left: [
    { label: 'Our Story', href: '/story' },
    { label: 'Experience', href: '/experience' },
  ],
  right: [
    { label: 'Menu', href: '/menu' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ],
}

export const navLinks = [...navGroups.left, ...navGroups.right]

export const images = {
  /** The brush wordmark. Drop sosorulogo.png into public/images. */
  logo: '/images/sosorulogo.png',
  hero: '/images/interior-hero.webp',
  heroPortrait: '/images/interior-hero-portrait.webp',
  roomWide: '/images/interior-room-wide.webp',
  screen: '/images/interior-screen.webp',
  table: '/images/interior-table.webp',
  evening: '/images/interior-evening.webp',
  social: '/images/social-preview.jpg',
}

export const story = {
  eyebrow: '01 — The room',
  en: 'Built from wood, paper and light',
  jp: '部屋',
  lead: 'Warm pine, kumiko lattice screens and paper lanterns. Sunken seating, white pebbles under the benches, a bonsai by the window and vintage prints on the wall.',
  statement: 'Sosoru is a room you settle into rather than pass through.',
  paragraphs: [
    'The lattice runs the length of the dining room, throwing its lines across the floor as the evening comes down. Pendants hang low over the tables. Noren curtains mark the way to the bar, where sake is poured cold in small ceramics.',
    'The kitchen works across Japan, Korea, China and Thailand — maki cut to order, robata off the charcoal, ramen bowls built to arrive too hot to touch. Nothing is rushed to the table, and nothing is designed to be photographed more than eaten.',
  ],
  facts: [
    { label: 'Room', value: 'Timber, kumiko, lanterns' },
    { label: 'Seating', value: 'Tables and sunken booths' },
    { label: 'Kitchen', value: 'Pan-Asian, cooked to order' },
  ],
}

export const gallery = [
  {
    src: images.roomWide,
    alt: 'Palms, timber tables and cushioned chairs, the kumiko lattice run and the bar beyond at Sosoru.',
    caption: 'The dining room in service',
    jp: '広間',
    ratio: '16 / 9',
    position: '50% 50%',
  },
  {
    src: images.screen,
    alt: 'A timber lattice screen, the bar counter and backlit shelving in the evening.',
    caption: 'Lattice screens, the bar beyond',
    jp: '格子',
    ratio: '3 / 4',
    position: '50% 50%',
  },
  {
    src: images.table,
    alt: 'A round timber table set with glassware, cushioned chairs and potted palms.',
    caption: 'Tables set for the evening',
    jp: '卓',
    ratio: '1 / 1',
    position: '50% 50%',
  },
  {
    src: images.evening,
    alt: 'The Sosoru room after dark, lit by low pendant lights with the lattice in shadow.',
    caption: 'After dark, by the pendants',
    jp: '夜',
    ratio: '4 / 5',
    position: '50% 45%',
  },
  {
    src: images.heroPortrait,
    alt: 'The Sosoru dining room seen from the entrance: palms, timber beams and low pendant globes.',
    caption: 'From the door',
    jp: '入口',
    ratio: '4 / 5',
    position: '50% 55%',
  },
  {
    src: images.hero,
    alt: 'Timber beams crossing the Sosoru ceiling above the dining tables.',
    caption: 'Beams and pendants',
    jp: '梁',
    ratio: '16 / 10',
    position: '50% 40%',
  },
]

/**
 * Signature dishes. `src` is the dish photograph; if it is missing the card
 * falls back to its carved kanji. Images live in public/images, shot in the
 * kitchen and cropped to the card's 5:4 plate by hand.
 * `kanji` is the category glyph, `seal` the hanko stamp.
 */
export const signatures = [
  {
    index: '01',
    name: 'Maki, cut to order',
    note: 'Sushi & rolls',
    kanji: '寿司',
    seal: '巻',
    src: '/images/dish-maki.webp',
    alt: 'Thick rice rolls filled with egg, beef and pickled vegetables, cut and stacked on a white board.',
    description:
      'Rice rolled tight around egg, beef and pickled vegetable, cut into thick rounds and stacked down the board.',
  },
  {
    index: '02',
    name: 'Katsu curry',
    note: 'Mains',
    kanji: '咖喱',
    seal: '揚',
    src: '/images/dish-katsu-curry.webp',
    alt: 'Sliced panko cutlet over rice with golden curry, garnished with cucumber and red chilli.',
    description:
      'A panko-crusted cutlet, sliced and laid over rice, with a glossy golden curry poured around it and cucumber to cut the richness.',
  },
  {
    index: '03',
    name: 'Kimchi fried rice',
    note: 'Mains',
    kanji: '炒飯',
    seal: '炒',
    src: '/images/dish-kimchi-fried-rice.webp',
    alt: 'Kimchi fried rice in a black bowl topped with a fried egg, shredded nori and spring onion.',
    description:
      'Kimchi folded through rice, topped with a fried egg, shredded nori and spring onion, with the cold sides alongside.',
  },
  {
    index: '04',
    name: 'Bottles, brought cold',
    note: 'The bar',
    kanji: '酒',
    seal: '酒',
    src: '/images/dish-sake.webp',
    alt: 'Four bottles of chilled sake and soju standing on a sunlit table.',
    description:
      'Bottles brought to the table cold and opened between you — sake and soju, poured as the plates arrive.',
  },
]

/**
 * The mood picker's pool. Every one of the eight answer combinations resolves
 * to at least one dish, so no tap ever dead-ends.
 */
export const moodDishes = [
  { ...dishById('soups-Oi Muchim'), weight: 'light', temp: 'cold' },
  { ...dishById('soups-Spinach Gomae'), weight: 'light', temp: 'cold' },
  { ...dishById('appetisers-Vegetable Tempura'), weight: 'light', temp: 'hot' },
  { ...dishById('appetisers-Ebi Tempura'), weight: 'light', temp: 'hot' },
  { ...dishById('appetisers-Sosoru Style Chicken Karaage'), weight: 'light', temp: 'hot' },
  { ...dishById('sushi-Sake (Salmon) Sashimi'), weight: 'light', temp: 'cold' },
  { ...dishById('ramen-Tokyo Ramen'), weight: 'hearty', temp: 'hot' },
  { ...dishById('ramen-Tonkotsu Ramen'), weight: 'hearty', temp: 'hot' },
  { ...dishById('donburi-Bibimbap'), weight: 'hearty', temp: 'hot' },
  { ...dishById('plates-Katsu Curry'), weight: 'hearty', temp: 'hot' },
  { ...dishById('sushi-Veg Sushi Platter'), weight: 'hearty', temp: 'cold' },
  { ...dishById('sushi-Non-Veg Sushi Platter'), weight: 'hearty', temp: 'cold' },
]

export const moodQuestions = [
  {
    key: 'weight',
    prompt: 'How hungry are you?',
    jp: '腹',
    options: [
      { value: 'light', label: 'Light', note: 'A plate or two' },
      { value: 'hearty', label: 'Hearty', note: 'Something that fills' },
    ],
  },
  {
    key: 'veg',
    prompt: 'Anything off the table?',
    jp: '菜',
    options: [
      { value: true, label: 'Vegetarian', note: 'No meat, no fish' },
      { value: false, label: 'Anything', note: 'Meat and fish welcome' },
    ],
  },
  {
    key: 'temp',
    prompt: 'What does the weather call for?',
    jp: '温',
    options: [
      { value: 'hot', label: 'Something hot', note: 'Steam off the bowl' },
      { value: 'cold', label: 'Something cold', note: 'Cool and clean' },
    ],
  },
]

export const seating = [
  {
    id: 'table',
    label: 'Table',
    jp: '卓',
    image: images.table,
    alt: 'A round timber table set with glassware, cushioned chairs and potted palms.',
    description:
      'Round timber tables under the pendant globes, set with linen and glass. The room is quiet enough to talk across a table without raising your voice.',
    note: 'Seats two to six · best for dinner',
  },
  {
    id: 'zashiki',
    label: 'Floor seating',
    jp: '座敷',
    image: images.screen,
    alt: 'A timber lattice screen with the bar counter and backlit shelving beyond.',
    description:
      'The raised platform behind the lattice: low tables, cushions, and white pebbles under the bench edge. Shoes off, knees up, plates shared down the middle.',
    note: 'Seats four to eight · zashiki',
  },
  {
    id: 'bar',
    label: 'Bar',
    jp: '酒場',
    image: images.evening,
    alt: 'The Sosoru room after dark, lit by low pendant lights with the lattice in shadow.',
    description:
      'The counter at the back of the room, where sake is poured cold and highballs are built tall. Walk-ins are easiest to seat here.',
    note: 'Seats six at the counter · no booking needed',
  },
]

export const reservations = {
  eyebrow: '06 — Reservations',
  en: 'Book a table',
  jp: '予約',
  lead: 'Tables for two through to the long table at the back. Send the details and the restaurant confirms on WhatsApp.',
  slots: ['Lunch · 12:00 — 15:00', 'Evening · 18:00 — 23:00'],
  times: ['12:00', '13:00', '14:00', '18:30', '19:30', '20:30', '21:30'],
  guests: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
}

export const visit = {
  eyebrow: 'Visit',
  en: 'Rajpur Road, Dehradun',
  jp: '来店',
  lead: 'Next to BIBA in Dilaram Bazar. The dining room and the bar are open every day, 11:00 until 23:00.',
}

/* ── Pages ─────────────────────────────────────────────────────────────── */

export const pages = {
  home: {
    title: 'Sosoru — Japanese & Pan-Asian dining, Rajpur Road, Dehradun',
    description:
      'The Pan Asian Restaurant & Bar on Rajpur Road, Dehradun: timber, kumiko lattice and low warm light, with sushi, robata, ramen and sake served slowly. Open daily, 11:00–23:00.',
  },
  story: {
    title: 'Our Story — Sosoru, Dehradun',
    description:
      'The room, the materials and the kitchen behind Sosoru: warm pine, kumiko screens, paper lanterns and a menu cooked to order.',
  },
  menu: {
    title: 'Menu — Sosoru, Dehradun',
    description:
      'Appetisers, soups and salads, dim sum, bao, sushi and gimbap, ramen, rice and noodles, mains, pan-Asian plates, donburi, bento, Korean BBQ and the full bar at Sosoru, Rajpur Road, Dehradun.',
  },
  experience: {
    title: 'The Experience — Sosoru, Dehradun',
    description:
      'Three ways to take a table at Sosoru: the dining room, the raised zashiki platform and the bar at the back of the room.',
  },
  gallery: {
    title: 'Gallery — Sosoru, Dehradun',
    description: 'Photographs of the Sosoru dining room, the lattice screens, the bar and the tables set for the evening.',
  },
  contact: {
    title: 'Contact & Reservations — Sosoru, Dehradun',
    description:
      'Find Sosoru at 81A Rajpur Road, Dilaram Bazar, Dehradun. Hours, telephone, WhatsApp, directions and table reservations.',
  },
  notFound: {
    title: 'Page not found — Sosoru',
    description: 'That page is not on the menu. Return to Sosoru.',
  },
}

/** Three plates the homepage points at, pulled from the menu by hand. */
export const homeHighlights = [
  {
    name: 'Katsu Curry',
    note: 'Pan-Asian plates',
    description: 'Tofu, chicken or prawn, with short grain rice and a glossy golden curry.',
    price: '599 / 649 / 699',
    veg: false,
  },
  {
    name: 'Sosoru Style Chicken Karaage',
    note: 'Appetisers',
    description: 'Japanese-style crispy fried chicken, ordered again by everyone who has been before.',
    price: '489',
    veg: false,
  },
  {
    name: 'Tokyo Ramen',
    note: 'Ramen',
    description: 'Miso broth, fried vegan tofu cutlet, bok choy, shiitake, corn and leeks.',
    price: '699',
    veg: true,
  },
]

export const storyPage = {
  title: 'A room built the slow way',
  jp: '物語',
  lead: 'Sosoru started with the room: timber beams, lattice screens and lantern light, and a kitchen arranged around them rather than the other way round.',
  practice: 'Nothing here is decorated. It is joined.',
  blocks: [
    {
      jp: '職人',
      title: 'Craft before ornament',
      body: 'The lattice is cut and fitted, the beams are left to show their grain, and the joins are meant to be looked at. Every surface in the room is doing a job before it is doing an impression.',
    },
    {
      jp: '素材',
      title: 'Materials that age',
      body: 'Pine darkens, brass dulls, paper softens. The room is finished so that a year of evenings makes it better rather than worn, which is why almost nothing in it is painted or sealed shut.',
    },
    {
      jp: '客',
      title: 'Hospitality, quietly',
      body: 'Water is filled before it is asked for, plates are cleared without a performance, and nobody hurries a table. Good service here is the part of the evening you never notice.',
    },
  ],
  kitchen: {
    label: 'The kitchen',
    quote: 'A dish is finished when there is nothing left to take away.',
    paragraphs: [
      'The kitchen works across Japan, Korea, China and Thailand, but the discipline is Japanese: few components, each one correct. Maki is cut to order, skewers come off the charcoal and go straight to the table, and ramen is assembled so that it arrives at the temperature it was intended to be eaten at.',
      'The menu changes with what the market has, not with a calendar. If the fish is not right that morning, the sashimi plate does not go out — the kitchen would rather offer fewer things than apologise for one.',
    ],
  },
}

export const experiencePage = {
  title: 'An evening, arranged',
  jp: '体験',
  lead: 'The room is built for a long dinner: low light, soft acoustics, and a choice of table, sunken platform or counter.',
  hospitality: {
    heading: 'Omotenashi, without ceremony',
    paragraphs: [
      'You are seated, handed a menu, and left alone with it. Plates arrive as they are ready rather than in a fixed order, and the table is yours for the evening — there is no second sitting waiting behind you.',
      'Ask about a dish and the answer comes from the kitchen, not a script. Allergens are handled in the pass, and anything the kitchen cannot do properly, it will say so.',
    ],
  },
  moments: [
    { title: 'Arrival', body: 'A noren at the door, a low room beyond it, and water poured before the menu is opened.' },
    { title: 'First plates', body: 'Cold things first — kimchi, sashimi, a roll cut to order — with the sake poured at the table.' },
    { title: 'The middle', body: 'Charcoal and rice: skewers, katsu, a bowl of ramen built to arrive too hot to touch.' },
    { title: 'The long end', body: 'A last plate of nigiri, one more highball, and nobody moving you along.' },
  ],
}

export const contactPage = {
  title: 'Find us, or send a note',
  jp: '連絡',
  lead: 'Sosoru sits on Rajpur Road in Dilaram Bazar, next to BIBA. Walk-ins are welcome; tables for six or more are best arranged ahead.',
  booking: {
    heading: 'Book the evening, not a slot',
    body: 'Send the date, the time and how many of you there are, and the restaurant confirms on WhatsApp. For same-day tables, calling is faster.',
  },
  notes: [
    'Open every day, 11:00 until 23:00. The kitchen and bar close together at 23:00.',
    'Tables for six or more and the long table at the back are best booked a day ahead.',
    'Tell the kitchen about allergies when you book — most dishes can be adjusted.',
    'Next to BIBA in Dilaram Bazar, with parking on Rajpur Road.',
  ],
}
