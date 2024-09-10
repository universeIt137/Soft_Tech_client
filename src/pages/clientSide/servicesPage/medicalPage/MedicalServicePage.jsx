import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const MedicalServicePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration:1000,delay:300
        })
      }, []);
  return (
    <>
      <div className="mt-20">
      <div className="bg-[#F1F4F8]">
        <div className="max-w-screen-xl mx-auto">
          <div  className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:py-12 py-8">
            {/* Motion component for fade-up animation */}
            <div data-aos="fade-up" className="flex-1 lg:mt-14 w-full my-aos-element">
              <h1 className="text-center text-xl lg:text-4xl font-semibold">
                Enhance Medical Work <br /> Activity with our medical <br />{" "}
                solutions.
              </h1>
              <p className="my-8 md:text-xl text-center font-thin">
                Welcome to Nimusoft Medical Solution, where we pioneer
                transformative solutions for the healthcare industry. Our
                cutting-edge software empowers medical professionals by
                streamlining operations, enhancing patient care, and
                facilitating seamless communication.
              </p>
              <NavLink to={""}>
                <button className="btn bg-[#199346] block mx-auto text-md text-white px-8">
                  Contact
                </button>
              </NavLink>
            </div>

            {/* Image Section */}
            <div data-aos = "fade-left" className="flex-1 data-aos-my-element ">
              <img
                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725882814/contact_itz5ni.png"
                alt="Medical Solutions"
                className="w-full h-auto"
                
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default MedicalServicePage
