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

export default Recommandation


// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// function Recommandation() {
//     return (
//         <section className="max-w-6xl mx-auto px-6 py-14 mt-10 shadow-md shadow-[#FFF8DC] border-none">
//           <h2 className="text-[#FF69B4] text-center dancing_script text-4xl lg:text-5xl font-bold mb-10">Vous aimerez aussi</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm">
//               <div className="relative w-52 h-52 mb-4 flex items-center justify-center">
//                 <Image
//                   src="/Creamy-coconut.jpg"
//                   alt="Gâteau d'anniversaire aux fraises"
//                   fill
//                   className="object-cover rounded-full shadow-2xl animate-float"
//                   priority
//                 />
//               </div>
//               <div className="flex flex-col gap-4 justify-self-start">
//                 <h3 className="text-xl text-[#FF69B4]">Opéra Chocolat</h3>
//                 <span className="self-start text-[#8B4513]">28,50 €</span>
//                 <Link href={"/dessert/1"} className="bg-[#FF69B4] text-white font-bold p-2 rounded-2xl cursor-pointer hover:bg-pink-500 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">Voir le produit</Link>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm">
//               <div className="relative w-52 h-52 mb-4 flex items-center justify-center">
//                 <Image
//                   src="/Delicious-vegan-valentine’s-day-desserts.jpg"
//                   alt="Gâteau d'anniversaire aux fraises"
//                   fill
//                   className="object-cover rounded-full shadow-2xl animate-float"
//                   priority
//                 />
//               </div>
//               <div className="flex flex-col gap-4 justify-self-start">
//                 <h3 className="text-xl text-[#FF69B4]">Coco Passion</h3>
//                 <span className="self-start text-[#8B4513]">26,90 €</span>
//                 <Link href={"/dessert/1"} className="bg-[#FF69B4] text-white font-bold p-2 rounded-2xl cursor-pointer hover:bg-pink-500 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">Voir le produit</Link>
//               </div>
//             </div>
//             <div className="bg-white p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm">
//               <div className="relative w-52 h-52 mb-4 flex items-center justify-center">
//                 <Image
//                   src="/Orange-cake.jpg"
//                   alt="Gâteau d'anniversaire aux fraises"
//                   fill
//                   className="object-cover rounded-full shadow-2xl animate-float"
//                   priority
//                 />
//               </div>
//               <div className="flex flex-col gap-4 justify-self-start">
//                 <h3 className="text-xl text-[#FF69B4]">Tarte au Citron</h3>
//                 <span className="self-start text-[#8B4513]">24,90 €</span>
//                 <Link href={"/dessert/1"} className="bg-[#FF69B4] text-white font-bold p-2 rounded-2xl cursor-pointer hover:bg-pink-500 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">Voir le produit</Link>
//               </div>
//             </div>
//           </div>
//         </section>
//   )
// }

// export default Recommandation