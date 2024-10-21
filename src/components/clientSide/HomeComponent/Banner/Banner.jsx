import { useEffect } from 'react';
import './banner.css';
import Aos from 'aos';
import { Link } from 'react-router-dom';

const Banner = () => {

    useEffect(() => {
        Aos.init({ duration: 1000, delay: 400 });
    }, []);

    return (
        <div className="lg:py-16 banner-wave my-aos-element">
            <div className="container mx-auto flex flex-col md:flex-col lg:flex-row justify-between items-center md:px-8" >
                {/* content */}
                <div className="flex-1 lg:pb-20 md:pb-2 pb-5 md:leading-10" data-aos="zoom-in">
                    <h1 className="my-3 leading-relaxed lg:text-4xl text-center lg:text-start md:text-start text-text_blue text-2xl font-bold -tracking-[0.044rem]">
                        Providing You <br /> <span className="text-text_primari"> Smart Digital Solutions </span> <br />for Future-Ready Business <br className="hidden lg:block" />
                    </h1>
                    <p className="text-text_blue leading-7 -tracking-[0.2px] lg:w-[510px] basis-[510px] lg:text-justify text-center md:text-start mb-5 px-10 md:px-0 lg:px-0">
                        At Sof Tech, we offer comprehensive digital solutions like POS, HRM, and LMS, tailored to optimize your business processes and drive growth in the digital age.
                    </p>
                    <div className="flex flex-col md:flex-row lg:flex-row gap-5 py-5 px-10 md:px-0 lg:px-0">


                        <button className="bg-bg_btn_primary text-white text-xl rounded-[50px] py-2.5 px-5 cursor-pointer lg:w-[200px] md:w-[200px] border-none text-center inline-block hover:-translate-y-1 hover:translate-x-1 hover:shadow-xl hover:transform hover:duration-500 hover:bg-bg_btn_hover hover:ease-in-out w-full">
                            <Link to={"/request-demo"}>

                                Get a Demo
                            </Link>
                        </button>


                        <Link to={"/contact-us"}>
                            <button className="border border-universe_primary text-universe_primary rounded-[50px] py-2.5 px-5 cursor-pointer lg:w-[200px] md:w-[200px] text-center inline-block hover:-translate-y-1 hover:translate-x-1 hover:shadow-lg hover:shadow-bg_btn_primary hover:bg-bg_btn_light hover:transform hover:duration-500 hover:ease-in-out w-full">Start a Project</button>
                        </Link>
                    </div>
                </div>
                {/* img */}
                <div className="flex-1" data-aos="zoom-in">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725965939/Universe%20Soft%20Tech/Services/Mobile%20App%20page/thok5jhl8z3o7qgqakjg.svg" alt="Banner Image" />


                </div>
            </div>
        </div>
    );
};

export default Banner;
