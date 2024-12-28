import React from 'react';
import formatDateTime from '../../../hooks/useDateTime';
import { Link } from 'react-router-dom';

const MessageTable = ({ allMessages }) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-300 bg-white text-sm">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">#</th>
                            <th className="px-4 py-2 border">Name</th>
                            <th className="px-4 py-2 border">Phone Number</th>
                            <th className="px-4 py-2 border">Message</th>
                            <th className="px-4 py-2 border">Status</th>
                            <th className="px-4 py-2 border">Created Date</th>
                            <th className="px-4 py-2 border">Created Time</th>
                            <th className="px-4 py-2 border">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allMessages?.map((item, index) => {
                            const { date, time } = formatDateTime(item.createdAt);
                            return (
                                <tr key={item._id} className="text-center">
                                    <td className="px-4 py-2 border">{index + 1}</td>
                                    <td className="px-4 py-2 border">{item.name || "N/A"}</td>
                                    <td className="px-4 py-2 border">{item.phoneNumber || "N/A"}</td>
                                    <td className="px-4 py-2 border">{item.message || "N/A"}</td>
                                    <td className="px-4 py-2 border">
                                        {item.status ? "Resolved" : "Pending"}
                                    </td>
                                    <td className="px-4 py-2 border">{date}</td>
                                    <td className="px-4 py-2 border">{time}</td>
                                    <td className="px-4 py-2 border space-x-2">
                                        <button className='bg-blue-600 text-white p-1 rounded-lg text-[12px]'>
                                            <Link to={`/dashboard/message-details/${item?._id}`}>
                                                Details
                                            </Link>
                                        </button>

                                    
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MessageTable;