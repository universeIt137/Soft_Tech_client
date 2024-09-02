import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    const subLogo = "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723539361/UniverseIT/Logo/vg7riirvaqfi2vuo9xvl.png";
    return (
        <div className='bg-[#004cad] mt-3'>
            <div className='container mx-auto py-10 px-10 text-white'>
                <div className='grid grid-cols-1 lg:grid-cols-12 justify-center '>
                    {/* 1st */}
                    <div className="lg:col-span-4 ">
                        <img className='w-[200px] border ' src={subLogo} alt="Nimusoft Logo" />

                        <div className="mt-5">
                            <p className="flex items-center gap-2"><FaLocationDot /> 5/A, Ga-130/B, Progoti Sharani, Middle</p>
                            <p>Badda, Gulshan, Badda, Dhaka-1212.</p>
                            <p className="flex items-center gap-2"><IoCall />  +88 01616 500515</p>
                            <p className="flex items-center gap-2"> <IoMdMailUnread /> info@nimusoft.com</p>
                        </div>
                    </div>

                    <div className="col-span-8 grid lg:grid-cols-8 grid-cols-2 md:grid-cols-4 justify-center items-center py-10 lg:py-0">
                        {/* 2nd */}
                        <div className="lg:col-span-2 col-span-1 mt-10 lg:mt-0">
                            <h2 className="text-xl text-[#f78230]">Company</h2>
                            <div className="mt-5 leading-4">
                                <li><Link to="/" className="hover:text-[#f78230]">Home</Link></li>
                                <li><Link to="/case-studies" className="hover:text-[#f78230]">Case Studies</Link></li>
                                <li><Link to="/about" className="hover:text-[#f78230]">About</Link></li>
                                <li><Link to="/careers" className="hover:text-[#f78230]">Careers</Link></li>
                                <li><Link to="/contact" className="hover:text-[#f78230]">Contact Us</Link></li>
                            </div>
                        </div>
                        {/* 3rd */}
                        <div className="lg:col-span-2 col-span-1 mt-10 lg:mt-0">
                            <h2 className="text-xl text-[#f78230]">Products</h2>
                            <div className="mt-5 leading-4">
                                <li><Link to="/nimu-hrm" className="hover:text-[#f78230]">Nimu HRM</Link></li>
                                <li><Link to="/nimu-attendance" className="hover:text-[#f78230]">Nimu Attendance</Link></li>
                                <li><Link to="/nimu-crm" className="hover:text-[#f78230]">Nimu CRM</Link></li>
                                <li><Link to="/nimu-pos" className="hover:text-[#f78230]">Nimu POS</Link></li>
                                <li><Link to="/nimu-inventory" className="hover:text-[#f78230]">Nimu Inventory</Link></li>
                            </div>
                        </div>
                        {/* 4th */}
                        <div className="lg:col-span-2 col-span-1 mt-10 lg:mt-0">
                            <h2 className="text-xl text-[#f78230]">Services</h2>
                            <div className="mt-5 leading-4">
                                <li><Link to="/erp-solution" className="hover:text-[#f78230]">ERP Solution</Link></li>
                                <li><Link to="/mobile-app" className="hover:text-[#f78230]">Mobile Application</Link></li>
                                <li><Link to="/ecommerce" className="hover:text-[#f78230]">E-Commerce</Link></li>
                                <li><Link to="/iot-vr" className="hover:text-[#f78230]">IoT & VR</Link></li>
                                <li><Link to="/data-analytics" className="hover:text-[#f78230]">Data Analytics</Link></li>
                            </div>
                        </div>
                        {/* 5th */}
                        <div className="lg:col-span-2 col-span-1 mt-10 lg:mt-0">
                            <h2 className="text-xl text-[#f78230]">Learn More</h2>
                            <div className="mt-5 leading-4">
                                <li><Link to="/real-estate" className="hover:text-[#f78230]">Real Estate</Link></li>
                                <li><Link to="/medical-care" className="hover:text-[#f78230]">Medical Care</Link></li>
                                <li><Link to="/education" className="hover:text-[#f78230]">Education</Link></li>
                                <li><Link to="/home-automation" className="hover:text-[#f78230]">Home Automation</Link></li>
                                <li><Link to="/robotics-ai" className="hover:text-[#f78230]">Robotics & AI</Link></li>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="mt-5 opacity-80 border-white" />

                <div className="flex flex-col lg:flex-row lg:justify-between gap-5 text-center my-5">
                    <p>Privacy & Policy</p>
                    {/* Social Media Icons */}
                    <div className="flex justify-center gap-5 text-2xl lg:pr-5">
                        <FaFacebook className="hover:text-[#f78230]" />
                        <IoLogoLinkedin className="hover:text-[#f78230]" />
                        <FaYoutube className="hover:text-[#f78230]" />
                    </div>
                </div>

                <div className="my-5 text-center">
                    <p>© 2024 Nimusoft Technologies Ltd.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
