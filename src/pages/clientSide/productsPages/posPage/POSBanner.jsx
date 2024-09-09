import React from 'react';

const POSBanner = () => {
    return (
        <div>
            <div>
                <div className='w-full bg-universe_primary '>
                    <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center w-11/12 mx-auto">
                        <div className="mt-20 lg:mt-0" data-aos="fade-right">
                            <div className='text-white space-y-5'>
                                <p className='lg:text-6xl text-3xl font-bold'>Universe Soft Tech POS</p>
                                <p className='text-xl'>
                                    Revolutionize Your business with NIMUPOS. A complete POS Solution. Our intelligent retail management solution combines powerful features with advanced analytics to optimize sales, streamline inventory management, and enhance customer experiences.
                                </p>
                                <button className='bg-white text-black p-4 rounded-lg text-xl'>Request A Demo</button>
                            </div>
                        </div>
                        <div className="" data-aos="fade-left">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725871985/Universe%20Soft%20Tech/Products/POS/gp7drybbizqvgi1snhnp.png" alt="" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default POSBanner;