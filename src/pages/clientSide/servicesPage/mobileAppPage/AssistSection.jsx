import Aos from 'aos';
import React, { useEffect } from 'react';

const AssistSection = () => {
    useEffect(() => {
        Aos.init({ duration: 1000, delay: 200 });
    }, []);
    return (
        <div className='bg-gray-100 my-10'>
            <div className="w-11/12 mx-auto py-10">
                <p className='text-3xl lg:text-5xl font-semibold mb-8'>We also assist you with</p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                    <div className="my-aos-element" data-aos="flip-up">
                        <p className='text-xl font-bold'>
                            API Development
                        </p>
                        <p className='text-xl text-gray-500'>
                            At our software development company, we specialize in API development services that enable our clients to build robust, scalable, and secure software systems.
                        </p>
                    </div>

                    <div className="my-aos-element" data-aos="flip-up">
                        <p className='text-xl font-bold'>
                            QA & Testing
                        </p>
                        <p className='text-xl text-gray-500'>
                            we offer a comprehensive range of QA and testing services that enable our clients to build high-quality software systems that meet their specific needs.
                        </p>
                    </div>

                    <div className="my-aos-element" data-aos="flip-up">
                        <p className='text-xl font-bold'>
                            Support & Maintenance
                        </p>
                        <p className='text-xl text-gray-500'>
                            we offer comprehensive support and maintenance services that enable our clients to keep their software systems running smoothly and efficiently.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AssistSection;