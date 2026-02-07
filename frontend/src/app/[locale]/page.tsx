import BlogsSection from '@/components/sections/BlogsSection'
import Branding from '@/components/sections/branding'
import ChooseSection from '@/components/sections/ChooseSection'
import ContactsSection from '@/components/sections/ContactsSection'
import FeaturesSection from '@/components/sections/FeaturesSection'
import FooterSection from '@/components/sections/FooterSection'
import Header from '@/components/sections/header'
import HeroSection from '@/components/sections/HeroSection'
import Marquee from '@/components/sections/marquee'
import PartnersSection from '@/components/sections/PartnersSection'
import ServicesSection from '@/components/sections/ServicesSection'
import TrustedSection from '@/components/sections/TrustedSection'
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
      <Marquee />
      <FeaturesSection />
      <TrustedSection />
      <BlogsSection />
      <ContactsSection />
      <FooterSection />
    </div>
  )
}

export default Home