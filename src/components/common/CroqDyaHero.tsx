"use client";
import React, { useState, useEffect } from "react";

export default function CroqDyaHero() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: "/images/hero/mini-caramel-cheesecake.jpg",
      title: "Croq'Dya",
      subtitle: "L'Art de la Pâtisserie Ivoirienne",
      description:
        "Des créations uniques qui révèlent l'excellence de notre savoir-faire artisanal",
      cta: "Découvrir nos créations",
    },
    {
      id: 2,
      image: "/images/hero/mini-lemon-cheesecake.jpg",
      title: "Sur-Mesure",
      subtitle: "Créations Personnalisées",
      description:
        "Transformez vos événements en moments inoubliables avec nos créations sur-mesure",
      cta: "Commander sur-mesure",
    },
    {
      id: 3,
      image: "/images/hero/orange-macarons.jpg",
      title: "Tradition",
      subtitle: "Saveurs Authentiques",
      description:
        "Un héritage culinaire ivoirien sublimé par des techniques modernes et des ingrédients d'exception",
      cta: "Notre histoire",
    },
  ];

  // Hero carousel auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  const currentSlide = heroSlides[currentHeroSlide];

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentHeroSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.subtitle}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-chocolat/60 via-transparent to-rose-bonbon/40"></div>
            </div>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-16 text-4xl opacity-60 animate-float-1">
            🧁
          </div>
          <div className="absolute top-32 right-20 text-3xl opacity-60 animate-float-2">
            ✨
          </div>
          <div className="absolute bottom-32 left-24 text-3xl opacity-60 animate-float-3">
            🍓
          </div>
          <div className="absolute bottom-20 right-16 text-2xl opacity-60 animate-sparkle">
            💕
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-dancing text-6xl md:text-8xl lg:text-9xl font-bold text-blanc-casse mb-6 drop-shadow-lg">
              {currentSlide.title}
            </h1>
            <h2 className="font-quicksand text-2xl md:text-3xl lg:text-4xl font-semibold text-cream mb-6">
              {currentSlide.subtitle}
            </h2>
            <p className="font-quicksand text-lg md:text-xl text-blanc-casse/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {currentSlide.description}
            </p>
            <button className="bg-rose-bonbon text-blanc-casse px-8 py-4 rounded-full font-quicksand font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              {currentSlide.cta}
            </button>
          </div>
        </div>

        {/* Hero Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentHeroSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentHeroSlide
                  ? "bg-rose-bonbon scale-125"
                  : "bg-blanc-casse/60 hover:bg-blanc-casse/80"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}