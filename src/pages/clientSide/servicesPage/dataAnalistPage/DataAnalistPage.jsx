import React from 'react';
import DataBanner from './DataBanner';
import LimitSection from './LimitSection';
import DataTalkSection from './DataTalkSection';

const DataAnalistPage = () => {
    window.scrollTo(0, 0);
    return (
        <div className='mt-20'>
            <DataBanner></DataBanner>
            <LimitSection></LimitSection>
            <DataTalkSection></DataTalkSection>
        </div>
    );
};

export default DataAnalistPage;