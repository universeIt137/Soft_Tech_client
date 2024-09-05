import { ImLocation2 } from "react-icons/im";
import { CiBookmark } from "react-icons/ci";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoMdClock } from "react-icons/io";



// import './JobCard.css'

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const JobCard = ({job}) => {
    
  
    const {id,job_title, location,company_logo,experience,employed_status,skill,min_salary} = job
    return (
        <Link to={`/career/${id}`} >
           <div className="border-y border-gray-400 hover:bg-slate-200 duration-75 px-2 cursor-pointer py-4">
                            <div className="flex items-center justify-between">
                                <h1 className="text-text_blue text-3xl font-semibold">{job_title}</h1>
                                <CiBookmark />
                            </div>
                            <div className="flex items-center text-sm gap-2 pt-2">
                                <ImLocation2 className="text-text_blue"/>
                                <p className="text-gray-900 ">{location}</p>
                            </div>
                            <div className="flex items-center text-sm gap-2 pt-2">
                                <IoMdClock  className="text-text_blue"/>
                                <p className="text-gray-900 ">{employed_status }</p>
                            </div>
                            <div className="flex items-center text-sm gap-2">
                         
                                <AiFillDollarCircle className="text-text_blue"/>
                                <p className="text-gray-900 ">Salary: {min_salary}</p>
                            </div>
                            <p className="text-gray-900 py-3">{`${skill}`.substring(0, 40)}...</p>
                            <div className="badge badge-ghost">13 days ago</div>
                        </div>

            
        </Link>
    );
};

JobCard.propTypes = {
    job: PropTypes.object.isRequired
};

export default JobCard;