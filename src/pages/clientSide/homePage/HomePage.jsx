import { Helmet } from "react-helmet-async";
import Banner from "../../../components/clientSide/HomeComponent/Banner/Banner";
import NimuHRM from "../../../components/clientSide/HomeComponent/NimuHRM/NimuHRM";
import NimuSoftProduct from "../../../components/clientSide/HomeComponent/NimuSoftProduct/NimuSoftProduct";
import Service from "../../../components/clientSide/HomeComponent/Service/Service";
import Technology from "../../../components/clientSide/HomeComponent/Technology/Technology";
import NewsLetter from "../../../components/clientSide/HomeComponent/NewsLetter/NewsLetter";








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
            <Technology></Technology>
            <NewsLetter></NewsLetter>
           
            
            
            
            
        </div>
    );
};

export default HomePage;