import React, { useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import formatDateTime from '../../../../hooks/useDateTime';

const MyProductRequest = () => {

    const getToken = localStorage.getItem("representativeToken");
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            Authorization: getToken
        },
    };

    const { data: requests = [] } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosPublic.get('/GetAllRequestInfo', config);
            return res.data.data;
        }
    })

    return (
        <div className="overflow-x-auto w-full my-5">
        <p className="text-2xl font-bold text-center mb-2">My Request List</p>
        <table className="min-w-full bg-white border border-gray-300 text-[12px]">
            <thead>
                <tr>
                    <th className="px-4 py-2 border">#</th>
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
                            <td className="px-4 py-2 border font-semibold">{content?.client_id?.name}</td>
                            <td className="px-4 py-2 border font-semibold">{content?.product_id?.nav_title}</td>
                            <td className="px-4 py-2 border font-semibold">{content?.month}</td>
                            <td className="px-4 py-2 border font-semibold">{content?.status ? "Approved" : "Pending"}</td>
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

export default MyProductRequest;