import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiInstagram, FiYoutube } from "react-icons/fi";
import { CgFacebook } from "react-icons/cg";

const LandingPageFooter = () => {
  return (
    <div className='LandingPageFooter d-flex justify-content-between'>
      <img className='h-25 my-auto ms-4' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657514582/Demoday/LogoB_1_mfmniv.png" alt="logo tyzy" />
      <div className='d-flex my-auto text-white'> <p className='my-auto'>Challenge &copy;. Coded by </p><NavLink to='#' className='nav-link my-auto text-white'>Tyzy</NavLink></div>
      <section className='d-flex my-auto me-5 gap-3'>
        <FiYoutube color='white' size={30} />
        <CgFacebook color='white' size={30} />
        <FiInstagram color='white' size={30} />
      </section>
    </div>
  )
}

export default LandingPageFooter;