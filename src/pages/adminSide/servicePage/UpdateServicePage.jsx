import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import serviceStore from "./../../../api-request/service-api/serviceApi";
import { uploadImageToCloudinary } from "../../../uploadImage/UpdateImg";

const UpdateServicePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { updateServiceApi, getSingleServiceApi, getSingleServiceData,getAllServiceApi } =
    serviceStore();

  const [navLogo, setNavLogo] = useState(null); // nav_logo state
  const [bannerImg, setBannerImg] = useState(null); // feature_logo state
  const [descriptionLogo, setDescriptionLogo] = useState({}); // extra data images
  const [featureLogo, setFeatureLogo] = useState({}); //

  // Handle image file changes
  const handleImageChange = (e, setState) => {
    const file = e.target.files[0];
    setState(file);
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload navLogo and featureLogo to Cloudinary
    let navLogoUrl = navLogo
      ? await uploadImageToCloudinary(navLogo)
      : getSingleServiceData.nav_logo;
    let bannerLogoUrl = bannerImg
      ? await uploadImageToCloudinary(bannerImg)
      : getSingleServiceData.banner_img;

    // Prepare extra_data with image uploads for extra description images
    const updatedDescriptionFeature = await Promise.all(
      getSingleServiceData.description_feature.map(async (item, i) => ({
        description_heading: e.target[`description_heading_${i}`].value,
        description: e.target[`description_${i}`].value,
        description_logo: descriptionLogo[i]
          ? await uploadImageToCloudinary(descriptionLogo[i])
          : item.description_logo,
      }))
    );

    const updatedFeature = await Promise.all(
      getSingleServiceData.feature.map(async (item, i) => ({
        feature_title: e.target[`feature_title_${i}`].value,
        feature_description: e.target[`feature_description_${i}`].value,
        feature_logo: featureLogo[i]
          ? await uploadImageToCloudinary(featureLogo[i])
          : item.feature_logo,
      }))
    );

    // Update form data with image URLs
    const formData = {
      nav_title: e.target.nav_title.value,
      nav_description: e.target.nav_description.value,
      main_title: e.target.main_title.value,
      tag_line: e.target.tag_line.value,
      nav_logo: navLogoUrl,
      banner_img: bannerLogoUrl,
      description_feature: updatedDescriptionFeature,
      feature: updatedFeature,
    };

    console.log(formData);

    // Send the form data to the API for product update
    let res = await updateServiceApi(id, formData);
    if (res) {
      await getAllServiceApi()
      navigate("/dashboard/manage-service")
      toast.success("Product updated successfully!");
    } else {
      toast.error("Failed to update product!");
    }
  };

  useEffect(() => {
    (async () => {
      await getSingleServiceApi(id);
    })();
  }, [id, getSingleServiceApi]);

  return (
    <div className="w-full min-h-screen m-0 p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Update Service
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="avatar">
          <div className="w-12">
            <img src= {getSingleServiceData?.nav_logo} />
          </div>
        </div>
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
              onChange={(e) => handleImageChange(e, setNavLogo)}
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
              onChange={(e) => handleImageChange(e, setBannerImg)}
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
                Description Feature ({index + 1})
              </h3>
              <div className="avatar">
                <div className="w-12">
                  <img src={item?.description_logo} alt="Description logo" />
                </div>
              </div>
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
                    onChange={(e) =>
                      setDescriptionLogo({
                        ...descriptionLogo,
                        [index]: e.target.files[0],
                      })
                    }
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
                    defaultValue={item?.description_heading}
                  />
                </div>
              </div>

              {/* Description Text */}
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
                  defaultValue={item?.description}
                  placeholder="Enter description"
                  rows="4"
                />
              </div>
            </div>
          ))}

        {/* Feature Section */}
        {getSingleServiceData?.feature &&
          getSingleServiceData?.feature.map((item, index) => (
            <div key={index}>
              <h3 className="text-center my-6 text-2xl font-semibold">
                Feature ({index + 1})
              </h3>
              <div className="avatar">
                <div className="w-12">
                  <img src={item?.feature_logo} alt="Feature logo" />
                </div>
              </div>
              <div className="flex flex-col md:flex md:flex-row md:gap-4">
                {/* Feature Logo */}
                <div className="w-1/2 mb-4">
                  <label
                    htmlFor={`feature_logo_${index}`}
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Feature Logo
                  </label>
                  <input
                    type="file"
                    id={`feature_logo_${index}`}
                    onChange={(e) =>
                      setFeatureLogo({
                        ...featureLogo,
                        [index]: e.target.files[0],
                      })
                    }
                    name="feature_logo"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                  />
                </div>

                {/* Feature Title */}
                <div className="w-1/2 mb-4">
                  <label
                    htmlFor={`feature_title_${index}`}
                    className="block text-lg font-medium text-gray-700 mb-2"
                  >
                    Feature Title
                  </label>
                  <input
                    type="text"
                    id={`feature_title_${index}`}
                    name="feature_title"
                    className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                    defaultValue={item?.feature_title}
                  />
                </div>
              </div>

              {/* Feature Description */}
              <div className="mb-4">
                <label
                  htmlFor={`feature_description_${index}`}
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Feature Description
                </label>
                <textarea
                  id={`feature_description_${index}`}
                  name="feature_description"
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:border-text_blue border-2 border-gray-300"
                  defaultValue={item?.feature_description}
                  placeholder="Enter feature description"
                  rows="4"
                />
              </div>
            </div>
          ))}

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Update Service
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default UpdateServicePage;
