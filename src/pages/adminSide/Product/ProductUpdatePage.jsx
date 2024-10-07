import React, { useEffect, useState } from "react";
import productStore from "../../../api-request/product-api/productApi";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { uploadImageToCloudinary } from "../../../uploadImage/UpdateImg";

const ProductCreateForm = () => {
  const { id } = useParams();
  const { singleProductData, singleProductDataApi, productUpdateApi } = productStore();

  const [navLogo, setNavLogo] = useState(null); // nav_logo state
  const [featureLogo, setFeatureLogo] = useState(null); // feature_logo state
  const [extraImages, setExtraImages] = useState({}); // extra data images

  // Handle image file changes
  const handleImageChange = (e, setState) => {
    const file = e.target.files[0];
    setState(file);
  };

  // Handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload navLogo and featureLogo to Cloudinary
    let navLogoUrl = navLogo ? await uploadImageToCloudinary(navLogo) : singleProductData.nav_logo;
    let featureLogoUrl = featureLogo ? await uploadImageToCloudinary(featureLogo) : singleProductData.feature_logo;

    // Prepare extra_data with image uploads for extra description images
    const updatedExtraData = await Promise.all(
      singleProductData.extra_data.map(async (item, i) => ({
        extra_description: e.target[`extra_description_${i}`].value,
        description_title: e.target[`description_title_${i}`].value,
        description_img: extraImages[i] 
          ? await uploadImageToCloudinary(extraImages[i]) 
          : item.description_img,
      }))
    );

    // Update form data with image URLs
    const formData = {
      nav_title: e.target.nav_title.value,
      nav_description: e.target.nav_description.value,
      main_title: e.target.main_title.value,
      live_link: e.target.live_link.value,
      short_description: e.target.short_description.value,
      proposal_link: e.target.proposal_link.value,
      feature: e.target.feature.value,
      nav_logo: navLogoUrl,
      feature_logo: featureLogoUrl,
      extra_data: updatedExtraData,
    };

    // Send the form data to the API for product update
    let res = await productUpdateApi(id, formData);
    if (res) {
      toast.success("Product updated successfully!");
    } else {
      toast.error("Failed to update product!");
    }
  };

  useEffect(() => {
    (async () => {
      await singleProductDataApi(id);
    })();
  }, [id]);

  if (singleProductData.length === 0) {
    return <h1>Data loading...</h1>;
  } else {
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
                onChange={(e) => handleImageChange(e, setNavLogo)}
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
              onChange={(e) => handleImageChange(e, setFeatureLogo)}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>

          {singleProductData?.extra_data &&
            singleProductData.extra_data.map((item, i) => (
              <div className="my-10" key={i}>
                <div className="my-4">
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Extra description:
                  </label>
                  <textarea
                    name={`extra_description_${i}`}
                    defaultValue={item.extra_description}
                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                    rows="4"
                  />
                </div>
                <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Description img:
                    </label>
                    <input
                      type="file"
                      name={`description_img${i}`}
                      accept="image/*"
                      onChange={(e) =>
                        setExtraImages({ ...extraImages, [i]: e.target.files[0] })
                      }
                      className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Description title:
                    </label>
                    <input
                      type="text"
                      name={`description_title_${i}`}
                      defaultValue={item.description_title}
                      className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                    />
                  </div>
                </div>
              </div>
            ))}

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
  }
};

export default ProductCreateForm;
