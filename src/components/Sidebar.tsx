'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  ShoppingBag,
  ChefHat,
  Users,
  BarChart2,
  Settings,
} from 'lucide-react'

export default function Sidebar() {
  const pathname = usePathname()

  const links = [
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Commandes', href: '/commandes', icon: ShoppingBag },
    { label: 'Produits', href: '/produits', icon: ChefHat },
    { label: 'Clients', href: '/clients', icon: Users },
    { label: 'Analytics', href: '/analytics', icon: BarChart2 },
    { label: 'Paramètres', href: '/paramètres', icon: Settings },
  ]

  return (
    <aside className="lg:col-span-1 bg-[#FF69B4] text-white min-h-screen p-6 flex flex-col justify-between">
      <div>
        {/* Logo + Admin */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold">CroqDya</h1>
          <span className="mt-2 inline-block px-4 py-1 rounded-full bg-pink-200 text-[#8B4513] text-sm font-medium">
            Admin
          </span>
        </div>

        {/* Navigation */}
        <ul className="flex flex-col gap-4">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <Link
                href={href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                  ${
                    pathname === href
                      ? 'bg-pink-200 text-[#8B4513] font-semibold shadow-md'
                      : 'hover:bg-pink-300/60'
                  }`}
              >
                <Icon size={20} />
                <span className="text-md">{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Pied de sidebar */}
      <div className="mt-10 text-sm text-pink-100 text-center">
        <p>&copy; {new Date().getFullYear()} CroqDya</p>
      </div>
    </aside>
  )
}
