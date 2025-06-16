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
      <div className="floating-elements pointer-events-none z-0">
        <div className="floating-element" style={{ top: '10%', left: '20%' }}>🍰</div>
        <div className="floating-element" style={{ top: '30%', right: '10%' }}>🧁</div>
        <div className="floating-element" style={{ bottom: '20%', left: '15%' }}>🍪</div>
        <div className="floating-element" style={{ bottom: '10%', right: '25%' }}>🎂</div>
      </div>

      <section className="relative z-10 w-full max-w-xl bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-pink-400">
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
            <h2 className='text-xl'>Informations Personnelles</h2>

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

                <div className="flex flex-col">
                  <label htmlFor="genre" className="text-[#8B4513] mb-1 quicksand font-medium">
                    Genre <span className="text-pink-500">*</span>
                  </label>                  
                  <Select>
                    <SelectTrigger className="w-full border-2 p-3 py-6 border-[#FFB6C1] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF4D6D]">
                      <SelectValue placeholder="Choisir un genre" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup className='bg-pink-50 text-[#8B4513]'>
                        <SelectLabel className='text-xl font-bold text-[#8B4513]'>Genre</SelectLabel>
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
            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="inline-flex items-center gap-2">
                <Checkbox id="remember" />
                Se souvenir de moi
              </label>
              <Link href="/mot-de-passe-oublie" className="text-pink-500 hover:underline">
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Bouton */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#FF69B4] to-[#FF4D6D] text-white py-3 rounded-xl text-base font-semibold hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300"
            >
              Se connecter
            </Button>

            {/* OU */}
            <div className="relative text-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-3 text-gray-500 text-sm">ou</span>
              </div>
              <hr className="border-t border-gray-300" />
            </div>

            {/* Connexions externes */}
            <div className="space-y-3">
              <button
                type="button"
                className="w-full border border-gray-300 rounded-xl py-2 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
              >
                <FcGoogle size={20} />
                <span className="text-sm font-medium text-gray-700">S'inscrire avec Google</span>
              </button>
              <button
                type="button"
                className="w-full border border-gray-300 rounded-xl py-2 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition"
              >
                <FaApple size={20} />
                <span className="text-sm font-medium text-gray-700">S'inscrire avec Apple</span>
              </button>
            </div>

            {/* Redirection connexion */}
            <p className="text-center text-sm text-gray-700">
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
