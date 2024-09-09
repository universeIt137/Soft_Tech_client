import React from 'react';
import IOTBanner from './IOTBanner';
import QualitySection from './QualitySection';
import IOTtalk from './IOTtalk';

const IOTpage = () => {
    return (
        <div className='mt-20'>
            <div className="">
                <IOTBanner></IOTBanner>
                <QualitySection></QualitySection>
                <IOTtalk></IOTtalk>
            </div>
        </div>
    );
};

export default IOTpage;