import Aos from 'aos';
import React, { useEffect } from 'react';
import { FcIdea } from 'react-icons/fc';
import { PiUserSwitchBold } from 'react-icons/pi';

const LimitSection = () => {
    useEffect(() => {
        Aos.init({ duration: 800, delay: 200 });
    }, []);
    return (
        <div>
            <div className='lg:my-40 my-10'>
                <p className='text-3xl lg:text-7xl font-bold text-center' data-aos="fade-up">Overcome Limit</p>
                <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 w-4/5 mx-auto lg:mt-24 mt-10">

                    <div className="border rounded-xl py-10 flex flex-col justify-center items-center space-y-5 shadow-xl" data-aos="fade-right">
                        <p className='text-7xl'><FcIdea /></p>
                        <p className="font-bold text-xl text-center">Modern & Expertise</p>
                        <p className='px-10 text-center'>
                            We can help businesses design and develop their own custom E-commerce platform that is tailored to their specific needs and requirements. This can include features such as product catalogs, shopping carts, payment gateways, and more.
                        </p>
                    </div>

                    <div className="border rounded-xl py-10 flex flex-col justify-center items-center space-y-5 shadow-xl" data-aos="fade-up">
                        <p className='text-7xl text-universe_primary'><PiUserSwitchBold /></p>
                        <p className="font-bold text-xl">Customized solutions</p>
                        <p className='px-10 text-center'>
                            We can help businesses design and develop their own custom E-commerce platform that is tailored to their specific needs and requirements. This can include features such as product catalogs, shopping carts, payment gateways, and more.
                        </p>
                    </div>

                    <div className="border rounded-xl py-10 flex flex-col justify-center items-center space-y-5 shadow-xl" data-aos="fade-left">
                        <p className='text-7xl'><FcIdea /></p>
                        <p className="font-bold text-xl text-center">Cutting-edge tools & technologies</p>
                        <p className='px-10 text-center'>
                            We can help businesses design and develop their own custom E-commerce platform that is tailored to their specific needs and requirements. This can include features such as product catalogs, shopping carts, payment gateways, and more.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LimitSection;