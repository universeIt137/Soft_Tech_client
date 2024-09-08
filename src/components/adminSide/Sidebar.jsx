import React, { useState } from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { MdManageHistory, MdMenuOpen } from 'react-icons/md';
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { GiStairsGoal } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { SlEnvolopeLetter } from "react-icons/sl";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
    const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
    const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
    const [isApplicationDropdownOpen, setIsApplicationDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleServiceDropdown = () => {
        setIsServiceDropdownOpen(!isServiceDropdownOpen);
    };

    const toggleCareerDropdown = () => {
        setIsCareerDropdownOpen(!isCareerDropdownOpen);
    };

    const toggleProductDropdown = () => {
        setIsProductDropdownOpen(!isProductDropdownOpen);
    };

    const toggleApplicationDropdown = () => {
        setIsApplicationDropdownOpen(!isApplicationDropdownOpen);
    };

    return (
        <>
            <aside
                className={`bg-dashboard_color text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-14'}`}
            >
                <div className="flex justify-between items-center p-4 gap-8">
                    <div className={`text-2xl font-bold ${!isSidebarOpen && 'hidden'}`}>
                        <div className="bg-white px-4 py-4 rounded-xl">
                            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723544696/UniverseIT/Logo/xvlfi7xrapeoabxyzjji.png" alt="Logo" />
                        </div>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                    >
                        {isSidebarOpen ? <IoCloseCircleOutline className='text-4xl' /> : <MdMenuOpen className='text-3xl' />}
                    </button>
                </div>
                <nav className="space-y-4">
                    <ul>
                        <li>
                            <label
                                onClick={toggleServiceDropdown}
                                className={`flex items-center space-x-3 p-3 w-full text-left rounded-lg transition duration-200 hover:bg-white hover:text-black ${isSidebarOpen ? 'text-white' : 'text-center'}`}
                            >
                                <GrServices />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    Add Services
                                </span>
                            </label>

                            <ul className={`ml-8 ${!isServiceDropdownOpen && 'hidden'} ${!isSidebarOpen && 'text-center'} ${isSidebarOpen ? 'block' : 'hidden'}`}>
                                <li>
                                    <NavLink
                                        to="/dashboard/manage-service"
                                        className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                    >
                                        Manage Service
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/add-service"
                                        className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                    >
                                        Add Service
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <label
                                onClick={toggleCareerDropdown}
                                className={`flex items-center space-x-3 p-3 w-full text-left rounded-lg transition duration-200 hover:bg-white hover:text-black ${isSidebarOpen ? 'text-white' : 'text-center'}`}
                            >
                                <GiStairsGoal />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    Manage Career
                                </span>
                            </label>

                            <ul className={`ml-8 ${!isCareerDropdownOpen && 'hidden'} ${!isSidebarOpen && 'text-center'} ${isSidebarOpen ? 'block' : 'hidden'}`}>
                                <li>
                                    <NavLink
                                        to="/dashboard/manage-career"
                                        className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                    >
                                        Manage Career
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/add-career"
                                        className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                    >
                                        Add Career
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <label
                                onClick={toggleProductDropdown}
                                className={`flex items-center space-x-3 p-3 w-full text-left rounded-lg transition duration-200 hover:bg-white hover:text-black ${isSidebarOpen ? 'text-white' : 'text-center'}`}
                            >
                                <MdOutlineProductionQuantityLimits />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    Add Product
                                </span>
                            </label>

                            <ul className={`ml-8 ${!isProductDropdownOpen && 'hidden'} ${!isSidebarOpen && 'text-center'} ${isSidebarOpen ? 'block' : 'hidden'}`}>
                                <li>
                                    <NavLink
                                        to="/manage-product"
                                        className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                    >
                                        Add Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/manage-product"
                                        className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                    >
                                        Manage Product
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <label
                                onClick={toggleApplicationDropdown}
                                className={`flex items-center space-x-3 p-3 w-full text-left rounded-lg transition duration-200 hover:bg-white hover:text-black ${isSidebarOpen ? 'text-white' : 'text-center'}`}
                            >
                                <SlEnvolopeLetter />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    Application
                                </span>
                            </label>

                            <ul className={`ml-8 ${!isApplicationDropdownOpen && 'hidden'} ${!isSidebarOpen && 'text-center'} ${isSidebarOpen ? 'block' : 'hidden'}`}>
                                <li>
                                    <NavLink
                                        to="/manage-application"
                                        className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                    >
                                        All Application
                                    </NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
