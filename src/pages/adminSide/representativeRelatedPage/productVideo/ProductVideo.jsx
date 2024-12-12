import React from 'react';
import { BiDollarCircle } from 'react-icons/bi';
import { MdAccountBalance, MdOutlineDesignServices, MdOutlineShoppingCart } from 'react-icons/md';
import { RxArrowBottomRight } from 'react-icons/rx';
import { TfiArrowTopRight } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import ReactPlayer from 'react-player';
import { IoPlayCircleSharp } from 'react-icons/io5';

const ProductVideo = () => {
    window.scrollTo(0, 0);

    const productVideos = [
        {
            videoUrl: "https://www.youtube.com/watch?v=Na_-33eKHek&list=PLImJ3umGjxdAuARwziklrT2QEELizOMtr",
            project_name: "Ecommerce"
        },
        {
            videoUrl: "https://www.youtube.com/watch?v=TgE71N0q5yI&list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz&index=14",
            project_name: "Movie App"
        },
        {
            videoUrl: "https://www.youtube.com/watch?v=Na_-33eKHek&list=PLImJ3umGjxdAuARwziklrT2QEELizOMtr",
            project_name: "Ecommerce"
        },
        {
            videoUrl: "https://www.youtube.com/watch?v=TgE71N0q5yI&list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz&index=14",
            project_name: "Movie App"
        },

        {
            videoUrl: "https://www.youtube.com/watch?v=Na_-33eKHek&list=PLImJ3umGjxdAuARwziklrT2QEELizOMtr",
            project_name: "Ecommerce"
        },
        {
            videoUrl: "https://www.youtube.com/watch?v=TgE71N0q5yI&list=PLNCevxogE3fgy0pAzVccadWKaQp9iHspz&index=14",
            project_name: "Movie App"
        },

    ]
    return (
        <div>
            <p className="text-4xl font-bold text-center my-2">Product Video</p>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4 ">
                {/* Card 1 */}

                {
                    productVideos?.map((product) => <div className="bg-white rounded-lg shadow-md pb-10  border">
                        <ReactPlayer
                            url={`${product.videoUrl}`}
                            width="100%"
                            height="100%"
                            playIcon={<IoPlayCircleSharp className="text-7xl text-red-600" />} // Custom play button
                        />
                        <p className="font-bold text-center my-2">{product?.project_name}</p>

                    </div>)
                }









            </div>
        </div>
    );
};

export default ProductVideo;