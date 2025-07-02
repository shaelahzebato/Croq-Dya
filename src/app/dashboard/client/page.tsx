"use client"
import React, { useState } from 'react';
import { 
  User, Settings, ShoppingBag, Heart, Clock, MapPin, Phone, 
  CreditCard, Bell, Edit3, ChevronRight, Award, Eye
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import CroqDyaLogo from '@/components/common/CroqDyaLogo';

interface UserData {
  name: string;
  email: string;
  phone: string;
  birthdate: string;
  address: string;
  memberSince: string;
  totalOrders: number;
  totalSpent: number;
  favoriteProducts: number;
  loyaltyPoints: number;
}

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: string[];
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  lastOrdered: string;
}

interface TabButtonProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: (id: string) => void;
}

interface StatusBadgeProps {
  status: string;
}

export default function DashboardUtilisateur() {
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [showEditProfile, setShowEditProfile] = useState<boolean>(false);

  // Données utilisateur simulées
  const userData: UserData = {
    name: "Dya Croq'",
    email: "dya@email.com",
    phone: "06 12 34 56 78",
    birthdate: "15 Mars 1990",
    address: "123 Rue de la Paix, Abidjan",
    memberSince: "Janvier 2024",
    totalOrders: 12,
    totalSpent: 385.50,
    favoriteProducts: 8,
    loyaltyPoints: 450
  };

  const recentOrders: Order[] = [
    { id: "CD-123456", date: "2024-06-15", status: "Livré", total: 42.90, items: ["Fraisier Vanille", "Cupcakes x6"] },
    { id: "CD-123455", date: "2024-06-10", status: "En préparation", total: 28.50, items: ["Macarons x12"] },
    { id: "CD-123454", date: "2024-06-05", status: "Livré", total: 65.20, items: ["Gâteau Chocolat", "Tartelettes x4"] }
  ];

  const favoriteProducts: Product[] = [
    { id: 1, name: "Fraisier Vanille", price: 32.90, image: "/Delicious-berries.jpg", lastOrdered: "Il y a 5 jours" },
    { id: 2, name: "Macarons Assortis", price: 18.90, image: "/Macaronss.jpg", lastOrdered: "Il y a 1 semaine" },
    { id: 3, name: "Cupcakes Caramel", price: 16.90, image: "/Fiesta-cupcakes.jpg", lastOrdered: "Il y a 2 semaines" }
  ];

  const TabButton: React.FC<TabButtonProps> = ({ id, label, icon, isActive, onClick }) => (
    <button
      onClick={() => onClick(id)}
      className={`flex items-center gap-3 w-full p-3 rounded-lg transition-all ${
        isActive 
          ? 'bg-pink-100 text-pink-700 border-l-4 border-pink-500' 
          : 'text-gray-600 hover:bg-gray-50'
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </button>
  );

  const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const styles: { [key: string]: string } = {
      "Livré": "bg-green-100 text-green-700",
      "En préparation": "bg-orange-100 text-orange-700",
      "En livraison": "bg-blue-100 text-blue-700",
      "Annulé": "bg-red-100 text-red-700"
    };

    return (
      <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[status] || 'bg-gray-100 text-gray-700'}`}>
        {status}
      </span>
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#8B4513]">Mon Espace Croq'Dya</h1>
              <p className="text-gray-600">Bonjour {userData.name} ! 👋</p>
            </div>
            <Link href={"/"}>
              <CroqDyaLogo/>
            </Link>
            <div className="flex items-center gap-3">
              <button className="relative p-2 text-gray-600 hover:text-pink-600 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
              </button>
              <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </div>
        </div>
      </header>

      <aside className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <section className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-4 sticky top-24">
              <div className="space-y-2">
                <TabButton
                  id="overview"
                  label="Vue d'ensemble"
                  icon={<User className="w-5 h-5" />}
                  isActive={activeTab === 'overview'}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="orders"
                  label="Mes Commandes"
                  icon={<ShoppingBag className="w-5 h-5" />}
                  isActive={activeTab === 'orders'}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="favorites"
                  label="Mes Favoris"
                  icon={<Heart className="w-5 h-5" />}
                  isActive={activeTab === 'favorites'}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="loyalty"
                  label="Fidélité"
                  icon={<Award className="w-5 h-5" />}
                  isActive={activeTab === 'loyalty'}
                  onClick={setActiveTab}
                />
                <TabButton
                  id="profile"
                  label="Mon Profil"
                  icon={<Settings className="w-5 h-5" />}
                  isActive={activeTab === 'profile'}
                  onClick={setActiveTab}
                />
              </div>
            </div>
          </section>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Vue d'ensemble */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <section className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <ShoppingBag className="w-6 h-6 text-pink-600" />
                    </div>
                    <div className="text-2xl font-bold text-[#8B4513]">{userData.totalOrders}</div>
                    <div className="text-sm text-gray-600">Commandes</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CreditCard className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-[#8B4513]">{userData.totalSpent}€</div>
                    <div className="text-sm text-gray-600">Dépensé</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-2xl font-bold text-[#8B4513]">{userData.favoriteProducts}</div>
                    <div className="text-sm text-gray-600">Favoris</div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Award className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div className="text-2xl font-bold text-[#8B4513]">{userData.loyaltyPoints}</div>
                    <div className="text-sm text-gray-600">Points fidélité</div>
                  </div>
                </section>

                {/* Commandes récentes */}
                <section className="bg-white rounded-xl shadow-md p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-[#8B4513]">Commandes récentes</h3>
                    <button 
                      onClick={() => setActiveTab('orders')}
                      className="text-pink-600 hover:text-pink-700 flex items-center gap-1 text-sm cursor-pointer"
                    >
                      Voir tout <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentOrders.slice(0, 3).map((order: Order) => (
                      <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-semibold text-[#8B4513]">#{order.id}</span>
                            <StatusBadge status={order.status} />
                          </div>
                          <div className="text-sm text-gray-600">{order.items.join(', ')}</div>
                          <div className="text-xs text-gray-500 mt-1">{order.date}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-[#8B4513]">{order.total}€</div>
                          <button className="text-pink-600 text-sm hover:underline cursor-pointer">Détails</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Actions rapides */}
                <section className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-xl font-bold text-[#8B4513] mb-4">Actions rapides</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <button className="p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors text-center cursor-pointer">
                      <ShoppingBag className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                      <div className="font-medium text-[#8B4513]">Nouvelle commande</div>
                    </button>
                    <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer text-center">
                      <Heart className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                      <div className="font-medium text-[#8B4513]">Mes favoris</div>
                    </button>
                    <button className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors text-center cursor-pointer">
                      <Phone className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-medium text-[#8B4513]">Nous contacter</div>
                    </button>
                  </div>
                </section>
              </div>
            )}

            {/* Mes Commandes */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                {/* Header titre + filtre */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <h2 className="text-2xl font-bold text-[#8B4513]">Mes Commandes</h2>
                  <div className="flex gap-2">
                    <select className="border rounded-lg px-3 py-2 text-sm">
                      <option>Toutes les commandes</option>
                      <option>En cours</option>
                      <option>Livrées</option>
                      <option>Annulées</option>
                    </select>
                  </div>
                </div>

                {/* Liste des commandes */}
                <section className="space-y-4">
                  {recentOrders.map((order: Order) => (
                    <div key={order.id} className="bg-white rounded-xl shadow-md p-6 overflow-hidden">
                      {/* En-tête de commande */}
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-1">
                            <h3 className="text-lg font-bold text-[#8B4513]">
                              Commande #{order.id}
                            </h3>
                            <StatusBadge status={order.status} />
                          </div>
                          <p className="text-gray-600 text-sm">Commandé le {order.date}</p>
                        </div>

                        <div className="flex flex-col items-start md:items-end gap-2">
                          <div className="text-xl font-bold text-pink-600">{order.total}€</div>
                          <div className="flex flex-wrap gap-2">
                            <button className="text-sm bg-pink-100 text-pink-700 px-3 py-1 rounded-full hover:bg-pink-200 whitespace-nowrap cursor-pointer">
                              Détails
                            </button>
                            {order.status === "Livré" && (
                              <button className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full hover:bg-green-200 whitespace-nowrap cursor-pointer">
                                Recommander
                              </button>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Articles */}
                      <div className="border-t pt-4">
                        <h4 className="font-medium text-[#8B4513] mb-2">Articles commandés :</h4>
                        <div className="flex flex-wrap gap-2">
                          {order.items.map((item: string, index: number) => (
                            <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Message préparation */}
                      {order.status === "En préparation" && (
                        <div className="mt-4 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-orange-600" />
                            <span className="text-sm text-orange-700">
                              Votre commande est en cours de préparation. Prête dans 2h !
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </section>
              </div>
            )}


            {/* Mes Favoris */}
            {activeTab === 'favorites' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#8B4513]">Mes Favoris</h2>
                  <span className="text-gray-600">{favoriteProducts.length} produits</span>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {favoriteProducts.map((product: Product) => (
                    <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
                      <div className="p-6">
                        <div className="text-center mb-4">
                          <div className="relative mx-auto w-30 h-30 mb-4 rounded-full overflow-hidden border border-pink-100 shadow-sm">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-cover"
                              priority
                            />
                          </div>
                          <h3 className="font-bold text-[#8B4513] text-lg">{product.name}</h3>
                          <p className="text-gray-600 text-sm">Dernière commande : {product.lastOrdered}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xl font-bold text-pink-600">{product.price}€</span>
                          <button className="text-red-500 hover:text-red-700 cursor-pointer">
                            <Heart className="w-5 h-5 fill-current" />
                          </button>
                        </div>

                        <div className="flex gap-2">
                          <button className="flex-1 bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition-colors text-sm font-medium cursor-pointer">
                            Ajouter au panier
                          </button>
                          <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                            <Eye className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Programme de fidélité */}
            {activeTab === 'loyalty' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-[#8B4513]">Programme de Fidélité</h2>

                {/* Points actuels */}
                <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Vos Points Croq'Dya</h3>
                      <div className="text-3xl font-bold">{userData.loyaltyPoints} points</div>
                      <p className="text-pink-100 text-sm">Soit {Math.floor(userData.loyaltyPoints / 10)}€ de réduction</p>
                    </div>
                    <div className="text-6xl opacity-20">
                      🏆
                    </div>
                  </div>
                </div>

                {/* Progression vers la prochaine récompense */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-[#8B4513] mb-4">Progression vers la prochaine récompense</h3>
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span>50 points pour 5€ de réduction</span>
                      <span>{userData.loyaltyPoints % 50}/50</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-pink-500 h-3 rounded-full transition-all" 
                        style={{ width: `${((userData.loyaltyPoints % 50) / 50) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Plus que {50 - (userData.loyaltyPoints % 50)} points pour débloquer votre prochaine récompense !
                  </p>
                </div>

                {/* Récompenses disponibles */}
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-[#8B4513] mb-4">Récompenses disponibles</h3>
                  <div className="space-y-4">
                    {[
                      { points: 50, reward: "5€ de réduction", available: userData.loyaltyPoints >= 50 },
                      { points: 100, reward: "10€ de réduction", available: userData.loyaltyPoints >= 100 },
                      { points: 200, reward: "Cupcake gratuit", available: userData.loyaltyPoints >= 200 },
                      { points: 500, reward: "Gâteau personnalisé -20%", available: userData.loyaltyPoints >= 500 }
                    ].map((item, index) => (
                      <div key={index} className={`p-4 rounded-lg border-2 ${item.available ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium text-[#8B4513]">{item.reward}</div>
                            <div className="text-sm text-gray-600">{item.points} points requis</div>
                          </div>
                          <button 
                            disabled={!item.available}
                            className={`px-4 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                              item.available 
                                ? 'bg-green-500 text-white hover:bg-green-600' 
                                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                          >
                            {item.available ? 'Échanger' : 'Indisponible'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Mon Profil */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-[#8B4513]">Mon Profil</h2>
                  <button 
                    onClick={() => setShowEditProfile(!showEditProfile)}
                    className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors cursor-pointer"
                  >
                    <Edit3 className="w-4 h-4" />
                    Modifier
                  </button>
                </div>

                {!showEditProfile ? (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-bold text-[#8B4513] mb-4">Informations personnelles</h3>
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm text-gray-600">Nom complet</label>
                            <div className="font-medium text-[#8B4513]">{userData.name}</div>
                          </div>
                          <div>
                            <label className="text-sm text-gray-600">Email</label>
                            <div className="font-medium text-[#8B4513]">{userData.email}</div>
                          </div>
                          <div>
                            <label className="text-sm text-gray-600">Téléphone</label>
                            <div className="font-medium text-[#8B4513]">{userData.phone}</div>
                          </div>
                          <div>
                            <label className="text-sm text-gray-600">Date de naissance</label>
                            <div className="font-medium text-[#8B4513]">{userData.birthdate}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-[#8B4513] mb-4">Adresse de livraison</h3>
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm text-gray-600">Adresse</label>
                            <div className="font-medium text-[#8B4513]">{userData.address}</div>
                          </div>
                          <div>
                            <label className="text-sm text-gray-600">Membre depuis</label>
                            <div className="font-medium text-[#8B4513]">{userData.memberSince}</div>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                          <h4 className="font-medium text-[#8B4513] mb-2">Préférences de notification</h4>
                          <div className="space-y-2 text-sm">
                            <label className="flex items-center gap-2">
                              <input type="checkbox" defaultChecked className="text-pink-500" />
                              <span>Nouvelles créations</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" defaultChecked className="text-pink-500" />
                              <span>Offres spéciales</span>
                            </label>
                            <label className="flex items-center gap-2">
                              <input type="checkbox" defaultChecked className="text-pink-500" />
                              <span>Suivi de commandes</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white rounded-xl shadow-md p-6">
                    <h3 className="font-bold text-[#8B4513] mb-4">Modifier mes informations</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                          <input 
                            type="text" 
                            defaultValue={userData.name}
                            className="w-full border rounded-lg px-3 py-2 focus:border-pink-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                          <input 
                            type="email" 
                            defaultValue={userData.email}
                            className="w-full border rounded-lg px-3 py-2 focus:border-pink-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                          <input 
                            type="tel" 
                            defaultValue={userData.phone}
                            className="w-full border rounded-lg px-3 py-2 focus:border-pink-500 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date de naissance</label>
                          <input 
                            type="date" 
                            defaultValue="1990-03-15"
                            className="w-full border rounded-lg px-3 py-2 focus:border-pink-500 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                          <textarea 
                            defaultValue={userData.address}
                            className="w-full border rounded-lg px-3 py-2 focus:border-pink-500 focus:outline-none"
                            rows={3}
                          />
                        </div>
                      </div>

                      <div className="md:col-span-2 flex gap-3 pt-4">
                        <button 
                          onClick={() => {
                            setShowEditProfile(false);
                          }}
                          className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors cursor-pointer"
                        >
                          Sauvegarder
                        </button>
                        <button 
                          onClick={() => setShowEditProfile(false)}
                          className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors cursor-pointer"
                        >
                          Annuler
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      </aside>
    </main>
  );
}