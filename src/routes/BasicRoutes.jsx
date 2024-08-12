import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/clientSide/homePage/HomePage";

import About from "../components/clientSide/CompanyPage/About/About";
import AboutUsPage from "../pages/clientSide/aboutUsPage/AboutUsPage";






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
            }
        ]
    },
]);

export default router;