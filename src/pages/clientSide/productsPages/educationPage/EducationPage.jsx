import React from 'react';
import { FaUsers } from 'react-icons/fa';
import EducationBanner from './EducationBanner';
import EducationKeypoint from './EducationKeypoint';
import DigitalEducation from './DigitalEducation';

const EducationPage = () => {
    window.scrollTo(0, 0);
    return (
        <>
            <div className=' min-h-screen bg-universe_secondary items-center justify-center flex'>
                <EducationBanner></EducationBanner>
            </div>
            <EducationKeypoint></EducationKeypoint>

            <DigitalEducation></DigitalEducation>
        </>
    );
};

export default EducationPage;