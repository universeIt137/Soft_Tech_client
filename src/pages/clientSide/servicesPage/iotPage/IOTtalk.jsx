import Aos from 'aos';
import React, { useEffect } from 'react';

const IOTtalk = () => {
    useEffect(() => {
        Aos.init({ duration: 600, delay: 200 });
    }, []);
    return (
        <div>
        <div className='w-10/12 mx-auto space-y-3 text-center lg:my-20' data-aos="fade-up">
            <p className='text-4xl font-bold'>Want to start a project with us? Let's talk!</p>
            <p className='lg:text-2xl'>
                Unlock the potential for efficiency and create something amazing with Nimusoft Solutions. Our team is eager to bring your vision to life.
            </p>
            <button className='bg-universe_primary p-3 rounded-lg text-white lg:text-xl'>Contact Us</button>
        </div>
    </div>
    );
};

export default IOTtalk;