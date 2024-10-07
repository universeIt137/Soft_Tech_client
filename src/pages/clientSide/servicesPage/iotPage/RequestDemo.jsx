import React from "react";
import { Link } from "react-router-dom";

const RequestDemo = () => {
  // Function to generate random positions for shapes
  const generateRandomPosition = () => {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    return { top: `${top}%`, left: `${left}%` };
  };

  return (
    <>
      {/* Gradient Section with Random Shapes */}
      <div className="bg-custom-gradient relative flex items-center justify-center pb-40 overflow-hidden">
        {/* Random shapes with border */}
        {/* Circle */}
        <div
          className="absolute w-64 h-64 border-4 border-white rounded-full opacity-10"
          style={generateRandomPosition()}
        ></div>

        {/* Square */}
        <div
          className="absolute w-48 h-48 border-4 border-white opacity-10"
          style={generateRandomPosition()}
        ></div>

        {/* Triangle */}
        <div
          className="absolute w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-white opacity-10"
          style={generateRandomPosition()}
        ></div>

        {/* Rectangle */}
        <div
          className="absolute w-96 h-32 border-4 border-white opacity-10"
          style={generateRandomPosition()}
        ></div>

        {/* Bold Straight Line */}
        <div className="absolute w-2 h-full bg-white opacity-10 left-1/2 transform -translate-x-1/2"></div>

        <div className="text-white p-8 text-center relative z-10">
          <h1 className="text-4xl font-bold">Request a Quote</h1>
          <p className="mt-4">Experience our product firsthand by requesting a demo.</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative flex items-center justify-center lg:mb-96 mb-[650px]">
        <div className="absolute bg-gray-100 rounded-md p-6 w-3/4 lg:w-1/2 top-[-63px]">
          <form>
            <div className="grid gap-3 lg:grid-cols-2 grid-cols-1 items-center gap-y-6">
              <div>
                <label htmlFor="name">Your Name</label><br />
                <input type="text" className="border outline-none focus:border-bg_btn_primary w-full p-2 rounded" id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email">Your Email</label><br />
                <input type="email" className="border outline-none focus:border-bg_btn_primary w-full p-2 rounded" id="email" placeholder="Your email" />
              </div>
              <div>
                <label htmlFor="mobile">Your Mobile</label><br />
                <input type="text" className="border outline-none focus:border-bg_btn_primary w-full p-2 rounded" id="mobile" placeholder="Your mobile" />
              </div>
              <div>
                <label htmlFor="company">Your Company</label><br />
                <input type="text" className="border outline-none focus:border-bg_btn_primary w-full p-2 rounded" id="company" placeholder="Your Company" />
              </div>
              <div>
                <label htmlFor="Service">Service</label><br />
                <input type="text" className="border outline-none focus:border-bg_btn_primary w-full p-2 rounded" id="Service" placeholder="Your Service" />
              </div>
              <div>
                <Link className="btn border-0 mt-5 bg-bg_btn_primary hover:bg-bg_btn_hover w-full text-white font-semibold">
                  Request a quote
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default RequestDemo;
