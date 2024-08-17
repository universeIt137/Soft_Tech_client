
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaPrint } from "react-icons/fa" 
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";





const CareerDetailsPage = () => {
    const data = useLoaderData()
    const {id} =useParams();
    const details =data.find(p => p.id == id)
    const {job_title,job_group,company_logo,location,experience,published_date,age,education,skill,context,employed_status,apply_procedure,company_address,application_deadline,min_salary}= details
  
   
    if(!details){
        return <div>No career details found</div>
    }
   

    return (
        <div className='bg-[#EEEEEE] py-24 inter'>
            <div className='container mx-auto bg-white p-5 rounded'>
                <img className='w-32' src={company_logo} alt="" />
                <p>{job_group}</p>
                <h1 className='text-3xl text-[#2F84B5] font-bold'>{job_title}</h1>
                <div className='flex justify-between'>
                    <p>Application Deadline : {application_deadline}</p>
                    <div className='flex gap-5'>
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

                <div className='flex justify-between items-center py-10'>
                    
                    <div>
                        <FaChevronLeft className='bg-[#F4F4F4] p-4 text-6xl rounded-full cursor-pointer'></FaChevronLeft>
                    </div>
                    <div>
                        <div className='bg-[#F4F4F4] py-2.5 cursor-pointer'>
                            <Link className='hover:bg-[#CCE7FF] px-5 py-2.5 text-2xl text-[#2F64A3] border border-[#DDD]'>All</Link>
                            <Link className='hover:bg-[#CCE7FF] px-5 py-2.5 text-2xl text-[#2F64A3] border border-[#DDD]'>Requirements</Link>
                            <Link className='hover:bg-[#CCE7FF] px-5 py-2.5 text-2xl text-[#2F64A3] border border-[#DDD]'>Responsibilities</Link>
                            <Link className='hover:bg-[#CCE7FF] px-5 py-2.5 text-2xl text-[#2F64A3] border border-[#DDD]'>Salary & Benefits</Link>
                            <Link className='hover:bg-[#CCE7FF] px-5 py-2.5 text-2xl text-[#2F64A3] border border-[#DDD]'>Company Information</Link>
                        </div>
                    </div>

                    <div>
                        <FaChevronRight className='bg-[#F4F4F4] p-4 text-6xl rounded-full cursor-pointer'></FaChevronRight>
                    </div>

                </div>
                

            </div>
            
        </div>
    );
};

export default CareerDetailsPage;