import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import formatDateTime from '../../../../hooks/useDateTime';

const Refers = () => {
    const getToken = localStorage.getItem("representativeToken");
    const axiosPublic = useAxiosPublic();

    const config = {
        headers: {
            Authorization: getToken,
        },
    };

    const { data: contents = [], refetch } = useQuery({
        queryKey: ['contents'],
        queryFn: async () => {
            const res = await axiosPublic.get('/representative/by-referid', config);
            return res.data.data;
        },
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won’t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic
                    .delete(`/csr/${id}`, config)
                    .then(() => {
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Data has been deleted.',
                            icon: 'success',
                        });
                        refetch(); // Refetch data after deletion
                    })
                    .catch((err) => {
                        console.error(err);
                        Swal.fire({
                            title: 'Error!',
                            text: 'Failed to delete data.',
                            icon: 'error',
                        });
                    });
            }
        });
    };

    

    return (
        <div className="overflow-x-auto w-full my-5">
            <p className="text-2xl font-bold text-center mb-2">Refers List</p>
            <table className="min-w-full bg-white border border-gray-300 text-[12px]">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border">#</th>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Phone</th>
                        <th className="px-4 py-2 border">Representative ID</th>
                        <th className="px-4 py-2 border">Joining Date</th>
                        <th className="px-4 py-2 border">Joining Time</th>
                        {/* <th className="px-4 py-2 border">Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {contents?.map((content, index) => {
                        const { date, time } = formatDateTime(content?.createdAt);
                        return (
                            <tr key={content?._id} className="text-center">
                                <td className="px-4 py-2 border font-semibold">{index + 1}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.name}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.phone}</td>
                                <td className="px-4 py-2 border font-semibold">{content?.representative_id}</td>
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
    );
};

export default Refers;
