"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { toast } from 'react-toastify'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SignUpFormValues, signUpSchema } from "@/lib/validation/zodSchemas";
import { signIn } from "next-auth/react";

export default function CreerUnComptePage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setError(null);
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message);
      toast.success("Inscription réussie, Bienvenue !");
      router.push("/se-connecter");
    } catch (err: any) {
      setError(err.message || "Erreur inconnue");
    }
  };

  return (
    <main className="bg-cream min-h-screen">
      
      {/* Breadcrumb */}
      <div className="bg-vanille/30 border-b border-or-rose/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <nav className="flex items-center space-x-2 text-sm font-quicksand">
            <Link
              href="/"
              className="text-chocolat/70 hover:text-rose-bonbon transition-colors duration-200"
            >
              Accueil
            </Link>
            <span className="text-chocolat/40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="text-rose-bonbon font-medium">Créer un compte</span>
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="flex items-center justify-center py-8 sm:py-16 px-4 relative overflow-hidden min-h-[calc(100vh-80px)]">
        
        {/* Éléments flottants - Style CroqDya */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-8 sm:left-16 text-3xl sm:text-4xl opacity-30 animate-float-1">🎂</div>
          <div className="absolute top-32 right-8 sm:right-20 text-2xl sm:text-3xl opacity-30 animate-float-2">✨</div>
          <div className="absolute bottom-32 left-8 sm:left-24 text-2xl sm:text-3xl opacity-30 animate-float-3">🍪</div>
          <div className="absolute bottom-20 right-8 sm:right-16 text-xl sm:text-2xl opacity-30 animate-sparkle">💕</div>
          <div className="absolute top-1/2 left-4 sm:left-10 text-xl sm:text-2xl opacity-20 animate-float-1">🧁</div>
          <div className="absolute top-1/3 right-12 sm:right-32 text-xl sm:text-2xl opacity-20 animate-float-2">🍰</div>
        </div>

        {/* Carte d'inscription */}
        <section className="relative z-10 w-full max-w-lg sm:max-w-2xl bg-blanc-casse rounded-2xl shadow-xl overflow-hidden border border-or-rose/20">
          <div className="p-6 sm:p-10 space-y-6 sm:space-y-8">
            
            {/* Illustration avec ligne décorative */}
            <div className="text-center space-y-4">
              <div className="text-5xl sm:text-6xl">🎂</div>
              <div className="w-16 h-1 bg-gradient-to-r from-rose-bonbon to-fraise mx-auto rounded-full"></div>
            </div>

            {/* Titre */}
            <div className="text-center space-y-3">
              <h1 className="text-rose-bonbon font-bold text-3xl sm:text-4xl lg:text-5xl font-dancing">
                Rejoignez-nous !
              </h1>
              <p className="text-chocolat/80 text-sm sm:text-base lg:text-lg font-quicksand leading-relaxed">
                Créez votre compte pour découvrir un monde de gourmandises
              </p>
            </div>

            {/* Formulaire */}
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit(onSubmit)}>
              
              {/* Section title */}
              <div className="border-b border-or-rose/20 pb-3">
                <h2 className="text-lg sm:text-xl text-rose-bonbon font-quicksand font-semibold">
                  Informations Personnelles
                </h2>
              </div>

              {/* Nom et Prénom */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="nom" className="text-chocolat font-quicksand font-medium flex items-center text-sm sm:text-base">
                    Nom
                    <span className="text-rose-bonbon ml-1">*</span>
                  </label>
                  <input
                    id="nom"
                    type="text"
                    {...register("nom")}
                    placeholder="Croq"
                    className="w-full p-3 sm:p-4 border-2 border-or-rose/30 rounded-xl bg-vanille/30 focus:outline-none focus:ring-2 focus:ring-rose-bonbon focus:border-rose-bonbon transition-all duration-300 font-quicksand placeholder-chocolat/50 text-sm sm:text-base"
                  />
                  {errors.nom && (
                    <p className="text-rose-bonbon text-xs sm:text-sm font-quicksand">{errors.nom.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="prenom" className="text-chocolat font-quicksand font-medium flex items-center text-sm sm:text-base">
                    Prénom
                    <span className="text-rose-bonbon ml-1">*</span>
                  </label>
                  <input
                    id="prenom"
                    type="text"
                    {...register("prenom")}
                    placeholder="Dya"
                    className="w-full p-3 sm:p-4 border-2 border-or-rose/30 rounded-xl bg-vanille/30 focus:outline-none focus:ring-2 focus:ring-rose-bonbon focus:border-rose-bonbon transition-all duration-300 font-quicksand placeholder-chocolat/50 text-sm sm:text-base"
                  />
                  {errors.prenom && (
                    <p className="text-rose-bonbon text-xs sm:text-sm font-quicksand">{errors.prenom.message}</p>
                  )}
                </div>
              </div>

              {/* Email et Téléphone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-chocolat font-quicksand font-medium flex items-center text-sm sm:text-base">
                    Adresse email
                    <span className="text-rose-bonbon ml-1">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="dya@croqdya.com"
                    className="w-full p-3 sm:p-4 border-2 border-or-rose/30 rounded-xl bg-vanille/30 focus:outline-none focus:ring-2 focus:ring-rose-bonbon focus:border-rose-bonbon transition-all duration-300 font-quicksand placeholder-chocolat/50 text-sm sm:text-base"
                  />
                  {errors.email && (
                    <p className="text-rose-bonbon text-xs sm:text-sm font-quicksand">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="telephone" className="text-chocolat font-quicksand font-medium flex items-center text-sm sm:text-base">
                    Téléphone
                    <span className="text-rose-bonbon ml-1">*</span>
                  </label>
                  <input
                    id="telephone"
                    type="tel"
                    {...register("telephone")}
                    placeholder="+225 07 XX XX XX XX"
                    className="w-full p-3 sm:p-4 border-2 border-or-rose/30 rounded-xl bg-vanille/30 focus:outline-none focus:ring-2 focus:ring-rose-bonbon focus:border-rose-bonbon transition-all duration-300 font-quicksand placeholder-chocolat/50 text-sm sm:text-base"
                  />
                  {errors.telephone && (
                    <p className="text-rose-bonbon text-xs sm:text-sm font-quicksand">{errors.telephone.message}</p>
                  )}
                </div>
              </div>

              {/* Mot de passe */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-chocolat font-quicksand font-medium text-sm sm:text-base">
                  Mot de passe
                  <span className="text-rose-bonbon ml-1">*</span>
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  placeholder="••••••••"
                  className="w-full p-3 sm:p-4 border-2 border-or-rose/30 rounded-xl bg-vanille/30 focus:outline-none focus:ring-2 focus:ring-rose-bonbon focus:border-rose-bonbon transition-all duration-300 font-quicksand placeholder-chocolat/50 text-sm sm:text-base"
                />
                {errors.password && (
                  <p className="text-rose-bonbon text-xs sm:text-sm font-quicksand">{errors.password.message}</p>
                )}
              </div>

              {/* Date de naissance et Genre */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="date" className="text-chocolat font-quicksand font-medium flex items-center text-sm sm:text-base">
                    Date de naissance
                    <span className="text-rose-bonbon ml-1">*</span>
                  </label>
                  <input
                    id="date"
                    type="date"
                    {...register("date")}
                    className="w-full p-3 sm:p-4 border-2 border-or-rose/30 rounded-xl bg-vanille/30 focus:outline-none focus:ring-2 focus:ring-rose-bonbon focus:border-rose-bonbon transition-all duration-300 font-quicksand text-sm sm:text-base"
                  />
                  {errors.date && (
                    <p className="text-rose-bonbon text-xs sm:text-sm font-quicksand">{errors.date.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="genre" className="text-chocolat font-quicksand font-medium flex items-center text-sm sm:text-base">
                    Genre
                    <span className="text-rose-bonbon ml-1">*</span>
                  </label>
                  <Controller
                    name="genre"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger className="w-full border-2 p-3 py-6 sm:p-4 border-or-rose/30 rounded-xl bg-vanille/30 focus:outline-none focus:ring-2 focus:ring-rose-bonbon font-quicksand text-sm sm:text-base">
                          <SelectValue placeholder="Choisir un genre" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup className="bg-blanc-casse">
                            <SelectLabel className="text-sm font-bold text-chocolat font-quicksand">
                              Genre
                            </SelectLabel>
                            <SelectItem value="femme" className="font-quicksand hover:bg-rose-bonbon/10">
                              Femme
                            </SelectItem>
                            <SelectItem value="homme" className="font-quicksand hover:bg-rose-bonbon/10">
                              Homme
                            </SelectItem>
                            <SelectItem value="autre" className="font-quicksand hover:bg-rose-bonbon/10">
                              Autre
                            </SelectItem>
                            <SelectItem value="prefere-ne-pas-dire" className="font-quicksand hover:bg-rose-bonbon/10">
                              Préfère ne pas dire
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.genre && (
                    <p className="text-rose-bonbon text-xs sm:text-sm font-quicksand">{errors.genre.message}</p>
                  )}
                </div>
              </div>

              {/* Message d'erreur global */}
              {error && (
                <div className="bg-rose-bonbon/10 border border-rose-bonbon/30 rounded-lg p-3">
                  <p className="text-rose-bonbon text-xs sm:text-sm font-quicksand text-center">{error}</p>
                </div>
              )}

              {/* Checkbox conditions */}
              <div className="space-y-3">
                <label className="inline-flex items-start gap-3 font-quicksand text-chocolat/80 cursor-pointer text-sm">
                  <Checkbox id="terms" className="border-or-rose data-[state=checked]:bg-rose-bonbon data-[state=checked]:border-rose-bonbon mt-0.5"/>
                  <span>
                    J'accepte les{" "}
                    <Link href="/conditions" className="text-rose-bonbon hover:text-fraise transition-colors">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link href="/confidentialite" className="text-rose-bonbon hover:text-fraise transition-colors">
                      politique de confidentialité
                    </Link>
                  </span>
                </label>
                
                <label className="inline-flex items-start gap-3 font-quicksand text-chocolat/80 cursor-pointer text-sm">
                  <Checkbox id="newsletter" className="border-or-rose data-[state=checked]:bg-rose-bonbon data-[state=checked]:border-rose-bonbon mt-0.5"/>
                  <span>
                    Je souhaite recevoir les actualités et offres spéciales de Croq'Dya
                  </span>
                </label>
              </div>

              {/* Bouton principal */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-rose-bonbon to-fraise text-blanc-casse py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold font-quicksand 
                hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-blanc-casse/30 border-t-blanc-casse rounded-full animate-spin"></div>
                    Inscription...
                  </div>
                ) : (
                  "Créer mon compte"
                )}
              </Button>

              {/* Séparateur */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-or-rose/30"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-blanc-casse px-4 text-chocolat/60 font-quicksand">ou continuer avec</span>
                </div>
              </div>

              {/* Connexions sociales */}
              <div className="space-y-3">
                <button
                  onClick={() => signIn("google")}
                  type="button"
                  className="w-full border-2 border-or-rose/30 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-vanille/50 hover:border-or-rose/50 transition-all duration-300 font-quicksand font-medium text-chocolat text-sm sm:text-base"
                >
                  <FcGoogle size={20} />
                  Continuer avec Google
                </button>
                
                <button
                  onClick={() => signIn("apple")}
                  type="button"
                  className="w-full border-2 border-or-rose/30 rounded-xl py-3 px-4 flex items-center justify-center gap-3 hover:bg-vanille/50 hover:border-or-rose/50 transition-all duration-300 font-quicksand font-medium text-chocolat text-sm sm:text-base"
                >
                  <FaApple size={20} />
                  Continuer avec Apple
                </button>
              </div>

              {/* Lien vers connexion */}
              <div className="text-center pt-4 border-t border-or-rose/20">
                <p className="font-quicksand text-chocolat/80 text-sm sm:text-base">
                  Déjà un compte ?{" "}
                  <Link 
                    href="/se-connecter" 
                    className="text-rose-bonbon hover:text-fraise transition-colors duration-200 font-semibold"
                  >
                    Se connecter
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}