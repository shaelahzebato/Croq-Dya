'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  ShoppingBag,
  ChefHat,
  Users,
  BarChart2,
  Settings,
  Menu,
  X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import CroqDyaLogo from '../common/CroqDyaLogo'

export default function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const links = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/commandes', label: 'Commandes', icon: ShoppingBag },
    { href: '/produits', label: 'Produits', icon: ChefHat },
    { href: '/clients', label: 'Clients', icon: Users },
    { href: '/analytics', label: 'Analytics', icon: BarChart2 },
    { href: '/paramètres', label: 'Paramètres', icon: Settings },
  ]

  return (
    <aside className="bg-[#FF69B4] text-white p-6 w-full lg:w-1/4 lg:min-h-screen">
      <div className="flex justify-between items-center lg:block">
        <Link href="/" className="flex-shrink-0">
          <CroqDyaLogo />
        </Link>

        {/* Burger button - mobile only */}
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X size={44} /> : <Menu size={44} />}
        </Button>
      </div>

      {/* Sidebar Content */}
      <div className={`mt-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
        <h2 className="text-center my-4 p-2 rounded-full bg-pink-200 text-[#8B4513]">
          Admin
        </h2>
        <div className="h-[2px] bg-[#fccce4] my-6" />

        <ul className="flex flex-col gap-4">
          {links.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href
            return (
              <li
                key={href}
                className={`flex items-center gap-3 p-4 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-pink-200 text-[#8B4513] font-semibold'
                    : 'hover:bg-pink-300'
                }`}
              >
                <Icon size={20} />
                <Link href={href}>{label}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </aside>
  )
}