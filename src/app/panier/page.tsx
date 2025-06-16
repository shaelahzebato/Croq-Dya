"use client"

import Recommandation from '@/components/Recommandation'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Check, Minus, Plus, ShoppingBagIcon, Trash2 } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

export default function PanierPage() {
    const [quantity, setQuantity] = useState(1);
  
    const increment = () => setQuantity((prev) => prev + 1);
    const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h1 className="dancing_script text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FF69B4] mb-4 text-center">Mon Panier Gourmand</h1>
        <p className="text-[#8B4513] text-base sm:text-lg lg:text-xl max-w-lg mx-auto leading-relaxed">
          Finalisez votre commande de délicieuses créations
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:flex-2 bg-white p-4 rounded-2xl">
            <div className="flex justify-between">
              <h2 className="dancing_script text-[#FF69B4] text-3xl font-bold leading-tight">
                Mes Sélections (3 articles)
              </h2>
              <Button className='bg-white text-pink-600 border border-pink-600 rounded-full px-6 hover:bg-pink-50 hover:scale-105 transition- cursor-pointer'>
                <Trash2 className='text-[#8B4513] size-5'/> Vider le panier
              </Button>
            </div>
            <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="relative w-30 h-30 sm:w-46 sm:h-46 lg:w-[150px] lg:h-[150px]">
                  <Image
                    src="/Birthday-fraise-cake.jpg"
                    alt="Gâteau d'anniversaire aux fraises"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className='text-[#FF69B4] text-2xl'>Fraisier Royal</h2>
                  <p className='text-[#8B4513]'>Biscuit génoise, crème pâtissière vanille, fraises fraîches</p>
                  <div className="flex gap-2">
                    <span className='text-[#8B4513] font-bold'>Taille : </span>
                    <span className='text-[#8B4513]'>6 personnes</span>
                  </div>
                  <div className="flex gap-2">
                    <span className='text-[#8B4513] font-bold'>Message : </span>
                    <span className='text-[#8B4513]'>"Joyeux Anniversaire Marie !"</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-[#FFF8DC] px-4 py-2 rounded-full">
                      <button
                        onClick={decrement}
                        className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-lg font-bold px-2 text-[#8B4513]">{quantity}</span>
                      <button
                        onClick={increment}
                        className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className='text-pink-500 font-bold text-2xl'>42,90 €</span>
                    <Trash2 className='text-[#8B4513] size-5'/>
                  </div>
                </div>
              </div>
              <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
              <div className="flex gap-4">
                <div className="relative w-30 h-30 sm:w-46 sm:h-46 lg:w-[150px] lg:h-[150px]">
                  <Image
                    src="/Birthday-fraise-cake.jpg"
                    alt="Gâteau d'anniversaire aux fraises"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className='text-[#FF69B4] text-2xl'>Rainbow Cupcakes</h2>
                  <p className='text-[#8B4513]'>Cupcakes colorés avec glaçage arc-en-ciel</p>
                  <div className="flex gap-2">
                    <span className='text-[#8B4513] font-bold'>Quantité : </span>
                    <span className='text-[#8B4513]'>Box de 6</span>
                  </div>
                  <div className="flex gap-2">
                    <span className='text-[#8B4513] font-bold'>Emballage : </span>
                    <span className='text-[#8B4513]'>Boîte cadeau</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-[#FFF8DC] px-4 py-2 rounded-full">
                      <button
                        onClick={decrement}
                        className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-lg font-bold px-2 text-[#8B4513]">{quantity}</span>
                      <button
                        onClick={increment}
                        className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className='text-pink-500 font-bold text-2xl'>42,90 €</span>
                    <Trash2 className='text-[#8B4513] size-5'/>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
            <div className="flex gap-4">
                <div className="relative w-30 h-30 sm:w-46 sm:h-46 lg:w-[150px] lg:h-[150px]">
                  <Image
                    src="/Birthday-fraise-cake.jpg"
                    alt="Gâteau d'anniversaire aux fraises"
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className='text-[#FF69B4] text-2xl'>Assortiment Macarons</h2>
                  <p className='text-[#8B4513]'>12 macarons aux parfums variés dans un écrin élégant</p>
                  <div className="flex gap-2">
                    <span className='text-[#8B4513] font-bold'>Parfums : </span>
                    <span className='text-[#8B4513]'>Vanille, Chocolat, Framboise, Pistache</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 bg-[#FFF8DC] px-4 py-2 rounded-full">
                      <button
                        onClick={decrement}
                        className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="text-lg font-bold px-2 text-[#8B4513]">{quantity}</span>
                      <button
                        onClick={increment}
                        className="bg-white p-2 rounded-full text-pink-500 hover:text-white hover:bg-[#FFB6C1] transition"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <span className='text-pink-500 font-bold text-2xl'>42,90 €</span>
                    <Trash2 className='text-[#8B4513] size-5'/>
                  </div>
                </div>
              </div>
          </div>
          <div className="lg:flex-1 bg-white p-4 rounded-2xl sticky text-[#8B4513]">
            <h2 className="dancing_script text-[#FF69B4] text-3xl font-bold leading-tight">
              Récapitulatif
            </h2>
            <div className="flex flex-col gap-2">
              <Label className='text-[#8B4513]'>Code promo :</Label>
              <div className="flex gap-2">
                <input type="text" className='border-2 border-pink-500 rounded-lg px-4 py-1' placeholder='CROQDYA10'/>
                <Button className='bg-pink-400 hover:bg-pink-500 text-white'>Appliquer</Button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span>Sous-total (4 articles)</span>
                <span>125,60 €</span>
              </div>
              <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
              <div className="flex justify-between">
                <span>Remise code promo</span>
                <span className='text-green-600'>- 12,56 €</span>
              </div>
              <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
            </div>
            <div className="flex flex-col gap-4">
              <span>Mode de livraison :</span>
              <div className="flex gap-2 items-center border-2 border-pink-500 rounded-lg p-4">
                <Checkbox/>
                <div className="flex flex-col gap-1">
                  <h3>🚚 Livraison à domicile</h3>
                  <p>Demain entre 14h-18h</p>
                </div>
                <span>4,90 €</span>
              </div>
              <div className="flex gap-2 items-center border-2 border-pink-500 rounded-lg p-4">
                <Checkbox/>
                <div className="flex flex-col gap-1">
                  <h3>🏪 Click & Collect</h3>
                  <p>Retrait en boutique dès 2h</p>
                </div>
                <span>Gratuit</span>
              </div>
              <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <span>Livraison</span>
                <span>4,90 €</span>
              </div>
              <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
              <div className="flex justify-between">
                <span>Total</span>
                <span className=''>117,94 €</span>
              </div>
              <div className="my-6 h-1 w-full bg-[#FF69B4]"></div>
            </div>
            <Button className="w-full bg-gradient-to-r from-[#FF69B4] to-[#FF4D6D] text-white py-3 rounded-xl text-base font-semibold hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"><ShoppingBagIcon/> Finaliser la commande</Button>
            <p>🔒 Paiement 100% sécurisé SSL</p>
            </div>
          </div>
        </div>
      </section>
      <Recommandation/>
    </>
  )
}
