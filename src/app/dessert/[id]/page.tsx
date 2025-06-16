"use client";

import InfoTabs from "@/components/InfoTabs";
import Recommandation from "@/components/Recommandation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const imageList = [
  "/Strawberry-cheesecake.jpg",
  "/Glace-a-graine.jpg",
  "/Sweet-fraise-cupcakes.jpg",
  "/Macaron-fraise.jpg",
];

export default function DessertDetailsPage() {
  const [mainImage, setMainImage] = useState(imageList[0]);
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <section className="bg-gradient-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* IMAGE PRINCIPALE + MINIATURES */}
          <div className="flex-1 space-y-6">
            <Card className="relative bg-pink-200 p-6 lg:p-10 text-[#8B4513] shadow-sm border-none flex flex-col items-center gap-6">
              <span className="absolute top-4 left-4 bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Bestseller
              </span>

              <div className="relative w-64 h-64 rounded-full overflow-hidden">
                <Image
                  src={mainImage}
                  alt="Dessert principal"
                  fill
                  className="object-cover"
                />
              </div>
            </Card>

            {/* MINIATURES */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {imageList.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(img)}
                  className={`relative w-full aspect-square rounded-full overflow-hidden ring-2 transition-all duration-200 ${
                    img === mainImage
                      ? "ring-[#FF69B4]"
                      : "ring-transparent hover:ring-[#FFB6C1]"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Miniature ${i}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* INFOS PRODUIT */}
          <div className="flex-1 p-8 lg:p-10 text-[#8B4513] space-y-6">
            <h1 className="text-4xl lg:text-5xl dancing_script font-bold text-[#FF69B4]">
              Fraisier Royal
            </h1>

            <div className="flex gap-4 items-center">
              <span className="text-2xl">⭐⭐⭐⭐⭐</span>
              <span>4.9/5 (127 avis)</span>
            </div>

            <div className="text-[#FF69B4] text-2xl font-bold">
              À partir de 32,90 €
            </div>

            <p className="text-lg leading-relaxed">
              Notre Fraisier Royal est une création d'exception qui sublime la
              fraise française. Génoise moelleuse, crème à la vanille de
              Madagascar, chantilly maison… un classique revisité avec passion.
            </p>

            {/* POINTS FORTS */}
            <Card className="bg-white p-6 text-[#8B4513] border-none space-y-4">
              <h2 className="font-bold">Points forts :</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "🍓 Fraises françaises",
                  "🥚 Œufs fermiers",
                  "🌟 Vanille Madagascar",
                  "👨‍🍳 Fait main",
                  "⏰ 48h de préparation",
                  "❄️ Livraison réfrigérée",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="bg-[#FFF8DC] p-2 rounded-2xl text-[#8B4513] text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>

            {/* TAILLES */}
            <Card className="bg-white p-6 text-[#8B4513] border-none space-y-4">
              <h2 className="font-bold">Choisissez votre taille :</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "4 personnes", price: "32,90 €" },
                  { label: "6 personnes", price: "42,90 €" },
                  { label: "8 personnes", price: "52,90 €" },
                ].map((size, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 rounded-2xl py-4 px-6 border-none bg-[#FFF8DC] hover:bg-white hover:scale-105 hover:border-2 hover:border-[#FF69B4] transition-all duration-300"
                  >
                    <span className="text-pink-500">{size.label}</span>
                    <span>{size.price}</span>
                  </div>
                ))}
              </div>

              {/* MESSAGE PERSO */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold">
                  Message personnalisé (optionnel) :
                </label>
                <Textarea
                  placeholder="Ex: Joyeux Anniversaire, Dya !"
                  className="p-3 border-2 border-[#FFB6C1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4D6D]"
                />
              </div>

              {/* AJOUTER AU PANIER */}
              <div className="flex flex-col sm:flex-row gap-4 items-center mt-4">
                {/* Quantité */}
                <div className="flex items-center gap-2 bg-[#FFF8DC] px-4 py-2 rounded-full">
                  <button
                    onClick={decrement}
                    className="bg-white p-2 rounded-full hover:bg-[#FFB6C1] transition"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-lg font-bold px-2">{quantity}</span>
                  <button
                    onClick={increment}
                    className="bg-white p-2 rounded-full hover:bg-[#FFB6C1] transition"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                {/* Panier */}
                <Button className="flex-1 bg-gradient-to-r from-[#FF69B4] to-[#FF4D6D] text-white py-4 px-6 rounded-[15px] text-lg font-bold hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(255,105,180,0.4)] transition-all duration-300">
                  <ShoppingBag className="h-12 w-12"/> Ajouter au panier - {quantity * 32.9} €
                </Button>

                {/* Coeur */}
                <Card className="p-3 rounded-full border-2 border-[#FF69B4] bg-white hover:bg-[#FFE4E1] transition cursor-pointer">
                  <Heart className="text-[#FF69B4] fill-current" />
                </Card>
              </div>
            </Card>
          </div>
        </div>

        <InfoTabs />

        {/* SUGGESTION */}
        <Recommandation/>
        {/* <section className="mt-10 p-10 shadow-md shadow-[#FFF8DC] border-none">
          <h2 className="text-[#FF69B4] text-center dancing_script text-4xl lg:text-5xl font-bold mb-10">Vous aimerez aussi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm">
              <div className="relative w-52 h-52 mb-4 flex items-center justify-center">
                <Image
                  src="/Creamy-coconut.jpg"
                  alt="Gâteau d'anniversaire aux fraises"
                  fill
                  className="object-cover rounded-full shadow-2xl animate-float"
                  priority
                />
              </div>
              <div className="flex flex-col gap-4 justify-self-start">
                <h3 className="text-xl text-[#FF69B4]">Opéra Chocolat</h3>
                <span className="self-start text-[#8B4513]">28,50 €</span>
                <Link href={"/dessert/1"} className="bg-[#FF69B4] text-white font-bold p-2 rounded-2xl cursor-pointer hover:bg-pink-500 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">Voir le produit</Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm">
              <div className="relative w-52 h-52 mb-4 flex items-center justify-center">
                <Image
                  src="/Delicious-vegan-valentine’s-day-desserts.jpg"
                  alt="Gâteau d'anniversaire aux fraises"
                  fill
                  className="object-cover rounded-full shadow-2xl animate-float"
                  priority
                />
              </div>
              <div className="flex flex-col gap-4 justify-self-start">
                <h3 className="text-xl text-[#FF69B4]">Coco Passion</h3>
                <span className="self-start text-[#8B4513]">26,90 €</span>
                <Link href={"/dessert/1"} className="bg-[#FF69B4] text-white font-bold p-2 rounded-2xl cursor-pointer hover:bg-pink-500 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">Voir le produit</Link>
              </div>
            </div>
            <div className="bg-white p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300 shadow-sm">
              <div className="relative w-52 h-52 mb-4 flex items-center justify-center">
                <Image
                  src="/Orange-cake.jpg"
                  alt="Gâteau d'anniversaire aux fraises"
                  fill
                  className="object-cover rounded-full shadow-2xl animate-float"
                  priority
                />
              </div>
              <div className="flex flex-col gap-4 justify-self-start">
                <h3 className="text-xl text-[#FF69B4]">Tarte au Citron</h3>
                <span className="self-start text-[#8B4513]">24,90 €</span>
                <Link href={"/dessert/1"} className="bg-[#FF69B4] text-white font-bold p-2 rounded-2xl cursor-pointer hover:bg-pink-500 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">Voir le produit</Link>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </section>
  );
}