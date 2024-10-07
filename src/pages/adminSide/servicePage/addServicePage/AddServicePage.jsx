// AddServicePage.js
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { uploadImg } from "../../../../uploadImage/UploadImage";
import serviceStore from './../../../../api-request/service-api/serviceApi';

const AddServicePage = () => {
  const { createServiceApi } = serviceStore();
  const [descriptionFeatures, setDescriptionFeatures] = useState([
    { description_logo: "", description_heading: "", description: "" },
  ]);

  const [features, setFeatures] = useState([
    { feature_title: "", feature_logo: "", feature_description: "" },
  ]);

  const [showDescriptionFeatures, setShowDescriptionFeatures] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const handleAddDescriptionFeature = () => {
    setDescriptionFeatures([
      ...descriptionFeatures,
      { description_logo: "", description_heading: "", description: "" },
    ]);
  };

  const handleAddFeature = () => {
    setFeatures([
      ...features,
      { feature_title: "", feature_logo: "", feature_description: "" },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nav_logo = e.target.nav_logo.files[0];
    const banner_img = e.target.banner_img.files[0];
    const nav_title = e.target.nav_title.value;
    const nav_description = e.target.nav_description.value;
    const main_title = e.target.main_title.value;
    const tag_line = e.target.tag_line.value;

    // Upload individual images
    let navLogoUrl = nav_logo ? await uploadImg(nav_logo) : "";
    let bannerImgUrl = banner_img ? await uploadImg(banner_img) : "";

    // Upload description logos

    const descriptionFeatureWithUrls = await Promise.all(
      descriptionFeatures.map(async (feature) => {
        const uploadedLogo = feature.description_logo
          ? await uploadImg(feature.description_logo)
          : "";
        return { ...feature, description_logo: uploadedLogo };
      })
    );

    // Upload feature logos
    const featureWithUrls = await Promise.all(
      features.map(async (feature) => {
        const uploadedLogo = feature.feature_logo
          ? await uploadImg(feature.feature_logo)
          : "";
        return { ...feature, feature_logo: uploadedLogo };
      })
    );

    // Prepare final payload
    const payload = {
      nav_logo: navLogoUrl,
      nav_title,
      nav_description,
      main_title,
      banner_img: bannerImgUrl,
      tag_line,
      description_feature: descriptionFeatureWithUrls,
      feature: featureWithUrls,
    };

    // console.log("Payload:", payload);

    // Simulate API call
    try {
      let res = await createServiceApi(payload);
      if (res) {
        toast.success("Service successfully created");
      }
    } catch (err) {
      toast.error("Error creating service");
    }
    e.target.reset();
  };

  return (
    <div className="w-full min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Add Service
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row gap-4 " >

          {/* Nav Logo */}
          <div className="mb-4  w-full ">
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
          {/* Nav Title and Description */}
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

        <div className="flex flex-row gap-6 " >

          {/* Main Title */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Main Title
            </label>
            <input
              type="text"
              name="main_title"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              placeholder="Enter main title"
            />
          </div>


          {/* Banner Image */}
          <div className="mb-4 w-full ">
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Banner Image
            </label>
            <input
              type="file"
              name="banner_img"
              accept="image/*"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            />
          </div>

        </div>

        {/* Tag Line */}
        <div className="mb-4 w-1/2 ">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Tag Line
          </label>
          <input
            type="text"
            name="tag_line"
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            placeholder="Enter tag line"
          />
        </div>

        {/* Toggle Button for Description Features */}

        <button
          type="button"
          onClick={() => setShowDescriptionFeatures(!showDescriptionFeatures)}
          className="bg-blue-500 text-white mx-4 px-4 py-2 rounded-lg mb-4"
        >
          {showDescriptionFeatures ? "Hide" : "Add"} Description Features
        </button> <br />

        {/* Description Features */}

        {showDescriptionFeatures && (
          <>

            {descriptionFeatures.map((feature, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  Description Features {index + 1}
                </h2>
                <div className="flex flex-row gap-6 my-3 " >
                  <div className="w-full" >
                    <label htmlFor="description_logo">Description logo</label>
                    <input
                      type="file"
                      id="description_logo"
                      accept="image/*"
                      onChange={(e) => {
                        const newFeatures = [...descriptionFeatures];
                        newFeatures[index].description_logo = e.target.files[0];
                        setDescriptionFeatures(newFeatures);
                      }}
                      className="w-full px-4 my-2 py-2 rounded-lg mb-2 border-2 border-gray-300"
                    />
                  </div>
                  <div className="w-full" >
                    <label htmlFor="description_heading">Description Heading</label>
                    <input
                      type="text"
                      placeholder="Description Heading"
                      className="w-full px-4 py-2 my-2 rounded-lg mb-2 border-2 border-gray-300"
                      value={feature.description_heading}
                      onChange={(e) => {
                        const newFeatures = [...descriptionFeatures];
                        newFeatures[index].description_heading = e.target.value;
                        setDescriptionFeatures(newFeatures);
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description">Description</label>
                  <textarea
                    placeholder="Description"
                    rows="5"
                    id="description"
                    className="w-full mt-2 rounded-lg px-4 py-2 border-2 border-gray-300"
                    value={feature.description}
                    onChange={(e) => {
                      const newFeatures = [...descriptionFeatures];
                      newFeatures[index].description = e.target.value;
                      setDescriptionFeatures(newFeatures);
                    }}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddDescriptionFeature}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Add Description Feature
            </button>
          </>
        )}

        {/* Toggle Button for Features */}
        <button
          type="button"
          onClick={() => setShowFeatures(!showFeatures)}
          className="bg-blue-500 text-white px-4 mx-4 py-2 rounded-lg mb-4 mt-6"
        >
          {showFeatures ? "Hide" : "Add"} Features
        </button> <br />

        {/* Features */}

        {showFeatures && (
          <>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              Features
            </h2>
            {features.map((feature, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-row gap-6 " >
                  {/* feature_logo */}
                  <div className="w-full" >
                    <label htmlFor="feature_logo">Feature logo</label>
                    <input
                      type="file"
                      id="feature_logo"
                      accept="image/*"
                      onChange={(e) => {
                        const newFeatures = [...features];
                        newFeatures[index].feature_logo = e.target.files[0];
                        setFeatures(newFeatures);
                      }}
                      className="w-full px-4 py-2 my-2 mb-2 border-2 rounded-lg border-gray-300"
                    />
                  </div>
                  {/* feature_title */}
                  <div className="w-full" >
                    <label htmlFor="feature_title">Feature Title </label>
                    <input
                      type="text"
                      id="feature_title"
                      placeholder="Feature Title"
                      className="w-full px-4 py-2 my-2 rounded-lg mb-2 border-2 border-gray-300"
                      value={feature.feature_title}
                      onChange={(e) => {
                        const newFeatures = [...features];
                        newFeatures[index].feature_title = e.target.value;
                        setFeatures(newFeatures);
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="feature_description">Feature Description</label>
                  <textarea
                    placeholder="Feature Description"
                    rows="5"
                    id="feature_description"
                    className="w-full rounded-lg px-4 my-2 py-2 border-2 border-gray-300"
                    value={feature.feature_description}
                    onChange={(e) => {
                      const newFeatures = [...features];
                      newFeatures[index].feature_description = e.target.value;
                      setFeatures(newFeatures);
                    }}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddFeature}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Add Feature
            </button> <br />
          </>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 mx-5 bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddServicePage;
