import {
    createBrowserRouter,
} from "react-router-dom";
// import DeshBoard from "../components/adminSide/DeshBoard/DeshBoard";
import DeshBoardHome from "../components/adminSide/DeshBoardHome/DeshBoardHome";
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
import RegisterComponent from './../pages/adminSide/admin-registration/RegisterComponent';
import LoginComponent from './../pages/adminSide/admin-login/LoginComponent';
import AdminLoginPage from "../pages/adminSide/admin-login/AdminLoginPage";
import InventoryPage from "../pages/clientSide/productsPages/inventoryPage/InventoryPage";
import AddServicePage from "../pages/adminSide/servicePage/addServicePage/AddServicePage";
import ManageServicePage from "../pages/adminSide/servicePage/manageServicePage/ManageServicePage";






const router = createBrowserRouter([
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
                loader: () => fetch('jobs.json')
            },
            {
                path: '/services',
                element: <ServicePage></ServicePage>
            },
            {
                path: '/serviceDetails',
                element: <ServiceDetailsPage></ServiceDetailsPage>
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
                path: '/products-inventory',
                element: <InventoryPage></InventoryPage>
            }


        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "add-service",
                element: <AddServicePage></AddServicePage>
            },
            {
                path: "manage-service",
                element: <ManageServicePage></ManageServicePage>
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