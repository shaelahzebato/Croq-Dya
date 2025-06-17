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

  //A m'expliquer
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
      message: '“Joyeux Anniversaire Dya!”',
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
      image: "/Sweet-tooth.jpg",
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
    <main>
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
              <Button variant="outline" className="border-pink-600 text-pink-600 hover:bg-pink-50 hover:text-[#8B4513] cursor-pointer">
                <Trash2 className="mr-2 h-4 w-4" />
                Vider le panier
              </Button>
            </div>

            {/* Liste des articles */}
            {items.map((item) => (
              <div key={item.key} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4 items-center text-[#8B4513]">
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
                          className="bg-white p-2 rounded-full text-pink-500 hover:bg-[#FFB6C1] cursor-pointer"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-lg font-bold text-[#8B4513]">
                          {quantities[item.key]}
                        </span>
                        <button
                          onClick={() => updateQty(item.key, +1)}
                          className="bg-white p-2 rounded-full text-pink-500 hover:bg-[#FFB6C1] cursor-pointer"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <span className="text-pink-600 font-bold text-2xl">
                        {(quantities[item.key] * item.price).toFixed(2)} €
                      </span>
                      <button className="ml-auto text-[#8B4513] hover:text-pink-600 transition cursor-pointer">
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
          <aside className="lg:w-[360px] bg-white p-6 rounded-2xl shadow-md space-y-6 text-[#8B4513]">
            <h2 className="dancing_script text-3xl text-[#FF69B4] font-bold">Récapitulatif</h2>

            <div className="space-y-14">
              <div>
                <Label className="text-[#8B4513] font-medium">Code promo</Label>
                <div className="flex gap-2 mt-1">
                  <input
                    type="text"
                    placeholder="CROQDYA10"
                    className="flex-1 px-4 py-2 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                  />
                  <Button className="bg-pink-400 py-6 hover:bg-pink-500 text-white cursor-pointer">
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

              <Button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#FF69B4] to-[#FF4D6D] text-white py-3 rounded-xl hover:-translate-y-1 hover:shadow-lg transition cursor-pointer">
                <ShoppingBagIcon size={20} /> Finaliser la commande
              </Button>
              <p className="text-center text-xs text-gray-500">🔒 Paiement 100 % sécurisé SSL</p>
            </div>
          </aside>
        </div>
      </section>

      <Recommandation />
    </main>
  );
}