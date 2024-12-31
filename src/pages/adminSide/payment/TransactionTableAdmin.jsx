import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import formatDateTime from '../../../hooks/useDateTime';

const TransactionTableAdmin = () => {

    const getToken = localStorage.getItem("clientToken");
    const axiosPublic = useAxiosPublic();

    const config = {
        headers: {
            Authorization: getToken
        },
    };

    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/GetClientPaymentList', config);
            return res.data.data;
        }
    })
    console.log(payments);

    return (
        <div>
            <div className="overflow-x-auto w-full my-5">
            <p className="text-2xl font-bold text-center mb-2">My Payment List</p>
            <table className="min-w-full bg-white border border-gray-300 text-[12px]">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">#</th>
                        <th className="px-4 py-2 border">Product</th>
                        <th className="px-4 py-2 border">transaction ID</th>
                        <th className="px-4 py-2 border">Duration (months)</th>
                        <th className="px-4 py-2 border">Paid Amount</th>
                        <th className="px-4 py-2 border">Due Amount</th>
                        <th className="px-4 py-2 border">Payment Date</th>
                        <th className="px-4 py-2 border">Payment Time</th>
                        {/* <th className="px-4 py-2 border">Actions</th> */}
                    </tr>
                </thead>
                <tbody>


                    {payments?.map((content, index) => {
                        const { date, time } = formatDateTime(content?.createdAt);
                        return (
                            <tr key={content?._id} className="text-center">
                                <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.product?.nav_title}</td>
                                <td className="px-4 py-2 border font-semibold">
                                    <p>{content?.transaction_id}</p>
                                </td>
                                <td className="px-4 py-2 border font-semibold">{content?.duration}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.paidAmount}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.dueAmount}</td>
                                
                                <td className="px-4 py-2 border font-semibold">{date}</td>
                                <td className="px-4 py-2 border font-semibold">{time}</td>
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
        </div>
    );
};

export default TransactionTableAdmin;