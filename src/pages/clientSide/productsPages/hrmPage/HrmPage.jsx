import React, { useEffect } from "react";
import { FaCircleNodes, FaLink, FaStreetView, FaWifi } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HrmPage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, delay: 500 });
  }, []);
  return (
    <>
      <div className=" max-w-screen-xl mx-auto ">
        <div className="my-20">
          <div data-aos="fade-up" data-aos-anchor-placement="center-center">
            <h1
              className=" py-3 
        text-center text-text_primari md:text-3xl 
        lg:text-5xl font-bold md:mt-24 md:mb-6 lg:mt-28
        lg:mb-8"
            >
              Soft Tech HRM Solution
            </h1>
            <p
              className="text-[#0b0f19] my-2 md:text-xl md:font-bold 
        lg:font-semibold text-center lg:text-2xl "
            >
              Time consuming HR operations will be done within seconds with just
              1 Click!
            </p>
            <button className="block mx-auto mt-10  btn btn-outline btn-primary ">
              <NavLink
                className="text-text_primary hover:text-white text-[17px] font-medium flex items-center gap-1 "
                to=""
              >
                <i>
                  <FaStreetView />
                </i>
                Request Demo
              </NavLink>
            </button>
          </div>
          <div>
            <img
              className="mt-16"
              src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725792166/hrm-img-1_t8wnrx.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="bg-[#4c40ed] " >
        {/* looking area */}
        <div className="max-w-screen-xl border border-red-500 mx-auto px-6 py-16 flex items-center items-center " >
          <div>
            <h2 className="text-5xl text-white " >Looking for something <br /> about incredible features</h2>
          </div>
          {/* box */}
          <div className="flex items-center justify-between gap-10 " >
            <div className="w-1/3 bg-white p-12 " >
                <i>
                <FaCircleNodes />
                </i>
                <p>Customization</p>
            </div>
            <div className="w-1/3 bg-white p-12 " >
                <i>
                <FaWifi />
                </i>
                <p>More advance</p>
            </div>
            <div className="w-1/3 bg-white p-12 " >
                <i>
                <FaLink />
                </i>
                <p>
                    Quick support
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HrmPage;
