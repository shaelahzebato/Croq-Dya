'use client'

import {
  LayoutDashboard,
  ShoppingBag,
  ChefHat,
  Users,
  BarChart2,
  Settings,
  Plus,
  FileBarChart,
  PackageCheck,
  UserPlus,
} from 'lucide-react'
import Link from 'next/link'
import CroqDyaLogo from '@/components/CroqDyaLogo'
import RecentOrders from '@/components/RecentOrders'
import { Button } from '@/components/ui/button'
import React from 'react'

export default function AdminDashboardPage() {
  return (
    <main className="bg-gradient-cream min-h-screen">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <nav className="w-full lg:w-1/4 bg-[#FF69B4] text-white min-h-full p-6">
          <div className="sticky top-0">
            <CroqDyaLogo />
            <h2 className="text-center my-4 p-2 rounded-full bg-pink-200 text-[#8B4513]">Admin</h2>
            <div className="h-[2px] bg-[#fccce4] my-10" />
            <ul className="flex flex-col gap-4">
              <SidebarLink href="/dashboard" label="Dashboard" icon={LayoutDashboard} active />
              <SidebarLink href="/commandes" label="Commandes" icon={ShoppingBag} />
              <SidebarLink href="/produits" label="Produits" icon={ChefHat} />
              <SidebarLink href="/clients" label="Clients" icon={Users} />
              <SidebarLink href="/analytics" label="Analytics" icon={BarChart2} />
              <SidebarLink href="/paramètres" label="Paramètres" icon={Settings} />
            </ul>
          </div>
        </nav>

        {/* Main content */}
        <section className="w-full lg:w-3/4">
          <div className="p-6">
            {/* Header */}
            <header className="flex flex-col lg:flex-row justify-between items-center bg-white rounded-2xl p-6 gap-6">
              <h1 className="dancing_script text-3xl sm:text-4xl text-[#FF69B4] font-bold text-center">
                Dashboard Admin
              </h1>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
                  <Plus className="mr-2" /> Nouveau Produit
                </Button>
                <Link
                  href="/"
                  className="bg-[#FF69B4] text-white py-2 px-4 rounded-lg hover:bg-pink-500 inline-flex items-center justify-center w-full sm:w-auto"
                >
                  <FileBarChart className="mr-2" /> Rapport du Jour
                </Link>
              </div>
            </header>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            <StatCard title="Commandes Aujourd'hui" value="24" info="+12% vs hier" />
            <StatCard title="Chiffre d'Affaires" value="1.847€" info="+8% vs hier" />
            <StatCard title="Nouveaux Clients" value="7" info="-2% vs hier" />
            <StatCard title="Produits Vendus" value="42" info="+15% vs hier" />
          </div>

          {/* Commandes et actions */}
          <div className="p-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="col-span-1 lg:col-span-3">
              <RecentOrders />
            </div>
            <div className="col-span-1 lg:col-span-2">
              <div className="bg-white rounded-xl p-6 flex flex-col gap-6 text-[#8B4513]">
                <h3 className="dancing_script text-2xl md:text-3xl text-[#FF69B4] font-bold">
                  Actions Rapides
                </h3>
                <QuickAction
                  icon={<Plus className="text-white" />}
                  bg="bg-green-600"
                  title="Ajouter un Produit"
                  description="Créer une nouvelle pâtisserie"
                />
                <QuickAction
                  icon={<PackageCheck className="text-white" />}
                  bg="bg-orange-500"
                  title="Gérer les Commandes"
                  description="Voir toutes les commandes"
                />
                <QuickAction
                  icon={<UserPlus className="text-white" />}
                  bg="bg-pink-500"
                  title="Clients Inscrits"
                  description="Gérer la base clients"
                />
                <QuickAction
                  icon={<Settings className="text-white" />}
                  bg="bg-[#8B4513]"
                  title="Paramètres"
                  description="Configuration boutique"
                />
              </div>
            </div>
          </div>

          {/* Activité récente */}
          <div className="p-6">
            <div className="bg-white rounded-xl p-6">
              <h2 className="dancing_script text-2xl md:text-3xl text-[#FF69B4] mb-6">Activité Récente</h2>
              <RecentActivity />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

// --- Composants réutilisables ---

function SidebarLink({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string
  label: string
  icon: React.ElementType
  active?: boolean
}) {
  return (
    <li
      className={`flex items-center gap-3 p-4 rounded-lg ${
        active ? 'bg-pink-200 text-[#8B4513] font-bold' : 'hover:bg-pink-200'
      }`}
    >
      <Icon size={20} />
      <Link href={href}>{label}</Link>
    </li>
  )
}

function StatCard({
  title,
  value,
  info,
}: {
  title: string
  value: string
  info: string
}) {
  return (
    <div className="border-l-4 border-pink-500 bg-white rounded-lg p-6 space-y-4 shadow-sm">
      <span className="uppercase text-sm text-[#8B4513] quicksand">{title}</span>
      <h3 className="text-3xl md:text-4xl text-[#FF69B4] font-bold">{value}</h3>
      <small className="text-sm text-gray-500">{info}</small>
    </div>
  )
}

function QuickAction({
  icon,
  bg,
  title,
  description,
}: {
  icon: React.ReactNode
  bg: string
  title: string
  description: string
}) {
  return (
    <div className="hover:border-2 bg-[#FFF8DC] hover:border-pink-500 flex items-center gap-4 rounded-lg p-4 transition-all">
      <div className={`h-10 w-10 rounded-full flex items-center justify-center ${bg}`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <h4 className="font-semibold text-[#8B4513]">{title}</h4>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  )
}

function RecentActivity() {
  const activities = [
    { title: 'Nouvelle commande reçue de Marie Dubois', time: 'Il y a 5 minutes' },
    { title: 'Commande #CDY-154 prête pour retrait', time: 'Il y a 15 minutes' },
    { title: 'Nouveau client : Alexandre Petit', time: 'Il y a 32 minutes' },
  ]

  return (
    <div className="flex flex-col gap-4">
      {activities.map((activity, index) => (
        <div key={index} className="flex flex-col sm:flex-row items-start gap-4">
          <div className="h-10 w-10 rounded-full bg-pink-400 flex items-center justify-center">
            <PackageCheck className="text-white" size={18} />
          </div>
          <div className="flex-1">
            <p className="text-[#8B4513] quicksand font-medium">{activity.title}</p>
            <small className="text-sm text-[#8B4513]">{activity.time}</small>
          </div>
          {index < activities.length - 1 && (
            <div className="w-full border-t border-[#f8d0b3] mt-2 sm:hidden"></div>
          )}
        </div>
      ))}
    </div>
  )
}








// 'use client'

// import {
//   LayoutDashboard,
//   ShoppingBag,
//   ChefHat,
//   Users,
//   BarChart2,
//   Settings,
//   Plus,
//   FileBarChart,
//   PackageCheck,
//   UserPlus,
// } from 'lucide-react'
// import Link from 'next/link'
// import CroqDyaLogo from '@/components/CroqDyaLogo'
// import RecentOrders from '@/components/RecentOrders'
// import { Button } from '@/components/ui/button'
// import React from 'react'

// export default function AdminDashboardPage() {
//   return (
//     <main className="bg-gradient-cream min-h-screen">
//       <aside className="grid lg:grid-cols-4">
//         {/* Sidebar */}
//         <nav className="lg:col-span-1 bg-[#FF69B4] text-white min-h-screen p-6">
//           <div className="sticky top-0">
//             <CroqDyaLogo />
//             <h2 className="text-center my-4 p-2 rounded-full bg-pink-200 text-[#8B4513]">Admin</h2>
//             <div className="h-[2px] bg-[#fccce4] my-10" />
//             <ul className="flex flex-col gap-4">
//               <SidebarLink href="/dashboard" label="Dashboard" icon={LayoutDashboard} active />
//               <SidebarLink href="/commandes" label="Commandes" icon={ShoppingBag} />
//               <SidebarLink href="/produits" label="Produits" icon={ChefHat} />
//               <SidebarLink href="/clients" label="Clients" icon={Users} />
//               <SidebarLink href="/analytics" label="Analytics" icon={BarChart2} />
//               <SidebarLink href="/paramètres" label="Paramètres" icon={Settings} />
//             </ul>
//           </div>
//         </nav>

//         {/* Main content */}
//         <section className="lg:col-span-3 w-full">
//           <div className="p-6">
//             <header className="flex flex-col lg:flex-row justify-between items-center bg-white rounded-2xl p-6 gap-4">
//               <h1 className="dancing_script text-4xl sm:text-5xl text-[#FF69B4] font-bold">
//                 Dashboard Admin
//               </h1>
//               <div className="flex flex-col sm:flex-row items-center gap-4">
//                 <Button className="bg-green-600 hover:bg-green-700">
//                   <Plus className="mr-2" /> Nouveau Produit
//                 </Button>
//                 <Link
//                   href="/"
//                   className="bg-[#FF69B4] text-white py-2 px-4 rounded-lg hover:bg-pink-500 inline-flex items-center"
//                 >
//                   <FileBarChart className="mr-2" /> Rapport du Jour
//                 </Link>
//               </div>
//             </header>
//           </div>

//           {/* Statistiques */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//             <StatCard title="Commandes Aujourd'hui" value="24" info="+12% vs hier" />
//             <StatCard title="Chiffre d'Affaires" value="1.847€" info="+8% vs hier" />
//             <StatCard title="Nouveaux Clients" value="7" info="-2% vs hier" />
//             <StatCard title="Produits Vendus" value="42" info="+15% vs hier" />
//           </div>

//           {/* Commandes et actions */}
//           <div className="p-6 grid lg:grid-cols-5 gap-6">
//             <div className="col-span-3">
//               <RecentOrders />
//             </div>
//             <div className="col-span-2">
//               <div className="bg-white rounded-xl p-6 flex flex-col gap-6 text-[#8B4513]">
//                 <h3 className="dancing_script text-4xl text-[#FF69B4] font-bold">
//                   Actions Rapides
//                 </h3>
//                 <QuickAction
//                   icon={<Plus className="text-white" />}
//                   bg="bg-green-600"
//                   title="Ajouter un Produit"
//                   description="Créer une nouvelle pâtisserie"
//                 />
//                 <QuickAction
//                   icon={<PackageCheck className="text-white" />}
//                   bg="bg-orange-500"
//                   title="Gérer les Commandes"
//                   description="Voir toutes les commandes"
//                 />
//                 <QuickAction
//                   icon={<UserPlus className="text-white" />}
//                   bg="bg-pink-500"
//                   title="Clients Inscrits"
//                   description="Gérer la base clients"
//                 />
//                 <QuickAction
//                   icon={<Settings className="text-white" />}
//                   bg="bg-[#8B4513]"
//                   title="Paramètres"
//                   description="Configuration boutique"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Activité récente */}
//           <div className="p-6">
//             <div className="bg-white rounded-xl p-6">
//               <h2 className="dancing_script text-4xl text-[#FF69B4] mb-6">Activité Récente</h2>
//               <RecentActivity />
//             </div>
//           </div>
//         </section>
//       </aside>
//     </main>
//   )
// }

// // --- Composants internes réutilisables ---

// function SidebarLink({
//   href,
//   label,
//   icon: Icon,
//   active,
// }: {
//   href: string
//   label: string
//   icon: React.ElementType
//   active?: boolean
// }) {
//   return (
//     <li
//       className={`flex items-center gap-3 p-4 rounded-lg ${
//         active ? 'bg-pink-200 text-[#8B4513] font-bold' : 'hover:bg-pink-200'
//       }`}
//     >
//       <Icon size={20} />
//       <Link href={href}>{label}</Link>
//     </li>
//   )
// }

// function StatCard({
//   title,
//   value,
//   info,
// }: {
//   title: string
//   value: string
//   info: string
// }) {
//   return (
//     <div className="border-l-4 border-pink-500 bg-white rounded-lg p-6 space-y-4 shadow-sm">
//       <span className="uppercase text-sm text-[#8B4513] quicksand">{title}</span>
//       <h3 className="text-4xl text-[#FF69B4] font-bold">{value}</h3>
//       <small className="text-sm text-gray-500">{info}</small>
//     </div>
//   )
// }

// function QuickAction({
//   icon,
//   bg,
//   title,
//   description,
// }: {
//   icon: React.ReactNode
//   bg: string
//   title: string
//   description: string
// }) {
//   return (
//     <div className="hover:border-2 bg-[#FFF8DC] hover:border-pink-500 flex items-center gap-4 rounded-lg p-4 transition-all">
//       <div className={`h-10 w-10 rounded-full flex items-center justify-center ${bg}`}>
//         {icon}
//       </div>
//       <div className="flex flex-col">
//         <h4 className="font-semibold text-[#8B4513]">{title}</h4>
//         <p className="text-sm">{description}</p>
//       </div>
//     </div>
//   )
// }

// function RecentActivity() {
//   const activities = [
//     { title: 'Nouvelle commande reçue de Marie Dubois', time: 'Il y a 5 minutes' },
//     { title: 'Commande #CDY-154 prête pour retrait', time: 'Il y a 15 minutes' },
//     { title: 'Nouveau client : Alexandre Petit', time: 'Il y a 32 minutes' },
//   ]

//   return (
//     <div className="flex flex-col gap-4">
//       {activities.map((activity, index) => (
//         <div key={index} className="flex items-start gap-4">
//           <div className="h-10 w-10 rounded-full bg-pink-400 flex items-center justify-center">
//             <PackageCheck className="text-white" size={18} />
//           </div>
//           <div className="flex flex-col">
//             <p className="text-[#8B4513] quicksand font-medium">{activity.title}</p>
//             <small className="text-sm text-[#8B4513]">{activity.time}</small>
//           </div>
//           {index < activities.length - 1 && (
//             <div className="w-full border-t border-[#f8d0b3] mt-2"></div>
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }
