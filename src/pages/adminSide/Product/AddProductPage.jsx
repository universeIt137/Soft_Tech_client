import React, { useState } from "react";
import productStore from "../../../api-request/product-api/productApi";
import toast, { Toaster } from "react-hot-toast";
import { uploadImg } from "../../../uploadImage/UploadImage";
import { Helmet } from "react-helmet-async";

const ProductCreateForm = () => {
  const { createProductApi } = productStore();
  const [extraData, setExtraData] = useState([
    { extra_description: "", description_img: "", description_title: "" },
  ]);

  const handleAddExtraData = () => {
    setExtraData([
      ...extraData,
      { extra_description: "", description_img: "", description_title: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nav_logo = e.target.nav_logo.files[0];
    const feature_logo = e.target.feature_logo.files[0];
    const nav_title = e.target.nav_title.value;
    const nav_description = e.target.nav_description.value;
    const main_title = e.target.main_title.value;
    const live_link = e.target.live_link.value;
    const short_description = e.target.short_description.value;
    const proposal_link = e.target.proposal_link.value;
    const feature = e.target.feature.value;

    // Upload individual images
    let navLogoUrl = nav_logo ? await uploadImg(nav_logo) : "";
    let featureLogoUrl = feature_logo ? await uploadImg(feature_logo) : "";

    // Upload description images
    const extraDataWithUrls = await Promise.all(
      extraData.map(async (item) => {
        const uploadedImg = item.description_img
          ? await uploadImg(item.description_img)
          : "";
        return { ...item, description_img: uploadedImg };
      })
    );

    // Prepare final payload
    const payload = {
      nav_logo: navLogoUrl,
      nav_title,
      nav_description,
      main_title,
      live_link,
      short_description,
      proposal_link,
      feature,
      feature_logo: featureLogoUrl,
      extra_data: extraDataWithUrls,
    };

    console.log("Payload:", payload);

    // Simulate API call
    try {
      let res = await createProductApi(payload);
      if (res) {
        toast.success("Product created successfully");
      } else {
        toast.error("Error creating service");
      }
    } catch (err) {
      toast.error("Error creating service");
    }
    e.target.reset();
  };



  return (
    <div className="w-full min-h-screen p-6 bg-white">
      <Helmet>
        <title>Dashboard | Add Product</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Add New Product
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-6 " >
          {/* Nav Logo */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Nav Logo
            </label>
            <input
              type="file"
              name="nav_logo"
              accept="image/*"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>

          {/* Nav Title */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Nav Title
            </label>
            <input
              type="text"
              name="nav_title"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              placeholder="Enter nav title"
            />
          </div>
        </div>

        {/* Nav Description */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Nav Description
          </label>
          <textarea
            name="nav_description"
            rows="5"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            placeholder="Enter nav description"
          />
        </div>

        <div className="flex flex-row gap-6">

          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Banner Title
            </label>
            <input
              type="text"
              name="main_title"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              placeholder="Enter main title"
            />
          </div>

          <div className="mb-4 w-1/2 ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Banner Image
            </label>
            <input
              type="file"
              name="banner_image"
              accept="image/*"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Banner Description */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Banner Description
          </label>
          <textarea
            name="short_description"
            rows="5"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            placeholder="Enter short description"
          />
        </div>

        {/* proposal and live link  */}
        <div className="flex flex-row gap-6" >
          {/* Proposal Link */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Proposal Link
            </label>
            <input
              type="text"
              name="proposal_link"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              placeholder="Enter proposal link"
            />
          </div>

          {/* Live Link */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Live Link
            </label>
            <input
              type="text"
              name="live_link"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              placeholder="Enter live link"
            />
          </div>
        </div>

        <div className="flex flex-row gap-6 " >



          <div className="flex flex-row gap-6">
            {/* Feature */}
            <div className="mb-4 w-full ">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Feature Title
              </label>
              <input
                type="text"
                name="feature"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                placeholder="Enter feature"
              />
            </div>
          </div>
          {/* Feature Image */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Feature Image
            </label>
            <input
              type="file"
              name="feature_logo"
              accept="image/*"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        {/* Feature Description */}
        <div className="mb-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Feature Description
          </label>
          <textarea
            name="feature_description"
            rows="5"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            placeholder="Enter nav description"
          />
        </div>


        {/* Extra Data */}
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Extra Data</h2>
        {extraData.map((item, index) => (
          <div key={index} className="mb-4">
            {/* Extra Description */}
            <textarea
              placeholder="Extra Description"
              rows="5"
              className="w-full rounded-xl px-4 py-2 mb-2 border-2 border-gray-300"
              value={item.extra_description}
              onChange={(e) => {
                const newExtraData = [...extraData];
                newExtraData[index].extra_description = e.target.value;
                setExtraData(newExtraData);
              }}
            />
            <div className="flex flex-row gap-6 " >
              <div className="w-full" >
                {/* Description Image */}
                <label htmlFor="description_img">Description Image</label>
                <input
                  type="file"
                  id="description_img"
                  accept="image/*"
                  onChange={(e) => {
                    const newExtraData = [...extraData];
                    newExtraData[index].description_img = e.target.files[0];
                    setExtraData(newExtraData);
                  }}
                  className="w-full px-4 rounded-xl py-2 mb-2 border-2 border-gray-300"
                />
              </div>

              <div className="w-full" >
                {/* Description Title */}
                <label htmlFor="description_title">Description Title</label>
                <input
                  type="text"
                  id="description_title"
                  placeholder="Description Title"
                  className="w-full px-4 py-2 rounded-xl border-2 border-gray-300"
                  value={item.description_title}
                  onChange={(e) => {
                    const newExtraData = [...extraData];
                    newExtraData[index].description_title = e.target.value;
                    setExtraData(newExtraData);
                  }}
                />
              </div>
            </div>

          </div>
        ))}
        <button
          type="button"
          onClick={handleAddExtraData}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add Extra Data
        </button> <br />

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default ProductCreateForm;
