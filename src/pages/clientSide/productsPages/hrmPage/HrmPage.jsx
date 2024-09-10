import React from "react";
import { FaCircleNodes, FaLink, FaStreetView, FaWifi } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";


const HrmPage = () => {
  window.scrollTo(0, 0);

  const fadeUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  const transition = {
    duration: 1.5,
    ease: "easeInOut",
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto ">
        <motion.div
          className="mt-20"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={transition}
        >
          <h1
            className="py-3 text-center text-text_primari md:text-3xl lg:text-5xl font-bold md:mt-24 md:mb-6 lg:mt-28 lg:mb-8"
          >
            Soft Tech HRM Solution
          </h1>
          <p className="text-[#0b0f19] my-2 md:text-xl md:font-bold lg:font-semibold text-center lg:text-2xl">
            Time consuming HR operations will be done within seconds with just 1 Click!
          </p>
          <motion.button className="block mx-auto mt-10 btn btn-outline btn-primary">
            <NavLink
              className="text-text_primary hover:text-white text-[17px] font-medium flex items-center gap-1"
              to=""
            >
              <i>
                <FaStreetView />
              </i>
              Request Demo
            </NavLink>
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-16"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={transition}
        >
          <img
            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725792166/hrm-img-1_t8wnrx.png"
            alt=""
          />
        </motion.div>
      </div>

      <motion.div
        className="bg-universe_secondary"
        initial="hidden"
        whileInView="visible"
        variants={fadeDown}
        transition={transition}
        viewport={{ once: true }}
      >
        <div className="flex my-aos-element flex-col text-center lg:gap-10 lg:items-center lg:justify-between max-w-screen-xl mx-auto px-6 py-16">
          <h2 className="text-4xl text-white">
            Looking for something <br /> about incredible features
          </h2>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 mt-8 mx-auto">
            <motion.div
              className="w-[200px] rounded-xl text-xl font-medium bg-white block"
              whileHover={{ scale: 1.1 }}
            >
              <p className="ml-20 mt-6 text-xl font-semibold">
                <FaCircleNodes />
              </p>
              <p className="text-center my-7">Customization</p>
            </motion.div>
            <motion.div
              className="w-[200px] rounded-xl text-xl font-medium bg-white block"
              whileHover={{ scale: 1.1 }}
            >
              <p className="ml-20 mt-6 text-xl font-semibold">
                <FaWifi />
              </p>
              <p className="text-center my-7">More advance</p>
            </motion.div>
            <motion.div
              className="w-[200px] rounded-xl text-xl font-medium bg-white block"
              whileHover={{ scale: 1.1 }}
            >
              <p className="ml-20 mt-6 text-xl font-semibold">
                <FaLink />
              </p>
              <p className="text-center my-7">Quick support</p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-screen-xl mx-auto my-16">
        <div className="px-2 flex flex-col lg:flex-row mx-auto lg:items-center lg:justify-between gap-10">
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            variants={fadeRight}
            transition={transition}
            viewport={{ once: true }}
          >
            <img
              className="w-full"
              src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725859578/dashboard-img_r92mlu.jpg"
              alt=""
            />
          </motion.div>
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            variants={fadeLeft}
            transition={transition}
            viewport={{ once: true }}
          >
            <h1 className="text-text_primari text-4xl font-semibold">
              Soft Tech HRM <span className="text-text_blue">Dashboard</span>
            </h1>
            <p className="my-10 text-text_blue font-medium text-lg">
              Soft Tech HRM dashboard provides a centralized hub for managing
              all HR activities...
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="max-w-screen-xl mx-auto bg-universe_secondary md:py-20 md:px-14 py-10 px-5"
        initial="hidden"
        whileInView="visible"
        variants={fadeDown}
        transition={transition}
        viewport={{ once: true }}
      >
        <h1 className="text-center text-4xl font-semibold text-text_primari">
          Why Choose <span className="text-white">Us</span>?
        </h1>
        <p className="my-6 text-center text-white font-medium text-lg">
          Soft tech HRM stands out as the ideal choice...
        </p>

        <motion.div
          className="flex justify-center gap-10 flex-wrap"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={transition}
        >
          <motion.button
            className="btn bg-[#8231d3] text-white text-lg hover:text-black"
            whileHover={{ scale: 1.1 }}
          >
            Streamlined
          </motion.button>
          <motion.button
            className="btn btn-success text-white text-lg hover:text-black"
            whileHover={{ scale: 1.1 }}
          >
            Efficient
          </motion.button>
          <motion.button
            className="btn btn-warning text-white text-lg hover:text-black"
            whileHover={{ scale: 1.1 }}
          >
            Empowering
          </motion.button>
          <motion.button
            className="btn bg-[#22c55e] text-white text-lg hover:text-black"
            whileHover={{ scale: 1.1 }}
          >
            Fully Automation
          </motion.button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default HrmPage;
