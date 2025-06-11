import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <section className='bg-[#8B4513] w-full flex flex-col gap-6 justify-center items-center p-10'>
        <ul className='flex items-center gap-6 text-[#fff6f0]'>
            <li className='hover:text-[#FFB6C1]'>
                <Link href={"/"}>À propos</Link>                
            </li>
            <li className='hover:text-[#FFB6C1]'>
                <Link href={"/"}>Livraison</Link>                
            </li>
            <li className='hover:text-[#FFB6C1]'>
                <Link href={"/"}>Contact</Link>
            </li>
        </ul>
        <p className='text-[#fff6f0] text-center'>© 2025 Croq'Dya. Pâtisserie artisanale avec amour 💝</p>
    </section>
  )
}
