import React, { useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import formatDateTime from '../../../../hooks/useDateTime';

const MyProductRequest = () => {

    const getToken = localStorage.getItem("representativeToken");
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    const [searchText, setSearchText] = useState('');
    const [filteredPayments, setFilteredPayments] = useState([]); // Initially empty

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


    // Filter function triggered by button click
    const handleFilter = () => {
        if (!searchText.trim()) {
            setFilteredPayments(requests); // Show all data if search text is empty
            return;
        }

        const filtered = requests.filter((payment) => {
            const representativeName = payment?.client_id?.name?.toLowerCase() || '';
            const clientName = payment?.role?.toLowerCase() || '';
            return (
                representativeName.includes(searchText.toLowerCase()) ||
                clientName.includes(searchText.toLowerCase())
            );
        });
        setFilteredPayments(filtered);
    };

    return (
        <div className="overflow-x-auto w-full my-5">
            <p className="text-2xl font-bold text-center mb-2">My Product Request List</p>
            <div className="flex items-center gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by Client Name"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="flex-grow p-2 border border-gray-300 rounded"
                />
                <button
                    onClick={handleFilter}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Filter
                </button>
                <button
                    onClick={() => {
                        setSearchText('');
                        setFilteredPayments(requests);
                    }}
                    className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                    Clear
                </button>
            </div>

            
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


                    {filteredPayments.length > 0 ? (
                        filteredPayments?.map((content, index) => {
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
                        })
                    ) : (
                        requests?.map((content, index) => {
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
                        })
                    )}



                </tbody>
            </table>
        </div>
    );
};

export default MyProductRequest;