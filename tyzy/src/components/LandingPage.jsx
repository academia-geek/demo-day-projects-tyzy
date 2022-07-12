import React from 'react'
import LandingPagePartTwo from './LandingPagePartTwo';
import LandingPagePreFooter from './LandingPagePreFooter';
import LandingPageStadist from './LandingPageStadist';
import LandingPageSup from './LandingPageSup';
import LandingServices from './LandingServices';
import LandingPageFooter from './LandinPageFooter';

const LandingPage = () => {
  return (
      <div id='home'>
        <LandingPageSup />
        <LandingPagePartTwo/>
        <LandingServices/>
        <LandingPageStadist/>
        <LandingPagePreFooter/>
        <LandingPageFooter />
      </div>
  )
}

export default LandingPage;