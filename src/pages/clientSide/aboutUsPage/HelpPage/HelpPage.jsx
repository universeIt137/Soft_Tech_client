import React from 'react';
import "./HelpPage.css";
import { IoIosText,IoMdMail } from "react-icons/io";
import { MdOutlineWifiCalling3 } from "react-icons/md";


const HelpPage = () => {
    return (
        <div className='mb-14'>
            <div className='h-[500px] sm:h-[450px] bg-cover bg-center px-2 py-14 sm:px-5 sm:py-20 lg:px-32 lg:py-20 xl:px-52 xl:py-20' style={{backgroundImage: "url('https://www.alpha.net.bd/Content/img/bg_dedicatedserver.jpg')"}}>
             
             <div className=''>
                <div className='home  h-[390px] sm:h-[280px] flex flex-col justify-center items-center rounded-lg]'>
                    <h1 className='text-4xl text-white font-semibold mb-6'>Need Help?</h1>
                    <p className='text-justify px-10 text-md text-gray-300 mb-4'>If you need any help to select the right solution for your business, please call us at 09613-250250 within 9:00AM- 9:00PM or you can start a live chat. Alpha Net's support team is available 24/7 via live chat.</p>

                    <div className='flex gap-1 flex-wrap'>
                        <div className='bttn2 bttn2 flex items-center'>
                            <IoIosText className=' text-xl mr-1'></IoIosText>
                            <button >Start Live Chat</button>
                        </div>

                        <div className='bttn3 bttn3 flex items-center'>
                            <IoMdMail className=' text-xl mr-1'></IoMdMail>
                            <button>Mail Now</button>
                        </div>
                        
                        <div className='bttn4 bttn4 flex items-center'>
                            <MdOutlineWifiCalling3 className=' text-xl mr-1'></MdOutlineWifiCalling3>
                            <button>Call Now</button>
                        </div>
                    </div>
                </div>
             </div>

            </div>
        </div>
    );
};

export default HelpPage;