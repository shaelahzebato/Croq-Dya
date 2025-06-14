import React from 'react'

export default function PanierPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="dancing_script text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FF69B4] mb-4 text-center">Mon Panier Gourmand</h1>
      <p className="text-[#8B4513] text-base sm:text-lg lg:text-xl max-w-lg mx-auto leading-relaxed">
        Finalisez votre commande de délicieuses créations
      </p>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:flex-2 bg-pink-200 p-4">Gros contenu</div>
        <div className="lg:flex-1 bg-yellow-200 p-4">Petit contenu</div>
      </div>
    </section>
  )
}
