import React from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";

const AdminNavbar = () => {
    return (
        <div className='bg-white py-2 px-3'>
            <div className='flex justify-between items-center'>
                {/* Dashboard text aligned to the left */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                </div>

                {/* Notification icon and profile image aligned to the right */}
                <div className='flex items-center space-x-4'>
                    {/* Notification Icon */}
                    <div className="relative">
                        <IoIosNotificationsOutline  className="text-3xl p-1 rounded-md text-bg_btn_primary bg-orange-100 cursor-pointer" />
                        {/* Add a notification badge if needed */}
                        <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center">3</span>
                    </div>


                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Profile"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>

                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] shadow">
                            <li><a>Profile</a> </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNavbar;
