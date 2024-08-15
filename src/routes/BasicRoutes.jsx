import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/clientSide/homePage/HomePage";
import AboutUsPage from "../pages/clientSide/aboutUsPage/AboutUsPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";





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
            }
        ]
    },
]);

export default router;