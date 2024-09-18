import React from 'react';
import IOTBanner from './IOTBanner';
import QualitySection from './QualitySection';
import IOTtalk from './IOTtalk';
import IotService from './IotService';

const IOTpage = () => {
    window.scrollTo(0, 0);
    return (
        <div className=''>
            <div className="">
                <IOTBanner></IOTBanner>
                <QualitySection></QualitySection>
                <IotService></IotService>
                <IOTtalk></IOTtalk>
            </div>
        </div>
    );
};

export default IOTpage;