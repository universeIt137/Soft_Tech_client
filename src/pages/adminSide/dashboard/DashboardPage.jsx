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

const DashboardPage = () => {

  

  const axiosPublic = useAxiosPublic();
  const adminToken = localStorage.getItem("admin_token");

  const config = {
    headers: {
      Authorization: adminToken,
    },
  };

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

  const { data: representatives =[] } = useQuery({
    queryKey: ['representatives'],
    queryFn: async () => {
      const res = await axiosPublic.get('/representative', config);
      return res.data.data;
    }
  });

  console.log(representatives);

  return (
    <div className="p-4">
      <h1 className="text-gray-700 text-2xl my-3">Universe Soft Tech's Dashboard</h1>

      {/* Responsive Grid Layout */}
      <div className="">
        {/* First Column: Responsive design for the cards */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-4 gap-4">
          {/* Total Product */}
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

          {/* Total Service */}
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

          {/* total representative */}
          <Link to="/dashboard/manage-representative">
            <div className="bg-white rounded-lg shadow-md p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg text-gray-700">Total Representatives</h2>
                  <h1 className="text-2xl text-gray-900">{representatives?.length}</h1>
                </div>
                <span className="p-3 bg-text_blue rounded-full">
                  <MdOutlineDesignServices className="text-white text-2xl" />
                </span>
              </div>
            </div>
          </Link>




          
        </div>

        {/* Second Column: Responsive design for extra card */}

      </div>
    </div>
  );
};

export default DashboardPage;
