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

      <div className="bg-red-500 p-10 text-center text-4xl font-bold text-white">
        TAILWIND TEST
      </div>
      
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