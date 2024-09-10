import { useEffect } from 'react';
import './banner.css';
import Aos from 'aos';

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 8000, delay: 1000 });
    },[]);

    return (
        <div className="py-16 banner-wave my-aos-element">
            <div className="container mx-auto flex flex-col md:flex-col lg:flex-row justify-between items-center md:px-8" >
                {/* content */}
                <div className="flex-1 lg:pb-20 md:pb-2 pb-5 md:leading-10" data-aos="zoom-in">
                    <h1 className="my-3 leading-relaxed lg:text-4xl text-center lg:text-start md:text-start text-text_blue text-2xl font-bold -tracking-[0.044rem]">
                        Get 100% Secure <span className="text-text_primari">Cloud <br className="hidden lg:block" /> Based <br className="block md:block lg:hidden" /> Custom</span> Software <br className="hidden lg:block" /> Solution
                    </h1>
                    <p className="text-text_blue leading-7 -tracking-[0.2px] lg:w-[510px] basis-[510px] lg:text-justify text-center md:text-start mb-5 px-10 md:px-0 lg:px-0">
                        We deliver 100% secure, cloud-based custom software solutions, offering a comprehensive range of ERP products and services to meet all your business needs efficiently and reliably.
                    </p>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-5 py-5 px-10 md:px-0 lg:px-0">
                        <button className="bg-bg_btn_primary text-white text-xl rounded-[50px] py-2.5 px-5 cursor-pointer lg:w-[200px] md:w-[200px] border-none text-center inline-block hover:-translate-y-1 hover:translate-x-1 hover:shadow-xl hover:transform hover:duration-500 hover:bg-bg_btn_hover hover:ease-in-out w-full">Get a Demo</button>
                        <button className="border border-universe_primary text-universe_primary rounded-[50px] py-2.5 px-5 cursor-pointer lg:w-[200px] md:w-[200px] text-center inline-block hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:shadow-bg_btn_primary hover:bg-bg_btn_light hover:transform hover:duration-500 hover:ease-in-out w-full">Start a Project</button>
                    </div>
                </div>
                {/* img */}
                <div className="flex-1" data-aos="zoom-in">
                    <img src="https://res.cloudinary.com/dqescabbl/image/upload/v1723447109/home-banner_dnl7fj.webp" alt="Banner Image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
