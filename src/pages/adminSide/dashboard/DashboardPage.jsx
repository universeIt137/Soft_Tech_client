import React, { useContext } from "react";
import { FaArrowRight } from "react-icons/fa";
import { TfiArrowTopRight } from "react-icons/tfi";
import { MdOutlineDesignServices, MdOutlineShoppingCart } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { RxArrowBottomRight } from "react-icons/rx";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../authProvider/AuthProvider";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  console.log(user)

  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

  const axiosPublic = useAxiosPublic();

  // products related data
  const { data: products = [] } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await axiosPublic.get('/get-products');
      return res.data.data;
    }
  });

  // services related data
  const { data: services = [] } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const res = await axiosPublic.get('/get-all-service');
      return res.data.data;
    }
  });

  return (
    <div className="p-4">
      <h1 className="text-gray-700 text-2xl my-3">Universe Soft Tech's Dashboard</h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* First Column: Responsive design for the cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1 */}
          <Link to="/dashboard/manage-product">
            <div className="bg-white rounded-lg shadow-md p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg text-gray-700">Total Products</h2>
                  <h1 className="text-2xl text-gray-900">{products?.length}</h1>
                </div>
                <span className="p-3 bg-text_blue rounded-full">
                  <MdOutlineShoppingCart className="text-white text-2xl" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/dashboard/manage-service">
            <div className="bg-white rounded-lg shadow-md p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg text-gray-700">Total Services</h2>
                  <h1 className="text-2xl text-gray-900">{services?.length}</h1>
                </div>
                <span className="p-3 bg-text_blue rounded-full">
                  <MdOutlineDesignServices className="text-white text-2xl" />
                </span>
              </div>
            </div>
          </Link>


          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-3">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg text-gray-700">Total Revenue</h2>
                <h1 className="text-2xl text-gray-900">$56,486</h1>
                <p className="text-sm text-gray-700 flex">
                  Increase By
                  <span className="text-text_blue flex items-center">
                    7.65% <TfiArrowTopRight />
                  </span>
                </p>
              </div>
              <span className="p-3 bg-text_blue rounded-full">
                <BiDollarCircle className="text-white text-2xl" />
              </span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow-md p-3">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg text-gray-700">Total Sales</h2>
                <h1 className="text-2xl text-gray-900">$1,76,586</h1>
                <p className="text-sm text-gray-700 flex">
                  Increase By
                  <span className="text-bg_btn_primary flex items-center">
                    7.65% <RxArrowBottomRight />
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Sales Overview: Spans full width in this column */}
          <div className="col-span-2 bg-white rounded-lg shadow-xl p-3">
            <h2 className="text-lg text-gray-700">Sales Overview</h2>
            <div style={{ width: '100%', height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Second Column: Responsive design for extra card */}
        <div className="bg-white text-black rounded-lg shadow-2xl p-3">
          <div className="flex flex-col justify-between items-center">

          <div className="">
                <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1729406625/Universe%20Soft%20Tech/gy9bewiaebymiddv7pcf.png" alt="" />
              </div>

            <div className="text-center">
              <h2 className="text-lg ">Ashikur Rahman</h2>
              <h1 className="text-2xl ">Site Admin</h1>
              
              
            </div>
            <span className="p-3  rounded-full">
              <FaUsers className=" text-2xl" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
