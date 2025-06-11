'use client';

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar/>

      <main className="min-h-screen bg-[#FFF8DC]">
        {/* Section héro */}
        <section className="container mx-auto px-4 py-10 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            
            {/* Contenu à gauche */}
            <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
              <h1 className="text-[#FF69B4] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">Des douceurs qui rendent heureux</h1>              
              <p className="text-[#8B4513] text-base sm:text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
                Découvrez nos créations artisanales faites avec amour. Gâteaux, cupcakes, macarons... Chaque bouchée est une explosion de saveurs !
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  className="bg-[#FF69B4] text-white px-6 py-3 rounded-full hover:bg-[#FF1493] transition-all hover:scale-105 shadow-lg font-medium text-center" 
                  href={"/menu"}
                >
                  Découvrir le Menu
                </Link>
                <Link 
                  className="border-2 border-[#FF69B4] text-[#FF69B4] px-6 py-3 rounded-full hover:bg-[#FF69B4] hover:text-white transition-all hover:scale-105 font-medium text-center" 
                  href={"/commander"}
                >
                  Commander
                </Link>
              </div>
            </div>

            {/* Image à droite */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                <Image
                  src="/Birthday-fraise-cake.jpg"
                  alt="Gâteau d'anniversaire aux fraises"
                  fill
                  className="object-cover rounded-full shadow-2xl animate-float"
                  priority
                />
                {/* Effet de brillance */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>

        <section className=""></section>
      </main>

      {/* <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(-1deg); }
          75% { transform: translateY(-15px) rotate(0.5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style> */}
    </>
  );
}