import Aos from 'aos';
import React, { useEffect } from 'react';

const EducationKeypoint = () => {
    useEffect(() => {
        Aos.init({ duration: 500, delay: 100 });
    }, []);
    return (
        <div>
            <div className="lg:flex text-center lg:text-start">
                <div className="lg:w-1/4  bg-green-500" data-aos="fade-up">
                    <div className='p-10 text-white'>
                        <p className='text-3xl font-bold'>
                            Academic Management
                        </p>
                        <p>All kind of Academic Features</p>
                    </div>
                </div>

                <div className="lg:w-1/4  bg-blue-500" data-aos="fade-up">
                    <div className='p-10 text-white'>
                        <p className='text-3xl font-bold'>
                            Online Admission System
                        </p>
                        <p>Student Online Admission</p>
                    </div>
                </div>

                <div className="lg:w-1/4  bg-yellow-500" data-aos="fade-up">
                    <div className='p-10 text-white'>
                        <p className='text-3xl font-bold'>
                            Students And Teachers
                        </p>
                        <p>Class Wise Manage</p>
                    </div>
                </div>

                <div className="lg:w-1/4  bg-pink-500" data-aos="fade-up">
                    <div className='p-10 text-white'>
                        <p className='text-3xl font-bold'>
                            Exam And Results
                        </p>
                        <p>Exam & Result Publish Manage</p>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default EducationKeypoint;