import React, { useState } from "react";
import productStore from "./../../../api-request/product-api/productApi";
import toast, { Toaster } from "react-hot-toast";

const AddProductPage = () => {
  const { createProductApi } = productStore;
  const [data, setData] = useState({
    productName: "",
    productImage: "",
    productDesc: "",
  });
  const { productName, productImage, productDesc } = data;
  const getInputValue = (name, value) => {
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitFromData = async () => {
    console.log(`product submitted`)
    let res = await createProductApi(data);
    if (res) {
      return toast.success("Product create successfully");
    } else {
      return toast.error("Something went wrong");
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Add New Product
        </h2>

        <form onSubmit={submitFromData} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Product Name
            </label>
            <input
              type="text"
              value={productName}
              onChange={(e) => getInputValue("productName", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Product Image URL
            </label>
            <input
              type="text"
              value={productImage}
              onChange={(e) => getInputValue("productImage", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Product Description
            </label>
            <textarea
              value={productDesc}
              onChange={(e) => getInputValue("productDesc", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 "
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
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default AddProductPage;
