import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const ProductVideoTable = () => {
    const axiosPublic = useAxiosPublic();
    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };
    const { data: productVideoData = [], refetch, isError, isLoading } = useQuery({
        queryKey: ['productVideoData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/product-all-videos`, config);
            console.log(res.data.data)
            return res.data.data;
        }
    });
    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-bold mb-6 text-center">Video Management</h1>
            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Video URL</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Upload Date</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">React Basics</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <a
                                href="https://example.com/react-basics.mp4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                View Video
                            </a>
                        </td>
                        <td className="border border-gray-300 px-4 py-2">2024-12-20</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <div className="flex space-x-2">
                                <button className="text-blue-500 hover:text-blue-700">
                                    <FaEdit />
                                </button>
                                <button className="text-red-500 hover:text-red-700">
                                    <FaTrash />
                                </button>
                            </div>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-4 py-2">Advanced React</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <a
                                href="https://example.com/advanced-react.mp4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 hover:underline"
                            >
                                View Video
                            </a>
                        </td>
                        <td className="border border-gray-300 px-4 py-2">2024-12-21</td>
                        <td className="border border-gray-300 px-4 py-2">
                            <div className="flex space-x-2">
                                <button className="text-blue-500 hover:text-blue-700">
                                    <FaEdit />
                                </button>
                                <button className="text-red-500 hover:text-red-700">
                                    <FaTrash />
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ProductVideoTable;
