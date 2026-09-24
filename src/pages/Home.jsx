import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhatWeDo from '../components/Whatwedo'
import MarketGap from '../components/MarketGap'
import About from '../components/About'
import GrowthRoadmap from '../components/GrowthRoadMap'
import Services from '../components/services'
import WhoWeWorkWith from '../components/WhoWeWorkWith'
import DistributorCTA from '../components/DistributorsCta'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <GrowthRoadmap />
    <Services />
    <WhoWeWorkWith />
    <DistributorCTA/>
    <Footer/>
    {/* <MarketGap/>
    <WhatWeDo /> */}
    
    </>
  )
}

export default Home