import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { createAlert } from '../../../helper/createAlert';
import Swal from 'sweetalert2';

const ProductCategoryAdd = () => {
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);
  const adminToken = localStorage.getItem("admin_token");
  const config = {
    headers: {
      Authorization: adminToken,
    },
  };
  const [formData, setFormData] = useState({
    productName: '',
    package: [{ totalPage: '', features: '', deliveryTime: '' }],
    price: '',
    representativePercentange: ''
  });

  // Handle general input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle package input change
  const handlePackageChange = (index, e) => {
    const { name, value } = e.target;
    const updatedPackage = [...formData.package];
    updatedPackage[index][name] = value;
    setFormData((prev) => ({
      ...prev,
      package: updatedPackage
    }));
  };

  // Add new package
  const handleAddPackage = () => {
    setFormData((prev) => ({
      ...prev,
      package: [...prev.package, { totalPage: '', features: '', deliveryTime: '' }]
    }));
  };

  // Remove package
  const handleRemovePackage = (index) => {
    const updatedPackage = formData.package.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      package: updatedPackage
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
    let resp = await createAlert();
    try {
      if (resp.isConfirmed) {
        setLoading(true)
        let res = await axiosPublic.post(`/create-product-category`, formData, config);
        setLoading(false)
        if (res) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Product upload successfully.",
            showConfirmButton: false,
            timer: 1500
          });
        }
      }
    } catch (error) {
      setLoading(false)
      Swal.fire({
        position: "top-end",
        icon: "fail",
        title: "Product upload fail.",
        showConfirmButton: false,
        timer: 1500
      })
    }
  };

  return (
    <div className=" mx-auto p-6 bg-white rounded-lg shadow-md">
      <Helmet>
        <title>Dashboard | Product Category Add </title>
      </Helmet>
      <h2 className="text-xl font-semibold text-center mb-4">Product Category Form</h2>
      <form onSubmit={handleSubmit}>
        <div className='grid lg:grid-cols-2 gap-4 ' >
          {/* Product Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Product Name</label>
            <input
              type="text"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter product name"
            />
          </div>
          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Price</label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter price"
            />
          </div>

          {/* Representative Percentage */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Representative Percentage</label>
            <input
              type="text"
              name="representativePercentange"
              value={formData.representativePercentange}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              placeholder="Enter representative percentage"
            />
          </div>
        </div>

        {/* Package Section */}
        <div className="mb-4">
          <h3 className="text-gray-700 font-medium mb-2">Package Details</h3>
          {formData.package.map((pkg, index) => (
            <div key={index} className="mb-4 p-4 border rounded-lg relative">
              <div className='grid lg:grid-cols-2  gap-x-4 ' >
                {/* Total Page */}
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-1">Total Page</label>
                  <input
                    type="text"
                    name="totalPage"
                    value={pkg.totalPage}
                    onChange={(e) => handlePackageChange(index, e)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter total page"
                  />
                </div>



                {/* Delivery Time */}
                <div clssName="mb-2">
                  <label className="block text-gray-700 font-medium mb-1">Delivery Time</label>
                  <input
                    type="text"
                    name="deliveryTime"
                    value={pkg.deliveryTime}
                    onChange={(e) => handlePackageChange(index, e)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter delivery time"
                  />
                </div>
                {/* Features */}
                <div className="mb-2">
                  <label className="block text-gray-700 font-medium mb-1">Features</label>
                  <textarea
                    name="features"
                    value={pkg.features}
                    rows={5}
                    onChange={(e) => handlePackageChange(index, e)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    placeholder="Enter features"
                  />
                </div>
              </div>

              {/* Remove Button */}
              {formData.package.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemovePackage(index)}
                  className="absolute top-2 right-2 px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          {/* Add Package Button */}
          <button
            type="button"
            onClick={handleAddPackage}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Package
          </button>
        </div>



        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded-lg text-white ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
                Submitting...
              </div>
            ) : (
              'Submit'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductCategoryAdd;
