import React from 'react'
import { Link } from 'react-router-dom';
import { FiInstagram } from "react-icons/fi";
import { CgFacebook } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";

const LandingPageFooter = () => {
  return (
    <div id='footer' className='LandingPageFooter d-flex justify-content-between'>
      <img className='IMGFooter my-auto ms-5' src="https://res.cloudinary.com/doaijv8m0/image/upload/v1657514582/Demoday/LogoB_1_mfmniv.png" alt="logo tyzy" />
      <div className='d-flex my-auto text-white fs-6'>
        <p className='my-auto'>Challenge
          <a target="_blank" href='https://www.privacypolicytemplate.net/live.php?token=To9N5VfwJD2C96nA4alVTJazuHtCtBCO' className='text-white hover:text-white mx-1'>
            &copy;.
          </a>
           Coded by
        </p>
        <a target="_blank" href='https://pages.flycricket.io/tyzy/privacy.html' className='link my-auto ms-1 text-white'>
          Tyzy
        </a>
      </div>

      <section className='d-flex my-auto me-5 gap-3'>
        <Link to='#'><CgFacebook color='white' size={20} /></Link>
        <Link to='#'><FiInstagram color='white' size={20} /></Link>
        <Link to='#'><FaYoutube color='white' size={20} /></Link>
      </section>
    </div>
  )
}

export default LandingPageFooter;