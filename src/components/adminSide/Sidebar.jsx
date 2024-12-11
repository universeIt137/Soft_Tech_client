import React, { useState, useContext } from "react";
import { IoMdLogOut } from "react-icons/io";
import { MdAssessment, MdMenuOpen, MdModelTraining, MdPayments, MdRoomPreferences } from "react-icons/md";
import { IoCloseCircleOutline, IoVideocam } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiFillFileImage, AiOutlineProduct } from "react-icons/ai";
import { FaAngleDown, FaAngleUp, FaBloggerB, FaBriefcase, FaServicestack } from "react-icons/fa";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { RiLogoutCircleFill, RiTeamLine } from "react-icons/ri";
import { SlEnvolopeLetter } from "react-icons/sl";
import { SiPolymerproject } from "react-icons/si";
import { FaBlogger } from "react-icons/fa6";
import { BiLogoMicrosoftTeams } from "react-icons/bi";
import { BsClipboard2DataFill, BsInfoCircleFill } from "react-icons/bs";

const serviceIcon = "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1726402300/Universe%20Soft%20Tech/Dashboard/x155sspatxgeqkwi123r.png";
const careerIcon = "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1726403537/Universe%20Soft%20Tech/Dashboard/wnjexwdigwbe6psfgbkz.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logout Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((err) => console.log(err.message));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (!isSidebarOpen) {
      setActiveDropdown(null); // Close all dropdowns when sidebar shrinks
    }
  };

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div
      className={`bg-blue-800  text-gray-200 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-12"
        }`}
    >
      <div className="flex justify-between items-center p-4">
        <div className={`text-xl font-bold ${!isSidebarOpen && "hidden"}`}>
          <Link to="/">
            <div>
              <div className="avatar">
                <div className="w-12 border border-white border-2 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <p className="text-[16px]">ID: 0001</p>
            </div>
          </Link>
        </div>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {isSidebarOpen ? (
            <IoCloseCircleOutline className="text-4xl" />
          ) : (
            <MdMenuOpen size={20} />
          )}
        </button>
      </div>

      <nav>
        <ul className="text-[12px]">

          <li>
            <Link to={'/dashboard'}>
              <label

                className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
              >
                <MdAssessment size={20} />
                <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Dashboard</span>

              </label>
            </Link>

          </li>

          {/* Product */}
          <li>
            <label
              onClick={() => handleDropdownToggle("product")}
              className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
            >
              <AiOutlineProduct size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Products</span>
              {isSidebarOpen && (
                <span className="ml-auto">
                  {activeDropdown === "product" ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              )}
            </label>
            <ul className={`${activeDropdown === "product" ? "block" : "hidden"} ml-8  `}>
              <li>

              </li>
              <li>
                <NavLink
                  to="/dashboard/add-product"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Add Product
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-product"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Manage Product
                </NavLink>
              </li>
            </ul>
          </li>

          {/* category */}
          <li>
            <label
              onClick={() => handleDropdownToggle("category")}
              className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
            >
              <SiPolymerproject size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Category</span>
              {isSidebarOpen && (
                <span className="ml-auto">
                  {activeDropdown === "category" ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              )}
            </label>
            <ul className={`${activeDropdown === "category" ? "block" : "hidden"} ml-8  `}>
              <li>
                <NavLink
                  to="/dashboard/create/category"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Add Category
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-category"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Manage Category
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Portfolio */}
          <li>
            <label
              onClick={() => handleDropdownToggle("portfolio")}
              className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
            >
              <SiPolymerproject size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Portfolio projects</span>
              {isSidebarOpen && (
                <span className="ml-auto">
                  {activeDropdown === "portfolio" ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              )}
            </label>
            <ul className={`${activeDropdown === "portfolio" ? "block" : "hidden"} ml-8  `}>
              <li>
                <NavLink
                  to="/dashboard/create-portfolio"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Add Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-portfolio"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Manage Portfolio
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Services */}
          <li>
            <label
              onClick={() => handleDropdownToggle("service")}
              className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
            >
              <FaServicestack size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Services</span>
              {isSidebarOpen && (
                <span className="ml-auto">
                  {activeDropdown === "service" ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              )}
            </label>
            <ul className={`${activeDropdown === "service" ? "block" : "hidden"} ml-8  `}>
              <li>
                <NavLink
                  to="/dashboard/add-service"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Add Service
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-service"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Manage Service
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Career */}
          <li>
            <label
              onClick={() => handleDropdownToggle("career")}
              className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
            >
              <FaBriefcase size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Career</span>
              {isSidebarOpen && (
                <span className="ml-auto">
                  {activeDropdown === "career" ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              )}
            </label>
            <ul className={`${activeDropdown === "career" ? "block" : "hidden"} ml-8  `}>
              <li>
                <NavLink
                  to="/dashboard/add-career"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Add Career
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-career"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Manage Career
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Blog */}
          <li>
            <label
              onClick={() => handleDropdownToggle("blog")}
              className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
            >
              <FaBloggerB size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Blog</span>
              {isSidebarOpen && (
                <span className="ml-auto">
                  {activeDropdown === "blog" ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              )}
            </label>
            <ul className={`${activeDropdown === "blog" ? "block" : "hidden"} ml-8  `}>
              <li>
                <NavLink
                  to="/dashboard/add-blog"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Add Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manage-blog"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Manage Blog
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Application */}
          <li>
            <label
              onClick={() => handleDropdownToggle("application")}
              className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
            >

              <AiFillFileImage size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Application</span>
              {isSidebarOpen && (
                <span className="ml-auto">
                  {activeDropdown === "application" ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              )}
            </label>
            <ul className={`${activeDropdown === "application" ? "block" : "hidden"} ml-8  `}>
              <li>
                <NavLink
                  to="/dashboard/application"
                  className="p-2 block transition duration-200 hover:bg-white hover:text-black"
                >
                  Manage Applications
                </NavLink>
              </li>
            </ul>
          </li>

          {/* Team Management */}
          <li>
            <Link to="/dashboard/manage-team" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
              <BiLogoMicrosoftTeams size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Team</span>
            </Link>
          </li>

           {/* Rep information */}
           <li>
            <Link to="/dashboard/info" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
              <BsInfoCircleFill size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Information</span>
            </Link>
          </li>

          {/* Rep client list */}
          <li>
            <Link to="/dashboard/client" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
              <BsClipboard2DataFill size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Your Client List</span>
            </Link>
          </li>


          
          {/* Rep payment list */}
          <li>
            <Link to="/dashboard/payment" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
              <MdPayments size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Payment History</span>
            </Link>
          </li>


          {/* Rep Product Video */}
          <li>
            <Link to="/dashboard/product-video" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
              <IoVideocam size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Product Video</span>
            </Link>
          </li>

           {/* Rep Training Session */}
           <li>
            <Link to="/dashboard/training" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
              <MdModelTraining size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Training Session</span>
            </Link>
          </li>


              {/* Rep refers  */}
           <li>
            <Link to="/dashboard/refers" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
              <MdRoomPreferences size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Refers</span>
            </Link>
          </li>




          {/* Logout */}
          <li onClick={handleLogout}>
            <Link to="#" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
              <RiLogoutCircleFill size={20} />
              <span className={`${isSidebarOpen ? "block" : "hidden"} font-semibold`}>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
