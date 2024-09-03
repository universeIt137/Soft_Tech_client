import { Link } from "react-router-dom";
import './ContactUs.css'; // Importing the custom CSS file
import { FaAnglesRight } from "react-icons/fa6";

const ContactUs = () => {
    return (
        <div className="bg-cover bg-center min-h-screen flex items-center justify-center">
            <div className="container mx-auto py-20 px-6 lg:px-0 bg-white bg-opacity-80 rounded-lg">
                <h2 className="text-center text-2xl lg:text-4xl font-bold text-universe_secondary mb-10">&quot;Let&apos;s connect and create something amazing&quot;</h2>

                <div className="flex flex-col lg:flex-row items-center lg:space-x-10 space-y-10 lg:space-y-0">
                    {/* Left Section */}
                    <div className="flex-1 space-y-6 lg:space-y-10">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-text_hover">Want to start a project with us?</h2>
                        <h1 className="text-text_primari text-4xl lg:text-6xl font-bold">Let's talk!</h1>
                    </div>

                    {/* Right Section */}
                    <div className="flex-1 bg-white p-8 lg:p-12 rounded-lg shadow-md">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-text_hover mb-6">Personal Information</h2>

                            {/* Name & Designation */}
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="w-full">
                                    <label htmlFor="name" className="block text-lg font-semibold text-gray-700 after:content-['*'] after:text-red-400">Name:</label>
                                    <input className="mt-2 py-3 px-4 border border-[#d4d7e5] text-[#565973] rounded-md w-full outline-none focus:border-universe_primary focus:shadow-md" type="text" id="name" name="name" placeholder="First Name" required />
                                </div>
                                <div className="w-full">
                                    <label htmlFor="email" className="block text-lg font-semibold text-gray-700 after:content-['*'] after:text-red-400">Email:</label>
                                    <input className="mt-2 py-3 px-4 border border-[#d4d7e5] text-[#565973] rounded-md w-full outline-none focus:border-universe_primary focus:shadow-md" type="email" id="email" name="email" placeholder="example@company.com" required />
                                </div>
                            </div>

                            {/* Phone & Company */}
                            <div className="flex flex-col lg:flex-row gap-6">
                                <div className="w-full">
                                    <label htmlFor="phone" className="block text-lg font-semibold text-gray-700 after:content-['*'] after:text-red-400">Phone:</label>
                                    <div className="flex mt-2">
                                        <span className="py-3 px-4 border border-r-0 border-[#d4d7e5] text-[#565973] rounded-l-md">+88</span>
                                        <input className="py-3 px-4 border border-[#d4d7e5] text-[#565973] rounded-r-md w-full outline-none focus:border-universe_primary focus:shadow-md" type="number" id="phone" name="phone" placeholder="Phone Number" required />
                                    </div>
                                </div>

                                <div className="w-full">
                                    <label htmlFor="company" className="block text-lg font-semibold text-gray-700 after:content-['*'] after:text-red-400">Company:</label>
                                    <input className="mt-2 py-3 px-4 border border-[#d4d7e5] text-[#565973] rounded-md w-full outline-none focus:border-universe_primary focus:shadow-md" type="text" id="company" name="company" placeholder="Company" required />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-lg font-semibold text-gray-700 after:content-['*'] after:text-red-400">Message:</label>
                                <textarea className="mt-2 py-3 px-4 border border-[#d4d7e5] text-[#565973] rounded-md w-full outline-none focus:border-universe_primary focus:shadow-md" id="message" name="message" rows="5" placeholder="Write your message here..." required></textarea>
                            </div>

                            {/* Privacy Policy */}
                            <div className="mt-6">
                                <label className="inline-flex items-center">
                                    <input type="checkbox" defaultChecked className="checkbox" />
                                    <span className="text-gray-800">By submitting, you agree to receive marketing emails from Nimusoft Technologies Ltd. Unsubscribe anytime. View our <Link to="/privacy-policy" className="text-bg_btn_primary hover:text-bg_btn_hover">Privacy Policy.</Link>.</span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <button className="w-full mt-8 py-4 bg-bg_btn_primary text-white text-lg font-semibold rounded-md hover:bg-bg_btn_hover transition duration-300 flex items-center justify-center gap-2">
                                <FaAnglesRight className="text-2xl" /> Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
