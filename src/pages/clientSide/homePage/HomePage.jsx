import React from 'react';
import Banner from '../../../components/clientSide/CompanyPage/Banner/Banner';
import About from '../../../components/clientSide/CompanyPage/About/About';
import Blogs from '../../../components/clientSide/CompanyPage/Blogs/Blogs';
import BluePage from '../../../components/clientSide/CompanyPage/BluePage/BluePage';
import WhatWeDo from '../../../components/clientSide/CompanyPage/WhatWeDo/WhatWeDo';



const HomePage = () => {
    return (
        <div>
            
            <Banner></Banner>
            <About></About>
            <Blogs></Blogs>
            <BluePage></BluePage>
            <WhatWeDo></WhatWeDo>
        </div>
    );
};

export default HomePage;