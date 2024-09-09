import React, { useEffect } from "react";
import { FaCircleNodes, FaLink, FaStreetView, FaWifi } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HrmPage = () => {

  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({ duration: 2000, delay: 100 });
  }, []);
  return (
    <>
      <div className=" max-w-screen-xl mx-auto ">
        <div className="mt-20">
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
      <div data-aos="fade-down" className="bg-universe_secondary  ">
        {/* looking area */}
        <div
          className=" flex flex-col text-center lg:gap-10 lg:items-center lg:justify-between 
        max-w-screen-xl mx-auto px-6 py-16 "
        >
          <div>
            <h2 className="text-4xl text-white ">
              Looking for something <br /> about incredible features
            </h2>
          </div>
          {/* box */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mt-8 mx-auto ">
            <div className="w-[200px] rounded-xl text-xl font-medium   bg-white block">
              <p className="ml-20 mt-6 text-xl font-semibold">
                <FaCircleNodes />
              </p>
              <p className="text-center my-7 ">Customization</p>
            </div>
            <div className="w-[200px] rounded-xl text-xl font-medium   bg-white block ">
              <p className="ml-20 mt-6 text-xl font-semibold ">
                <FaWifi></FaWifi>
              </p>
              <p className="text-center my-7 ">More advance</p>
            </div>
            <div className=" w-[200px] rounded-xl text-xl font-medium   bg-white block  ">
              <p className="ml-20 mt-6 text-xl font-semibold ">
                <FaLink />
              </p>
              <p className="text-center my-7 ">Quick support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto  my-16  ">
        <div className=" px-2 flex flex-col lg:flex-row  mx-auto lg:items-center  lg:justify-between gap-10 ">
          <div data-aos="fade-right" className="flex-1">
            <img
              className="w-full  "
              src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725859578/dashboard-img_r92mlu.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-left" className="flex-1">
            <h1 className="text-text_primari text-4xl font-semibold ">
              Soft Tech HRM <span className="text-text_blue">Dashboard</span>{" "}
            </h1>
            <p className="my-10 text-text_blue font-medium text-lg  ">
              Soft Tech HRM dashboard provides a centralized hub for managing
              all HR activities. With an intuitive interface, it offers a
              real-time snapshot of essential HR data, including employee
              information, attendance, performance metrics, and more. The
              dashboard enables easy navigation, quick access to vital
              information, and empowers HR professionals to make data-driven
              decisions for optimized workforce management.
            </p>
          </div>
        </div>
      </div>

      {/* why choose up */}

      <div className="max-w-screen-xl mx-auto bg-universe_secondary md:py-20 md:px-14  md:my-16 py-10 px-5  ">
        <div   >
          <h1 className="text-center text-4xl font-semibold text-text_primari ">
            Why Choose <span className="text-white" >Us</span> ?
          </h1>
          <p className=" my-6 text-center md:text-center md:my-8 text-white font-medium text-lg " >
            Nimu HRM stands out as the ideal choice for your HRM software needs
            because of its exceptional value proposition. By choosing Nimusoft,
            you gain access to a comprehensive and efficient HRM software
            solution that automates all HR tasks seamlessly. With
            state-of-the-art technology at its core, Nimusoft offers a
            customizable and scalable platform that can be tailored to your
            organization's unique requirements. Furthermore, Nimusoft ensures
            seamless integration with other systems, allowing for a streamlined
            and efficient HR management experience.
          </p>
          <div data-aos = "fade-down" className="flex justify-center gap-10 flex-wrap  " >
            <div>
              <button className=" btn bg-[#8231d3] text-white text-lg hover:text-black  " >Streamlined</button>
            </div>
            <div>
              <button className="block btn btn-success text-white text-lg hover:text-black  " >Efficient</button>
            </div>
            <div>
              <button className="block btn  btn-warning text-white text-lg hover:text-black " >Empowering</button>
            </div>
            <div>
              <button className="block  btn bg-[#22c55e] text-white text-lg hover:text-black  " >Fully Automation</button>
            </div>
          </div>
        </div>
      </div>

      

    </>
  );
};

export default HrmPage;
