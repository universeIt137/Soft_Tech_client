import React from 'react'
import OurTeam from '../homePage/OurTeam'
import OurTeamBanner from './OurTeamBanner'
import TeamCard from './TeamCard';
import { Helmet } from 'react-helmet-async';

const OurTeamPage = () => {
  const teammember = [{}, {}, {}, {}, 2, 4, 2, 4];
  return (
    <div>

      <Helmet>
        <title>SoftTech | Team</title>
      </Helmet>
      <div className='my-40' >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 lg:gap-5 justify-items-center justify-center px-2">
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          <TeamCard />
          
        </div>

      </div>
    </div>
  )
}

export default OurTeamPage
