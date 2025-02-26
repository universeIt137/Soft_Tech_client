import React, { useMemo, useState } from "react";
import { createAlert } from "../../../../helper/createAlert";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";

const AddAccountInfo = () => {
    const [formData, setFormData] = useState({
        accountName: "",
        accountNumber: "",
        bankName: "",
        typeOfAccount: "",
        branchName: "",
        routingNumber: "",
    });

    const rToken = localStorage.getItem("representativeToken");

    const { data: data1 = {}, refetch } = useQuery({
        
    })

    const config = useMemo(() => ({
        headers: {
            Authorization: rToken,
        },
    }), [rToken]);

    const axiosPublic = useAxiosPublic();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        const resp = await createAlert();

        // Add Axios or Fetch API call to submit the form data to the backend
        try {
            if (resp.isConfirmed) {
                let res = await axiosPublic.post('/rep-bank-info', formData, config);
                if (res) {
                    Swal.fire({
                        icon: "success",
                        title: "Account Info Added.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                refetch();
            }

        } catch (error) {

            Swal.fire({
                icon: "error",
                title: error.response.data.msg,
                showConfirmButton: false,
                timer: 1500
            });
        }


    };

    return (
        <div className=" bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="w-full  bg-white shadow-lg rounded-lg p-6 space-y-4"
            >
                <h2 className="text-2xl font-semibold text-gray-800 text-center">
                    Account Information
                </h2>

                <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-2">
                        <label
                            htmlFor="accountName"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Account Name
                        </label>
                        <input
                            type="text"
                            id="accountName"
                            name="accountName"
                            value={formData.accountName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter account name"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="accountNumber"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Account Number
                        </label>
                        <input
                            type="text"
                            id="accountNumber"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter account number"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="bankName"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Bank Name
                        </label>
                        <input
                            type="text"
                            id="bankName"
                            name="bankName"
                            value={formData.bankName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter bank name"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="typeOfAccount"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Type of Account
                        </label>
                        <select
                            id="typeOfAccount"
                            name="typeOfAccount"
                            value={formData.typeOfAccount}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select account type</option>
                            <option value="savings">Savings</option>
                            <option value="current">Current</option>
                            <option value="business">Business</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="branchName"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Branch Name
                        </label>
                        <input
                            type="text"
                            id="branchName"
                            name="branchName"
                            value={formData.branchName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter branch name"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label
                            htmlFor="routingNumber"
                            className="block text-sm font-medium text-gray-600"
                        >
                            Routing Number
                        </label>
                        <input
                            type="text"
                            id="routingNumber"
                            name="routingNumber"
                            value={formData.routingNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter routing number"
                            required
                        />
                    </div>
                </div>

                <div className="w-1/4 mx-auto">
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddAccountInfo;
