import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  return (
    <div className="min-h-screen flex py-5  items-center justify-center  ">
      <div className="container mx-auto  w-3/5 bg-white rounded-lg shadow-lg my-8">
      <div className="bg-custom-gradient p-4 rounded-t-md text-center">
          <h2 className="text-3xl font-semibold text-white">Register to your account</h2>
          <p className="text-white mt-2">
            Already have an account?
            <Link to="/login" className="underline pl-1 hover:text-gray-200">
              Register
            </Link>
          </p>
          
        </div>
        <form noValidate className="space-y-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block font-medium text-gray-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-bg_btn_primary focus:outline-none"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-bg_btn_primary focus:outline-none"
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="photourl" className="block font-medium text-gray-700">
              Photo URL
            </label>
            <input
              id="photourl"
              type="text"
              placeholder="Provide Photo URL"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-bg_btn_primary focus:outline-none"
            />
          </div>

          <div className="space-y-1 text-sm relative">
            <label htmlFor="password" className="block font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-bg_btn_primary focus:outline-none"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 transform -translate-y-1/2 right-3 text-xl text-gray-500 cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            className="btn w-full px-8 py-3 border-none font-semibold rounded-md text-white bg-bg_btn_primary hover:bg-bg_btn_hover transition duration-300"
          >
            {isLoader ? (
              <span className="flex items-center justify-center gap-3">
                <FaSpinner className="animate-spin" /> Processing...
              </span>
            ) : (
              'Register'
            )}
          </button>
        </form>

        <div className="flex items-center px-6 space-x-1">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-3 text-gray-600">Or sign up with social accounts</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex space-x-3 p-6">
          <button
            aria-label="Login with Google"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border border-bg_btn_primary rounded-md hover:bg-bg_btn_primary hover:text-white transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-bg_btn_primary ">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
          <button
            aria-label="Login with GitHub"
            type="button"
            className="flex items-center justify-center w-full p-4 space-x-4 border border-bg_btn_primary rounded-md hover:bg-bg_btn_primary hover:text-white transition duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current text-bg_btn_primary ">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
            <p>Login with GitHub</p>
          </button>
        </div>


        {/* <p className="text-xs text-center text-gray-600 mt-4">
          Already have an account?
          <Link
            to="/login"
            className="underline text-bg_btn_primary px-3"
          >
            Login
          </Link>
        </p> */}
      </div>
    </div>
  );
};

export default Register;
