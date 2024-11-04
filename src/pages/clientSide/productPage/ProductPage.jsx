import React from 'react';
import ProductTab from './ProductTab';
import { Helmet } from 'react-helmet-async';

const ProductPage = () => {
    return (
        <div className='my-10'>
            <Helmet>
                <title>SoftTech | Products</title>
            </Helmet>
            <h1 className='text-center text-3xl md:text-4xl font-semibold uppercase mb-4'>Our Project <span className='underline text-text_primari'>Based On Category</span></h1>
            <p className='text-center mx-3 mb-28 text-xl xl:mx-52'>Universe Soft Tech is constantly working to help you with the best possible service. You don't need to look elsewhere if you try Universe Soft Tech services. We focus on customer satisfaction and we believe in quality service.</p>
            <ProductTab></ProductTab>
        </div>
    );
};

export default ProductPage;