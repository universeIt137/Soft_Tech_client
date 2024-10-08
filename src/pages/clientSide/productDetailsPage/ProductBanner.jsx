import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaExternalLinkAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductBanner = ({ product }) => {
    useEffect(() => {
        Aos.init({ duration: 1000, delay: 500 });
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-white  w-11/12 mx-auto">

                <div className=" text-center lg:text-start space-y-8 my-aos-element" data-aos="zoom-in">
                    <p className='lg:text-6xl text-3xl font-bold overflow-hidden'>{product.main_title}</p>
                    <p className='lg:text-xl text-xl'>
                        {product.short_description}
                    </p>
                    <div className='gap-4 flex flex-col lg:flex-row text-xl justify-center lg:justify-start items-center'>
                        <Link to={`${product.live_link}`}>
                            <button className='px-8 bg-white text-black py-4 rounded-lg flex justify-center items-center gap-3'>Live Link <FaExternalLinkAlt /></button>
                        </Link>
                        <Link
                        to={`${product.proposal_link}`}
                        >
                            <button className='px-1 py-3 border rounded-lg'>Download Proposal</button>
                        </Link>

                    </div>


                </div>

                <div className='my-aos-element' data-aos="zoom-in">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725861900/Universe%20Soft%20Tech/Products/Inventory/o2ckcilit4pxrkmm15at.png" alt="" className='w-full' />
                </div>

            </div>
        </div>
    );
};

export default ProductBanner;