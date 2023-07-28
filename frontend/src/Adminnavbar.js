import React from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Adminnavbar = () => {
  const[active,setActive]=useState('navBar')
  const showNav=()=>{
    setActive('navBar activeNavbar')
  }
  const removeNavbar=()=>{
    setActive('navBar')
  }
  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className="icon"/>Plan a trip......</h1>
          </a>
        </div>
        <div className={active}>
          <ul className="navLists grid">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li><br/>
            <li className="navItem">
             <Link to="/Aboutus"> <a href="#" className="navLink">About us</a>
             </Link></li><br/>
            <Link to="/Hoteladmin"><li className="navItem">
              <a href="#" className="navLink">Hotel</a>
            </li></Link><br/>
            <Link to="/ContactUs"><li className="navItem">
              <a href="#" className="navLink">Contact us</a>
            </li></Link><br/><br/>
            <Link to="/Feedbackno"><li className="navItem">
              <a href="#" className="navLink">Feedback</a>
            </li></Link><br/><br/>
            <Link to="/"><button className='btn'>
              <a href="#">LOGOUT</a>
            </button></Link>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
            </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
      </header>
    </section>
  )
}
export default Adminnavbar;