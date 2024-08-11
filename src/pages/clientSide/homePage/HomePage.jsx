import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../../components/clientSide/Banner/Banner';
import About from '../../../components/clientSide/About/About';

const HomePage = () => {
    return (
        <div>
            
            <p>This is homepage</p>
            <Banner></Banner>
            <About></About>
            
        </div>
    );
};

export default HomePage;