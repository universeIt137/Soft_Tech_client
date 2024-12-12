import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { MdAccountBalance, MdOutlineDesignServices, MdOutlineShoppingCart } from 'react-icons/md';
import { RxArrowBottomRight } from 'react-icons/rx';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import ReactPlayer from 'react-player';
import { IoPlayCircleSharp } from 'react-icons/io5';

const Training = () => {
    window.scrollTo(0, 0);

    const productVideos = [
        {
            videoUrl: "https://www.youtube.com/watch?v=TgE71N0q5yI&list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz&index=14",
            session_name : "Session 1"
        },
        {
            videoUrl: "https://www.youtube.com/watch?v=7xLa8r6Wmts",
            session_name : "Session 2"
        },
        {
            videoUrl: "https://www.youtube.com/watch?v=JmOBM160jZ0",
            session_name : "Session 3"
        },
        {
            videoUrl: "https://www.youtube.com/watch?v=JmOBM160jZ0",
            session_name : "Session 4"
        },

        {
            videoUrl: "https://www.youtube.com/watch?v=Na_-33eKHek&list=PLImJ3umGjxdAuARwziklrT2QEELizOMtr",
            session_name : "Session 5"
        },
        {
            videoUrl: "https://www.youtube.com/watch?v=TgE71N0q5yI&list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz&index=14",
            session_name : "Session 6"
        },

    ]
    return (
        <div>
            <p className="text-4xl font-bold text-center my-2">Training Session</p>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 ">
                {/* Card 1 */}

                {
                    productVideos?.map((product)=><div className="bg-white rounded-lg shadow-md pb-10  border">
                    <ReactPlayer
                        url={`${product.videoUrl}`}
                        width="100%"
                        height="100%"
                        playIcon={<IoPlayCircleSharp className="text-7xl text-red-600" />} // Custom play button
                    />
                        <p className="font-bold text-center my-2">{ product?.session_name }</p>

                </div>)
                }

                







            </div>
        </div>
    );
};

export default Training;