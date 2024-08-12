import React from 'react';
import { GiGemChain,GiBrainTentacle } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { BsPersonSquare } from "react-icons/bs";

const WhatWeDo = () => {
    return (
        <div className='my-20'>
            <h1 className='text-center text-5xl font-semibold uppercase mb-4'>What we do</h1>
            <p className='text-center mb-28 text-xl mx-52'>Alpha Net is constantly working to help you with the best possible service. You don't need to look elsewhere if you try Alpha Net services. We focus on customer satisfaction and we believe in quality service.</p>

            {/* <div className='w-11/12 mx-auto mt-10 shadow-2xl flex gap-20 pb-10'>
                <div className='bg-[#004080] h-1/2 w-[450px] p-10 relative -top-10 -left-4 rounded-lg'>
                    <div className='flex items-center gap-2 text-white'>
                        <GiGemChain className='text-2xl '></GiGemChain>
                        <h1 className='text-2xl'>Solutions</h1>
                    </div>

                    <div className='flex items-center gap-2 my-10 text-white'>
                        <GiBrainTentacle className='text-2xl'></GiBrainTentacle>
                        <h1 className='text-2xl'>Infrastructure</h1>
                    </div>

                    <div className='flex items-center gap-2 my-10 text-white'>
                        <FaComputer className='text-2xl'></FaComputer>
                        <h1 className='text-2xl'>Platforms</h1>
                    </div>

                    <div className='flex items-center gap-2 my-10  text-white '>
                        <BsPersonSquare className='text-2xl'></BsPersonSquare>
                        <h1 className='text-2xl'>Friendly Support</h1>
                    </div>
                </div>

                    <div className='flex items-center gap-10'>
                        <div className='w-96'>
                            <h1 className='text-3xl font-bold'>Friendly Support</h1>
                            <div className='border w-10 my-3 bg-[#164e87] '></div>
                            <p className='text-xl text-justify'>You can get all solutions that a successful business needs. You can choose Web Design, Dedicated Servers, Web Hosting, SSL Certificate, Business Email, VPS, Cloud Storage, Business Telephone and more for your business.</p>
                        </div>

                        <div>
                            <img className='w-[400px]' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723456523/u8sbhqjtwkhhl5vzdemk.svg" alt="" />
                        </div>
                    </div>

            </div> */}

        </div>


    );
};

export default WhatWeDo;