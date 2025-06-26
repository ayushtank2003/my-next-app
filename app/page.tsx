'use client'

import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Services from './components/OurServices'
import Feature from './components/Feature'
// import Projects from './components/Projects'
import WhyChooseUs from './components/WhyUs'
// import Stats from './components/Stats'
import Areas from './components/Areas'
// import Pricing from './components/Pricing'
// import Testimonials from './components/Testimonials'
import Team from './components/Team'
import FAQ from './components/FAQ'
// import Blog from './components/Blog'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Services/>
      <Feature/>
      <WhyChooseUs/>
      <Areas/>
      <Team/>
      <FAQ/>
      <Footer/>
    </main>
  )
}