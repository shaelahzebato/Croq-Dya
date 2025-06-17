"use client";

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";


export default function CreerUnComptePage() {
  return (
    <main className="bg-[#f8f8f8] min-h-screen flex items-center justify-center py-10 px-4 relative overflow-hidden">

      {/* Floating Background Elements */}
      <section className="floating-elements pointer-events-none z-0">
        <div className="floating-element" style={{ top: '10%', left: '20%' }}>🍰</div>
        <div className="floating-element" style={{ top: '30%', right: '10%' }}>🧁</div>
        <div className="floating-element" style={{ bottom: '20%', left: '15%' }}>🍪</div>
        <div className="floating-element" style={{ bottom: '10%', right: '25%' }}>🎂</div>
      </section>

      <section className="relative z-10 w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-[#FF69B4]">
        <div className="p-6 sm:p-10 space-y-8">
         
          {/* Illustration */}
          <div className="flex justify-center">
            <div className="relative text-6xl sm:text-7xl animate-bounce">
              🎂
            </div>
          </div>
          {/* Titre */}
          <div className="text-center space-y-2">
            <h1 className="text-[#FF69B4] font-bold text-4xl sm:text-5xl dancing_script">Rejoignez-nous !</h1>
            <p className="text-[#8B4513] text-base sm:text-lg quicksand">
              Créez votre compte pour découvrir un monde de gourmandises.
            </p>
          </div>

          {/* Formulaire */}
          <form className="space-y-6">
            <h2 className='text-xl text-[#FF69B4] quicksand'>Informations Personnelles</h2>

            {/* Nom et Prénom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="nom" className="text-[#8B4513] mb-1 quicksand font-medium">
                  Nom <span className="text-pink-500">*</span>
                </label>
                <input
                  id="nom"
                  type="text"
                  placeholder="Croq"
                  className="p-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:scale-[1.02] transition-transform duration-200"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="prenom" className="text-[#8B4513] mb-1 quicksand font-medium">
                  Prénom <span className="text-pink-500">*</span>
                </label>
                <input
                  id="prenom"
                  type="text"
                  placeholder="Dya"
                  className="p-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:scale-[1.02] transition-transform duration-200"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-[#8B4513] mb-1 quicksand font-medium">
                Adresse email <span className="text-pink-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="dya@email.com"
                className="p-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:scale-[1.02] transition-transform duration-200"
                required
              />
            </div>

            {/* Mot de passe */}
            <div className="flex flex-col">
              <label htmlFor="password" className="text-[#8B4513] mb-1 quicksand font-medium">
                Mot de passe
              </label>
              <input
                id="password"
                type="password"
                placeholder="********"
                className="p-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:scale-[1.02] transition-transform duration-200"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="date" className="text-[#8B4513] mb-1 quicksand font-medium">
                  Date de naissance <span className="text-pink-500">*</span>
                </label>
                <input
                  id="date"
                  type="date"
                  placeholder="10/06/2025"
                  className="p-3 border-2 border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:scale-[1.02] transition-transform duration-200"
                  required
                />
              </div>
              {/* [#FF4D6D] */}
              <div className="flex flex-col">
                <label htmlFor="genre" className="text-[#8B4513] mb-1 quicksand font-medium">
                  Genre <span className="text-pink-500">*</span>
                </label>                  
                <Select>
                  <SelectTrigger className="w-full border-2 p-3 py-6 border-pink-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400">
                    <SelectValue placeholder="Choisir un genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className='bg-pink-50 text-[#8B4513]'>
                      <SelectLabel className='text-sm font-bold text-[#8B4513]'>Genre</SelectLabel>
                      <SelectItem value="female" className='quicksand hover:text-white hover:bg-pink-400'>Femme</SelectItem>
                      <SelectItem value="male" className='quicksand hover:text-white hover:bg-pink-400'>Homme</SelectItem>
                      <SelectItem value="other" className='quicksand hover:text-white hover:bg-pink-400'>Autre</SelectItem>
                      <SelectItem value="prefer-not-to-say" className='quicksand hover:text-white hover:bg-pink-400'>Préfère ne pas dire</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Options */}
            <div className="flex justify-between items-center text-sm text-[#8B4513]">
              <label className="inline-flex items-center gap-2">
                <Checkbox id="remember" className='cursor-pointer' />
                Se souvenir de moi
              </label>
              <Link href="/mot-de-passe-oublie" className="text-pink-500 hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Bouton */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF69B4] to-[#FF4D6D] text-white py-3 rounded-xl text-base font-semibold hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Se connecter
            </Button>

            {/* OU */}
            <div className="relative text-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-3 text-[#8B4513] text-sm">ou</span>
              </div>
              <hr className="border-t border-pink-200" />
            </div>

            {/* Connexions externes */}
            <div className="space-y-3">
              <button
                type="button"
                className="w-full border border-pink-200 rounded-xl py-2 px-4 flex items-center justify-center gap-3 hover:bg-[#FFF8DC] transition cursor-pointer"
              >
                <FcGoogle size={20} />
                <span className="text-sm font-medium text-[#8B4513]">S'inscrire avec Google</span>
              </button>
              <button
                type="button"
                className="w-full border border-pink-200 rounded-xl py-2 px-4 flex items-center justify-center gap-3 hover:bg-[#FFF8DC] transition cursor-pointer"
              >
                <FaApple size={20} />
                <span className="text-sm font-medium text-[#8B4513]">S'inscrire avec Apple</span>
              </button>
            </div>

            {/* Redirection connexion */}
            <p className="text-center text-sm text-[#8B4513]">
              Déjà un compte ?{" "}
              <Link href="/se-connecter" className="text-pink-500 hover:underline font-medium">
                Se connecter
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}