import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";

const ServiceERP = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-20">
      <div className="bg-[#F1F4F8]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-5 lg:py-12 py-8">
            {/* Motion component for fade-up animation */}
            <motion.div
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="flex-1 mt-14 w-full"
            >
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
            </motion.div>

            {/* Image Section */}
            <div className="flex-1">
              <motion.img
                src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725882814/contact_itz5ni.png"
                alt="Medical Solutions"
                className="w-full h-auto"
                initial={{ opacity: 0, x: -50 }} // Start slightly off the screen to the left
                animate={{ opacity: 1, x: 0 }} // Fade in and slide to the correct position
                transition={{ duration: 0.8 }} // Control the duration of the animation
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceERP;
