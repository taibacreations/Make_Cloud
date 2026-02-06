import Branding from '@/components/sections/branding'
import Header from '@/components/sections/header'
import HeroSection from '@/components/sections/HeroSection'
import ServicesSection from '@/components/sections/ServicesSection'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Branding />
      <Header />
      <HeroSection />
      <ServicesSection />
    </div>
  )
}

export default Home