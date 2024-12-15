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
                path : "/representative-login",
                element : <RepresentativeLogin></RepresentativeLogin>
            }


        ]
    },

    // Dashboard routes 

    {
        path: "/dashboard",
        element: <PrivateRoutes>
            <DashboardLayout></DashboardLayout>
        </PrivateRoutes>,
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
            },
            {
                path: "/dashboard/update/:id",
                element: <UpdateMember></UpdateMember>
            },
            {
                path : "create-portfolio",
                element : <CreatePortfolioPage></CreatePortfolioPage>
            },{
                path :"manage-portfolio",
                element : <AllPortfolioPage></AllPortfolioPage>
            },
            {
                path :"portfolio-update/:id",
                element :<UpdatePortfolioPage></UpdatePortfolioPage>
            },
            {
                path : "add-blog",
                element : <AddBlogPage></AddBlogPage>
            },
            {
                path : "manage-blog",
                element : <ManageBlogPage></ManageBlogPage>
            },
            {
                path : "blog-update/:id",
                element : <BlogUpdatePage></BlogUpdatePage>
            },
            {
                path : "create/category",
                element: <CategoryCreateForm></CategoryCreateForm>
            },
            {
                path : "manage-category",
                element: <ManageCategoryPage></ManageCategoryPage>
            },
            {
                path : "category-update/:id",
                element : <CategoryUpdatePage></CategoryUpdatePage>
            },
            // Rrepresentative related routes 
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
                element:<DueClientList></DueClientList>
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
    {
        path: "/admin-login",
        element: <AdminLoginPage></AdminLoginPage>
    },
    
]);

export default router;