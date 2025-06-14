import CarouselParType from '@/components/CarouselParType'
import { Card } from '@/components/ui/card'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function MenuPage() {

  const dessertData = {
  gateaux: [
    { name: "Gâteau Fraise", image: "/Birthday-fraise-cake.jpg", description: "Moelleux à la fraise et chantilly" },
    { name: "Gâteau Chocolat", image: "/gateau-choco.jpg", description: "Intense et fondant" },
    { name: "Gâteau Vanille", image: "/gateau-vanille.jpg", description: "Vanille légère et mousseuse" },
    { name: "Gâteau Coco", image: "/gateau-coco.jpg", description: "Coco râpé et crème douce" },
    { name: "Gâteau Mangue", image: "/gateau-mangue.jpg", description: "Saveur tropicale onctueuse" },
    { name: "Gâteau Citron", image: "/gateau-citron.jpg", description: "Acidulé et léger" },
  ],
  cupcakes: [
    { name: "Cupcake Vanille", image: "/cupcake-vanille.jpg", description: "Douceur sucrée à la vanille" },
    { name: "Cupcake Framboise", image: "/cupcake-framboise.jpg", description: "Fruitée et acidulée" },
    { name: "Cupcake Chocolat", image: "/cupcake-choco.jpg", description: "Glaçage gourmand et cœur fondant" },
    { name: "Cupcake Pistache", image: "/cupcake-pistache.jpg", description: "Goût subtil et raffiné" },
    { name: "Cupcake Caramel", image: "/cupcake-caramel.jpg", description: "Au beurre salé" },
    { name: "Cupcake Fraise-Crème", image: "/cupcake-fraise.jpg", description: "Fraise et crème chantilly" },
  ],
  tartes: [
    { name: "Tarte Citron", image: "/tarte-citron.jpg", description: "Acidulée et légère" },
    { name: "Tarte Fruits Rouges", image: "/tarte-fruits.jpg", description: "Garnie de fruits frais" },
    { name: "Tarte Pomme", image: "/tarte-pomme.jpg", description: "Classique et caramélisée" },
    { name: "Tarte Abricot", image: "/tarte-abricot.jpg", description: "Goût doux et ensoleillé" },
    { name: "Tarte Poire", image: "/tarte-poire.jpg", description: "Crème amande et poire" },
    { name: "Tarte Choco-noisette", image: "/tarte-choco.jpg", description: "Gourmande à souhait" },
  ],
  cookies: [
    { name: "Cookie Chocolat", image: "/cookie-choco.jpg", description: "Classique incontournable" },
    { name: "Cookie Noix", image: "/cookie-noix.jpg", description: "Avec éclats de noix" },
    { name: "Cookie Avoine", image: "/cookie-avoine.jpg", description: "Santé et croustillant" },
    { name: "Cookie Praliné", image: "/cookie-praline.jpg", description: "Coeur praliné coulant" },
    { name: "Cookie M&M's", image: "/cookie-mms.jpg", description: "Coloré et joyeux" },
    { name: "Cookie Double Chocolat", image: "/cookie-doublechoco.jpg", description: "Ultra fondant" },
  ],
  cremes: [
    { name: "Crème glacée Vanille", image: "/ice-vanille.jpg", description: "Douce et crémeuse" },
    { name: "Crème glacée Fraise", image: "/ice-fraise.jpg", description: "Parfumée et rafraîchissante" },
    { name: "Crème glacée Pistache", image: "/ice-pistache.jpg", description: "Goût délicat" },
    { name: "Crème glacée Chocolat", image: "/ice-choco.jpg", description: "Intense et onctueuse" },
    { name: "Crème glacée Noix de coco", image: "/ice-coco.jpg", description: "Saveur des îles" },
    { name: "Crème glacée Mangue", image: "/ice-mangue.jpg", description: "Fraîche et exotique" },
  ]
};



  return (
    <main className="min-h-screen bg-[#FFF8DC]">
      <section className="bg-white px-6 py-14">
        <div className="flex flex-col gap-10 items-center text-center max-w-4xl mx-auto">
          <h1 className="text-[#FF69B4] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Notre Menu Gourmand
          </h1>
          <p className="text-[#8B4513] text-base sm:text-lg lg:text-xl leading-relaxed w-full max-w-3xl">
            Découvrez toutes nos créations artisanales faites avec amour et des ingrédients de qualité. Gâteaux, cupcakes, tartes et autres douceurs pour ravir vos papilles !
          </p>
        </div>
      </section>

      {/* Search barre section */}
      <section className="px-6 py-14 flex flex-col gap-10 items-center text-center max-w-4xl mx-auto">
        <div className="w-full flex items-center p-4 rounded-full border-2 border-[#FF69B4]">
          <Search className='text-[#FF69B4]'/>
          <input type="search" placeholder="Rechercher un dessert, un parfum..." aria-label='Barre de rechercher de dessert' className='w-full placeholder:ml-24 border-none ml-4 focus:outline-none'/>
        </div>  
      </section>

      {/* Section carousel cards */}
      <section className="px-6 py-14 flex flex-col gap-10 items-center text-center max-w-6xl mx-auto">
        {/* Carousels par type */}
        <CarouselParType image='/Birthday-fraise-cake.jpg' titre="Gâteaux" items={dessertData.gateaux} />
        <CarouselParType image='/Cheesecake-cupcakes.jpg' titre="Cupcakes" items={dessertData.cupcakes} />
        <CarouselParType image='/dessert-3.jpg' titre="Tartes" items={dessertData.tartes} />
        <CarouselParType image='/Macaronss.jpg' titre="Cookies" items={dessertData.cookies} />
        <CarouselParType image='/biscuit-3.jpg' titre="Crèmes glacées" items={dessertData.cremes} />
        <CarouselParType image='/glace-a-graine.jpg' titre="Crèmes glacées" items={dessertData.cremes} />
      </section>
    </main>
  )
}




// import React from "react";
// import { Search } from "lucide-react";
// import Image from "next/image";

// const desserts = {
//   gateaux: [
//     { name: "Fraisier Vanille", image: "/Birthday-fraise-cake.jpg", description: "Gâteau aux fraises fraîches et crème vanille" },
//     { name: "Choco-Amour", image: "/Cheesecake-brownies.jpg", description: "Gâteau chocolat fondant et cœur noisette" },
//     { name: "Tentation Fruits Rouges", image: "/dessert-3.jpg", description: "Biscuit moelleux aux fruits rouges" },
//     { name: "Caramel Beurre Salé", image: "/Birthday-fraise-cake.jpg", description: "Délice au caramel et génoise légère" },
//     { name: "Framboisier Crème Légère", image: "/Cheesecake-brownies.jpg", description: "Framboises fraîches et crème onctueuse" },
//     { name: "DyaChoco Mix", image: "/dessert-3.jpg", description: "Explosion de chocolats noirs et blancs" }
//   ],
//   cupcakes: [
//     { name: "Cupcake Fraise", image: "/Cheesecake-cupcakes.jpg", description: "Cupcake à la fraise et chantilly rose" },
//     { name: "Cupcake ChocoVanille", image: "/Cheesecake-cupcakes.jpg", description: "Mélange gourmand vanille-chocolat" },
//     { name: "Cupcake Praliné", image: "/Cheesecake-cupcakes.jpg", description: "Douceur au praliné et éclats de noisettes" },
//     { name: "Cupcake Mangue", image: "/Cheesecake-cupcakes.jpg", description: "Saveur fruitée et légère à la mangue" },
//     { name: "Cupcake Citron", image: "/Cheesecake-cupcakes.jpg", description: "Zeste de citron et cœur coulant" },
//     { name: "Cupcake Caramel", image: "/Cheesecake-cupcakes.jpg", description: "Caramel fondant et topping gourmand" }
//   ],
//   cookies: [
//     { name: "Cookie ChocoChunk", image: "/cookies.jpg", description: "Classique cookie au chocolat fondant" },
//     { name: "Cookie Avoine Raisin", image: "/cookies.jpg", description: "Avoine croustillante et raisins secs" },
//     { name: "Cookie Double Chocolat", image: "/cookies.jpg", description: "Chocolat noir et cacao intense" },
//     { name: "Cookie Noisette Caramel", image: "/cookies.jpg", description: "Noisettes croquantes et caramel beurre salé" },
//     { name: "Cookie Matcha", image: "/cookies.jpg", description: "Originalité du thé vert matcha" },
//     { name: "Cookie Coco Pépites", image: "/cookies.jpg", description: "Noix de coco râpée et chocolat" },
//     { name: "Cookie Cannelle Pomme", image: "/cookies.jpg", description: "Saveur automnale irrésistible" },
//     { name: "Cookie Vanille Brownie", image: "/cookies.jpg", description: "Fusion cookie et brownie moelleux" },
//     { name: "Cookie Oréo", image: "/cookies.jpg", description: "Topping de biscuits Oréo" },
//     { name: "Cookie Beurre d’Arachide", image: "/cookies.jpg", description: "Goût riche et onctueux" },
//     { name: "Cookie Confettis", image: "/cookies.jpg", description: "Festif avec éclats de sucre colorés" },
//     { name: "Cookie Miel Noix", image: "/cookies.jpg", description: "Alliance douce et croquante" }
//   ],
//   glaces: [
//     { name: "Vanille Bourbon", image: "/icecream.jpg", description: "Crème glacée vanille intense et douce" },
//     { name: "Chocolat Noir Intense", image: "/icecream.jpg", description: "Chocolat fondant à 70%" },
//     { name: "Fraise Chantilly", image: "/icecream.jpg", description: "Fraise fraîche et nuage de crème" },
//     { name: "Noix de Coco Glacée", image: "/icecream.jpg", description: "Saveur exotique et rafraîchissante" },
//     { name: "Menthe Chocolat", image: "/icecream.jpg", description: "Fraîcheur mentholée et éclats de chocolat" },
//     { name: "Café Moka", image: "/icecream.jpg", description: "Parfumé et légèrement corsé" },
//     { name: "Pistache Douce", image: "/icecream.jpg", description: "Subtil et crémeux" },
//     { name: "Mangue Passion", image: "/icecream.jpg", description: "Tropical et vitaminé" },
//     { name: "Framboise Sorbet", image: "/icecream.jpg", description: "Sans lait, ultra fruité" },
//     { name: "Caramel Fleur de Sel", image: "/icecream.jpg", description: "Gourmandise à l’état pur" },
//     { name: "Glace Banane Split", image: "/icecream.jpg", description: "Classique revisité avec amour" },
//     { name: "Châtaigne Douce", image: "/icecream.jpg", description: "Délicatesse automnale" }
//   ],
//   tartes: [
//     { name: "Tarte Fraise Basilic", image: "/tartes.jpg", description: "Fraises fraîches et touche d’herbe douce" },
//     { name: "Tarte Tatin", image: "/tartes.jpg", description: "Pommes caramélisées et pâte feuilletée" },
//     { name: "Tarte Citron Meringuée", image: "/tartes.jpg", description: "Acidulé et nuage sucré" },
//     { name: "Tarte Chocolat Noisette", image: "/tartes.jpg", description: "Ganache intense et croustillant" },
//     { name: "Tarte Framboise Amande", image: "/tartes.jpg", description: "Fruits rouges et frangipane" },
//     { name: "Tarte Poire Belle-Hélène", image: "/tartes.jpg", description: "Poire pochée et chocolat fondant" },
//     { name: "Tarte Pêche Lavande", image: "/tartes.jpg", description: "Subtil parfum floral et fruité" },
//     { name: "Tarte Choco Caramel", image: "/tartes.jpg", description: "Double gourmandise" },
//     { name: "Tarte Coco Mangue", image: "/tartes.jpg", description: "Alliance tropicale" },
//     { name: "Tarte Pistache Cerise", image: "/tartes.jpg", description: "Mariage original et sucré" },
//     { name: "Tarte Mûre Vanille", image: "/tartes.jpg", description: "Délicat et sucré" },
//     { name: "Tarte Avoine Banane", image: "/tartes.jpg", description: "Alternative saine et gourmande" }
//   ],
//   surprise: [
//     { name: "Mystère Dya #1", image: "/surprise.jpg", description: "Un dessert surprise, édition limitée !" },
//     { name: "Mystère Dya #2", image: "/surprise.jpg", description: "Une bouchée inédite chaque semaine" },
//     { name: "Mystère Dya #3", image: "/surprise.jpg", description: "Création exclusive selon saison" },
//     { name: "Mystère Dya #4", image: "/surprise.jpg", description: "Une fusion inattendue de saveurs" },
//     { name: "Mystère Dya #5", image: "/surprise.jpg", description: "Dessert expérimental à découvrir" },
//     { name: "Mystère Dya #6", image: "/surprise.jpg", description: "Gourmandise personnalisée selon humeur" },
//     { name: "Mystère Dya #7", image: "/surprise.jpg", description: "Recette secrète venue du cœur" },
//     { name: "Mystère Dya #8", image: "/surprise.jpg", description: "Combo unique selon inspiration" },
//     { name: "Mystère Dya #9", image: "/surprise.jpg", description: "Surprise à thème mensuel" },
//     { name: "Mystère Dya #10", image: "/surprise.jpg", description: "Gâteau mystère ultra créatif" },
//     { name: "Mystère Dya #11", image: "/surprise.jpg", description: "Fusion sucrée de l’imagination" },
//     { name: "Mystère Dya #12", image: "/surprise.jpg", description: "Inspiration de la semaine spéciale Dya" }
//   ]

// cookies: Array.from({ length: 12 }).map((_, i) => ({
//     name: `Cookie ${i + 1}`,
//     image: "/Cheesecake-brownies.jpg",
//     description: "Délicieux cookie croustillant et fondant"
//   })),
//   glaces: Array.from({ length: 12 }).map((_, i) => ({
//     name: `Glace ${i + 1}`,
//     image: "/dessert-3.jpg",
//     description: "Crème glacée onctueuse à savourer en été"
//   })),
//   tartes: Array.from({ length: 12 }).map((_, i) => ({
//     name: `Tarte ${i + 1}`,
//     image: "/Birthday-fraise-cake.jpg",
//     description: "Pâte croustillante et fruits frais"
//   })),
//   surprises: Array.from({ length: 12 }).map((_, i) => ({
//     name: `Surprise ${i + 1}`,
//     image: "/Cheesecake-cupcakes.jpg",
//     description: "Création exclusive signée Dya"
//   }))
// };

// export default function MenuPage() {
//   return (
//     <main className="min-h-screen bg-[#FFF8DC]">
//       {/* ...Recherche et Gâteaux + Cupcakes conservés... */}

//       {/* Cookies */}
//       <DessertSection category="🍪 Cookies" data={desserts.cookies} />

//       {/* Glaces */}
//       <DessertSection category="🍦 Glaces" data={desserts.glaces} />

//       {/* Tartes */}
//       <DessertSection category="🥧 Tartes" data={desserts.tartes} />

//       {/* Surprise Dya */}
//       <DessertSection category="✨ Surprise Dya" data={desserts.surprise} />
//     </main>
//   );
// }

// function DessertSection({ category, data }) {
//   return (
//     <section className="px-6 py-14 max-w-6xl mx-auto">
//       <h2 className="text-[#8B4513] text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10">{category}</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {data.map((dessert, i) => (
//           <div key={i} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
//             <div className="relative w-52 h-52 mb-4">
//               <Image src={dessert.image} alt={dessert.name} fill className="object-cover rounded-full" />
//             </div>
//             <h3 className="text-[#FF69B4] text-xl font-semibold mb-2">{dessert.name}</h3>
//             <p className="text-[#8B4513] text-sm lg:text-base leading-relaxed">{dessert.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }






// import React from "react";
// import { Search } from "lucide-react";
// import Image from "next/image";

// const desserts = {
//   gateaux: [
//     { name: "Fraisier Vanille", image: "/Birthday-fraise-cake.jpg", description: "Gâteau aux fraises fraîches et crème vanille" },
//     { name: "Choco-Amour", image: "/Cheesecake-brownies.jpg", description: "Gâteau chocolat fondant et cœur noisette" },
//     { name: "Tentation Fruits Rouges", image: "/dessert-3.jpg", description: "Biscuit moelleux aux fruits rouges" },
//     { name: "Caramel Beurre Salé", image: "/Birthday-fraise-cake.jpg", description: "Délice au caramel et génoise légère" },
//     { name: "Framboisier Crème Légère", image: "/Cheesecake-brownies.jpg", description: "Framboises fraîches et crème onctueuse" },
//     { name: "DyaChoco Mix", image: "/dessert-3.jpg", description: "Explosion de chocolats noirs et blancs" }
//   ],
//   cupcakes: [
//     { name: "Cupcake Fraise", image: "/Cheesecake-cupcakes.jpg", description: "Cupcake à la fraise et chantilly rose" },
//     { name: "Cupcake ChocoVanille", image: "/Cheesecake-cupcakes.jpg", description: "Mélange gourmand vanille-chocolat" },
//     { name: "Cupcake Praliné", image: "/Cheesecake-cupcakes.jpg", description: "Douceur au praliné et éclats de noisettes" },
//     { name: "Cupcake Mangue", image: "/Cheesecake-cupcakes.jpg", description: "Saveur fruitée et légère à la mangue" },
//     { name: "Cupcake Citron", image: "/Cheesecake-cupcakes.jpg", description: "Zeste de citron et cœur coulant" },
//     { name: "Cupcake Caramel", image: "/Cheesecake-cupcakes.jpg", description: "Caramel fondant et topping gourmand" }
//   ]
// };

// export default function MenuPage() {
//   return (
//     <main className="min-h-screen bg-[#FFF8DC]">
//       {/* Barre de recherche stylée */}
//       <section className="px-6 py-14 flex flex-col gap-8 items-center text-center max-w-4xl mx-auto">
//         <h2 className="text-[#FF69B4] text-2xl sm:text-3xl lg:text-4xl font-bold">Trouver votre douceur idéale</h2>
//         <div className="w-full flex items-center gap-4 bg-white p-4 rounded-full border-2 border-[#FF69B4] shadow-sm focus-within:ring-2 ring-[#FF69B4]">
//           <Search className="text-[#FF69B4] w-5 h-5" />
//           <input
//             type="search"
//             placeholder="Rechercher un dessert, un parfum..."
//             aria-label="Barre de recherche de dessert"
//             className="w-full text-sm sm:text-base outline-none placeholder:text-[#FFB6C1]"
//           />
//         </div>
//       </section>

//       {/* Gâteaux */}
//       <section className="px-6 py-14 max-w-6xl mx-auto">
//         <h2 className="text-[#8B4513] text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10">🎂 Gâteaux</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {desserts.gateaux.map((dessert, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
//               <div className="relative w-52 h-52 mb-4">
//                 <Image src={dessert.image} alt={dessert.name} fill className="object-cover rounded-full" />
//               </div>
//               <h3 className="text-[#FF69B4] text-xl font-semibold mb-2">{dessert.name}</h3>
//               <p className="text-[#8B4513] text-sm lg:text-base leading-relaxed">{dessert.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Cupcakes */}
//       <section className="px-6 py-14 max-w-6xl mx-auto">
//         <h2 className="text-[#8B4513] text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10">🧁 Cupcakes</h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {desserts.cupcakes.map((dessert, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
//               <div className="relative w-52 h-52 mb-4">
//                 <Image src={dessert.image} alt={dessert.name} fill className="object-cover rounded-full" />
//               </div>
//               <h3 className="text-[#FF69B4] text-xl font-semibold mb-2">{dessert.name}</h3>
//               <p className="text-[#8B4513] text-sm lg:text-base leading-relaxed">{dessert.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }


/**MON ANCIEN A PROPOS
 * 
 * 
 * 

// export default function AproposPage() {
//   return (
//     <main className='min-h-screen bg-[#FFF8DC]'>

//       {/* section notre histoire 
//       <section className='max-w-6xl mx-auto px-6 py-14'>
//         <Card className='bg-[#fdebec] p-10 flex flex-col items-center justify-center shadow-[#E8B4B8] border-none'>
//           <h1 className='dancing_script text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#FF69B4]'>Notre Histoire</h1>
//           <p className="text-[#8B4513] text-base sm:text-lg lg:text-xl text-center leading-relaxed max-w-lg mx-auto lg:mx-0">Découvrez l'univers passionné de Croq'Dya, où chaque création raconte une histoire d'amour pour la pâtisserie française</p>
//         </Card>
//       </section>

//       {/* L'Aventure Croq'Dya 
//       <section className='max-w-6xl mx-auto px-6 py-14'>
//         <div className="flex flex-col md:flex-row items-center justify-center gap-10">
//           <Card className='flex-1 md:flex-2 bg-white p-10 text-[#8B4513] shadow-[#FEFEFE] border-none'>
//             <h2 className="text-[#FF69B4] dancing_script text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight dancing_script">L'Aventure Croq'Dya</h2>
//             <p>Tout a commencé en 2018 dans une petite cuisine parisienne, où Emma et Thomas, passionnés de pâtisserie depuis l'enfance, ont décidé de transformer leur rêve en réalité. Inspirés par les recettes de grand-mère et les techniques modernes, ils ont créé Croq'Dya avec une mission simple : rendre la gourmandise accessible à tous.</p>
//             <div className="story-highlight">
//               <p className='italic'>"Chaque gâteau que nous créons porte en lui l'amour et la passion que nous avons pour notre métier. Nous ne faisons pas que de la pâtisserie, nous créons des moments de bonheur."</p>
//               <span className='font-bold italic'>- Emma & Thomas, Fondateurs</span>
//             </div>
//             <p>Aujourd'hui, Croq'Dya c'est une équipe de 12 artisans passionnés, un atelier moderne au cœur de Paris, et plus de 10 000 clients qui nous font confiance pour leurs moments les plus précieux. De l'anniversaire d'enfant au mariage de rêve, nous mettons notre savoir-faire au service de vos émotions.</p>
//           </Card>
//           <Card className='flex-1 bg-[#E8B4B8] p-10 shadow-[#FEFEFE] border-none'>
//             <div className="flex flex-col items-center gap-20 underline text-[#8B4513]">
//               <h3 className='flex items-center dancing_script text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight dancing_script'>
//                 <span>Chef Dya</span>
//                 <CakeSlice/></h3>
//               <div className="flex gap-4">
//                 <ChefHat className="w-40 h-40 text-[#8B4513]" />
//                 <Cake className="w-40 h-40 text-[#8B4513]"/>
//               </div>
//             </div>
//           </Card>          
//         </div>
//       </section>
      
//       {/* Nos Valeurs 
//       <section className='max-w-6xl mx-auto px-6 py-14'>
//         <Card className='flex-1 p-10 shadow-[#FFF8DC] border-none'>
//           <h2 className='text-[#FF69B4] py-6 text-center dancing_script text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>Nos Valeurs</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             <div className="bg-[#FFF8DC] flex flex-col items-center gap-6 p-4 hover:border-2 hover:border-[#FF69B4] hover:scale-105 rounded-2xl">
//               <div className="flex gap-8 text-[#FF69B4]">
//                 <Recycle className="w-20 h-20" />
//               </div>
//               <h3 className='dancing_script text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#FF69B4]'>Durabilité</h3>
//               <p className='text-center'>Nous privilégions les circuits courts, les producteurs locaux et les ingrédients biologiques. Notre engagement pour la planète se reflète dans chaque création.</p>
//             </div>
//             <div className="bg-[#FFF8DC] flex flex-col items-center gap-6 p-4 hover:border-2 hover:border-[#FF69B4] hover:scale-105 rounded-2xl">
//               <div className="flex gap-8 text-[#FF69B4]">
//                 <Heart className="w-20 h-20 fill-[#FF69B4] text-[#FF69B4]" />
//               </div>
//               <h3 className='dancing_script text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#FF69B4]'>Passion</h3>
//               <p className='text-center'>Chaque geste, chaque recette, chaque décoration est pensée avec amour. La passion est l'ingrédient secret qui rend nos créations si particulières.</p>
//             </div>
//             <div className="bg-[#FFF8DC] flex flex-col items-center gap-6 p-4 hover:border-2 hover:border-[#FF69B4] hover:scale-105 rounded-2xl">
//               <div className="flex gap-8 text-[#FF69B4]">
//                 <Sparkle className="w-20 h-20" />
//               </div>
//               <h3 className='dancing_script text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#FF69B4]'>Excellence</h3>
//               <p className='text-center'>Nous nous perfectionnons chaque jour pour vous offrir le meilleur. Qualité des ingrédients, techniques raffinées, présentation soignée.</p>
//             </div>
//             <div className="bg-[#FFF8DC] flex flex-col items-center gap-6 p-4 hover:border-2 hover:border-[#FF69B4] hover:scale-105 rounded-2xl">
//               <div className="flex gap-8 text-[#FF69B4]">
//                 <Handshake className="w-20 h-20" />
//               </div>
//               <h3 className='dancing_script text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#FF69B4]'>Proximité</h3>
//               <p className='text-center'>Nous croyons en la relation humaine. Chaque client est unique et mérite une attention personnalisée pour réaliser ses rêves gourmands.</p>
//             </div>
//           </div>
//         </Card>
//       </section>

//       {/* Nos Récompenses
//       <section className='max-w-6xl mx-auto px-6 py-14'>
//         <Card className='bg-[#fdebec] shadow-[#E8B4B8] border-none p-10 flex flex-col items-center justify-center text-white'>
//           <h2 className='text-[#FF69B4] py-6 text-center dancing_script text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>Nos Valeurs</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//             <div className="flex flex-col gap-4 items-center bg-white p-8 rounded-2xl">
//               <Trophy className='h-10 w-10 text-[#8B4513]'/>
//               <h3 className='text-[#FF69B4] dancing_script text-xl font-bold'>Meilleur Pâtissier Abidjan</h3>
//               <span className="text-[#8B4513]">Le Figaro - 2023</span>
//             </div>

//             <div className="flex flex-col gap-4 items-center bg-white p-8 rounded-2xl">
//               <Medal className='h-10 w-10 text-[#8B4513]'/>
//               <h3 className='text-[#FF69B4] dancing_script text-xl font-bold'>Prix Innovation Dessert</h3>
//               <span className="text-[#8B4513]">Salon du Chocolat - 2022</span>
//             </div>

//             <div className="flex flex-col gap-4 items-center bg-white p-8 rounded-2xl">
//               <Star className='h-10 w-10 text-[#8B4513]'/>
//               <h3 className='text-[#FF69B4] dancing_script text-xl font-bold'>5 étoiles TripAdvisor</h3>
//               <span className="text-[#8B4513]">Excellence Client - 2023</span>
//             </div>

//             <div className="flex flex-col gap-4 items-center bg-white p-8 rounded-2xl">
//               <Sprout className='h-10 w-10 text-[#8B4513]'/>
//               <h3 className='text-[#FF69B4] dancing_script text-xl font-bold'>Label Éco-Responsable</h3>
//               <span className="text-[#8B4513]">Ville d'Abidjan - 2023</span>
//             </div>
//           </div>
//         </Card>
//       </section>

//       {/* Rejoignez l'Aventure
//       <section className='max-w-6xl mx-auto px-6 py-14'>
//         <Card className='about-card p-10 flex flex-col items-center justify-center text-white'>
//           <h2 className='dancing_script text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>Rejoignez l'Aventure</h2>
//           <p className="text-base sm:text-lg lg:text-xl text-center leading-relaxed max-w-lg mx-auto lg:mx-0">Découvrez nos créations et laissez-vous emporter par la magie de Croq'Dya</p>
//           <div className="flex gap-10">
//             <Link href={"/menu"} className='bg-white p-4 rounded-2xl flex items-center gap-1'>
//               <span className='text-[#FF69B4]'><CakeSlice/></span>
//               <span className='text-[#FF69B4] quicksand'>Découvrir le Menu</span>
//             </Link>
//             <Link href={"/contact"} className='border-2 border-white p-4 rounded-2xl flex items-center gap-1'>
//               <span className='text-white'><Phone/></span>
//               <span className='text-white quicksand'>Nous Contacter</span>
//             </Link>
//           </div>
//         </Card>
//       </section>
//     </main>
//   )
// }

 */