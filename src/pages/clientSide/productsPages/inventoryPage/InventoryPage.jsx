import React from 'react';

import InventoryBanner from './InventoryBanner';
import InventoryKeypoints from './InventoryKeypoints';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import InventoryDescription from './inventoryDescription';

const InventoryPage = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay:200,
        })
    })

    return (
        <>
            {/* banner section  */}
            <InventoryBanner></InventoryBanner>

            {/* keypoints section  */}
            <InventoryKeypoints></InventoryKeypoints>

            {/* description section  */}
            <InventoryDescription></InventoryDescription>
        </>
    );
};

export default InventoryPage;