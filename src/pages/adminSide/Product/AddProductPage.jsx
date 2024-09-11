import React, { useState } from "react";
import { AddProductRequest } from "../../../api-request/admin-api/product-api";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const AddProductPage = () => {
  const [data, setData] = useState({
    productName: "",
    productImage: "",
    productDesc: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await AddProductRequest(data);
    if (res) {
      toast.success("Product added successfully!!!");
      setData({
        productName: "",
        productImage: "", 
        productDesc: ""
      })
    } else {
      toast.error("Product can't be added! Please try again");
    }
  };

  const handleInputOnChange = (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add New Product</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              value={data.productName}
              onChange={(e) => handleInputOnChange('productName', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Product Image URL</label>
            <input
              type="text"
              value={data.productImage}
              onChange={(e) => handleInputOnChange('productImage', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Product Description</label>
            <textarea
              value={data.productDesc}
              onChange={(e) => handleInputOnChange('productDesc', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
              placeholder="Enter product description"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-text_blue hover:bg-text_hover text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Add Product
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProductPage;
