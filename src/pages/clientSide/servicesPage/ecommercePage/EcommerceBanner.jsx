import Aos from 'aos';
import React, { useEffect } from 'react';

const EcommerceBanner = () => {
    useEffect(() => {
        Aos.init({ duration: 800, delay: 400 });
    }, []);
    return (
        <div>
            <section className="banner-section  bg-universe_primary">
                <div className="grid lg:grid-cols-2 justify-center items-center w-4/5 mx-auto py-10 min-h-screen">
                    <div className="lg:space-y-5" data-aos="fade-up">
                        <p className='lg:text-7xl text-3xl text-white font-bold'>
                            Build Your Own <br />
                            <span className='text-universe_secondary'> E-commerce Shop</span>
                        </p>
                        <p className='lg:text-2xl text-white'>Create a stunning website for your E-shop startup.</p>
                    </div>
                    <div className="" data-aos="fade-left">
                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725877524/Universe%20Soft%20Tech/Services/E-commerce/mjkmoqphl5okvxun6kks.svg" alt="" className='lg:w-[650px]' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EcommerceBanner;