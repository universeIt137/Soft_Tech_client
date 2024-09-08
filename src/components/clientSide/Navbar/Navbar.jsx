import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [otherOpen, setOtherOpen] = useState(false);
  const [touch, setTouch] = useState(false);

  const [upDown, setUpDown] = useState(false);
  const [upDownService, setUpDownService] = useState(false);


  const [isDropdownVisibleProduct, setIsDropdownVisibleProduct] = useState(false);

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  let hideTimeoutProduct;
  let hideTimeout;

  const handleMouseEnterProduct = () => {
    clearTimeout(hideTimeoutProduct);
    setIsDropdownVisibleProduct(true);
  };
  const handleMouseLeaveProduct = () => {
    hideTimeoutProduct = setTimeout(() => {
      setIsDropdownVisibleProduct(false);
    }, 300); // 300ms delay before hiding the dropdown
  };

  //get in touch
  const [isDropdownVisibleGetInTouch, setIsDropdownVisibleGetInTouch] = useState(false);
  let hideTimeoutGetInTouch;

  const handleMouseEnterGetInTouch = () => {
    clearTimeout(hideTimeoutGetInTouch);
    setIsDropdownVisibleGetInTouch(true);
  };

  const handleMouseLeaveGetInTouch = () => {
    hideTimeoutGetInTouch = setTimeout(() => {
      setIsDropdownVisibleGetInTouch(false);
    }, 300); // Delay before hiding the dropdown
  };




  const handleMouseEnter = () => {
    clearTimeout(hideTimeout);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setIsDropdownVisible(false);
    }, 300); // 300ms delay before hiding the dropdown
  };

  const mainLogo = "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723544696/UniverseIT/Logo/xvlfi7xrapeoabxyzjji.png";

  useEffect(() => {
    window.history.replaceState(null, null, window.location.href);
    window.scrollTo(0, 0);
  }, []);

  window.scrollTo(0, 0)


  return (
    <div className="bg-gray-50 fixed top-0 w-full z-50 ">
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
                <NavLink to={`/`} className="active:text-text_primari">Home</NavLink>
              </li>

              <div onMouseEnter={handleMouseEnterProduct}
                onMouseLeave={handleMouseLeaveProduct} className="dropdown-container">
                <div className="flex gap-2 items-center">
                  <NavLink className={`active:text-text_primari `}>
                    Products
                  </NavLink>
                  <span onClick={() => setUpDown(!upDown)}>
                    {
                      upDown ? <IoIosArrowUp className="text-xl"></IoIosArrowUp>
                        :
                        <IoIosArrowDown className="text-xl"></IoIosArrowDown>
                    }

                  </span>
                </div>

                {
                  isDropdownVisibleProduct && <div className={`  flex shadow-xl   top-[60px] -left-[30%] absolute min-w-[600px] p-3 z-50 bg-white   `} >
                    <div>
                      <NavLink to={`/product-hrm`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723465405/1_ggkx2f.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>SoftTech HRM</h2>
                            <small title="Nimu HRM dashboard centralizes HR activities, offering real-time data and empowering data-driven workforce management." className="text-ellipsis text-[#9F73B1] block">SoftTech HRM dashboard... </small>
                          </div>
                        </div>
                      </NavLink>


                      <NavLink to={`/nimu-attendencs`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467392/3_mkjl0m.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>SoftTech Attendance</h2>
                            <small title="Transform attendance management with Nimu Attendance, enhancing monitoring, analysis, and efficiency for medium to large businesses" className="text-ellipsis text-[#D189B5] block">Transform attendance... </small>
                          </div>
                        </div>

                      </NavLink>

                      <NavLink to={`/nimu-crm`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467626/5_ah95wk.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>SoftTech CRM</h2>
                            <small title="Boost customer relationships and sales with Nimu CRM, offering comprehensive data and automation facility" className="text-ellipsis text-[#7691B6] block">Boost customer... </small>
                          </div>
                        </div>

                      </NavLink>
                    </div>


                    <div>
                      <NavLink to={`/nimu-inventory`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467020/2_tt0ldj.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>SoftTech Inventory </h2>
                            <small title="Nimu Inventory software streamlines financial transactions, integrates with business systems, and optimizes inventory management for all sizes" className="text-ellipsis text-[#D66F70] block">SoftTech Inventory software... </small>
                          </div>
                        </div>
                      </NavLink>


                      <NavLink to={`/nimu-education`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467809/6_whzw3l.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>SoftTech Education</h2>
                            <small title="Revolutionize learning with Nimu Education, providing advanced tools for efficient educational management system" className="text-ellipsis text-[#60A283] block">Revolutionize learning... </small>
                          </div>
                        </div>

                      </NavLink>


                      <NavLink to={`/nimu-pos`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467979/4_crl0kc.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>SoftTech POS</h2>
                            <small title="Streamline sales and inventory management with Nimu POS, enhancing efficiency and customer experience" className="text-ellipsis text-[#04B7C7] block"> Streamline sales... </small>
                          </div>
                        </div>

                      </NavLink>

                    </div>

                  </div>
                }
              </div>

              <div onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave} className="dropdown-container">
                <div className="flex gap-2 items-center">
                  <NavLink to={`/services`} className={`active:text-violet-500`}>
                    Services
                  </NavLink>
                  <span onClick={() => setUpDownService(!upDownService)}>
                    {
                      upDownService ? <IoIosArrowUp className="text-xl"></IoIosArrowUp>
                        :
                        <IoIosArrowDown className="text-xl"></IoIosArrowDown>
                    }

                  </span>
                </div>
                {
                  isDropdownVisible && <div className={`  flex shadow-xl  top-[60px] -left-[30%] absolute min-w-[600px] p-3 z-50 bg-white`}>

                    <div>
                      <NavLink to={`/erp-solution`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723465405/1_ggkx2f.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>ERP Solution</h2>
                            <small title="" className="text-ellipsis text-[#9F73B1] block">ERP Solution dashboard... </small>
                          </div>
                        </div>

                      </NavLink>
                      <NavLink to={`/madical-solution`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467392/3_mkjl0m.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>Medical Solution</h2>
                            <small title="" className="text-ellipsis `text-[#D189B5]` block">Medical Solution attendance... </small>
                          </div>
                        </div>

                      </NavLink>
                      <NavLink to={`/mobile-app-development`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467626/5_ah95wk.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>Mobile App Development</h2>
                            <small className="text-ellipsis text-[#7691B6] block">App Development customer... </small>
                          </div>
                        </div>

                      </NavLink>
                    </div>


                    <div>
                      <NavLink to={`/e-commerse-solution`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467020/2_tt0ldj.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>E-commerse Solution </h2>
                            <small title="" className="text-ellipsis text-[#D66F70] block">E-commerse Solution Inventory ... </small>
                          </div>
                        </div>

                      </NavLink>
                      <NavLink to={`/data-analytics`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467809/6_whzw3l.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>Data Analytics</h2>
                            <small title="Revolutionize learning with Nimu Education, providing advanced tools for efficient educational management system" className="text-ellipsis text-[#60A283] block">Data Analytics learning... </small>
                          </div>
                        </div>

                      </NavLink>
                      <NavLink to={`/virtual-reality`} className="hover:bg-[#F2F2F2] p-4 block">
                        <div className="flex gap-3 ">
                          <div>
                            <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467979/4_crl0kc.webp" alt="" />
                          </div>
                          <div className="text-base">
                            <h2>IOT & Virtual Reality</h2>
                            <small title="" className="text-ellipsis text-[#04B7C7] block"> Streamline sales... </small>
                          </div>
                        </div>

                      </NavLink>

                    </div>
                  </div>
                }

              </div>



              <li>
                <NavLink to={`/portfolio`}>Portfolio</NavLink>
              </li>




              <div
                onMouseEnter={handleMouseEnterGetInTouch}
                onMouseLeave={handleMouseLeaveGetInTouch}
                className="dropdown-container relative"
              >
                <div className="flex gap-2 items-center">
                  <NavLink className={`active:text-violet-500`}>
                    Get in Touch
                  </NavLink>
                  <span onClick={() => setUpDownService(!upDownService)}>
                    {upDownService ? (
                      <IoIosArrowUp className="text-xl" />
                    ) : (
                      <IoIosArrowDown className="text-xl" />
                    )}
                  </span>
                </div>

                {isDropdownVisibleGetInTouch && (
                  <div className="shadow-xl top-[60px] left-0 absolute min-w-[400px] p-3 z-50 bg-white">
                    {/* Dropdown content for Get in Touch */}
                    <NavLink to="/about-us" className="hover:bg-[#F2F2F2] p-4 block">
                      About Us
                    </NavLink>
                    <NavLink to="/contact-us" className="hover:bg-[#F2F2F2] p-4 block">
                      Contact Us
                    </NavLink>
                    <NavLink to="/career" className="hover:bg-[#F2F2F2] p-4 block">
                      Career
                    </NavLink>
                    <NavLink to="/career" className="hover:bg-[#F2F2F2] p-4 block">
                      Company Profile
                    </NavLink>
                    {/* Add more NavLinks for Get in Touch options... */}
                  </div>
                )}
              </div>






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

      {/* sidebar mobile view */}
      <div
        className={`mt-12   h-auto absolute z-50 right-0   overflow-auto touch-auto hover:will-change-scroll ${toggleMenu ? "" : " top-0 hidden "
          }  lg:w-80 md:w-80 w-60 bg-white p-2  top-0`}
      >
        <ul>
          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/`}>Home</NavLink>
          </li>

          <div className=" border-b flex items-center border-b-gray-400 text-base">
            <div className="hover:bg-[#F3F4F6] w-4/5 py-3 px-2 h-full">
              <NavLink to={`/products`}>Products </NavLink>
            </div>
            <div className=" hover:bg-[#F3F4F6] p-4 flex justify-center  w-1/5 text-xs     px-2 h-auto">
              {open ? (
                <IoIosArrowUp onClick={() => setOpen(!open)}></IoIosArrowUp>
              ) : (
                <IoIosArrowDown onClick={() => setOpen(!open)}></IoIosArrowDown>
              )}
            </div>
          </div>

          <div
            className={`${open ? "block" : "hidden"
              } py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]`}
          >



            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex items-center gap-3">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723465405/1_ggkx2f.webp" alt="" />
              </div>
              <NavLink to={`/nimu-hrm`} className={`text-[#9F73B1]`}>SoftTech HRM</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467392/3_mkjl0m.webp" alt="" />
              </div>
              <NavLink to={`/nimu-attendence`} className={`text-[#D189B5]`}>SoftTech Attendence</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467626/5_ah95wk.webp" alt="" />
              </div>

              <NavLink to={`/nimu-crm`} className={`text-[#7691B6]`}>SoftTech CRM</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467020/2_tt0ldj.webp" alt="" />
              </div>
              <NavLink to={`/nimu-inventory`} className={`text-[#D66F70]`}>SoftTech inventory</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467979/4_crl0kc.webp" alt="" />
              </div>
              <NavLink to={`/nimu-pos`} className={`text-[#04B7C7]`}>SoftTech POS</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467809/6_whzw3l.webp" alt="" />
              </div>
              <NavLink to={`/nimu-education`} className={`text-[#60A283]`}>SoftTech Education</NavLink>
            </li>
          </div>

          <li
            className="py-3 px-2 border-b flex items-center  border-b-gray-400 hover:bg-[#F3F4F6]"
            onClick={() => setOtherOpen(!otherOpen)}
          >
            <div className="flex items-center text-[18px] gap-3">
              <NavLink to={`/services`}>Services</NavLink>
              {otherOpen ? (
                <IoIosArrowUp></IoIosArrowUp>
              ) : (
                <IoIosArrowDown></IoIosArrowDown>
              )}
            </div>
          </li>
          <div className={`${otherOpen ? "block" : "hidden"}`}>


            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723465405/1_ggkx2f.webp" alt="" />
              </div>
              <NavLink to={`/erp-solution`} className={`text-[#9F73B1]`}>ERP Solution</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467392/3_mkjl0m.webp" alt="" />
              </div>
              <NavLink to={`/madical-solution`} className={`text-[#D189B5]`}>Medical Solution</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467626/5_ah95wk.webp" alt="" />
              </div>
              <NavLink to={`/mobile-app-development`} className={`text-[#7691B6]`}>Mobile App Development</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467020/2_tt0ldj.webp" alt="" />
              </div>
              <NavLink to={`/e-commerse-solution`} className={`text-[#D66F70]`}>E-commerse Solution</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467809/6_whzw3l.webp" alt="" />
              </div>
              <NavLink to={`/data-analytics`} className={`text-[#60A283]`}>Data Analytics</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467979/4_crl0kc.webp" alt="" />
              </div>
              <NavLink to={`/virtual-reality`} className={`text-[#04B7C7]`}>IOT & Virtual Reality</NavLink>
            </li>
          </div>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/about-us`}>About US</NavLink>
          </li>
          

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/contact-us`}>Contact US</NavLink>
          </li>


          <li
            className="py-3 px-2 border-b flex items-center  border-b-gray-400 hover:bg-[#F3F4F6]"
            onClick={() => setTouch(!touch)}
          >
            <div className="flex items-center text-[18px] gap-3">
              <NavLink to={`/services`}>Get In Touch</NavLink>
              {otherOpen ? (
                <IoIosArrowUp></IoIosArrowUp>
              ) : (
                <IoIosArrowDown></IoIosArrowDown>
              )}
            </div>
          </li>
          <div className={`${touch ? "block" : "hidden"}`}>
            <NavLink to="/about-us" className="hover:bg-[#F2F2F2] p-4 block">
              About Us
            </NavLink>
            <NavLink to="/contact-us" className="hover:bg-[#F2F2F2] p-4 block">
              Contact Us
            </NavLink>
            <NavLink to="/career" className="hover:bg-[#F2F2F2] p-4 block">
              Carrer
            </NavLink>
          </div>

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/career`}>Carrer</NavLink>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
