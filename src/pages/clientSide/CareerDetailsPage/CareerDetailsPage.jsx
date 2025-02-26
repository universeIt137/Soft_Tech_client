
import { Link, NavLink, useLoaderData, useParams } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPrint } from "react-icons/fa" 
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { BiError } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import careerStore from './../../../api-request/carrer-api/carrerApi';
const CareerDetailsPage = () => {
    // const company_logo = `https://res.cloudinary.com/dnvmj9pvk/image/upload/v1723544696/UniverseIT/Logo/xvlfi7xrapeoabxyzjji.png`
    const {SingleCareerData,SingleCareerDataApi} =  careerStore();
    
    const { id } = useParams();
    window.scrollTo(0, 0);
    useEffect(()=>{
        (async()=>{
            await SingleCareerDataApi(id);
        })()
    },[id])
    
    return (
        <div className='bg-[#EEEEEE] w-10/12 mx-auto'>
        <div id='all' className='container mx-auto bg-white p-5 rounded'>
            <img className='w-32' src={company_logo} alt="" />
            <p>Universe IT Group</p>
            <h1 className='text-3xl text-text_primari font-bold'>{SingleCareerData[0]?.jobTitle}</h1>
            <div className='flex justify-between flex-col lg:flex-row gap-5 my-5'>
                <div className='flex gap-5 flex-wrap-reverse'>
                    <Link to={`/apply-job/${SingleCareerData[0]?._id}`}>
                        <button className=' bg-universe_secondary hover:scale-105 hover:duration-300  text-white font-bold rounded-md px-5 py-2.5'>Apply Now</button>
                    </Link>
                </div>
            </div>



            {/* summary */}
            <div className='bg-[#F4F4F4]  rounded-md p-4 border-2 border-[#DDD]'>
                <div>
                    <h2 className=' text-text_primari font-bold text-2xl'>Summary</h2>

                    <div className='flex flex-col md:flex-row lg:flex-row justify-center   opacity-90 py-5 space-y-4 lg:space-y-0 md:space-y-0 gap-8'>
                        <div className='lg:w-1/3 pl-5 space-y-2 text-center lg:text-start md:text-start'>

                            <h2 className=''>Salary : <span className='font-bold'> { SingleCareerData[0]?.salary } BDT</span></h2>
                            <h2 className=''>Experience :  <span className='font-bold'> At least { SingleCareerData[0]?.experience} </span></h2>
                        </div>
                        <div className='lg:w-1/3 space-y-2 text-center lg:text-start md:text-start'>
                            <h2 className=''>Education : <span className='font-bold'> {SingleCareerData[0]?.edu}</span></h2>
                            <h2 className=''>Skills :  <span className='font-bold'>  { SingleCareerData[0]?.skill } </span></h2>
                        </div>
                        <div className='lg:w-1/3 space-y-2 text-center lg:text-start md:text-start'>
                            <h2 className=''>Job Location : <span className='font-bold'> { SingleCareerData[0]?.location }</span></h2>
                            <h2 className=''>Workplace :  <span className='font-bold'>  {SingleCareerData[0]?.workplace } </span></h2>
                        </div>

                    </div>

                </div>

            </div>

            {/* video CV */}
            <div className='bg-[#ECF6FF] border border-[#95CDFF] rounded-md py-3 px-8 my-10'>
                <h2 className='text-[#2F64A3]'>Applicants are encouraged to submit <span className='font-bold'>Video CV</span></h2>

            </div>

            <div id='req' className='border border-[#DDD] p-5  rounded-md'>
                <h2 className='font-bold text-xl text-text_primari '>Requirments</h2>
                <p className='text-xl font-bold py-5  text-text_primari '>Education</p>
                <ul className='pl-8 -mt-6 font-medium' >
                    <li className='list-disc'>{SingleCareerData[0]?.edu}</li>
                </ul>
                <p className='text-xl font-bold text-text_primari '>Skills</p>
                <ul className='pl-8 font-medium'>
                    <li>
                        {
                            SingleCareerData[0]?.skill
                        }
                    </li>
                </ul>

                <p className='text-xl font-bold text-text_primari  '>Experience</p>
                <ul className='pl-8 font-medium'>
                    <li className='list-disc'>{ SingleCareerData[0]?.experience }</li>
                </ul>

                <hr />
                <h2 id='res' className='text-text_primari font-bold text-xl py-3'>Responsibilities & Context</h2>
                <ul className='pl-8 -mt-1 mb-4 font-medium'>
                    {
                        SingleCareerData[0]?.responsibilities
                    }
                </ul>

                <hr />
                <p className=' text-text_primari font-bold text-xl py-3'>Workplace</p>
                <p>
                    {
                        SingleCareerData[0]?.workplace
                    }
                </p>

                <h2 className='text-text_primari font-bold text-xl py-3'>Employment Status</h2>
                <p className='-mt-2' >{ SingleCareerData[0]?.status }</p>
                <h2 className='text-text_primari font-bold text-xl py-2'>Job Location</h2>
                <p className='-mt-2' >{SingleCareerData[0]?.location}</p>




            </div>

            <div className='bg-[#ECF6FF] border border-[#DDD] p-5 my-10 rounded-md'>
                <h2 className='text-text_blue font-semibold '>Job Highlights</h2>
                <p className='py-2'>Please read all of the prerequisites before applying for the position.</p>
                <p>We believe that great people make a great organization, and that leads to sustainable business growth. Thus, we offer a meaningful, collaborative, inclusive and rewarding career.</p>

            </div>


            <div id='info' className='bg-[#F4F4F4] border border-[#DDD] my-10 rounded-md p-5 '>
                <div className='flex justify-between flex-col md:flex-row lg:flex-row'>

                    <div>
                        <h2 className=' text-text_blue font-semibold '>Company Information</h2>
                        <p className='py-2'>A Reputed Group of Company</p>
                    </div>
                    <div className=''>
                        <div className='lg:text-end md:text-end'>
                            <button className='px-4 py-2.5 border border-[#95CDFF]  rounded-md font-medium'><span className='text-[#2F64A3] text-2xl '>+</span> Follow</button>
                        </div>

                        <p className='text-[#6B6DB4]'>More jobs from this company
                        </p>
                    </div>

                </div>
            </div>

            <div className='bg-[#FFEFEF] border border-[#FDB5B3] rounded-md p-5 my-8'>
                <div className='flex justify-between'>
                    <h2 className='text-text_blue  text-[18px] font-semibold'>Report this Job / Company (রিপোর্ট)</h2>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className='border border-[#DB9290] flex items-center gap-2 px-3 py-2.5 rounded-md cursor-pointer'><BiError className='text-[#B83835]'></BiError> রিপোর্ট</button>
                </div>
                <p className='opacity-95 py-5'>এই চাকরির জন্য বিজ্ঞাপন দাতা প্রতিষ্ঠান আপনার কাছ থেকে কোন অর্থ চাইলে অথবা কোন ধরনের ভুল বা বিভ্রান্তিকর তথ্য দিলে অতি সত্ত্বর আমাদেরকে জানান অথবা জবটি রিপোর্ট করুন। চাকরি পাওয়ার জন্য কোন ব্যাক্তি / প্রতিষ্ঠানকে অর্থ প্রদান করতে বিডিজবস কাউকে উৎসাহিত করেনা। কোন প্রকার অর্থ লেনদেনের দায়িত্ব বিডিজবস বহন করবে না।</p>
                <div className='flex gap-3 items-center'>
                    <MdCall className='text-[#2F64A3] text-xl'></MdCall>
                    <h2>16479</h2>

                </div>
                <div className='flex gap-3 items-center'>
                    <MdOutlineMail className='text-[#2F64A3] text-xl'></MdOutlineMail>
                    <h2>complain@universeIt.com</h2>

                </div>

            </div>


            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="bg-[#EFEEEE] lg:max-w-[1100px] lg:w-[1100px] w-auto p-6 m-6 rounded-md">
                    <h2 className='text-xl font-medium pb-2'>Report Job</h2>
                    <p>NB: Your submitted information will be passed to Bdjobs.com for verification.</p>

                    <div className='border border-[#DDD] rounded-md bg-[#F3F3F3] py-5 px-8 my-5'>
                        <div className='flex justify-between flex-col lg:flex-row space-y-2 lg:space-y-0'>
                            <label htmlFor="" className='w-max'>Report type (required)</label>
                            <select name="" id="" className='outline-none w-full lg:ml-5 focus:border focus:border-[#66AFE9] focus:shadow-xl border border-[#DDD] py-2 rounded-md px-4'>
                                <option value="Select">Select</option>
                                <option value="Problem in applying for the job">Problem in applying for the job</option>
                                <option value="Fraudulent">Fraudulent</option>
                                <option value="Company demanded money">Company demanded money</option>
                                <option value="Invalid Data/Texual mistakes">Invalid Data/Texual mistakes</option>
                                <option value="Offensive/misleading">Offensive/misleading</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className='flex my-5 lg:gap-5 justify-between flex-col lg:flex-row space-y-2 lg:space-y-0'>
                            <label htmlFor="">Additional comments</label>
                            <div className='w-full'>
                                <textarea name="" id="" rows={4} className='border border-[#DDD] focus:border outline-none focus:shadow-xl  rounded-md focus:border-[#66AFE9] w-full'></textarea>
                                <p>[ Within 500 characters ]</p>
                            </div>
                        </div>




                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <div className='flex text-white font-bold gap-5'>
                                <button className='bg-[#518334] py-2.5 px-4  rounded-md cursor-pointer'>Submit</button>
                                <button className="bg-[#518334] py-2.5 px-4  rounded-md cursor-pointer">Close</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>



        </div>

    </div>
);

};

export default CareerDetailsPage;