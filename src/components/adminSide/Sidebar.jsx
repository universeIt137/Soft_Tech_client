import React, { useState } from 'react';
import { BsMenuButtonWideFill } from 'react-icons/bs';
import { GrMoney } from 'react-icons/gr';
import { IoIosAddCircleOutline, IoMdAddCircle, IoMdCard } from 'react-icons/io';
import { MdAddCircleOutline, MdManageHistory, MdMenuOpen, MdOutlineAdminPanelSettings, MdOutlineCategory, MdOutlineDiscount, MdOutlineLockPerson, MdOutlineManageSearch, MdOutlinePeopleOutline } from 'react-icons/md';
import { IoCloseCircleOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleServiceDropdown = () => {
        setIsServiceDropdownOpen(!isServiceDropdownOpen);
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
                            {/* Use checkbox to control the collapse */}
                            <input type="checkbox" id="add-service-toggle" className="peer hidden" />
                            <label
                                htmlFor="add-service-toggle"
                                className="flex items-center space-x-3 p-3 w-full text-left rounded-lg transition duration-200 hover:bg-white hover:text-black focus:text-black text-white focus:bg-white cursor-pointer"
                            >
                                <IoMdAddCircle />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'}`}>
                                    Add Services
                                </span>
                            </label>

                            {/* Dropdown menu for Add Services, shown when checkbox is checked */}
                            <ul className="ml-8 hidden peer-checked:block">
                                <li>
                                    <NavLink
                                        to="/dashboard/add-service"
                                        className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                    >
                                        Manage Service
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/manage-service"
                                        className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                    >
                                        Add Service
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                          
                            <input type="checkbox" id="add-career-toggle" className="peer hidden" />
                            <label
                                htmlFor="add-career-toggle"
                                className="flex items-center space-x-3 p-3 w-full text-left rounded-lg transition duration-200 hover:bg-white hover:text-black focus:text-black  focus:bg-white cursor-pointer"
                            >
                                 <MdManageHistory />
                                <span className={`${isSidebarOpen ? 'block' : 'hidden'} `}>
                                    Manage Career
                                </span>
                            </label>

                            {/* Dropdown menu for Add Services, shown when checkbox is checked */}
                            <ul className="ml-8 hidden peer-checked:block">
                                <li>
                                    <NavLink
                                        to="/manage-service"
                                        className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                    >
                                        Manage Career
                                    </NavLink>
                                </li>
                                
                                <li>
                                    <NavLink
                                        to="/manage-service"
                                        className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                    >
                                        Add Career
                                    </NavLink>
                                </li>
                            </ul>
                        </li>



                        <li>
                          
                          <input type="checkbox" id="add-product-toggle" className="peer hidden" />
                          <label
                              htmlFor="add-product-toggle"
                              className="flex items-center space-x-3 p-3 w-full text-left rounded-lg transition duration-200 hover:bg-white hover:text-black focus:text-black  focus:bg-white cursor-pointer"
                          >
                               <IoMdAddCircle />
                              <span className={`${isSidebarOpen ? 'block' : 'hidden'} `}>
                                 Add Product
                              </span>
                          </label>

                          {/* Dropdown menu for Add Services, shown when checkbox is checked */}
                          <ul className="ml-8 hidden peer-checked:block">
                              <li>
                                  <NavLink
                                      to="/manage-service"
                                      className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                  >
                                      Add Product
                                  </NavLink>
                              </li>
                              
                              <li>
                                  <NavLink
                                      to="/manage-service"
                                      className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                  >
                                      Manage Product
                                  </NavLink>
                              </li>
                          </ul>
                      </li>



                      <li>
                          
                          <input type="checkbox" id="add-application-toggle" className="peer hidden" />
                          <label
                              htmlFor="add-application-toggle"
                              className="flex items-center space-x-3 p-3 w-full text-left rounded-lg transition duration-200 hover:bg-white hover:text-black focus:text-black  focus:bg-white cursor-pointer"
                          >
                               <IoMdAddCircle />
                              <span className={`${isSidebarOpen ? 'block' : 'hidden'} `}>
                                 Application
                              </span>
                          </label>

                          
                          <ul className="ml-8 hidden peer-checked:block">
                              <li>
                                  <NavLink
                                      to="/manage-service"
                                      className="p-2 block rounded-lg transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                                  >
                                      All application
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