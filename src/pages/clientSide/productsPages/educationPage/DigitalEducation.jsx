import Aos from 'aos';
import React, { useEffect } from 'react';
import { AiOutlineStock } from 'react-icons/ai';
import { FaWarehouse } from 'react-icons/fa';
import { FaCartShopping, FaTruckFast } from 'react-icons/fa6';

const DigitalEducation = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, delay: 400 });
    }, []);

    return (
        <div>
            <section className="Digital-education w-11/12 mx-auto mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center">
                    <div className="" data-aos="zoom-in">
                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725862870/Universe%20Soft%20Tech/Products/Inventory/lczayf6gosrvtvi4rxoy.png" alt="" />
                    </div>
                    <div className="text-center lg:text-start space-y-4" data-aos="zoom-in">
                        <p className='text-3xl lg:text-5xl text-universe_primary font-bold'>
                            Discover Digital Education
                            Story & Mission
                        </p>
                        <p className='lg:text-2xl text-gray-400'>
                            Smart School Management Academic System is a complete customize academic management Software, which is user friendly Web Based Software. This solution is essential for every Educational Institute like English medium School, Bengali medium School, College, Madrasaha etc.


                            Streamline your school's operations with our cloud-based management software. Unlimited access, anytime, anywhere. Customizable interface tailored to your institution's needs. Robust security features ensure data protection. 24/7 support for seamless assistance.
                        </p>
                    </div>
                </div>

                <div>
                    <div className='flex flex-col lg:flex-row text-center lg:gap-12 lg:text-4xl font-bold w-4/5 mx-auto my-14  lg:space-y-0'>

                        <div className="lg:w-1/4 flex justify-center flex-col items-center rounded-xl shadow-xl py-10 text-universe_secondary border" data-aos="fade-up">
                            <AiOutlineStock className='text-3xl ' />
                            <p className='text-xl'>Sales</p>
                        </div>

                        <div className="lg:w-1/4 flex justify-center flex-col items-center rounded-xl shadow-xl py-10 text-universe_secondary border" data-aos="fade-up">
                            <FaCartShopping className='text-3xl ' />
                            <p className='text-xl'>Purchases</p>
                        </div>

                        <div className="lg:w-1/4 flex justify-center flex-col items-center rounded-xl shadow-xl py-10 text-universe_secondary border" data-aos="fade-up">
                            <FaWarehouse className='text-3xl ' />
                            <p className='text-xl'>Manufacture</p>
                        </div>

                        <div className="lg:w-1/4 flex justify-center flex-col items-center rounded-xl shadow-xl py-10 text-universe_secondary border" data-aos="fade-up">
                            <FaTruckFast className='text-3xl ' />
                            <p className='text-xl'>Logistics</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalEducation;