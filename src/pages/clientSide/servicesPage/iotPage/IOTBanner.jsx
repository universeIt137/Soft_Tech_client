import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const IOTBanner = ({ service }) => {
    const { main_title, tag_line, banner_img } = service;
    useEffect(() => {
        Aos.init({ duration:700, delay:200 });
    }, [])
    return (
        <div>
            <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-4/5 mx-auto justify-center items-center">
                <div className="my-aos-element" data-aos="zoom-out">
                    <p className='lg:text-7xl text-5xl font-bold'>
                        {main_title}
                    </p>
                    <p className='text-xl'>{ tag_line }</p>
                    
                    <Link to='/request-demo' className='btn mt-4 border-none bg-text_primari hover:bg-bg_btn_hover text-white font-bold text-lg '>Request Demo</Link>
                </div> 
                <div className="" data-aos="zoom-in">
                    <img src={banner_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default IOTBanner;