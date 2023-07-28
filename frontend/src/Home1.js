import React,{useEffect} from 'react'
import './home.css'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {SiTripadvisor} from 'react-icons/si'
import {BsListTask} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
import video from './assets/video.mp4'
import Aos from 'aos'
import { Link } from 'react-router-dom'
import 'aos/dist/aos.css'
import HeroSection from './HeroSection'
const Home = () => {
  useEffect(()=>{
    Aos.init({duration:3000})
  },[])
  return (
    <section className="home">
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="overlay">
        <HeroSection/>
      {/* </div>
        <div className="homebody container">
          <div data-aos="fade-right" className="texthome">
            <span
             className="smalltext">
              Our packages
            </span>
            <h1 data-aos="fade-up" className="titlehome">
              Search your destination
            </h1>
          </div>
          <div data-aos="fade-up" className="cardhome grid">
            <div className="desthome">
              <label htmlFor="city">Search your favorite:</label>
              <div className="input flex">
                <input type="text" className="inputhome" placeholder='Enter place name..'/>
                <GrLocation className="icon"/>
              </div>
            </div><br/>
            <div className="datehome">
              <label htmlFor="date">Select date:</label>
              <div className="input flex">
                <input type="date" className="inputhome" placeholder='Enter booking date..'/>
              </div>
            </div><br/>
            <div className="pricehome">
              <div className="totalhome flex">
                <label htmlFor="price">Price booking:</label>
                <h3 className="totalprice">Rs.10000-500000</h3>
              </div>
              <div className="input flex">
                <input type="range" className="inputhome" max="500000" min="10000" placeholder='Enter booking date..'/>
              </div>
            </div>
            <div className="searchhome flex">
              <HiFilter className="icon"/>
              <Link to="/Hom"><span>Search</span></Link>
            </div>
          </div>
          <div className="homefootericon flex">
            <div className="righticons">
              <FiFacebook className='icon'/>
              <AiOutlineInstagram className='icon'/>
              <SiTripadvisor className='icon'/>
            </div>
            <div className="lefticons">
            <BsListTask className="icon"/>
            <TbApps className="icon"/>
            </div>
          </div> */}
        </div> 
    </section>
  )
}

export default Home