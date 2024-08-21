import ServiceSlider from '../../../components/clientSide/ServiceDetailsComponent/ServiceSlider/ServiceSlider'
import { Helmet } from "react-helmet-async";

const ServiceDetailsPage = () => {
    return (
        <div className='mt-[76px] bebas_nue'>
             <Helmet>
                <title>Soft Tech | Service</title>
            </Helmet>
            <ServiceSlider></ServiceSlider>
            
        </div>
    );
};

export default ServiceDetailsPage;