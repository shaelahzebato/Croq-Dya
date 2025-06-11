"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import CroqDyaLogo from './CroqDyaLogo'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { Button } from './ui/button'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className='bg-white/95 backdrop-blur-sm shadow-lg shadow-pink-200/50 sticky top-0 z-50'>
      <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-6'>
        {/* Logo */}
        <Link href={"/"} className="flex-shrink-0">
          <CroqDyaLogo/>
        </Link>

        {/* Menu desktop */}
        <ul className='hidden md:flex text-[#8B4513] font-medium items-center gap-8'>
          <li className="hover:text-pink-600 transition-colors">
            <Link href={"/menu"}>Menu</Link>
          </li>
          <li className="hover:text-pink-600 transition-colors">
            <Link href={"/commander"}>Commander</Link>
          </li>
          <li className="hover:text-pink-600 transition-colors">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>

        {/* Actions desktop */}
        <div className='hidden md:flex items-center gap-4'>
          <Link href={"/panier"} className='relative border border-[#8B4513] rounded-full p-2.5 hover:bg-pink-50 transition-colors group'>
            <ShoppingBag className='w-5 h-5 text-[#8B4513] group-hover:text-pink-600 transition-colors'/>
            <span className='absolute -top-2 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold'>3</span>
          </Link>
          <Button className='bg-white text-pink-600 border border-pink-600 rounded-full px-6 hover:bg-pink-50 hover:scale-105 transition- cursor-pointer'>
            Connexion
          </Button>
        </div>

        {/* Menu mobile - bouton hamburger */}
        <div className='md:hidden flex items-center gap-3'>
          <Link href={"/panier"} className='relative border border-[#8B4513] rounded-full p-2'>
            <ShoppingBag className='w-5 h-5 text-[#8B4513]'/>
            <span className='absolute -top-2 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold'>3</span>
          </Link>
          <button
            onClick={toggleMenu}
            className='p-2 text-[#8B4513] hover:text-pink-600 transition-colors cursor-pointer'
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>

        {/* Menu mobile - dropdown */}
        {isMenuOpen && (
          <div className='absolute top-full left-0 right-0 bg-white shadow-lg shadow-pink-200/30 border-t md:hidden'>
            <div className='px-4 py-4 space-y-4'>
              <Link 
                href={"/menu"} 
                className='block text-[#8B4513] font-medium py-2 hover:text-pink-600 transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href={"/commander"} 
                className='block text-[#8B4513] font-medium py-2 hover:text-pink-600 transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                Commander
              </Link>
              <Link 
                href={"/contact"} 
                className='block text-[#8B4513] font-medium py-2 hover:text-pink-600 transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className='pt-4 border-t'>
                <Button className='w-full bg-white text-pink-600 border border-pink-600 rounded-full hover:bg-pink-50 transition-colors cursor-pointer'>
                  Connexion
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}