import React from 'react'
import LandingPageStadist from './LandingPageStadist';
import LandingPageSup from './LandingPageSup';
import LandingPageFooter from './LandinPageFooter';

const LandingPage = () => {
  return (
      <div>
        <LandingPageSup />
        <LandingPageStadist/>
        <LandingPageFooter />
      </div>
  )
}

export default LandingPage;