import { FaAngleRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";



const NimuHRM = () => {
    return (
        <div className="bg-[#2980B9] py-24 px-10">
            <div className="container mx-auto flex gap-5 flex-col lg:flex-row  text-white">
                {/* left side */}
                <div className="flex flex-col lg:flex-row md:flex-row gap-5 pr-5 pt-5 justify-center items-center lg:items-start md:items-start ">
                     <div>
                     <img className="w-[100px] md:w-full lg:w-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723454871/hrm-white_vpc8yk.webp" alt="" />
                     </div>
                    <div className="text-center md:text-start lg:text-start">
                        <h5>All in One</h5>
                        <h2 className="font-bold lg:text-3xl md:text-2xl text-xl mt-3">Nimu HRM</h2>
                        <p className="leading-relaxed lg:text-[18px] text-base mt-5 mb-10">Nimu HRM dashboard provides a centralized hub for managing all HR activities. With an intuitive interface, it offers a real-time snapshot of essential HR data, including employee information, attendance, performance metrics, and more. The dashboard enables easy navigation, quick access to vital information, and empowers HR professionals to make data-driven decisions for optimized workforce management.</p>
                        {/* btn */}
                       <div className="flex justify-center lg:justify-start md:justify-start">
                        <button className="uppercase border-2 border-white flex items-center gap-2 p-4 rounded-md text-center">Try Nimu HRM <FaAngleRight></FaAngleRight></button>
                        </div>
                    </div>

                </div>
                {/* middle */}
                <div className="lg:w-[1px] border border-white border-dashed">

                </div>
                {/* right side */}
                <div className="pt-5 pl-5">
                    <div>
                        <FaQuoteLeft className="text-3xl mb-10"></FaQuoteLeft>
                        <p className="mb-16">&quot; Nimusoft significantly increased our productivity because of their enthusiasm and superior technological knowledge. They have excellent communication skills which improved our product faster and makes our customers happier. They frequently came up with better solutions than they were provided. Nimusoft provided us with cloud engineering expertise also. They were focused on creating quality features and more efficient solutions for users.&quot;</p>
                        {/* author */}
                        <div className="flex gap-5 items-center">
                            <img className="w-[70px] rounded-full" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723455426/client-masud-2_evofoc.webp" alt="" />
                            <div className="space-y-2">
                                <p>Md. Masud Alam</p>
                                <p>Manager, Moslama International Ltd.</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default NimuHRM;