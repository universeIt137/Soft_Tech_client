import { Link } from "react-router-dom";
import './ContactUs.css'
import { FaAnglesRight } from "react-icons/fa6";


const ContactUs = () => {

  
    return (
        <div className="bg-cover bg-center" style={{backgroundImage: 'url("https://res.cloudinary.com/dqescabbl/image/upload/v1723649352/images_q8z8iw.jpg")'}}>
            <div className="container mx-auto py-20 px-10  lg:px-0">
                  <h2 className="text-center text-2xl lg:text-3xl">&quot;Let&apos;s connect and create something amazing &quot;</h2>

                  <div className="flex items-center flex-col lg:flex-row my-20">
                       {/* left div  */}
                       <div className="flex-1 lg:space-y-10 space-y-5">
                           <h2 className="lg:text-3xl text-2xl ">Want to start a project with us?</h2>
                           <h1 className=" gradient-text lg:text-7xl font-bold text-5xl" >Let&apos;s talk!</h1>
                           <Link className="inline-block mt-20 lg:text-2xl  text-xl">info@nimusoft.com</Link>
                           <p className="lg:text-2xl  text-xl">+88 01616 500515</p>

                       </div>
                       {/* right div */}
                       <div className="flex-1 shadow-lg py-10 px-4 rounded-lg">
                           <div className=" space-y-5">
                                <h2 className="text-2xl font-bold">Personal</h2>
                                {/* 1st 2 input */}
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="w-full">
                                        <label htmlFor="name" className="after:content-['*'] after:text-red-400">Name:</label>
                                        <br />
                                        <input className="py-[10px] px-4 border border-[#d4d7e5] text-[#565973] rounded-md bg-white w-full outline-none focus:border-purple-300 focus:shadow-lg" type="text" id="name" name="name" placeholder="First Name" required />
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="name" className="after:content-['*'] after:text-red-400">Designation:</label>
                                        <br />
                                        <input className="py-[10px] px-4 border border-[#d4d7e5] text-[#565973] w-full rounded-md bg-white outline-none focus:border-purple-300 focus:shadow-lg"  type="text" id="name" name="name" required  placeholder="Designation"/>
                                    </div>


                                </div>
                                {/* 2nd 2 input */}
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="w-full">
                                        <label htmlFor="name" className="after:content-['*'] after:text-red-400">Email:</label>
                                        <br />
                                        <input className="py-[10px] px-4 border border-[#d4d7e5] text-[#565973] rounded-md bg-white w-full outline-none  focus:border-purple-300 focus:shadow-lg" type="email" id="name" name="name" placeholder="example@company.com" required />
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="name" className="after:content-['*'] after:text-red-400">Country:</label>
                                        <br />
                                       <div className=""> 
                                       <select name="" id="" className="py-[10px] px-4 border border-[#d4d7e5] text-[#565973] w-full outline-none rounded-md bg-white focus:border-purple-300 focus:shadow-lg">
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Japan">Japan</option>
                                        <option value="USA">USA</option>
                                        <option value="AusTralia">AusTralia</option>
                                        </select>

                                       </div>
                                    </div>
                                   


                                </div>

                                {/* 3rd 2 input */}
                                <div className="flex flex-col lg:flex-row gap-8">
                                    <div className="w-full">
                                        <label htmlFor="name" className="after:content-['*'] after:text-red-400">Phone:</label>
                                        <br />
                                       <div className="flex">
                                       <button className="py-[10px] px-2 border bg-[#F3F6FF]">+88</button>
                                       <input className="py-[10px] px-4 border border-[#d4d7e5] text-[#565973] rounded-r-md bg-white flex-shrink-0 outline-none focus:border-purple-300 focus:shadow-lg " type="number" id="name" name="name" placeholder="phone number" required />
                                       </div>
                                    </div>

                                    <div className="w-full">
                                        <label htmlFor="name" className="after:content-['*'] after:text-red-400">Company:</label>
                                        <br />
                                        <input className="py-[10px] px-4 border border-[#d4d7e5] text-[#565973] w-full rounded-md bg-white outline-none focus:border-purple-300 focus:shadow-lg"  type="text" id="name" name="name" required  placeholder="Company"/>

                                      
                                    </div>
                                   


                                </div>
                                {/* 4th text aria */}
                                <div>
                                     <label htmlFor="name" className="after:content-['*'] after:text-red-400">Message:</label>
                                     <br />
                                     <textarea className="py-[10px] px-4 border border-[#d4d7e5] text-[#565973] w-full rounded-md bg-white outline-none focus:border-purple-300 focus:shadow-lg" rows={5} id="name" name="name" required placeholder="Write your message here..."></textarea>
                                </div>
                                {/* 5th captcha */}
                                <div>
                                     <label htmlFor="name" className="after:content-['*'] after:text-red-400">Verify:</label>
                                     <br />
                                     <div className="flex gap-2">
                                        <input className="py-[10px] px-4 border border-[#d4d7e5] text-[#565973] w-full rounded-md bg-white outline-none focus:border-purple-300 focus:shadow-lg" type="text" id="name" name="name" required placeholder="Enter captcha"/>
                                      
                                        </div>
          
                                </div>
                                {/* refresh cpatcha */}
                                <div className="flex">
                                    <input type="text" placeholder="Enter CAPTCHA Text" className="py-[10px] px-4 border border-[#d4d7e5] text-[#565973] w-full rounded-md bg-white outline-none focus:border-purple-300 focus:shadow-lg" />
                                     <button className="py-[10px] px-4 border bg-[#F3F6FF]">Refresh Captcha</button>

                                </div>
                                {/* privacy policy */}
                                <div className=" ">
                                     <input className=" mr-5" type="checkbox" id="agree" name="agree" required />
                                     <label className="" htmlFor="agree">By submitting this form, you agree to receive marketing and information from Nimusoft Technologies Ltd. You can opt out at any time by clicking unsubscribe. Read our <Link to="/privacy-policy">Privacy Policy</Link></label>
                                     {/* submit button */}
                                     <button className="py-[10px] px-4 border bg-[#2874A6]  items-center gap-3 rounded-lg justify-end flex mt-2"><FaAnglesRight></FaAnglesRight> Submit</button>
                                    
                                </div>


                           </div>


                       </div>

                  </div>

            </div>
            
        </div>
    );
};

export default ContactUs;