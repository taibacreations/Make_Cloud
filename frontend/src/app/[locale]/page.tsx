import Branding from '@/components/sections/branding'
import ChooseSection from '@/components/sections/ChooseSection'
import Header from '@/components/sections/header'
import HeroSection from '@/components/sections/HeroSection'
import PartnersSection from '@/components/sections/PartnersSection'
import ServicesSection from '@/components/sections/ServicesSection'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Branding />
      <Header />
      <HeroSection />
      <ServicesSection />
      <PartnersSection />
      <ChooseSection />
    </div>
  )
}

export default Home