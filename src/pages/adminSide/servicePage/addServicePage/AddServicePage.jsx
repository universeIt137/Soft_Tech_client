import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddServicePage = () => {
  return (
    <div className="w-full min-h-screen m-0 p-6 bg-white  ">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Add Service
      </h1>
      <form>

        <div className="flex flex-col md:flex md:flex-row  md:gap-4 ">
          {/* nav_logo */}
          <div className=" w-1/2 mb-4">
            <label
              htmlFor="title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Nav logo
            </label>
            <input
              type="file"
              id="nav_logo"
              name="nav_logo"
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="nav logo"
              required
            />
          </div>

          {/* nav_title */}
          <div className=" w-1/2 mb-4">
            <label
              htmlFor="nav_title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Nav Title
            </label>
            <input
              type="text"
              id="nav_title"
              name="nav_title"
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="nav title"
              required
            />
          </div>
        </div>

        {/* nav_description */}

        <div className="mb-4">
          <label
            htmlFor="nav_description"
            className="block text-lg font-medium text-gray-700 mb-2"
          >
            Nav Description
          </label>
          <textarea
            id="nav_description"
            name="nav_description"
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter nav description"
            rows="4"
            required
          />
        </div>


        <div className="flex flex-col md:flex md:flex-row  md:gap-4 ">
          {/*main_title */}
          <div className=" w-1/2 mb-4">
            <label
              htmlFor="main_title"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Main Title
            </label>
            <input
              type="text"
              id="main_title"
              name="main_title"
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter main title"
              required
            />
          </div>

          {/* banner_img*/}
          <div className=" w-1/2 mb-4">
            <label
              htmlFor="banner_img"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Banner Img
            </label>
            <input
              type="file"
              id="banner_img"
              name="banner_img"
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter banner img"
              required
            />
          </div>

        </div>

        <div className=" w-1/2 mb-4">
            <label
              htmlFor="tag_line"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Tag Line
            </label>
            <input
              type="text"
              id="tag_line"
              name="tag_line"
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none  focus:border-text_blue border-2 border-gray-300"
              placeholder="Enter tag line"
              required
            />
          </div>
        <div>
        </div>

        {/* Live Projects */}

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="bg-text_blue text-white px-6 py-3 rounded-md hover:bg-text_hover font-medium"
          >
            Add Service
          </button>
        </div>
      </form>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddServicePage;
