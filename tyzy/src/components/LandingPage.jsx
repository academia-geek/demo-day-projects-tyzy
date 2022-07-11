import React from 'react'
import LandingPagePartTwo from './LandingPagePartTwo';
import LandingPageStadist from './LandingPageStadist';
import LandingPageSup from './LandingPageSup';
import LandingPageFooter from './LandinPageFooter';

const LandingPage = () => {
  return (
      <div>
        <LandingPageSup />
        <LandingPagePartTwo/>
        <LandingPageStadist/>
        <LandingPageFooter />
      </div>
  )
}

export default LandingPage;