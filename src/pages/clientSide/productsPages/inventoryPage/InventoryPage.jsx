import React from 'react';

const InventoryPage = () => {
    return (
        <>
            <div className=' min-h-screen'>
                <div className=' mt-20 flex justify-center items-center min-h-screen'>
                    <div className='text-white space-y-5 text-center w-1/2'>
                        <p className='text-universe_secondary text-7xl font-bold'>UNIVERSE SOFT TECH</p>
                        <p className='text-5xl'>Inventory Management</p>
                        <button className='btn'>Request a demo</button>
                    </div>
                    <div className='w-1/2'>
                        <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725785599/Universe%20Soft%20Tech/Products/Inventory/qz7pa4c1cczostrkl68h.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default InventoryPage;