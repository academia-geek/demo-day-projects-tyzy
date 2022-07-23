import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { FiInstagram } from "react-icons/fi";
import { CgFacebook } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";

const LandingPageFooter = () => {
  return (
    <div id='footer' className='LandingPageFooter d-flex justify-content-between'>
      <img className='IMGFooter my-auto ms-5' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657514582/Demoday/LogoB_1_mfmniv.png" alt="logo tyzy" />
      <div className='d-flex my-auto text-white fs-6'><p className='my-auto'>Challenge &copy;. Coded by </p><NavLink to='#' className='link my-auto ms-1 text-white'> Tyzy</NavLink></div>
      
      <section className='d-flex my-auto me-5 gap-3'>
        <Link to='#'><CgFacebook color='white' size={20} /></Link>
        <Link to='#'><FiInstagram color='white' size={20} /></Link>
        <Link to='#'><FaYoutube color='white' size={20} /></Link>
      </section>
    </div>
  )
}

export default LandingPageFooter;