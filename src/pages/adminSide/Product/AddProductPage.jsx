import React, { useState } from "react";
import axios from "axios";

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newProduct = {
      productName,
      productImage,
      productDesc,
    };

    try {
      // Assuming the backend URL is running on localhost:5000/api/products
      await axios.post("http://localhost:5000/api/products", newProduct);
      setMessage("Product added successfully!");
    } catch (error) {
      setMessage("Error adding product.");
    }

    // Reset form fields
    setProductName("");
    setProductImage("");
    setProductDesc("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Add New Product</h2>

        {/* Success/Error Message */}
        {message && (
          <div className={`text-center text-lg mb-4 ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Product Name</label>
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Product Image URL</label>
            <input
              type="text"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">Product Description</label>
            <textarea
              value={productDesc}
              onChange={(e) => setProductDesc(e.target.value)}
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
    </div>
  );
};

export default AddProductPage;
