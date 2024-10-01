import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import serviceStore from "../../../../api-request/service-api/serviceApi";

const AddServicePage = () => {
  const {createServiceApi} = serviceStore();
  const [formData, setFormData] = useState({
    nav_logo: "",
    nav_title: "",
    nav_description: "",
    main_title: "",
    banner_img: "",
    tag_line: "",
    description_feature: [
      {
        description_logo: "",
        description_heading: "",
        description: "",
      },
    ],
    feature: [
      {
        feature_logo: "",
        feature_title: "",
        feature_description: "",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleNestedImageChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setFormData((prevData) => {
        const updatedFeatures = [...prevData.description_feature];
        updatedFeatures[index].description_logo = base64String;
        return { ...prevData, description_feature: updatedFeatures };
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleNestedChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedFeatures = [...prevData.description_feature];
      updatedFeatures[index][name] = value;
      return { ...prevData, description_feature: updatedFeatures };
    });
  };

  const handleFeatureChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedFeatures = [...prevData.feature];
      updatedFeatures[index][name] = value;
      return { ...prevData, feature: updatedFeatures };
    });
  };

  const handleImageChange = (e, field) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setFormData((prevData) => ({
        ...prevData,
        [field]: base64String,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleFeatureImageChange = (e, index) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      setFormData((prevData) => {
        const updatedFeatures = [...prevData.feature];
        updatedFeatures[index].feature_logo = base64String;
        return { ...prevData, feature: updatedFeatures };
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const addDescriptionFeature = () => {
    setFormData((prevData) => ({
      ...prevData,
      description_feature: [
        ...prevData.description_feature,
        {
          description_logo: "",
          description_heading: "",
          description: "",
        },
      ],
    }));
  };

  const addFeature = () => {
    setFormData((prevData) => ({
      ...prevData,
      feature: [
        ...prevData.feature,
        {
          feature_logo: "",
          feature_title: "",
          feature_description: "",
        },
      ],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await createServiceApi(formData);
    if(res){
      toast.success("Service successfully");
    }else{
      toast.error("Failed to create service");
    }
  };

  return (
    <div className="w-full min-h-screen p-6 bg-white">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add Service</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-1/2 mb-4">
            <label htmlFor="nav_logo" className="block text-lg font-medium text-gray-700 mb-2">
              Nav logo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "nav_logo")}
              id="nav_logo"
              name="nav_logo"
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              
            />
          </div>

          <div className="w-1/2 mb-4">
            <label htmlFor="nav_title" className="block text-lg font-medium text-gray-700 mb-2">
              Nav Title
            </label>
            <input
              type="text"
              id="nav_title"
              name="nav_title"
              value={formData.nav_title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              placeholder="nav title"
              
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="nav_description" className="block text-lg font-medium text-gray-700 mb-2">
            Nav Description
          </label>
          <textarea
            id="nav_description"
            name="nav_description"
            value={formData.nav_description}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            placeholder="Enter nav description"
            rows="4"
            
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-1/2 mb-4">
            <label htmlFor="main_title" className="block text-lg font-medium text-gray-700 mb-2">
              Main Title
            </label>
            <input
              type="text"
              id="main_title"
              name="main_title"
              value={formData.main_title}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              placeholder="Enter main title"
              
            />
          </div>

          <div className="w-1/2 mb-4">
            <label htmlFor="banner_img" className="block text-lg font-medium text-gray-700 mb-2">
              Banner Img
            </label>
            <input
              type="file"
              id="banner_img"
              name="banner_img"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "banner_img")}
              className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
              
            />
          </div>
        </div>

        <div className="w-1/2 mb-4">
          <label htmlFor="tag_line" className="block text-lg font-medium text-gray-700 mb-2">
            Tag Line
          </label>
          <input
            type="text"
            id="tag_line"
            name="tag_line"
            value={formData.tag_line}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
            placeholder="Enter tag line"
            
          />
        </div>

        <h3 className="text-center my-6 text-2xl font-semibold">Description Feature</h3>
        {formData.description_feature.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-1/2 mb-4">
                <label htmlFor="description_logo" className="block text-lg font-medium text-gray-700 mb-2">
                  Description Logo
                </label>
                <input
                  type="file"
                  id="description_logo"
                  accept="image/*"
                  onChange={(e) => handleNestedImageChange(e, index)}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                  
                />
              </div>

              <div className="w-1/2 mb-4">
                <label htmlFor="description_heading" className="block text-lg font-medium text-gray-700 mb-2">
                  Description Heading
                </label>
                <input
                  type="text"
                  id="description_heading"
                  name="description_heading"
                  value={item.description_heading}
                  onChange={(e) => handleNestedChange(e, index)}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                  placeholder="Enter description heading"
                  
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="description" className="block text-lg font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={item.description}
                onChange={(e) => handleNestedChange(e, index)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                placeholder="Enter description"
                rows="4"
                
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addDescriptionFeature}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add More Description Features
        </button>

        <h3 className="text-center my-6 text-2xl font-semibold">Features</h3>
        {formData.feature.map((item, index) => (
          <div key={index}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-1/2 mb-4">
                <label htmlFor="feature_logo" className="block text-lg font-medium text-gray-700 mb-2">
                  Feature Logo
                </label>
                <input
                  type="file"
                  id="feature_logo"
                  accept="image/*"
                  onChange={(e) => handleFeatureImageChange(e, index)}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                  
                />
              </div>

              <div className="w-1/2 mb-4">
                <label htmlFor="feature_title" className="block text-lg font-medium text-gray-700 mb-2">
                  Feature Title
                </label>
                <input
                  type="text"
                  id="feature_title"
                  name="feature_title"
                  value={item.feature_title}
                  onChange={(e) => handleFeatureChange(e, index)}
                  className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                  placeholder="Enter feature title"
                  
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="feature_description" className="block text-lg font-medium text-gray-700 mb-2">
                Feature Description
              </label>
              <textarea
                id="feature_description"
                name="feature_description"
                value={item.feature_description}
                onChange={(e) => handleFeatureChange(e, index)}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                placeholder="Enter feature description"
                rows="4"
                
              />
            </div>
          </div>
        ))}
        <button
          type="button"
          onClick={addFeature}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add More Features
        </button>

        <button
          type="submit"
          className="w-full mt-6 bg-green-500 text-white px-6 py-3 rounded-lg font-medium"
        >
          Submit
        </button>
      </form>
      <Toaster />
    </div>
  );
};

export default AddServicePage;