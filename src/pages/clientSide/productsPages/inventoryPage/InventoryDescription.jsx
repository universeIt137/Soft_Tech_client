import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const InventoryDescription = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 200,
        })
    })
    return (
        <div>
            <div className='lg:my-32 my-10 container mx-auto text-center text-universe_primary'>
                <p className='lg:text-4xl text-2xl font-bold'>What is Nimu-Accounts & Inventory?</p>
                <p className='lg:text-2xl font-bold text-universe_secondary'>Automate Inventory Management, reduce managing cost, optimize cash flow</p>
            </div>
            <div className="w-4/5 mx-auto flex flex-col justify-center items-center" data-aos="fade-up">
                <div>
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725793373/Universe%20Soft%20Tech/Products/Inventory/cf43wpoyheug9lwvw0x4.jpg" alt="" />
                </div>

                <div>
                    <p className='lg:text-xl text-center'>
                        <span className='font-bold text-universe_primary'> Our advanced accounting and inventory management software</span> offers a comprehensive solution for businesses, enabling the efficient and accurate management of financial transactions while ensuring security and reliability.

                        With features such as accounts payable, receivable, and more, it safeguards financial integrity by providing detailed insights. Additionally, our software seamlessly integrates with other business systems, including CRM, inventory management, and e-commerce platforms, streamlining data flow, reducing redundancy, and delivering a unified view of business operations.

                        SOFT TECH Accounts & Inventory software is designed to meet the requirements of businesses of all sizes, from startups to large enterprises.
                    </p>
                </div>
            </div>

            <div className='my-20 grid lg:grid-cols-2 w-4/5 mx-auto gap-10'>
                <div className="" data-aos="fade-right">
                    <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725795869/Universe%20Soft%20Tech/Products/Inventory/o4bvw8b3v89epsnplrjf.jpg" alt="" className='' />
                </div>
                <div className="space-y-2 text-center" data-aos="fade-left">
                    <p className='lg:text-3xl text-xl font-bold text-universe_primary'>The growth of your business made simple</p>
                    <p className='lg:text-xl'>
                        The Growth of Your Business Made Simple" is a compelling title for inventory management software, signaling a focus on ease, efficiency, and scalability. This title suggests that the software is designed to streamline inventory processes, helping businesses of all sizes grow without the usual complexities. By simplifying inventory tracking, order management, and stock optimization, this software becomes an essential tool for businesses looking to expand while maintaining control over their inventory. 
                    </p>

                    
                </div>
            </div>
        </div>
    );
};

export default InventoryDescription;

