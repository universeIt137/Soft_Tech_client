
import { Outlet } from 'react-router-dom';
import Navbar from '../components/clientSide/Navbar/Navbar';
import Footer from '../components/clientSide/Footer/Footer';
import UpdatedNavbar from '../components/clientSide/Navbar/UpdatedNavbar';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            {/* <UpdatedNavbar></UpdatedNavbar> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;