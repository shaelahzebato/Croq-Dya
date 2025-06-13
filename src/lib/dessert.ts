const desserts: Record<string, { name: string; image: string; description: string }[]> = {
  gateaux: [
    { name: "Fraisier Vanille", image: "/Birthday-fraise-cake.jpg", description: "Gâteau aux fraises fraîches et crème vanille" },
    { name: "Choco-Amour", image: "/Cheesecake-brownies.jpg", description: "Gâteau chocolat fondant et cœur noisette" },
    { name: "Tentation Fruits Rouges", image: "/Fraise-cheesecake.jpg", description: "Biscuit moelleux aux fruits rouges" },
    { name: "Framboisier Crème Légère", image: "/Violet-mini-cake.jpg", description: "Framboises fraîches et crème onctueuse" },
    { name: "Caramel Beurre Salé", image: "/Lemon Cheesecake Mousse.jpg", description: "Délice au caramel et génoise légère" },
    { name: "DyaChoco Mix", image: "/Mini-cakes.jpg", description: "Explosion de chocolats noirs et blancs" },
    { name: "Moka Café Doux", image: "/Chocolate-orange-cheesecake.jpg", description: "Alliance de crème café et chocolat noir" },
    { name: "Velours Rouge", image: "/Mini-cake-fraise.jpg", description: "Red velvet revisité à la Dya" },
    { name: "Coco Douceur", image: "/Nutella-tiramisu-cups.jpg", description: "Saveur noix de coco légère" },
    { name: "Duo Vanille-Fraise", image: "/Strawberry-cheesecake.jpg", description: "Harmonie fruitée classique" },
    { name: "Noisette Praline", image: "/Violet-cake-carre.jpg", description: "Gâteau onctueux au praliné" },
    { name: "Gâteau Pistache", image: "/Sweet-tooth.jpg", description: "Originalité et finesse à la pistache" }
  ],
  cupcakes: [
    { name: "Cupcake Fraise", image: "/Cheesecake-cupcakes.jpg", description: "Cupcake à la fraise et chantilly rose" },
    { name: "Cupcake ChocoVanille", image: "/Sweet-fraise-cupcakes.jpg", description: "Mélange gourmand vanille-chocolat" },
    { name: "Cupcake Praliné", image: "/Salted-caramel-cream-cheese-cupcakes.jpg", description: "Douceur au praliné et éclats de noisettes" },
    { name: "Cupcake Mangue", image: "/Fiesta-cupcakes.jpg", description: "Saveur fruitée et légère à la mangue" },
    { name: "Cupcake Citron", image: "/Carrot-cake-cupcakes-with-cream-cheese.jpg", description: "Zeste de citron et cœur coulant" },
    { name: "Cupcake Caramel", image: "/Pink-cake.jpg", description: "Caramel fondant et topping gourmand" },
    { name: "Cupcake Framboise", image: "/Mini-pistachio-lemon-cheesecake.jpg", description: "Framboise vive et moelleux doux" },
    { name: "Cupcake Oréo", image: "/Muffin.jpg", description: "Base chocolat et topping Oréo" },
    { name: "Cupcake CocoChoco", image: "/Vanilla-cupcakes.jpg", description: "Mariage coco et chocolat noir" },
    { name: "Cupcake Pistache", image: "/Sweet-chocolat-cupcakes.jpg", description: "Originalité tendre à la pistache" },
    { name: "Cupcake Spéculoos", image: "/Sweet-cupcakes.jpg", description: "Épices douces et biscuit croquant" },
    { name: "Cupcake RedVelvet", image: "/Mini-lemon-drop-cakes.jpg", description: "Gourmandise rouge et crème légère" },
    { name: "Cupcake RedVelvet", image: "/Mini-cake-pink.jpg", description: "Gourmandise rouge et crème légère" }
  ],
  tartes: [
    { name: "Tarte Fraise Basilic", image: "/dessert-3.jpg", description: "Fraises fraîches et touche d’herbe douce" },
    { name: "Tarte Tatin", image: "/Smiley-meals.jpg", description: "Pommes caramélisées et pâte feuilletée" },
    { name: "Tarte Citron Meringuée", image: "/Violet-cake.jpg", description: "Acidulé et nuage sucré" },
    { name: "Tarte Chocolat Noisette", image: "/Mini-vanilla-cream.jpg", description: "Ganache intense et croustillant" },
    { name: "Tarte Framboise Amande", image: "/Mini-strawberry-cheesecakes.jpg", description: "Fruits rouges et frangipane" },
    { name: "Tarte Poire Belle-Hélène", image: "/Mini-lemon-cheesecakes.jpg", description: "Poire pochée et chocolat fondant" },
    { name: "Tarte Pêche Lavande", image: "/Mini-caramel-peanut-cheesecakes.jpg", description: "Subtil parfum floral et fruité" },
    { name: "Tarte Choco Caramel", image: "/Chocolate-cheesecake.jpg", description: "Double gourmandise" },
    { name: "Tarte Coco Mangue", image: "/Creamy-arachide.jpg", description: "Alliance tropicale" },
    // { name: "Tarte Pistache Cerise", image: "/tartes.jpg", description: "Mariage original et sucré" },
    // { name: "Tarte Mûre Vanille", image: "/tartes.jpg", description: "Délicat et sucré" },
    // { name: "Tarte Avoine Banane", image: "/tartes.jpg", description: "Alternative saine et gourmande" }
  ],
  cookies: [
    { name: "Cookie ChocoChunk", image: "/biscuit-4.jpg", description: "Classique cookie au chocolat fondant" },
    { name: "Cookie Avoine Raisin", image: "/biscuit-5.jpg", description: "Avoine croustillante et raisins secs" },
    { name: "Cookie Double Chocolat", image: "/biscuit-6.jpg", description: "Chocolat noir et cacao intense" },
    { name: "Cookie Noisette Caramel", image: "/biscuit-8.jpg", description: "Noisettes croquantes et caramel beurre salé" },
    { name: "Cookie Matcha", image: "/biscuit-9.jpg", description: "Originalité du thé vert matcha" },
    // { name: "Cookie Coco Pépites", image: "/cookies.jpg", description: "Noix de coco râpée et chocolat" },
    // { name: "Cookie Cannelle Pomme", image: "/cookies.jpg", description: "Saveur automnale irrésistible" },
    // { name: "Cookie Vanille Brownie", image: "/cookies.jpg", description: "Fusion cookie et brownie moelleux" },
    // { name: "Cookie Oréo", image: "/cookies.jpg", description: "Topping de biscuits Oréo" },
    // { name: "Cookie Beurre d’Arachide", image: "/cookies.jpg", description: "Goût riche et onctueux" },
    // { name: "Cookie Confettis", image: "/cookies.jpg", description: "Festif avec éclats de sucre colorés" },
    // { name: "Cookie Miel Noix", image: "/cookies.jpg", description: "Alliance douce et croquante" }
  ],
  glaces: [
    { name: "Vanille Bourbon", image: "/Glace-a-graine.jpg", description: "Crème glacée vanille intense et douce" },
    { name: "Chocolat Noir Intense", image: "/Glace-fraise.jpg", description: "Chocolat fondant à 70%" },
    { name: "Fraise Chantilly", image: "/Shortcake-ice-cream.jpg", description: "Fraise fraîche et nuage de crème" },
    { name: "Noix de Coco Glacée", image: "/Vanilla-glace.jpg", description: "Saveur exotique et rafraîchissante" },
    { name: "Menthe Chocolat", image: "/Boules-glaces.jpg", description: "Fraîcheur mentholée et éclats de chocolat" },
    // { name: "Café Moka", image: "/icecream.jpg", description: "Parfumé et légèrement corsé" },
    // { name: "Pistache Douce", image: "/icecream.jpg", description: "Subtil et crémeux" },
    // { name: "Mangue Passion", image: "/icecream.jpg", description: "Tropical et vitaminé" },
    // { name: "Framboise Sorbet", image: "/icecream.jpg", description: "Sans lait, ultra fruité" },
    // { name: "Caramel Fleur de Sel", image: "/icecream.jpg", description: "Gourmandise à l’état pur" },
    // { name: "Glace Banane Split", image: "/icecream.jpg", description: "Classique revisité avec amour" },
    // { name: "Châtaigne Douce", image: "/icecream.jpg", description: "Délicatesse automnale" }
  ],
};


gateaux: [
  {
    name: "Fraisier Vanille",
    image: "/Birthday-fraise-cake.jpg",
    description: "Gâteau aux fraises fraîches et crème vanille",
    time: "2h",
    packaging: "8 parts",
    rating: 4.8,
    price: "32,90 €"
  },
  {
    name: "Choco-Amour",
    image: "/Cheesecake-brownies.jpg",
    description: "Gâteau chocolat fondant et cœur noisette",
    time: "2h15",
    packaging: "10 parts",
    rating: 4.9,
    price: "34,90 €"
  },
  {
    name: "Tentation Fruits Rouges",
    image: "/Fraise-cheesecake.jpg",
    description: "Biscuit moelleux aux fruits rouges",
    time: "1h45",
    packaging: "8 parts",
    rating: 4.7,
    price: "31,90 €"
  },
  {
    name: "Framboisier Crème Légère",
    image: "/Violet-mini-cake.jpg",
    description: "Framboises fraîches et crème onctueuse",
    time: "2h",
    packaging: "10 parts",
    rating: 4.6,
    price: "33,90 €"
  },
  {
    name: "Caramel Beurre Salé",
    image: "/Lemon Cheesecake Mousse.jpg",
    description: "Délice au caramel et génoise légère",
    time: "1h30",
    packaging: "8 parts",
    rating: 4.9,
    price: "32,00 €"
  },
  {
    name: "DyaChoco Mix",
    image: "/Mini-cakes.jpg",
    description: "Explosion de chocolats noirs et blancs",
    time: "2h",
    packaging: "10 parts",
    rating: 4.8,
    price: "35,00 €"
  },
  {
    name: "Moka Café Doux",
    image: "/Chocolate-orange-cheesecake.jpg",
    description: "Alliance de crème café et chocolat noir",
    time: "2h15",
    packaging: "8 parts",
    rating: 4.7,
    price: "33,50 €"
  },
  {
    name: "Velours Rouge",
    image: "/Mini-cake-fraise.jpg",
    description: "Red velvet revisité à la Dya",
    time: "1h45",
    packaging: "8 parts",
    rating: 4.8,
    price: "31,50 €"
  },
  {
    name: "Coco Douceur",
    image: "/Nutella-tiramisu-cups.jpg",
    description: "Saveur noix de coco légère",
    time: "1h30",
    packaging: "10 parts",
    rating: 4.5,
    price: "30,90 €"
  },
  {
    name: "Duo Vanille-Fraise",
    image: "/Strawberry-cheesecake.jpg",
    description: "Harmonie fruitée classique",
    time: "2h",
    packaging: "8 parts",
    rating: 4.7,
    price: "32,50 €"
  },
  {
    name: "Noisette Praline",
    image: "/Violet-cake-carre.jpg",
    description: "Gâteau onctueux au praliné",
    time: "2h",
    packaging: "10 parts",
    rating: 4.6,
    price: "33,00 €"
  },
  {
    name: "Gâteau Pistache",
    image: "/Sweet-tooth.jpg",
    description: "Originalité et finesse à la pistache",
    time: "2h15",
    packaging: "10 parts",
    rating: 4.9,
    price: "36,00 €"
  }
]

cupcakes: [
  {
    name: "Cupcake Fraise",
    image: "/Cheesecake-cupcakes.jpg",
    description: "Cupcake à la fraise et chantilly rose",
    time: "45 min",
    packaging: "Écrin de 6",
    rating: 4.7,
    price: "15,90 €"
  },
  {
    name: "Cupcake ChocoVanille",
    image: "/Sweet-fraise-cupcakes.jpg",
    description: "Mélange gourmand vanille-chocolat",
    time: "50 min",
    packaging: "Écrin de 6",
    rating: 4.8,
    price: "16,50 €"
  },
  {
    name: "Cupcake Praliné",
    image: "/Salted-caramel-cream-cheese-cupcakes.jpg",
    description: "Douceur au praliné et éclats de noisettes",
    time: "1h",
    packaging: "Écrin de 6",
    rating: 4.6,
    price: "16,90 €"
  },
  {
    name: "Cupcake Mangue",
    image: "/Fiesta-cupcakes.jpg",
    description: "Saveur fruitée et légère à la mangue",
    time: "50 min",
    packaging: "Écrin de 6",
    rating: 4.5,
    price: "15,50 €"
  },
  {
    name: "Cupcake Citron",
    image: "/Carrot-cake-cupcakes-with-cream-cheese.jpg",
    description: "Zeste de citron et cœur coulant",
    time: "45 min",
    packaging: "Écrin de 6",
    rating: 4.8,
    price: "15,90 €"
  },
  {
    name: "Cupcake Caramel",
    image: "/Pink-cake.jpg",
    description: "Caramel fondant et topping gourmand",
    time: "1h",
    packaging: "Écrin de 6",
    rating: 4.9,
    price: "16,90 €"
  },
  {
    name: "Cupcake Framboise",
    image: "/Mini-pistachio-lemon-cheesecake.jpg",
    description: "Framboise vive et moelleux doux",
    time: "50 min",
    packaging: "Écrin de 6",
    rating: 4.6,
    price: "15,80 €"
  },
  {
    name: "Cupcake Oréo",
    image: "/Muffin.jpg",
    description: "Base chocolat et topping Oréo",
    time: "1h",
    packaging: "Écrin de 6",
    rating: 4.7,
    price: "16,50 €"
  },
  {
    name: "Cupcake CocoChoco",
    image: "/Vanilla-cupcakes.jpg",
    description: "Mariage coco et chocolat noir",
    time: "45 min",
    packaging: "Écrin de 6",
    rating: 4.5,
    price: "15,70 €"
  },
  {
    name: "Cupcake Pistache",
    image: "/Sweet-chocolat-cupcakes.jpg",
    description: "Originalité tendre à la pistache",
    time: "50 min",
    packaging: "Écrin de 6",
    rating: 4.8,
    price: "16,20 €"
  },
  {
    name: "Cupcake Spéculoos",
    image: "/Sweet-cupcakes.jpg",
    description: "Épices douces et biscuit croquant",
    time: "1h",
    packaging: "Écrin de 6",
    rating: 4.7,
    price: "16,80 €"
  },
  {
    name: "Cupcake RedVelvet",
    image: "/Mini-lemon-drop-cakes.jpg",
    description: "Gourmandise rouge et crème légère",
    time: "1h",
    packaging: "Écrin de 6",
    rating: 4.9,
    price: "17,00 €"
  }
]

macarons: [
  {
    name: "Macaron Framboise",
    image: "/macaron-framboise.jpg",
    description: "Ganache framboise légère et fruitée",
    time: "1h30",
    packaging: "Boîte de 12",
    rating: 4.7,
    price: "18,90 €"
  },
  {
    name: "Macaron Chocolat Noir",
    image: "/macaron-chocolat.jpg",
    description: "Ganache chocolat intense à 70%",
    time: "2h",
    packaging: "Boîte de 12",
    rating: 4.9,
    price: "19,90 €"
  },
  {
    name: "Macaron Pistache",
    image: "/macaron-pistache.jpg",
    description: "Ganache pistache onctueuse",
    time: "1h45",
    packaging: "Boîte de 12",
    rating: 4.6,
    price: "19,50 €"
  },
  {
    name: "Macaron Vanille Bourbon",
    image: "/macaron-vanille.jpg",
    description: "Crème vanille douce et florale",
    time: "1h30",
    packaging: "Boîte de 12",
    rating: 4.8,
    price: "18,90 €"
  },
  {
    name: "Macaron Caramel Beurre Salé",
    image: "/macaron-caramel.jpg",
    description: "Caramel coulant au beurre salé",
    time: "2h",
    packaging: "Boîte de 12",
    rating: 4.9,
    price: "20,00 €"
  },
  {
    name: "Macaron Citron Yuzu",
    image: "/macaron-citron.jpg",
    description: "Acidité fraîche et légère du yuzu",
    time: "1h30",
    packaging: "Boîte de 12",
    rating: 4.5,
    price: "18,50 €"
  },
  {
    name: "Macaron Noisette",
    image: "/macaron-noisette.jpg",
    description: "Ganache fondante à la noisette",
    time: "1h45",
    packaging: "Boîte de 12",
    rating: 4.7,
    price: "19,00 €"
  },
  {
    name: "Macaron Fruits Rouges",
    image: "/macaron-fruitsrouges.jpg",
    description: "Mélange de fraise, groseille et mûre",
    time: "1h30",
    packaging: "Boîte de 12",
    rating: 4.6,
    price: "18,90 €"
  },
  {
    name: "Macaron Coco",
    image: "/macaron-coco.jpg",
    description: "Ganache coco crémeuse et exotique",
    time: "1h45",
    packaging: "Boîte de 12",
    rating: 4.4,
    price: "18,50 €"
  },
  {
    name: "Macaron Café",
    image: "/macaron-cafe.jpg",
    description: "Saveur café arabica subtile",
    time: "2h",
    packaging: "Boîte de 12",
    rating: 4.8,
    price: "19,50 €"
  },
  {
    name: "Macaron Mangue Passion",
    image: "/macaron-mangue.jpg",
    description: "Parfum tropical doux et acidulé",
    time: "1h30",
    packaging: "Boîte de 12",
    rating: 4.7,
    price: "19,00 €"
  },
  {
    name: "Macaron Spéculoos",
    image: "/macaron-speculoos.jpg",
    description: "Ganache aux épices douces et croquantes",
    time: "1h45",
    packaging: "Boîte de 12",
    rating: 4.6,
    price: "18,80 €"
  }
]

tartes: [
  {
    name: "Tarte Fraise Basilic",
    image: "/dessert-3.jpg",
    description: "Fraises fraîches et touche d’herbe douce",
    time: "1h",
    packaging: "Part de 6",
    rating: 4.8,
    price: "24,90 €"
  },
  {
    name: "Tarte Tatin",
    image: "/Smiley-meals.jpg",
    description: "Pommes caramélisées et pâte feuilletée",
    time: "1h15",
    packaging: "Part de 6",
    rating: 4.9,
    price: "25,50 €"
  },
  {
    name: "Tarte Citron Meringuée",
    image: "/Violet-cake.jpg",
    description: "Acidulé et nuage sucré",
    time: "1h",
    packaging: "Part de 6",
    rating: 4.7,
    price: "23,90 €"
  },
  {
    name: "Tarte Chocolat Noisette",
    image: "/Mini-vanilla-cream.jpg",
    description: "Ganache intense et croustillant",
    time: "1h10",
    packaging: "Part de 6",
    rating: 4.8,
    price: "26,00 €"
  },
  {
    name: "Tarte Framboise Amande",
    image: "/Mini-strawberry-cheesecakes.jpg",
    description: "Fruits rouges et frangipane",
    time: "1h",
    packaging: "Part de 6",
    rating: 4.6,
    price: "24,00 €"
  },
  {
    name: "Tarte Poire Belle-Hélène",
    image: "/Mini-lemon-cheesecakes.jpg",
    description: "Poire pochée et chocolat fondant",
    time: "1h10",
    packaging: "Part de 6",
    rating: 4.8,
    price: "25,90 €"
  },
  {
    name: "Tarte Pêche Lavande",
    image: "/Mini-caramel-peanut-cheesecakes.jpg",
    description: "Subtil parfum floral et fruité",
    time: "1h",
    packaging: "Part de 6",
    rating: 4.5,
    price: "23,50 €"
  },
  {
    name: "Tarte Choco Caramel",
    image: "/Chocolate-cheesecake.jpg",
    description: "Double gourmandise",
    time: "1h15",
    packaging: "Part de 6",
    rating: 4.9,
    price: "26,50 €"
  },
  {
    name: "Tarte Coco Mangue",
    image: "/Creamy-arachide.jpg",
    description: "Alliance tropicale",
    time: "1h",
    packaging: "Part de 6",
    rating: 4.6,
    price: "24,90 €"
  },
  {
    name: "Tarte Pistache Cerise",
    image: "/Mini-lemon-drop-cakes.jpg",
    description: "Mariage original et sucré",
    time: "1h",
    packaging: "Part de 6",
    rating: 4.7,
    price: "25,90 €"
  },
  {
    name: "Tarte Mûre Vanille",
    image: "/Mini-strawberry-cheesecakes.jpg",
    description: "Délicat et sucré",
    time: "1h",
    packaging: "Part de 6",
    rating: 4.5,
    price: "23,90 €"
  },
  {
    name: "Tarte Avoine Banane",
    image: "/Mini-vanilla-cream.jpg",
    description: "Alternative saine et gourmande",
    time: "1h05",
    packaging: "Part de 6",
    rating: 4.6,
    price: "22,90 €"
  }
]

glaces: [
  {
    name: "Vanille Bourbon",
    image: "/Glace-a-graine.jpg",
    description: "Crème glacée vanille intense et douce",
    time: "1h",
    packaging: "Pot 250ml",
    rating: 4.9,
    price: "6,90 €"
  },
  {
    name: "Chocolat Noir Intense",
    image: "/Glace-fraise.jpg",
    description: "Chocolat fondant à 70%",
    time: "1h",
    packaging: "Pot 250ml",
    rating: 4.8,
    price: "7,20 €"
  },
  {
    name: "Fraise Chantilly",
    image: "/Shortcake-ice-cream.jpg",
    description: "Fraise fraîche et nuage de crème",
    time: "1h",
    packaging: "Pot 250ml",
    rating: 4.7,
    price: "6,80 €"
  },
  {
    name: "Noix de Coco Glacée",
    image: "/Vanilla-glace.jpg",
    description: "Saveur exotique et rafraîchissante",
    time: "1h",
    packaging: "Pot 250ml",
    rating: 4.6,
    price: "6,50 €"
  },
  {
    name: "Menthe Chocolat",
    image: "/Boules-glaces.jpg",
    description: "Fraîcheur mentholée et éclats de chocolat",
    time: "1h",
    packaging: "Pot 250ml",
    rating: 4.7,
    price: "6,70 €"
  },
  {
    name: "Caramel Fleur de Sel",
    image: "/icecream-caramel.jpg",
    description: "Douceur sucrée et pointe salée",
    time: "1h",
    packaging: "Pot 250ml",
    rating: 4.9,
    price: "7,10 €"
  },
  {
    name: "Mangue Passion",
    image: "/icecream-mangue.jpg",
    description: "Tropical, vitaminé et ensoleillé",
    time: "1h",
    packaging: "Pot 250ml",
    rating: 4.8,
    price: "6,90 €"
  },
  {
    name: "Glace Banane Split",
    image: "/icecream-banana.jpg",
    description: "Classique revisité avec amour",
    time: "1h",
    packaging: "Pot 250ml",
    rating: 4.7,
    price: "6,80 €"
  }
]

cookies: [
  {
    name: "Cookie ChocoChunk",
    image: "/biscuit-4.jpg",
    description: "Classique cookie au chocolat fondant",
    time: "40 min",
    packaging: "Sachet de 4",
    rating: 4.9,
    price: "8,90 €"
  },
  {
    name: "Cookie Avoine Raisin",
    image: "/biscuit-5.jpg",
    description: "Avoine croustillante et raisins secs",
    time: "35 min",
    packaging: "Sachet de 4",
    rating: 4.6,
    price: "7,90 €"
  },
  {
    name: "Cookie Double Chocolat",
    image: "/biscuit-6.jpg",
    description: "Chocolat noir et cacao intense",
    time: "40 min",
    packaging: "Sachet de 4",
    rating: 4.8,
    price: "9,50 €"
  },
  {
    name: "Cookie Noisette Caramel",
    image: "/biscuit-8.jpg",
    description: "Noisettes croquantes et caramel beurre salé",
    time: "45 min",
    packaging: "Sachet de 4",
    rating: 4.9,
    price: "9,90 €"
  },
  {
    name: "Cookie Matcha",
    image: "/biscuit-9.jpg",
    description: "Originalité du thé vert matcha",
    time: "35 min",
    packaging: "Sachet de 4",
    rating: 4.5,
    price: "8,50 €"
  },
  {
    name: "Cookie Spéculoos",
    image: "/cookies-speculoos.jpg",
    description: "Goût d'épices et croustillant caramelisé",
    time: "35 min",
    packaging: "Sachet de 4",
    rating: 4.7,
    price: "8,90 €"
  },
  {
    name: "Cookie Vanille Brownie",
    image: "/cookie-brownie.jpg",
    description: "Moitié cookie, moitié brownie",
    time: "40 min",
    packaging: "Sachet de 4",
    rating: 4.8,
    price: "9,30 €"
  },
  {
    name: "Cookie Coco Pépites",
    image: "/cookie-coco.jpg",
    description: "Noix de coco râpée et pépites de chocolat",
    time: "35 min",
    packaging: "Sachet de 4",
    rating: 4.6,
    price: "8,50 €"
  }
]

