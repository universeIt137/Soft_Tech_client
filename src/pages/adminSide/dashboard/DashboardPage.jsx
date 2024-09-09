import React from "react"
import { FaArrowRight } from "react-icons/fa";

const DashboardPage = () => {
  return (
    <div>
        <span className='text-text_blue mt-3 flex gap-1 items-center'>Dashboard<FaArrowRight /><span className="text-black">Sales</span></span>
        <h1 className="text-gray-700 text-lg my-3">Sales Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-700 rounded-lg py-5">
                kjf
            </div>
            <div className="bg-red-700 rounded-lg py-5">
                kjf
            </div>
            <div className="bg-red-700 rounded-lg py-5">
                kjf
            </div>
      </div>
    </div>
  )
};

export default DashboardPage
