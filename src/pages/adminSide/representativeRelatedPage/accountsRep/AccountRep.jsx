import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const AccountRep = () => {

    // Static data for bank information
    const bankInfoList = [
        {
            id: 1,
            account_name: 'Bank',
            account_no: '123-456-7890',
            bank_name: "Social Islami Bank Ltd",
            type: "Current Account",
            branch: "Gazipur",
            routing: "195090109",
            address: "Gazipur, Dhaka",
            education: "B.Sc in Computer Science",
            email: 'alice@company.com',
            experience: 15,
            imgUrl: 'https://static.vecteezy.com/system/resources/thumbnails/013/948/616/small/bank-icon-logo-design-vector.jpg',
        },

        {
            id: 1,
            account_name: 'Nogod',
            account_no: '123-456-7890',
            bank_name: "Social Islami Bank Ltd",
            type: "Current Account",
            branch: "Gazipur",
            routing: "195090109",
            address: "Gazipur, Dhaka",
            education: "B.Sc in Computer Science",
            email: 'alice@company.com',
            experience: 15,
            imgUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/7a/a1/20/7aa12018-ae38-0699-ff38-98f893227f0a/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/1200x600wa.png',
        },

        

        
    ];

    return (
        <div className="w-11/12 mx-auto my-24">
            <Helmet>
                <title>Amar Thikana | Account Representative</title>
            </Helmet>
            <div className="grid grid-cols-2 justify-center gap-6">
                {bankInfoList.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-lg p-6 w-full ">
                        {/* Profile Image */}
                        <div className="flex justify-center mb-6">
                            <img
                                src={item.imgUrl}
                                alt={item.account_name}
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>
                        {/* Details */}
                        <div className="text-gray-700">
                            <p className="mb-2">
                                <span className="font-bold">Account Name:</span> {item.account_name}
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">Account Number:</span> {item.account_no}
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">Bank Name:</span> {item.bank_name}
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">Type of Account:</span> {item.type} years
                            </p>
                            <p className="mb-2">
                                <span className="font-bold">Branch Name:</span> {item.branch}
                            </p>

                            <p className="mb-2">
                                <span className="font-bold">Routing Number:</span> {item.routing}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AccountRep;
