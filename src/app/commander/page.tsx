"use client"
import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart, Clock, MapPin, Phone, Check, Star, ArrowRight, Edit3 } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  badge?: string;
  rating: number;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CartItems {
  [key: number]: number;
}

export default function CommanderPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('bestsellers');
  const [cart, setCart] = useState<CartItems>({});
  const [showQuickOrder, setShowQuickOrder] = useState<boolean>(false);

  const categories: Category[] = [
    { id: 'bestsellers', name: 'Nos Best-Sellers', icon: '⭐' },
    { id: 'gateaux', name: 'Gâteaux', icon: '🎂' },
    { id: 'cupcakes', name: 'Cupcakes', icon: '🧁' },
    { id: 'macarons', name: 'Macarons', icon: '🌈' },
    { id: 'tartes', name: 'Tartes', icon: '🥧' },
    { id: 'cookies', name: 'Cookies', icon: '🍪' }
  ];

  const products: { [key: string]: Product[] } = {
    bestsellers: [
      { id: 1, name: 'Fraisier Vanille', price: 32.90, image: '🍓', description: 'Notre signature : fraises fraîches et crème vanille', badge: 'Best-seller', rating: 4.8 },
      { id: 2, name: 'Choco-Amour', price: 34.90, image: '🍫', description: 'Chocolat fondant et cœur noisette', badge: 'Favori', rating: 4.9 },
      { id: 3, name: 'Cupcake Caramel', price: 16.90, image: '🧁', description: 'Caramel fondant et topping gourmand', badge: 'Nouveau', rating: 4.9 },
      { id: 4, name: 'Macaron Caramel Beurre Salé', price: 20.00, image: '🍯', description: 'Caramel coulant au beurre salé', badge: 'Spécialité', rating: 4.9 }
    ],
    gateaux: [
      { id: 7, name: 'Fraisier Vanille', price: 32.90, image: '🍓', description: 'Fraises fraîches et crème vanille', rating: 4.8 },
      { id: 8, name: 'Choco-Amour', price: 34.90, image: '🍫', description: 'Chocolat fondant et cœur noisette', rating: 4.9 },
      { id: 9, name: 'DyaChoco Mix', price: 35.00, image: '🍰', description: 'Explosion de chocolats noirs et blancs', rating: 4.8 },
      { id: 10, name: 'Velours Rouge', price: 31.50, image: '❤️', description: 'Red velvet revisité à la Dya', rating: 4.8 }
    ],
    cupcakes: [
      { id: 11, name: 'Cupcake Fraise', price: 15.90, image: '🍓', description: 'Cupcake fraise et chantilly rose', rating: 4.7 },
      { id: 12, name: 'Cupcake ChocoVanille', price: 16.50, image: '🍫', description: 'Mélange gourmand vanille-chocolat', rating: 4.8 }
    ],
    macarons: [
      { id: 15, name: 'Macaron Framboise', price: 18.90, image: '🌸', description: 'Ganache framboise légère et fruitée', rating: 4.7 },
      { id: 16, name: 'Macaron Chocolat Noir', price: 19.90, image: '🍫', description: 'Ganache chocolat intense à 70%', rating: 4.9 }
    ],
    tartes: [
      { id: 19, name: 'Tarte Fraise Basilic', price: 24.90, image: '🍓', description: 'Fraises fraîches et touche basilic', rating: 4.8 },
      { id: 20, name: 'Tarte Tatin', price: 25.50, image: '🍎', description: 'Pommes caramélisées et pâte feuilletée', rating: 4.9 }
    ],
    cookies: [
      { id: 23, name: 'Cookie ChocoChunk', price: 8.90, image: '🍪', description: 'Classique cookie au chocolat fondant', rating: 4.9 },
      { id: 24, name: 'Cookie Double Chocolat', price: 9.50, image: '🍫', description: 'Chocolat noir et cacao intense', rating: 4.8 }
    ]
  };

  const addToCart = (product: Product): void => {
    setCart(prev => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
  };

  const removeFromCart = (productId: number): void => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getTotalItems = (): number => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  };

  const getTotalPrice = (): string => {
    let total = 0;
    Object.entries(cart).forEach(([productId, qty]) => {
      const product = Object.values(products).flat().find(p => p.id === parseInt(productId));
      if (product) total += product.price * qty;
    });
    return total.toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Logique de soumission
    console.log('Commande soumise');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Header */}
      <section className="bg-white/95 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#8B4513]">Commander en ligne</h1>
              <p className="text-gray-600 text-sm">Livraison rapide • Paiement sécurisé</p>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-pink-500" />
                <span>Prêt en 2h</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span>Livraison gratuite dès 30€</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <section className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4 sticky top-24">
              <h2 className="font-semibold text-[#8B4513] mb-3">Catégories</h2>
              <div className="space-y-1">
                {categories.map((category: Category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left p-2 rounded-lg transition-all text-sm ${
                      selectedCategory === category.id
                        ? 'bg-pink-100 text-pink-700 font-medium'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Infos pratiques */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="font-medium text-[#8B4513] mb-2 text-sm">Infos pratiques</h3>
                <div className="space-y-2 text-xs text-gray-600">
                  <div className="flex items-center gap-2">
                    <Phone className="w-3 h-3 text-pink-500" />
                    <span>01 23 45 67 89</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3 h-3 text-pink-500" />
                    <span>7h-19h tous les jours</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Grille produits */}
          <section className="lg:col-span-3">
            {selectedCategory === 'bestsellers' && (
              <div className="mb-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-xl">
                <h2 className="text-xl font-bold mb-1">🌟 Nos Best-Sellers</h2>
                <p className="text-pink-100 text-sm">Les créations préférées de nos clients</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {products[selectedCategory]?.map((product: Product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border">
                  <div className="p-4">
                    {product.badge && (
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                          {product.badge}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-3">
                      <span className="text-4xl block mb-2">{product.image}</span>
                      <h3 className="font-semibold text-[#8B4513] text-sm leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-pink-600">
                        {product.price.toFixed(2)} €
                      </span>
                      {!product.badge && (
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-xs text-gray-600">{product.rating}</span>
                        </div>
                      )}
                    </div>

                    {cart[product.id] ? (
                      <div className="flex items-center justify-between bg-pink-50 rounded-lg p-2">
                        <button
                          onClick={() => removeFromCart(product.id)}
                          className="w-7 h-7 rounded-full bg-pink-200 text-pink-600 flex items-center justify-center hover:bg-pink-300 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-semibold text-[#8B4513] text-sm px-2">
                          {cart[product.id]}
                        </span>
                        <button
                          onClick={() => addToCart(product)}
                          className="w-7 h-7 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-all text-sm font-medium"
                      >
                        Ajouter
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Panier flottant avec CHOIX */}
        {getTotalItems() > 0 && (
          <section className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
            {/* Bouton Commande Rapide */}
            <button
              onClick={() => setShowQuickOrder(true)}
              className="bg-green-500 text-white rounded-full shadow-xl p-3 hover:bg-green-600 transition-all hover:scale-105 flex items-center gap-2 text-sm font-medium"
            >
              <Check className="w-4 h-4" />
              <span className="hidden sm:block">Commande Express</span>
            </button>

            {/* Bouton Panier Complet */}
            <a
              href="/panier"
              className="bg-pink-500 text-white rounded-full shadow-xl shadow-pink-500/50 p-4 hover:bg-pink-600 transition-all hover:scale-105 group flex items-center gap-3"
            >
              <div className="relative">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-white text-pink-500 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {getTotalItems()}
                </span>
              </div>
              <div className="hidden group-hover:block">
                <div className="text-right">
                  <div className="text-xs opacity-90">{getTotalItems()} article(s)</div>
                  <div className="font-bold">{getTotalPrice()} €</div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 hidden group-hover:block" />
            </a>
          </section>
        )}

        {/* Modal Commande Express */}
        {showQuickOrder && (
          <section className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-[#8B4513] flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    Commande Express
                  </h3>
                  <button
                    onClick={() => setShowQuickOrder(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                  <p className="text-sm text-green-700">
                    ⚡ Commande simplifiée : nom + téléphone seulement !
                  </p>
                </div>

                {/* Résumé mini */}
                <div className="bg-gray-50 rounded-lg p-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>{getTotalItems()} article(s)</span>
                    <span className="font-bold">{getTotalPrice()} €</span>
                  </div>
                </div>

                {/* Formulaire ultra-simple */}
                <form className="space-y-3" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full p-3 border rounded-lg focus:border-green-500 focus:outline-none"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Votre téléphone"
                    className="w-full p-3 border rounded-lg focus:border-green-500 focus:outline-none"
                    required
                  />
                  
                  <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium"
                  >
                    🚀 Valider en 2 clics
                  </button>
                </form>

                <div className="mt-4 pt-4 border-t text-center">
                  <a 
                    href="/panier"
                    className="text-pink-500 text-sm hover:underline flex items-center justify-center gap-1"
                  >
                    <Edit3 className="w-3 h-3" />
                    Ou personnaliser ma commande
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  );
}












// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import {
//   Plus, Minus, ShoppingCart, Clock, MapPin, Phone, Check, Star
// } from "lucide-react";

// export default function CommanderPage() {
//   const [selectedCategory, setSelectedCategory] = useState("bestsellers");
//   const [cart, setCart] = useState<Record<number, number>>({});
//   const [showOrderForm, setShowOrderForm] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const nameInputRef = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (showOrderForm && nameInputRef.current) {
//       nameInputRef.current.focus();
//     }
//   }, [showOrderForm]);

//   const categories = [
//     { id: "bestsellers", name: "Nos Best-Sellers", icon: "⭐" },
//     { id: "gateaux", name: "Gâteaux", icon: "🎂" },
//     { id: "cupcakes", name: "Cupcakes", icon: "🧁" },
//     { id: "macarons", name: "Macarons", icon: "🌈" },
//     { id: "tartes", name: "Tartes", icon: "🥧" },
//     { id: "cookies", name: "Cookies", icon: "🍪" },
//   ];

//   const products: Record<string, any[]> = {
//     bestsellers: [
//       {
//         id: 1,
//         name: "Fraisier Vanille",
//         price: 32.9,
//         image: "🍓",
//         description: "Notre signature : fraises fraîches et crème vanille",
//         badge: "Best‑seller",
//         rating: 4.8,
//       },
//       {
//         id: 2,
//         name: "Choco-Amour",
//         price: 34.9,
//         image: "🍫",
//         description: "Chocolat fondant et cœur noisette",
//         badge: "Favori",
//         rating: 4.9,
//       },
//       {
//         id: 3,
//         name: "Cupcake Caramel",
//         price: 16.9,
//         image: "🧁",
//         description: "Caramel fondant et topping gourmand",
//         badge: "Nouveau",
//         rating: 4.9,
//       },
//       {
//         id: 4,
//         name: "Macaron Caramel Beurre Salé",
//         price: 20.0,
//         image: "🍯",
//         description: "Caramel coulant au beurre salé",
//         badge: "Spécialité",
//         rating: 4.9,
//       },
//       {
//         id: 5,
//         name: "Cookie ChocoChunk",
//         price: 8.9,
//         image: "🍪",
//         description: "Classique cookie au chocolat fondant",
//         badge: "Incontournable",
//         rating: 4.9,
//       },
//       {
//         id: 6,
//         name: "Tarte Tatin",
//         price: 25.5,
//         image: "🍎",
//         description: "Pommes caramélisées et pâte feuilletée",
//         badge: "Traditionnel",
//         rating: 4.9,
//       },
//     ],
//     gateaux: [
//       {
//         id: 7,
//         name: "Fraisier Vanille",
//         price: 32.9,
//         image: "🍓",
//         description: "Fraises fraîches et crème vanille",
//         rating: 4.8,
//       },
//       {
//         id: 8,
//         name: "Choco-Amour",
//         price: 34.9,
//         image: "🍫",
//         description: "Chocolat fondant et cœur noisette",
//         rating: 4.9,
//       },
//       {
//         id: 9,
//         name: "DyaChoco Mix",
//         price: 35.0,
//         image: "🍰",
//         description: "Explosion de chocolats noirs et blancs",
//         rating: 4.8,
//       },
//       {
//         id: 10,
//         name: "Velours Rouge",
//         price: 31.5,
//         image: "❤️",
//         description: "Red velvet revisité à la Dya",
//         rating: 4.8,
//       },
//     ],
//     cupcakes: [
//       {
//         id: 11,
//         name: "Cupcake Fraise",
//         price: 15.9,
//         image: "🍓",
//         description: "Cupcake fraise et chantilly rose",
//         rating: 4.7,
//       },
//       {
//         id: 12,
//         name: "Cupcake ChocoVanille",
//         price: 16.5,
//         image: "🍫",
//         description: "Mélange gourmand vanille-chocolat",
//         rating: 4.8,
//       },
//       {
//         id: 13,
//         name: "Cupcake Caramel",
//         price: 16.9,
//         image: "🧁",
//         description: "Caramel fondant et topping gourmand",
//         rating: 4.9,
//       },
//       {
//         id: 14,
//         name: "Cupcake RedVelvet",
//         price: 17.0,
//         image: "❤️",
//         description: "Gourmandise rouge et crème légère",
//         rating: 4.9,
//       },
//     ],
//     macarons: [
//       {
//         id: 15,
//         name: "Macaron Framboise",
//         price: 18.9,
//         image: "🌸",
//         description: "Ganache framboise légère et fruitée",
//         rating: 4.7,
//       },
//       {
//         id: 16,
//         name: "Macaron Chocolat Noir",
//         price: 19.9,
//         image: "🍫",
//         description: "Ganache chocolat intense à 70%",
//         rating: 4.9,
//       },
//       {
//         id: 17,
//         name: "Macaron Caramel Beurre Salé",
//         price: 20.0,
//         image: "🍯",
//         description: "Caramel coulant au beurre salé",
//         rating: 4.9,
//       },
//       {
//         id: 18,
//         name: "Macaron Pistache",
//         price: 19.5,
//         image: "💚",
//         description: "Ganache pistache onctueuse",
//         rating: 4.6,
//       },
//     ],
//     tartes: [
//       {
//         id: 19,
//         name: "Tarte Fraise Basilic",
//         price: 24.9,
//         image: "🍓",
//         description: "Fraises fraîches et touche basilic",
//         rating: 4.8,
//       },
//       {
//         id: 20,
//         name: "Tarte Tatin",
//         price: 25.5,
//         image: "🍎",
//         description: "Pommes caramélisées et pâte feuilletée",
//         rating: 4.9,
//       },
//       {
//         id: 21,
//         name: "Tarte Citron Meringuée",
//         price: 23.9,
//         image: "🍋",
//         description: "Acidulé et nuage sucré",
//         rating: 4.7,
//       },
//       {
//         id: 22,
//         name: "Tarte Chocolat Noisette",
//         price: 26.0,
//         image: "🌰",
//         description: "Ganache intense et croustillant",
//         rating: 4.8,
//       },
//     ],
//     cookies: [
//       {
//         id: 23,
//         name: "Cookie ChocoChunk",
//         price: 8.9,
//         image: "🍪",
//         description: "Classique cookie au chocolat fondant",
//         rating: 4.9,
//       },
//       {
//         id: 24,
//         name: "Cookie Double Chocolat",
//         price: 9.5,
//         image: "🍫",
//         description: "Chocolat noir et cacao intense",
//         rating: 4.8,
//       },
//       {
//         id: 25,
//         name: "Cookie Noisette Caramel",
//         price: 9.9,
//         image: "🌰",
//         description: "Noisettes croquantes et caramel",
//         rating: 4.9,
//       },
//       {
//         id: 26,
//         name: "Cookie Avoine Raisin",
//         price: 7.9,
//         image: "🌾",
//         description: "Avoine croustillante et raisins secs",
//         rating: 4.6,
//       },
//     ],
//   };

//   const addToCart = (product: any) =>
//     setCart((prev) => ({
//       ...prev,
//       [product.id]: (prev[product.id] || 0) + 1,
//     }));

//   const removeFromCart = (productId: number) =>
//     setCart((prev) => {
//       const newCart = { ...prev };
//       if (newCart[productId] > 1) newCart[productId]--;
//       else delete newCart[productId];
//       return newCart;
//     });

//   const getTotalItems = () =>
//     Object.values(cart).reduce((sum, qty) => sum + qty, 0);

//   const getTotalPrice = () => {
//     let total = 0;
//     Object.entries(cart).forEach(([id, qty]) => {
//       const p = Object.values(products)
//         .flat()
//         .find((o) => o.id === +id);
//       if (p) total += p.price * qty;
//     });
//     return total.toFixed(2);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
//       {/* Header */}
//       <div className="bg-white/95 backdrop-blur-sm shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between">
//           <div>
//             <h1 className="text-2xl font-bold text-[#8B4513]">
//               Commander en ligne
//             </h1>
//             <p className="text-gray-600 text-sm">
//               Livraison rapide • Paiement sécurisé
//             </p>
//           </div>
//           <div className="flex items-center gap-3 text-sm text-gray-600">
//             <div className="flex items-center gap-1">
//               <Clock className="w-4 h-4 text-pink-500" />
//               <span>Prêt en 2 h</span>
//             </div>
//             <div className="flex items-center gap-1">
//               <MapPin className="w-4 h-4 text-pink-500" />
//               <span>Livraison gratuite dès 30 €</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="grid lg:grid-cols-4 gap-6">
//           {/* Sidebar */}
//           <aside className="lg:col-span-1">
//             <div className="bg-white rounded-xl shadow-lg p-4 sticky top-24">
//               <h2 className="font-semibold text-[#8B4513] mb-3">
//                 Catégories
//               </h2>
//               <nav className="space-y-1">
//                 {categories.map((c) => (
//                   <button
//                     key={c.id}
//                     onClick={() => setSelectedCategory(c.id)}
//                     className={`w-full text-left p-2 rounded-lg transition-all text-sm ${
//                       selectedCategory === c.id
//                         ? "bg-pink-100 text-pink-700 font-medium"
//                         : "hover:bg-gray-50 text-gray-700"
//                     }`}
//                   >
//                     <span className="mr-2">{c.icon}</span> {c.name}
//                   </button>
//                 ))}
//               </nav>
//               <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-600 space-y-2">
//                 <div className="flex items-center gap-2">
//                   <Phone className="w-3 h-3 text-pink-500" />
//                   <span>01 23 45 67 89</span>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Clock className="w-3 h-3 text-pink-500" />
//                   <span>7h‑19h tous les jours</span>
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* Products */}
//           <section className="lg:col-span-3">
//             {selectedCategory === "bestsellers" && (
//               <div className="mb-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white p-4 rounded-xl">
//                 <h2 className="text-xl font-bold mb-1">
//                   🌟 Nos Best-Sellers
//                 </h2>
//                 <p className="text-pink-100 text-sm">
//                   Les créations préférées de nos clients
//                 </p>
//               </div>
//             )}

//             <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
//               {products[selectedCategory]?.map((product) => (
//                 <div
//                   key={product.id}
//                   className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border"
//                 >
//                   <div className="p-4">
//                     {product.badge && (
//                       <div className="flex justify-between items-center mb-2">
//                         <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full font-medium">
//                           {product.badge}
//                         </span>
//                         <div className="flex items-center gap-1">
//                           <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
//                           <span className="text-xs text-gray-600">
//                             {product.rating}
//                           </span>
//                         </div>
//                       </div>
//                     )}

//                     <div className="text-center mb-3">
//                       <span className="text-4xl block mb-2">
//                         {product.image}
//                       </span>
//                       <h3 className="font-semibold text-[#8B4513] text-sm leading-tight">
//                         {product.name}
//                       </h3>
//                       <p className="text-xs text-gray-600 mt-1 line-clamp-2">
//                         {product.description}
//                       </p>
//                     </div>

//                     <div className="flex items-center justify-between mb-3">
//                       <span className="text-lg font-bold text-pink-600">
//                         {product.price.toFixed(2)} €
//                       </span>
//                       {!product.badge && (
//                         <div className="flex items-center gap-1">
//                           <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
//                           <span className="text-xs text-gray-600">
//                             {product.rating}
//                           </span>
//                         </div>
//                       )}
//                     </div>

//                     {cart[product.id] ? (
//                       <div className="flex items-center justify-between bg-pink-50 rounded-lg p-2">
//                         <button
//                           onClick={() => removeFromCart(product.id)}
//                           aria-label="Retirer un"
//                           className="w-7 h-7 rounded-full bg-pink-200 text-pink-600 flex items-center justify-center hover:bg-pink-300 transition-colors"
//                         >
//                           <Minus className="w-3 h-3" />
//                         </button>
//                         <span className="font-semibold text-[#8B4513] text-sm px-2">
//                           {cart[product.id]}
//                         </span>
//                         <button
//                           onClick={() => addToCart(product)}
//                           aria-label="Ajouter un"
//                           className="w-7 h-7 rounded-full bg-pink-500 text-white flex items-center justify-center hover:bg-pink-600 transition-colors"
//                         >
//                           <Plus className="w-3 h-3" />
//                         </button>
//                       </div>
//                     ) : (
//                       <button
//                         onClick={() => addToCart(product)}
//                         aria-label={`Ajouter ${product.name}`}
//                         className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-all text-sm font-medium"
//                       >
//                         Ajouter
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </div>

//       {/* Floating Cart */}
//       {getTotalItems() > 0 && (
//         <div className="fixed bottom-6 right-6 z-50">
//           <button
//             onClick={() => setShowOrderForm(true)}
//             className="bg-pink-500 text-white rounded-full shadow-xl shadow-pink-500/50 p-4 hover:bg-pink-600 transition-all hover:scale-105 group"
//             aria-label="Voir le panier"
//           >
//             <div className="flex items-center gap-3">
//               <div className="relative">
//                 <ShoppingCart className="w-6 h-6" />
//                 <span className="absolute -top-2 -right-2 bg-white text-pink-500 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
//                   {getTotalItems()}
//                 </span>
//               </div>
//               <div className="hidden group-hover:block ">
//                 <div className="text-right">
//                   <div className="text-xs opacity-90">
//                     {getTotalItems()} article(s)
//                   </div>
//                   <div className="font-bold">{getTotalPrice()} €</div>
//                 </div>
//               </div>
//             </div>
//           </button>
//         </div>
//       )}

//       {/* Order Modal */}
//       {showOrderForm && (
//         <div
//           className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
//           role="dialog"
//           aria-modal="true"
//         >
//           <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-fadeIn">
//             <div className="p-6">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-lg font-bold text-[#8B4513]">
//                   Votre commande
//                 </h3>
//                 <button
//                   onClick={() => setShowOrderForm(false)}
//                   aria-label="Fermer"
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   ✕
//                 </button>
//               </div>

//               {Object.keys(cart).length === 0 ? (
//                 <p className="text-gray-500 italic text-center">
//                   Votre panier est vide...
//                 </p>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => setCart({})}
//                     className="text-sm text-pink-500 hover:underline mb-2"
//                   >
//                     Vider le panier
//                   </button>

//                   <div className="space-y-3 mb-6">
//                     {Object.entries(cart).map(([id, qty]) => {
//                       const p = Object.values(products)
//                         .flat()
//                         .find((o) => o.id === +id);
//                       if (!p) return null;
//                       return (
//                         <div
//                           key={id}
//                           className="flex items-center justify-between text-sm"
//                         >
//                           <div className="flex items-center gap-2">
//                             <span>{p.image}</span>
//                             <span>{p.name}</span>
//                             <span className="text-gray-500">× {qty}</span>
//                           </div>
//                           <span className="font-medium">
//                             {(p.price * qty).toFixed(2)} €
//                           </span>
//                         </div>
//                       );
//                     })}
//                     <div className="border-t pt-3 flex justify-between font-bold">
//                       <span>Total</span>
//                       <span className="text-pink-600">
//                         {getTotalPrice()} €
//                       </span>
//                     </div>
//                   </div>
//                 </>
//               )}

//               <form
//                 className="space-y-4"
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   setIsSubmitting(true);
//                   setTimeout(() => {
//                     setShowOrderForm(false);
//                     setCart({});
//                     setIsSubmitting(false);
//                     alert("✅ Commande validée avec succès !");
//                   }, 2000);
//                 }}
//               >
//                 <div>
//                   <input
//                     ref={nameInputRef}
//                     type="text"
//                     placeholder="Nom complet"
//                     className="w-full p-3 border rounded-lg focus:border-pink-500 focus:outline-none"
//                     required
//                     aria-label="Nom complet"
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="tel"
//                     placeholder="Téléphone"
//                     className="w-full p-3 border rounded-lg focus:border-pink-500 focus:outline-none"
//                     required
//                     aria-label="Téléphone"
//                   />
//                 </div>
//                 <div>
//                   <select
//                     className="w-full p-3 border rounded-lg focus:border-pink-500 focus:outline-none"
//                     aria-label="Mode de retrait"
//                   >
//                     <option>Retrait en boutique (gratuit)</option>
//                     <option>Livraison à domicile (+5€)</option>
//                   </select>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full py-3 rounded-lg font-medium transition-all ${
//                     isSubmitting
//                       ? "bg-gray-300 cursor-not-allowed"
//                       : "bg-pink-500 text-white hover:bg-pink-600"
//                   }`}
//                 >
//                   {isSubmitting ? (
//                     "Validation en cours..."
//                   ) : (
//                     <span className="flex items-center justify-center gap-2">
//                       <Check className="w-4 h-4" />
//                       Valider la commande
//                     </span>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
