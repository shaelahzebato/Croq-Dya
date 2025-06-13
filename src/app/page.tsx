'use client';

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="min-h-screen bg-[#FFF8DC]">
        {/* Section héro */}
        <section className="container mx-auto px-4 py-10 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            {/* Contenu à gauche */}
            <div className="flex flex-col gap-6 lg:gap-8 text-center lg:text-left">
              <h1 className="dancing_script text-[#FF69B4] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Des douceurs qui rendent heureux
              </h1>
              <p className="text-[#8B4513] text-base sm:text-lg lg:text-xl leading-relaxed max-w-md mx-auto lg:mx-0">
                Découvrez nos créations artisanales faites avec amour. Gâteaux, cupcakes, macarons... Chaque bouchée est une explosion de saveurs !
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/menu"
                  className="btn-primary btn text-white px-6 py-3 rounded-full hover:bg-[#FF1493] transition-all hover:scale-105 font-medium text-center"
                >
                  Découvrir le Menu
                </Link>
                <Link
                  href="/commander"
                  className="btn-secondary btn px-6 py-3 rounded-full hover:bg-[#FF69B4] hover:text-white transition-all hover:scale-105 font-medium text-center"
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
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-white/20 pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* Section spécialités */}
        <section className="container mx-auto px-4 py-10 lg:py-20">
          <h2 className="dancing_script text-[#FF69B4] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center">
            Nos spécialités
          </h2>
          <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-center max-w-6xl mx-auto py-16">
            {/* Carte 1 */}
            <div className="bg-white p-10 rounded-2xl text-center flex flex-col gap-2">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="/Cheesecake-brownies.jpg"
                  alt="Gâteaux"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <h3 className="dancing_script text-xl font-semibold text-[#FF69B4]">Gâteaux</h3>
              <p className="text-[#8B4513]">Anniversaires, célébrations ou plaisir personnel</p>
            </div>

            {/* Carte 2 */}
            <div className="bg-white p-10 rounded-2xl text-center flex flex-col gap-2">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="/Cheesecake-cupcakes.jpg"
                  alt="Cupcakes"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <h3 className="dancing_script text-xl font-semibold text-[#FF69B4]">Cupcakes</h3>
              <p className="text-[#8B4513]">Mignons et délicieux, parfaits pour toute occasion</p>
            </div>

            {/* Carte 3 */}
            <div className="bg-white p-10 rounded-2xl text-center flex flex-col gap-2">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="/Macaronss.jpg"
                  alt="Macarons"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <h3 className="dancing_script text-xl font-semibold text-[#FF69B4]">Macarons</h3>
              <p className="text-[#8B4513]">L'élégance française dans chaque bouchée</p>
            </div>

            {/* Carte 4 */}
            <div className="bg-white p-10 rounded-2xl text-center flex flex-col gap-2">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="/dessert-3.jpg"
                  alt="Tartes"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <h3 className="dancing_script text-xl font-semibold text-[#FF69B4]">Tartes</h3>
              <p className="text-[#8B4513]">Fruits de saison et créations gourmandes</p>
            </div>
          </aside>
        </section>

        {/* Section Nos Best-Sellers */}
        <section className="bg-white">
          <div className="container mx-auto px-4 py-4 lg:py-20">
            <h2 className="dancing_script text-[#FF69B4] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center">
              Nos Best-Sellers
            </h2>
            <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center max-w-6xl mx-auto py-16">
              <div className="bg-[#FFF8DC] p-10 rounded-2xl text-center flex flex-col gap-2">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src="/Fraise-cheesecake.jpg"
                    alt="Cupcakes"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="dancing_script text-xl font-semibold text-[#FF69B4]">Fraisier Royal</h3>
                  <span className="text-[#8B4513]">32,90 €</span>
                  <div className="flex justify-between items-center ">
                    <Button className="bg-[#FF69B4] cursor-pointer hover:bg-pink-500 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">Ajouter au panier</Button>
                    <Link href={"/"}>
                      <Button className="bg-white text-[#FF69B4] border border-[#FF69B4] hover:bg-pink-100 cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                        <Heart/>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFF8DC] p-10 rounded-2xl text-center flex flex-col gap-2">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src="/Nutella-tiramisu-cups.jpg"
                    alt="Cupcakes"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="dancing_script text-xl font-semibold text-[#FF69B4]">Opéra Chocolat</h3>
                  <span className="text-[#8B4513]">28,50 €</span>
                  <div className="flex justify-between items-center ">
                    <Button className="bg-[#FF69B4] cursor-pointer hover:bg-pink-500 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">Ajouter au panier</Button>
                    <Link href={"/"}>
                      <Button className="bg-white text-[#FF69B4] border border-[#FF69B4] hover:bg-pink-100 cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                        <Heart/>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-[#FFF8DC] p-10 rounded-2xl text-center flex flex-col gap-2">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src="/Sweet-cupcakes.jpg"
                    alt="Cupcakes"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="dancing_script text-xl font-semibold text-[#FF69B4]">Cupcakes Rainbow</h3>
                  <span className="text-[#8B4513]">24,90 €</span>
                  <div className="flex justify-between items-center ">
                    <Button className="bg-[#FF69B4] cursor-pointer hover:bg-pink-500 transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">Ajouter au panier</Button>
                    <Link href={"/"}>
                      <Button className="bg-white text-[#FF69B4] border border-[#FF69B4] hover:bg-pink-100 cursor-pointer transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                        <Heart/>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Section Ce que disent nos clients */}
        <section className="container mx-auto px-4 py-4 lg:py-20">
          <h2 className="dancing_script text-[#FF69B4] text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center">
            Ce que disent nos clients
          </h2>
          <aside className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center max-w-6xl mx-auto py-16">
            <div className="bg-white p-10 rounded-2xl text-center flex flex-col gap-2">
              <h3>⭐⭐⭐⭐⭐</h3>
              <p className="text-[#8B4513] italic">"Absolument délicieux ! Le gâteau d'anniversaire était parfait, mes invités n'arrêtaient pas de me demander où je l'avais trouvé !"</p>
              <span className="text-[#FF69B4]">- Marie L.</span>
            </div>
            <div className="bg-white p-10 rounded-2xl text-center flex flex-col gap-2">
              <h3>⭐⭐⭐⭐⭐</h3>
              <p className="text-[#8B4513] italic">"Livraison rapide, emballage soigné et saveurs exceptionnelles. Je recommande vivement Croq'Dya !"</p>
              <span className="text-[#FF69B4]">- Thomas B.</span>
            </div>
            <div className="bg-white p-10 rounded-2xl text-center flex flex-col gap-2">
              <h3>⭐⭐⭐⭐⭐</h3>
              <p className="text-[#8B4513] italic">"Les macarons sont un rêve ! Chaque parfum est une explosion de goût. Bravo aux pâtissiers !"</p>
              <span className="text-[#FF69B4]">- Sophie M.</span>
            </div>
          </aside>
        </section>  
      </main>
      {/* <Footer/> */}
    </>
  );
}