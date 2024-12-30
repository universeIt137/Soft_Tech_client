import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import formatDateTime from '../../../hooks/useDateTime';
import { FaToggleOff, FaToggleOn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { updateAlert } from '../../../helper/updateAlert';
import Swal from 'sweetalert2';

const AllProductRequest = () => {

    const getToken = localStorage.getItem("admin_token");
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            Authorization: getToken
        },
    };

    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosPublic.get('/GetAllRequestInfoByAdmin', config);
            return res.data.data;
        }
    })

    const UpdateStatus = async (id) => {
        // console.log(id)
        try {
            let resp = await updateAlert();
            if (resp.isConfirmed) {
                console.log("hello")
                let res = await axiosPublic.get(`/UpdateRequestStatus/${id}`, config);
                console.log("hello2")

                if (res) {
                    Swal.fire({
                        title: "Status Updated",
                        icon: "success",
                        confirmButtonText: "Okay"
                    })
                    refetch();

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
        <div className="overflow-x-auto w-full my-5">
            <p className="text-2xl font-bold text-center mb-2">All Product Request List</p>
            <table className="min-w-full bg-white border border-gray-300 text-[12px]">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">#</th>
                        <th className="px-4 py-2 border">Representative Name</th>
                        <th className="px-4 py-2 border">Client Name</th>
                        <th className="px-4 py-2 border">Product</th>
                        <th className="px-4 py-2 border">Duration (months)</th>
                        <th className="px-4 py-2 border">Status</th>
                        <th className="px-4 py-2 border">Requested Date</th>
                        {/* <th className="px-4 py-2 border">Actions</th> */}
                    </tr>
                </thead>
                <tbody>


                    {requests?.map((content, index) => {
                        const { date, time } = formatDateTime(content?.createdAt);
                        return (
                            <tr key={content?._id} className="text-center">
                                <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                <td className="px-4 py-2 border font-semibold">
                                    <Link className='text-blue-600' to={`/dashboard/rep-profile/${content?.representative_id?._id}`}>
                                        {content?.representative_id?.name}
                                    </Link>
                                    <p>{content?.representative_id?.phone}</p>

                                </td>
                                <td className="px-4 py-2 border font-semibold">
                                    <Link className='text-blue-600' to={`/dashboard/client-profile/${content?.client_id?._id}`}>
                                        <p>{content?.client_id?.name}</p>
                                    </Link>

                                </td>
                                <td className="px-4 py-2 border font-semibold">
                                    <Link to={`/productsDetails/${content?.product_id?._id}`}>
                                        {content?.product_id?.nav_title}
                                    </Link>
                                </td>
                                <td className="px-4 py-2 border font-semibold">{content?.month}</td>
                                <td className="font-bold border">
                                    <div className="form-control">
                                        <div className="flex items-center justify-center gap-2">
                                            <button onClick={() => UpdateStatus(content?._id)} >
                                                {
                                                    content?.status === true ? <>
                                                        <FaToggleOn className="text-green-500 text-lg " />

                                                    </> : <><FaToggleOff className="text-red-500 text-lg" /></>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                {/* <td className="px-4 py-2 border font-semibold">{content?.status ? "Approved" : "Pending"}</td> */}
                                <td className="px-4 py-2 border font-semibold">{date}</td>
                                {/* <td className="px-4 py-2 border">
                                <button
                                    onClick={() => handleDelete(content?._id)}
                                    className="px-2 py-1 bg-red-500 text-white rounded"
                                >
                                    Delete
                                </button>
                            </td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default AllProductRequest;