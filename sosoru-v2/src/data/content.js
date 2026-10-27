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

export const address = {
  line1: '81A Rajpur Road',
  line2: 'Dilaram Bazar, near BIBA',
  city: 'Dehradun',
  region: 'Uttarakhand',
  country: 'India',
  note: 'Next to BIBA in Dilaram Bazar. Directions open in Google Maps.',
  lines: ['81A Rajpur Road', 'Dilaram Bazar, near BIBA', 'Dehradun, Uttarakhand'],
}

export const hours = {
  short: 'Daily · 11:00 — 23:00',
  rows: [{ label: 'Monday — Sunday', value: '11:00 — 23:00' }],
  note: 'Kitchen and bar close at 23:00. Holiday hours are confirmed by the restaurant.',
}

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Space', href: '#space' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Find Us', href: '#find-us' },
]

export const images = {
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
]

export const signatures = [
  {
    index: '01',
    name: 'Maki, cut to order',
    note: 'Sushi & rolls',
    description:
      'Rice rolled tight around a crisp fried centre, finished with a bright chilli-orange top. Pickled ginger and wasabi at the edge of the plate.',
  },
  {
    index: '02',
    name: 'Katsu curry',
    note: 'Mains',
    description:
      'A panko-crusted cutlet, sliced over rice and soft egg, with spring onion curling across the top and a glossy curry beneath.',
  },
  {
    index: '03',
    name: 'Kimchi fried rice',
    note: 'Mains',
    description:
      'Kimchi folded through rice with sesame, a fried egg on top and cool lettuce on the side to cut the heat.',
  },
  {
    index: '04',
    name: 'Sake, poured cold',
    note: 'The bar',
    description:
      'A small ceramic carafe and cup, painted with plum blossom, brought to the table with the first plates.',
  },
]

/**
 * Preview menu. `price` is null everywhere on purpose: the restaurant does not
 * publish prices in a form we could verify, and inventing them would mislead.
 * Fill them in when the verified list arrives.
 */
export const menuNote =
  'A preview menu, grouped the way dishes arrive at the table. Prices are confirmed in the restaurant and are not published here.'

export const menuCategories = [
  {
    id: 'starters',
    index: '01',
    label: 'Starters',
    blurb: 'The part of the menu that arrives first and gets ordered twice.',
    items: [
      { name: 'Prawn tempura', desc: 'Light batter, straight from hot oil, a bowl of dipping sauce on the side.', price: null, veg: false, tag: 'Contains shellfish' },
      { name: 'Chicken gyoza', desc: 'Pan-fried dumplings, pleated by hand, with a black vinegar dip.', price: null, veg: false },
      { name: 'Kimchi, house style', desc: 'Fermented cabbage with chilli and garlic, served cold.', price: null, veg: true, tag: 'Spicy' },
      { name: 'Corndog jjangmyeon', desc: 'A Korean noodle bowl with a crisp corndog, black bean sauce and pickles.', price: null, veg: false },
    ],
  },
  {
    id: 'sushi',
    index: '02',
    label: 'Sushi & Rolls',
    blurb: 'Rolled and sliced to order, plated on leaves with pickled ginger and wasabi.',
    items: [
      { name: 'Signature maki roll', desc: 'Rice rolled tight around a crisp fried centre, finished with a bright chilli-orange top.', price: null, veg: false, tag: 'Spicy' },
      { name: 'Salmon nigiri', desc: 'Slices of salmon over hand-pressed rice, brushed lightly with soy.', price: null, veg: false, tag: 'Contains fish' },
      { name: 'Sashimi plate', desc: 'A selection of the day’s fish, sliced and served without rice.', price: null, veg: false, tag: 'Contains fish' },
      { name: 'Crisp prawn tempura roll', desc: 'Tempura prawn, avocado and cucumber, rolled inside-out with sesame.', price: null, veg: false, tag: 'Contains shellfish' },
    ],
  },
  {
    id: 'mains',
    index: '03',
    label: 'Mains',
    blurb: 'Charcoal, rice and deep bowls — dishes built to be shared across the table.',
    items: [
      { name: 'Katsu curry', desc: 'Panko-crusted cutlet over rice with a soft egg, spring onion and a glossy curry.', price: null, veg: false },
      { name: 'Kimchi fried rice', desc: 'Rice folded through kimchi and sesame, a fried egg on top, cool lettuce alongside.', price: null, veg: false, tag: 'Spicy' },
      { name: 'Robata chicken skewers', desc: 'Mirin and soy glaze, grilled over heat until the edges catch.', price: null, veg: false },
      { name: 'Teriyaki salmon', desc: 'Glazed salmon with sesame and spring onion, steamed rice on the side.', price: null, veg: false, tag: 'Contains fish' },
      { name: 'Pork bulgogi', desc: 'Thin-sliced pork in a sweet-savoury marinade, grilled and wrapped in lettuce.', price: null, veg: false, tag: 'Spicy' },
      { name: 'Japanese curry rice', desc: 'A gentler curry built for rice, with vegetables and pickles.', price: null, veg: true },
    ],
  },
  {
    id: 'ramen',
    index: '04',
    label: 'Ramen & Noodles',
    blurb: 'Bowls that arrive too hot to touch, and are gone before they cool.',
    items: [
      { name: 'Tokyo ramen', desc: 'Clear broth, springy noodles, egg, greens and a sheet of nori.', price: null, veg: false },
      { name: 'Udon', desc: 'Thick wheat noodles in a light broth with vegetables.', price: null, veg: true },
      { name: 'Hakka noodles', desc: 'Wok-tossed noodles with vegetables and a slow-building heat.', price: null, veg: true, tag: 'Spicy' },
      { name: 'Chilli garlic noodles', desc: 'Roasted garlic, dried chilli, scallion and plenty of wok smoke.', price: null, veg: true, tag: 'Spicy' },
    ],
  },
  {
    id: 'desserts',
    index: '05',
    label: 'Desserts',
    blurb: 'One or two, ordered after the plates are cleared.',
    items: [
      { name: 'Mango sticky rice', desc: 'Coconut-soaked rice, ripe mango, a scatter of sesame.', price: null, veg: true, tag: 'Seasonal' },
      { name: 'Mochi', desc: 'Soft rice cakes with a sweet filling, served cool.', price: null, veg: true },
    ],
  },
  {
    id: 'drinks',
    index: '06',
    label: 'Drinks',
    blurb: 'Sake, highballs and long drinks, poured at the back of the room.',
    items: [
      { name: 'Sake, served cold', desc: 'A small carafe and cup, poured at the table.', price: null, veg: true },
      { name: 'Japanese highball', desc: 'Whisky, ice and soda, built tall.', price: null, veg: true },
      { name: 'Plum wine', desc: 'Sweet, low and served over ice.', price: null, veg: true },
    ],
  },
]

export const reservations = {
  eyebrow: '06 — Reservations',
  en: 'Book a table',
  jp: '予約',
  lead: 'Tables for two through to the long table at the back. Call for same-day bookings and groups of six or more.',
  slots: ['Lunch · 12:00 — 15:00', 'Evening · 18:00 — 23:00'],
}
