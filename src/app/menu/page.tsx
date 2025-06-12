import React from "react";
import { AlarmClock, Eye, Heart, Package, Search } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

      {/* Barre de recherche stylée */}
      {/* <section className="">
        <Card className="p-10 max-w-5xl mx-auto">
          <div className="w-full flex items-center gap-4 bg-white p-4 rounded-full border-2 border-[#FF69B4] shadow-sm focus-within:ring-2 ring-[#FF69B4]">
            <Search className="text-[#FF69B4] w-5 h-5" />
            <input
              type="search"
              placeholder="Rechercher un dessert, un parfum..."
              aria-label="Barre de recherche de dessert"
              className="w-full text-sm sm:text-base outline-none placeholder:text-[#FFB6C1]"
            />
          </div>
          <h2 className="text-[#FF69B4] text-lg sm:text-xl lg:text-2xl font-bold text-center">Trouver votre douceur idéale</h2>
        </Card>
      </section> */}
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
              placeholder="Rechercher un dessert, un parfum, une occasion..."
              className="w-full text-sm sm:text-base outline-none font-quicksand text-secondary placeholder-accent"
            />
            <Button className="btn btn-primary px-6 py-2 rounded-xl">
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

      {Object.entries(desserts).map(([category, data]: [string, { name: string; image: string; description: string }[]]) => (
        <section key={category} className="px-6 py-14 max-w-6xl mx-auto">
          <h2 className="text-[#8B4513] dancing_script text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10">
            {category === "gateaux"
              ? "🎂 Gâteaux"
              : category === "cupcakes"
              ? "🧁 Cupcakes"
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
                    <span>2h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#FF69B4]"><Package/></span>
                    <span>Écrin de 12</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>⭐</span>
                    <span>4.5</span>
                  </div>
                </div>
                <span className="text-[#FF69B4] text-xl py-2">32,90 €</span>
                <div className="w-full flex justify-between items-center mt-6">
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