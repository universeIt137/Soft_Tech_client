import { AiOutlineStock } from 'react-icons/ai';
import { FaCartShopping, FaTruckFast, FaWarehouse } from 'react-icons/fa6';
import { MdPrecisionManufacturing } from 'react-icons/md';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const InventoryKeypoints = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay:500,
        })
    })

    return (
        <div>
             <div className='flex flex-col lg:flex-row text-center lg:gap-12 lg:text-4xl font-bold w-4/5 mx-auto lg:-mt-32 -mt-28  lg:space-y-0'>
                
                <div className="lg:w-1/4 flex justify-center flex-col items-center rounded-2xl shadow-lg shadow-gray-600 py-10" data-aos="fade-up">
                    <AiOutlineStock className='text-7xl font-bold' />
                    <p>Sales</p>
                </div>

                <div className="lg:w-1/4 flex justify-center flex-col items-center rounded-2xl shadow-lg shadow-gray-600 py-10" data-aos="fade-up">
                <FaCartShopping  className='text-7xl font-bold' />
                    <p>Purchases</p>
                </div>

                <div className="lg:w-1/4 flex justify-center flex-col items-center rounded-2xl shadow-lg shadow-gray-600 py-10" data-aos="fade-up">
                <FaWarehouse className='text-7xl font-bold'/>
                    <p>Manufacture</p>
                </div>

                <div className="lg:w-1/4 flex justify-center flex-col items-center rounded-2xl shadow-lg shadow-gray-600 py-10" data-aos="fade-up">
                <FaTruckFast className='text-7xl font-bold' />
                    <p>Logistics</p>
                </div>

            </div>
        </div>
    );
};

export default InventoryKeypoints;