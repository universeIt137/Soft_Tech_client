
import { GoArrowDown, GoArrowRight, GoArrowUp } from "react-icons/go";
import { Link } from "react-router-dom";
import './HomePageStyle.css'
import { useEffect, useState } from "react";
import Aos from "aos";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const OurProductsSection = ({ products }) => {


    const [showProduct, setshowProduct] = useState(false)

    useEffect(() => {
        Aos.init({ duration: 1000, delay: 200 });
    }, []);

    let showProducts = products.slice().reverse().slice(0, 3);
    if (showProduct) {
        showProducts = products.slice().reverse();
    }

    // console.log(products);

    const bgImg = {
        backgroundImage: 'url("https://res.cloudinary.com/dnvmj9pvk/image/upload/v1728379917/Universe%20Soft%20Tech/Homepage/nckwvzqztdcowr9ac2fk.png")',
        backgroundSize: 'cover',
        borderRadius: '10px',
        overflow: 'hidden',
    }
    return (
        <div className="bg-[#ffffff] lg:pt-16 my-aos-element">
            <div className='container mx-auto px-5 flex-grow'>
                <div>
                    <h1 className="text-2xl lg:text-5xl font-semibold text-center my-4"><span className="text-text_blue">What We</span> <span className="text-text_primari">Offers</span></h1>
                    <p className="text-center text-xs mb-3 lg:text-xl">Explore how Soft Tech HRM, Soft Tech Attendance, and Soft Tech Inventory streamline and enhance your business operations</p>
                </div>

                {/* soft Tech product card */}
                <div className="grid grid-cols-2  lg:grid-cols-3 lg:gap-10 gap-4 lg:my-10" >


                    {
                        products && showProducts.map(product =>
                            <div key={product._id} style={bgImg} className="shadow-2xl bg-white relative lg:min-h-[400px]">
                                {/* Top section with image and title */}
                                <div className="text-center py-5 md:py-8">
                                    <img className=" mx-auto size-10 lg:size-32"
                                        src={product?.nav_logo}
                                        alt="Soft Tech HRM" />
                                </div>

                                {/* Text content */}
                                <div className="px-5 md:px-10 lg:px-5 py-14 text-white">
                                    {/* Title with truncation and ellipsis */}
                                    <h2 className="text-[14px] font-bold my-3 md:text-3xl lg:text-2xl text-center break-words leading-tight overflow-hidden text-ellipsis">
                                        {product?.banner_title?.length > 50 ? `${product.banner_title.substring(0, 50)}...` : product.banner_title}
                                    </h2>

                                    {/* Description */}
                                    <p className="text-center text-xs leading-relaxed lg:text-[14px] hidden lg:flex">
                                        {product?.banner_description}
                                    </p>
                                </div>

                                {/* Link/Button */}
                                <div className="absolute bottom-1 lg:bottom-5 left-1/2 transform -translate-x-1/2">
                                    <Link to={`/productsDetails/${product._id}`} onClick={() => setshowProduct(!showProduct)} className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 text-xs">
                                        <p>Details</p>
                                        <GoArrowRight className="font-bold lg:text-xl" />
                                    </Link>
                                </div>
                            </div>

                        )
                    }





                </div>
            </div>
            <div className=" flex justify-center">
                <div className=" bottom-1 lg:bottom-5 left-1/2 transform -translate-x-1/2">
                    <button onClick={() => setshowProduct(!showProduct)} className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 text-xs">
                        <p>
                            {
                                showProduct ? 'See Less' : 'See More'
                            }
                        </p>
                        {
                            showProduct ?  <GoArrowUp className="font-bold lg:text-xl" /> :  <GoArrowDown className="font-bold lg:text-xl" />
                        }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OurProductsSection;