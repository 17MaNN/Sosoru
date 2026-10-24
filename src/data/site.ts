/**
 * Restaurant details verified against public listings (Instagram bio,
 * Zomato, Tripadvisor) in October 2026. Re-confirm before launch.
 *
 * Deliberately omitted because they could not be verified:
 *  - email address
 *  - exact coordinates
 *  - parking / accessibility details
 *  - individual seasonal opening hours
 */
export const site = {
  name: 'Sosoru',
  fullName: 'Sosoru — The Pan Asian Restaurant & Bar',
  tagline: 'Pan-Asian restaurant & bar',
  locality: 'Rajpur Road, Dehradun',
  phone: {
    display: '+91 91053 83737',
    href: 'tel:+919105383737',
    whatsapp: '919105383737',
  },
  address: {
    line1: '81A Rajpur Road',
    line2: 'Dilaram Bazar, near BIBA',
    city: 'Dehradun',
    region: 'Uttarakhand',
    country: 'India',
    countryCode: 'IN',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Sosoru%2C%20Rajpur%20Road%2C%20Dehradun',
  hours: [{ label: 'Monday — Sunday', value: '11:00 — 23:00' }],
  hoursShort: 'Daily · 11:00 — 23:00',
  socials: [
    {
      label: 'Instagram',
      handle: '@sosoru.in',
      href: 'https://www.instagram.com/sosoru.in/',
    },
  ],
  lastChecked: 'October 2026',
} as const

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Space', href: '#space' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Find Us', href: '#find-us' },
] as const

export const addressLines = [
  site.address.line1,
  site.address.line2,
  `${site.address.city}, ${site.address.region}`,
]

export const addressLine = [
  site.address.line1,
  site.address.line2,
  `${site.address.city}, ${site.address.region} ${site.address.country}`,
].join(', ')
