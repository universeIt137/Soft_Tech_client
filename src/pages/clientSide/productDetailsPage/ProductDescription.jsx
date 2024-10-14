import Aos from 'aos';
import React, { useEffect } from 'react';
import { AiOutlineStock } from 'react-icons/ai';
import { FaWarehouse } from 'react-icons/fa';
import { FaCartShopping, FaTruckFast } from 'react-icons/fa6';

const ProductDescription = ({ product }) => {
    useEffect(() => {
        Aos.init({ duration: 1000, delay: 400 });
    }, []);

    const bulletpoint = product.extra_data;

    return (
        <div>
            <section className="Digital-education w-11/12 mx-auto mt-32">
                <div className="grid grid-cols-1 lg:grid-cols-2  justify-center items-center gap-5">
                    <div className="" data-aos="zoom-in">
                        <img src={product?.feature_logo} alt="" className='rounded-2xl shadow-lg' />
                    </div>
                    <div className="text-center lg:text-start space-y-4" data-aos="zoom-in">
                        <p className='text-3xl lg:text-5xl text-universe_primary font-bold'>
                           {product?.feature}
                        </p>
                        <p className='text-xl'>
                            {product?.short_description}
                        </p>
                        
                    </div>
                </div>

                <div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 text-center lg:gap-12 lg:text-4xl font-bold w-4/5 mx-auto my-5 gap-5  lg:space-y-0'>

                        {
                            bulletpoint?.map(point =>
                                <div key={point._id} className="flex justify-center flex-col items-center rounded-xl shadow-xl py-10 text-universe_secondary border" data-aos="fade-up">
                                <img src={point?.description_img} alt="" className='size-12' />
                                    <p className='text-xl my-3 '>{ point?.description_title }</p>
                                    
                            </div>)
                        }

                        

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDescription;