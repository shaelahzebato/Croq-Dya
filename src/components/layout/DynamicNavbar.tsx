'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import CroqDyaLogo from '../common/CroqDyaLogo';

const DynamicNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname(); // Hook pour récupérer l'URL actuelle

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Active après 50px de scroll
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Nos Créations' },
    { href: '/commander', label: 'Commander' },
    { href: '/notre-histoire', label: "L'Atelier Dya" },
    { href: '/nous-contacter', label: 'Nous Contacter' },
  ];

  // Fonction pour vérifier si le lien est actif
  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-2
          ${isScrolled 
            ? 'bg-cream/95 backdrop-blur-md shadow-lg border-b border-or-rose/20' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <CroqDyaLogo/>
            </Link>

            {/* Navigation Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    font-quicksand font-medium transition-all duration-300 hover:scale-105 relative
                    ${isActiveLink(link.href)
                      ? isScrolled 
                        ? 'text-rose-bonbon font-semibold' 
                        : 'text-fraise font-semibold'
                      : isScrolled 
                        ? 'text-chocolat hover:text-rose-bonbon' 
                        : 'text-blanc-casse hover:text-fraise drop-shadow-md'
                    }
                  `}
                >
                  {link.label}
                  {/* Indicateur visuel pour page active */}
                  {isActiveLink(link.href) && (
                    <span className={`
                      absolute -bottom-1 left-0 right-0 h-0.5 rounded-full
                      ${isScrolled ? 'bg-rose-bonbon' : 'bg-fraise'}
                    `}></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Boutons d'action Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <button className={`
                relative p-2 rounded-full transition-all duration-300 hover:scale-110
                ${isScrolled 
                  ? 'text-chocolat hover:bg-rose-bonbon/10' 
                  : 'text-blanc-casse hover:bg-white/20'
                }
              `}>
                {/* Icône panier */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m2.6 8L8 21h8" />
                  <circle cx="9" cy="20" r="1" fill="currentColor"/>
                  <circle cx="20" cy="20" r="1" fill="currentColor"/>
                </svg>
                <span className="absolute -top-1 -right-1 bg-rose-bonbon text-blanc-casse text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              <Link href="/se-connecter" className={`
                px-4 py-2 rounded-full font-quicksand font-medium transition-all duration-300 hover:scale-105
                ${isScrolled 
                  ? 'bg-rose-bonbon text-blanc-casse hover:bg-rose-bonbon/90' 
                  : 'bg-blanc-casse/20 text-blanc-casse backdrop-blur-sm hover:bg-blanc-casse/30'
                }
              `}>
                Connexion
              </Link>
            </div>

            {/* Bouton Menu Mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                md:hidden p-2 rounded-lg transition-colors duration-300
                ${isScrolled ? 'text-chocolat' : 'text-blanc-casse'}
              `}
            >
              {isMobileMenuOpen ? (
                // Icône croix (X) quand le menu est ouvert
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icône burger quand le menu est fermé
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          bg-cream/95 backdrop-blur-md border-t border-or-rose/20
        `}>
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  block font-quicksand transition-colors duration-200 py-2 px-3 rounded-lg
                  ${isActiveLink(link.href)
                    ? 'text-rose-bonbon bg-rose-bonbon/10 font-semibold'
                    : 'text-chocolat hover:text-rose-bonbon hover:bg-rose-bonbon/5'
                  }
                `}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
                {/* Indicateur mobile pour page active */}
                {isActiveLink(link.href) && (
                  <span className="ml-2 text-rose-bonbon">•</span>
                )}
              </Link>
            ))}
            <div className="pt-3 border-t border-or-rose/20 space-y-3">
              <Link href="/se-connecter" className="w-full bg-rose-bonbon text-blanc-casse py-2 rounded-lg font-quicksand font-medium">
                Connexion
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default DynamicNavbar;