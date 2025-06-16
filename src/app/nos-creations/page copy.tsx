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
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px]">
              <Image
                src="/Birthday-fraise-cake.jpg"
                alt="Gâteau d'anniversaire aux fraises"
                fill
                className="object-cover rounded-full shadow-2xl animate-float"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
            </div>
            <h2 className="text-[#8B4513] text-lg sm:text-xl lg:text-2xl font-semibold">Gâteaux</h2>
          </div>
          <Link href={"/"}>🎂 Explorez toutes nos créations</Link>
        </div>
        {/* Carousel */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px]">
              <Image
                src="/Cheesecake-cupcakes.jpg"
                alt="Gâteau d'anniversaire aux fraises"
                fill
                className="object-cover rounded-full shadow-2xl animate-float"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
            </div>
            <h2 className="text-[#8B4513] text-lg sm:text-xl lg:text-2xl font-semibold">Cupcakes</h2>
          </div>
          <Link href={"/"}>🧁 Explorez toutes nos créations</Link>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px]">
              <Image
                src="/dessert-3.jpg"
                alt="Gâteau d'anniversaire aux fraises"
                fill
                className="object-cover rounded-full shadow-2xl animate-float"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
            </div>
            <h2 className="text-[#8B4513] text-lg sm:text-xl lg:text-2xl font-semibold">Tartes</h2>
          </div>
          <Link href={"/"}>🥧 Explorez toutes nos créations</Link>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px]">
              <Image
                src="/Macaronss.jpg"
                alt="Gâteau d'anniversaire aux fraises"
                fill
                className="object-cover rounded-full shadow-2xl animate-float"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
            </div>
            <h2 className="text-[#8B4513] text-lg sm:text-xl lg:text-2xl font-semibold">Macarons</h2>
          </div>
          <Link href={"/"}>🍥 Explorez toutes nos créations</Link>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px]">
              <Image
                src="/biscuit-3.jpg"
                alt="Gâteau d'anniversaire aux fraises"
                fill
                className="object-cover rounded-full shadow-2xl animate-float"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
            </div>
            <h2 className="text-[#8B4513] text-lg sm:text-xl lg:text-2xl font-semibold">Cookies</h2>
          </div>
          <Link href={"/"}>🍪 Explorez toutes nos créations</Link>
        </div>

        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-6 text-left">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[90px] lg:h-[90px]">
              <Image
                src="/glace-a-graine.jpg"
                alt="Gâteau d'anniversaire aux fraises"
                fill
                className="object-cover rounded-full shadow-2xl animate-float"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
            </div>
            <h2 className="text-[#8B4513] text-lg sm:text-xl lg:text-2xl font-semibold">Crême glacée</h2>
          </div>
          <Link href={"/"}>🍦 Explorez toutes nos créations</Link>
        </div>

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
