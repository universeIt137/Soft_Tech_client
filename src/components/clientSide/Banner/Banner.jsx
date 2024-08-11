import React from 'react';

const Banner = () => {
    return (
        <div className='lg:flex bg-[#B9DFFB] my-12'>
            <div className='flex-1 md:mt-10 mx-6 xl:mx-32'>
                <h1 className='uppercase md:text-6xl lg:text-5xl lg:leading-relaxed pt-5 text-4xl leading-relaxed md:leading-snug'>Creating a Better <br /><span className='text-[#3d96de]'>IT Solutions</span></h1>
                <p className='text-xl md:text-2xl mt-8 text-wrap mb-8'>Alpha Net is a USA based Enterprise IT Solutions Company in Bangladesh. Alpha Net maintains a high-quality infrastructure worldwide. Main objective is to give the best possible service to customers.</p>
            </div>

            <div className='flex-1 sm:mt-16 sm:mb-32 mx-6 pb-10  lg:pb-0'>
                <img className='w-full md:w-full lg:w-10/12' src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723384932/osmakhycmfw6zjklnxuy.jpg" alt="" />
            </div>
        </div>
    );
};

export default Banner;