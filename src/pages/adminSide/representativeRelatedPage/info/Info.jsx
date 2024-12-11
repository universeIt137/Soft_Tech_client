import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { MdOutlineDesignServices, MdOutlineShoppingCart } from 'react-icons/md';
import { RxArrowBottomRight } from 'react-icons/rx';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const Info = () => {
    return (
        <div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1 */}
          <Link to="/dashboard/manage-product">
            <div className="bg-white rounded-lg shadow-md p-3 border">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg text-gray-700">Personal Information</h2>
                </div>
                <span className="p-3 bg-text_blue rounded-full">
                  <MdOutlineShoppingCart className="text-white text-2xl" />
                </span>
              </div>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/dashboard/manage-service">
            <div className="bg-white rounded-lg shadow-md p-3 border">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-lg text-gray-700">Accounts Information</h2>
                </div>
                <span className="p-3 bg-text_blue rounded-full">
                  <MdOutlineDesignServices className="text-white text-2xl" />
                </span>
              </div>
            </div>
          </Link>


          

          
        </div>
        </div>
    );
};

export default Info;