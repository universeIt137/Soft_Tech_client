import Aos from 'aos';
import React, { useEffect } from 'react';
import EcommerceBanner from './EcommerceBanner';
import { FcIdea } from 'react-icons/fc';
import { PiUserSwitchBold } from 'react-icons/pi';
import EcommerceBusiness from './EcommerceBusiness';
import TalkSection from './TalkSection';

const EcommercePage = () => {
    window.scrollTo(0, 0);


    return (
        <div className='mt-20'>
            <div className="">
                <EcommerceBanner></EcommerceBanner>
            </div>
            <div>
                <EcommerceBusiness></EcommerceBusiness>
            </div>
            <TalkSection></TalkSection>
        </div>
    );
};

export default EcommercePage;