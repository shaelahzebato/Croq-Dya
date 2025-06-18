'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import CroqDyaLogo from './CroqDyaLogo'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { label: 'Nos Créations', href: '/nos-creations' },
    { label: 'Commander', href: '/commander' },
    { label: "L'Atelier Dya", href: '/notre-histoire' },
    { label: 'Nous Contacter', href: '/nous-contacter' },
  ]

  const isActive = (href: string) => pathname === href

  const linkClasses = (href: string) =>
    `${isActive(href)
      ? 'text-pink-600 font-semibold underline underline-offset-4 decoration-2 decoration-pink-500'
      : 'text-[#8B4513] hover:text-pink-600'} transition-colors`

  return (
    <header className='bg-white/95 backdrop-blur-sm shadow-lg shadow-pink-200/50 sticky top-0 z-50'>
      <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-6'>

        {/* Logo */}
        <Link href='/' className='flex-shrink-0'>
          <CroqDyaLogo />
        </Link>

        {/* Desktop navigation */}
        <ul className='hidden md:flex items-center gap-8 text-[#8B4513] font-medium'>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkClasses(href)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className='hidden md:flex items-center gap-4'>
          <Link href='/panier' className='relative border border-[#8B4513] rounded-full p-2.5 hover:bg-pink-50 transition-colors group'>
            <ShoppingBag className='w-5 h-5 text-[#8B4513] group-hover:text-pink-600' />
            <span className='absolute -top-2 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold'>3</span>
          </Link>
          <Link href='/se-connecter'>
            <Button className='bg-white text-pink-600 border border-pink-600 rounded-full px-6 hover:bg-pink-50 hover:scale-105 transition'>
              Connexion
            </Button>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className='md:hidden flex items-center gap-3'>
          <Link href='/panier' className='relative border border-[#8B4513] rounded-full p-2'>
            <ShoppingBag className='w-5 h-5 text-[#8B4513]' />
            <span className='absolute -top-2 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold'>3</span>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='p-2 text-[#8B4513] hover:text-pink-600'>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg shadow-pink-200/30 z-40'>
          <div className='px-4 py-4 space-y-4'>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${linkClasses(href)} block py-2 font-medium quicksand`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div className='pt-4 border-t'>
              <Link href='/se-connecter'>
                <Button className='w-full quicksand bg-white text-pink-600 border border-pink-600 rounded-full hover:bg-pink-50 cursor-pointer'>
                  Connexion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}










// "use client"
// import Link from 'next/link'
// import React, { useState } from 'react'
// import CroqDyaLogo from './CroqDyaLogo'
// import { ShoppingBag, Menu, X } from 'lucide-react'
// import { Button } from './ui/button'

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <header className='bg-white/95 backdrop-blur-sm shadow-lg shadow-pink-200/50 sticky top-0 z-50'>
//       <nav className='max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:px-6'>
//         {/* Logo */}
//         <Link href={"/"} className="flex-shrink-0">
//           <CroqDyaLogo/>
//         </Link>

//         {/* Menu desktop */}
//         <ul className='hidden md:flex text-[#8B4513] font-medium items-center gap-8'>
//           <li className="hover:text-pink-600 transition-colors">
//             <Link href={"/nos-creations"}>Nos Créations</Link>
//           </li>
//           <li className="hover:text-pink-600 transition-colors">
//             <Link href={"/commander"}>Commander</Link>
//           </li>
//           <li className="hover:text-pink-600 transition-colors">
//             <Link href={"/notre-histoire"}>L'Atelier Dya</Link>
//           </li>
//           <li className="hover:text-pink-600 transition-colors">
//             <Link href={"/nous-contacter"}>Nous Contacter</Link>
//           </li>
//         </ul>

//         {/* Actions desktop */}
//         <div className='hidden md:flex items-center gap-4'>
//           <Link href={"/panier"} className='relative border border-[#8B4513] rounded-full p-2.5 hover:bg-pink-50 transition-colors group'>
//             <ShoppingBag className='w-5 h-5 text-[#8B4513] group-hover:text-pink-600 transition-colors'/>
//             <span className='absolute -top-2 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold'>3</span>
//           </Link>
//           <Link href={"/se-connecter"}>
//             <Button className='bg-white text-pink-600 border border-pink-600 rounded-full px-6 hover:bg-pink-50 hover:scale-105 transition- cursor-pointer'>
//               Connexion
//             </Button>
//           </Link>
//         </div>

//         {/* Menu mobile - bouton hamburger */}
//         <div className='md:hidden flex items-center gap-3'>
//           <Link href={"/panier"} className='relative border border-[#8B4513] rounded-full p-2'>
//             <ShoppingBag className='w-5 h-5 text-[#8B4513]'/>
//             <span className='absolute -top-2 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold'>3</span>
//           </Link>
//           <button
//             onClick={toggleMenu}
//             className='p-2 text-[#8B4513] hover:text-pink-600 transition-colors cursor-pointer'
//           >
//             {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
//           </button>
//         </div>

//         {/* Menu mobile - dropdown */}
//         {isMenuOpen && (
//           <div className='absolute top-full left-0 right-0 bg-white shadow-lg shadow-pink-200/30 border-t md:hidden'>
//             <div className='px-4 py-4 space-y-4'>
//               <Link 
//                 href={"/nos-creations"} 
//                 className='quicksand block text-[#8B4513] font-medium py-2 hover:text-pink-600 transition-colors'
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Nos Créations
//               </Link>
//               <Link 
//                 href={"/commander"} 
//                 className='quicksand block text-[#8B4513] font-medium py-2 hover:text-pink-600 transition-colors'
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Commander
//               </Link>
//               <Link 
//                 href={"/notre-histoire"} 
//                 className='quicksand block text-[#8B4513] font-medium py-2 hover:text-pink-600 transition-colors'
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 L'Atelier Dya
//               </Link>
//               <Link 
//                 href={"/nous-contacter"} 
//                 className='quicksand block text-[#8B4513] font-medium py-2 hover:text-pink-600 transition-colors'
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 Nous Contacter
//               </Link>
//               <div className='pt-4 border-t'>
//                 <Link href={"/se-connecter"}>
//                   <Button className='w-full quicksand bg-white text-pink-600 border border-pink-600 rounded-full hover:bg-pink-50 transition-colors cursor-pointer'>
//                     Connexion
//                   </Button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }

// // Navigation suggérée

// // Menu → "Voir plus" → Commander
// // Navbar : "Menu" (découverte) + "Commander" (achat direct)