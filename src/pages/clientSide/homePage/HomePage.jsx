
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../../../components/clientSide/Banner/Banner';
import About from '../../../components/clientSide/About/About';
import Blogs from '../../../components/clientSide/Blogs/Blogs';
import BluePage from '../../../components/clientSide/BluePage/BluePage';

import Navbar from "../../../components/clientSide/Navbar/Navbar";



const HomePage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <p>This is homepage</p>
            <Banner></Banner>
            <About></About>
            <Blogs></Blogs>
            <BluePage></BluePage>
            
        </div>
    );
};

export default HomePage;