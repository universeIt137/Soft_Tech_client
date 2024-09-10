import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from "aos";

const CRMPage = () => {

  window.scrollTo(0, 0);
  useEffect(()=>{
    Aos.init({
        duration:1000,delay:100
    })
  });
  return (
    <>
     

      {/* service area  */}

      <div className=" bg-[#479FC9] ">
        <div className="max-w-screen-xl mx-auto ">
          <div className="py-20">
            <div>
              <h1 className="text-center text-white text-4xl font-bold  ">
                Features of Our Software
              </h1>
              <p className="text-center my-4 text-lg text-white ">
                Our softwares include impressive features
              </p>
            </div>
            <div  className="flex flex-col lg:grid lg:grid-cols-5 py-12 gap-8 md:col-span-4 ">
              <div data-aos="flip-left" className="card card-compact bg-base-100 py-6  shadow-xl">
                <figure>
                  <img className=""
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725880053/erp-image_ntoidc.avif"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                    <h1 className="" >Contact & Lead Management </h1>
                </div>
              </div>
              <div data-aos="flip-left" className="card card-compact bg-base-100 py-6  shadow-xl">
                <figure>
                  <img className=""
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725880053/erp-image_ntoidc.avif"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                    <h1 className="" >Business Intelligence (BI) </h1>
                </div>
              </div>
              <div data-aos="flip-left" className="card card-compact bg-base-100 py-6  shadow-xl">
                <figure>
                  <img className=""
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725880053/erp-image_ntoidc.avif"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                    <h1 className="" >Customer Relationship Management (CRM) </h1>
                </div>
              </div>
              <div data-aos="flip-left" className="card card-compact bg-base-100 py-6  shadow-xl">
                <figure>
                  <img className=""
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725880053/erp-image_ntoidc.avif"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                    <h1 className="" > E-commerce Integration </h1>
                </div>
              </div>
              <div data-aos="flip-left" className="card card-compact bg-base-100 py-6  shadow-xl">
                <figure>
                  <img className=""
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725880053/erp-image_ntoidc.avif"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                    <h1 className="" > Workflow Automation </h1>
                </div>
              </div>
              <div data-aos="flip-left" className="card card-compact bg-base-100 py-6  shadow-xl">
                <figure>
                  <img className=""
                    src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725880053/erp-image_ntoidc.avif"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                    <h1 className="" >Contact & Lead Management </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CRMPage;
