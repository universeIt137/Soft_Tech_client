import React, { useState } from 'react';
import { GiGemChain,GiBrainTentacle } from "react-icons/gi";
import { FaComputer } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";

const Solutions = () => {

    const [showBlogs,setShowBlogs] = useState(false);
    const [infrastructure,setInfrastructure] = useState(false);

    const handleButtonClick = () => {
        setShowBlogs(!showBlogs)
    }

    const handleFrastructureClick = () => {
        setInfrastructure(!infrastructure);
    }
    return (


        <div className='w-11/12 mx-auto shadow-2xl lg:flex gap-20 lg:gap-5 p-2 xl:pb-10'>
            <div className='bg-[#004080] w-[380px]  md:w-full lg:w-[450px] xl:w-[480px] p-10 relative -top-12 -left-6 text-white md:-top-10 md:-left-10 rounded-lg'>
             <div className='flex items-center gap-2 my-10'>
                <GiGemChain className='text-2xl'></GiGemChain>
                <button onClick={handleButtonClick} className='text-2xl'>Solutions</button>
             </div>

             <div className='flex items-center gap-2 my-10'>
                <GiBrainTentacle className='text-2xl'></GiBrainTentacle>
                <button onClick={handleFrastructureClick} className='text-2xl'>Infrastructure</button>
             </div>

             <div className='flex items-center gap-2 my-10'>
                <FaComputer className='text-2xl'></FaComputer>
                <button className='text-2xl'>Platforms</button>
            </div> 

            <div className='flex items-center gap-2 my-10 '>
                <IoPersonAdd className='text-2xl'></IoPersonAdd>
                <button className='text-2xl'>Friendly Support</button>
            </div>
             
        </div>

        <div className='md:flex items-center gap-10 mt-12'>
                        <div className='w-96'>
                            <h1 className='text-3xl font-bold'>Solutions</h1>
                            <div className='border w-10 my-3 bg-[#164e87] '></div>
                            <p className='text-xl text-justify text-wrap sm:pb-5 pr-4'>You can get all solutions that a successful business needs. You can choose Web Design, Dedicated Servers, Web Hosting, SSL Certificate, Business Email, VPS, Cloud Storage, Business Telephone and more for your business.</p>
                        </div>

                        <div className='mt-12'>
                            <img className='w-[400px]' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723456523/u8sbhqjtwkhhl5vzdemk.svg" alt="" />
                        </div>
                </div>
        {/* {
            showBlogs && (
                <div className='flex hidden items-center gap-10'>
                        <div className='w-96'>
                            <h1 className='text-3xl font-bold'>Solutions</h1>
                            <div className='border w-10 my-3 bg-[#164e87] '></div>
                            <p className='text-xl text-justify'>You can get all solutions that a successful business needs. You can choose Web Design, Dedicated Servers, Web Hosting, SSL Certificate, Business Email, VPS, Cloud Storage, Business Telephone and more for your business.</p>
                        </div>

                        <div>
                            <img className='w-[400px]' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723456523/u8sbhqjtwkhhl5vzdemk.svg" alt="" />
                        </div>
                </div>
            )
        }

        {
            infrastructure && (
                <div className='flex items-center gap-10'>
                        <div className='w-96'>
                            <h1 className='text-3xl font-bold'>Infrastructure</h1>
                            <div className='border w-10 my-3 bg-[#164e87] '></div>
                            <p className='text-xl text-justify'>We manage our own private infrastructure that is built with the latest hardware at multiple Datacenters (Tier 3 & Tier 4) in the USA and Bangladesh.</p>
                        </div>

                        <div>
                            <img className='w-[400px]' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723476648/tqday0pubp3uxwesbzpw.svg" alt="" />
                        </div>
                </div>
            )
        } */}
        </div>

    );
};

export default Solutions;








    


