import CroqDyaLogo from '@/components/CroqDyaLogo'
import RecentOrders from '@/components/RecentOrders'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <main className='bg-gradient-cream'>
        <aside className='grid lg:grid-cols-4'>
            <section className='lg:col-span-1 bg-[#FF69B4] flex justify-center '>
                <div className="sticky top-0 text-white">
                    <header className=''>
                        <CroqDyaLogo/>
                        <h2 className='text-center p-2 rounded-full bg-pink-200'>Admin</h2>
                    </header>
                    <div className="h-[2px] bg-[#fccce4] my-10" />
                    <ul className='flex flex-col gap-6'>
                        <li className='p-4 rounded-lg hover:bg-pink-200'>
                            <Link href={"/dashboard"}>Dashboard</Link>
                        </li>
                        <li className='p-4 rounded-lg hover:bg-pink-200'>
                            <Link href={"/commandes"}>Commandes</Link>
                        </li>
                        <li className='p-4 rounded-lg hover:bg-pink-200'>
                            <Link href={"/produits"}>Produits</Link>
                        </li>
                        <li className='p-4 rounded-lg hover:bg-pink-200'>
                            <Link href={"/clients"}>Clients</Link>
                        </li>
                        <li className='p-4 rounded-lg hover:bg-pink-200'>
                            <Link href={"/analytics"}>Analytics</Link>
                        </li>
                        <li className='p-4 rounded-lg hover:bg-pink-200'>
                            <Link href={"/paramètres"}>Paramètres</Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='lg:col-span-3'>
                <div className="p-6">
                    <header className='flex justify-between items-center bg-white rounded-2xl p-10'>
                        <h1 className="dancing_script text-5xl text-[#FF69B4] font-bold">Dashboard Admin</h1>
                        <div className="flex items-center gap-4">
                            <Button className='bg-green-600 py-4 px-2 hover:bg-green-700 cursor-pointer'><Plus/> Nouveau Produit</Button>
                            <Link href={"/"} className='bg-[#FF69B4] text-white py-2 px-2 rounded-lg'>📊 Rapport du Jour</Link>
                        </div>
                    </header>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 p-6 gap-6">
                    
                    <div className="border-l-4 border-pink-500 bg-white rounded-lg p-6 space-y-6">
                        <span className='mb-10 uppercase text-[1rem] text-[#8B4513] quicksand'>Commandes Aujourd'hui📦</span>
                        <h3 className='text-6xl text-[#FF69B4]'>24</h3>
                        <small>↗️ +12% vs hier</small>
                    </div>
                    
                    <div className="border-l-4 border-pink-500 bg-white rounded-lg p-6 space-y-6">
                        <span className='mb-10 uppercase text-[1rem] text-[#8B4513] quicksand'>Chiffre d'Affaires💰</span>
                        <h3 className='text-6xl text-[#FF69B4]'>1.847€</h3>
                        <small>↗️ +8% vs hier</small>
                    </div>
                    
                    <div className="border-l-4 border-pink-500 bg-white rounded-lg p-6 space-y-6">
                        <span className='mb-10 uppercase text-[1rem] text-[#8B4513] quicksand'>Nouveaux Clients👥</span>
                        <h3 className='text-6xl text-[#FF69B4]'>7</h3>
                        <small>↘️ -2% vs hier</small>
                    </div>
                    
                    <div className="border-l-4 border-pink-500 bg-white rounded-lg p-6 space-y-6">
                        <span className='mb-10 uppercase text-[1rem] text-[#8B4513] quicksand'>Produits Vendus🎂</span>
                        <h3 className='text-6xl text-[#FF69B4]'>42</h3>
                        <small>↗️ +15% vs hier</small>
                    </div>
                </div>

                <div className="p-6 grid lg:grid-cols-5 gap-6">
                    <div className="col-span-3">
                        <RecentOrders/>
                    </div>
                    <div className="col-span-2">
                        <div className="bg-white rounded-xl flex flex-col gap-6 p-6 text[#8B4513]">
                            <h3 className="dancing_script text-4xl text-[#FF69B4] font-bold">⚡ Actions Rapides</h3>

                            <div className="hover:border-2 bg-[#FFF8DC] hover:border-pink-500 flex items-center gap-2 rounded-lg p-4">
                                <div className="h-10 w-10 rounded-full bg-green-600 text-center"><Plus/></div>
                                <div className="flex flex-col gap-1">
                                    <h4>Ajouter un Produit</h4>
                                    <p>Créer une nouvelle pâtisserie</p>
                                </div>
                            </div>

                            <div className="hover:border-2 bg-[#FFF8DC] hover:border-pink-500 flex items-center gap-2 rounded-lg p-4">
                                <div className="h-10 w-10 rounded-full bg-orange-500 text-center">📦</div>
                                <div className="flex flex-col gap-1">
                                    <h4>Gérer les Commandes</h4>
                                    <Link href={"/"}>Voir toutes les commandes</Link>
                                </div>
                            </div>

                            <div className="hover:border-2 bg-[#FFF8DC] hover:border-pink-500 flex items-center gap-2 rounded-lg p-4">
                                <div className="h-10 w-10 rounded-full bg-pink-500 text-center">👥</div>
                                <div className="flex flex-col gap-1">
                                    <h4>Clients Inscrits</h4>
                                    <p>Gérer la base clients</p>
                                </div>
                            </div>

                            <div className="hover:border-2 bg-[#FFF8DC] hover:border-pink-500 flex items-center gap-2 rounded-lg p-4">
                                <div className="h-10 w-10 rounded-full bg-[#8B4513] text-center">⚙️</div>
                                <div className="flex flex-col gap-1">
                                    <h4>Paramètres</h4>
                                    <p>Configuration boutique</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="p-6">
                    <div className="bg-white rounded-xl ">
                        <h2 className='dancing_script text-4xl text-[#FF69B4] mb-6'>🕒 Activité Récente</h2>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-2 items-center">
                                <div className="h-10 w-10 rounded-full bg-pink-400 p-4 text-center">📦</div>
                                <div className="flex flex-col gap-2 p-4">
                                    <p className='text-[#8B4513] quicksand'><strong>Nouvelle commande</strong> reçue de Marie Dubois</p>
                                    <small className='text-[#8B4513]'>Il y a 5 minutes</small>
                                </div>
                            </div>
                            <div className="h-[1px] bg-[#f8d0b3]" />
                            <div className="flex gap-2 items-center">
                                <div className="h-10 w-10 rounded-full bg-pink-400 p-4 text-center">📦</div>
                                <div className="flex flex-col gap-2 p-4">
                                    <p className='text-[#8B4513] quicksand'><strong>Commande #CDY-154</strong> prête pour retrait</p>
                                    <small className='text-[#8B4513]'>Il y a 15 minutes</small>
                                </div>
                            </div>
                            <div className="h-[1px] bg-[#f8d0b3]" />
                            <div className="flex gap-2 items-center">
                                <div className="h-10 w-10 rounded-full bg-pink-400 p-4 text-center">📦</div>
                                <div className="flex flex-col gap-2 p-4">
                                    <p className='text-[#8B4513] quicksand'><strong>Nouveau client :</strong> Alexandre Petit</p>
                                    <small className='text-[#8B4513]'>Il y a 32 minutes</small>
                                </div>
                            </div>
                            <div className="h-[1px] bg-[#f8d0b3]" />
                        </div>
                    </div>
                </div>
            </section>
        </aside>
    </main>
  )
}

export default page