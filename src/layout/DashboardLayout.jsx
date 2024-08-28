import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/adminSide/Sidebar';

const DashboardLayout = () => {
    return (
        <>
            <Sidebar></Sidebar>
           <Outlet></Outlet>
        </>
    );
};

export default DashboardLayout;