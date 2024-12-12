import React from 'react';
import { Helmet } from 'react-helmet-async';

const ProfileRep = () => {
    // Data: 10 arrays of objects representing management personnel
    const managementData = [
        { id: 1, name: 'Alice Johnson', phone: '123-456-7890', referNo: "AL-0012", division: "Dhaka", district: "Gazipur", upzilla:"Gazipur", address:"Gazipur, Dhaka", education:"B.Sc in Computer Science", email: 'alice@company.com', experience: 15, imgUrl: 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp' },


    ];

    return (
        <div className='w-11/12 mx-auto ' >
            <Helmet>
                <title>Representative Information</title>
            </Helmet>
            <div className="  gap-11  lg:gap-6 justify-between ">
                <p className="text-4xl font-bold text-center my-2">Profile Information</p>
                {managementData?.map(({ id, name, phone, referNo, division, district, upzilla, address, education, email, experience, imgUrl }) => (
                    <div key={id} className="bg-gradient-to-r from-[#302ead] to-[#061a8b] bg-opacity-90 p-1 rounded-lg text-black">
                        <div className="relative bg-gray-100 rounded-md shadow-md">
                            <div className="relative">
                                <div className="flex gap-1 justify-end p-5 items-center">
                                    <img className="h-6 object-cover" src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723544696/UniverseIT/Logo/xvlfi7xrapeoabxyzjji.png" alt="Logo" />
                                </div>
                                <div className="h-[120px] relative flex flex-col justify-center items-center gap-5">
                                    <div className="bg-primary/70 size-28 rounded-full relative overflow-hidden">
                                        <img
                                            className="w-full h-full rounded-full object-cover p-1"
                                            src={imgUrl}
                                            alt={name}
                                        />
                                    </div>

                                </div>

                                <div className=" flex justify-around w-3/4 shadow-sm py-4 rounded-lg mx-auto border">
                                    <div className="space-y-3">
                                        <h2 className="text-base font-bold capitalize">Name: {name}</h2>

                                        <h2 className="text-sm"><span className="font-bold">Phone: </span>{phone}</h2>
                                        <h2 className="text-sm"><span className="font-bold">Division: </span>{division}</h2>
                                        <h2 className="text-sm"><span className="font-bold">District: </span>{district}</h2>
                                        
                                    </div>

                                    <div className="space-y-3">
                                       
                                        
                                        <h2 className="text-sm"><span className="font-bold">Upzilla: </span>{upzilla}</h2>
                                        <h2 className="text-sm"><span className="font-bold">Address: </span>{address}</h2>
                                        <h2 className="text-sm"><span className="font-bold">Education: </span>{education}</h2>
                                    </div>

                                    
                                    
                                </div>
                                <div className="pb-7">
                                    <div className="bg-gradient-to-r from-primary to-primary/70 w-[20%] text-white font-semibold mt-5 ml-auto py-5 text-sm pl-5">
                                        <p>Refer No: {referNo}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProfileRep;
