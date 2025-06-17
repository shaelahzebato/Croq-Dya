"use client";
import { BaggageClaim, Cake, icons, IdCard, LucideVegan, Store, Truck, Vegan } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    question: "Quels sont vos délais de livraison ?",
    answer:
      "Nos délais standards sont de 48h pour les gâteaux personnalisés et 24h pour nos créations du jour. Pour les commandes urgentes, nous proposons un service express en 4h (supplément de 15€).",
    icon: <Truck/>
  },
  {
    question: "Peut-on personnaliser les gâteaux ?",
    answer:
      "Absolument ! Nous adorons créer des pièces uniques. Contactez-nous au moins 5 jours à l'avance pour les wedding cakes et 3 jours pour les autres créations personnalisées.",
    icon: <Cake/>
  },
  {
    question: "Avez-vous des options véganes et sans gluten ?",
    answer:
      "Oui ! Nous proposons une large gamme de desserts végans et sans gluten. Tous nos ingrédients sont certifiés et nous évitons la contamination croisée dans notre atelier dédié.",
    icon: <LucideVegan/>
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer:
      "Nous acceptons les cartes bancaires (Visa, Mastercard), Apple Pay, PayPal et les espèces en boutique. Tous les paiements en ligne sont sécurisés par cryptage SSL.",
    icon: <IdCard/>
  },
  {
    question: "Peut-on venir récupérer en boutique ?",
    answer:
      "Bien sûr ! Le service Click & Collect est gratuit. Commandez en ligne et récupérez vos créations à l'atelier. Nous vous préviendrons par SMS quand votre commande sera prête.",
    icon: <BaggageClaim/>
  },
  {
    question: "Organisez-vous des ateliers pâtisserie ?",
    answer:
      "Oui ! Nous proposons des ateliers tous les samedis matin pour apprendre nos techniques. Parfait pour les anniversaires d'enfants, EVJF ou team buildings. Réservation obligatoire.",
    icon: <Store/>
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-white rounded-[25px] px-6 py-14 shadow-[0_20px_40px_rgba(255,105,180,0.1)] max-w-6xl mx-auto mt-10">
      <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold text-[#FF69B4] dancing_script mb-10">
        Questions Fréquentes
      </h2>

      <div className="grid gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-2 border-[#FF4D6D] rounded-2xl overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full text-left flex justify-between items-center px-6 py-4 font-semibold text-[#8B4513] transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "bg-[#FF69B4] text-white"
                  : "bg-[#FFF8DC] hover:bg-[#FF4D6D] hover:text-white"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-[#FF69B4] hover:text-[#8B4513]">{faq.icon}</span>
                <span>{faq.question}</span>
              </div>
              <span
                className={`transition-transform duration-300 text-xl ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`bg-white px-6 overflow-hidden transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-[400px] py-6"
                  : "max-h-0 py-0"
              }`}
            >
              <p className="text-[#8B4513] leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
