import React from "react"
import { FaArrowRight } from "react-icons/fa";
import { TfiArrowTopRight } from "react-icons/tfi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi"; 
import { RxArrowBottomRight } from "react-icons/rx"; 
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';


const DashboardPage = () => {

  const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];
  
  return (
    <div>
      <span className='text-text_blue mt-3 flex gap-1 items-center'>Dashboard<FaArrowRight /><span className="text-black">Sales</span></span>
      <h1 className="text-gray-700 text-2xl my-3">Sales Dashboard</h1>




      <div className="grid grid-cols-3 gap-4">
        {/* First Column: Spans 2 columns */}
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg text-gray-700">Total Products</h2>
                    <h1 className="text-2xl text-gray-900">846</h1>
                    <p className="text-sm text-gray-700 flex">
                      Increase By
                      <span className="text-text_blue flex items-center">
                        2.56% <TfiArrowTopRight />
                      </span>
                    </p>
                  </div>
                  <span className="p-3 bg-text_blue rounded-full">
                    <MdOutlineShoppingCart className="text-white text-2xl" />
                  </span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg text-gray-700">Total Users</h2>
                    <h1 className="text-2xl text-gray-900">31,876</h1>
                    <p className="text-sm text-gray-700 flex">
                      Increase By
                      <span className="text-text_blue flex items-center">
                        0.34% <TfiArrowTopRight />
                      </span>
                    </p>
                  </div>
                  <span className="p-3 bg-text_blue rounded-full">
                    <FaUsers className="text-white text-2xl" />
                  </span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg text-gray-700">Total Revenue</h2>
                    <h1 className="text-2xl text-gray-900">$56486</h1>
                    <p className="text-sm text-gray-700 flex">
                      Increase By
                      <span className="text-text_blue flex items-center">
                        7.65% <TfiArrowTopRight />
                      </span>
                    </p>
                  </div>
                  <span className="p-3 bg-text_blue rounded-full">
                    <BiDollarCircle  className="text-white text-2xl" />
                  </span>
                </div>
              </div>
            </div>
            

            {/* card 4 */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-lg text-gray-700">Total Sales</h2>
                    <h1 className="text-2xl text-gray-900">$1,76,586</h1>
                    <p className="text-sm text-gray-700 flex">
                      Increase By
                      <span className="text-bg_btn_primary flex items-center">
                        7.65% <RxArrowBottomRight  />
                      </span>
                    </p>
                  </div>
                 
                </div>
              </div>
            </div>

            {/* card 5 */}
            <div className="col-span-2">
              <div className="bg-white rounded-lg shadow-md p-3">
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
          </div>
        </div>










        {/* Second Column: Spans 1 column */}
        <div className="col-span-1">
          <div className="bg-gradient-to-r from-universe_secondary to-universe_primary rounded-lg shadow-md p-3">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg text-gray-100">Total Revenue</h2>
                <h1 className="text-2xl text-white">$31,876</h1>
                <p className="text-sm text-gray-100 flex">
                  Increase By
                  <span className="text-text_blue flex items-center">
                    0.34% <TfiArrowTopRight />
                  </span>
                </p>
              </div>
              <span className="p-3 bg-text_blue rounded-full">
                <FaUsers className="text-white text-2xl" />
              </span>
            </div>
          </div>
        </div>




      </div>














    </div>
  )
};

export default DashboardPage
