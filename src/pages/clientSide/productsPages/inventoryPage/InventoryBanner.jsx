import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InventoryBanner = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay:500,
        })
    })
    return (
        <div>
            <div className='min-h-screen container mx-auto '>
                <div className=' mt-20 lg:flex justify-between items-center min-h-screen gap-20'>
                    <div className='text-white space-y-3 text-center lg:w-1/2' data-aos="fade-down-right">
                        <p className='text-universe_primary lg:text-6xl  text-3xl font-bold'>UNIVERSE SOFT TECH</p>
                        <p className='text-5xl text-universe_secondary'>Inventory Management</p>
                        <button className='p-3 bg-[#ee6403] text-white rounded-2xl  font-bold'>REQUEST A DEMO</button>
                    </div>

                    <div className=' lg:w-1/2'  data-aos='zoom-in'>
                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725785599/Universe%20Soft%20Tech/Products/Inventory/qz7pa4c1cczostrkl68h.jpg" alt="" className='mt-10 lg:mt-0' />
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default InventoryBanner;