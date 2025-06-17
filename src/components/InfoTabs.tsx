"use client";

import { ChartSpline, Grape, MessageSquareWarning, TriangleAlert } from "lucide-react";
import React, { useState } from "react";

const tabs = [
  { id: "ingredients", label: "Ingrédients", icon: <Grape/> },
  { id: "nutrition", label: "Valeurs nutritionnelles", icon: <ChartSpline/> },
  { id: "allergens", label: "Allergènes", icon: <TriangleAlert/> },
];

export default function InfoTabs() {
  const [activeTab, setActiveTab] = useState("ingredients");

  return (
    <section className="space-y-6">
      {/* Onglets */}
      <div className="flex bg-white rounded-2xl shadow-lg p-1 overflow-hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 px-4 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 cursor-pointer ${
              activeTab === tab.id
                ? "bg-[#FF69B4] text-white"
                : "text-[#8B4513] hover:bg-[#FFE4E6]"
            }`}
          >
            <div className="flex items-center gap-2">
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Contenu */}
      <div className="bg-white p-6 rounded-2xl shadow-lg space-y-6">
        {activeTab === "ingredients" && (
          <div>
            <h3 className="text-[#FF69B4] font-bold text-xl mb-6">Nos ingrédients sélectionnés</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                ["🍓", "Fraises Gariguette", "Origine France"],
                ["🥚", "Œufs fermiers", "Label Rouge"],
                ["🌾", "Farine T45", "Meunier français"],
                ["🥛", "Crème fraîche", "AOP Normandie"],
                ["🌟", "Vanille", "Madagascar"],
                ["🍯", "Sucre de canne", "Commerce équitable"],
              ].map(([emoji, title, subtitle], i) => (
                <div key={i} className="bg-[#FFF8DC] p-4 rounded-xl text-center">
                  <div className="text-3xl mb-2">{emoji}</div>
                  <div className="text-[#8B4513] font-semibold">{title}</div>
                  <div className="text-sm text-[#8B4513]">{subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "nutrition" && (
          <div>
            <h3 className="text-[#FF69B4] font-bold text-xl mb-6">Valeurs nutritionnelles (pour 100g)</h3>
            <table className="w-full text-left border-collapse text-[#8B4513]">
              <tbody>
                {[
                  ["Énergie", "245 kcal"],
                  ["Matières grasses", "12g"],
                  ["dont acides gras saturés", "7,5g"],
                  ["Glucides", "28g"],
                  ["dont sucres", "24g"],
                  ["Protéines", "5,2g"],
                  ["Sel", "0,15g"],
                ].map(([label, value], i) => (
                  <tr key={i} className="border-b border-[#FFF8DC]">
                    <th className="py-2 font-bold text-[#FF69B4]">{label}</th>
                    <td className="py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "allergens" && (
          <div className="space-y-4">
            <h3 className="text-[#FF69B4] font-bold text-xl">Informations sur les allergènes</h3>
            <div className="bg-[#ffe6e6] text-[#d63384] p-4 rounded-xl">
              <strong><TriangleAlert/> Contient :</strong> Gluten, Œufs, Lait
            </div>
            <div className="bg-[#e6f3ff] text-[#0066cc] p-4 rounded-xl">
              <strong><MessageSquareWarning/> Peut contenir des traces de :</strong> Fruits à coque, Soja
            </div>
          </div>
        )}
      </div>
    </section>
  );
}