import {
    createBrowserRouter,
} from "react-router-dom";
import ServicePage from "../components/clientSide/ServiceComponent/Service/Service";
import MainLayout from "../layout/MainLayout";
import AddUser from "../pages/adminSide/AddUser/AddUser";
import AboutUsPage from "../pages/clientSide/aboutUsPage/AboutUsPage";
import CareerDetailsPage from "../pages/clientSide/CareerDetailsPage/CareerDetailsPage";
import CareerPage from "../pages/clientSide/CareerPage/CareerPage";
import ContactUsPage from "../pages/clientSide/ContactUsPage/ContactUsPage";
import HomePage from "../pages/clientSide/homePage/HomePage";
import LoginPage from "../pages/clientSide/LoginPage/LoginPage";
import RegisterPage from "../pages/clientSide/RegisterPage/RegisterPage";
import ServiceDetailsPage from "../pages/clientSide/ServiceDetailsPage/ServiceDetailsPage";
import DashboardLayout from "../layout/DashboardLayout";
import PortfolioPage from "../pages/clientSide/portfolioPage/PortfolioPage";
import AdminRegistration from "../pages/adminSide/admin-registration/AdminRegistration";
import AdminLoginPage from "../pages/adminSide/admin-login/AdminLoginPage";
import AddServicePage from "../pages/adminSide/servicePage/addServicePage/AddServicePage";
import ManageServicePage from "../pages/adminSide/servicePage/manageServicePage/ManageServicePage";
import AddCareerPage from "../pages/adminSide/Career/AddCareerPage";
import ManageCareerPage from "../pages/adminSide/Career/ManageCareerPage";
import AddProductPage from "../pages/adminSide/Product/AddProductPage";
import ManageProductPage from "../pages/adminSide/Product/ManageProductPage";
import UpdateServicePage from "../pages/adminSide/servicePage/UpdateServicePage";
import DashboardPage from "../pages/adminSide/dashboard/DashboardPage";

import OurTeamPage from "../pages/clientSide/ourTeamPage/OurTeamPage";
import ProductUpdatePage from "../pages/adminSide/Product/ProductUpdatePage";
import CompanyProfilePage from "../pages/clientSide/companyProfilePage/CompanyProfilePage";
import AllApplication from "../components/adminSide/Application/AllApplication";
import GetSingleApplication from "../components/adminSide/Application/GetSingleApplication";
import ApplicationPage from "../pages/clientSide/CareerDetailsPage/ApplicationPage";
import UpdateCareerPage from "../pages/adminSide/Career/UpdateCareerPage";
import ProductDetailsPage from "../pages/clientSide/productDetailsPage/ProductDetailsPage";
import PrivateRoutes from "./PrivateRoutes";
import RequestDemo from "../pages/clientSide/productDetailsPage/RequestDemo";
import ManageTeam from "../pages/adminSide/teamRelatedPage/manageTeam/ManageTeam";






const router = createBrowserRouter([

    // FrontEnd routes 
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/about-us",
                element: <AboutUsPage></AboutUsPage>
            },
            {
                path: '/contact-us',
                element: <ContactUsPage></ContactUsPage>
            },
            {
                path: '/career',
                element: <CareerPage></CareerPage>
            },
            {
                path: '/career/:id',
                element: <CareerDetailsPage></CareerDetailsPage>,
            },
            {
                path: '/apply-job/:id',
                element: <ApplicationPage></ApplicationPage>,
            },
            {
                path: '/services',
                element: <ServicePage></ServicePage>
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetailsPage></ServiceDetailsPage>
            },
            {
                path: '/productsDetails/:id',
                element: <ProductDetailsPage></ProductDetailsPage>
            },

            {
                path: "/login",
                element: <LoginPage></LoginPage>
            },
           

            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            },
            {
                path: '/portfolio',
                element: <PortfolioPage></PortfolioPage>
            },
            

           
            {
                path: "/our-team",
                element: <OurTeamPage></OurTeamPage>
            },
            {
                path: "/company-profile",
                element: <CompanyProfilePage></CompanyProfilePage>
            },
            {
                path: "/request-demo",
                element: <RequestDemo></RequestDemo>
            }

        ]
    },

    // Dashboard routes 

    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path:"/dashboard",
                element:<DashboardPage></DashboardPage>
            },
            {
                path: "add-service",
                element: <AddServicePage></AddServicePage>
            },
            {
                path: "manage-service",
                element: <ManageServicePage></ManageServicePage>
            },
            {
                path: "update-service/:id",
                element: <UpdateServicePage></UpdateServicePage>
            },
            {
                path: "add-career",
                element: <AddCareerPage></AddCareerPage>
            },
            {
                path : "career-update/:id",
                element : <UpdateCareerPage></UpdateCareerPage>
            },
            {
                path: "manage-career",
                element: <ManageCareerPage></ManageCareerPage>
            },
            {
                path: "add-product",
                element: <AddProductPage></AddProductPage>
            },
            {
                path: "application",
                element: <AllApplication></AllApplication>
            },
            {
                path: "getSingleApplication/:id",
                element: <GetSingleApplication></GetSingleApplication>
            },
            {
                path: "manage-product",
                element: <ManageProductPage></ManageProductPage>
            },
            {
                path : "/dashboard/product/update/:id",
                element : <ProductUpdatePage></ProductUpdatePage>
            },
            {
                path: "/dashboard/manage-team",
                element: <ManageTeam></ManageTeam>
            }
        ]
    },
    {
        path: "/admin-registration",
        element: <AdminRegistration></AdminRegistration>
    },
    {
        path: "/admin-login",
        element: <AdminLoginPage></AdminLoginPage>
    }
]);

export default router;