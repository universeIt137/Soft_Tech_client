import { FaCheckDouble } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {
    useEffect(() => {
        AOS.init({duration: "1000"})
    },[])

    return (
        <div className='w-11/12 mx-auto lg:flex my-20 gap-10'>
            <div className="lg:w-2/5 lg:flex items-center relative">
                <img className="" src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723394394/j2czx7fn6sic0ivpsec3.jpg" alt="" />
                <div  className="absolute -bottom-10 md:right-0  lg:bottom-32 lg:right-0 right-0 xl:bottom-0 animate-pulse transition">
                    <img src="https://res.cloudinary.com/dgamcpb88/image/upload/v1723397452/ntchtt44cxlsskvo0xym.png" alt="" />
                </div>
            </div>

            <div className="lg:w-3/5 text-justify mr-10 mt-5">
                <h1 className="text-3xl md:text-4xl mb-6 uppercase font-semibold"><span className="text-blue-800 underline ">About</span> Alpha Net</h1>
                <h3 className="text-xl mb-6">Alpha Net's commitment to serving quality service has gained the respect of customers and partners worldwide.</h3>
                <p className="text-xl mb-6">Alpha Net has been serving Enterprise IT Solutions in Bangladesh since 2001. Currently serving thousands of customers worldwide including Bangladesh and the USA. All services are using many Government and Corporate organization. Alpha Net builds and manages own Server infrastructure in Bangladesh and the USA. At present, Alpha Net is working to extend infrastructure in India, Canada, South Africa, Singapore and Mexico.</p>
                <div className="lg:flex justify-between gap-6">
                    <div className="">
                        <div className="flex items-center gap-3 text-lg">
                            <FaCheckDouble className="text-[#3691d6]"></FaCheckDouble>
                            <h1 className="mb-4">Worked with high-end clientele.</h1>
                        </div>

                        <div className="flex items-center gap-3 text-lg">
                            <FaCheckDouble className="text-[#3691d6] "></FaCheckDouble>
                            <h1 className="mb-4">5000+ Customers in 50+ Countries</h1>
                        </div>
                    </div>

                     <div>
                        <div className="flex items-center gap-3 text-lg">
                            <FaCheckDouble className="text-[#3691d6]"></FaCheckDouble>
                            <h1 className="mb-4">Over 23 years on the market</h1>
                        </div>
                                          
                        <div className="flex items-center gap-3 text-lg">
                            <FaCheckDouble className="text-[#3691d6]"></FaCheckDouble>
                            <h1>100% client satisfaction</h1>
                        </div>  
                    </div>                   
                </div>
            </div>
        </div>
    );
};

export default About;