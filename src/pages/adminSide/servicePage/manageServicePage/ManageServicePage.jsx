import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import ProductStore from '../../../../api-request/admin-api/product-api';

const ManageServicePage = () => {
    const [services, setServices] = useState([]);
    const {productList, getProductRequest} = ProductStore()

    useEffect(() => {
        (async() =>{
            await getProductRequest()
        })()
    },[])
    console.log(productList)

    const handleDelete = async (serviceId) => {
        // Delete service logic
        try {
            await axios.delete(`/api/services/${serviceId}`);
            setServices(services.filter((service) => service._id !== serviceId));
        } catch (error) {
            console.error('Error deleting service:', error);
        }
    };

    const handleUpdate = (serviceId) => {
        // Update service logic (navigate to update form)
        console.log('Navigate to update page for service:', serviceId);
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Manage Service</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead >
                        <tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
                            <th className="py-3 px-6 text-left">Sl</th>
                            <th className="py-3 px-6 text-left">Title</th>
                            <th className="py-3 px-6 text-left">Description</th>
                            <th className="py-3 px-6 text-left">Image</th>
                            <th className="py-3 px-6 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {/* Map through services array */}
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <td className="py-3 px-6 text-left whitespace-nowrap">1</td>
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <Link
                                    to="/service-details/erp-solution"
                                    className="text-text_blue hover:underline"
                                >
                                    Erp Solution
                                </Link>
                            </td>
                            <td className="py-3 px-6 text-left">This is ERP solution</td>
                            <td className="py-3 px-6 text-left">
                                <img className="w-20" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-erp-illustration_23-2149379505.jpg" alt="ERP Solution" />
                            </td>
                            <td className="py-3 px-4 gap-2">
                            <button className="bg-text_blue outline-none border-0 hover:bg-text_hover text-white px-4 py-2 rounded-md mr-2" onClick={()=>document.getElementById('my_modal_1').showModal()}>Update</button>
                                <dialog id="my_modal_1" className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Hello!</h3>
                                    <p className="py-4">Press ESC key or click the button below to close</p>
                                    <div className="modal-action">
                                    <form method="dialog">
                                        
                                        <NavLink to='/dashboard/update-service' className="btn bg-text_blue outline-none border-0 hover:bg-text_hover text-white">Update</NavLink>
                                        <button className="btn">Close</button>

                                    </form>
                                    </div>
                                </div>
                                </dialog>

                                <button className="bg-red-500 outline-none border-0 text-white px-4 py-2 rounded-md hover:bg-red-600" onClick={() => document.getElementById('my_modal_2').showModal()}>Delete</button>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn mr-2">Update</button>
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageServicePage;
