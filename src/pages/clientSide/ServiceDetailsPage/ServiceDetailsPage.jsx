import ServiceSlider from '../../../components/clientSide/ServiceDetailsComponent/ServiceSlider/ServiceSlider'
import { Helmet } from "react-helmet-async";
import IOTBanner from '../servicesPage/iotPage/IOTBanner';
import QualitySection from '../servicesPage/iotPage/QualitySection';
import IotService from '../servicesPage/iotPage/IotService';
import IOTtalk from '../servicesPage/iotPage/IOTtalk';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const ServiceDetailsPage = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    // console.log(id);

    const { data: service = [] } = useQuery({
        queryKey: ['service'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/get-service-by-id/${id}`);
            return res.data.data;
        }
    })

    const descriptions = service.description_feature;


    return (
        <div className=''>
        <div className="">
            <IOTBanner service={service} ></IOTBanner>
            <QualitySection descriptions={descriptions} ></QualitySection>
            <IotService></IotService>
            <IOTtalk></IOTtalk>
        </div>
    </div>
    );
};

export default ServiceDetailsPage;