import React from 'react';

import ProductBanner from './ProductBanner';
import ProductKeyPoint from './ProductKeyPoint';
import ProductDescription from './ProductDescription';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

const ProductDetailsPage = () => {
    window.scrollTo(0, 0);
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { data: product = [], isLoading, error } = useQuery({
        queryKey: ['product', id], // Include 'id' in the queryKey for caching purposes
        queryFn: async () => {
            const res = await axiosPublic.get(`/single-product/${id}`);
            if (!res.data) throw new Error('No data returned');
            return res.data.data;
        }
    });

    console.log(product)

    return (
        <>

            <Helmet>
                <title>SoftTech | Products</title>
            </Helmet>
            <div className=' min-h-screen bg-universe_secondary items-center justify-center flex'>
                <ProductBanner product={product}></ProductBanner>
            </div>
            {/* <ProductKeyPoint></ProductKeyPoint> */}

            <ProductDescription product={product}></ProductDescription>
        </>
    );
};

export default ProductDetailsPage;