
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import ServiceBanner from './ServiceBanner';
import ServiceDescriptionSection from './ServiceDescriptionSection';
import ServiceFeatures from './ServiceFeatures';
import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <title>SoftTech | Services</title>
            </Helmet>
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