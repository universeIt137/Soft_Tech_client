import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ManageUser = () => {
    const [data, setData] = useState([
        {
            name: 'Ishan',
            email: 'ishanran1a094@gmail.com',
            profilePhoto: 'https://via.placeholder.com/50', // Example profile photo URL
            contactNumber: '017511586238',
            status: 'Active',
        },
    ]);


    

    // Handle Delete User
    const handleDelete = (index) => {
        const updatedData = data.filter((_, i) => i !== index);
        setData(updatedData);
    };

    return (
        <div className=" px-4">
            <Helmet>
                <title>Dashboard | Manage User</title>
            </Helmet>
            <div className=" mx-auto  rounded-lg overflow-hidden">
                {/* Header */}
                <div className="text-black text-center">
                    <h2 className="text-2xl font-bold mb-5 ">User Information</h2>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full text-[12px] table-auto border-collapse">
                        <thead>
                            <tr className=" text-gray-700">
                                <th className="px-4 py-2 border font-semibold">Name</th>
                                <th className="px-4 py-2 border font-semibold">Email</th>
                                <th className="px-4 py-2 border font-semibold">See Profile</th>
                                <th className="px-4 py-2 border font-semibold">Contact Number</th>
                                <th className="px-4 py-2 border font-semibold">Status</th>
                                <th className="px-4 py-2 border font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody className='' >
                            {data.map((user, index) => (
                                <tr
                                    key={index}
                                    className="text-center  odd:bg-white even:bg-gray-100 hover:bg-blue-100 transition-colors"
                                >
                                    <td className="px-4 py-2 border">{user.name}</td>
                                    <td className="px-4 py-2 border">{user.email}</td>
                                    <td className="px-4 py-2 border">
                                        <Link to={`/dashboard/admin-profile/${user?._id}`}>
                                            <button
                                                className="px-3 py-1 bg-primary text-white rounded hover:bg-red-600 transition"
                                            >
                                                Profile
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="px-4 py-2 border">{user.contactNumber}</td>
                                    <td className="px-4 py-2 border">
                                        <span
                                            className={`px-2 py-1 text-xs font-semibold rounded-full ${user.status === 'Active'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-red-100 text-red-700'
                                                }`}
                                        >
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <button
                                            onClick={() => handleDelete(index)}
                                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    );
};

export default ManageUser;
