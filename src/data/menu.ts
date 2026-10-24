/**
 * PREVIEW MENU — provenance is tracked per dish.
 *
 * `photographed: true`  → the dish is visible in the photographs supplied with
 *                         this brief. The description only records what the
 *                         photograph shows; the name is still unconfirmed.
 * `photographed: false` → a preview entry. Name, description and availability
 *                         must be replaced with the restaurant's verified menu
 *                         data before launch.
 *
 * No prices are shown anywhere on the site. Prices are not published by the
 * restaurant in a form we could verify, and inventing them would be misleading.
 */
export type DishTag = 'vegetarian' | 'spicy' | 'contains fish' | 'contains shellfish'

export type Dish = {
  name: string
  description: string
  detail: string
  tags?: DishTag[]
  photographed: boolean
}

export type MenuCategory = {
  id: string
  label: string
  index: string
  blurb: string
  items: Dish[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'sushi',
    label: 'Sushi & Sashimi',
    index: '01',
    blurb: 'Rolled and sliced to order, plated on leaves with pickled ginger and wasabi.',
    items: [
      {
        name: 'Signature maki roll',
        description: 'Rice rolled tight around a crisp fried centre, finished with a bright chilli-orange top.',
        detail:
          'Cut into eight and plated on a banana leaf with pickled ginger and a curl of wasabi. The roll photographed in the dining room.',
        tags: ['spicy', 'contains shellfish'],
        photographed: true,
      },
      {
        name: 'Salmon nigiri',
        description: 'Slices of salmon over hand-pressed rice, brushed lightly with soy.',
        detail: 'Ordered by the pair. Ask the kitchen about the day’s fish before ordering.',
        tags: ['contains fish'],
        photographed: false,
      },
      {
        name: 'Sashimi plate',
        description: 'A selection of the day’s fish, sliced and served without rice.',
        detail: 'Availability changes with the market. Confirm the selection and price at the table.',
        tags: ['contains fish'],
        photographed: false,
      },
      {
        name: 'Crisp prawn tempura roll',
        description: 'Tempura prawn, avocado and cucumber, rolled inside-out with sesame.',
        detail: 'A softer, rounder roll for the table to share.',
        tags: ['contains shellfish'],
        photographed: false,
      },
    ],
  },
  {
    id: 'small-plates',
    label: 'Small Plates',
    index: '02',
    blurb: 'The part of the menu that arrives first and gets ordered twice.',
    items: [
      {
        name: 'Prawn tempura',
        description: 'Light batter, hot oil, a bowl of dipping sauce on the side.',
        detail: 'Best eaten as it lands. Tell the kitchen if you would like it to arrive with the first drinks.',
        tags: ['contains shellfish'],
        photographed: false,
      },
      {
        name: 'Chicken gyoza',
        description: 'Pan-fried dumplings, pleated by hand, with a black vinegar dip.',
        detail: 'Served six to a plate. A vegetarian filling can be requested when ordering.',
        photographed: false,
      },
      {
        name: 'Kimchi, house style',
        description: 'Fermented cabbage, chilli and garlic, served cold.',
        detail: 'A small plate to open the meal, or to sit alongside rice and grilled dishes.',
        tags: ['vegetarian', 'spicy'],
        photographed: false,
      },
      {
        name: 'Corndog jjangmyeon',
        description: 'A Korean noodle bowl with a crisp corndog, black bean sauce and pickles.',
        detail: 'A Dehradun favourite from the Sosoru kitchen — confirm the current preparation with your server.',
        photographed: false,
      },
    ],
  },
  {
    id: 'robata',
    label: 'Robata & Grill',
    index: '03',
    blurb: 'Charcoal, salt and a little smoke — dishes built to be shared across the table.',
    items: [
      {
        name: 'Robata chicken skewers',
        description: 'Mirin and soy glaze, grilled over heat until the edges catch.',
        detail: 'Two skewers per order. Ask for the chilli dust if you would like more heat.',
        photographed: false,
      },
      {
        name: 'Teriyaki salmon',
        description: 'Glazed salmon, sesame, spring onion.',
        detail: 'Served with steamed rice on the side.',
        tags: ['contains fish'],
        photographed: false,
      },
      {
        name: 'Pork bulgogi',
        description: 'Thin-sliced pork in a sweet-savoury marinade, grilled and piled high.',
        detail: 'Wrapped in lettuce with ssamjang at the table.',
        tags: ['spicy'],
        photographed: false,
      },
      {
        name: 'Grilled greens',
        description: 'Seasonal vegetables, charred and dressed with sesame.',
        detail: 'Vegetable selection changes with the market.',
        tags: ['vegetarian'],
        photographed: false,
      },
    ],
  },
  {
    id: 'noodles',
    label: 'Noodles & Ramen',
    index: '04',
    blurb: 'Bowls that arrive too hot to touch, and are gone before they cool.',
    items: [
      {
        name: 'Tokyo ramen',
        description: 'Clear broth, springy noodles, egg, greens and a sheet of nori.',
        detail: 'Ask for the chilli oil on the side if you want to control the heat.',
        photographed: false,
      },
      {
        name: 'Udon',
        description: 'Thick wheat noodles in a light broth with vegetables.',
        detail: 'A quieter bowl, and one of the kitchen’s vegetarian options.',
        tags: ['vegetarian'],
        photographed: false,
      },
      {
        name: 'Hakka noodles',
        description: 'Wok-tossed noodles with vegetables and a slow-building heat.',
        detail: 'Available with chicken or vegetables. Confirm with your server.',
        tags: ['vegetarian', 'spicy'],
        photographed: false,
      },
      {
        name: 'Chilli garlic noodles',
        description: 'Roasted garlic, dried chilli, scallion, plenty of wok smoke.',
        detail: 'The spiciest of the noodle bowls. Request it mild if you prefer.',
        tags: ['vegetarian', 'spicy'],
        photographed: false,
      },
    ],
  },
  {
    id: 'rice-curries',
    label: 'Rice & Curries',
    index: '05',
    blurb: 'The deep bowls — rice, sauce and something crisp on top.',
    items: [
      {
        name: 'Katsu curry',
        description: 'Panko-crusted cutlet, sliced over rice, with a soft egg and spring onion.',
        detail:
          'Served in a wide bowl with a glossy Japanese curry sauce. The plate photographed in the dining room.',
        photographed: true,
      },
      {
        name: 'Kimchi fried rice',
        description: 'Rice folded through kimchi and sesame, a fried egg on top, cool lettuce alongside.',
        detail: 'Both a starter and a full meal, depending on the evening.',
        tags: ['spicy'],
        photographed: true,
      },
      {
        name: 'Japanese curry rice',
        description: 'A gentler curry, built for rice, with vegetables and pickles.',
        detail: 'Ask about the vegetable selection before ordering.',
        tags: ['vegetarian'],
        photographed: false,
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    index: '06',
    blurb: 'One or two, ordered after the plates are cleared.',
    items: [
      {
        name: 'Mango sticky rice',
        description: 'Coconut-soaked rice, ripe mango, a scatter of sesame.',
        detail: 'Seasonal — ask whether mango is available on the day.',
        tags: ['vegetarian'],
        photographed: false,
      },
      {
        name: 'Mochi',
        description: 'Soft rice cakes with a sweet filling, served cool.',
        detail: 'Flavours change. Ask your server for the day’s selection.',
        tags: ['vegetarian'],
        photographed: false,
      },
    ],
  },
  {
    id: 'bar',
    label: 'The Bar',
    index: '07',
    blurb: 'Sake, highballs and long drinks, poured at the back of the room.',
    items: [
      {
        name: 'Sake, served cold',
        description: 'A small carafe and cup, poured at the table.',
        detail:
          'The ceramic set photographed at Sosoru. Ask for the bottle list — labels and availability change.',
        photographed: true,
      },
      {
        name: 'Japanese highball',
        description: 'Whisky, ice and soda, built tall.',
        detail: 'Poured with plenty of ice. Ask the bar for the whisky they are using.',
        photographed: false,
      },
      {
        name: 'Plum wine',
        description: 'Sweet, low and served over ice.',
        detail: 'A good finish to a long dinner.',
        photographed: false,
      },
    ],
  },
]
