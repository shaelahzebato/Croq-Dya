"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigInFormValues, signInSchema } from "@/lib/validation/zodSchemas";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";
import { LoadingComponent } from "@/components/common/Loading";

function SeConnecterPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SigInFormValues>({
    resolver: zodResolver(signInSchema),
  });
  const router = useRouter();

  const onSubmit = async (data: SigInFormValues) => {
    setError(null);

    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (res?.error) {
      setError("Email ou mot de passe incorrect.");
    } else {
      const session = await getSession();
      toast.success(`Connexion réussie ! Bienvenue ${session?.user?.name}`);

      if (session?.user?.role === "ADMIN") {
        setIsLoading(true);
        router.push("/dashboard/admin");
      } else {
        setIsLoading(true);
        router.push("/dashboard/client");
      }
    }
  };

  return (
    <>
      {isLoading && <LoadingComponent />}
      
      <main className="bg-cream min-h-screen">
        
        {/* Breadcrumb fixe en haut */}
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
              <span className="text-rose-bonbon font-medium">Connexion</span>
            </nav>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="flex items-center justify-center py-8 sm:py-16 px-4 relative overflow-hidden min-h-[calc(100vh-80px)]">
          
          {/* Éléments flottants - Style CroqDya */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-8 sm:left-16 text-3xl sm:text-4xl opacity-30 animate-float-1">🧁</div>
            <div className="absolute top-32 right-8 sm:right-20 text-2xl sm:text-3xl opacity-30 animate-float-2">✨</div>
            <div className="absolute bottom-32 left-8 sm:left-24 text-2xl sm:text-3xl opacity-30 animate-float-3">🍓</div>
            <div className="absolute bottom-20 right-8 sm:right-16 text-xl sm:text-2xl opacity-30 animate-sparkle">💕</div>
            <div className="absolute top-1/2 left-4 sm:left-10 text-xl sm:text-2xl opacity-20 animate-float-1">🎂</div>
            <div className="absolute top-1/3 right-12 sm:right-32 text-xl sm:text-2xl opacity-20 animate-float-2">🍪</div>
          </div>

          {/* Carte de connexion */}
          <section className="relative z-10 w-full max-w-lg sm:max-w-xl bg-blanc-casse rounded-2xl shadow-xl overflow-hidden border border-or-rose/20">
            <div className="p-6 sm:p-10 space-y-6 sm:space-y-8">
              
              {/* Illustration avec ligne décorative */}
              <div className="text-center space-y-4">
                <div className="text-5xl sm:text-6xl">🧁</div>
                <div className="w-16 h-1 bg-gradient-to-r from-rose-bonbon to-fraise mx-auto rounded-full"></div>
              </div>

              {/* Titre */}
              <div className="text-center space-y-3">
                <h1 className="text-rose-bonbon font-bold text-3xl sm:text-4xl lg:text-5xl font-dancing">
                  Bon retour !
                </h1>
                <p className="text-chocolat/80 text-sm sm:text-base lg:text-lg font-quicksand leading-relaxed">
                  Connectez-vous pour retrouver vos gourmandises préférées
                </p>
              </div>

              {/* Formulaire */}
              <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                
                {/* Email */}
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

                {/* Mot de passe */}
                <div className="space-y-2">
                  <label htmlFor="password" className="text-chocolat font-quicksand font-medium text-sm sm:text-base">
                    Mot de passe
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

                {/* Message d'erreur */}
                {error && (
                  <div className="bg-rose-bonbon/10 border border-rose-bonbon/30 rounded-lg p-3">
                    <p className="text-rose-bonbon text-xs sm:text-sm font-quicksand">{error}</p>
                  </div>
                )}

                {/* Options */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0">
                  <label className="inline-flex items-center gap-3 font-quicksand text-chocolat/80 cursor-pointer text-sm">
                    <Checkbox id="remember" className="border-or-rose data-[state=checked]:bg-rose-bonbon data-[state=checked]:border-rose-bonbon"/>
                    Se souvenir de moi
                  </label>
                  <Link 
                    href="/mot-de-passe-oublie" 
                    className="text-rose-bonbon hover:text-fraise transition-colors duration-200 font-quicksand text-sm font-medium"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>

                {/* Bouton principal hover:-translate-y-[2px] hover:shadow-lg transition-all duration-300 cursor-pointer*/}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-bonbon to-fraise text-blanc-casse py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold font-quicksand hover:scale-105 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-blanc-casse/30 border-t-blanc-casse rounded-full animate-spin"></div>
                      Connexion...
                    </div>
                  ) : (
                    "Se connecter"
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

                {/* Lien vers inscription */}
                <div className="text-center pt-4 border-t border-or-rose/20">
                  <p className="font-quicksand text-chocolat/80 text-sm sm:text-base">
                    Nouveau chez Croq'Dya ?{" "}
                    <Link 
                      href="/creer-un-compte" 
                      className="text-rose-bonbon hover:text-fraise transition-colors duration-200 font-semibold"
                    >
                      Créer un compte
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default SeConnecterPage;