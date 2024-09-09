import React from "react";
import { CiLaptop } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const CRMPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <div className="mt-20">
        <div className="bg-[#85BFDC] ">
          <div className="max-w-screen-xl mx-auto ">
            <div className="py-20 ">
              <h1 className="text-4xl text-bg_btn_primary ">
                All in one{" "}
                <span className="text-text_blue">
                  Soft Tech Smart Business Solution
                </span>{" "}
              </h1>
              <p className="my-6 text-text_blue text-lg ">
                Soft Tech CRM is a powerful software designed to streamline and
                optimize the sales cycle and customer management for any
                organization.It offers a comprehensive solution that covers all
                stages of the sales pipeline, from initial qualification to
                final closure and delivery.
              </p>
              <button className="btn  bg-white hover:bg-black px-8  ">
                <NavLink className={""} to={""}>
                  Request A Demo
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Why Soft Tech CRM ? */}

      <div className="bg-[#030A16]">
        <div className="max-w-screen-xl mx-auto ">
          <div className="py-20">
            <h1 className="text-4xl text-text_blue font-semibold  text-center ">
              Why <span className="text-white">Soft Tech</span> CRM ?
            </h1>
            <p className="my-8 text-center text-lg text-[#A6A6A6]  ">
              We offer a comprehensive suite of Smart Business Solutions that
              cover key areas such as inventory management, financial management
              and more. Our solutions are designed to seamlessly integrate and
              provide a holistic view of your business operations.
            </p>
            <div className=" flex flex-wrap md:flex-row md:justify-center md:gap-6 gap-4 ">
              <div className=" ">
                <button class="btn btn-active btn-primary  block  mx-auto text-xl    ">
                  Fully Automated
                </button>
              </div>
              <div>
                <button class="btn btn-active btn-secondary block mx-auto text-xl ">
                  Centralized
                </button>
              </div>
              <div>
                <button class="btn btn-active btn-accent block mx-auto text-xl ">
                  Global Fully
                </button>
              </div>
              <div>
                <button class="btn btn-active btn-neutral block mx-auto text-xl ">
                  Integrated Customizable
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            <div className="grid grid-cols-5 py-12 gap-8 ">
              <div className="card card-compact bg-base-100 py-6  shadow-xl">
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
              <div className="card card-compact bg-base-100 py-6  shadow-xl">
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
              <div className="card card-compact bg-base-100 py-6  shadow-xl">
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
              <div className="card card-compact bg-base-100 py-6  shadow-xl">
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
              <div className="card card-compact bg-base-100 py-6  shadow-xl">
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
              <div className="card card-compact bg-base-100 py-6  shadow-xl">
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
