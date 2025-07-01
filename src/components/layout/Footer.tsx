'use client';

import Link from 'next/link';
import React from 'react';

const CroqDyaFooter = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    boutique: [
      { name: 'Nos Créations', href: '/produits' },
      { name: 'Sur-Mesure', href: '/sur-mesure' },
      { name: 'Événements', href: '/evenements' },
      { name: 'Ateliers', href: '/ateliers' }
    ],
    entreprise: [
      { name: 'Notre Histoire', href: '/about' },
      { name: 'Notre Équipe', href: '/equipe' },
      { name: 'Nos Valeurs', href: '/valeurs' },
      { name: 'Carrières', href: '/carrieres' }
    ],
    service: [
      { name: 'Contact', href: '/contact' },
      { name: 'Livraison', href: '/livraison' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Commandes', href: '/commandes' }
    ]
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/croqdya',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/croqdya',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'TikTok',
      href: 'https://tiktok.com/@croqdya',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-chocolat text-cream">
      
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo et description */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-dancing text-4xl font-bold text-rose-bonbon mb-4">
                Croq'Dya
              </h3>
              <p className="font-quicksand text-cream/80 leading-relaxed">
                Pâtisserie artisanale ivoirienne qui crée des moments de bonheur 
                à travers des saveurs authentiques et des créations uniques inspirées de la Côte d'Ivoire.
              </p>
            </div>
            
            {/* Réseaux sociaux */}
            <div>
              <h4 className="font-quicksand font-semibold text-vanille mb-4">
                Suivez-nous
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-rose-bonbon/20 rounded-full flex items-center justify-center text-rose-bonbon hover:bg-rose-bonbon hover:text-blanc-casse transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Liens Boutique */}
          <div>
            <h4 className="font-quicksand font-semibold text-vanille mb-6">
              Boutique
            </h4>
            <ul className="space-y-3">
              {footerLinks.boutique.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-quicksand text-cream/80 hover:text-rose-bonbon transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liens Entreprise */}
          <div>
            <h4 className="font-quicksand font-semibold text-vanille mb-6">
              Entreprise
            </h4>
            <ul className="space-y-3">
              {footerLinks.entreprise.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-quicksand text-cream/80 hover:text-rose-bonbon transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact et Service */}
          <div>
            <h4 className="font-quicksand font-semibold text-vanille mb-6">
              Service Client
            </h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.service.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-quicksand text-cream/80 hover:text-rose-bonbon transition-colors duration-300 flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Infos contact */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-cream/80">
                <svg className="w-4 h-4 mr-2 text-rose-bonbon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-quicksand">
                  Cocody, Abidjan
                </span>
              </div>
              <div className="flex items-center text-cream/80">
                <svg className="w-4 h-4 mr-2 text-rose-bonbon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-quicksand">
                  +225 07 XX XX XX XX
                </span>
              </div>
              <div className="flex items-center text-cream/80">
                <svg className="w-4 h-4 mr-2 text-rose-bonbon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-quicksand">
                  Mar-Sam: 9h-19h | Dim: 9h-17h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-cream/20 bg-chocolat/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="font-quicksand text-cream/80 text-sm">
                © {currentYear} Croq'Dya. Tous droits réservés.
              </p>
              <div className="flex items-center space-x-4 text-xs">
                <Link href="/mentions-legales" className="text-cream/60 hover:text-rose-bonbon transition-colors">
                  Mentions légales
                </Link>
                <span className="text-cream/40">•</span>
                <Link href="/politique-confidentialite" className="text-cream/60 hover:text-rose-bonbon transition-colors">
                  Confidentialité
                </Link>
                <span className="text-cream/40">•</span>
                <Link href="/cgv" className="text-cream/60 hover:text-rose-bonbon transition-colors">
                  CGV
                </Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-cream/60 text-xs">
              <span className="font-quicksand">Fait avec</span>
              <span className="text-rose-bonbon text-sm">💕</span>
              <span className="font-quicksand">à Abidjan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CroqDyaFooter;