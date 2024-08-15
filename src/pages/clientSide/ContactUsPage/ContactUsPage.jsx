import { Helmet } from "react-helmet-async";
import ContactUs from "../../../components/clientSide/ContactUsComponent/ContactUs/ContactUs";


const ContactUsPage = () => {
    return (
        <div className="mt-12">
            <Helmet>
                <title>Soft Tech | Contact Us</title>
            </Helmet>
            <ContactUs></ContactUs>

            
        </div>
    );
};

export default ContactUsPage;