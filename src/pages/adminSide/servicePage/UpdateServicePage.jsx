import React, { useState } from "react";
import axios from "axios"; // Ensure axios is imported
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useParams } from "react-router-dom";
import serviceStore from './../../../api-request/service-api/serviceApi';


const UpdateServicePage = () => {
    const {id} = useParams();
  const location = useLocation();
  const {updateServiceApi,getAllServiceApi} = serviceStore()

  // Provide fallback values if location.state or service is null
  const service = location.state?.service || {
    nav_logo: "",
    nav_title: "",
    nav_description: "",
    main_title: "",
    banner_img: "",
    tag_line: "",
    description_feature: [
      { description_logo: "", description_heading: "", description: "" },
    ],
    feature: [{ feature_logo: "", feature_description: "", feature_title: "" }],
  };

  const [formData, setFormData] = useState({
    nav_logo: service.nav_logo,
    nav_title: service.nav_title,
    nav_description: service.nav_description,
    main_title: service.main_title,
    banner_img: service.banner_img,
    tag_line: service.tag_line,
    description_feature: service.description_feature,
    feature: service.feature,
  });





  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData({ ...formData, [field]: reader.result });
      };
    }
  };

  const handleArrayChange = (e, index, arrayName, fieldName) => {
    const newArray = [...formData[arrayName]];
    newArray[index][fieldName] = e.target.value;
    setFormData({ ...formData, [arrayName]: newArray });
  };

  const {
    nav_logo,
    nav_title,
    nav_description,
    main_title,
    banner_img,
    tag_line,
    description_feature,
  feature,} = formData;

  const payload = {
    nav_logo,
    nav_title,
    nav_description,
    main_title,
    banner_img,
    tag_line,
    description_feature,
    feature
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission
    console.log("Form submitted:", formData);
    let res = await updateServiceApi(id,payload);
    if(res){
      toast.success("Update successfully")
    }else{
      toast.error("Something went wrong")
    }
  };

  return (
    <div className="w-full min-h-screen m-0 p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Update Service
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex md:flex-row md:gap-4">
          {/* nav_logo */}
          <div className="w-1/2 mb-4">
            <label
              htmlFor="nav_logo"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Nav Logo
            </label>
            <input
              type="file"
              id="nav_logo"
              name="nav_logo"
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
              onChange={(e) => handleImageUpload(e, "nav_logo")}
            />
          </div>

          {/* nav_title */}
          <div className="w-1/2 mb-4">
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
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
              placeholder="Nav Title"
              value={formData.nav_title}
              onChange={handleInputChange}
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
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter nav description"
            rows="4"
            value={formData.nav_description}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col md:flex md:flex-row md:gap-4">
          {/* main_title */}
          <div className="w-1/2 mb-4">
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
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
              placeholder="Main Title"
              value={formData.main_title}
              onChange={handleInputChange}
            />
          </div>

          {/* banner_img */}
          <div className="w-1/2 mb-4">
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
              className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
              onChange={(e) => handleImageUpload(e, "banner_img")}
            />
          </div>
        </div>

        {/* tag_line */}
        <div className="mb-4">
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
            className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
            placeholder="Tag Line"
            value={formData.tag_line}
            onChange={handleInputChange}
          />
        </div>

        {/* Description Feature Section */}
        <h3 className="text-center my-6 text-2xl font-semibold">
          Description Feature
        </h3>

        {formData.description_feature.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex md:flex-row md:gap-4">
              {/* description_logo */}
              <div className="w-1/2 mb-4">
                <label
                  htmlFor="description_logo"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Description Logo
                </label>
                <input
                  type="file"
                  id="description_logo"
                  name="description_logo"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
                  onChange={(e) =>
                    handleArrayChange(e, index, "description_feature", "description_logo")
                  }
                />
              </div>

              {/* description_heading */}
              <div className="w-1/2 mb-4">
                <label
                  htmlFor="description_heading"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Description Heading
                </label>
                <input
                  type="text"
                  id="description_heading"
                  name="description_heading"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
                  placeholder="Description Heading"
                  value={item.description_heading}
                  onChange={(e) =>
                    handleArrayChange(e, index, "description_feature", "description_heading")
                  }
                />
              </div>
            </div>

            {/* description */}
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
                placeholder="Description"
                rows="4"
                value={item.description}
                onChange={(e) =>
                  handleArrayChange(e, index, "description_feature", "description")
                }
              />
            </div>
          </div>
        ))}
        <button
          className="btn bg-text_blue text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:text-black text-lg mb-3"
          type="button"
        >
          Add New Description Feature
        </button>

        {/* Feature Section */}
        <h3 className="text-center text-2xl font-semibold my-4">
          Feature Section
        </h3>

        {formData.feature.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex md:flex-row md:gap-4">
              {/* feature_logo */}
              <div className="w-1/2 mb-4">
                <label
                  htmlFor="feature_logo"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Feature Logo
                </label>
                <input
                  type="file"
                  id="feature_logo"
                  name="feature_logo"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
                  onChange={(e) =>
                    handleArrayChange(e, index, "feature", "feature_logo")
                  }
                />
              </div>

              {/* feature_title */}
              <div className="w-1/2 mb-4">
                <label
                  htmlFor="feature_title"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Feature Title
                </label>
                <input
                  type="text"
                  id="feature_title"
                  name="feature_title"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
                  placeholder="Feature Title"
                  value={item.feature_title}
                  onChange={(e) =>
                    handleArrayChange(e, index, "feature", "feature_title")
                  }
                />
              </div>
            </div>

            {/* feature_description */}
            <div className="mb-4">
              <label
                htmlFor="feature_description"
                className="block text-lg font-medium text-gray-700 mb-2"
              >
                Feature Description
              </label>
              <textarea
                id="feature_description"
                name="feature_description"
                className="w-full px-4 py-2 rounded-lg focus:outline-none outline-none focus:border-text_blue border-2 border-gray-300"
                placeholder="Feature Description"
                rows="4"
                value={item.feature_description}
                onChange={(e) =>
                  handleArrayChange(e, index, "feature", "feature_description")
                }
              />
            </div>
          </div>
        ))}
        <button
          className="btn bg-text_blue text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:text-black text-lg mb-3"
          type="button"
        >
          Add New Feature
        </button> <br />

        <button
          type="submit"
          className=" px-6 py-3 rounded-lg bg-text_primari text-white text-xl font-medium hover:bg-green-800 transition-colors duration-300"
        >
          Update Service
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default UpdateServicePage;
