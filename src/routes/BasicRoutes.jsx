import {
    createBrowserRouter,
    
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/clientSide/homePage/HomePage";
import AboutUsPage from "../pages/clientSide/aboutUsPage/AboutUsPage";
import ContactUsPage from "../pages/clientSide/ContactUsPage/ContactUsPage";
import CareerPage from "../pages/clientSide/CareerPage/CareerPage";
import CareerDetailsPage from "../pages/clientSide/CareerDetailsPage/CareerDetailsPage";
import ServicePage from "../components/clientSide/ServiceComponent/Service/Service";
import ServiceDetailsPage from "../pages/clientSide/ServiceDetailsPage/ServiceDetailsPage";
import LoginPage from "../pages/clientSide/LoginPage/LoginPage";






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
                loader: ()=> fetch('jobs.json')
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
            }
        ]
    },
]);

export default router;