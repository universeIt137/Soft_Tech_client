import React from "react";
import { AiFillHome } from "react-icons/ai";

import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

import { Link } from "react-router-dom";
import { FaChartLine } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { RiHandCoinFill } from "react-icons/ri";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { VscSettingsGear } from "react-icons/vsc";
import { IoCardOutline } from "react-icons/io5";
import { FaPaypal } from "react-icons/fa";
import { VscIssueDraft } from "react-icons/vsc";
import './DeshBoard.css'
import ReactBarChart from "../ReactBarChart/ReactBarChart";
import ReactPieChart from "../ReactPieChart/ReactPieChart";




const DeshBoard = () => {
  return (
    <div className="mt-20  lg:h-[100vh] bg-[#F5F7FA]">
      <div className="flex container mx-auto gap-3 lg:gap-5">
        <div className="leftSide w-[22%]   shadow-xl">
          <div className="px-5 py-5 text-[#B1B1B1] space-y-6 text-start">
            <Link
              to={`/`}
              className="flex px-8 items-center gap-5                                    hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary "
            >
              <div>
                <AiFillHome className=" text-3xl "></AiFillHome>
              </div>
              <p className="text-xl ml-5  ">Deshboard</p>
            </Link>

            <Link
              to={`/`}
              className="flex  px-8 gap-5   items-center                                     hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
            >
              <div>
                <FaFileInvoiceDollar className=" text-3xl "></FaFileInvoiceDollar>
              </div>
              <p className="text-xl ml-5">Transaction</p>
            </Link>

            <Link
              to={`/`}
              className="flex  px-8 text-start gap-5 items-center                                     hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
            >
              <div>
                <IoPerson className=" text-3xl "></IoPerson>
              </div>
              <p className="text-xl ml-5">Account</p>
            </Link>

            <Link
              to={`/`}
              className="flex  px-8 text-start gap-5 items-center                                     hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
            >
              <div>
                <FaChartLine className=" text-3xl "></FaChartLine>
              </div>
              <p className="text-xl ml-5">Investment</p>
            </Link>

            <Link
              to={`/`}
              className="flex  px-8 text-start gap-5   items-center                                     hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
            >
              <div>
                <FaRegCreditCard className=" text-3xl "></FaRegCreditCard>
              </div>
              <p className="text-xl ml-5">Credit Cards</p>
            </Link>
            <Link
              to={`/`}
              className="flex  px-8 text-start gap-5 items-center                                     hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
            >
              <div>
                <RiHandCoinFill className=" text-3xl "></RiHandCoinFill>
              </div>
              <p className="text-xl  ml-5 ">Loans</p>
            </Link>
            <Link
              to={`/`}
              className="flex  px-8 text-start gap-5 items-center                                     hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
            >
              <div>
                <MdOutlineDesignServices className=" text-3xl "></MdOutlineDesignServices>
              </div>
              <p className="text-xl  ml-5 ">Service</p>
            </Link>
            <Link
              to={`/`}
              className="flex  px-8 text-start gap-5 items-center                                     hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
            >
              <div>
                <GiBoxingGloveSurprise className=" text-3xl "></GiBoxingGloveSurprise>
              </div>
              <p className="text-xl  ml-5 ">My Privileges</p>
            </Link>
            <Link
              to={`/`}
              className="flex  px-8 text-start gap-5 items-center                                     hover:border-l-4 border-l-4 border-l-transparent hover:border-l-universe_secendary active:border-l-4 active:border-l-universe_secendary rounded-tl-md rounded-bl-md hover:text-universe_secendary"
            >
              <div>
                <VscSettingsGear className=" text-3xl "></VscSettingsGear>
              </div>
              <p className="text-xl  ml-5 ">Setting</p>
            </Link>
          </div>
        </div>
        <div className="rightSide    py-3 px-5">
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-5">
            <div className="lg:col-span-6">
              <div className="flex justify-between text-xl font-bold">
                <h2>My Cards</h2>
                <h2>See All</h2>
              </div>

              {/* cards  */}

              <div className="flex flex-col  lg:flex-row gap-5 mt-5">
                <div class="w-full md:w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="p-8 rounded-t-lg"
                      src="https://res.cloudinary.com/dqescabbl/image/upload/v1724740508/apple-watch_dpukmm.png"
                      alt="product image"
                    />
                  </a>
                  <div class="px-5 pb-5">
                   
                    <div class="flex items-center mt-2.5 mb-5">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-gray-200 dark:text-gray-600"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                        5.0
                      </span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">
                        $599
                      </span>
                      <a
                        href="#"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>

                <div class="w-full  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="p-8 rounded-t-lg"
                      src="https://res.cloudinary.com/dqescabbl/image/upload/v1724740508/apple-watch_dpukmm.png"
                      alt="product image"
                    />
                  </a>
                  <div class="px-5 pb-5">
                   
                    <div class="flex items-center mt-2.5 mb-5">
                      <div class="flex items-center space-x-1 rtl:space-x-reverse">
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          class="w-4 h-4 text-gray-200 dark:text-gray-600"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                      <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                        5.0
                      </span>
                    </div>
                    <div class="flex items-center justify-between">
                      <span class="text-3xl font-bold text-gray-900 dark:text-white">
                        $599
                      </span>
                      <a
                        href="#"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 ">
                <h2 className="text-xl font-bold text-center">Recent Transection</h2>

                <div className="bg-white py-5 px-4 mt-5 rounded-3xl space-y-3">
                   <div className="flex gap-3 items-center justify-between">
                      <div>
                         <IoCardOutline className="bg-[#FFF5D9] p-3 rounded-full text-6xl text-[#FFBB38]"></IoCardOutline>
                      </div>
                      <div className="font-bold">
                         <p className="text-[13px]">Deposit from my Card</p>
                         <p className="text-xs">28 January 2021</p>
                      </div>
                      <div>
                        <p className="text-red-500">-$850</p>
                      </div>
                   </div>
                   <div className="flex gap-3 items-center justify-between">
                      <div>
                         <FaPaypal className="bg-[#E7EDFF] p-3 rounded-full text-6xl text-[#0C8CE9]"></FaPaypal>
                      </div>
                      <div className="font-bold">
                         <p className="text-[13px]">Deposit Paypal</p>
                         <p className="text-xs">25 January 2021</p>
                      </div>
                      <div>
                        <p className="text-red-500">+$2500</p>
                      </div>
                   </div>
                   <div className="flex gap-3 items-center justify-between">
                      <div>
                         <VscIssueDraft className="bg-[#DCFAF8] p-3 rounded-full text-6xl text-[#16DBCC]"></VscIssueDraft>
                      </div>
                      <div className="font-bold">
                         <p className="text-[13px]">Jemi Wilson</p>
                         <p className="text-xs">21 January 2021</p>
                      </div>
                      <div>
                        <p className="text-red-500">+$5400</p>
                      </div>
                   </div>

                </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-9 gap-5">
            <div className="lg:col-span-6">
              <div className=" text-xl font-bold mb-5">
                <h2>Weekly Activity</h2>
               
              </div>

              {/* cards  */}
             
                 <ReactBarChart ></ReactBarChart>
             

              
            </div>
            <div className="lg:col-span-3 ">
                <h2 className="text-xl font-bold text-center">Expense Statistics</h2>

                <div className="bg-white py-5 px-4 mt-5 rounded-3xl space-y-3">
                  
                   <ReactPieChart></ReactPieChart>
                </div>
            </div>
          </div>


        
        </div>
      </div>
    </div>
  );
};

export default DeshBoard;
