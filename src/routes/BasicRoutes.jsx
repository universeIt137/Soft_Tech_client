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
import UpdateMember from "../pages/adminSide/teamRelatedPage/updateMember/UpdateMember";
import CreatePortfolioPage from './../pages/adminSide/portfolioPage/CreatePortfolioPage';
import AllPortfolioPage from "../pages/adminSide/portfolioPage/AllPortfolioPage";
import UpdatePortfolioPage from "../pages/adminSide/portfolioPage/UpdatePortfolioPage";
import AddBlogPage from './../pages/adminSide/blog-page/AddBlogPage';
import ManageBlogPage from "../pages/adminSide/blog-page/ManageBlogPage";
import BlogPage from "../pages/clientSide/blogRelatedPages/BlogPage";
import Blogdetails from "../pages/clientSide/blogRelatedPages/Blogdetails";
import BlogUpdatePage from "../pages/adminSide/blog-page/BlogUpdatePage";
import ProductPage from "../pages/clientSide/productPage/ProductPage";
import CategoryCreateForm from "../pages/adminSide/category-page/CategoryCreateForm";
import ManageCategoryPage from './../pages/adminSide/category-page/ManageCategoryPage';
import CategoryUpdatePage from "../pages/adminSide/category-page/CategoryUpdatePage";
import Info from "../pages/adminSide/representativeRelatedPage/info/Info";
import Client from "../pages/adminSide/representativeRelatedPage/client/Client";
import PaymentHistory from "../pages/adminSide/representativeRelatedPage/payment/PaymentHistory";
import ProductVideo from "../pages/adminSide/representativeRelatedPage/productVideo/ProductVideo";
import Training from "../pages/adminSide/representativeRelatedPage/training/Training";
import Refers from "../pages/adminSide/representativeRelatedPage/refers/Refers";
import ProfileRep from "../pages/adminSide/representativeRelatedPage/profile/ProfileRep";
import AccountRep from "../pages/adminSide/representativeRelatedPage/accountsRep/AccountRep";
import AddClient from "../pages/adminSide/representativeRelatedPage/client/addClient/AddClient";
import ClientList from "../pages/adminSide/representativeRelatedPage/client/list/ClientList";
import DueClientList from "../pages/adminSide/representativeRelatedPage/client/list/DueClientList";
import ClientSupport from "../pages/adminSide/representativeRelatedPage/client/list/ClientSupport";
import RepresentativeLogin from "../components/clientSide/Login/RepresentativeLogin";
import RepresentativeRegister from "../components/clientSide/Register/RepresentativeRegister";
import StepTwoRegister from "../components/clientSide/Register/StepTwoRegister";
import StepThreeRegister from "../components/clientSide/Register/StepThreeRegister";
import PrivateRoute from "./PrivateRoutes";
import RepDashboard from "../components/representative/RepDashboard";





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
                path: '/products',
                element: <ProductPage></ProductPage>
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
            },
            {
                path: "/blogs",
                element: <BlogPage></BlogPage>
            },
            {
                path: "/blogDetails/:id",
                element: <Blogdetails></Blogdetails>
            },

            // representative login routes 

            {
                path: "/representative-login",
                element: <RepresentativeLogin></RepresentativeLogin>
            },

            // representative register routes

            {
                path: "/representative-register",
                element: <RepresentativeRegister></RepresentativeRegister>
            },
            {
                path: "/upload-information",
                element: <StepTwoRegister></StepTwoRegister>
            },
            {
                path: "/representative/step-three",
                element: <StepThreeRegister></StepThreeRegister>
            }


        ]
    },

    // Dashboard routes 

    {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: "/dashboard",
                element: <PrivateRoute role={"admin"} ><DashboardPage></DashboardPage></PrivateRoute>
            },
            {
                path: "add-service",
                element: <PrivateRoute role={"admin"}><AddServicePage></AddServicePage></PrivateRoute>
            },
            {
                path: "manage-service",
                element: <PrivateRoute role={"admin"}> <ManageServicePage></ManageServicePage> </PrivateRoute>
            },
            {
                path: "update-service/:id",
                element: <PrivateRoute role={"admin"}> <UpdateServicePage></UpdateServicePage> </PrivateRoute>
            },
            {
                path: "add-career",
                element: <PrivateRoute role={"admin"}> <AddCareerPage></AddCareerPage> </PrivateRoute>
            },
            {
                path: "career-update/:id",
                element: <PrivateRoute role={"admin"}><UpdateCareerPage></UpdateCareerPage></PrivateRoute>
            },
            {
                path: "manage-career",
                element: <PrivateRoute role={"admin"}><ManageCareerPage></ManageCareerPage> </PrivateRoute>
            },
            {
                path: "add-product",
                element: <PrivateRoute role={"admin"}> <AddProductPage></AddProductPage> </PrivateRoute>
            },
            {
                path: "application",
                element: <PrivateRoute role={"admin"}><AllApplication></AllApplication></PrivateRoute>
            },
            {
                path: "getSingleApplication/:id",
                element: <PrivateRoute role={"admin"}><GetSingleApplication></GetSingleApplication></PrivateRoute>
            },
            {
                path: "manage-product",
                element: <PrivateRoute role={"admin"} ><ManageProductPage></ManageProductPage></PrivateRoute>
            },
            {
                path: "/dashboard/product/update/:id",
                element: <PrivateRoute role={"admin"} ><ProductUpdatePage></ProductUpdatePage></PrivateRoute>
            },
            {
                path: "/dashboard/manage-team",
                element: <PrivateRoute role={"admin"}><ManageTeam></ManageTeam></PrivateRoute>
            },
            {
                path: "/dashboard/update/:id",
                element: <PrivateRoute role={"admin"}><UpdateMember></UpdateMember></PrivateRoute>
            },
            {
                path: "create-portfolio",
                element: <PrivateRoute role={"admin"}><CreatePortfolioPage></CreatePortfolioPage></PrivateRoute>
            }, {
                path: "manage-portfolio",
                element: <PrivateRoute role={"admin"}><AllPortfolioPage></AllPortfolioPage></PrivateRoute>
            },
            {
                path: "portfolio-update/:id",
                element: <PrivateRoute role={"admin"}><UpdatePortfolioPage></UpdatePortfolioPage></PrivateRoute>
            },
            {
                path: "add-blog",
                element: <PrivateRoute role={"admin"} ><AddBlogPage></AddBlogPage></PrivateRoute>
            },
            {
                path: "manage-blog",
                element: <PrivateRoute role={"admin"}><ManageBlogPage></ManageBlogPage></PrivateRoute>
            },
            {
                path: "blog-update/:id",
                element: <PrivateRoute role={"admin"}><BlogUpdatePage></BlogUpdatePage></PrivateRoute>
            },
            {
                path: "create/category",
                element: <PrivateRoute role={"admin"}><CategoryCreateForm></CategoryCreateForm></PrivateRoute>
            },
            {
                path: "manage-category",
                element: <PrivateRoute role={"admin"}><ManageCategoryPage></ManageCategoryPage></PrivateRoute>
            },
            {
                path: "category-update/:id",
                element: <PrivateRoute role={"admin"}><CategoryUpdatePage></CategoryUpdatePage></PrivateRoute>
            },


            // Rrepresentative related routes
            {
                path: "/dashboard",
                element: <RepDashboard></RepDashboard>
            },
            {
                path: "info",
                element: <Info></Info>
            },
            {
                path: "client",
                element: <Client></Client>
            },
            {
                path: "payment",
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: "product-video",
                element: <ProductVideo></ProductVideo>
            },
            {
                path: "training",
                element: <Training></Training>
            },
            {
                path: "refers",
                element: <Refers></Refers>
            },
            {
                path: "rep-profile",
                element: <ProfileRep></ProfileRep>
            },
            {
                path: "account-rep",
                element: <AccountRep></AccountRep>
            },
            // client related routes 
            {
                path: "add-client",
                element: <AddClient></AddClient>
            },
            {
                path: "client-list",
                element: <ClientList></ClientList>
            },
            {
                path: "due-client-list",
                element: <DueClientList></DueClientList>
            },
            {
                path: "client-support",
                element: <ClientSupport></ClientSupport>
            }
        ]
    },






    {
        path: "/admin-registration",
        element: <AdminRegistration></AdminRegistration>
    },


]);

export default router;