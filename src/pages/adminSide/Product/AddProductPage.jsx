import React, { useState } from "react";
import productStore from "../../../api-request/product-api/productApi";
import toast, { Toaster } from "react-hot-toast";
const ProductCreateForm = () => {
  const { createProductApi, } = productStore();
  const [formData, setFormData] = useState({
    nav_logo: "",
    nav_title: "",
    nav_description: "",
    main_title: "",
    live_link: "",
    short_description: "",
    proposal_link: "",
    feature: "",
    feature_logo: "",
    extra_data: [
      { extra_description: "", description_img: "", description_title: "" },
    ],
  });

  // Handle form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Convert file to Base64
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setFormData({ ...formData, [name]: reader.result });
    };
  };

  // Handle extra_data file change for description_img
  const handleExtraDataFileChange = (index, e) => {
    const { name, files } = e.target;
    const file = files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const newExtraData = [...formData.extra_data];
      newExtraData[index][name] = reader.result;
      setFormData({ ...formData, extra_data: newExtraData });
    };
  };

  // Handle extra_data change
  const handleExtraDataChange = (index, e) => {
    const { name, value } = e.target;
    const newExtraData = [...formData.extra_data];
    newExtraData[index][name] = value;
    setFormData({ ...formData, extra_data: newExtraData });
  };

  // Add new extra_data fields
  const addExtraDataField = () => {
    setFormData({
      ...formData,
      extra_data: [
        ...formData.extra_data,
        { extra_description: "", description_img: "", description_title: "" },
      ],
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await createProductApi(formData);
    if(res){
      toast.success("Product created successfully")
    }else{
      toast.error("Failed to create product")
    }
    // API call can be made here with formData
  };

  return (
    <div>
      <h2 className="text-xl text-center my-6 font-bold  " >Create Product</h2>
      <form onSubmit={handleSubmit}>
        <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-8 ">
          {/* nav_logo */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Nav Logo:
            </label>
            <input
              type="file"
              name="nav_logo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
          <div>
            {/* nav_title */}
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Nav Title:
            </label>
            <input
              type="text"
              name="nav_title"
              value={formData.nav_title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        <div className="my-4">
          {/* Nav Description */}

          <label className="block text-lg font-medium text-gray-700 mb-2">
            Nav Description:
          </label>
          <textarea
            name="nav_description"
            value={formData.nav_description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            rows={"4"}
          />
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-8 ">
          {/* Main Title */}
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2" el>
              Main Title:
            </label>
            <input
              type="text"
              name="main_title"
              value={formData.main_title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
          <div>
            {/* live_links */}
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Live Link:
            </label>
            <input
              type="text"
              name="live_link"
              value={formData.live_link}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        <div>
          <div className="my-4">
            {/* Short Description */}
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Short Description:
            </label>
            <textarea
              name="short_description"
              value={formData.short_description}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              rows={"4"}
            />
          </div>
        </div>

        <div className="flex flex-row md:grid md:grid-cols-2 gap-8 ">
          <div>
            {/* Proposal Link */}
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Proposal Link:
            </label>
            <input
              type="text"
              name="proposal_link"
              value={formData.proposal_link}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
          <div>
            {/* feature */}
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Feature:
            </label>
            <input
              type="text"
              name="feature"
              value={formData.feature}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        <div>
          <div className="my-4">
            {/* feature_logo */}
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Feature Logo:
            </label>
            <input
              type="file"
              name="feature_logo"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Render extra_data fields */}
        {formData.extra_data.map((extra, index) => (
          <div key={index}>
            <h4 className="text-center my-4 font-bold text-lg ">
              Add Other Data {index + 1}
            </h4>
            {/* Extra Description: */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Extra Description:
              </label>
              <textarea
                name="extra_description"
                value={extra.extra_description}
                onChange={(e) => handleExtraDataChange(index, e)}
                rows={"4"}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              />
            </div>
            <div className="flex flex-row md:grid md:grid-cols-2 gap-8 my-4 " >
            {/* Description Image: */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Description Image:
                </label>
                <input
                  type="file"
                  name="description_img"
                  accept="image/*"
                  onChange={(e) => handleExtraDataFileChange(index, e)}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                />
              </div>
              {/* Description Title: */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Description Title:
                </label>
                <input
                  type="text"
                  name="description_title"
                  value={extra.description_title}
                  onChange={(e) => handleExtraDataChange(index, e)}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Button to add more extra_data */}
        <button className="btn font-bold text-lg   bg-primary text-white hover:text-black  " type="button" onClick={addExtraDataField}>
          Add Data
        </button>

        <br />
        <button className="btn my-8 font-bold text-lg mx-auto block bg-text_primari text-white hover:text-black  " type="submit">Create Product</button>
      </form>
      <Toaster />
    </div>
  );
};

export default ProductCreateForm;
