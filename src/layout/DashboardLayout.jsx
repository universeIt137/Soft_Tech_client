import React from 'react';
import Sidebar from '../components/adminSide/Sidebar';
import AdminNavbar from '../components/adminSide/AdminNavbar';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import DashboardPage from '../components/adminSide/DashboardPage';

const DashboardLayout = () => {

    
    return (
        <div className="flex h-screen bg-gray-50">
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            {/* Sidebar */}
            <Sidebar></Sidebar>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Navbar */}
                <AdminNavbar></AdminNavbar>

                {/* Main Dashboard Content */}
                <main className="flex-1 p-8 overflow-auto">
                    <Outlet></Outlet>
                </main>
                    <DashboardPage/>
            </div>
        </div>
    );
};

export default DashboardLayout;