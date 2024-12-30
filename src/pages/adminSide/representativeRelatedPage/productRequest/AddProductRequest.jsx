import React, { useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';

const AddProductRequest = () => {

    const getToken = localStorage.getItem("representativeToken");
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            Authorization: getToken
        },
    };

    const fetchData = async () => {
        const [clients, products] = await Promise.all([
            axiosPublic.get('/allClientByRepresentative', config),
            axiosPublic.get('/get-products')
        ]);

        return {
            clients: clients.data.data,
            products: products.data.data
        };
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ['combinedData'],
        queryFn: fetchData
    });

    const clients = data?.clients || [];
    const products = data?.products || [];



    // console.log(clients);


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const client_id = form.client_id.value;
        const month = form.month.value;
        const product_id = form.product_id.value;






        setLoading(true);

        // Simulate form submission
        try {
            const data = { client_id, product_id, month }

            console.log(data);
            axiosPublic.post(`/MakeProductRequest`, data, config)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Data has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        setLoading(false);

                    }
                })

        } catch (error) {
            console.error("Error submitting form:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form action="" onSubmit={handleSubmit} className="">
                <p className="text-center text-3xl font-bold my-4">Product Request</p>
                <div className="grid lg:grid-cols-3 w-10/12 mx-auto border p-3 rounded-lg mb-5 justify-center gap-4">
                    <div className="">
                        <select name='client_id' className="select w-full ">
                            <option disabled selected>Pick your Client</option>
                            {
                                clients?.map(client => <option value={client._id} key={client._id}>{client?.name}</option>)
                            }


                        </select>
                    </div>

                    <div className="">
                        <select name='product_id' className="select w-full ">
                            <option disabled selected>Pick your Product</option>
                            {
                                products?.map(product => <option value={product._id} key={product._id}>{product?.nav_title}</option>)
                            }


                        </select>
                    </div>

                    <div>
                        <input type="number" name="month" className="w-full px-4 py-[10px]  border rounded-md" placeholder='Enter duration in month'/>
                    </div>
                </div>

                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProductRequest;