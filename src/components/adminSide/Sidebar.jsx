import React, { useState } from 'react';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { IoIosAddCircleOutline, IoMdAddCircle, IoMdCard } from 'react-icons/io';
import { IoCartOutline, IoCloseCircleOutline } from 'react-icons/io5';
import { MdAddCircleOutline, MdManageHistory, MdMenuOpen, MdOutlineAdminPanelSettings, MdOutlineCategory, MdOutlineDiscount, MdOutlineLockPerson, MdOutlineManageSearch, MdOutlinePeopleOutline } from 'react-icons/md';
import { RiAdminLine } from 'react-icons/ri';
import { RxDashboard } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <>
            <aside
                className={`bg-dashboard_color text-white transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-14'
                    }`}
            >
                <div className="flex justify-between items-center p-4 gap-8">
                    <div className={`text-2xl font-bold ${!isSidebarOpen && 'hidden'}`}>
                        <div className="bg-white px-4 py-4 rounded-xl">
                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723544696/UniverseIT/Logo/xvlfi7xrapeoabxyzjji.png" alt="" />
                        </div>
                    </div>
                    <button
                        onClick={toggleSidebar}
                        className="text-white focus:outline-none"
                    >
                        {isSidebarOpen ? <IoCloseCircleOutline className='text-4xl' /> : <MdMenuOpen className='text-3xl' />}
                    </button>
                </div>
                <nav className=" space-y-4">
                    <ul>
                        
                        

                        <li>
                            <NavLink
                                to="/order-management"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200  hover:shadow-md hover:border-b hover:bg-dashboard_hover"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                
                                <IoMdAddCircle />

                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className=''>Add Service</p>
                                </span>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to="/order-management"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200  hover:shadow-md hover:border-b hover:bg-dashboard_hover"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                
                                <MdManageHistory />

                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className=''>Manage Services</p>
                                </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/order-management"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200  hover:shadow-md hover:border-b hover:bg-dashboard_hover"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                
                                <IoMdAddCircle />

                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className=''>Add Career</p>
                                </span>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to="/order-management"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200  hover:shadow-md hover:border-b hover:bg-dashboard_hover"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                
                                <MdManageHistory />

                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className=''>Manage Career</p>
                                </span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/order-management"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200  hover:shadow-md hover:border-b hover:bg-dashboard_hover"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                
                                <IoMdAddCircle />

                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className=''>Add Product</p>
                                </span>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to="/order-management"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200  hover:shadow-md hover:border-b hover:bg-dashboard_hover"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                
                                <MdManageHistory />

                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className=''>Manage Products</p>
                                </span>
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to="/order-management"
                                className="flex items-center space-x-3 p-3 rounded-lg transition duration-200  hover:shadow-md hover:border-b hover:bg-dashboard_hover"
                                activeClassName="bg-indigo-900 shadow-lg"
                            >
                                
                                <MdManageHistory />

                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    <p className=''>Manage Applications</p>
                                </span>
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;