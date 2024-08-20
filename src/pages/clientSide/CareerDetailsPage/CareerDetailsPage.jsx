
import { useLoaderData, useParams } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPrint } from "react-icons/fa" 
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from 'react';
import { BiError } from "react-icons/bi";
import { MdCall } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";








const CareerDetailsPage = () => {

    const [show, setShow] = useState(false);
    const data = useLoaderData()
    const {id} =useParams();
    const details =data.find(p => p.id === +id)
    const {job_title,job_group,company_logo,location,experience,published_date,age,education,skill,context,employed_status,company_address,application_deadline,min_salary}= details
  
   
    if(!details){
        return <div>No career details found</div>
    }
   

    return (
        <div className='bg-[#EEEEEE] py-24 inter'>
            <div id='all' className='container mx-auto bg-white p-5 rounded'>
                <img className='w-32' src={company_logo} alt="" />
                <p>{job_group}</p>
                <h1 className='text-3xl text-[#2F84B5] font-bold'>{job_title}</h1>
                <div className='flex justify-between flex-col lg:flex-row gap-5 my-5'>
                    <p>Application Deadline : <span className='text-[#B5377D] font-bold'>{application_deadline}</span></p>
                    <div className='flex gap-5 flex-wrap-reverse'>
                         <button className='bg-[#008020]  text-white font-bold rounded-md px-5 py-2.5'>Apply Now</button>
                         <button className='flex items-center gap-2 text-xl border border-[#95CDFF] px-5 py-2.5 rounded-md'>
                            <IoIosStar></IoIosStar>
                            <p>shortlist</p>
                         </button>

                         <button className='flex gap-2 text-xl px-5 py-2.5 items-center border border-[#95CDFF] rounded-md'>
                            <IoMdShare></IoMdShare>
                            <p>Share :</p>
                            <FaFacebook className='text-[#1877F2] text-4xl rounded-full'></FaFacebook>
                            <FaLinkedin className='text-[#0077B5] text-4xl  rounded-full'></FaLinkedin>
                            <FaWhatsappSquare className='text-[#25D366] text-4xl rounded-full'></FaWhatsappSquare>

                         </button>

                         <button className='px-5 py-2.5 border border-[#95CDFF] rounded-md'>
                            <FaPrint className='text-2xl '></FaPrint>
                         </button>
                    </div>
                </div>

                    {/* clickable btn */}
                <div className='flex justify-between items-center py-10'>
                    
                    <div>
                        <FaChevronLeft onClick={()=> setShow(!show)} className='bg-[#F4F4F4] p-4 text-6xl rounded-full cursor-pointer'></FaChevronLeft>
                    </div>
                    <div>
                        <div className={`bg-[#F4F4F4]  cursor-pointer ${show ? 'lg:py-2.5': 'lg:py-2.5 py-2.5'}`}>
                            <a href='#all'   className={`hover:bg-[#CCE7FF] px-5 py-2.5 text-2xl text-[#2F64A3] border border-[#DDD] ${show ? 'hidden' : 'text-base lg:text-2xl'}`}>All</a>

                            <a  href='#req'className={`hover:bg-[#CCE7FF] duration-1000 px-5 py-2.5 text-2xl text-[#2F64A3] border border-[#DDD] ${show ? 'hidden' : 'text-base lg:text-2xl'}`}>Requirements</a>

                            <a href='#res' className={`hover:bg-[#CCE7FF] px-5 py-2.5 text-2xl text-[#2F64A3] border border-[#DDD] ${show ? 'text-base block lg:text-2xl lg:inline' : 'hidden '}`}>Responsibilities</a>

                            <span className={`hover:bg-[#CCE7FF] px-5 py-2.5 text-2xl text-[#2F64A3] border border-[#DDD] ${show ? 'text-base block lg:text-2xl lg:inline' : 'hidden '}`}>Salary & Benefits</span>

                            <a href='#info' className={`hover:bg-[#CCE7FF] px-5 py-2.5 text-2xl text-[#2F64A3] border border-[#DDD] ${show ? 'text-base block lg:text-2xl lg:inline' : 'hidden '}`}>Company Information</a>
                        </div>
                    </div>

                    <div>
                        <FaChevronRight onClick={()=> setShow(!show)} className='bg-[#F4F4F4] p-4 text-6xl rounded-full cursor-pointer'></FaChevronRight>
                    </div>

                </div>

                    {/* summary */}
                    <div className='bg-[#F4F4F4] rounded-md p-4 border-2 border-[#DDD]'>
                        <div>
                            <h2 className='text-[#B5377D] font-bold text-2xl'>Summary</h2>

                            <div className='flex flex-col md:flex-row lg:flex-row justify-center   opacity-90 py-5 space-y-4 lg:space-y-0 md:space-y-0 gap-8'>
                                <div className='lg:w-1/3 pl-5 space-y-2 text-center lg:text-start md:text-start'>
                                    <h2>Vacancy : {Math.floor(Math.random() * 10)} </h2>
                                    <h2 className=''>Salary : <span className='font-bold'> {min_salary}</span></h2>
                                </div>
                                <div className='lg:w-1/3 space-y-2 text-center lg:text-start md:text-start'>
                                    <h2>Age : <span className='font-bold'>{age}</span> </h2>
                                    <h2 className=''>Experience : <span className='font-bold'> {experience}</span></h2>
                                </div>
                                <div className='lg:w-1/3 space-y-2 text-center lg:text-start md:text-start'>
                                    <h2>Location : <span  className='font-bold'>{location}</span> </h2>
                                    <h2 className=''>Published : <span className='font-bold'> {published_date}</span></h2>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/* video CV */}
                    <div className='bg-[#ECF6FF] border border-[#95CDFF] rounded-md py-3 px-8 my-10'>
                        <h2 className='text-[#2F64A3]'>Applicants are encouraged to submit <span className='font-bold'>Video CV</span></h2>

                    </div>

                    {/* requirments */}
                    <div id='req' className='border border-[#DDD] p-5 opacity-80 rounded-md'>
                        <h2 className='text-[#B5377D] font-bold text-xl'>Requirments</h2>
                        <p className='text-xl font-bold py-5'>Education</p>
                         <ul className='pl-8 font-medium' >
                            <li className='list-disc'>{education}</li>
                         </ul>
                         <p  className='text-xl font-bold'>Skills</p>
                         <ul className='pl-8 font-medium'>
                            {
                            
                                skill.split(",").map((word, i) => (
                                    <li className='list-disc ' key={i}>{word}</li>
                                ))
                            }
                           
                         </ul>

                         <p  className='text-xl font-bold'>Experience</p>
                         <ul className='pl-8 font-medium'>
                            <li className='list-disc'>{experience}</li>
                         </ul>
                         
                         <hr />
                         <h2 id='res' className='text-[#B5377D] font-bold text-xl py-3'>Responsibilities & Context</h2>
                         <ul  className='pl-8 font-medium'>
                              {
                                context.map((element, idx) => <li className='list-disc' key={idx}>{element}</li>)
                              }
                         </ul>

                         <hr />
                         <p className='text-[#B5377D] font-bold text-xl py-3'>Workplace</p>
                         <p>Work at Office</p>

                         <h2 className='text-[#B5377D] font-bold text-xl py-3'>Employment Status</h2>
                         <p>{employed_status}</p>
                         <h2 className='text-[#B5377D] font-bold text-xl py-3'>Job Location</h2>
                         <p>{company_address}</p>







                        
                    </div>

                    {/* job highlights */}
                    <div className='bg-[#ECF6FF] border border-[#DDD] p-5 my-10 rounded-md'>
                        <h2 className='text-[#B32D7D] font-semibold '>Job Highlights</h2>
                        <p className='py-2'>Please read all of the prerequisites before applying for the position.</p>
                        <p>We believe that great people make a great organization, and that leads to sustainable business growth. Thus, we offer a meaningful, collaborative, inclusive and rewarding career.</p>

                    </div>


                    {/* company information */}
                    <div id='info' className='bg-[#F4F4F4] border border-[#DDD] my-10 rounded-md p-5 '>
                        <div className='flex justify-between flex-col md:flex-row lg:flex-row'>

                            <div>
                                <h2 className='text-[#B32D7D] font-semibold '>Company Information</h2>
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

                    {/* report this job */}
                    <div className='bg-[#FFEFEF] border border-[#FDB5B3] rounded-md p-5 my-8'>
                        <div className='flex justify-between'>
                            <h2 className='text-[#B83835]  text-[18px] font-semibold'>Report this Job / Company (রিপোর্ট)</h2>
                            <button onClick={()=>document.getElementById('my_modal_5').showModal()} className='border border-[#DB9290] flex items-center gap-2 px-3 py-2.5 rounded-md cursor-pointer'><BiError className='text-[#B83835]'></BiError> রিপোর্ট</button>
                        </div>
                        <p className='opacity-95 py-5'>এই চাকরির জন্য বিজ্ঞাপন দাতা প্রতিষ্ঠান আপনার কাছ থেকে কোন অর্থ চাইলে অথবা কোন ধরনের ভুল বা বিভ্রান্তিকর তথ্য দিলে অতি সত্ত্বর আমাদেরকে জানান অথবা জবটি রিপোর্ট করুন। চাকরি পাওয়ার জন্য কোন ব্যাক্তি / প্রতিষ্ঠানকে অর্থ প্রদান করতে বিডিজবস কাউকে উৎসাহিত করেনা। কোন প্রকার অর্থ লেনদেনের দায়িত্ব বিডিজবস বহন করবে না।</p>
                        <div className='flex gap-3 items-center'>
                            <MdCall className='text-[#2F64A3] text-xl'></MdCall>
                            <h2>16479</h2>

                        </div>
                        <div  className='flex gap-3 items-center'>
                            <MdOutlineMail  className='text-[#2F64A3] text-xl'></MdOutlineMail>
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