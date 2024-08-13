import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);

  const mainLogo = "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723544696/UniverseIT/Logo/xvlfi7xrapeoabxyzjji.png";


  return (
    <div className="bg-gradient-to-r from-white to-[#aed6f1]">
      <header className="container mx-auto py-4 px-3">
        <nav className="flex gap-10 items-center justify-between md:justify-between lg:justify-start">
          <div className=" ">
            <Link to={"/"}>
              <img
                className="w-[150px]"
                src={mainLogo}
                alt=""
              />
            </Link>
          </div>

          <div className="hidden md:hidden lg:block">
            <ul className="flex gap-8 *:text-xl *:font-medium">
              <li>
                <Link to={`/`} className="text-[#0079b3]">Home</Link>
              </li>

              <div className="dropdown-container">
                <div className="flex gap-2 items-center">
                  <NavLink to={`/country`} className={`active:text-violet-500`}>
                    Products{" "}
                  </NavLink>
                  <IoIosArrowDown className="text-xl"></IoIosArrowDown>
                </div>
                <div className="dropdown-content   shadow-xl p-2 opacity-80">
                  <a href="#">Nimu HRM</a>
                  <a href="#">Nimu Attendence</a>
                  <a href="#">Nimu CRM</a>
                  <a href="#">Nimu inventory</a>
                  <a href="#">Nimu POS</a>
                  <a href="#">Nimu Education</a>
                </div>
              </div>

              <div className="dropdown-container">
                <div className="flex gap-2 items-center">
                  <NavLink to={`/country`} className={`active:text-violet-500`}>
                    Services{" "}
                  </NavLink>
                  <IoIosArrowDown className="text-xl"></IoIosArrowDown>
                </div>
                <div className="dropdown-content   shadow-xl p-2 opacity-80">
                  <a href="#">ERP Solution</a>
                  <a href="#">Medical Solution</a>
                  <a href="#">Mobile App Development</a>
                  <a href="#">E-commerse Solution</a>
                  <a href="#">Data Analytics</a>
                  <a href="#">IOT & Virtual Reality</a>
                </div>
              </div>

              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>

          <div
            onClick={() => setToggleMenu(!toggleMenu)}
            className="cursor-pointer block md:block lg:hidden text-3xl"
          >
            {toggleMenu ? <RxCross2></RxCross2> : <IoMenuSharp></IoMenuSharp>}
          </div>
        </nav>

        <div></div>
      </header>

      {/* sidebar */}
      <div
        className={`mt-12   h-auto absolute z-50 right-0   overflow-auto touch-auto hover:will-change-scroll ${toggleMenu ? "" : " top-0 hidden "
          }  lg:w-80 md:w-80 w-60 bg-white p-2  top-0`}
      >
        <ul>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>Home</NavLink>
          </li>

          <p className=" border-b flex items-center border-b-gray-400 text-base">
            <div className="hover:bg-[#F3F4F6] w-4/5 py-3 px-2 h-full">
              <NavLink to={`/country`}>Products </NavLink>
            </div>
            <div className=" hover:bg-[#F3F4F6] p-4 flex justify-center  w-1/5 text-xs     px-2 h-auto">
              {open ? (
                <IoIosArrowUp onClick={() => setOpen(!open)}></IoIosArrowUp>
              ) : (
                <IoIosArrowDown onClick={() => setOpen(!open)}></IoIosArrowDown>
              )}
            </div>
          </p>

          <div
            className={`${open ? "block" : "hidden"
              } py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]`}
          >



            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>Nimu HRM</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>Nimu Attendence</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>Nimu CRM</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>Nimu inventory</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>Nimu POS</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>Nimu Education</NavLink>
            </li>
          </div>

          <li
            className="py-3 px-2 border-b flex items-center  border-b-gray-400 hover:bg-[#F3F4F6]"
            onClick={() => setOtherOpen(!otherOpen)}
          >
            <div className="flex items-center text-xl gap-3">
              <NavLink>Servics</NavLink>
              {otherOpen ? (
                <IoIosArrowUp></IoIosArrowUp>
              ) : (
                <IoIosArrowDown></IoIosArrowDown>
              )}
            </div>
          </li>

          <div className={`${otherOpen ? "block" : "hidden"}`}>


            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>ERP Solution</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>Medical Solution</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>Mobile App Development</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>E-commerse Solution</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>Data Analytics</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
              <NavLink>IOT & Virtual Reality</NavLink>
            </li>
          </div>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>About US</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>Contact US</NavLink>
          </li>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink>Carrer</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
