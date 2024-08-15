
import { FaLocationDot } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";
import { MdManageHistory } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa6";
import './JobCard.css'

import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const JobCard = ({job}) => {
    
  
    const {id,job_title,job_group,company_logo,location,experience,education,application_deadline,} = job
    return (
        <Link to={`/career/${id}`} className="border-2 bg-[#E9EFF9] border-[#70ABDD] p-5 rounded-xl overSkill">
            <div className="flex justify-between items-center">
                <div>
                     <h2 className="text-2xl font-bold text-[#5B985E]">{job_title}</h2>
                     <p className="font-medium text-xl">{job_group}</p>
                </div>
                <div>
                     <img className="w-20" src={company_logo} alt="" />
                </div>
            </div>
            <div className="flex items-center gap-2 opacity-95">
                <FaLocationDot></FaLocationDot>
                <h2> {location}</h2>
            </div>
            <div className="flex justify-between opacity-95 pt-5">
                <div className="flex items-center gap-2">
                    <FaBusinessTime></FaBusinessTime>
                    <p> {experience} years</p>
                </div>
                <div  className="flex items-center gap-2">
                    <MdManageHistory className="text-xl font-medium"></MdManageHistory>
                    <p>{application_deadline}</p>
                </div>
            </div>

            <div className="opacity-95 flex   py-2 gap-2  ">
               <div>
               <FaGraduationCap></FaGraduationCap>
               </div>
                <p>{education}</p>

            </div>
            
        </Link>
    );
};

JobCard.propTypes = {
    job: PropTypes.object.isRequired
};

export default JobCard;