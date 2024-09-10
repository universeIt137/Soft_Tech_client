import Aos from 'aos';
import React, { useEffect } from 'react';

const MobileBanner = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, delay: 200 });
    }, []);
    return (
        <div>
            <div className="lg:flex items-center lg:min-h-screen my-aos-element">
                <div className="" data-aos="zoom-in">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725946368/Universe%20Soft%20Tech/Services/Mobile%20App%20page/sk1dlk4rqtxn8lowsutq.webp" alt="" />
                </div>
                <div className="space-y-5 text-center lg:text-start px-3" data-aos="fade-up">
                    <p className='text-4xl lg:text-7xl font-semibold'>
                        Build for Your <br />
                        <span className='text-universe_primary'>Applications</span>
                    </p>
                    <p className='text-xl'>
                        Build for Your
                        Applications
                        Powering Your Business with Innovative Mobile App Solutions.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default MobileBanner;