import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const IOTBanner = () => {
    useEffect(() => {
        Aos.init({ duration:700, delay:200 });
    }, [])
    return (
        <div>
            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-4/5 mx-auto justify-center items-center">
                <div className="my-aos-element" data-aos="zoom-out">
                    <p className='lg:text-7xl text-5xl font-bold'>
                        <span className='text-universe_primary'>Choose Quality</span> <br />
                        IOT & VR
                    </p>
                    <p className='text-xl'>Connect Your Business to the Future with Our IOT & VR Services.</p>
                    
                    <Link to='/request-demo' className='btn mt-4 border-none bg-text_primari hover:bg-bg_btn_hover text-white font-bold text-lg '>Request Demo</Link>
                </div> 
                <div className="" data-aos="zoom-in">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725885805/Universe%20Soft%20Tech/Services/E-commerce/zymewy0ghvdavgrs50sz.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default IOTBanner;