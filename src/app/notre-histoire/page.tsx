import { Card } from '@/components/ui/card'
import { CakeSlice, Handshake, Heart, Phone, Recycle, Sparkle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Cake } from "lucide-react";


export default function NotreHistoirePage() {
  return (
    <main className="min-h-screen bg-[#FFF8DC]">

      {/* Notre Histoire */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <Card className="bg-[#fdebec] p-10 shadow-md shadow-[#E8B4B8] border-none text-center">
          <h1 className="dancing_script text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FF69B4] mb-4">Notre Histoire</h1>
          <p className="text-[#8B4513] text-base sm:text-lg lg:text-xl max-w-lg mx-auto leading-relaxed">
            Découvrez l'univers passionné de Croq'Dya, où chaque création raconte une histoire d'amour pour la pâtisserie franco-ivoirienne.
          </p>
        </Card>
      </section>

      {/* L'Aventure Croq'Dya */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          <Card className="flex-1 lg:flex-2 bg-white p-8 lg:p-10 text-[#8B4513] shadow-sm shadow-[#FEFEFE] border-none space-y-6">
            <h2 className="text-[#FF69B4] dancing_script text-4xl lg:text-5xl font-bold">L'Aventure Croq'Dya</h2>
            <p>
              Tout a commencé en 2024 dans une petite cuisine ivoirienne, où Dya, passionnés de pâtisserie depuis l'enfance, a décidée de transformer son rêve en réalité...
            </p>
            <div className="bg-[linear-gradient(45deg,rgba(255,105,180,0.1),rgba(221,160,221,0.1))] italic px-6 py-4 my-8 rounded-[15px] border-l-4 border-[#FF69B4]">
              "Chaque gâteau que nous créons porte en lui l'amour et la passion que nous avons pour notre métier. Nous ne faisons pas que de la pâtisserie, nous créons des moments de bonheur."
              <footer className="mt-2 font-bold">— Queen Dya, Fondatrice</footer>
            </div>
            {/* <blockquote className="italic border-l-4 border-[#FF69B4] rounded-2xl pl-4">
              "Chaque gâteau que nous créons porte en lui l'amour et la passion que nous avons pour notre métier. Nous ne faisons pas que de la pâtisserie, nous créons des moments de bonheur."
              <footer className="mt-2 font-bold">— Emma & Thomas, Fondateurs</footer>
            </blockquote> */}
            <p>
              Aujourd'hui, Croq'Dya c’est une équipe de 12 artisans passionnés, un atelier moderne au cœur d'Abidjan, et plus de 10 000 clients...
            </p>
          </Card>

          <Card className="w-full lg:flex-1 bg-[#E8B4B8] p-8 lg:p-10 shadow-md shadow-[#FEFEFE] border-none flex flex-col items-center gap-8 text-[#8B4513]">
            <h3 className="dancing_script text-4xl lg:text-6xl font-bold flex items-center gap-2">
              Chef Dya <CakeSlice />
            </h3>
            <div className="flex gap-6">
              <Cake className="w-28 h-28 sm:w-36 sm:h-36 animate-float" />
            </div>
          </Card>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <Card className="p-10 shadow-md shadow-[#FFF8DC] border-none">
          <h2 className="text-[#FF69B4] text-center dancing_script text-4xl lg:text-5xl font-bold mb-10">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Recycle className="w-16 h-16 text-[#FF69B4] animate-float" />, title: "Durabilité", text: "Nous privilégions les circuits courts, les producteurs locaux et les ingrédients biologiques. Notre engagement pour la planète se reflète dans chaque création." },
              { icon: <Heart className="w-16 h-16 text-[#FF69B4] fill-[#FF69B4] animate-float" />, title: "Passion", text: "Chaque geste, chaque recette, chaque décoration est pensée avec amour. La passion est l'ingrédient secret qui rend nos créations si particulières." },
              { icon: <Sparkle className="w-16 h-16 text-[#FF69B4] animate-float" />, title: "Excellence", text: "Nous nous perfectionnons chaque jour pour vous offrir le meilleur. Qualité des ingrédients, techniques raffinées, présentation soignée." },
              { icon: <Handshake className="w-16 h-16 text-[#FF69B4] animate-float" />, title: "Proximité", text: "Nous croyons en la relation humaine. Chaque client est unique et mérite une attention personnalisée pour réaliser ses rêves gourmands." },
            ].map(({ icon, title, text }, i) => (
              <div key={i} className="bg-[#FFF8DC] p-6 rounded-2xl text-center hover:scale-105 hover:border-2 hover:border-[#FF69B4] transition-all duration-300 shadow-sm">
                <div className="flex justify-center mb-4">{icon}</div>
                <h3 className="dancing_script text-2xl font-bold text-[#FF69B4] mb-6">{title}</h3>
                <p className="text-[#8B4513]">{text}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Nos Récompenses */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <Card className="bg-[#fdebec] p-10 border-none shadow-sm shadow-[#E8B4B8] text-center">
          <h2 className="text-[#FF69B4] dancing_script text-4xl lg:text-5xl font-bold mb-10">Nos Récompenses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🏆', title: "Meilleur Pâtissier Abidjan", subtitle: "Le Figaro - 2023", delay: 'animate-bounce' },
              { icon: '🥇', title: "Prix Innovation Dessert", subtitle: "Salon du Chocolat - 2022", delay: 'animate-bounce [animation-delay:-0.5s]' },
              { icon: '⭐', title: "5 étoiles TripAdvisor", subtitle: "Excellence Client - 2023", delay: 'animate-bounce [animation-delay:-1s]' },
              { icon: '🌱', title: "Label Éco-Responsable", subtitle: "Ville d'Abidjan - 2023", delay: 'animate-bounce [animation-delay:-1.5s]' }
            ].map(({ icon, title, subtitle, delay }, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center gap-4">
                <div className={`text-5xl mb-4 ${delay}`}>
                  {icon}
                </div>
                <h3 className="dancing_script text-xl font-bold text-[#FF69B4] mt-4">{title}</h3>
                <span className="text-[#8B4513]">{subtitle}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* Rejoignez l'Aventure */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <Card className="about-card text-white p-10 rounded-2xl text-center">
          <h2 className="dancing_script text-4xl lg:text-5xl font-bold mb-6">Rejoignez l'Aventure</h2>
          <p className="max-w-lg mx-auto mb-8 text-lg lg:text-xl">Découvrez nos créations et laissez-vous emporter par la magie de Croq'Dya.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/nos-creations">
              <div className="bg-white text-[#FF69B4] px-4 py-4.5 rounded-2xl flex items-center gap-2 hover:shadow-lg transition">
                <CakeSlice />
                <span className='quicksand font-bold'>Découvrir le Menu</span>
              </div>
            </Link>
            <Link href="/nous-contacter">
              <div className="border-2 border-white px-4 py-4 rounded-2xl flex items-center gap-2 hover:shadow-lg transition">
                <Phone />
                <span className='quicksand'>Nous Contacter</span>
              </div>
            </Link>
          </div>
        </Card>
      </section>
    </main>
  );
}