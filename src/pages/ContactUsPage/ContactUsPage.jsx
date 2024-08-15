import { Helmet } from "react-helmet-async";
import ContactUs from "../../components/clientSide/ContactUsComponent/ContactUs/ContactUs";


const ContactUsPage = () => {
    return (
        <div>
            <Helmet>
                <title>Soft Tech | Contact Page</title>
            </Helmet>
            <ContactUs></ContactUs>

            
        </div>
    );
};

export default ContactUsPage;