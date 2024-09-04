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
import { FaArrowRight } from 'react-icons/fa';  
import { ImLocation2 } from "react-icons/im";
import { CiBookmark } from "react-icons/ci";
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
                {/* jobs & pages */}
                <div className="flex lg:justify-between flex-col lg:flex-row  gap-5 justify-start">
                    <div className="flex items-center">
                        <h2 className="text-xl text-black font-bold pr-2.5 mr-2.5 border-r-2 border-r-[#b3b3b3]">297 jobs</h2>
                        <h2 className=" text-[#595959] font-bold">555+ Vacancies</h2>
                    </div>

                    <div className="flex gap-2  items-center ">
                        <h2 className="text-xl font-medium">Pages :</h2>
                        <div className="flex gap-3 text-xl *:font-bold items-center">
                            <Link to={`/1`} className="text-[#d10000]">1</Link>
                            <Link to={`/2`}>2</Link>
                            <Link to={`/3`}>3</Link>
                            <Link to={`/4`}>4</Link>
                            <Link to={`/5`}>5</Link>
                            <span>...</span>

                        </div>
                    </div>

                </div>

                {/* filters */}
                {/* <div className="my-10 bg-white flex justify-between rounded-md flex-col md:flex-row lg:flex-row text-center">
                    <div>
                        <button className="bg-[#424242] text-white py-4 px-4 after:content-['']   after:w-6 after:h-5 after:bg-[#424242] rounded-sm after:absolute relative z-20 after:-bottom-2 after:rotate-45 after:left-1/2 lg:after:left-auto lg:after:bottom-auto lg:after:translate-x-0  after:-translate-x-1/2 w-full lg:w-auto md:w-auto md:after:left-auto md:after:bottom-auto md:after:translate-x-0">Active filters</button>
                        <input type="text" className="ml-8 outline-none py-5 md:py-0 lg:py-0" />

                    </div>
                    <div className="flex items-center lg:pr-16 md:pr-8 justify-center ">
                        <button className="flex items-center gap-2"><FcLikePlaceholder className="text-2xl"></FcLikePlaceholder>
                            Save as Favourite
                        </button>
                    </div>

                </div> */}




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

                        <div className="border-y border-gray-400 hover:bg-slate-200 duration-75 px-2 cursor-pointer py-4">
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
                            </div>





                        {/* error edit */}
                        {/* <div className="bg-[#E1FEE8] border-2 border-[#5CFF85] flex justify-between items-center gap-3 px-5 py-2.5">
                           <h2 className="flex gap-2 items-center  rounded">Immediately Available: <FaCheck></FaCheck> No <FaRegEdit className="text-[#008020]"></FaRegEdit> <span className="text-[#008020] font-bold">Edit</span></h2>
                           <MdError></MdError>
                        </div>

                        {/* badge */}
                        {/* <div className="flex justify-between md:flex-row flex-col lg:flex-row space-y-2 lg:space-y-0 px-5 py-6">
                           <div className="flex gap-4 items-center">
                                <CiBadgeDollar className="text-yellow-500 text-2xl"></CiBadgeDollar>
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
                        </div> */}

                        {/* card */}
                        {/* <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
                            {
                                jobs.map((job, idx) => <JobCard key={idx} job={job}></JobCard>)
                            }
                             
                        </div> */}


                    </div>
                </div>


            </div>

        </div>
    );
};

export default Career;