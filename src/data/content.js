/**
 * Every word, dish, hour, link and image path on the site lives here.
 * Details were checked against public listings (Instagram bio, Zomato,
 * Tripadvisor) in October 2026 — re-confirm before launch.
 */

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
 * Signature dishes. `src` is null because there is no dish photography yet —
 * the card falls back to its carved kanji. Drop an image path in and the plate
 * becomes a photograph with the same zoom.
 * `kanji` is the category glyph, `seal` the hanko stamp.
 */
export const signatures = [
  {
    index: '01',
    name: 'Maki, cut to order',
    note: 'Sushi & rolls',
    kanji: '寿司',
    seal: '巻',
    src: null,
    alt: '',
    description:
      'Rice rolled tight around a crisp fried centre, finished with a bright chilli-orange top. Pickled ginger and wasabi at the edge of the plate.',
  },
  {
    index: '02',
    name: 'Katsu curry',
    note: 'Mains',
    kanji: '咖喱',
    seal: '揚',
    src: null,
    alt: '',
    description:
      'A panko-crusted cutlet, sliced over rice and soft egg, with spring onion curling across the top and a glossy curry beneath.',
  },
  {
    index: '03',
    name: 'Kimchi fried rice',
    note: 'Mains',
    kanji: '炒飯',
    seal: '炒',
    src: null,
    alt: '',
    description:
      'Kimchi folded through rice with sesame, a fried egg on top and cool lettuce on the side to cut the heat.',
  },
  {
    index: '04',
    name: 'Sake, poured cold',
    note: 'The bar',
    kanji: '酒',
    seal: '酒',
    src: null,
    alt: '',
    description:
      'A small ceramic carafe and cup, painted with plum blossom, brought to the table with the first plates.',
  },
]

/**
 * PREVIEW PRICING — these rupee figures are indicative, chosen so the page can
 * be laid out and tested. Replace them with the restaurant's own card before
 * launch; `menuNote` says as much on the page. `price: null` renders nothing.
 */
export const menuNote =
  'A preview menu, grouped the way dishes arrive at the table. Prices shown are indicative for this layout — confirm them with the restaurant before launch.'

export const menuCategories = [
  {
    id: 'starters',
    index: '01',
    label: 'Starters',
    blurb: 'The part of the menu that arrives first and gets ordered twice.',
    items: [
      { name: 'Prawn tempura', desc: 'Light batter, straight from hot oil, a bowl of dipping sauce on the side.', price: 425, veg: false, tag: 'Contains shellfish' },
      { name: 'Chicken gyoza', desc: 'Pan-fried dumplings, pleated by hand, with a black vinegar dip.', price: 345, veg: false },
      { name: 'Kimchi, house style', desc: 'Fermented cabbage with chilli and garlic, served cold.', price: 295, veg: true, tag: 'Spicy' },
      { name: 'Corndog jjangmyeon', desc: 'A Korean noodle bowl with a crisp corndog, black bean sauce and pickles.', price: 425, veg: false },
    ],
  },
  {
    id: 'sushi',
    index: '02',
    label: 'Sushi & Rolls',
    blurb: 'Rolled and sliced to order, plated on leaves with pickled ginger and wasabi.',
    items: [
      { name: 'Signature maki roll', desc: 'Rice rolled tight around a crisp fried centre, finished with a bright chilli-orange top.', price: 495, veg: false, tag: 'Spicy' },
      { name: 'Salmon nigiri', desc: 'Slices of salmon over hand-pressed rice, brushed lightly with soy.', price: 465, veg: false, tag: 'Contains fish' },
      { name: 'Sashimi plate', desc: 'A selection of the day’s fish, sliced and served without rice.', price: 795, veg: false, tag: 'Contains fish' },
      { name: 'Crisp prawn tempura roll', desc: 'Tempura prawn, avocado and cucumber, rolled inside-out with sesame.', price: 545, veg: false, tag: 'Contains shellfish' },
    ],
  },
  {
    id: 'mains',
    index: '03',
    label: 'Mains',
    blurb: 'Charcoal, rice and deep bowls — dishes built to be shared across the table.',
    items: [
      { name: 'Katsu curry', desc: 'Panko-crusted cutlet over rice with a soft egg, spring onion and a glossy curry.', price: 545, veg: false },
      { name: 'Kimchi fried rice', desc: 'Rice folded through kimchi and sesame, a fried egg on top, cool lettuce alongside.', price: 425, veg: false, tag: 'Spicy' },
      { name: 'Robata chicken skewers', desc: 'Mirin and soy glaze, grilled over heat until the edges catch.', price: 465, veg: false },
      { name: 'Teriyaki salmon', desc: 'Glazed salmon with sesame and spring onion, steamed rice on the side.', price: 645, veg: false, tag: 'Contains fish' },
      { name: 'Pork bulgogi', desc: 'Thin-sliced pork in a sweet-savoury marinade, grilled and wrapped in lettuce.', price: 595, veg: false, tag: 'Spicy' },
      { name: 'Japanese curry rice', desc: 'A gentler curry built for rice, with vegetables and pickles.', price: 445, veg: true },
    ],
  },
  {
    id: 'ramen',
    index: '04',
    label: 'Ramen & Noodles',
    blurb: 'Bowls that arrive too hot to touch, and are gone before they cool.',
    items: [
      { name: 'Tokyo ramen', desc: 'Clear broth, springy noodles, egg, greens and a sheet of nori.', price: 445, veg: false },
      { name: 'Udon', desc: 'Thick wheat noodles in a light broth with vegetables.', price: 375, veg: true },
      { name: 'Hakka noodles', desc: 'Wok-tossed noodles with vegetables and a slow-building heat.', price: 345, veg: true, tag: 'Spicy' },
      { name: 'Chilli garlic noodles', desc: 'Roasted garlic, dried chilli, scallion and plenty of wok smoke.', price: 345, veg: true, tag: 'Spicy' },
    ],
  },
  {
    id: 'desserts',
    index: '05',
    label: 'Desserts',
    blurb: 'One or two, ordered after the plates are cleared.',
    items: [
      { name: 'Mango sticky rice', desc: 'Coconut-soaked rice, ripe mango, a scatter of sesame.', price: 295, veg: true, tag: 'Seasonal' },
      { name: 'Mochi', desc: 'Soft rice cakes with a sweet filling, served cool.', price: 245, veg: true },
    ],
  },
  {
    id: 'drinks',
    index: '06',
    label: 'Drinks',
    blurb: 'Sake, highballs and long drinks, poured at the back of the room.',
    items: [
      { name: 'Sake, served cold', desc: 'A small carafe and cup, poured at the table.', price: 595, veg: true },
      { name: 'Japanese highball', desc: 'Whisky, ice and soda, built tall.', price: 445, veg: true },
      { name: 'Plum wine', desc: 'Sweet, low and served over ice.', price: 395, veg: true },
    ],
  },
]

/**
 * The mood picker's pool. Every one of the eight answer combinations resolves
 * to at least one dish, so no tap ever dead-ends.
 */
export const moodDishes = [
  { name: 'Udon', desc: 'Thick wheat noodles in a light broth, ready in minutes.', price: 375, veg: true, weight: 'light', temp: 'hot' },
  { name: 'Kimchi, house style', desc: 'Fermented cabbage with chilli and garlic, served cold.', price: 295, veg: true, weight: 'light', temp: 'cold' },
  { name: 'Mochi', desc: 'Soft rice cakes with a sweet filling, served cool.', price: 245, veg: true, weight: 'light', temp: 'cold' },
  { name: 'Prawn tempura', desc: 'Light batter, straight from hot oil, dipping sauce alongside.', price: 425, veg: false, weight: 'light', temp: 'hot' },
  { name: 'Salmon nigiri', desc: 'Slices of salmon over hand-pressed rice, brushed with soy.', price: 465, veg: false, weight: 'light', temp: 'cold' },
  { name: 'Signature maki roll', desc: 'Rice rolled tight around a crisp fried centre, chilli-orange top.', price: 495, veg: false, weight: 'light', temp: 'cold' },
  { name: 'Japanese curry rice', desc: 'A gentler curry built for rice, with vegetables and pickles.', price: 445, veg: true, weight: 'hearty', temp: 'hot' },
  { name: 'Chilli garlic noodles', desc: 'Roasted garlic, dried chilli, scallion and plenty of wok smoke.', price: 345, veg: true, weight: 'hearty', temp: 'hot' },
  { name: 'Mango sticky rice', desc: 'Coconut-soaked rice, ripe mango, a scatter of sesame.', price: 295, veg: true, weight: 'hearty', temp: 'cold' },
  { name: 'Tokyo ramen', desc: 'Clear broth, springy noodles, egg, greens and a sheet of nori.', price: 445, veg: false, weight: 'hearty', temp: 'hot' },
  { name: 'Katsu curry', desc: 'Panko cutlet over rice with a soft egg and a glossy curry.', price: 545, veg: false, weight: 'hearty', temp: 'hot' },
  { name: 'Sashimi plate', desc: 'The day’s fish, sliced and served without rice — built to share.', price: 795, veg: false, weight: 'hearty', temp: 'cold' },
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
      'Starters, sushi and rolls, mains, ramen and noodles, desserts and drinks at Sosoru, Rajpur Road, Dehradun.',
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
    name: 'Signature maki roll',
    note: 'Sushi & rolls',
    description:
      'Rice rolled tight around a crisp fried centre, finished with a bright chilli-orange top.',
    price: 495,
    veg: false,
  },
  {
    name: 'Katsu curry',
    note: 'Mains',
    description: 'Panko-crusted cutlet over rice with a soft egg, spring onion and a glossy curry.',
    price: 545,
    veg: false,
  },
  {
    name: 'Tokyo ramen',
    note: 'Ramen & noodles',
    description: 'Clear broth, springy noodles, egg, greens and a sheet of nori.',
    price: 445,
    veg: false,
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
    { title: 'The long end', body: 'Mochi or mango sticky rice, one more highball, and nobody moving you along.' },
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
