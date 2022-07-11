import React from 'react'
import LandingPageStadist from './LandingPageStadist';
import LandingPageSup from './LandingPageSup';
import LandingServices from './LandingServices';
import LandingPageFooter from './LandinPageFooter';

const LandingPage = () => {
  return (
      <div>
        <LandingPageSup />
        <LandingServices/>
        <LandingPageStadist/>
        <LandingPageFooter />
      </div>
  )
}

export default LandingPage;