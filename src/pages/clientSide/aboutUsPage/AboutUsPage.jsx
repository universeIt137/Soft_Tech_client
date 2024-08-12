
import Banner from '../../../components/clientSide/Banner/Banner';
import About from '../../../components/clientSide/About/About';
import Blogs from '../../../components/clientSide/Blogs/Blogs';
import BluePage from '../../../components/clientSide/BluePage/BluePage';
import { Helmet } from 'react-helmet-async';

const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Soft Tech</title>
            </Helmet>
            <Banner></Banner>
            <About></About>
            <Blogs></Blogs>
            <BluePage></BluePage>
        </>
    );
};

export default AboutUsPage;