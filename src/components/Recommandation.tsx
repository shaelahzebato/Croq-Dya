import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Recommandation() {
  const produits = [
    {
      id: 1,
      title: 'Opéra Chocolat',
      price: '28,50 €',
      img: '/Creamy-coconut.jpg',
      href: '/dessert/1',
    },
    {
      id: 2,
      title: 'Coco Passion',
      price: '26,90 €',
      img: '/Delicious-vegan-valentine’s-day-desserts.jpg',
      href: '/dessert/2',
    },
    {
      id: 3,
      title: 'Tarte au Citron',
      price: '24,90 €',
      img: '/Orange-cake.jpg',
      href: '/dessert/3',
    },
  ]

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 mt-12">
      <h2 className="text-[#FF69B4] text-center dancing_script text-4xl lg:text-5xl font-bold mb-10">
        Vous aimerez aussi
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {produits.map((produit) => (
          <div
            key={produit.id}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300 text-center flex flex-col items-center"
          >
            <div className="relative w-44 h-44 mb-4">
              <Image
                src={produit.img}
                alt={produit.title}
                fill
                className="object-cover rounded-full shadow-2xl animate-float"
              />
            </div>

            <h3 className="text-xl font-semibold text-[#FF69B4]">{produit.title}</h3>
            <span className="text-[#8B4513] font-medium mt-1">{produit.price}</span>

            <Link
              href={produit.href}
              className="mt-4 inline-block bg-[#FF69B4] text-white font-semibold py-2 px-6 rounded-2xl hover:bg-pink-500 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-lg"
            >
              Voir le produit
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Recommandation;