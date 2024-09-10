import React from 'react'
import OurTeam from '../homePage/OurTeam'
import OurTeamBanner from './OurTeamBanner'

const OurTeamPage = () => {
  return (
    <div>
    <OurTeamBanner></OurTeamBanner>
    <div className='-mt-20' >
        <OurTeam></OurTeam>
    </div>
    </div>
  )
}

export default OurTeamPage
