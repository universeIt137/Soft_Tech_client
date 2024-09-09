import Aos from 'aos';
import React, { useEffect } from 'react';

const DataBanner = () => {
    useEffect(() => {
        Aos.init({ duration: 700, delay: 200 });
    }, []);
    return (
        <div>
            <section className="banner-section bg-universe_secondary">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center min-h-screen w-4/5 mx-auto">
                    <div className="" data-aos="fade-left">
                        <p className='lg:text-7xl text-3xl font-bold text-white'>
                            <span> Transform Your Data </span>

                            <span className='text-universe_primary'>Actionable</span>
                        </p>
                        <p className='text-xl text-white'>
                            Transform Your Data Actionable Make Smarter Business Decisions with Our Data Analytics Services.
                        </p>
                    </div>
                    <div className="" data-aos="zoom-in">
                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725881685/Universe%20Soft%20Tech/Services/E-commerce/sag4dspbswve3jlzd61q.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DataBanner;