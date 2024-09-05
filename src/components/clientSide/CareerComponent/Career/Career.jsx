import { Link } from "react-router-dom";
import { FcLikePlaceholder } from "react-icons/fc";
import { TbCategoryFilled } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillFilePostFill } from "react-icons/bs";
import { BsNewspaper } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { CiBadgeDollar } from "react-icons/ci";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import JobCard from "../JobCard/JobCard";
import { ImLocation2 } from "react-icons/im";
import { AiFillDollarCircle } from "react-icons/ai";




const Career = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(response => response.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='bg-white inter '>
            <div className="container mx-auto px-10 lg:px-0 py-12">
              
                <p className="py-4 text-right">136 jobs</p>





                <div className="grid lg:grid-cols-12 gap-28">
                    {/* sidebar */}
                    <div className="lg:col-span-4 ">
                        <p className="py-3 text-lg">Filter your Job..</p>
                        <div className=" flex gap-2  items-center">
                           
                        <FaSearch /><h1 className="text-lg text-black font-bold">What</h1>
                            </div>
                            <input
                                type="text"
                                className="p-2 w-full border border-text_blue focus:outline-none focus:shadow-sm focus:shadow-text_blue focus:border-blue-700"
                                onKeyDown={(e) => handleKeyPress(e, 'Job name')}
                            />

                        <div className="mt-6 flex gap-2  items-center">
                        <ImLocation2 /><h1 className="text-lg text-black font-bold">Where</h1>
                            </div>
                            <input
                                type="text"
                                className="p-2 border w-full border-text_blue focus:outline-none focus:shadow-sm focus:shadow-text_blue focus:border-blue-700"
                                onKeyDown={(e) => handleKeyPress(e, 'Job location')}
                            />














                        {/* <div className="text-[#ecf0f1]">
                             <div className="text-center bg-[#404040]  py-5 border-b border-b-[#303030] hover:bg-[#4C4C4C]">
                                  <img className="mx-auto" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723728956/Keywards_icon_an3rwy.png" alt="" />
                                  <h1 className="pt-3">Keyword(s)</h1>
                             </div>

                             <div className="text-center bg-[#404040]  py-5 border-b border-b-[#303030] hover:bg-[#4C4C4C]">
                                <TbCategoryFilled className="mx-auto text-2xl"></TbCategoryFilled>
                                <h1 className="pt-3">Category</h1>
                             </div>

                             <div className="text-center bg-[#404040]  py-5 border-b border-b-[#303030] hover:bg-[#4C4C4C]">
                                  <img className="mx-auto" src="https://res.cloudinary.com/dqescabbl/image/upload/v1723729572/Industry_icon_dxwkt0.png" alt="" />
                                  <h1 className="pt-3">Industry</h1>
                             </div>

                             <div className="text-center bg-[#404040]  py-5 border-b border-b-[#303030] hover:bg-[#4C4C4C]">
                                 <FaLocationDot className="mx-auto text-2xl"></FaLocationDot>
                                  <h1 className="pt-3">Location</h1>
                             </div>

                             <div className="text-center bg-[#404040]  py-5 border-b border-b-[#303030] hover:bg-[#4C4C4C]">
                                 <BsFillFilePostFill className="mx-auto text-2xl"></BsFillFilePostFill>
                                  <h1 className="pt-3">Posted/Deadline</h1>
                             </div>

                             <div className="text-center bg-[#404040]  py-5 border-b border-b-[#303030] hover:bg-[#4C4C4C]">
                                 <BsNewspaper className="mx-auto text-2xl"></BsNewspaper>
                                  <h1 className="pt-3">Newspaper job</h1>
                             </div>


                             <div className="text-center bg-[#404040]  py-5 border-b border-b-[#303030] hover:bg-[#4C4C4C]">
                                 <FaFilter className="mx-auto text-2xl"></FaFilter>
                                  <h1 className="pt-3">Other filters</h1>
                             </div>

                             <div className="text-center bg-[#404040]  py-5 border-b border-b-[#303030] hover:bg-[#4C4C4C] ">
                                <h1 className="flex justify-center gap-3">Clear All   <RxCross2 className=" text-2xl"></RxCross2></h1>
                              
                                  
                             </div>
                        </div> */}


                    </div>
                    {/* jobs Card */}
                    <div className="lg:col-span-8 ">

                        {/* <div className="border-y border-gray-400 hover:bg-slate-200 duration-75 px-2 cursor-pointer py-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-text_blue text-3xl font-semibold">Junior web developer</h1>
                                <CiBookmark />
                            </div>
                            <div className="flex items-center text-sm gap-2 py-2">
                                <ImLocation2 className="text-text_blue"/>
                                <p className="text-gray-900 ">Dhaka, Bangladesh</p>
                            </div>
                            <div className="flex items-center text-sm gap-2">
                         
                                <AiFillDollarCircle className="text-text_blue"/>
                                <p className="text-gray-900 ">Salary: 20,000 tk to 35,000</p>
                            </div>
                            <p className="text-gray-900 py-3">{`Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi harum, soluta dolor delectus laudantium hic, ipsum dolorem libero quae architecto blanditiis explicabo, dignissimos id numquam. Labore voluptates velit voluptatum ab?`.substring(0, 40)}...</p>
                            <div className="badge badge-ghost">13 days ago</div>
                        </div> */}





                        {/* error edit */}
                     {/* <div className="bg-[#E1FEE8] border-2 border-[#5CFF85] flex justify-between items-center gap-3 px-5 py-2.5">
                           <h2 className="flex gap-2 items-center  rounded">Immediately Available: <FaCheck></FaCheck> No <FaRegEdit className="text-[#008020]"></FaRegEdit> <span className="text-[#008020] font-bold">Edit</span></h2>
                           <MdError></MdError>
                        </div> */}

                        {/* badge */}
                        <div className="flex justify-between md:flex-row flex-col lg:flex-row space-y-2 lg:space-y-0 px-5 py-6">
                           <div className="flex gap-4 items-center">
                                <CiBadgeDollar className="text-text_primari text-2xl"></CiBadgeDollar>
                                    <h2 className="text-xl font-bold">Featured</h2>
                           </div>

                           <div className="flex gap-2 items-center">
                                 <h2 className=" text-xl font-medium">Job Per Page :</h2>
                                 <select name="" id="" className="px-5 py-2.5 rounded-lg outline-none bg-white focus:border-blue-800 focus:shadow-lg">
                                     <option value="10">10</option>
                                     <option value="20">20</option>
                                     <option value="40">40</option>
                                     <option value="70">70</option>
                                     <option value="90">90</option>
                                     <option value="100">100</option>
                                 </select>

                           </div>
                        </div>

                        {/* card */}
                        <div>
                            {
                                jobs.map((job, idx) => <JobCard key={idx} job={job}></JobCard>)
                            }
                             
                        </div>


                    </div>
                </div>


            </div>

        </div>
    );
};

export default Career;