import React from "react";
import { AlarmClock, Eye, Heart, Package, Search } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const desserts: Record<string, { name: string; image: string; description: string; time: string; packaging: string; rating: number; price: string; }[]> = {
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
  ],

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
  ],

  macarons: [
    {
      name: "Macaron Framboise",
      image: "/Macaron-fraise.jpg",
      description: "Ganache framboise légère et fruitée",
      time: "1h30",
      packaging: "Boîte de 12",
      rating: 4.7,
      price: "18,90 €"
    },
    {
      name: "Macaron Chocolat Noir",
      image: "/Macaron-choco.jpg",
      description: "Ganache chocolat intense à 70%",
      time: "2h",
      packaging: "Boîte de 12",
      rating: 4.9,
      price: "19,90 €"
    },
    {
      name: "Macaron Pistache",
      image: "/French-macarons-graine.jpg",
      description: "Ganache pistache onctueuse",
      time: "1h45",
      packaging: "Boîte de 12",
      rating: 4.6,
      price: "19,50 €"
    },
    {
      name: "Macaron Vanille Bourbon Orange",
      image: "/Red-orange-macarons.jpg",
      description: "Crème vanille douce et florale",
      time: "1h30",
      packaging: "Boîte de 12",
      rating: 4.8,
      price: "18,90 €"
    },
    {
      name: "Macaron Caramel Beurre Salé",
      image: "/French-macarons.jpg",
      description: "Caramel coulant au beurre salé",
      time: "2h",
      packaging: "Boîte de 12",
      rating: 4.9,
      price: "20,00 €"
    },
    {
      name: "Macaron Citron Yuzu",
      image: "/Macron-food-fruit-orange.jpg",
      description: "Acidité fraîche et légère du yuzu",
      time: "1h30",
      packaging: "Boîte de 12",
      rating: 4.5,
      price: "18,50 €"
    },
    {
      name: "Macaron Noisette",
      image: "/Macaron-vert.jpg",
      description: "Ganache fondante à la noisette",
      time: "1h45",
      packaging: "Boîte de 12",
      rating: 4.7,
      price: "19,00 €"
    },
    {
      name: "Macaron Fruits Rouges",
      image: "/Macaronss.jpg",
      description: "Mélange de fraise, groseille et mûre",
      time: "1h30",
      packaging: "Boîte de 12",
      rating: 4.6,
      price: "18,90 €"
    }
  ],

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
  ],

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
    }
  ],

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
      image: "/Cookie-avoine-raisin.jpg",
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
    }
  ]
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#FFF8DC]">
      <section className="px-6 py-14 flex flex-col gap-8 items-center text-center max-w-4xl mx-auto">
        <h1 className="text-[#FF69B4] dancing_script text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Notre Menu Gourmand
        </h1>
        <p className="text-[#8B4513] text-base sm:text-xl lg:text-2xl leading-relaxed w-full max-w-3xl">
          Découvrez toutes nos créations artisanales faites avec amour et des ingrédients de qualité. Gâteaux, cupcakes, tartes et autres douceurs pour ravir vos papilles !
        </p>
      </section>

      {/* Barre de recherche améliorée */}
      <section className="px-6 mb-16">
        <Card className="max-w-4xl mx-auto p-8 bg-white/80 backdrop-blur-sm border-2 shadow-xl searchbar-card">
          <div className="text-center mb-6">
            <h2 className="font-dancing text-2xl sm:text-3xl font-bold mb-2 text-primary">
              Trouvez votre douceur idéale
            </h2>
            <p className="text-sm text-secondary">
              Plus de 50 créations artisanales vous attendent
            </p>
          </div>
          
          <div className="relative">
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border-2 shadow-lg transition-all duration-300 searchbar-input">
              <Search className="w-6 h-6 flex-shrink-0 text-primary" />
              <input
                type="search"
                placeholder="Rechercher un dessert, un parfum..."
                className="w-full text-sm sm:text-base outline-none font-quicksand text-secondary placeholder-accent"
              />
              <Button className="btn btn-primary px-6 py-2 rounded-xl cursor-pointer">
                Rechercher
              </Button>
            </div>
            
            {/* Tags populaires */}
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {["Chocolat", "Fraise", "Vanille", "Sans gluten", "Vegan"].map((tag) => (
                <span 
                  key={tag} 
                  className="search-tag px-3 py-1 text-white text-xs rounded-full cursor-pointer transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Card>
      </section>

      {Object.entries(desserts).map(([category, data]: [string, { name: string; image: string; description: string; time: string; packaging: string; rating: number; price: string }[]]) => (
        <section key={category} className="px-6 py-14 max-w-6xl mx-auto">
          <h2 className="text-[#8B4513] dancing_script text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
            {category === "gateaux"
              ? "🎂 Gâteaux"
              : category === "cupcakes"
              ? "🧁 Cupcakes"
              : category === "macarons"
              ? "🌈 Macarons"
              : category === "cookies"
              ? "🍪 Cookies"
              : category === "glaces"
              ? "🍦 Glaces"
              : category === "tartes"
              ? "🥧 Tartes"
              : "✨ Surprise Dya"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {data.map((dessert, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
              >
                <div className="relative w-52 h-52 mb-4">
                  <Image
                    src={dessert.image}
                    alt={dessert.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="text-[#FF69B4] dancing_script text-xl font-semibold mb-2">{dessert.name}</h3>
                <p className="text-[#8B4513] text-sm lg:text-base leading-relaxed">
                  {dessert.description}
                </p>
                <div className="flex items-center gap-6 text-[#8B4513] mt-6">
                  <div className="flex items-center gap-1">
                    <span className="text-[#FF69B4]"><AlarmClock/></span>
                    <span>{dessert.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#FF69B4]"><Package/></span>
                    <span>{dessert.packaging}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>{dessert.rating}</span>
                  </div>
                </div>
                <span className="text-[#FF69B4] text-xl py-2">{dessert.price}</span>
                <div className="w-full flex justify-between items-center mt-2">
                    <Button className="bg-[#FF69B4] cursor-pointer hover:bg-pink-500 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">Ajouter au panier</Button>
                    <Link href={"/"}>
                      <Button className="bg-white text-[#FF69B4] border border-[#FF69B4] hover:bg-pink-100 cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                        <Eye/>
                      </Button>
                    </Link>
                  </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}