import React, { Fragment, useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { MdManageHistory, MdMenuOpen } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { GiStairsGoal } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { SlEnvolopeLetter } from "react-icons/sl";
import { AiOutlineProduct } from "react-icons/ai";


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null); // Single state to track active dropdown

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    // Toggle the clicked dropdown and close others
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <Fragment>
      <div
        className={`bg-dashboard_color h-screen text-white transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-14"
        }`}
      >
        <div className="flex justify-between items-center p-4 gap-4">
          <div className={`text-2xl font-bold ${!isSidebarOpen && "hidden"}`}>
            <div className="bg-white px-4 py-4 rounded-xl">
              <Link to="/dashboard">
                <img
                  src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723544696/UniverseIT/Logo/xvlfi7xrapeoabxyzjji.png"
                  alt="Logo"
                />
              </Link>
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            {isSidebarOpen ? (
              <IoCloseCircleOutline className="text-4xl" />
            ) : (
              <MdMenuOpen className="text-3xl" />
            )}
          </button>
        </div>
        <nav className="">
          <ul>
            <li>
              <label
                onClick={() => handleDropdownToggle("service")}
                className={` mt-2 flex items-center space-x-3 p-3 w-full text-left  transition duration-200 hover:bg-white   rounded-none hover:text-black ${
                  isSidebarOpen ? "text-white" : "text-center"
                }`}
              >
                <GrServices />
                <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  Services
                </span>
              </label>

              <ul
                className={`ml-8 ${activeDropdown !== "service" && "hidden"} ${
                  !isSidebarOpen && "text-center"
                } ${isSidebarOpen ? "block" : "hidden"}`}
              >
                <li>
                  <NavLink
                    to="/dashboard/manage-service"
                    className="p-2 -my-4 block transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black  border-bg_btn_hover rounded-none"
                  >
                    Manage Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/add-service"
                    className="p-2 block -my-2  border-bg_btn_hover rounded-none transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Add Service
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <label
                onClick={() => handleDropdownToggle("career")}
                className={` -my-4 flex items-center space-x-3 p-3 w-full text-left  border-bg_btn_hover rounded-none transition duration-200 hover:bg-white hover:text-black ${
                  isSidebarOpen ? "text-white" : "text-center"
                }`}
              >
                <GiStairsGoal />
                <span className={` ${isSidebarOpen ? "block" : "hidden"}`}>
                  Career
                </span>
              </label>

              <ul
                className={`ml-8 ${activeDropdown !== "career" && "hidden"} ${
                  !isSidebarOpen && "text-center"
                } ${isSidebarOpen ? "block" : "hidden"}`}
              >
                <li>
                  <NavLink
                    to="/dashboard/manage-career"
                    className="p-2 block   border-bg_btn_hover rounded-none transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Manage Career
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/add-career"
                    className="p-2 block -my-4  border-bg_btn_hover rounded-none transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Add Career
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <label
                onClick={() => handleDropdownToggle("product")}
                className={` flex items-center space-x-3 p-3 w-full text-left   border-bg_btn_hover rounded-none transition duration-200 hover:bg-white hover:text-black ${
                  isSidebarOpen ? "text-white" : "text-center"
                }`}
              >
                <AiOutlineProduct />
                <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  Product
                </span>
              </label>

              <ul
                className={`ml-8 ${activeDropdown !== "product" && "hidden"} ${
                  !isSidebarOpen && "text-center"
                } ${isSidebarOpen ? "block" : "hidden"}`}
              >
                <li>
                  <NavLink
                    to="/dashboard/add-product"
                    className="p-2 block -my-2   rounded-none transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Add Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-product"
                    className="p-2 block -my-2   rounded-none transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Manage Product
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <label
                onClick={() => handleDropdownToggle("application")}
                className={` -my-4 flex items-center space-x-3 p-3 w-full text-left   rounded-none transition duration-200 hover:bg-white hover:text-black ${
                  isSidebarOpen ? "text-white" : "text-center"
                }`}
              >
                <SlEnvolopeLetter />
                <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  Application
                </span>
              </label>

              <ul
                className={`ml-8 ${
                  activeDropdown !== "application" && "hidden"
                } ${!isSidebarOpen && "text-center"} ${
                  isSidebarOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <NavLink
                    to="/manage-application"
                    className="p-2 block mt-1    border-bg_btn_hover rounded-none transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    All Application
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Sidebar;
