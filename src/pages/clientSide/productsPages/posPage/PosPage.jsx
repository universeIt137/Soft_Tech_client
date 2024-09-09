import Aos from 'aos';
import React, { useEffect } from 'react';
import POSBanner from './POSBanner';
import { TbArrowsTransferDown } from 'react-icons/tb';
import { MdDashboardCustomize, MdOutlineDashboardCustomize, MdWarehouse } from 'react-icons/md';
import { FaScaleBalanced } from 'react-icons/fa6';
import POSKeyPoints from './POSKeyPoints';

const PosPage = () => {

    useEffect(() => {
        Aos.init({ duration: 800, delay: 300 });
    }, []);

    window.scrollTo(0, 0);
    return (
        <div className='mt-20'>
            <POSBanner></POSBanner>
            <POSKeyPoints></POSKeyPoints>
            <section className="description-section w-4/5 mx-auto lg:my-40" >
                <div className='flex flex-col justify-center items-center space-y-5' data-aos="fade-up">
                    <p className='lg:text-7xl text-2xl font-semibold'><span className='text-universe_secondary'>100%</span> <span className='text-universe_primary'>Customizable</span></p>
                    <p className='font-bold text-xl text-center lg:text-start'>"Your POS, Your Way - SoftTechPOS, Fully Customizable for Your Business"</p>
                    <p className='text-xl text-center w-11/12'>
                        SoftTechPOS is a highly flexible and fully customizable Point of Sale (POS) solution designed to adapt to your unique business needs. With SoftTechPOS, you have the power to shape your POS system exactly the way you want it, ensuring seamless integration with your workflows and enabling you to maximize efficiency and productivity.
                    </p>
                </div>

                <div className='lg:mt-40 mt-10' data-aos="fade-up">
                    <div>
                        <p className="lg:text-7xl text-3xl text-center font-bold"><span className='text-universe_primary'>SoftTech POS</span> <span className='text-universe_secondary'>FEATURES</span></p>
                    </div>
                    <div className='grid lg:grid-cols-4 lg:gap-20 gap-5 mt-20'>
                        
                        <div className="text-5xl border px-4 py-10 flex flex-col justify-center items-center space-y-4 rounded-2xl shadow-2xl">
                            <MdOutlineDashboardCustomize />
                            <p className="text-2xl font-bold text-gray-500">Unique Dashboard</p>
                        </div>

                        <div className="text-5xl border px-4 py-10 flex flex-col justify-center items-center space-y-4 rounded-2xl shadow-2xl">
                            <MdOutlineDashboardCustomize />
                            <p className="text-2xl font-bold text-gray-500">Unique Dashboard</p>
                        </div>

                        <div className="text-5xl border px-4 py-10 flex flex-col justify-center items-center space-y-4 rounded-2xl shadow-2xl">
                            <MdOutlineDashboardCustomize />
                            <p className="text-2xl font-bold text-gray-500">Unique Dashboard</p>
                        </div>

                        <div className="text-5xl border px-4 py-10 flex flex-col justify-center items-center space-y-4 rounded-2xl shadow-2xl">
                            <MdOutlineDashboardCustomize />
                            <p className="text-2xl font-bold text-gray-500">Unique Dashboard</p>
                        </div>

                        <div className="text-5xl border px-4 py-10 flex flex-col justify-center items-center space-y-4 rounded-2xl shadow-2xl">
                            <MdOutlineDashboardCustomize />
                            <p className="text-2xl font-bold text-gray-500">Unique Dashboard</p>
                        </div>

                        <div className="text-5xl border px-4 py-10 flex flex-col justify-center items-center space-y-4 rounded-2xl shadow-2xl">
                            <MdOutlineDashboardCustomize />
                            <p className="text-2xl font-bold text-gray-500">Unique Dashboard</p>
                        </div>

                        <div className="text-5xl border px-4 py-10 flex flex-col justify-center items-center space-y-4 rounded-2xl shadow-2xl">
                            <MdOutlineDashboardCustomize />
                            <p className="text-2xl font-bold text-gray-500">Unique Dashboard</p>
                        </div>

                        <div className="text-5xl border px-4 py-10 flex flex-col justify-center items-center space-y-4 rounded-2xl shadow-2xl">
                            <MdOutlineDashboardCustomize />
                            <p className="text-2xl font-bold text-gray-500">Unique Dashboard</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default PosPage;