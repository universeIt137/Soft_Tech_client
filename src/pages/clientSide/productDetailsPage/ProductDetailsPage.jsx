import React from 'react';

import ProductBanner from './ProductBanner';
import ProductKeyPoint from './ProductKeyPoint';
import ProductDescription from './ProductDescription';

const ProductDetailsPage = () => {
    return (
        <>
        <div className=' min-h-screen bg-universe_secondary items-center justify-center flex'>
                <ProductBanner></ProductBanner>
            </div>
            <ProductKeyPoint></ProductKeyPoint>

            <ProductDescription></ProductDescription>
        </>
    );
};

export default ProductDetailsPage;