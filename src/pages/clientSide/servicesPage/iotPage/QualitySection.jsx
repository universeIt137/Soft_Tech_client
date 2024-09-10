import Aos from 'aos';
import React, { useEffect } from 'react';
import { FcIdea } from 'react-icons/fc';
import { PiUserSwitchBold } from 'react-icons/pi';

const QualitySection = () => {
    useEffect(() => {
        Aos.init({ duration: 500, delay: 100 });
    }, [])
    return (
        <div>
            <div className=' my-10'>
                <p className='text-3xl lg:text-7xl font-bold text-center'>Unlock High-Quality Solutions</p>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 w-11/12 mx-auto lg:mt-24 mt-10 " >

                    <div className="border rounded-xl py-10 flex flex-col justify-center items-center space-y-5 shadow-xl my-aos-element" >
                        <p className='text-7xl'><FcIdea /></p>
                        <p className="font-bold text-xl text-center">Expertise & Modern</p>
                        <p className='px-10 text-center'>
                            We can help businesses design and develop their own custom E-commerce platform that is tailored to their specific needs and requirements. This can include features such as product catalogs, shopping carts, payment gateways, and more.
                        </p>
                    </div>

                    <div className="border rounded-xl py-10 flex flex-col justify-center items-center space-y-5 shadow-xl my-aos-element" >
                        <p className='text-7xl text-universe_primary'><PiUserSwitchBold /></p>
                        <p className="font-bold text-xl">Innovation</p>
                        <p className='px-10 text-center'>
                            We can help businesses design and develop their own custom E-commerce platform that is tailored to their specific needs and requirements. This can include features such as product catalogs, shopping carts, payment gateways, and more.
                        </p>
                    </div>

                    <div className="border rounded-xl py-10 flex flex-col justify-center items-center space-y-5 shadow-xl my-aos-element" >
                        <p className='text-7xl'><FcIdea /></p>
                        <p className="font-bold text-xl">Customization</p>
                        <p className='px-10 text-center'>
                            We can help businesses design and develop their own custom E-commerce platform that is tailored to their specific needs and requirements. This can include features such as product catalogs, shopping carts, payment gateways, and more.
                        </p>
                    </div>

                    <div className="border rounded-xl py-10 flex flex-col justify-center items-center space-y-5 shadow-xl" >
                        <p className='text-7xl'><FcIdea /></p>
                        <p className="font-bold text-xl">Quality Assurance</p>
                        <p className='px-10 text-center'>
                            We can help businesses design and develop their own custom E-commerce platform that is tailored to their specific needs and requirements. This can include features such as product catalogs, shopping carts, payment gateways, and more.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default QualitySection;