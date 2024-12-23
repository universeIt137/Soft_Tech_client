import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { createAlert } from '../../../helper/createAlert';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { uploadImg } from '../../../uploadImage/UploadImage';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const AddClientAdmin = () => {


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const axiosPublic = useAxiosPublic();
    const adminToken = localStorage.getItem("admin_token");
    const config = {
        headers: {
            Authorization: adminToken,
        },
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const address = e.target.address.value;
        const clientImage = e.target.clientImage.files[0];
        const businessType = e.target.businessType.value;
        const productType = e.target.productType.value;

        let images = "";

        if (!clientImage?.name) {
            images = ""
        }

        images = await uploadImg(clientImage);

        const payload = {
            name,
            phone,
            password,
            confirmPassword,
            address,
            clientImage: images,
            businessType,
            productType
        };

        if (password!== confirmPassword) {
            toast.error("Password and confirm password do not match. Please try again");
            return;
        }

        try {
            const resp = await createAlert();
            if (resp.isConfirmed) {
                setLoading(true);
                const res = await axiosPublic.post('/client-create-admin', payload,config);
                setLoading(false);
                if(res){
                    Swal.fire({
                        icon:'success',
                        title: 'Client registered successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    })
                }
            }
        } catch (error) {
            setLoading(false);
            Swal.fire({
                icon: 'error',
                title: `${error.response?.data?.msg}`,
                showConfirmButton: false,
                timer: 1500,
            })
            console.error("Error creating client:", error);
        }
        e.target.reset();


    }



    return (
        <div className='w-full  ' >
            <form onSubmit={handleSubmit} className=" bg-white  p-6 rounded-lg">
                <Helmet>
                    <title>Dashboard | Add Client</title>
                </Helmet>
                <h2 className="text-2xl font-bold mb-6 text-center">Client Information Upload</h2>
                <div className='grid grid-cols-2 space-x-4 ' >
                    <div className="mb-4 flex-1 ">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Client name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter client name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Client Phone number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter phone number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 space-x-4 ' >
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Enter Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Enter Confirm Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword((prev) => !prev)}
                                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 space-x-4 ' >

                    <div>
                        <label htmlFor="address">Address</label>
                        <textarea
                            id="address"
                            name="address"
                            placeholder="Enter Address"
                            rows="4"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="clientImage" className="block text-sm font-medium text-gray-700 mb-1">
                            Image
                        </label>
                        <input
                            type="file"
                            id="clientImage"
                            name="clientImage"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className='grid grid-cols-2 space-x-4 ' >
                    <div className="mb-4">
                        <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                            Business Type
                        </label>
                        <input
                            type="text"
                            id="businessType"
                            name="businessType"
                            placeholder="Enter business type"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                            Product Name
                        </label>
                        <input
                            type="text"
                            id="productType"
                            name="productType"
                            placeholder="Enter product name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
                <div className='my-3' >
                    <button className='px-5 py-2 rounded-md shadow-md block mx-auto bg-[#4A00FF] text-white ' > {
                        loading ? "Submitting..." : "Submit"
                    } </button>
                </div>
            </form>
        </div>

    )
}


export default AddClientAdmin;