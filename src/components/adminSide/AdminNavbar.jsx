import React, { useState } from 'react';
import { IoIosNotificationsOutline } from "react-icons/io";

const AdminNavbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);

    const showHideNavbar = () => {
        setToggleNavbar(!toggleNavbar);
    }

    return (
        <div className='bg-universe_primary py-2 px-3'>
            <div className='flex justify-between items-center w-11/12 mx-auto'>
                {/* Dashboard text aligned to the left */}
                <div>
                    <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                </div>

                {/* Notification icon and profile image aligned to the right */}
                <div className='flex items-center space-x-4'>
                    {/* Notification Icon */}
                    <div className="relative">
                        <IoIosNotificationsOutline className="text-3xl p-1 rounded-md text-bg_btn_primary bg-orange-100 cursor-pointer" />
                        {/* Notification badge */}
                        <span className="absolute top-0 right-0 rounded-full bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center">3</span>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar" onClick={showHideNavbar}>
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                />
                            </div>
                        </div>

                        {/* Dropdown menu */}
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 border-2 border-red-300 p-2 shadow ${toggleNavbar ? 'block' : 'hidden'}`}
                            
                        >
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
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
