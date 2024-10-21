import React, { useEffect, useState } from "react";
import productStore from "../../../api-request/product-api/productApi";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { uploadImageToCloudinary } from "../../../uploadImage/UpdateImg";
import { Helmet } from "react-helmet-async";

const ProductUpdateForm = () => {
  const { id } = useParams();
  const { singleProductData, singleProductDataApi, productUpdateApi } = productStore();

  const [navLogo, setNavLogo] = useState(null); // nav_logo state
  const [bannerImg, setBannerImg] = useState(null); // banner_img state
  const [featureImg,setFeatureImg] = useState(null); // feature_img state
  const [descriptionImg, setDescriptionImg] = useState({}); // description_img state

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
    let bannerImgUrl = bannerImg ? await uploadImageToCloudinary(bannerImg) : singleProductData.banner_img;
    let featureImgUrl = featureImg ? await uploadImageToCloudinary(featureImg) : singleProductData.feature_img;

    // Prepare extra_data with image uploads for extra description images
    const updatedExtraData = await Promise.all(
      singleProductData.extra_data.map(async (item, i) => ({
        description_title: e.target[`description_title_${i}`].value,
        description_img: descriptionImg[i] 
          ? await uploadImageToCloudinary(descriptionImg[i]) 
          : item.description_img,
      }))
    );

    // Update form data with image URLs

    const formData = {
      nav_title: e.target.nav_title.value,
      nav_description: e.target.nav_description.value,
      banner_title : e.target.banner_title.value,
      banner_description : e.target.banner_description.value,
      live_link : e.target.live_link.value,
      proposal_link : e.target.proposal_link.value,
      feature_title : e.target.feature_title.value,
      feature_description : e.target.feature_description.value,

      nav_logo: navLogoUrl,
      banner_img: bannerImgUrl,
      feature_img : featureImgUrl ,
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
        <Helmet>
          <title>Dashboard | Update Product</title>
        </Helmet>

        <h2 className="text-xl text-center my-6 font-bold">Update Product</h2>

        <form onSubmit={handleSubmit}>

          <div className="avatar">

            <div className="w-12 rounded-full mt-4 ">
              <img key={Date.now()} src={singleProductData?.nav_logo} />
            </div>
          </div>

          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
            <div>
            {/* nav_logo */}
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

            {/* nav_title */}

              <label className="block text-lg font-medium text-gray-700 mb-2">
                Nav Title:
              </label>
              <input
                type="text"
                defaultValue={singleProductData?.nav_title}
                name="nav_title"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                key={Date.now()}
              />
            </div>
          </div>

          {/* nav_description */}

          <div className="my-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Nav Description:
            </label>
            <textarea
              defaultValue={singleProductData.nav_description}
              name="nav_description"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              rows="4"
              key={Date.now()}
            />
          </div>

          <div className="avatar ml-[50%] ">
            <div className="w-12 rounded-full mt-4 ">
              <img key={Date.now()} src={singleProductData?.banner_img} />
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 md:gap-8">

          {/* banner_title */}
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Banner Title:
              </label>
              <input
                type="text"
                defaultValue={singleProductData?.banner_title}
                name="banner_title"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                key={Date.now()}
              />
            </div>

            {/* banner_img */}

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Banner Image
              </label>
              <input
                type="file"
                name="banner_img"
                onChange={(e) => handleImageChange(e, setBannerImg)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                key={Date.now()}
              />
            </div>
          </div>

          {/* banner description */}
          <div className="my-4">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Banner Description:
            </label>
            <textarea
              defaultValue={singleProductData.banner_description}
              name="banner_description"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              rows="4"
              key={Date.now()}
            />
          </div>

          <div className="flex flex-row md:grid md:grid-cols-2 gap-8">
            <div>
            {/* live_link */}
              <label className="block text-lg font-medium text-gray-700 mb-2">
              Live Link:
              </label>
              <input
                type="text"
                defaultValue={singleProductData?.live_link}
                name="live_link"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                key={Date.now()}
              />
            </div>
            <div>
            {/* proposal_link */}
              <label className="block text-lg font-medium text-gray-700 mb-2">
              Proposal Link
              </label>
              <input
                type="text"
                defaultValue={singleProductData?.proposal_link}
                name="proposal_link"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                key={Date.now()}
              />
            </div>
          </div>

          <div className="avatar">
            <div className="w-12 rounded-full mt-4 ">
              <img key={Date.now()} src={singleProductData?.feature_img} />
            </div>
          </div>

          

          <div className="flex flex-row md:grid md:grid-cols-2 gap-8" >
            {/* feature_img */}
            <div className="">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Feature Img:
              </label>
              <input
                name="feature_img"
                type="file"
                onChange={(e) => handleImageChange(e, setFeatureImg)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                
              />
            </div>
            {/* feature_title */}
            <div className="">
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Feature Title:
              </label>
              <input
                name="feature_title"
                type="text"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                key={Date.now()}
              />
            </div>
          </div>

          <div>
            <div className="my-4">
              <label className="block text-lg font-medium text-gray-700 mb-2">
              Feature Description:
              </label>
              <textarea
                defaultValue={singleProductData?.feature_description}
                name="feature_description"
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                rows="4"
                key={Date.now()}
              />
            </div>
          </div>



          {singleProductData?.extra_data &&
            singleProductData.extra_data.map((item, i) => (
              <div className="my-10" key={i}>
                <div className="my-4">
                </div>
                <div className="flex flex-row gap-6 items-center my-6  " >
                  {
                    singleProductData?.extra_data && singleProductData?.extra_data.map((item, i) =>{
                      return (
                        <div key={i} >
                          <div className="avatar">
                            <div className="w-12 rounded-full mt-4 ">
                              <img key={Date.now()} src={item?.description_img} />
                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
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
                        setDescriptionImg({ ...descriptionImg, [i]: e.target.files[0] })
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
                      key={Date.now()}
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

export default ProductUpdateForm;
