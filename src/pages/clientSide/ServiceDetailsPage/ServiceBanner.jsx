import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const ServiceBanner = ({ service }) => {

    const { main_title, tag_line, banner_img } = service;
    useEffect(() => {
        Aos.init({ duration: 700, delay: 200 });
    }, [])

    return (
        <div>
            <div className="lg:min-h-screen my-5 grid grid-cols-1 lg:grid-cols-2 w-4/5 mx-auto justify-center items-center">
                <div className="my-aos-element mb-5" data-aos="zoom-out">
                    <p className='lg:text-7xl text-3xl text-center lg:text-start font-bold'>
                        {main_title}
                    </p>
                    <p className='text-xl text-center lg:text-start'>{tag_line}</p>

                    <Link to='/request-demo'>
                        <div className=" flex justify-center lg:justify-start">
                            <button className='lg:p-3 mt-4  border-none rounded-xl bg-text_primari hover:bg-bg_btn_hover text-white font-bold lg:text-lg text-xs p-2'>Request Demo</button>
                        </div>
                    </Link>
                </div>
                <div className="" data-aos="zoom-in">
                    <img src={banner_img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ServiceBanner;