import { useState } from "react";
import { FaEye, FaEyeSlash, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const slideInVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const Login = () => {
  const [isLoader, setIsLoader] = useState(false);
  const [showpass, setShowPass] = useState(false);

  window.scrollTo(0, 0);

  return (
    <div className="py-5 flex items-center justify-center min-h-screen">
      <div className="lg:w-[70vw] w-[90vw] bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Left side with image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInVariants}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex lg:w-1/2 items-center justify-center p-6"
        >
          <img
            src="https://i.postimg.cc/RFZ24H5Y/11073076-copy.png"
            alt="LoginIllustration"
            className="max-w-full h-auto"
          />
        </motion.div>

        {/* Right side with form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInVariants}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2 w-full p-6"
        >
          <div className="bg-custom-gradient p-4 text-center rounded-t-lg lg:rounded-t-none lg:rounded-r-lg">
            <h2 className="text-3xl font-semibold text-white">Login to your account</h2>
            <p className="text-white mt-2">
              Don’t have an account?
              <Link to="/register" className="underline pl-1 hover:text-universe_primary">
                Register
              </Link>
            </p>
          </div>
          <div className="p-6">
            <form className="space-y-8">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm text-gray-600">
                    Email address
                  </label>
                  <input
                    placeholder="info@gmail.com"
                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                    required
                  />
                </div>
                <div className="space-y-2 relative">
                  <div className="flex justify-between">
                    <label htmlFor="password" className="text-sm text-gray-600">
                      Password
                    </label>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-xs hover:underline text-universe_secendary"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <input
                    type={showpass ? "text" : "password"}
                    className="w-full px-3 py-2 outline-none focus:border-bg_btn_primary focus:outline-none border border-gray-300 rounded-md text-gray-600"
                    required
                    placeholder="Enter your password"
                  />
                  <span
                    onClick={() => setShowPass(!showpass)}
                    className="absolute top-[40%] text-xl right-3 text-gray-600 cursor-pointer"
                  >
                    {showpass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="btn w-full px-8 py-3 border-none font-semibold rounded-md text-white bg-bg_btn_primary hover:bg-bg_btn_hover transition duration-300"
              >
                {isLoader ? (
                  <span className="flex items-center justify-center gap-3">
                    <FaSpinner className="animate-spin" />
                    Processing...
                  </span>
                ) : (
                  "Login"
                )}
              </button>
            </form>
            <div className="flex items-center w-full my-4">
              <hr className="w-full border-gray-300" />
              <p className="px-3 text-gray-400">OR</p>
              <hr className="w-full border-gray-300" />
            </div>
            <div className="flex space-x-3 p-6">
              <Link to={`/representative-login`}>
                <button
                  aria-label="Login with Google"
                  type="button"
                  className="flex items-center justify-center w-full p-4 space-x-4 border border-bg_btn_primary rounded-md hover:bg-bg_btn_primary hover:text-white transition duration-300"
                >

                  <p>Login Representative </p>
                </button>
              </Link>
              <Link to={`/representative-register`}>
                <button
                  aria-label="Login with GitHub"
                  type="button"
                  className="flex items-center justify-center w-full p-4 space-x-4 border border-bg_btn_primary rounded-md hover:bg-bg_btn_primary hover:text-white transition duration-300"
                >

                  <p>Register representative</p>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
