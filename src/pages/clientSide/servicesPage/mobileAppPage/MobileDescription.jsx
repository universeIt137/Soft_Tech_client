import Aos from 'aos';
import React, { useEffect } from 'react';

const MobileDescription = () => {
    window.scrollTo(0, 0);
    useEffect(() => {
        Aos.init({ duration: 500, delay: 200 });
    }, []);

    return (
        <div>
            <div className="grid lg:gap-20 gap-5 mt-10 lg:grid-cols-2 grid-cols-1 w-4/5 mx-auto items-center">
                <div className="text-center lg:text-start my-aos-element" data-aos="zoom-in">
                    <p className='text-2xl lg:text-5xl font-bold'>
                        Mobile Appication Development
                    </p>
                    <div className=" space-y-2 text-xl mt-4">
                        <p>
                            A mobile app offers Customers 24/7 Access to Your Business.We start by conducting a thorough analysis of your business, your target audience, and your competitors. This helps us identify your unique selling points and the key features that your mobile app needs to have.
                        </p>
                        <p>
                            Our development process is focused on delivering high-quality apps that are both user-friendly and intuitive. We use the latest technologies and industry best practices to ensure that your app is fast, reliable, and secure. We also conduct rigorous testing to ensure that your app performs flawlessly on all devices and platforms.
                        </p>
                        <p>
                            Our team is well-versed in developing mobile apps for a wide range of industries, including healthcare, finance, education, and more. We can also integrate your mobile app with other systems and platforms, such as social media, e-commerce, and CRM systems.
                        </p>
                    </div>
                </div>
                <div className="my-aos-element" data-aos="zoom-in">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725946925/Universe%20Soft%20Tech/Services/Mobile%20App%20page/qdrmo223f8ptpbibrdvz.png" alt="" className='rounded-2xl' />
                </div>
            </div>
        </div>
    );
};

export default MobileDescription;