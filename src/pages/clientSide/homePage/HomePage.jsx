import { Helmet } from "react-helmet-async";
import Banner from "../../../components/clientSide/HomeComponent/Banner/Banner";
import NimuHRM from "../../../components/clientSide/HomeComponent/NimuHRM/NimuHRM";
import NimuSoftProduct from "../../../components/clientSide/HomeComponent/NimuSoftProduct/NimuSoftProduct";








const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Soft Tech | HomePage</title>
            </Helmet>
            <Banner></Banner>
            <NimuHRM></NimuHRM>
            <NimuSoftProduct></NimuSoftProduct>
           
            
            
            
            
        </div>
    );
};

export default HomePage;