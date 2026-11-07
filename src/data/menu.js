/**
 * The printed card, section for section.
 *
 * Prices are the restaurant's own, in rupees, and are kept as display strings
 * because several dishes are priced by protein or by serve size
 * ("499 / 599 / 699"). `veg` drives the diet mark and the dietary filter.
 * `note` on a group carries the line that would run under a heading on paper.
 */

export const menuNote =
  'The card as the kitchen prints it. Prices are in rupees; dishes with several prices are priced by protein or by serve.'

export const menuCategories = [
  {
    id: 'appetisers',
    index: '01',
    label: 'Appetisers',
    title: 'Appetisers',
    jp: '前菜',
    blurb: 'Skewers, tempura and fried things — the plates that arrive first and get ordered twice.',
    groups: [
      {
        title: 'Vegetarian',
        items: [
          { name: 'Jeon / Korean pancake', price: '309', desc: 'Potato or kimchi, in egg batter', veg: true },
          { name: 'Honey Chilli Potato', price: '329', desc: 'Crispy potatoes in sweet and spicy Indo-Chinese honey chilli sauce', veg: true },
          { name: 'Classic Chilli Mushroom Dry', price: '329', desc: 'Crispy fried mushrooms wok-tossed in spicy chilli sauce', veg: true },
          { name: 'Chilly Paneer Dry', price: '339', desc: 'Fried paneer cubes in spicy, tangy sauce', veg: true },
          { name: 'Crispy Wonton – Veg', price: '339', desc: 'Crispy wontons stuffed with seasoned veggies, sweet chilli sauce', veg: true },
          { name: 'Vegetable Tempura', price: '349', desc: 'Assorted seasonal vegetables, served with ganjang sauce', veg: true },
          { name: 'Vegetable Kushiyaki', price: '349', desc: 'Skewered seasonal vegetables, salted or sweet sauce', veg: true },
          { name: 'Stir Fried Bok Choy', price: '359', desc: 'Bok choy stir fried with garlic', veg: true },
          { name: 'Chilli Garlic Tofu', price: '379', desc: 'Fried vegan tofu in bold chilli garlic sauce', veg: true },
          { name: 'Hoisin Tofu', price: '379', desc: 'Fried vegan tofu cubes in hoisin sauce', veg: true },
          { name: 'Stir Fried Exotic Veggies', price: '389', desc: 'Seasonal exotic veggies stir fried with garlic', veg: true },
          { name: 'Cheesy Corn Dog', price: '399', desc: 'Korean corn dog stuffed with mozzarella', veg: true },
          { name: 'Harumaki', price: '399', desc: 'Crunchy fried Japanese veg spring roll, edamame salsa', veg: true },
          { name: 'Edamame', price: '419', desc: 'Soy beans in a pod, salted or spicy', veg: true },
          { name: 'Enoki Kakiage', price: '429', desc: 'Crispy enoki mushroom tempura fritters, ganjang sauce', veg: true },
          { name: 'Crispy Honey Chilli Lotus Stem', price: '429', desc: 'Crispy lotus stem in honey chilli sauce', veg: true },
        ],
      },
      {
        title: 'Non-vegetarian',
        items: [
          { name: 'Classic Chilli Chicken', price: '399', desc: 'Fried chicken in spicy, tangy chilli sauce', veg: false },
          { name: 'Classic Chilly Garlic Chicken Wings', price: '399', desc: 'Crispy wings in chilli garlic sauce', veg: false },
          { name: 'Stir Fried Chicken with Bok Choy', price: '399', desc: 'Chicken and bok choy stir fried with garlic', veg: false },
          { name: 'Crispy Wonton – Chicken', price: '399', desc: 'Wontons stuffed with minced chicken, sweet chilli sauce', veg: false },
          { name: 'Dak Nalgae', price: '399', desc: 'Chicken wings fried in Korean hot pepper sauce', veg: false },
          { name: 'Thai Basil Chicken', price: '399', desc: 'Stir-fried minced chicken with garlic, Thai chilli and basil', veg: false },
          { name: 'Tori – Negima', price: '399', desc: 'Japanese chicken and leek skewers, salted or sweet sauce', veg: false },
          { name: 'Tebasaki', price: '399', desc: 'Japanese-style smoky chicken wing skewer, salted or sweet sauce', veg: false },
          { name: 'Chongqing Chicken', price: '419', desc: 'Sichuan-style crispy chicken with dry red chillies', veg: false },
          { name: 'Tai Chi Chicken', price: '419', desc: 'Chinese-style chicken, sweet and spicy', veg: false },
          { name: 'Sosoru Style Chicken Karaage', price: '489', desc: 'Japanese-style crispy fried chicken', veg: false, tag: 'House signature' },
          { name: 'Korean Corn Dog', price: '499', desc: 'Corn dog stuffed with mozzarella and chicken sausage', veg: false },
          { name: 'Buta-bara-Yaki', price: '549', desc: 'Grilled pork belly skewers, salt or sweet tare', veg: false },
          { name: 'Jeyuk Bokkeum', price: '649', desc: 'Thinly sliced pork marinated, stir fried in Korean sauce', veg: false },
          { name: 'Shanghai Style Pork Belly', price: '699', desc: 'Sweet, spicy and savoury', veg: false },
          { name: 'Black Pepper Pork Ribs', price: '959', desc: 'Fried ribs in Chinese black pepper sauce', veg: false },
          { name: 'Teriyaki Buta Ribs', price: '959', desc: 'Fried ribs glazed in teriyaki', veg: false },
          { name: 'Thai Herb Pork Ribs', price: '959', desc: 'Marinated Thai herb ribs fried in Thai chilli sauce', veg: false },
        ],
      },
      {
        title: 'Seafood',
        items: [
          { name: 'Crispy Fried Calamari', price: '599', desc: 'Squid rings in tempura batter', veg: false },
          { name: 'Thai Spiced Calamari', price: '659', desc: 'Fried in curry leaf, basil, peanut and chilli sauce', veg: false },
          { name: 'Yangshuo Fish', price: '659', desc: 'Fried fish in chilli sauce, southern Chinese style', veg: false },
          { name: 'Chilli Garlic Prawns', price: '689', desc: 'Fried prawns in chilli garlic sauce', veg: false },
          { name: 'Butter Garlic Prawns', price: '699', desc: 'Fried prawns in butter garlic sauce', veg: false },
          { name: 'Ebi Tempura', price: '699', desc: 'Tempura prawns with soy sauce', veg: false },
          { name: 'Sosoru Special Spicy Shrimp Tempura', price: '699', desc: 'Shrimp tempura drizzled with spicy mayo', veg: false, tag: 'House signature' },
          { name: 'Crispy Fried Lobster', price: '2789', desc: 'Fried lobster in spicy crispy chilli sauce', veg: false },
          { name: 'Butter Garlic Lobster', price: '2899', desc: 'Fried lobster pieces in butter garlic sauce', veg: false },
        ],
      },
    ],
  },

  {
    id: 'soups',
    index: '02',
    label: 'Soups & Salads',
    title: 'Soups & Salads',
    jp: '汁物',
    blurb: 'Clear broths and cold, sharp salads — the light opening before the charcoal.',
    groups: [
      {
        title: 'Soups',
        note: '₹259 each · add chicken +₹59 or seafood +₹109',
        items: [
          { name: 'Kimchi Jjigae', price: '259', desc: 'Spicy, tangy Korean stew with kimchi and tofu', veg: true },
          { name: 'Miso Soup', price: '259', desc: 'Miso, tofu, seaweed, green onion', veg: true },
          { name: 'Hot & Sour Soup', price: '259', desc: 'Vegan tofu, shiitake, Chinese cabbage, carrot, coriander root', veg: true },
          { name: 'Manchow Soup', price: '259', desc: 'Silken tofu, button mushroom, cabbage, carrot, with crispy fried noodles', veg: true },
          { name: 'Talumein Soup', price: '259', desc: 'Indo-Chinese noodle soup with silken tofu, broccoli, cabbage, bok choy', veg: true },
          { name: 'Tom Yum', price: '259', desc: 'Thai hot and sour soup with herbs, cabbage, broccoli, bok choy', veg: true },
        ],
      },
      {
        title: 'Salads',
        items: [
          { name: 'Oi Muchim', price: '299', desc: 'Spicy Korean cucumber salad', veg: true },
          { name: 'Spinach Gomae', price: '329', desc: 'Japanese spinach salad, sesame dressing', veg: true },
          { name: 'Som Tam Salad', price: '379', desc: 'Thai raw papaya salad, lemon and jaggery dressing', veg: true },
          { name: 'Avocado Edamame Lettuce Salad', price: '399', desc: 'Avocado, edamame, lettuce, mayo dressing, cherry tomato', veg: true },
          { name: 'Kani Salad', price: '489', desc: 'Shredded crab sticks, carrot, onion, spinach, lettuce, spicy mayo', veg: false },
        ],
      },
    ],
  },

  {
    id: 'dimsum',
    index: '03',
    label: 'Dim Sum',
    title: 'Dim Sum & Dumplings',
    jp: '点心',
    blurb: 'Steamed, pan-fried and pleated by hand — order a few and pass them down the table.',
    groups: [
      {
        title: 'Dim sum',
        items: [
          { name: 'Truffle Mushroom', price: '349', desc: 'Bok choy, button mushroom, cream cheese, truffle oil, crystal dumpling', veg: true },
          { name: 'Szechwan Mushroom', price: '349', desc: 'Bok choy, shiitake, button mushroom, Szechwan sauce', veg: true },
          { name: 'Spinach and Corn', price: '349', desc: 'Spinach, sweet corn, cream cheese', veg: true },
          { name: 'Asparagus and Edamame', price: '349', desc: 'Asparagus, corn, edamame', veg: true },
          { name: 'Szechwan Chicken', price: '399', desc: 'Chicken in spicy Szechwan sauce', veg: false },
          { name: 'Chicken Coriander', price: '399', desc: 'Chicken and fresh coriander', veg: false },
          { name: 'Chicken Gyoza', price: '399', desc: 'Pan-fried, crispy outside and tender inside', veg: false },
        ],
      },
      {
        title: 'Create your own platter',
        note: 'Mix and match crystal, open-faced or Himalayan dimsum · 12 pieces',
        items: [
          { name: 'Veg Dimsum Platter', price: '1099', desc: 'Twelve pieces, chosen from the vegetarian dumplings', veg: true },
          { name: 'Non-Veg Dimsum Platter', price: '1299', desc: 'Twelve pieces, chosen from the chicken dumplings', veg: false },
        ],
      },
      {
        title: 'Momo',
        note: 'Steamed / kothey / chilly',
        items: [
          { name: 'Veg Momo', price: '239 / 249 / 259', desc: 'Steamed, kothey or chilly', veg: true },
          { name: 'Chicken Momo', price: '269 / 279 / 289', desc: 'Steamed, kothey or chilly', veg: false },
          { name: 'Chicken Cheese Momo', price: '289 / 299 / 309', desc: 'Steamed, kothey or chilly', veg: false },
        ],
      },
      {
        title: 'Shabhaley',
        items: [
          { name: 'Veg Shabaley', price: '299', desc: 'Tibetan fried bread stuffed with vegetables', veg: true },
          { name: 'Chicken Shabaley', price: '319', desc: 'Tibetan fried bread stuffed with chicken', veg: false },
        ],
      },
    ],
  },

  {
    id: 'bao',
    index: '04',
    label: 'Bao',
    title: 'Bao',
    jp: '包',
    blurb: 'Steamed buns, folded and filled — four closed, three open, and a plain one for the table.',
    groups: [
      {
        title: 'Closed bao',
        note: 'Four pieces',
        items: [
          { name: 'Pan Fried Mushroom Bao', price: '399', desc: 'Button and shiitake mushroom', veg: true },
          { name: 'Spinach & Corn Cheese Bao', price: '399', desc: 'Spinach, corn, cream cheese', veg: true },
          { name: 'Char Siu Chicken Bao', price: '459', desc: 'Steamed bao with chicken, savoury-sweet sauce', veg: false },
          { name: 'Pork Bao', price: '499', desc: 'Steamed bao with spiced pork', veg: false },
        ],
      },
      {
        title: 'Open bao',
        note: 'Three pieces',
        items: [
          { name: 'Vegan Tofu Bao', price: '399', desc: 'Crispy silken tofu, lettuce, spicy mayo', veg: true },
          { name: 'Crispy Chicken Bao', price: '459', desc: 'Crispy chicken, lettuce, spicy mayo', veg: false },
          { name: 'Korean Spicy Chicken Bao', price: '499', desc: 'Gochujang-glazed fried chicken, cucumber', veg: false },
          { name: 'Pork Belly Bao', price: '499', desc: 'Pork belly, lettuce, spicy mayo', veg: false },
        ],
      },
      {
        title: 'On the side',
        items: [
          { name: 'Tingmo', price: '149', desc: 'Tibetan steamed bun', veg: true },
        ],
      },
    ],
  },

  {
    id: 'sushi',
    index: '05',
    label: 'Sushi',
    title: 'Sushi & Gimbap',
    jp: '寿司',
    blurb: 'Sashimi, nigiri and rolls cut to order, with soy, wasabi and pickled ginger.',
    groups: [
      {
        title: 'Sashimi',
        note: 'Three pieces · served without rice',
        items: [
          { name: 'Maguro (Tuna) Sashimi', price: '799', desc: 'Tuna, sliced and served on its own', veg: false },
          { name: 'Sake (Salmon) Sashimi', price: '859', desc: 'Salmon, sliced and served on its own', veg: false },
          { name: 'Hamachi (Yellow Tail) Sashimi', price: '899', desc: 'Yellow tail, sliced and served on its own', veg: false },
        ],
      },
      {
        title: 'Nigiri',
        note: 'Three pieces',
        items: [
          { name: 'Avocado Nigiri', price: '399', desc: 'Avocado over hand-pressed rice', veg: true },
          { name: 'Crab Stick Nigiri', price: '399', desc: 'Crab stick over hand-pressed rice', veg: false },
          { name: 'Maguro (Tuna) Nigiri', price: '759', desc: 'Tuna over hand-pressed rice', veg: false },
          { name: 'Sake (Salmon) Nigiri', price: '799', desc: 'Salmon over hand-pressed rice', veg: false },
          { name: 'Hamachi (Yellow Tail) Nigiri', price: '859', desc: 'Yellow tail over hand-pressed rice', veg: false },
          { name: 'Unagi Eel Nigiri', price: '959', desc: 'Grilled eel over hand-pressed rice', veg: false },
        ],
      },
      {
        title: 'Maki',
        note: 'Eight pieces',
        items: [
          { name: 'Kappamaki', price: '649', desc: 'Cucumber', veg: true },
          { name: 'Tekka Maki', price: '849', desc: 'Tuna', veg: false },
          { name: 'Sake Maki', price: '849', desc: 'Salmon', veg: false },
        ],
      },
      {
        title: 'Uramaki',
        note: 'Eight pieces, rolled inside out',
        items: [
          { name: 'Spicy Avocado Roll', price: '699', desc: 'Avocado, togarashi, sesame, spicy mayo', veg: true },
          { name: 'Spicy Shiitake Roll', price: '699', desc: 'Shiitake, cream cheese, togarashi, spicy mayo', veg: true },
          { name: 'Vegetable California Roll', price: '699', desc: 'Cream cheese, avocado, cucumber, mayo', veg: true },
          { name: 'Rainbow Roll', price: '799', desc: 'Cucumber, avocado, crab stick, topped with three raw fish', veg: false },
          { name: 'Spicy Tuna Roll', price: '799', desc: 'Tuna, cucumber, togarashi, sesame', veg: false },
          { name: 'Yellow Tail Hamachi Roll', price: '799', desc: 'Hamachi, cream cheese, mango relish, sesame, black tobiko', veg: false },
          { name: 'Alaska Roll', price: '799', desc: 'Salmon, cream cheese, cucumber, orange tobiko', veg: false },
          { name: 'Boston Roll', price: '799', desc: 'Tuna, shrimp, cucumber, topped with spicy crab stick', veg: false },
          { name: 'Caterpillar Roll', price: '799', desc: 'Kabayaki unagi, cucumber, topped with avocado', veg: false },
          { name: 'Non-Veg California Roll', price: '799', desc: 'Crab stick, avocado, cucumber, orange tobiko', veg: false },
          { name: 'Spicy Salmon Roll', price: '899', desc: 'Salmon in spicy chilli sauce', veg: false },
        ],
      },
      {
        title: 'Tempura rolls',
        note: 'Eight pieces',
        items: [
          { name: 'Asparagus Tempura Roll', price: '699', desc: 'Spicy mayo, tanuki flakes', veg: true },
          { name: 'Prawn Tempura Roll', price: '799', desc: 'Spicy mayo, tanuki flakes', veg: false },
          { name: 'Vegetables Dragon Roll', price: '699', desc: 'Crispy bell peppers, avocado teriyaki, spicy mayo, tanuki', veg: true },
          { name: 'Prawn Dragon Roll', price: '799', desc: 'Crispy prawns, avocado teriyaki, spicy mayo, tanuki', veg: false },
        ],
      },
      {
        title: 'Gimbap',
        items: [
          { name: 'Yachae Gimbap', price: '549', desc: 'Cream cheese, carrot, cucumber, spinach, pickled radish', veg: true },
          { name: 'Dak Gimbap', price: '599', desc: 'Chicken, rice and vegetables rolled in nori', veg: false },
          { name: 'Dwaeji Gimbap', price: '649', desc: 'Pork, rice and vegetables rolled in nori', veg: false },
        ],
      },
      {
        title: 'Platters',
        items: [
          { name: 'Veg Sushi Platter', price: '1899', desc: 'Twenty pieces of veg maki and uramaki', veg: true },
          { name: 'Non-Veg Sushi Platter', price: '2999', desc: 'Twenty pieces of non-veg maki and uramaki', veg: false },
          { name: 'Nigiri Platter (6 pcs)', price: '1299', desc: 'One each of avocado, crab stick, tuna, salmon, hamachi and unagi', veg: false },
          { name: 'Nigiri Platter (12 pcs)', price: '2499', desc: 'Two each of the same six', veg: false },
        ],
      },
    ],
  },

  {
    id: 'ramen',
    index: '06',
    label: 'Ramen',
    title: 'Ramen & Ramyeon',
    jp: '拉麺',
    blurb: 'Bowls built to arrive too hot to touch, and gone before they cool.',
    groups: [
      {
        title: 'Ramen',
        items: [
          { name: 'Tokyo Ramen', price: '699', desc: 'Miso broth, fried vegan tofu cutlet, bok choy, shiitake, corn, leeks', veg: true },
          { name: 'Kyushu Chicken Ramen', price: '749', desc: 'Miso chicken broth, katsu chicken, soft boiled egg, bok choy, leeks, nori', veg: false },
          { name: 'Tonkotsu Ramen', price: '799', desc: 'Pork bone broth, pork chashu, soft boiled egg, leeks, nori', veg: false },
        ],
      },
      {
        title: 'Soba & udon',
        note: 'Veg / chicken / prawn',
        items: [
          { name: 'Tempura Soba', price: '499 / 599 / 699', desc: 'Buckwheat noodles in broth, tempura veggies or protein, soft boiled egg', veg: false },
          { name: 'Nabeyaki Udon', price: '499 / 599 / 699', desc: 'Wheat noodles in rich broth, soft boiled egg, tempura or protein', veg: false },
        ],
      },
      {
        title: 'Ramyeon',
        note: 'Veg / chicken / pork',
        items: [
          { name: 'Korean Spicy Ramyeon', price: '349 / 459 / 549', desc: 'Hot dry noodles, boiled egg', veg: false },
          { name: 'Shin Ramyeon', price: '349 / 459 / 549', desc: 'Noodle soup, sunny side up egg', veg: false },
          { name: 'Jjajangmyeon', price: '349 / 399 / 499', desc: 'Thick noodles in black bean sauce', veg: false },
        ],
      },
    ],
  },

  {
    id: 'rice',
    index: '07',
    label: 'Rice & Noodles',
    title: 'Rice & Noodles',
    jp: '飯麺',
    blurb: 'The wok and the rice cooker: noodles, fried rice and a bowl of plain short grain.',
    groups: [
      {
        title: 'Noodles',
        items: [
          { name: 'Hakka Noodles', price: '309', desc: 'Wok-tossed noodles with vegetables', veg: true },
          { name: 'Chilly Garlic Stir Fried Noodles', price: '309', desc: 'Roasted garlic, dried chilli, scallion', veg: true },
          { name: 'Schezwan Stir Fried Noodles', price: '309', desc: 'Schezwan pepper and chilli', veg: true },
          { name: 'Pad Thai Noodles', price: '409', desc: 'Thai rice noodles, tamarind sauce, green onion, peanuts, lemon', veg: true },
          { name: 'Yaki Soba', price: '499', desc: 'Buckwheat noodles with veggies', veg: true },
          { name: 'Yaki Udon', price: '499', desc: 'Stir-fried wheat noodles in savoury sauce', veg: true },
          { name: 'Japchae', price: '349 / 399 / 499', desc: 'Sweet potato glass noodles, stir fried', veg: true },
        ],
      },
      {
        title: 'Rice',
        note: 'Add chicken +₹99 or seafood +₹109',
        items: [
          { name: 'Steamed Rice', price: '299', desc: 'Short grain or jasmine', veg: true },
          { name: 'Burnt Garlic Rice', price: '349', desc: 'Rice tossed with toasted garlic', veg: true },
          { name: 'Chilly Garlic Fried Rice', price: '349', desc: 'Wok-fried rice with chilli and garlic', veg: true },
          { name: 'Crispy Chilli Rice', price: '349', desc: 'Fried rice finished with crisp chilli', veg: true },
          { name: 'Kra Pao Rice', price: '369', desc: 'Stir fried rice with Thai herbs', veg: true },
        ],
      },
    ],
  },

  {
    id: 'mains',
    index: '08',
    label: 'Mains',
    title: 'Main Course',
    jp: '主菜',
    blurb: 'Curries in Szechuan, coconut and Thai pastes, built to be shared across the table.',
    groups: [
      {
        title: 'Veg curry',
        note: 'Gravy',
        items: [
          { name: 'Exotic Veggies Curry', price: '459', desc: 'Baby corn, zucchini, mushroom, broccoli, cabbage, bok choy in spicy Szechuan gravy', veg: true },
          { name: 'Mapo Tofu', price: '489', desc: 'Soft vegan tofu and soy chunks in Szechuan chilli paste gravy', veg: true },
          { name: 'Massaman Curry', price: '459', desc: 'Mild, coconut cream, Thai herbs', veg: true },
          { name: 'Panang Curry', price: '459', desc: 'Creamy, mildly spicy, with three fried vegan tofu balls', veg: true },
          { name: 'Red Curry', price: '459', desc: 'Spicy Thai curry, coconut cream', veg: true },
          { name: 'Green Curry', price: '459', desc: 'Green curry paste, coconut cream, Thai herbs', veg: true },
        ],
      },
      {
        title: 'Non-veg curry',
        note: 'Gravy · choose chicken +₹99 or seafood +₹109 for a Thai curry',
        items: [
          { name: 'Classic Chilly Chicken Gravy', price: '499', desc: 'Crispy chicken in spicy Indo-Chinese gravy', veg: false },
          { name: 'Shredded Chicken', price: '519', desc: 'Szechuan or black bean gravy', veg: false },
          { name: 'Fried Slice Lamb', price: '599', desc: 'With shiitake, onion, bamboo shoot in XO sauce gravy', veg: false },
          { name: 'Chilly Garlic Prawn', price: '619', desc: 'Fried prawn in chilli garlic gravy', veg: false },
        ],
      },
    ],
  },

  {
    id: 'plates',
    index: '09',
    label: 'Pan-Asian',
    title: 'Pan-Asian Plates',
    jp: '皿',
    blurb: 'Across the map in one section: Korean stews, Indonesian rice, Thai noodle bowls, Japanese curry.',
    groups: [
      {
        title: 'Plates',
        items: [
          { name: 'Chicken & Tofu Kimchi Stew', price: '699', desc: 'Served with short grain rice', veg: false },
          { name: 'Nasi Goreng', price: '899', desc: 'Indonesian seafood fried rice, chicken skewers, shrimp crackers, egg', veg: false },
          { name: 'Khao Suey', price: '499 / 599', desc: 'Thai coconut curry noodle bowl, veg or chicken', veg: true },
          { name: 'Bulgogi', price: '749 / 799', desc: 'Chicken or pork, with short grain rice and lettuce', veg: false },
          { name: 'Tteokbokki', price: '499 / 599 / 699', desc: 'Rice cake in gochujang sauce, boiled egg', veg: true },
          { name: 'Rabokki', price: '519 / 649 / 719', desc: 'Tteokbokki plus ramyeon, boiled egg', veg: true },
          { name: 'Katsu Curry', price: '599 / 649 / 699', desc: 'Tofu, chicken or prawn, with short grain rice and golden curry', veg: false },
          { name: 'Kimchi Stew', price: '599 / 699 / 749', desc: 'Tofu, chicken or pork, with short grain rice', veg: false },
        ],
      },
    ],
  },

  {
    id: 'donburi',
    index: '10',
    label: 'Donburi',
    title: 'Donburi',
    jp: '丼',
    blurb: 'Rice bowls, and the hot sizzling plates that arrive still moving at the table.',
    groups: [
      {
        title: 'Donburi',
        note: 'Rice bowls',
        items: [
          { name: 'Katsudon', price: '799', desc: 'Fried pork cutlet over rice, egg, savoury sauce', veg: false },
          { name: 'Unagi Eel Don', price: '1199', desc: 'Grilled unagi glazed in sweet soy', veg: false },
          { name: 'Chirashi Bowl', price: '1299', desc: 'Sushi rice topped with assorted sashimi and vegetables', veg: false },
          { name: 'Kimchi Bokkeumbap', price: '499 / 599 / 699', desc: 'Kimchi fried rice, sunny side up egg, veg / chicken / pork', veg: true },
          { name: 'Bibimbap', price: '599 / 699 / 799', desc: 'Rice, vegetables, gochujang, sunny side up egg, veg / chicken / pork', veg: true },
        ],
      },
      {
        title: 'Hot sizzling bowl',
        note: 'Base of jasmine rice or hakka noodle · tofu / chicken / prawn',
        items: [
          { name: 'Kung Pao Sizzling Bowl', price: '695 / 745 / 795', desc: 'Chinese five spice, hoisin sauce, cashews', veg: true },
          { name: 'Black Bean Sizzling Bowl', price: '695 / 745 / 795', desc: 'Fermented beans, garlic, onion', veg: true },
          { name: 'Thai Chilli Basil Sizzling Bowl', price: '695 / 745 / 795', desc: 'Oyster sauce, bird’s eye chilli, fresh basil', veg: true },
        ],
      },
    ],
  },

  {
    id: 'bento',
    index: '11',
    label: 'Bento',
    title: 'Bento Box',
    jp: '弁当',
    blurb: 'Compartmented boxes: rice, protein, sides and salad, all at once.',
    groups: [
      {
        title: 'Bento',
        note: 'Each comes with rice, protein, sides and salad',
        items: [
          { name: 'Vegan Tofu Bento', price: '699', desc: 'Fried silken tofu, golden curry, rice, avocado edamame salad, 2 kappamaki, 2 veg gyoza', veg: true },
          { name: 'Katsu Chicken Bento', price: '749', desc: 'Katsu chicken, golden curry, rice, salad, 2 kappamaki, 2 chicken gyoza', veg: false },
          { name: 'Pork Bento', price: '799', desc: 'Fried pork cutlet, golden curry, rice, salad, 2 kappamaki, 2 chicken gyoza', veg: false },
          { name: 'Prawn Bento', price: '849', desc: '2 prawn tempura, golden curry, rice, salad, 2 kappamaki, 2 chicken gyoza', veg: false },
          { name: 'Vegetable Tempura Bento', price: '859', desc: 'Veg tempura, rice with edamame, cucumber salad, 2 kappamaki, edamame, miso soup', veg: true },
          { name: 'Sosoru Karaage Bento', price: '899', desc: 'Chicken karaage, rice with edamame, 2 kappamaki, 2 chicken gyoza, cucumber salad, miso soup', veg: false, tag: 'House signature' },
          { name: 'Ebi Tempura Bento', price: '999', desc: '2 prawn tempura, rice with edamame, 2 kappamaki, 2 chicken gyoza, cucumber salad, miso soup', veg: false },
        ],
      },
    ],
  },

  {
    id: 'bbq',
    index: '12',
    label: 'BBQ & Hotpot',
    title: 'BBQ & Hotpot',
    jp: '焼肉',
    blurb: 'Grill sets for the middle of the table, and jeongol that keep boiling as you eat.',
    groups: [
      {
        title: 'Korean BBQ gui',
        note: 'Serves 2 / 4 · with short grain rice, lettuce and dipping sauce',
        items: [
          { name: 'Samgyeopsal Set', price: '1199 / 2199', desc: 'Pork belly slices', veg: false },
          { name: 'Yangnyeom Samgyeopsal Set', price: '1399 / 2399', desc: 'Spicy marinated pork belly', veg: false },
          { name: 'Dak Gui Set', price: '999 / 1699', desc: 'Chicken breast', veg: false },
          { name: 'Yangnyeom Dak Gui Set', price: '1199 / 1899', desc: 'Spicy marinated chicken breast', veg: false },
        ],
      },
      {
        title: 'Jeongol',
        note: 'Korean hotpot',
        items: [
          { name: 'Dubu / Dak Kimchi Jjigae', price: '1999 / 2099', desc: 'Tofu or chicken, kimchi, ramyeon, glass noodle, veggies', veg: true },
          { name: 'Budae Jjigae', price: '2499', desc: 'Kimchi, tofu, pork, veggies, ramyeon, glass noodle', veg: false },
          { name: 'Mandu Jeongol', price: '2499', desc: 'Chicken dumplings, veggies, chicken sausage, glass noodle, ramyeon, kimchi broth', veg: false },
          { name: 'Haemul Jeongol', price: '3499', desc: 'Seafood hotpot in chilli paste broth, with two bowls of rice', veg: false },
          { name: 'Shabu Shabu', price: '4599', desc: 'Vegetables, chicken, pork and seafood in broth, with two bowls of rice', veg: false },
        ],
      },
    ],
  },

  {
    id: 'drinks',
    index: '13',
    label: 'Drinks',
    title: 'Let’s Drink',
    jp: '飲',
    blurb: 'Beer, soju, sake and whisky, poured at the back of the room.',
    groups: [
      {
        title: 'Beer',
        items: [
          { name: 'Singha', price: '755', desc: 'Thai lager', veg: true },
          { name: 'Corona', price: '445', desc: 'Mexican lager', veg: true },
          { name: 'Hoegaarden', price: '445', desc: 'Belgian wheat beer', veg: true },
        ],
      },
      {
        title: 'Soju',
        items: [
          { name: 'Soju', price: '1195 / btl', desc: 'All flavours, by the bottle', veg: true },
          { name: 'Sake / Soju Bomb', price: '2095', desc: 'A table ritual for two to four: sake or soju dropped into chilled beer', veg: true },
        ],
      },
      {
        title: 'Spirits',
        note: 'Per 30 ml',
        items: [
          { name: 'Absolut Vodka', price: '245', desc: '', veg: true },
          { name: 'Bombay Sapphire', price: '345', desc: 'Gin', veg: true },
          { name: 'Roku', price: '615', desc: 'Japanese gin', veg: true },
        ],
      },
      {
        title: 'Wine',
        note: 'Glass / bottle',
        items: [
          { name: 'Sula Dindori Reserve Shiraz', price: '495 / 2255', desc: '', veg: true },
          { name: 'Sula Sauvignon Blanc', price: '455 / 2095', desc: '', veg: true },
          { name: 'Jacob’s Creek Shiraz Cabernet', price: '545 / 2595', desc: '', veg: true },
          { name: 'Jacob’s Creek Chardonnay', price: '545 / 2595', desc: '', veg: true },
        ],
      },
      {
        title: 'Whiskey',
        note: 'Per 30 ml',
        items: [
          { name: 'Jameson', price: '295', desc: '', veg: true },
          { name: 'Chivas Regal 12 yrs', price: '375', desc: '', veg: true },
          { name: 'JW Black Label', price: '395', desc: '', veg: true },
          { name: 'Glenlivet 12 yrs', price: '495', desc: '', veg: true },
          { name: 'Toki', price: '525', desc: 'Japanese blended whisky', veg: true },
          { name: 'Glenfiddich 12 yrs', price: '525', desc: '', veg: true },
          { name: 'JW Double Black', price: '565', desc: '', veg: true },
          { name: 'Akashi White Oak', price: '625', desc: 'Japanese single malt', veg: true },
          { name: 'Hibiki', price: '1095', desc: 'Japanese blended whisky', veg: true },
          { name: 'The Yamazaki', price: '1195', desc: 'Japanese single malt', veg: true },
        ],
      },
      {
        title: 'Sake',
        note: 'Glass / bottle',
        items: [
          { name: 'Hokkan Sen', price: '645 / 2695', desc: '', veg: true },
          { name: 'Hokkan Kacho Fugetsu', price: '1195 / 1999', desc: '', veg: true },
          { name: 'Shutoku Shuzo', price: '1245 / 4995', desc: '', veg: true },
        ],
      },
    ],
  },

  {
    id: 'sober',
    index: '14',
    label: 'Sober & Supreme',
    title: 'Sober & Supreme',
    jp: '清廉 至高',
    blurb: 'Tea, matcha and long cold drinks — the whole bar, without the alcohol.',
    groups: [
      {
        title: 'Hot tea',
        items: [
          { name: 'Mugicha', price: '119', desc: 'Roasted barley tea', veg: true },
          { name: 'Oolong', price: '129', desc: '', veg: true },
          { name: 'Sencha', price: '139', desc: '', veg: true },
          { name: 'Hojicha', price: '139', desc: 'Roasted green tea', veg: true },
          { name: 'Genmaicha', price: '139', desc: 'Green tea with toasted rice', veg: true },
          { name: 'Gyokuro', price: '149', desc: '', veg: true },
          { name: 'Matcha', price: '149', desc: 'Whisked to order', veg: true },
        ],
      },
      {
        title: 'Matcha',
        items: [
          { name: 'Matcha Iced Latte', price: '229', desc: '', veg: true },
          { name: 'Matcha Peach Latte', price: '229', desc: '', veg: true },
          { name: 'Matcha Mango', price: '239', desc: '', veg: true },
          { name: 'Ichigo Iced Matcha', price: '259', desc: 'Strawberry', veg: true },
          { name: 'Yuzu Matcha', price: '259', desc: '', veg: true },
          { name: 'Matcha Honey Lemon', price: '259', desc: '', veg: true },
          { name: 'Matcha Cloud', price: '259', desc: '', veg: true },
          { name: 'Coco Matcha', price: '259', desc: '', veg: true },
          { name: 'Matcha Pour', price: '259', desc: '', veg: true },
        ],
      },
      {
        title: 'Mocktails & refreshers',
        items: [
          { name: 'Chanh Soda', price: '179', desc: 'Vietnamese lime soda', veg: true },
          { name: 'Dopamine Double', price: '199', desc: '', veg: true },
          { name: 'Yuzu Hibiscus', price: '219', desc: '', veg: true },
          { name: 'Tokyo Lemonade', price: '239', desc: '', veg: true },
          { name: 'Kiwi Snow', price: '239', desc: '', veg: true },
          { name: 'Fruit Punch', price: '239', desc: '', veg: true },
          { name: 'Asian Seasonal Sipper', price: '239', desc: 'Mango, watermelon, kiwi or strawberry', veg: true },
          { name: 'Virgin Mojito', price: '239', desc: 'Orange, watermelon, kiwi or strawberry', veg: true },
        ],
      },
      {
        title: 'Iced tea',
        items: [
          { name: 'Lemon Iced Tea', price: '169', desc: '', veg: true },
          { name: 'Peach Iced Tea', price: '169', desc: '', veg: true },
          { name: 'Passionfruit Iced Tea', price: '169', desc: '', veg: true },
          { name: 'Strawberry Iced Tea', price: '199', desc: '', veg: true },
          { name: 'Lychee Iced Tea', price: '199', desc: '', veg: true },
          { name: 'Mango Iced Tea', price: '199', desc: '', veg: true },
          { name: 'Watermelon Iced Tea', price: '199', desc: '', veg: true },
        ],
      },
      {
        title: 'Bubble tea',
        items: [
          { name: 'Classic Bubble Tea', price: '209', desc: '', veg: true },
          { name: 'Thai Bubble Tea', price: '239', desc: '', veg: true },
          { name: 'Taro Bubble Tea', price: '239', desc: '', veg: true },
          { name: 'Bubblegum Bubble Tea', price: '239', desc: '', veg: true },
          { name: 'Chocolate Bubble Tea', price: '249', desc: '', veg: true },
          { name: 'Strawberry Bubble Tea', price: '249', desc: '', veg: true },
          { name: 'Mango Bubble Tea', price: '249', desc: '', veg: true },
          { name: 'Passion Fruit Bubble Tea', price: '249', desc: '', veg: true },
          { name: 'Matcha Bubble Tea', price: '259', desc: '', veg: true },
        ],
      },
      {
        title: 'Aerated drinks & water',
        items: [
          { name: 'Mineral Water', price: '100', desc: '', veg: true },
          { name: 'Regular / Diet Coke', price: '109', desc: '', veg: true },
          { name: 'Soda Water', price: '145', desc: '', veg: true },
          { name: 'Tonic Water', price: '145', desc: '', veg: true },
          { name: 'Ginger Ale', price: '145', desc: '', veg: true },
        ],
      },
    ],
  },
]

/** Flat lookup used by the homepage highlights and the mood picker. */
export const menuLookup = menuCategories.flatMap((category) =>
  category.groups.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      id: `${category.id}-${item.name}`,
      categoryId: category.id,
      categoryLabel: category.label,
    })),
  ),
)

export const dishById = (id) => menuLookup.find((item) => item.id === id)
