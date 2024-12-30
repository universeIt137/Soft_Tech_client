import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import { motion } from 'framer-motion';
import { IoMdArrowDropdown } from 'react-icons/io';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query'


const UpdatedNavbar = () => {
    const [isOpen, setOpenMenu] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isDropdownOpen2, setDropdownOpen2] = useState(false);
    const [isGetInTouchOpen, setGetInTouch] = useState(false);

    const axiosPublic = useAxiosPublic();

    const { data: allservices = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const response = await axiosPublic.get('/get-all-service');
            return response.data.data;
        }
    })

    const { data: allProducts = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await axiosPublic.get('/get-products');
            return res.data.data;
        }
    })
    // console.log(allProducts);




    

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.navbarUl')) {
                setDropdownOpen(false);
                setDropdownOpen2(false);
                setGetInTouch(false);
            }
        };


        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [setDropdownOpen, setDropdownOpen2, setGetInTouch]);


    const handleDropdownToggle = () => {
        setDropdownOpen(!isDropdownOpen);
        setDropdownOpen2(false);
        setGetInTouch(false);
    };

    const handleDropdownToggle2 = () => {
        setDropdownOpen2(!isDropdownOpen2);
        setGetInTouch(false);
        setDropdownOpen(false);
    };

    const handleDropdownToggle3 = () => {
        setGetInTouch(!isGetInTouchOpen);
        setDropdownOpen2(false);
        setDropdownOpen(false);
    };



    const handleHideDrawer = () => {
        setOpenMenu(false);
        document.getElementById('my-drawer').checked = false;
    };



    const logo = 'https://res.cloudinary.com/dxvacpgrv/image/upload/v1734868184/UniverseSoftTech/Image/htnalzbw4rj4jigwrckj.png';

    const NavLinkStyle =
        'text-universe_secondary hover:text-text_primari text-xl py-[5px] hover:px-[10px] lg:px-[10px] transition-all duration-300 font-medium';

    // Desktop View 
    const navNavLinks = (
        <>

            <NavLink to="/" onClick={handleHideDrawer} className={`${NavLinkStyle} `}>
                Home
            </NavLink>



            {/* Products Dropdown Toggle */}
            <p
                // onClick={handleDropdownToggle}
                className={`${NavLinkStyle} transition-all duration-300 flex justify-between items-center cursor-pointer`}
            >
               <Link to={'/products'}>Products</Link>
                {/* <span className={`transition-all duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <IoMdArrowDropdown />
                </span> */}
            </p>

            {/* Products Dropdown Menu */}
            <div
                className={`absolute border mx-auto top-12 left-120 rounded-md bg-white transition-all origin-top duration-300 ${isDropdownOpen ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
                    }`}
                style={{ width: '200px', minWidth: '700px', maxWidth: '700px' }} // Adjust width if needed
            >
                <div className="grid grid-cols-3 gap-4 ">
                    {allProducts.map((product) => (
                        <NavLink

                            key={product._id}
                            to={`/productsDetails/${product._id}`}
                            onClick={handleHideDrawer}
                            className="flex items-center gap-2 p-2 text-gray-400 hover:text-blue-500 transition-all duration-300"
                        >
                            <img src={product.nav_logo}  className="w-[30px]" />

                            <div className="">
                                <span className="text-gray-400">{product.nav_title} </span>
                                <p className="text-gray-300 text-[11px]">{product.nav_description.slice(0, 20)}... </p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>

            {/* Services Dropdown Toggle */}
            <p
                onClick={handleDropdownToggle2}
                className={`${NavLinkStyle} transition-all duration-300 flex justify-between items-center cursor-pointer`}
            >
                Services
                <span className={`transition-all duration-300 ${isDropdownOpen2 ? 'rotate-180' : 'rotate-0'}`}>
                    <IoMdArrowDropdown />
                </span>
            </p>

            {/* Services Dropdown Menu */}
            <div
                className={`absolute border mx-auto top-10 left-166 rounded-md bg-white transition-all origin-top duration-300 ${isDropdownOpen2 ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
                    }`}
                style={{ width: '200px', minWidth: '700px', maxWidth: '700px' }} // Adjust width if needed
            >
                <div className="grid grid-cols-3 gap-4 ">
                    {allservices.map((service) => (
                        <NavLink
                            key={service._id}
                            to={`/serviceDetails/${service._id}`}
                            onClick={handleHideDrawer}
                            className="flex items-center gap-2 p-2 hover:text-blue-500 transition-all duration-300"
                        >
                            <img src={service.nav_logo} className="w-8 h-8 bg-white rounded-lg" />
                            <div className="">
                                <span className="text-gray-400">{service.nav_title} </span>
                                <p className="text-gray-300 text-[11px]">{service.nav_description.slice(0, 20)}... </p>
                            </div>
                        </NavLink>
                    ))}
                </div>
            </div>

            <NavLink to="/portfolio" onClick={handleHideDrawer} className={`${NavLinkStyle} `}>
                Portfolio
            </NavLink>

            {/* Get in Touch Dropdown Toggle */}
            <p
                onClick={handleDropdownToggle3}
                className={`${NavLinkStyle} transition-all duration-300 flex justify-between items-center cursor-pointer`}
            >
                Get in Touch
                <span className={`transition-all duration-300 ${isGetInTouchOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <IoMdArrowDropdown />
                </span>
            </p>

            {/* Get in Touch Dropdown Menu */}
            <div
                className={`absolute border mx-auto top-10 left-[470px] rounded-md bg-white transition-all origin-top duration-300 ${isGetInTouchOpen ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
                    }`}
                style={{ width: '80px', minWidth: '200px', maxWidth: '150px' }} // Adjust width if needed
            >
                <div className='flex flex-col items-center justify-center'>

                <NavLink to="/ceo-speech" className={`${NavLinkStyle} text-left w-full`}>
                        CEO Speech
                    </NavLink>

                    <NavLink to="/about-us" className={`${NavLinkStyle} text-left w-full`}>
                        About Us
                    </NavLink>

                    <NavLink to="/contact-us" className={`${NavLinkStyle} text-left w-full`}>
                        Contact Us
                    </NavLink>

                    <NavLink to="/career" className={`${NavLinkStyle} text-left w-full`}>
                        Career
                    </NavLink>

                    <NavLink to="/company-profile" className={`${NavLinkStyle} text-left w-full`}>
                        Company Profile
                    </NavLink>

                    <NavLink to="/our-team" className={`${NavLinkStyle} text-left w-full`}>
                        Our Team
                    </NavLink>
                    <NavLink to="/blogs" className={`${NavLinkStyle} text-left w-full`}>
                        Blogs
                    </NavLink>
                </div>


            </div>

        </>
    );

    // Mobile View 
    const navNavLinksForDrawer = (
        <>
            <NavLink to="/" onClick={handleHideDrawer} className={`${NavLinkStyle}`}>
                <p className='text-white'>Home</p>
            </NavLink>
            <NavLink to="/about-us" onClick={handleHideDrawer} className={`${NavLinkStyle}`}>
                <p className='text-white'>About Us</p>
            </NavLink>

            {/* Mobile Drawer Dropdown */}
            {/* Products  */}
            <p
                onClick={handleDropdownToggle}
                className={`text-xl hover:text-white rounded-md py-[5px] transition-all duration-300 flex justify-between items-center cursor-pointer`}
            >
                Products
                <span className={`transition-all duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <IoMdArrowDropdown />
                </span>
            </p>

            <div
                className={`rounded-md bg-black/10 flex flex-col ml-4 transition-all origin-top duration-300 ${isDropdownOpen ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
                    } gap-2`}
            >
                {allProducts.map((product) => (
                    <NavLink
                        key={product._id}
                        to={`/productsDetails/${product._id}`}
                        onClick={handleHideDrawer}
                        className="flex items-center gap-2 p-2 hover:text-blue-500 transition-all duration-300"
                    >
                        <img src={product.nav_logo} className="w-8 h-8 bg-white rounded-lg" />
                        <span className="text-white">{product.nav_title}</span>
                    </NavLink>
                ))}
            </div>


            {/* Mobile Drawer Dropdown */}
            {/* Services  */}
            <p
                onClick={handleDropdownToggle2}
                className={`text-xl hover:text-white rounded-md py-[5px] transition-all duration-300 flex justify-between items-center cursor-pointer`}
            >
                Services
                <span className={`transition-all duration-300 ${isDropdownOpen2 ? 'rotate-180' : 'rotate-0'}`}>
                    <IoMdArrowDropdown />
                </span>
            </p>

            <div
                className={`rounded-md bg-black/10 flex flex-col ml-4 transition-all origin-top duration-300 ${isDropdownOpen2 ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
                    } gap-2`}
            >
                {allservices.map((service) => (
                    <NavLink
                        key={service.id}
                        to={`/serviceDetails/${service._id}`}
                        onClick={handleHideDrawer}
                        className="flex items-center gap-2 p-2 hover:text-blue-500 transition-all duration-300"
                    >
                        <img src={service.nav_logo} className="w-8 h-8 bg-white rounded-lg" />
                        <span className="text-white">{service.nav_title} </span>
                    </NavLink>
                ))}
            </div>


            {/* Mobile Drawer Dropdown */}
            {/* Get in touch  */}
            <p
                onClick={handleDropdownToggle3}
                className={`text-xl hover:text-white rounded-md py-[5px] transition-all duration-300 flex justify-between items-center cursor-pointer`}
            >
                Get In Touch
                <span className={`transition-all duration-300 ${isGetInTouchOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <IoMdArrowDropdown />
                </span>
            </p>

            <div
                className={`rounded-md bg-black/10 flex flex-col ml-4 transition-all origin-top duration-300 ${isGetInTouchOpen ? 'block scale-y-100 p-2' : 'scale-y-0 h-0'
                    } gap-2`}
            >
                <div className='flex flex-col items-center justify-center'>
                    <NavLink to="/about-us" className={`${NavLinkStyle} text-left text-white w-full`}>
                        About Us
                    </NavLink>

                    <NavLink to="/contact-us" className={`${NavLinkStyle} text-left text-white w-full`}>
                        Contact Us
                    </NavLink>

                    <NavLink to="/career" className={`${NavLinkStyle} text-left text-white w-full`}>
                        Career
                    </NavLink>

                    <NavLink to="/company-profile" className={`${NavLinkStyle} text-left text-white w-full`}>
                        Company Profile
                    </NavLink>

                    <NavLink to="/our-team" className={`${NavLinkStyle} text-left text-white w-full`}>
                        Our Team
                    </NavLink>

                    <NavLink to="/blogs" className={`${NavLinkStyle} text-left text-white w-full`}>
                        Blogs
                    </NavLink>
                </div>

            </div>








            <NavLink to="/portfolio" onClick={handleHideDrawer} className={`${NavLinkStyle}`}>
                <p className="text-white">Portfolio</p>
            </NavLink>

        </>
    );

    return (
        <div className="sticky top-0 z-20 shadow-lg">
            <div className="navbar bg-gray-50 text-white py-1">
                <div className="w-full">
                    {/* Mobile view */}
                    <div className="text-white w-full flex justify-between items-center lg:hidden">
                        <img src={logo} alt="Logo" className="w-24" />
                        <div className="block lg:hidden drawer w-max z-50">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content cursor-pointer">
                                <label htmlFor="my-drawer" className="z-50 cursor-pointer text-black">
                                    <Hamburger toggled={isOpen} toggle={setOpenMenu} size={23} duration={0.6} />
                                </label>
                            </div>
                            <div className="drawer-side">
                                <label
                                    onClick={() => setOpenMenu(false)}
                                    htmlFor="my-drawer"
                                    className="drawer-overlay"
                                ></label>
                                <motion.ul className="menu p-4 w-56 md:w-80 min-h-full bg-universe_secondary text-white space-y-2 rounded-lg z-40 navbarUl">
                                    {navNavLinksForDrawer}
                                </motion.ul>
                            </div>
                        </div>
                    </div>
                    {/* Laptop view */}
                    <div className="text-sm hidden lg:flex container mx-auto ">
                        <div className='flex justify-center gap-24'>
                            <Link to="/">
                                <img src={logo} alt="Logo" className="w-32" />
                            </Link>
                            <nav className="relative md:ml-auto flex flex-wrap items-center justify-center font-bold navbarUl gap-x-4 gap-y-1">
                                {navNavLinks}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdatedNavbar;
