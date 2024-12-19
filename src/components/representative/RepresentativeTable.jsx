import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const representativeData = [
    // Representative data...
];

const RepresentativeTable = () => {
    const axiosPublic = useAxiosPublic();
    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };
    const { data: representativeData = [],refetch,isLoading,isError } = useQuery({
        queryKey: ['representativeData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/representative`, config);
            console.log(res)
            return res.data.data;
        }
    });
    return (
        <div className="overflow-x-auto p-4">
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">#</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Phone</th>
                        <th className="border border-gray-300 px-4 py-2">Role</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Image</th>
                        <th className="border border-gray-300 px-4 py-2">Profile</th>
                    </tr>
                </thead>
                <tbody>
                    {representativeData.map((representative, index) => (
                        <tr key={representative._id} className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                {index + 1}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {representative.name || "N/A"}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                {representative.phone || "N/A"}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 capitalize">
                                {representative.role || "N/A"}
                            </td>
                            <td
                                className={`border border-gray-300 px-4 py-2 text-center ${representative.status ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {representative.status ? "Active" : "Inactive"}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                {representative.image ? (
                                    <img
                                        src={representative.image}
                                        alt={`Profile of ${representative.name}`}
                                        className="w-16 h-16 rounded-full mx-auto"
                                    />
                                ) : (
                                    "No Image"
                                )}
                            </td>
                            <td className="border border-gray-300 px-4 py-2 text-center">
                                <Link
                                    to={`/dashboard/rep-profile/${representative._id}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    Profile
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RepresentativeTable;