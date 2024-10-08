import Aos from 'aos';
import React, { useEffect } from 'react';
import { FcIdea } from 'react-icons/fc';
import { PiUserSwitchBold } from 'react-icons/pi';

const ServiceDescriptionSection = ({ descriptions }) => {
    useEffect(() => {
        Aos.init({ duration: 500, delay: 100 });
    }, [])

    return (
        <div>
            <div className=' my-10'>
                <p className='text-2xl lg:text-7xl font-bold text-center'>Unlock High-Quality Solutions</p>
                <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-2 w-11/12 mx-auto lg:mt-24 mt-10 " >

                    {
                        descriptions?.map(description =>
                            <div className="border rounded-xl pb-5  flex flex-col justify-center items-center space-y-5 shadow-xl my-aos-element" >
                                <figure className="px-2 sm:px-10 pt-2 sm:pt-10 h-40 sm:h-60 w-full overflow-hidden">
                                    <img
                                        src={description.description_logo}
                                        alt="Faculty"
                                        className="rounded-xl w-full h-full object-cover"
                                    />
                                </figure>
                                {/* <img src={description.description_logo} alt="" className='w-1/2' /> */}
                                <p className="font-bold text-xs lg:text-xl text-center">{description.description_heading}</p>
                                <p className='lg:px-10 lg:text-sm text-sm'>
                                    {description.description}
                                </p>
                            </div>
                        )
                    }



                </div>
            </div>
        </div>
    );
};

export default ServiceDescriptionSection;