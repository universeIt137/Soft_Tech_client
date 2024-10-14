import React, { Fragment, useContext, useState } from "react";
import { IoMdAddCircle, IoMdLogOut } from "react-icons/io";
import { MdManageHistory, MdMenuOpen } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiStairsGoal } from "react-icons/gi";
import { GrServices } from "react-icons/gr";
import { SlEnvolopeLetter } from "react-icons/sl";
import { AiOutlineProduct } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { RiTeamLine } from "react-icons/ri";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [openService, setOpenService] = useState(true);
  const [openCareer, setOpenCareer] = useState(true);
  const [openProduct, setOpenProduct] = useState(true);
  const [openApplication, setOpenApplication] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null); // Single state to track active dropdown

  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(res => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/');
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownToggle = (dropdown) => {
    // Toggle the clicked dropdown and close others
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <>
      <div
        className={`bg-universe_secondary h-screen text-white transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-14"
          }`}
      >
        <div className="flex justify-between items-center p-4 gap-4">
          <div className={`text-2xl font-bold ${!isSidebarOpen && "hidden"}`}>
            <div className="bg-white px-4 py-4 rounded-xl">
              <Link to="/">
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
        <nav>
          <ul>

            {/* Product */}
            <li className="">
              <label
                onClick={() => {
                  handleDropdownToggle("product");
                  setOpenProduct(!openProduct);
                }}
                className={`-my-4 flex items-center space-x-3 p-3 w-full text-left border-bg_btn_hover rounded-none transition duration-200 hover:text-white ${isSidebarOpen ? "text-white" : "text-center"
                  }`}
              >
                <AiOutlineProduct size={"40px"} />

                <span className={` ${isSidebarOpen ? "block" : "hidden"}`}>
                  <p className="flex justify-center my-4 -ml-1 items-center gap-4">
                    Product
                    <span className="block ml-[47px] -mt-1">
                      {openProduct ? <FaAngleDown /> : <FaAngleUp />}
                    </span>
                  </p>
                </span>
              </label>

              <ul
                className={`ml-8 ${activeDropdown !== "product" && "hidden"} ${!isSidebarOpen && "text-center"
                  } ${isSidebarOpen ? "block" : "hidden"}`}
              >
                <li>
                  <NavLink
                    to="/dashboard/add-product"
                    className="p-2 block rounded-none transition duration-200 text-white hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Add Product
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-product"
                    className="p-2 block -my-4 border-bg_btn_hover rounded-none transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Manage Product
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Services */}
            <li>
              <label
                onClick={() => {
                  handleDropdownToggle("service");
                  setOpenService(!openService);
                }}
                className={` mt-2 flex items-center space-x-3 p-3 w-full text-left  transition duration-200 hover: rounded-none ${isSidebarOpen ? "text-white" : "text-center"
                  }`}
              >
                <img
                  src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1726402300/Universe%20Soft%20Tech/Dashboard/x155sspatxgeqkwi123r.png"
                  className="w-9"
                  alt="Services"
                />
                <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  <p className="flex justify-center items-center gap-4">
                    Services
                    <span className="ml-10">
                      {openService ? <FaAngleDown /> : <FaAngleUp />}
                    </span>
                  </p>
                </span>
              </label>

              <ul
                className={`ml-8 ${activeDropdown !== "service" && "hidden"} ${!isSidebarOpen && "text-center"
                  } ${isSidebarOpen ? "block" : "hidden"}`}
              >
                <li>
                  <NavLink
                    to="/dashboard/add-service"
                    className="p-2 block -my-2 border-bg_btn_hover rounded-none transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Add Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-service"
                    className="p-2 -my-4 block transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black border-bg_btn_hover rounded-none"
                  >
                    Manage Service
                  </NavLink>
                </li>
              </ul>
            </li>

            {/* Career */}
            <li>
              <label
                onClick={() => {
                  handleDropdownToggle("career");
                  setOpenCareer(!openCareer);
                }}
                className={` -my-4 flex items-center space-x-3 p-3 w-full text-left  border-bg_btn_hover rounded-none transition duration-200  hover:text-white ${isSidebarOpen ? "text-white" : "text-center"
                  }`}
              >
                <img
                  src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1726403537/Universe%20Soft%20Tech/Dashboard/wnjexwdigwbe6psfgbkz.png"
                  className="w-9"
                  alt="Career"
                />
                <span className={` ${isSidebarOpen ? "block" : "hidden"}`}>
                  <p className="flex justify-center items-center gap-4">
                    Career
                    <span className="ml-[53px]">
                      {openCareer ? <FaAngleDown /> : <FaAngleUp />}
                    </span>
                  </p>
                </span>
              </label>

              <ul
                className={`ml-8 ${activeDropdown !== "career" && "hidden"} ${!isSidebarOpen && "text-center"
                  } ${isSidebarOpen ? "block" : "hidden"}`}
              >
                <li>
                  <NavLink
                    to="/dashboard/add-career"
                    className="p-2 block border-bg_btn_hover rounded-none transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Add Career
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/manage-career"
                    className="p-2 block -my-4 border-bg_btn_hover rounded-none transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Manage Career
                  </NavLink>
                </li>
              </ul>
            </li>



            {/* Application */}
            <li>
              <label
                onClick={() => {
                  handleDropdownToggle("application");
                  setOpenApplication(!openApplication);
                }}
                className={`-my-4 flex items-center space-x-3 p-3 w-full transition text-left rounded-none transition duration-200 ${isSidebarOpen ? "text-white" : "text-center"
                  }`}
              >
                <SlEnvolopeLetter size={"35px"} />
                <span className={`${isSidebarOpen ? "block" : "hidden"}`}>
                  <p className="flex justify-center items-center gap-4">
                    Application
                    <span className="ml-[25px]">
                      {openApplication ? <FaAngleDown /> : <FaAngleUp />}
                    </span>
                  </p>
                </span>
              </label>

              <ul
                className={`ml-8 ${activeDropdown !== "application" && "hidden"
                  } ${!isSidebarOpen && "text-center"} ${isSidebarOpen ? "block" : "hidden"
                  }`}
              >
                <li>
                  <NavLink
                    to="/dashboard/application"
                    className="p-2 block border-bg_btn_hover rounded-none transition duration-200 hover:bg-white hover:text-black focus:bg-white focus:text-black"
                  >
                    Manage Applications
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <Link to={"/dashboard/manage-team"}>
                <label

                  className={`-my-2 flex items-center space-x-3 p-3 w-full text-left rounded-none transition duration-200 `}
                >
                  <RiTeamLine size={"35px"} />
                  <span>
                    <p className="flex justify-center items-center gap-4">
                      Manage TeamMember
                    </p>
                  </span>
                </label>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
