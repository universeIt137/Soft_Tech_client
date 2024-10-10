import React, { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (user) {
        return children;
    }

    if (loading) {
        return <>
            <div className="min-h-screen flex justify-center">
                <span className="loading loading-ring w-52 text-blue-600"></span>
            </div>
        </>
    }

    return <Navigate to={'/admin-login'}></Navigate>

    return (
        <div>

        </div>
    );
};

export default PrivateRoutes;