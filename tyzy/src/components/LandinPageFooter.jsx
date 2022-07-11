import React from 'react'
import { NavLink } from 'react-router-dom';

const LandingPageFooter = () => {
  return (
    <div className='LandingPageFooter'>
      <p className='d-flex my-auto'> Challenge &copy;. Coded by <NavLink to='#' className='nav-link my-auto'>Tyzy</NavLink></p>
    </div>
  )
}

export default LandingPageFooter;