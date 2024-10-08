import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaExternalLinkAlt, FaUsers } from 'react-icons/fa';

const ProductBanner = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, delay: 500 });
    }, [])
    return (
        <div>
            <div className="lg:flex justify-center items-center text-white  w-11/12 mx-auto">
                <div className="lg:w-1/2 text-center lg:text-start space-y-8 my-aos-element" data-aos="zoom-in">
                    <p className='lg:text-7xl text-3xl font-bold'>Education School Management System</p>
                    <p className='lg:text-xl text-xl'>
                        Transform your organization with digital finesse,
                        From manual chaos to streamlined success. Integrate systems, automate tasks with flair, Efficiency and productivity everywhere. Embrace the digital wave, let innovation lead, Watch your organization thrive, fulfilling every need.
                    </p>
                    <div className='gap-4 flex flex-col lg:flex-row text-xl'>
                        <button className='px-8 bg-white text-black py-4 rounded-lg flex justify-center items-center gap-3'>Live Link <FaExternalLinkAlt /></button>
                        <button className='px-3 py-4 border rounded-lg'>Download Proposal</button>
                    </div>

                    <div className='text-white flex gap-5 flex-col lg:flex-row items-center'>
                        <p className='flex items-center gap-4 lg:text-xl'> <FaUsers /> Student & Teacher</p>
                        <p className='flex items-center gap-4 lg:text-xl'> <FaUsers /> Class, Exam, Result & Payment Manage</p>
                    </div>
                </div>

                <div className='lg:w-1/2 my-aos-element' data-aos="zoom-in">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725861900/Universe%20Soft%20Tech/Products/Inventory/o2ckcilit4pxrkmm15at.png" alt="" className='w-full' />
                </div>

            </div>
        </div>
    );
};

export default ProductBanner;