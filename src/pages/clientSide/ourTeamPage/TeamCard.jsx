import React from 'react';

const TeamCard = () => {
    return (
        <div className="bg-primary/70 p-1.5 w-full max-w-[290px] rounded-lg text-black mx-auto">
            <div className=" relative bg-gray-100 min-h-full">
                <div className='relative'>
                    <div className='flex gap-1 justify-end p-3 sm:p-5 pb-3 items-center'>
                        <img className='h-3 lg:h-6 object-cover' src={"https://res.cloudinary.com/dnvmj9pvk/image/upload/v1728452527/Universe%20Soft%20Tech/Homepage/dssjxou15png9ffjdvku.png"} alt="" />
                        {/* <h2 className='font-bold text-xs'>Universe IT <br /> Institute</h2> */}
    
    
                    </div>

                    <div className='mb-3 lg:mb-0 lg:h-[120px] relative  flex flex-col justify-center items-center gap-5 '>
                        <div className='w-full h-1.5 sm:h-3.5 bg-primary/70'></div>
                        <div className='w-full h-1.5 sm:h-3.5 bg-primary/70'></div>
                        <div className='w-full h-full absolute top-0 flex justify-center items-center '>
                           <div className=' bg-primary/70 size-14 lg:size-28 rounded-full relative overflow-hidden'>
                           <div className='absolute top-0 w-full h-full bg-white'></div>
                            <img className='w-full h-full rounded-full object-cover relative p-1 bg-primary/70' src={"https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725692414/Universe%20Soft%20Tech/Homepage/h1tkdbwomcfjwqzhz1tg.jpg"} alt="" /></div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-center items-center '>
                        <h2 className='text-[10px] lg:text-base font-bold capitalize'>{"name"}</h2>
                        <h2 className='text-[10px] lg:text-sm'>{"designation"}</h2>
                        <h2 className='text-[10px] lg:text-sm pt-1'>{"contact"}</h2>
                        <h2 className='text-[10px] lg:text-sm break-words w-full text-center'>{"email"}</h2>
                    </div>
    
                    <div className='pb-2 lg:pb-7'>
                        <div className='bg-gradient-to-r from-primary to-primary/70 w-[50%] text-white lg:font-semibold lg:mt-5 mt-2 ml-auto py-1 text-[10px] lg:text-sm   pl-1 sm:pl-5'>
                            <p>Experience:</p>
                            <p>{"5"}  + Years</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;