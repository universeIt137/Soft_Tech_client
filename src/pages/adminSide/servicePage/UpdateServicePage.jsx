import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import serviceStore from "./../../../api-request/service-api/serviceApi";

const UpdateServicePage = () => {
  const { id } = useParams();
  const { updateServiceApi, getSingleServiceApi, getSingleServiceData } =
    serviceStore();

  const [formData, setFormData] = useState({
    nav_logo: "",
    banner_img: "",
    description_logo: "",
    feature_logo: ""
  });

  useEffect(() => {
    (async () => {
      await getSingleServiceApi(id);
    })();
  }, [id]);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const nav_logo = form.nav_logo.files[0];
    const banner_img = form.banner_img.files[0];
    const description_logo = form.description_logo.files[0];
    const feature_logo = form.feature_logo.files[0];

    const nav_title = form.nav_title.value;
    const nav_description = form.nav_description.value;
    const main_title = form.main_title.value;
    const tag_line = form.tag_line.value;
    const description_heading = form.description_heading.value;
    const description = form.description.value;
    const feature_title = form.feature_title.value;
    const feature_description = form.feature_description.value;

    let base64NavLogo = "",
      base64BannerImg = "",
      base64DescriptionLogo = "",
      base64FeatureLogo = "";

    // Convert images to base64
    if (nav_logo) base64NavLogo = await convertToBase64(nav_logo);
    console.log(base64NavLogo);
    if (banner_img) base64BannerImg = await convertToBase64(banner_img);
    if (description_logo)
      base64DescriptionLogo = await convertToBase64(description_logo);

    if (feature_logo) base64FeatureLogo = await convertToBase64(feature_logo);

    const payload = {
      nav_logo: base64NavLogo,
      nav_title,
      nav_description,
      main_title,
      banner_img: base64BannerImg,
      description_logo: base64DescriptionLogo,
      description_heading,
      description,
      feature_logo: base64FeatureLogo,
      feature_title,
      feature_description,
      tag_line,
    };


    let res = await updateServiceApi(id, payload);
    if (res) {
      toast.success("Update successfully");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full min-h-screen m-0 p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Update Service
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex md:flex-row md:gap-4">
          {/* Nav Logo */}
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
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
            />
          </div>

          {/* Nav Title */}
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
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
              placeholder="Nav Title"
              defaultValue={getSingleServiceData.nav_title}
            />
          </div>
        </div>

        {/* Nav Description */}
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
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
            placeholder="Enter nav description"
            rows="4"
            defaultValue={getSingleServiceData.nav_description}
          />
        </div>

        <div className="flex flex-col md:flex md:flex-row md:gap-4">
          {/* Main Title */}
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
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
              placeholder="Main Title"
              defaultValue={getSingleServiceData.main_title}
            />
          </div>

          {/* Banner Img */}
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
              className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Tag Line */}
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
            className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
            placeholder="Tag Line"
            defaultValue={getSingleServiceData.tag_line}
          />
        </div>

        {/* Description Feature Section */}
        
    
        {getSingleServiceData?.description_feature &&
          getSingleServiceData?.description_feature.map((item, index) => (
            
            <div key={index}>
              <h3 className="text-center my-6 text-2xl font-semibold">
              Description Feature ({index+1}) 
              </h3>
              <div className="flex flex-col md:flex md:flex-row md:gap-4">
                {/* Description Logo */}
                <div className="w-1/2 mb-4">
                  <label
                    htmlFor={`description_logo_${index}`}
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Description Logo
                  </label>
                  <input
                    type="file"
                    id={`description_logo_${index}`}
                    name="description_logo"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                  />
                </div>

                {/* Description Heading */}
                <div className="w-1/2 mb-4">
                  <label
                    htmlFor={`description_heading_${index}`}
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Description Heading
                  </label>
                  <input
                    type="text"
                    id={`description_heading_${index}`}
                    name="description_heading"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                    placeholder="Description Heading"
                    defaultValue={item.description_heading}
                  />
                </div>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label
                  htmlFor={`description_${index}`}
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  id={`description_${index}`}
                  name="description"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                  placeholder="Enter description"
                  rows="2"
                  defaultValue={item.description}
                />
              </div>
            </div>
          ))}

        {/* Feature Section */}
        

          {
            getSingleServiceData?.feature && getSingleServiceData?.feature.map((item,i)=>{
              return(
                <div key={i} >
                      <h3 className="text-center my-6 text-2xl font-semibold">Feature ({i+1}) </h3>
                      <div className="avatar">
                        <div className="w-12">
                          <img src= {item.feature_logo} />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex md:flex-row md:gap-4">
                      {/* Feature Title */}
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
                          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                          placeholder="Feature Title"
                          defaultValue={item?.feature_title}
                        />
                      </div>

                      {/* Feature Img */}
                      <div className="w-1/2 mb-4">
                        <label
                          htmlFor="feature_logo"
                          className="block text-lg font-medium text-gray-700 mb-2"
                        >
                          Feature Img
                        </label>
                        <input
                          type="file"
                          id="feature_logo"
                          name="feature_logo"
                          className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                        />
                      </div>
                    </div>

                    {/* Feature Description */}
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
                        className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                        placeholder="Enter feature description"
                        rows="4"
                        defaultValue={item?.feature_description}
                      />
                    </div>
                </div>
              )
            })
          }

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg"
          >
            Update
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default UpdateServicePage;
