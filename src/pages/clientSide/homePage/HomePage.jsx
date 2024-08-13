import { Helmet } from "react-helmet-async";
import Banner from "../../../components/clientSide/HomeComponent/Banner/Banner";
import NimuHRM from "../../../components/clientSide/HomeComponent/NimuHRM/NimuHRM";
import NimuSoftProduct from "../../../components/clientSide/HomeComponent/NimuSoftProduct/NimuSoftProduct";
import Service from "../../../components/clientSide/HomeComponent/Service/Service";








const HomePage = () => {
    return (
        <div>
            <Helmet>
                <title>Soft Tech | HomePage</title>
            </Helmet>
            <Banner></Banner>
            <NimuHRM></NimuHRM>
            <NimuSoftProduct></NimuSoftProduct>
            <Service></Service>
           
            
            
            
            
        </div>
    );
};

export default HomePage;