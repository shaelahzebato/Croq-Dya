import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { AlarmClock, Heart, HeartHandshake, Mail, Map, MapPinIcon, Phone } from 'lucide-react'
import React from 'react'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FFF8DC]">

      {/* Nous contacter */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <Card className="p-18 shadow-md shadow-[#E8B4B8] border-none text-center">
          <h1 className="dancing_script text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#FF69B4] mb-4">Contactez-Nous</h1>
          <p className="text-[#8B4513] text-base sm:text-lg lg:text-xl max-w-6xl mx-auto leading-relaxed">
            Une question ? Un projet spécial ? Nous sommes là pour vous aider à réaliser vos envies gourmandes !
          </p>
        </Card>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex flex-col lg:flex-row gap-10">
          <Card className="flex-1 lg:flex-2 bg-white p-8 lg:p-10 text-[#8B4513] shadow-sm shadow-[#FEFEFE] border-none space-y-6">
            <h2 className="text-[#FF69B4] dancing_script text-4xl lg:text-5xl font-bold">Envoyez-nous un Message</h2>
            <form className='flex flex-col gap-6'>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex md:flex-col flex-row gap-4">
                  <div className="flex flex-col ga3">
                    <label className='text-[#8B4513] quicksand'>Prénom <span className='text-[#FF69B4]'>*</span></label>
                    <input type='text' className='p-3 border-2 border-[#FFB6C1] rounded-2xl focus:border-[#FF69B4] focus:border-2 focus:scale-105 focus:shadow-md' placeholder="Marie"/>
                  </div>
                  <div className="flex flex-col ga3">
                    <label className='text-[#8B4513] quicksand'>Email <span className='text-[#FF69B4]'>*</span></label>
                    <input type='email' className='p-3 border-2 border-[#FFB6C1] rounded-2xl focus:border-[#FF69B4] focus:border-2 focus:scale-105 focus:shadow-md' placeholder="marie.dubois@email.com"/>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-4">
                  <div className="flex flex-col ga3">
                    <label className='text-[#8B4513] quicksand'>Nom <span className='text-[#FF69B4]'>*</span></label>
                    <input type='text' className='p-3 border-2 border-[#FFB6C1] rounded-2xl focus:border-[#FF69B4] focus:border-2 focus:scale-105 focus:shadow-md' placeholder="Dubois"/>
                  </div>
                  <div className="flex flex-col ga3">
                    <label className='text-[#8B4513] quicksand'>Téléphone</label>
                    <input type='text' className='p-3 border-2 border-[#FFB6C1] rounded-2xl focus:border-[#FF69B4] focus:border-2 focus:scale-105 focus:shadow-md' placeholder="06 12 34 56 78"/>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col">
                  <label htmlFor="">Sujet *</label>
                  <select required className='p-3 border-2 border-[#FFB6C1] rounded-2xl focus:border-[#FF69B4]'>
                    <option value="">Choisissez un sujet...</option>
                    <option value="commande">Question sur une commande</option>
                    <option value="produit">Renseignements produits</option>
                    <option value="personnalise">Commande personnalisée</option>
                    <option value="evenement">Événement spécial</option>
                    <option value="partenariat">Partenariat/Collaboration</option>
                    <option value="reclamation">Réclamation</option>
                    <option value="autre">Autre</option>
                  </select>
              </div>
              <div className="">
                <label htmlFor="">Message *</label>
                <Textarea className='p-3 border-2 border-[#FFB6C1] rounded-2xl focus:border-[#FF69B4]' placeholder="Décrivez votre demande en détail..."/>
              </div>
              <Button className="w-full bg-gradient-to-r from-[#FF69B4] to-[#FF4D6D] text-white border-none py-6 px-6 rounded-[15px] text-base font-bold cursor-pointer transition-all duration-300 mt-4 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(255,105,180,0.4)]">
                <div className="flex items-center gap-1 text-[#8B4513]">
                  <Mail />
                  <Heart className="fill-current" />
                </div>
                Envoyer le Message
              </Button>
            </form>
          </Card>

          <div className="flex-1 flex flex-col gap-6">
            <Card className='p-4 text-[#8B4513]'>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <div className=" p-2 border-pink-500 rounded-full">
                    <Map className='h-16 w-16'/>
                  </div>
                  <h3 className='text-3xl dancing_script text-pink-500'>Notre Atelier</h3>
                </div>
                <span className=' text-pink-500'>Croq'Dya Pâtisserie</span>
                <div className="flex flex-col gap-2">
                  <span>42 Rue des Gourmandises</span>
                  <span>75011 Paris</span>
                  <span>France</span>
                </div>
              </div>
            </Card>

            <Card className='p-4 text-[#8B4513]'>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <div className=" p-2 border-pink-500 rounded-full">
                    <Phone className='h-16 w-16'/>
                  </div>
                  <h3 className='text-3xl dancing_script text-pink-500'>Téléphone</h3>
                </div>
                <span className=' text-pink-500'>Service Client</span>
                <div className="flex flex-col gap-2">
                  <span>01 42 85 96 74</span>
                  <span>Lun-Ven: 9h-18h</span>
                  <span>Sam: 9h-17h</span>
                </div>
              </div>
            </Card>

            <Card className='p-4 text-[#8B4513]'>
              <div className="flex flex-col gap-4">
                <div className="flex gap-4 items-center">
                  <div className=" p-2 border-pink-500 rounded-full">
                    <Mail className='h-16 w-16'/>
                  </div>
                  <h3 className='text-3xl dancing_script text-pink-500'>Email</h3>
                </div>
                <div className="flex flex-col gap-2">
                  <span className=' text-pink-500'>Contact Général</span>
                  <span>contact@croqdya.com</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className=' text-pink-500'>Commandes Spéciales</span>
                  <span>commandes@croqdya.com</span>
                </div>
              </div>
            </Card>


            <Card className='p-4 text-[#8B4513]'>
              <h3 className='text-3xl dancing_script text-pink-500'>Nous Trouver</h3>

              <div className="flex flex-col gap-4">
                <MapPinIcon/>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
