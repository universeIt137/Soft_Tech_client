import ServiceSlider from '../../../components/clientSide/ServiceDetailsComponent/ServiceSlider/ServiceSlider'
import { Helmet } from "react-helmet-async";
import IOTBanner from '../servicesPage/iotPage/IOTBanner';
import QualitySection from '../servicesPage/iotPage/QualitySection';
import IotService from '../servicesPage/iotPage/IotService';
import IOTtalk from '../servicesPage/iotPage/IOTtalk';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import ServiceBanner from './ServiceBanner';
import ServiceDescriptionSection from './ServiceDescriptionSection';
import ServiceFeatures from './ServiceFeatures';

const ServiceDetailsPage = () => {
    const axiosPublic = useAxiosPublic();
    let { id } = useParams();
    // console.log(id);

    const { data: service = [], isLoading, error } = useQuery({
        queryKey: ['service', id], // Include 'id' in the queryKey for caching purposes
        queryFn: async () => {
            const res = await axiosPublic.get(`/get-service-by-id/${id}`);
            if (!res.data) throw new Error('No data returned');
            return res.data.data;
        }
    });


    // console.log(service);

    const descriptions = service.description_feature;
    const features = service.feature;


    return (
        <div className=''>
            <div className="">
                <ServiceBanner service={service}></ServiceBanner>
                <ServiceDescriptionSection descriptions={descriptions}></ServiceDescriptionSection>
                <ServiceFeatures features={features}></ServiceFeatures>
                {/* <IotService></IotService> */}
                {/* <IOTtalk></IOTtalk> */}
            </div>
        </div>
    );
};

export default ServiceDetailsPage;