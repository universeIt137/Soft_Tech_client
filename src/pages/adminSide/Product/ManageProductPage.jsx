import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageProductPage = () => {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    // Fetch products from backend
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/products");
                setProducts(response.data);
            } catch (error) {
                console.error("Error fetching products", error);
            }
        };

        fetchProducts();
    }, []);

    // Handle product delete
    const handleDelete = async (productId) => {
        try {
            await axios.delete(`http://localhost:5000/api/products/${productId}`);
            setMessage("Product deleted successfully!");
            setProducts(products.filter((product) => product._id !== productId));
        } catch (error) {
            setMessage("Error deleting product.");
        }
    };

    // Handle click on product title to show product details
    const handleViewProduct = (productId) => {
        navigate(`/products/${productId}`);
    };

    return (
        <div className="container mx-auto py-8">
            <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
                Manage Products
            </h2>

            {/* Success/Error Message */}
            {message && (
                <div
                    className={`text-center text-lg mb-4 ${message.includes("successfully") ? "text-green-500" : "text-red-500"
                        }`}
                >
                    {message}
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="w-full bg-gray-800 text-white">
                            <th className="text-left py-3 px-4">Product Name</th>
                            <th className="text-left py-3 px-4">Product Image</th>
                            <th className="text-left py-3 px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product._id} className="border-t border-gray-300">
                                <td className="py-3 px-4">
                                    <button
                                        className="text-text_blue hover:text-text_hover font-semibold"
                                        onClick={() => handleViewProduct(product._id)}
                                    >
                                        {product.productName}
                                    </button>
                                </td>
                                <td className="py-3 px-4">
                                    <img
                                        src={product.productImage}
                                        alt={product.productName}
                                        className="w-16 h-16 object-cover"
                                    />
                                </td>
                                <td className="py-3 px-4">
                                    <button
                                        className="text-bg_btn_primary hover:text-bg_btn_hover mr-4"
                                        onClick={() => navigate(`/edit-product/${product._id}`)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleDelete(product._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    {/* Example row with static title, product image, and action buttons */}
                    <tbody>
                        <tr className="border-t border-gray-300">
                            <td className="py-3 px-4">Product Title</td>
                            <td className="py-3 px-4">
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="Product Placeholder"
                                    className="w-16 h-16 object-cover"
                                />
                            </td>
                            <td className="py-3 px-4 gap-2">
                                <button className="bg-text_blue outline-none border-0 hover:bg-text_hover text-white px-4 py-2 rounded-md mr-2" onClick={()=>document.getElementById('my_modal_1').showModal()}>Update</button>
                                <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn mr-2">Update</button>
                                        <button className="btn">Close</button>
                                    </form>
                                    </div>
                                </div>
                                </dialog>

                                <button className="bg-red-500 outline-none border-0 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={() => document.getElementById('my_modal_2').showModal()}>Delete</button>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn mr-2">Update</button>
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProductPage;
