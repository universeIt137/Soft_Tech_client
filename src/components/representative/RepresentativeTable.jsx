import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import { updateAlert } from "../../helper/updateAlert";
import Swal from "sweetalert2";


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
    const { data: representativeData = [], refetch, isLoading, isError } = useQuery({
        queryKey: ['representativeData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/representative`, config);
            return res.data.data;
        }
    });
    const representativeRoleUpdate = async (id) => {
        console.log(id)
        try {
            let resp = await updateAlert();
            if (resp.isConfirmed) {
                let res = await axiosPublic.put(`/representative/status-update/${id}`, {}, config);
                if (res) {
                    Swal.fire({
                        title: "Status Updated",
                        icon: "success",
                        confirmButtonText: "Okay"
                    })
                    refetch();
                    return;
                }
            }
        } catch (error) {
            Swal.fire({
                title: "Failed to update status",
                icon: "error",
                confirmButtonText: "Okay"
            })
        }
    }
    return (
        <div className="overflow-x-auto p-4">
            <p className="font-bold text-2xl text-center">Manage Representative</p>
            <table className="table-auto w-full border-collapse border border-gray-300 text-[12px]">
                <thead className="bg-gray-200">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">#</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Phone</th>
                        <th className="border border-gray-300 px-4 py-2">Role</th>
                        <th className="border border-gray-300 px-4 py-2">Status</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
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
                            <td className="font-bold border">
                                <div className="form-control">
                                    <div className="flex items-center justify-center gap-2">
                                        <button onClick={() => representativeRoleUpdate(representative?._id)} >
                                            {
                                                representative?.role === "representative" ? <>
                                                    <FaToggleOn className="text-green-500 text-lg " />

                                                </> : <><FaToggleOff className="text-red-500 text-lg
                                            "   /></>
                                            }
                                        </button>
                                    </div>
                                </div>
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
