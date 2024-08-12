import React from 'react';
import "./WhatWeDo.css";

import BlogsPost from './BlogsPost/BlogsPost';


const WhatWeDo = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-5xl font-semibold uppercase mb-4'>What we do</h1>
            <p className='text-center mx-3 mb-28 text-xl xl:mx-52'>Alpha Net is constantly working to help you with the best possible service. You don't need to look elsewhere if you try Alpha Net services. We focus on customer satisfaction and we believe in quality service.</p>

            {/* 
                    

                

                


            </div> */}
            <BlogsPost></BlogsPost>
        </div>

        


    );
};

export default WhatWeDo;