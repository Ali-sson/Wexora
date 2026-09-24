import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MarketGap from '../components/MarketGap'
import WhatWeDo from '../components/WhatWeDo'
import About from '../components/About'
import GrowthRoadMap from '../components/GrowthRoadMap'
import WhoWeWorkWith from '../components/WhoWeWorkWith'
import DistributorCTA from '../components/DistributorsCta'
import Footer from '../components/Footer'


function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <GrowthRoadMap />
    <WhatWeDo/>
    <WhoWeWorkWith />
    <DistributorCTA/>
    <Footer/>
    {/* <MarketGap/>
    <WhatWeDo /> */}
    
    </>
  )
}

export default Home