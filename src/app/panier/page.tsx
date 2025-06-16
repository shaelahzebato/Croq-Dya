"use client";

import Recommandation from "@/components/Recommandation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Minus,
  Plus,
  ShoppingBagIcon,
  Trash2,
} from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

type CartItem = {
  key: string;
  title: string;
  desc: string;
  size?: string;
  packaging?: string;
  flavors?: string;
  message?: string;
  price: number;
  image: string;
};

export default function PanierPage() {
  const [quantities, setQuantities] = useState<Record<string, number>>({
    fraisier: 1,
    rainbow: 1,
    macarons: 1,
  });

  const updateQty = (key: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [key]: Math.max(1, (prev[key] ?? 1) + delta),
    }));
  };

  const items: CartItem[] = [
    {
      key: "fraisier",
      title: "Fraisier Royal",
      desc: "Biscuit génoise, crème vanille, fraises fraîches",
      size: "6 personnes",
      message: '“Joyeux Anniversaire Marie !”',
      price: 42.9,
      image: "/Birthday-fraise-cake.jpg",
    },
    {
      key: "rainbow",
      title: "Rainbow Cupcakes",
      desc: "Cupcakes arc-en-ciel, boîte de 6",
      size: "Box de 6",
      packaging: "Boîte cadeau",
      price: 42.9,
      image: "/Rainbow-cupcakes.jpg",
    },
    {
      key: "macarons",
      title: "Assortiment Macarons",
      desc: "12 parfums variés, écrin élégant",
      flavors: "Vanille, Chocolat, Framboise, Pistache",
      price: 42.9,
      image: "/Macaron-fraise.jpg",
    },
  ];

  const subTotal = items.reduce((acc, item) => {
    const qty = quantities[item.key] ?? 1;
    return acc + qty * item.price;
  }, 0);

  const promo = subTotal * 0.1;
  const deliveryFee = 4.9;
  const total = subTotal - promo + deliveryFee;

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-14 space-y-8">
        <header className="text-center space-y-2">
          <h1 className="dancing_script text-5xl text-[#FF69B4] font-bold">
            Mon Panier Gourmand
          </h1>
          <p className="text-[#8B4513] text-lg">
            Finalisez votre commande de délicieuses créations.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Panier */}
          <div className="flex-1 bg-white p-6 rounded-2xl space-y-6 shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="dancing_script text-2xl text-[#FF69B4] font-bold">
                Mes Sélections ({items.length} articles)
              </h2>
              <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50">
                <Trash2 className="mr-2 h-4 w-4" />
                Vider le panier
              </Button>
            </div>

            {items.map((item) => (
              <div key={item.key} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-2xl text-[#FF69B4] font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-[#8B4513]">{item.desc}</p>
                    {item.size && (
                      <p>
                        <strong>Taille :</strong> {item.size}
                      </p>
                    )}
                    {item.packaging && (
                      <p>
                        <strong>Emballage :</strong> {item.packaging}
                      </p>
                    )}
                    {item.flavors && (
                      <p>
                        <strong>Parfums :</strong> {item.flavors}
                      </p>
                    )}
                    {item.message && (
                      <p>
                        <strong>Message :</strong> {item.message}
                      </p>
                    )}

                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2 bg-[#FFF8DC] px-4 py-2 rounded-full">
                        <button
                          onClick={() => updateQty(item.key, -1)}
                          className="bg-white p-2 rounded-full text-pink-500 hover:bg-[#FFB6C1]"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-lg font-bold text-[#8B4513]">
                          {quantities[item.key]}
                        </span>
                        <button
                          onClick={() => updateQty(item.key, +1)}
                          className="bg-white p-2 rounded-full text-pink-500 hover:bg-[#FFB6C1]"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <span className="text-pink-600 font-bold text-2xl">
                        {(quantities[item.key] * item.price).toFixed(2)} €
                      </span>
                      <button className="ml-auto text-[#8B4513] hover:text-pink-600 transition">
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-[2px] bg-[#FF69B4]" />
              </div>
            ))}
          </div>

          {/* Récapitulatif */}
          <aside className="lg:w-[360px] bg-white p-6 rounded-2xl shadow-md space-y-6">
            <h2 className="dancing_script text-3xl text-[#FF69B4] font-bold">Récapitulatif</h2>

            <div className="space-y-4">
              <div>
                <Label className="text-[#8B4513] font-medium">Code promo</Label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    placeholder="CROQDYA10"
                    className="flex-1 px-4 py-2 border-2 border-pink-500 rounded-lg"
                  />
                  <Button className="bg-pink-400 hover:bg-pink-500 text-white">
                    Appliquer
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{subTotal.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span>Remise</span>
                  <span className="text-green-600">- {promo.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>{deliveryFee.toFixed(2)} €</span>
                </div>
                <div className="h-[2px] bg-[#FF69B4]" />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>{total.toFixed(2)} €</span>
                </div>
              </div>

              {/* Mode livraison */}
              <div className="space-y-3">
                <p className="font-medium">Mode de livraison :</p>
                <div className="flex items-start gap-3 p-4 border-2 border-pink-500 rounded-lg">
                  <Checkbox id="home" />
                  <div>
                    <Label htmlFor="home" className="font-semibold text-[#8B4513]">
                      🚚 Livraison à domicile
                    </Label>
                    <p>Demain entre 14h‑18h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 border-2 border-pink-500 rounded-lg">
                  <Checkbox id="click" />
                  <div>
                    <Label htmlFor="click" className="font-semibold text-[#8B4513]">
                      🏪 Click & Collect
                    </Label>
                    <p>Retrait dès 2h</p>
                  </div>
                </div>
              </div>

              <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF69B4] to-[#FF4D6D] text-white py-3 rounded-xl hover:-translate-y-1 hover:shadow-lg transition">
                <ShoppingBagIcon size={20} /> Finaliser la commande
              </Button>
              <p className="text-center text-xs text-gray-500">🔒 Paiement 100 % sécurisé SSL</p>
            </div>
          </aside>
        </div>
      </section>

      <Recommandation />
    </>
  );
}







// "use client";
// import Recommandation from "@/components/Recommandation";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import {
//   Check,
//   Minus,
//   Plus,
//   ShoppingBagIcon,
//   Trash2,
// } from "lucide-react";
// import Image from "next/image";
// import React, { useState } from "react";

// export default function PanierPage() {
//   const [quantities, setQuantities] = useState({
//     fraisier: 1,
//     rainbow: 1,
//     macarons: 1,
//   });

//   const updateQty = (key: keyof typeof quantities, delta: number) => {
//     setQuantities((q) => ({
//       ...q,
//       [key]: Math.max(1, q[key] + delta),
//     }));
//   };

//   const items = [
//     {
//       key: "fraisier",
//       title: "Fraisier Royal",
//       desc: "Biscuit génoise, crème vanille, fraises fraîches",
//       size: "6 personnes",
//       price: 42.9,
//       image: "/Birthday-fraise-cake.jpg",
//       message: '“Joyeux Anniversaire Marie !”',
//     },
//     {
//       key: "rainbow",
//       title: "Rainbow Cupcakes",
//       desc: "Cupcakes arc-en-ciel, boîte de 6",
//       size: "Box de 6",
//       packaging: "Boîte cadeau",
//       price: 42.9,
//       image: "/Rainbow-cupcakes.jpg",
//     },
//     {
//       key: "macarons",
//       title: "Assortiment Macarons",
//       desc: "12 parfums variés, écrin élégant",
//       flavors: "Vanille, Chocolat, Framboise, Pistache",
//       price: 42.9,
//       image: "/Macaron-fraise.jpg",
//     },
//   ];

//   const subTotal = Object.entries(quantities).reduce((acc, [k, qty]) => {
//     const item = items.find((i) => i.key === k);
//     return acc + (item?.price || 0) * qty;
//   }, 0);
//   const promo = subTotal * 0.1;
//   const deliveryFee = 4.9;
//   const total = subTotal - promo + deliveryFee;

//   return (
//     <>
//       <section className="max-w-6xl mx-auto px-6 py-14 space-y-8">
//         <header className="space-y-2 text-center">
//           <h1 className="dancing_script text-5xl text-[#FF69B4] font-bold">
//             Mon Panier Gourmand
//           </h1>
//           <p className="text-[#8B4513] text-lg">
//             Finalisez votre commande de délicieuses créations.
//           </p>
//         </header>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Liste produits */}
//           <div className="flex-1 bg-white p-6 rounded-2xl space-y-6 shadow-md">
//             <div className="flex items-center justify-between">
//               <h2 className="dancing_script text-2xl text-[#FF69B4] font-bold">
//                 Mes Sélections ({items.length} articles)
//               </h2>
//               <Button className="rounded-full px-4 py-2 border border-pink-600 text-pink-600 hover:bg-pink-50 transition">
//                 <Trash2 size={18} /> Vider le panier
//               </Button>
//             </div>
//             {items.map((item) => (
//               <div key={item.key} className="space-y-4">
//                 <div className="flex gap-4 items-center">
//                   <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-2xl overflow-hidden shadow-lg">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="flex-1 space-y-2">
//                     <h3 className="text-2xl text-[#FF69B4] font-semibold">
//                       {item.title}
//                     </h3>
//                     <p className="text-[#8B4513]">{item.desc}</p>
//                     {item.size && (
//                       <p>
//                         <span className="font-medium">Taille :</span> {item.size}
//                       </p>
//                     )}
//                     {item.packaging && (
//                       <p>
//                         <span className="font-medium">Emballage :</span> {item.packaging}
//                       </p>
//                     )}
//                     {item.flavors && (
//                       <p>
//                         <span className="font-medium">Parfums :</span> {item.flavors}
//                       </p>
//                     )}

//                     <div className="flex items-center gap-4">
//                       <div className="flex items-center gap-2 bg-[#FFF8DC] px-4 py-2 rounded-full">
//                         <button
//                           onClick={() => updateQty(item.key, -1)}
//                           className="bg-white p-2 rounded-full text-pink-500 hover:bg-[#FFB6C1]"
//                         >
//                           <Minus size={16} />
//                         </button>
//                         <span className="text-lg font-bold text-[#8B4513]">
//                           {quantities[item.key]}
//                         </span>
//                         <button
//                           onClick={() => updateQty(item.key, +1)}
//                           className="bg-white p-2 rounded-full text-pink-500 hover:bg-[#FFB6C1]"
//                         >
//                           <Plus size={16} />
//                         </button>
//                       </div>
//                       <span className="text-pink-600 font-bold text-2xl">
//                         {(quantities[item.key] * item.price).toFixed(2)} €
//                       </span>
//                       <button className="ml-auto text-[#8B4513] hover:text-pink-600 transition">
//                         <Trash2 size={20} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="h-[2px] bg-[#FF69B4]" />
//               </div>
//             ))}
//           </div>

//           {/* Récapitulatif */}
//           <aside className="lg:w-[360px] bg-white p-6 rounded-2xl shadow-md space-y-6">
//             <h2 className="dancing_script text-3xl text-[#FF69B4] font-bold">
//               Récapitulatif
//             </h2>

//             <div className="space-y-4">
//               <div>
//                 <Label className="text-[#8B4513] font-medium">Code promo</Label>
//                 <div className="flex gap-2 mt-1">
//                   <input
//                     type="text"
//                     placeholder="CROQDYA10"
//                     className="flex-1 px-4 py-2 border-2 border-pink-500 rounded-lg"
//                   />
//                   <Button className="bg-pink-400 hover:bg-pink-500 text-white">
//                     Appliquer
//                   </Button>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span>Sous-total ({items.length} articles)</span>
//                   <span>{subTotal.toFixed(2)} €</span>
//                 </div>
//                 <div className="h-[2px] bg-[#FF69B4]" />
//                 <div className="flex justify-between">
//                   <span>Remise</span>
//                   <span className="text-green-600">- {promo.toFixed(2)} €</span>
//                 </div>
//                 <div className="h-[2px] bg-[#FF69B4]" />
//               </div>

//               {/* Choix de livraison */}
//               <div className="space-y-3">
//                 <span className="font-medium">Mode de livraison :</span>
//                 <div className="flex items-start gap-3 p-4 border-2 border-pink-500 rounded-lg">
//                   <Checkbox />
//                   <div>
//                     <h3 className="font-semibold text-[#8B4513]">🚚 Livraison à domicile</h3>
//                     <p>Demain entre 14h‑18h – 4,90 €</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3 p-4 border-2 border-pink-500 rounded-lg">
//                   <Checkbox />
//                   <div>
//                     <h3 className="font-semibold text-[#8B4513]">🏪 Click & Collect</h3>
//                     <p>Retrait dès 2h – Gratuit</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span>Total</span>
//                   <span className="font-bold">{total.toFixed(2)} €</span>
//                 </div>
//                 <div className="h-[2px] bg-[#FF69B4]" />
//               </div>

//               <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF69B4] to-[#FF4D6D] text-white py-3 rounded-xl hover:-translate-y-1 hover:shadow-lg transition">
//                 <ShoppingBagIcon size={20} /> Finaliser la commande
//               </Button>
//               <p className="text-center text-xs text-gray-500">🔒 Paiement 100 % sécurisé SSL</p>
//             </div>
//           </aside>
//         </div>
//       </section>

//       <Recommandation />
//     </>
//   );
// }






// "use client"

// import Recommandation from '@/components/Recommandation'
// import { Button } from '@/components/ui/button'
// import { Checkbox } from '@/components/ui/checkbox'
// import { Label } from '@/components/ui/label'
// import { Check, Minus, Plus, ShoppingBagIcon, Trash2 } from 'lucide-react'
// import Image from 'next/image'
// import React, { useState } from 'react'

// export default function PanierPage() {
//     const [quantity, setQuantity] = useState(1);
  
//     const increment = () => setQuantity((prev) => prev + 1);
//     const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
//   return (
//     <>
//       <section className="max-w-6xl mx-auto px-6 py-14">
//         <h1 className="dancing_script text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FF69B4] mb-4 text-center">Mon Panier Gourmand</h1>
//         <p className="text-[#8B4513] text-base sm:text-lg lg:text-xl max-w-lg mx-auto leading-relaxed">
//           Finalisez votre commande de délicieuses créations
//         </p>
//         <div className="flex flex-col lg:flex-row gap-4">
//           <div className="lg:flex-2 bg-white p-4 rounded-2xl">
//             <div className="flex justify-between">
//               <h2 className="dancing_script text-[#FF69B4] text-3xl font-bold leading-tight">
//                 Mes Sélections (3 articles)
//               </h2>
//               <Button className='bg-white text-pink-600 border border-pink-600 rounded-full px-6 hover:bg-pink-50 hover:scale-105 transition- cursor-pointer'>
//                 <Trash2 className='text-[#8B4513] size-5'/> Vider le panier
//               </Button>
//             </div>
//             <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
//             <div className="flex flex-col gap-6">
//               <div className="flex gap-4">
//                 <div className="relative w-30 h-30 sm:w-46 sm:h-46 lg:w-[150px] lg:h-[150px]">
//                   <Image
//                     src="/Birthday-fraise-cake.jpg"
//                     alt="Gâteau d'anniversaire aux fraises"
//                     fill
//                     className="object-cover rounded-2xl shadow-2xl"
//                     priority
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <h2 className='text-[#FF69B4] text-2xl'>Fraisier Royal</h2>
//                   <p className='text-[#8B4513]'>Biscuit génoise, crème pâtissière vanille, fraises fraîches</p>
//                   <div className="flex gap-2">
//                     <span className='text-[#8B4513] font-bold'>Taille : </span>
//                     <span className='text-[#8B4513]'>6 personnes</span>
//                   </div>
//                   <div className="flex gap-2">
//                     <span className='text-[#8B4513] font-bold'>Message : </span>
//                     <span className='text-[#8B4513]'>"Joyeux Anniversaire Marie !"</span>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-2 bg-[#FFF8DC] px-4 py-2 rounded-full">
//                       <button
//                         onClick={decrement}
//                         className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
//                       >
//                         <Minus size={16} />
//                       </button>
//                       <span className="text-lg font-bold px-2 text-[#8B4513]">{quantity}</span>
//                       <button
//                         onClick={increment}
//                         className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
//                       >
//                         <Plus size={16} />
//                       </button>
//                     </div>
//                     <span className='text-pink-500 font-bold text-2xl'>42,90 €</span>
//                     <Trash2 className='text-[#8B4513] size-5'/>
//                   </div>
//                 </div>
//               </div>
//               <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
//               <div className="flex gap-4">
//                 <div className="relative w-30 h-30 sm:w-46 sm:h-46 lg:w-[150px] lg:h-[150px]">
//                   <Image
//                     src="/Birthday-fraise-cake.jpg"
//                     alt="Gâteau d'anniversaire aux fraises"
//                     fill
//                     className="object-cover rounded-2xl shadow-2xl"
//                     priority
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <h2 className='text-[#FF69B4] text-2xl'>Rainbow Cupcakes</h2>
//                   <p className='text-[#8B4513]'>Cupcakes colorés avec glaçage arc-en-ciel</p>
//                   <div className="flex gap-2">
//                     <span className='text-[#8B4513] font-bold'>Quantité : </span>
//                     <span className='text-[#8B4513]'>Box de 6</span>
//                   </div>
//                   <div className="flex gap-2">
//                     <span className='text-[#8B4513] font-bold'>Emballage : </span>
//                     <span className='text-[#8B4513]'>Boîte cadeau</span>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-2 bg-[#FFF8DC] px-4 py-2 rounded-full">
//                       <button
//                         onClick={decrement}
//                         className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
//                       >
//                         <Minus size={16} />
//                       </button>
//                       <span className="text-lg font-bold px-2 text-[#8B4513]">{quantity}</span>
//                       <button
//                         onClick={increment}
//                         className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
//                       >
//                         <Plus size={16} />
//                       </button>
//                     </div>
//                     <span className='text-pink-500 font-bold text-2xl'>42,90 €</span>
//                     <Trash2 className='text-[#8B4513] size-5'/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
//             <div className="flex gap-4">
//                 <div className="relative w-30 h-30 sm:w-46 sm:h-46 lg:w-[150px] lg:h-[150px]">
//                   <Image
//                     src="/Birthday-fraise-cake.jpg"
//                     alt="Gâteau d'anniversaire aux fraises"
//                     fill
//                     className="object-cover rounded-2xl shadow-2xl"
//                     priority
//                   />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <h2 className='text-[#FF69B4] text-2xl'>Assortiment Macarons</h2>
//                   <p className='text-[#8B4513]'>12 macarons aux parfums variés dans un écrin élégant</p>
//                   <div className="flex gap-2">
//                     <span className='text-[#8B4513] font-bold'>Parfums : </span>
//                     <span className='text-[#8B4513]'>Vanille, Chocolat, Framboise, Pistache</span>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-2 bg-[#FFF8DC] px-4 py-2 rounded-full">
//                       <button
//                         onClick={decrement}
//                         className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
//                       >
//                         <Minus size={16} />
//                       </button>
//                       <span className="text-lg font-bold px-2 text-[#8B4513]">{quantity}</span>
//                       <button
//                         onClick={increment}
//                         className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
//                       >
//                         <Plus size={16} />
//                       </button>
//                     </div>
//                     <span className='text-pink-500 font-bold text-2xl'>42,90 €</span>
//                     <Trash2 className='text-[#8B4513] size-5'/>
//                   </div>
//                 </div>
//               </div>
//           </div>
//           <div className="lg:flex-1 bg-white p-4 rounded-2xl sticky text-[#8B4513]">
//             <h2 className="dancing_script text-[#FF69B4] text-3xl font-bold leading-tight">
//               Récapitulatif
//             </h2>
//             <div className="flex flex-col gap-2">
//               <Label className='text-[#8B4513]'>Code promo :</Label>
//               <div className="flex gap-2">
//                 <input type="text" className='border-2 border-pink-500 rounded-lg px-4 py-1' placeholder='CROQDYA10'/>
//                 <Button className='bg-pink-400 hover:bg-pink-500 text-white'>Appliquer</Button>
//               </div>
//             </div>
//             <div className="flex flex-col gap-4">
//               <div className="flex justify-between">
//                 <span>Sous-total (4 articles)</span>
//                 <span>125,60 €</span>
//               </div>
//               <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
//               <div className="flex justify-between">
//                 <span>Remise code promo</span>
//                 <span className='text-green-600'>- 12,56 €</span>
//               </div>
//               <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
//             </div>
//             <div className="flex flex-col gap-4">
//               <span>Mode de livraison :</span>
//               <div className="flex gap-2 items-center border-2 border-pink-500 rounded-lg p-4">
//                 <Checkbox/>
//                 <div className="flex flex-col gap-1">
//                   <h3>🚚 Livraison à domicile</h3>
//                   <p>Demain entre 14h-18h</p>
//                 </div>
//                 <span>4,90 €</span>
//               </div>
//               <div className="flex gap-2 items-center border-2 border-pink-500 rounded-lg p-4">
//                 <Checkbox/>
//                 <div className="flex flex-col gap-1">
//                   <h3>🏪 Click & Collect</h3>
//                   <p>Retrait en boutique dès 2h</p>
//                 </div>
//                 <span>Gratuit</span>
//               </div>
//               <div className="flex flex-col gap-4">
//               <div className="flex justify-between">
//                 <span>Livraison</span>
//                 <span>4,90 €</span>
//               </div>
//               <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
//               <div className="flex justify-between">
//                 <span>Total</span>
//                 <span className=''>117,94 €</span>
//               </div>
//               <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
//             </div>
//             <Button className="w-full bg-gradient-to-r from-[#FF69B4] to-[#FF4D6D] text-white py-3 rounded-xl text-base font-semibold hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"><ShoppingBagIcon/> Finaliser la commande</Button>
//             <p>🔒 Paiement 100% sécurisé SSL</p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Recommandation/>
//     </>
//   )
// }
