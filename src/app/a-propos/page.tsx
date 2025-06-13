import { Card } from '@/components/ui/card'
import { CakeSlice, ChefHat, ChefHatIcon,  Flame,  Handshake,  Heart,  Leaf,  Medal,  Phone, Recycle, Sparkle, Sprout, Star, Trophy } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { UtensilsCrossed } from "lucide-react";
import { Cake } from "lucide-react";

export default function AproposPage() {
  return (
    <main className='min-h-screen bg-[#FFF8DC]'>

      {/* section notre histoire */}
      <section className='max-w-6xl mx-auto px-6 py-14'>
        <Card className='bg-[#fdebec] p-10 flex flex-col items-center justify-center shadow-[#E8B4B8] border-none'>
          <h1 className='dancing_script text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#FF69B4]'>Notre Histoire</h1>
          <p className="text-[#8B4513] text-base sm:text-lg lg:text-xl text-center leading-relaxed max-w-lg mx-auto lg:mx-0">Découvrez l'univers passionné de Croq'Dya, où chaque création raconte une histoire d'amour pour la pâtisserie française</p>
        </Card>
      </section>

      {/* L'Aventure Croq'Dya */}
      <section className='max-w-6xl mx-auto px-6 py-14'>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Card className='flex-1 md:flex-2 bg-white p-10 text-[#8B4513] shadow-[#FEFEFE] border-none'>
            <h2 className="text-[#FF69B4] dancing_script text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight dancing_script">L'Aventure Croq'Dya</h2>
            <p>Tout a commencé en 2018 dans une petite cuisine parisienne, où Emma et Thomas, passionnés de pâtisserie depuis l'enfance, ont décidé de transformer leur rêve en réalité. Inspirés par les recettes de grand-mère et les techniques modernes, ils ont créé Croq'Dya avec une mission simple : rendre la gourmandise accessible à tous.</p>
            <div className="story-highlight">
              <p className='italic'>"Chaque gâteau que nous créons porte en lui l'amour et la passion que nous avons pour notre métier. Nous ne faisons pas que de la pâtisserie, nous créons des moments de bonheur."</p>
              <span className='font-bold italic'>- Emma & Thomas, Fondateurs</span>
            </div>
            <p>Aujourd'hui, Croq'Dya c'est une équipe de 12 artisans passionnés, un atelier moderne au cœur de Paris, et plus de 10 000 clients qui nous font confiance pour leurs moments les plus précieux. De l'anniversaire d'enfant au mariage de rêve, nous mettons notre savoir-faire au service de vos émotions.</p>
          </Card>
          <Card className='flex-1 bg-[#E8B4B8] p-10 shadow-[#FEFEFE] border-none'>
            <div className="flex flex-col items-center gap-20 underline text-[#8B4513]">
              <h3 className='flex items-center dancing_script text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight dancing_script'>
                <span>Chef Dya</span>
                <CakeSlice/></h3>
              <div className="flex gap-4">
                <ChefHat className="w-40 h-40 text-[#8B4513]" />
                <Cake className="w-40 h-40 text-[#8B4513]"/>
              </div>
            </div>
          </Card>          
        </div>
      </section>
      
      {/* Nos Valeurs */}
      <section className='max-w-6xl mx-auto px-6 py-14'>
        <Card className='flex-1 p-10 shadow-[#FFF8DC] border-none'>
          <h2 className='text-[#FF69B4] py-6 text-center dancing_script text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#FFF8DC] flex flex-col items-center gap-6 p-4 hover:border-2 hover:border-[#FF69B4] hover:scale-105 rounded-2xl">
              <div className="flex gap-8 text-[#FF69B4]">
                <Recycle className="w-20 h-20" />
              </div>
              <h3 className='dancing_script text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#FF69B4]'>Durabilité</h3>
              <p className='text-center'>Nous privilégions les circuits courts, les producteurs locaux et les ingrédients biologiques. Notre engagement pour la planète se reflète dans chaque création.</p>
            </div>
            <div className="bg-[#FFF8DC] flex flex-col items-center gap-6 p-4 hover:border-2 hover:border-[#FF69B4] hover:scale-105 rounded-2xl">
              <div className="flex gap-8 text-[#FF69B4]">
                <Heart className="w-20 h-20 fill-[#FF69B4] text-[#FF69B4]" />
              </div>
              <h3 className='dancing_script text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#FF69B4]'>Passion</h3>
              <p className='text-center'>Chaque geste, chaque recette, chaque décoration est pensée avec amour. La passion est l'ingrédient secret qui rend nos créations si particulières.</p>
            </div>
            <div className="bg-[#FFF8DC] flex flex-col items-center gap-6 p-4 hover:border-2 hover:border-[#FF69B4] hover:scale-105 rounded-2xl">
              <div className="flex gap-8 text-[#FF69B4]">
                <Sparkle className="w-20 h-20" />
              </div>
              <h3 className='dancing_script text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#FF69B4]'>Excellence</h3>
              <p className='text-center'>Nous nous perfectionnons chaque jour pour vous offrir le meilleur. Qualité des ingrédients, techniques raffinées, présentation soignée.</p>
            </div>
            <div className="bg-[#FFF8DC] flex flex-col items-center gap-6 p-4 hover:border-2 hover:border-[#FF69B4] hover:scale-105 rounded-2xl">
              <div className="flex gap-8 text-[#FF69B4]">
                <Handshake className="w-20 h-20" />
              </div>
              <h3 className='dancing_script text-2xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-[#FF69B4]'>Proximité</h3>
              <p className='text-center'>Nous croyons en la relation humaine. Chaque client est unique et mérite une attention personnalisée pour réaliser ses rêves gourmands.</p>
            </div>
          </div>
        </Card>
      </section>

      {/* Nos Récompenses */}
      <section className='max-w-6xl mx-auto px-6 py-14'>
        <Card className='bg-[#fdebec] shadow-[#E8B4B8] border-none p-10 flex flex-col items-center justify-center text-white'>
          <h2 className='text-[#FF69B4] py-6 text-center dancing_script text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col gap-4 items-center bg-white p-8 rounded-2xl">
              <Trophy className='h-10 w-10 text-[#8B4513]'/>
              <h3 className='text-[#FF69B4] dancing_script text-xl font-bold'>Meilleur Pâtissier Abidjan</h3>
              <span className="text-[#8B4513]">Le Figaro - 2023</span>
            </div>

            <div className="flex flex-col gap-4 items-center bg-white p-8 rounded-2xl">
              <Medal className='h-10 w-10 text-[#8B4513]'/>
              <h3 className='text-[#FF69B4] dancing_script text-xl font-bold'>Prix Innovation Dessert</h3>
              <span className="text-[#8B4513]">Salon du Chocolat - 2022</span>
            </div>

            <div className="flex flex-col gap-4 items-center bg-white p-8 rounded-2xl">
              <Star className='h-10 w-10 text-[#8B4513]'/>
              <h3 className='text-[#FF69B4] dancing_script text-xl font-bold'>5 étoiles TripAdvisor</h3>
              <span className="text-[#8B4513]">Excellence Client - 2023</span>
            </div>

            <div className="flex flex-col gap-4 items-center bg-white p-8 rounded-2xl">
              <Sprout className='h-10 w-10 text-[#8B4513]'/>
              <h3 className='text-[#FF69B4] dancing_script text-xl font-bold'>Label Éco-Responsable</h3>
              <span className="text-[#8B4513]">Ville d'Abidjan - 2023</span>
            </div>
          </div>
        </Card>
      </section>

      {/* Rejoignez l'Aventure */}
      <section className='max-w-6xl mx-auto px-6 py-14'>
        <Card className='about-card p-10 flex flex-col items-center justify-center text-white'>
          <h2 className='dancing_script text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight'>Rejoignez l'Aventure</h2>
          <p className="text-base sm:text-lg lg:text-xl text-center leading-relaxed max-w-lg mx-auto lg:mx-0">Découvrez nos créations et laissez-vous emporter par la magie de Croq'Dya</p>
          <div className="flex gap-10">
            <Link href={"/menu"} className='bg-white p-4 rounded-2xl flex items-center gap-1'>
              <span className='text-[#FF69B4]'><CakeSlice/></span>
              <span className='text-[#FF69B4] quicksand'>Découvrir le Menu</span>
            </Link>
            <Link href={"/contact"} className='border-2 border-white p-4 rounded-2xl flex items-center gap-1'>
              <span className='text-white'><Phone/></span>
              <span className='text-white quicksand'>Nous Contacter</span>
            </Link>
          </div>
        </Card>
      </section>
    </main>
  )
}
