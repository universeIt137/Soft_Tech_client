import React, { useEffect, useState } from "react";
import productStore from "../../../api-request/product-api/productApi";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductCreateForm = () => {
  const { id } = useParams();
  const { productUpdateApi, singleProductData, singleProductDataApi } =
    productStore();

  // Single product data load
  useEffect(() => {
    (async () => {
      await singleProductDataApi(id);
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
    const description_img = form.description_img.files[0];
    const feature_logo = form.feature_logo.files[0];

    const nav_title = form.nav_title.value;
    const nav_description = form.nav_description.value;
    const main_title = form.main_title.value;
    const live_link = form.live_link.value;
    const short_description = form.short_description.value;
    const proposal_link = form.proposal_link.value;
    const feature = form.feature.value;

    let base64NavLogo = "",
      base64FeatureImg = "",
      base64DescriptionImg = "";

    // Convert images to base64
    if (nav_logo) base64NavLogo = await convertToBase64(nav_logo);
    if (feature_logo) base64FeatureImg = await convertToBase64(feature_logo);
    if (description_img) base64DescriptionImg = await convertToBase64(description_img);


    const payload = {
      nav_logo: base64NavLogo,
      feature_logo: base64FeatureImg,
      description_img: base64DescriptionImg,

      nav_title,
      nav_description,
      main_title,
      live_link,
      short_description,
      proposal_link,
      feature,
    };

    let res = await productUpdateApi(id, payload);
    if (res) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been updated successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      toast.error("Failed to update product");
    }
  };

  return (
    <div>
      <h2 className="text-xl text-center my-6 font-bold">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Nav Logo:
            </label>
            <input
              type="file"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Nav Title:
            </label>
            <input
              type="text"
              defaultValue={singleProductData.nav_title}
              name="nav_title"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        <div className="my-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Nav Description:
          </label>
          <textarea
            defaultValue={singleProductData.nav_description}
            name="nav_description"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            rows="4"
          />
        </div>

        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Main Title:
            </label>
            <input
              type="text"
              defaultValue={singleProductData.main_title}
              name="main_title"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Live Link:
            </label>
            <input
              type="text"
              defaultValue={singleProductData.live_link}
              name="live_link"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        <div className="my-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Short Description:
          </label>
          <textarea
            defaultValue={singleProductData.short_description}
            name="short_description"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            rows="4"
          />
        </div>

        <div className="flex flex-row md:grid md:grid-cols-2 gap-8">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Proposal Link:
            </label>
            <input
              type="text"
              defaultValue={singleProductData.proposal_link}
              name="proposal_link"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Feature:
            </label>
            <input
              type="text"
              defaultValue={singleProductData.feature}
              name="feature"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>
        </div>

        <div className="my-4">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Feature Logo:
          </label>
          <input
            name="feature_logo"
            type="file"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
          />
        </div>

        {singleProductData?.extra_data &&
          singleProductData?.extra_data.map((item, i) => {
            return (
              <div className="my-10" key={i}>
                <div className="my-4">
                  {/* extra_description */}
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Extra description:
                  </label>
                  <textarea
                    name="extra_description"
                    defaultValue={item["extra_description"]}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                    rows={"4"}
                  />
                </div>
                <div className=" flex flex-col md:grid md:grid-cols-2 md:gap-8 ">
                  {/* Description img */}
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Description img
                    </label>
                    <input
                      type="file"
                      name="description_img"
                      accept="image/*"
                      className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                    />
                  </div>
                  <div>
                    {/* description_title */}
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Description title
                    </label>
                    <input
                      type="text"
                      name="description_title"
                      defaultValue={item["description_title"]}
                      className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                    />
                  </div>
                </div>
              </div>
            );
          })}

        <div className="text-center mt-4">
          <button
            type="submit"
            className="bg-text_primari text-white px-4 py-2 rounded-lg"
          >
            Update
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default ProductCreateForm;
