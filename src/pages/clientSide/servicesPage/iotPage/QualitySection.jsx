import Aos from 'aos';
import React, { useEffect } from 'react';
import { FcIdea } from 'react-icons/fc';
import { PiUserSwitchBold } from 'react-icons/pi';

const QualitySection = ({ descriptions }) => {
    console.log(descriptions)
    useEffect(() => {
        Aos.init({ duration: 500, delay: 100 });
    }, [])
    return (
        <div>
            <div className=' my-10'>
                <p className='text-3xl lg:text-7xl font-bold text-center'>Unlock High-Quality Solutions</p>
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 w-11/12 mx-auto lg:mt-24 mt-10 " >

                    {
                        descriptions?.map(description =>
                            <div className="border rounded-xl py-10 flex flex-col justify-center items-center space-y-5 shadow-xl my-aos-element" >
                                <img src={ description.description_logo } alt="" className='w-1/2' />
                                <p className="font-bold text-xl text-center">{ description.description_heading }</p>
                            <p className='px-10 text-center'>
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

export default QualitySection;