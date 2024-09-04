import { Helmet } from "react-helmet-async";
import Banner from "../../../components/clientSide/HomeComponent/Banner/Banner";
import NimuHRM from "../../../components/clientSide/HomeComponent/NimuHRM/NimuHRM";
import NimuSoftProduct from "../../../components/clientSide/HomeComponent/NimuSoftProduct/NimuSoftProduct";
import Service from "../../../components/clientSide/HomeComponent/Service/Service";
import Technology from "../../../components/clientSide/HomeComponent/Technology/Technology";
import NewsLetter from "../../../components/clientSide/HomeComponent/NewsLetter/NewsLetter";
import { motion } from 'framer-motion'





const HomePage = () => {

    const scrollAnimationVariants = {
        hidden: { opacity: 0, y: 2 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { 
                duration: 0.5,
                type: "spring", 
                stiffness: 50 
            } 
        }
    };
    
    return (
        <div className="mt-12">
            <Helmet>
                <title>Soft Tech | HomePage</title>
            </Helmet>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariants}
                viewport={{ once: true, amount: 0.2 }}>
                <Banner></Banner>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariants}
                viewport={{ once: true, amount: 0.2 }}>
                <NimuHRM></NimuHRM>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariants}
                viewport={{ once: true, amount: 0.2 }}>
                <NimuSoftProduct></NimuSoftProduct>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariants}
                viewport={{ once: true, amount: 0.2 }}>
                <Service></Service>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariants}
                viewport={{ once: true, amount: 0.2 }}>
                <Technology></Technology>
            </motion.div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={scrollAnimationVariants}
                viewport={{ once: true, amount: 0.2 }}>
                <NewsLetter></NewsLetter>
            </motion.div>





        </div>
    );
};

export default HomePage;