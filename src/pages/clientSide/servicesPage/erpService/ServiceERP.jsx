import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineSolution } from "react-icons/ai";
import { BiSolidCustomize } from "react-icons/bi";
import { FaBalanceScale } from "react-icons/fa";
import { SiExpertsexchange } from "react-icons/si";
const ServiceERP = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
    });
  });
  return (
    <>
      <div className="mt-16 md:mt-20 lg:mt-20 ">
        <div className="max-w-screen-xl mx-auto ">
          <div>
            <div data-aos="fade-down" className="py-10  my-aos-element ">
              <h1 className="text-center text-2xl md:text-5xl font-semibold ">
                Develop Your Business{" "}
                <span className="text-text_blue">ERP</span>{" "}
              </h1>
              <h2 className="text-center mt-4 md:mt-6 md:text-3xl font-medium text-[#565973] ">
                Streamline Your Business Operations with our Comprehensive ERP
                Solutions.
              </h2>
            </div>
          </div>

          <div>
            <div>
              <h1 className=" text-2xl mb-6 lg:text-5xl md:mt-12 md:mb-12 font-semibold  ">
                For Your ERP Solution Needs
              </h1>
            </div>
            <div className=" my-aos-element gap-x-4 flex flex-col gap-y-6 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4  ">
              {/* card 1 */}
              <div data-aos="flip-left" className="card bg-base-100   shadow ">
                <figure className="px-10 pt-10 ">
                  <i className="text-7xl bg-red-200  p-6 text-text_blue rounded-full ">
                    <AiOutlineSolution />
                  </i>
                </figure>
                <div className="card-body ">
                  <h2 className="card-title">Comprehensive Solutions</h2>
                  <p>
                    We offer a comprehensive suite of ERP Solutions that are
                    tailored to meet the unique needs of businesses across
                    industries, automate processes.
                  </p>
                </div>
              </div>

              <div data-aos="flip-left" className="card bg-base-500   shadow ">
                <figure className="px-10 pt-10 ">
                  <i className="text-7xl bg-red-200  p-6 text-text_blue rounded-full ">
                    <BiSolidCustomize />
                  </i>
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-start ">
                    Customized Approach
                  </h2>
                  <p className="text-start ">
                    We work closely with our clients to understand their
                    business needs and goals, and develop customized ERP
                    Solutions that meet their specific requirements.
                  </p>
                </div>
              </div>

              <div data-aos="flip-left" className="card bg-base-100  shadow ">
                <figure className="px-10 pt-10 ">
                  <i className="text-7xl bg-red-200  p-6 text-text_blue rounded-full ">
                    <FaBalanceScale />
                  </i>
                </figure>
                <div className="card-body text-start ">
                  <h2 className="card-title">Scalability</h2>
                  <p>
                    Our ERP Solutions are designed to be highly scalable,
                    enabling businesses to grow and evolve over time, and adapt
                    to changing market conditions.
                  </p>
                </div>
              </div>

              <div data-aos="flip-left" className="card bg-base-100  shadow ">
                <figure className="px-10 pt-10 ">
                  <i className="text-7xl bg-red-200  p-6 text-text_blue rounded-full ">
                    <SiExpertsexchange />
                  </i>
                </figure>
                <div className="card-body lg:text-start ">
                  <h2 className="card-title">Modern & Experienced</h2>
                  <p>
                    Our team of ERP experts has years of experience in designing
                    and implementing ERP Solutions, ensuring that our clients
                    receive the highest quality service.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h1 className=" py-6 text-center text-2xl mb-6 lg:text-5xl md:mt-12 md:mb-12 font-semibold  ">
                Our Benefits
              </h1>
            </div>
            <div className=" my-aos-element gap-x-4 flex flex-col gap-y-6 md:grid md:grid-cols-2 lg:grid lg:grid-cols-2  ">
              {/* card 1 */}
              <div data-aos="zoom-in-down" className="card bg-base-100   shadow ">
                <figure className="px-10 pt-10 ">
                  <i className="text-7xl bg-red-200  p-6 text-text_blue rounded-full ">
                    <AiOutlineSolution />
                  </i>
                </figure>
                <div className="card-body text-center items-center ">
                  <h2 className="card-title">Streamlined Operations</h2>
                  <p>
                    Our ERP Solution can help businesses streamline their
                    operations and reduce manual processes, increasing overall
                    efficiency and productivity.
                  </p>
                </div>
              </div>

              <div data-aos="zoom-in-down" className="card bg-base-500   shadow ">
                <figure className="px-10 pt-10 ">
                  <i className="text-7xl text-red-200  p-6 bg-text_blue rounded-full ">
                    <BiSolidCustomize />
                  </i>
                </figure>
                <div className="card-body text-center items-center ">
                  <h2 className="card-title  ">
                    Better Data Management
                  </h2>
                  <p className="">
                    Our ERP Solution can help businesses better manage their
                    data, ensuring that they have access to accurate and
                    up-to-date information for informed decision-making.
                  </p>
                </div>
              </div>

              <div data-aos="zoom-in-down" className="card bg-base-100  shadow ">
                <figure className="px-10 pt-10 ">
                  <i className="text-7xl text-red-200  p-6 bg-text_blue rounded-full ">
                    <FaBalanceScale />
                  </i>
                </figure>
                <div className="card-body text-center items-center">
                  <h2 className="card-title">Scalability and Flexibility</h2>
                  <p>
                    Our ERP Solution is designed to be scalable and flexible,
                    allowing businesses to adapt to changing business needs and
                    growth
                  </p>
                </div>
              </div>

              <div data-aos="zoom-in-down" className="card bg-base-100  shadow ">
                <figure className="px-10 pt-10 ">
                  <i className="text-7xl text-red-200  p-6 bg-text_blue rounded-full ">
                    <SiExpertsexchange />
                  </i>
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="card-title">Improved Collaboration</h2>
                  <p>
                    Our ERP Solution can help improve collaboration across
                    departments and teams, leading to better communication and
                    more effective decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceERP;
