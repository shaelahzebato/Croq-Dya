// pages/contact.tsx

import FaqSection from '@/components/FaqSection'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Map, MapPinIcon, Phone, Heart } from 'lucide-react'
import React from 'react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFF8DC]">
      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <Card className=" bg-contact-gradient backdrop-blur-md p-10 shadow-md shadow-[#E8B4B8] border-none text-center">
          <h1 className="dancing_script text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FF69B4] mb-4">
            Contactez-Nous
          </h1>
          <p className="text-[#8B4513] text-base sm:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed">
            Une question ? Un projet spécial ? Nous sommes là pour vous aider à réaliser vos envies gourmandes !
          </p>
        </Card>
      </section>

      {/* Formulaire + infos */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Formulaire */}
          <Card className="flex-1 bg-white p-8 lg:p-10 text-[#8B4513] shadow-sm border-none space-y-6">
            <h2 className="text-[#FF69B4] dancing_script text-4xl lg:text-5xl font-bold">Envoyez-nous un Message</h2>
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Prénom */}
                <div className="flex flex-col">
                  <label className="text-[#8B4513] quicksand">Prénom <span className="text-[#FF69B4]">*</span></label>
                  <input
                    type="text"
                    className="p-3 border-2 border-[#FFB6C1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:border-2 focus:scale-105 focus:shadow-md"
                    placeholder="Dya"
                  />
                </div>

                {/* Nom */}
                <div className="flex flex-col">
                  <label className="text-[#8B4513] quicksand">Nom <span className="text-[#FF69B4]">*</span></label>
                  <input
                    type="text"
                    className="p-3 border-2 border-[#FFB6C1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:border-2 focus:scale-105 focus:shadow-md"
                    placeholder="Croq'"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-[#8B4513] quicksand">Email <span className="text-[#FF69B4]">*</span></label>
                  <input
                    type="email"
                    className="p-3 border-2 border-[#FFB6C1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:border-2 focus:scale-105 focus:shadow-md"
                    placeholder="dya@email.com"
                  />
                </div>

                {/* Téléphone */}
                <div className="flex flex-col">
                  <label className="text-[#8B4513] quicksand">Téléphone</label>
                  <input
                    type="text"
                    className="p-3 border-2 border-[#FFB6C1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:border-2 focus:scale-105 focus:shadow-md"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              {/* Sujet */}
              <div className="flex flex-col">
                <label className="text-[#8B4513] quicksand">Sujet *</label>
                <select className="p-3 border-2 border-[#FFB6C1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4D6D] focus:border-2 focus:scale-105 focus:shadow-md">
                  <option value="">Choisissez un sujet...</option>
                  <option value="commande">Commande</option>
                  <option value="produit">Produit</option>
                  <option value="personnalise">Événement</option>
                  <option value="evenement">Personnalisé</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="reclamation">Réclamation</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col">
                <label className="text-[#8B4513] quicksand">Message *</label>
                <Textarea
                  placeholder="Décrivez votre demande en détail..."
                  className="p-3 border-2 border-[#FFB6C1] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#FF4D6D]"
                />
              </div>

              {/* Bouton */}
              <Button className="w-full bg-gradient-to-r from-[#FF69B4] to-[#FF4D6D] text-white py-6 rounded-[15px] text-lg font-bold hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(255,105,180,0.4)] transition-all duration-300 cursor-pointer">
                <div className="flex items-center gap-2">
                  <Mail />
                  <Heart className="fill-white" />
                  Envoyer le Message
                </div>
              </Button>
            </form>
          </Card>

          {/* Coordonnées + Map */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Atelier */}
            <Card className="p-6 text-[#8B4513]">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FF69B4] p-3 rounded-full text-white">
                  <Map className="h-6 w-6" />
                </div>
                <h3 className="text-2xl dancing_script text-[#FF69B4]">Notre Atelier</h3>
              </div>
              <p>Croq'Dya Pâtisserie<br />42 Rue des Gourmandises<br />75011 Abidjan, Côte D'Ivoire</p>
            </Card>

            {/* Téléphone */}
            <Card className="p-6 text-[#8B4513]">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FF69B4] p-3 rounded-full text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-2xl dancing_script text-[#FF69B4]">Téléphone</h3>
              </div>
              <p>01 42 85 96 74<br />Lun-Ven : 9h-18h<br />Sam : 9h-17h</p>
            </Card>

            {/* Email */}
            <Card className="p-6 text-[#8B4513]">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FF69B4] p-3 rounded-full text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-2xl dancing_script text-[#FF69B4]">Email</h3>
              </div>
              <div className='flex flex-col gap-4'>
                <div className="flex flex-col gap-1">
                  <span className=' text-pink-500'>Contact Général</span>
                  <span>contact@croqdya.com</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className=' text-pink-500'>Commandes Spéciales</span>
                  <span>commandes@croqdya.com</span>
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card className="p-6 text-[#8B4513]">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-gradient-to-br from-[#FFB6C1] to-[#FF69B4] p-3 rounded-full text-white">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl dancing_script text-[#FF69B4]">Nous Trouver</h3>
              </div>
              <div className="rounded-xl overflow-hidden w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.002444891753!2d-4.00710552415665!3d5.336180735268861"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full border-0"
                ></iframe>
              </div>
            </Card>
          </div>
        </div>
      </section>
      {/* Questions Fréquentes */}
      <FaqSection/>
    </main>
  )
}