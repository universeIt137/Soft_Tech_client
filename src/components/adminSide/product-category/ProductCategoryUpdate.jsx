import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { uploadImageToCloudinary } from "../../../uploadImage/UpdateImg";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { updateAlert } from "../../../helper/updateAlert";
import { Editor } from "@tinymce/tinymce-react";

const Product = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const adminToken = localStorage.getItem("admin_token");
    const [loader, setLoader] = useState(false);
    const [tinyDescription, setTinyDescription] = useState("");

    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const { data: categoryUpdateData = {}, refetch, isError, isLoading } = useQuery({
        queryKey: ["categoryUpdateData", id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/single-product-category/${id}`, config);
            return res.data.data;
        },
    });

    const [formData, setFormData] = useState({
        categoryName: "",
        video: "",
        link: "",
        img: null,
        package: [],
    });

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handlePackageChange = (index, field, value) => {
        setFormData((prev) => {
            const updatedPackage = [...prev.package];
            updatedPackage[index] = {
                ...updatedPackage[index],
                [field]: value,
            };
            return { ...prev, package: updatedPackage };
        });
    };

    const handleDescriptionChange = (content) => {
        setTinyDescription(content);
    };

    useEffect(() => {
        if (categoryUpdateData?.package) {
            setFormData((prev) => ({
                ...prev,
                categoryName: categoryUpdateData?.categoryName || "",
                video: categoryUpdateData?.video || "",
                link: categoryUpdateData?.link || "",
                img: categoryUpdateData?.img || null,
                package: categoryUpdateData.package,
            }));
        }
    }, [categoryUpdateData]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.img) {
            try {
                const uploadedImage = await uploadImageToCloudinary(formData.img);
                formData.img = uploadedImage;
            } catch (error) {
                toast.error("Image upload failed!");
                return;
            }
        }

        let resp = await updateAlert();
        try {
            if (resp.isConfirmed) {
                setLoader(true);
                let res = await axiosPublic.put(`/update-product-category/${id}`, formData, config);
                setLoader(false);
                if (res) {
                    toast.success("Product updated successfully!");
                    refetch();
                    return;
                }
            }
        } catch (error) {
            setLoader(false);
            toast.error("Failed to update product!");
        }
    };

    if (isLoading) {
        return <div className="flex flex-col justify-center items-center h-screen"><p>Loading...</p></div>;
    }

    if (isError) {
        return <div className="flex flex-col justify-center items-center h-screen"><p>Error loading data!</p></div>;
    }

    return (
        <div>
            <Helmet>
                <title>Dashboard | Update Product</title>
            </Helmet>

            <h2 className="text-xl text-center my-6 font-bold">Update Product</h2>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-x-4">
                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">Category Name</label>
                        <input
                            type="text"
                            name="categoryName"
                            value={formData.categoryName || ""}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">Video</label>
                        <input
                            type="text"
                            name="video"
                            value={formData.video || ""}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">Live Link</label>
                        <input
                            type="text"
                            name="link"
                            value={formData.link || ""}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium text-gray-700 mb-2">Image</label>
                        <input
                            type="file"
                            name="img"
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                        />
                    </div>
                </div>

                {formData.package.map((item, i) => (
                    <div className="my-10" key={i}>
                        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">Total Page</label>
                                <input
                                    type="text"
                                    value={item.totalPage || ""}
                                    onChange={(e) => handlePackageChange(i, "totalPage", e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">Delivery Time</label>
                                <input
                                    type="text"
                                    value={item.deliveryTime || ""}
                                    onChange={(e) => handlePackageChange(i, "deliveryTime", e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">Price</label>
                                <input
                                    type="text"
                                    value={item.price || ""}
                                    onChange={(e) => handlePackageChange(i, "price", e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                                />
                            </div>

                            <div>
                                <label className="block text-lg font-medium text-gray-700 mb-2">Representative Percentage</label>
                                <input
                                    type="text"
                                    value={item.representativePercentange || ""}
                                    onChange={(e) => handlePackageChange(i, "representativePercentange", e.target.value)}
                                    className="w-full px-4 py-2 rounded-lg border-2 border-gray-300"
                                />
                            </div>
                        </div>

                        <div className="p-2 w-full mb-10 h-full">
                            <label className="block text-lg font-medium text-gray-700 mb-2">Features</label>
                            <Editor
                                apiKey="atnary0we9a0nuqjzgtnpxyd0arpbwud7ocxkjxqjtaab3nm"
                                value={formData.package[i]?.features || ""} // Set the default value
                                init={{
                                    height: 500,
                                    menubar: false,
                                    plugins: [
                                        "advlist autolink lists link image charmap preview anchor",
                                        "searchreplace visualblocks code fullscreen",
                                        "insertdatetime media table paste code help wordcount",
                                    ],
                                    toolbar:
                                        "undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | removeformat | help",
                                }}
                                onEditorChange={(content) =>
                                    handlePackageChange(i, "features", content) // Update the corresponding package field
                                }
                            />
                        </div>
                    </div>
                ))}

                <div className="text-center mt-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                        {loader ? "Updating..." : "Update"}
                    </button>
                </div>
            </form>
            <Toaster />
        </div>
    );
};

export default Product;
