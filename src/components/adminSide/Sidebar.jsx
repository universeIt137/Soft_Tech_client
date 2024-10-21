import React, { useState, useContext } from "react";
import { IoMdLogOut } from "react-icons/io";
import { MdAssessment, MdMenuOpen } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineProduct } from "react-icons/ai";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { AuthContext } from "../../authProvider/AuthProvider";
import Swal from "sweetalert2";
import { RiTeamLine } from "react-icons/ri";
import { SlEnvolopeLetter } from "react-icons/sl";

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
      className={`bg-blue-800 h-screen text-gray-200 transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-14"
        }`}
    >
      <div className="flex justify-between items-center p-4">
        <div className={`text-2xl font-bold ${!isSidebarOpen && "hidden"}`}>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723544696/UniverseIT/Logo/xvlfi7xrapeoabxyzjji.png"
              alt="Logo"
              className="bg-white p-4 rounded-xl"
            />
          </Link>
        </div>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {isSidebarOpen ? (
            <IoCloseCircleOutline className="text-4xl" />
          ) : (
            <MdMenuOpen className="text-3xl" />
          )}
        </button>
      </div>

      <nav>
        <ul className="space-y-2">

          <li>
            <Link to={'/dashboard'}>
              <label

                className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
              >
                <MdAssessment size={30} />
                <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Dashboard</span>

              </label>
            </Link>

          </li>

          {/* Product */}
          <li>
            <label
              onClick={() => handleDropdownToggle("product")}
              className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
            >
              <AiOutlineProduct size={30} />
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Products</span>
              {isSidebarOpen && (
                <span className="ml-auto">
                  {activeDropdown === "product" ? <FaAngleUp /> : <FaAngleDown />}
                </span>
              )}
            </label>
            <ul className={`${activeDropdown === "product" ? "block" : "hidden"} ml-8  `}>
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

          {/* Portfolio */}
          <li>
            <label
              onClick={() => handleDropdownToggle("portfolio")}
              className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600"
            >
              <AiOutlineProduct size={30} />
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Portfolio projects</span>
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
              <img src={serviceIcon} alt="Services" className="w-9" />
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Services</span>
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
              <img src={careerIcon} alt="Career" className="w-9" />
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Career</span>
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
              <img src={careerIcon} alt="Blog" className="w-9" />
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Blog</span>
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
              <SlEnvolopeLetter size={30} />
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Application</span>
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
              <RiTeamLine size={30} />
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Team</span>
            </Link>
          </li>

          {/* Logout */}
          <li onClick={handleLogout}>
            <Link to="#" className="flex items-center space-x-3 p-3 cursor-pointer transition duration-200 hover:bg-blue-600">
              <IoMdLogOut size={30} />
              <span className={`${isSidebarOpen ? "block" : "hidden"}`}>Logout</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
