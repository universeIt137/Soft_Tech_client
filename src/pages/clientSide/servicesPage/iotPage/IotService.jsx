import React from "react"
import { BiSolidMessageRoundedError } from "react-icons/bi";
import { BsFileBarGraphFill } from "react-icons/bs";
import { SiInternetexplorer } from "react-icons/si";
import { GiVrHeadset } from "react-icons/gi";
import { MdEditDocument } from "react-icons/md";
import { IoIosReturnRight } from "react-icons/io";

const IotService = () => {
    return (
        <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:mx-0 mx-5 mx:mx-5 gap-x-32 gap-y-10">
                <div data-aos="zoom-in">
                    <div className="p-4 w-fit rounded-full bg-text_blue">
                        <SiInternetexplorer  className="text-white w-12 h-12" />
                    </div>

                    <h2 className="font-bold text-3xl my-4">Augmented Reality</h2>
                    <p className="text-gray-600 text-justify text-lg">Our AR solutions enable businesses to create innovative marketing campaigns, provide interactive experiences to customers, and deliver effective training programs. Our AR solutions include product demos, visual manuals, augmented advertising, and more.</p>

                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Brand identity</span></p>
                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Smart devices</span></p>
                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Virtual reality experiences</span></p>
                
                </div>

                <div data-aos="zoom-in">
                    <div className="p-4 w-fit rounded-full bg-text_blue">
                        <GiVrHeadset  className="text-white w-12 h-12" />
                    </div>

                    <h2 className="font-bold text-3xl my-4">Augmented Reality</h2>
                    <p className="text-gray-600 text-justify text-lg">Our AR solutions enable businesses to create innovative marketing campaigns, provide interactive experiences to customers, and deliver effective training programs. Our AR solutions include product demos, visual manuals, augmented advertising, and more.</p>

                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Brand identity</span></p>
                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Smart devices</span></p>
                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Virtual reality experiences</span></p>

                    
                </div>
                <div data-aos="zoom-in">
                    <div className="p-4 w-fit rounded-full bg-text_blue">
                        <MdEditDocument   className="text-white w-12 h-12" />
                    </div>

                    <h2 className="font-bold text-3xl my-4">Augmented Reality</h2>
                    <p className="text-gray-600 text-justify text-lg">Our AR solutions enable businesses to create innovative marketing campaigns, provide interactive experiences to customers, and deliver effective training programs. Our AR solutions include product demos, visual manuals, augmented advertising, and more.</p>

                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Brand identity</span></p>
                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Smart devices</span></p>
                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Virtual reality experiences</span></p>


                </div>
                <div data-aos="zoom-in">
                    <div className="p-4 w-fit rounded-full bg-text_blue">
                        <BsFileBarGraphFill   className="text-white w-12 h-12" />
                    </div>

                    <h2 className="font-bold text-3xl my-4">Augmented Reality</h2>
                    <p className="text-gray-600 text-justify text-lg">Our AR solutions enable businesses to create innovative marketing campaigns, provide interactive experiences to customers, and deliver effective training programs. Our AR solutions include product demos, visual manuals, augmented advertising, and more.</p>

                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Brand identity</span></p>
                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Smart devices</span></p>
                    <p className="flex gap-4 items-center my-4 text-lg "><IoIosReturnRight className="text-gray-500 text-2xl font-bold"/><span>Virtual reality experiences</span></p>


                </div>
               
               
            </div>
        </div>
    )
};

export default IotService
