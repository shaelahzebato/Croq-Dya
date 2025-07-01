import CroqDyaHero from '@/components/common/CroqDyaHero'
import DynamicNavbar from '@/components/layout/DynamicNavbar'
import Footer from '@/components/layout/Footer';
import React from 'react'

function Home() {
  return (
    <>
      <DynamicNavbar/>
      <CroqDyaHero/>
      <Footer/>
    </>
  )
}

export default Home;