import React from 'react'
import PackageDetail from './PackageDetail'
import SliderCarousel from './SliderCarousel'
import { HeroSection } from './HeroSection'
// import Header from './Header.jsx'
const Home = () => {
  return (
    <>
    {/* <Header/> */}
     <HeroSection />
     <SliderCarousel />
     <PackageDetail />
    </>
  )
}

export default Home