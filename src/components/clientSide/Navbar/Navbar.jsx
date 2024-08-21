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

  const [upDown, setUpDown] = useState(false);
  const [upDownService, setUpDownService] = useState(false);

  const mainLogo = "https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723544696/UniverseIT/Logo/xvlfi7xrapeoabxyzjji.png";


  return (
    <div className="bg-gradient-to-r from-white fixed top-0 w-full z-50 to-[#aed6f1]">
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
                  <NavLink to={`/products`} className={`active:text-violet-500`}>
                    Products
                  </NavLink>
                 <span onClick={()=>setUpDown(!upDown)}>
                  {
                    upDown ? <IoIosArrowUp className="text-xl"></IoIosArrowUp>
                    :
                    <IoIosArrowDown className="text-xl"></IoIosArrowDown>
                  }
                    
                 </span>
                </div>

                <div className={`  flex shadow-xl ${upDown ? 'block top-[60px] -left-[30%] absolute min-w-[600px] p-3 z-50 bg-white' : 'dropdown-content hidden'} `}>
                   <div>
                      <Link to={`/nimu-hrm`}  className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723465405/1_ggkx2f.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>Nimu HRM</h2>
                                  <small title="Nimu HRM dashboard centralizes HR activities, offering real-time data and empowering data-driven workforce management."  className="text-ellipsis text-[#9F73B1] block">Nimu HRM dashboard... </small>
                                </div>
                            </div>
                        
                      </Link>
                      <Link to={`/nimu-attendencs`} className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467392/3_mkjl0m.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>Nimu Attendance</h2>
                                  <small title="Transform attendance management with Nimu Attendance, enhancing monitoring, analysis, and efficiency for medium to large businesses"  className="text-ellipsis text-[#D189B5] block">Transform attendance... </small>
                                </div>
                            </div>
                        
                      </Link>
                      <Link to={`/nimu-crm`} className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467626/5_ah95wk.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>Nimu CRM</h2>
                                  <small title="Boost customer relationships and sales with Nimu CRM, offering comprehensive data and automation facility"  className="text-ellipsis text-[#7691B6] block">Boost customer... </small>
                                </div>
                            </div>
                        
                      </Link>
                   </div>
                      

                   <div>
                        <Link to={`/nimu-inventory`} className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467020/2_tt0ldj.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>Nimu Inventory </h2>
                                  <small title="Nimu Inventory software streamlines financial transactions, integrates with business systems, and optimizes inventory management for all sizes"  className="text-ellipsis text-[#D66F70] block">Nimu Inventory software... </small>
                                </div>
                            </div>
                        
                      </Link>
                      <Link to={`/nimu-education`} className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467809/6_whzw3l.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>Nimu Education</h2>
                                  <small title="Revolutionize learning with Nimu Education, providing advanced tools for efficient educational management system"  className="text-ellipsis text-[#60A283] block">Revolutionize learning... </small>
                                </div>
                            </div>
                        
                      </Link>
                      <Link to={`/nimu-pos`} className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467979/4_crl0kc.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>Nimu POS</h2>
                                  <small title="Streamline sales and inventory management with Nimu POS, enhancing efficiency and customer experience"  className="text-ellipsis text-[#04B7C7] block"> Streamline sales... </small>
                                </div>
                            </div>
                        
                      </Link>
                   
                     </div>
                   
                </div>
              </div>

              <div className="dropdown-container">
                <div className="flex gap-2 items-center">
                  <NavLink to={`/services`} className={`active:text-violet-500`}>
                    Services
                  </NavLink>
                  <span onClick={()=>setUpDownService(!upDownService)}>
                  {
                    upDownService ? <IoIosArrowUp className="text-xl"></IoIosArrowUp>
                    :
                    <IoIosArrowDown className="text-xl"></IoIosArrowDown>
                  }
                    
                 </span>
                </div>
                <div className={`  flex shadow-xl ${upDownService ? 'block top-[60px] -left-[30%] absolute min-w-[600px] p-3 z-50 bg-white' : 'dropdown-content hidden'} `}>

                <div>
                      <Link to={`/erp-solution`}  className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723465405/1_ggkx2f.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>ERP Solution</h2>
                                  <small title=""  className="text-ellipsis text-[#9F73B1] block">ERP Solution dashboard... </small>
                                </div>
                            </div>
                        
                      </Link>
                      <Link to={`/madical-solution`} className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467392/3_mkjl0m.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>Medical Solution</h2>
                                  <small title=""  className="text-ellipsis `text-[#D189B5]` block">Medical Solution attendance... </small>
                                </div>
                            </div>
                        
                      </Link>
                      <Link to={`/mobile-app-development`} className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467626/5_ah95wk.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>Mobile App Development</h2>
                                  <small   className="text-ellipsis text-[#7691B6] block">App Development customer... </small>
                                </div>
                            </div>
                        
                      </Link>
                </div>
                      

                   <div>
                        <Link to={`/e-commerse-solution`} className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467020/2_tt0ldj.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>E-commerse Solution </h2>
                                  <small title=""  className="text-ellipsis text-[#D66F70] block">E-commerse Solution Inventory ... </small>
                                </div>
                            </div>
                        
                      </Link>
                      <Link to={`/data-analytics`} className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467809/6_whzw3l.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>Data Analytics</h2>
                                  <small title="Revolutionize learning with Nimu Education, providing advanced tools for efficient educational management system"  className="text-ellipsis text-[#60A283] block">Data Analytics learning... </small>
                                </div>
                            </div>
                        
                      </Link>
                      <Link to={`/virtual-reality`} className="hover:bg-[#F2F2F2] p-4 block">
                          <div className="flex gap-3 ">
                              <div>
                                <img className="w-[50px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467979/4_crl0kc.webp" alt="" />
                              </div>
                                <div className="text-base">
                                  <h2>IOT & Virtual Reality</h2>
                                  <small title=""  className="text-ellipsis text-[#04B7C7] block"> Streamline sales... </small>
                                </div>
                            </div>
                        
                      </Link>
                   
                   </div>

                
       
         
             
              
                  
                </div>
              </div>

              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link to={`/contact-us`}>Contact Us</Link>
              </li>
              <li>
                <Link to={`/career`}>Career</Link>
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
              <NavLink to={`/nimu-hrm`} className={`text-[#9F73B1]`}>Nimu HRM</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
            <div>
                 <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467392/3_mkjl0m.webp" alt="" />
               </div>
              <NavLink to={`/nimu-attendence`} className={`text-[#D189B5]`}>Nimu Attendence</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                 <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467626/5_ah95wk.webp" alt="" />
              </div>
              
              <NavLink to={`/nimu-crm`} className={`text-[#7691B6]`}>Nimu CRM</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                 <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467020/2_tt0ldj.webp" alt="" />
              </div>
              <NavLink to={`/nimu-inventory`} className={`text-[#D66F70]`}>Nimu inventory</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                 <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467979/4_crl0kc.webp" alt="" />
              </div>
              <NavLink to={`/nimu-pos`} className={`text-[#04B7C7]`}>Nimu POS</NavLink>
            </li>
            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                 <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467809/6_whzw3l.webp" alt="" />
              </div>
              <NavLink to={`/nimu-education`} className={`text-[#60A283]`}>Nimu Education</NavLink>
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
              <NavLink to={`/madical-solution`}  className={`text-[#D189B5]`}>Medical Solution</NavLink>
            </li>

            <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6] flex gap-3 items-center">
              <div>
                 <img className="w-[40px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723467626/5_ah95wk.webp" alt="" />
              </div>
              <NavLink  to={`/mobile-app-development`}  className={`text-[#7691B6]`}>Mobile App Development</NavLink>
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

          <li className="py-3 px-2 border-b border-b-gray-400 hover:bg-[#F3F4F6]">
            <NavLink to={`/career`}>Carrer</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
