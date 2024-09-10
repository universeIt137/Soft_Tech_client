import React, { useEffect } from 'react';
import MobileBanner from './MobileBanner';
import Aos from 'aos';
import MobileDescription from './MobileDescription';
import MobileTalk from './MobileTalk';
import AssistSection from './AssistSection';

const MobileAppPage = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, delay: 200 });
    }, []);
    return (
        <div className='mt-20'>
            <MobileBanner></MobileBanner>
            <MobileDescription></MobileDescription>
            <AssistSection></AssistSection>
            <MobileTalk></MobileTalk>
        </div>
    );
};

export default MobileAppPage;