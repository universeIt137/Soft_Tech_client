import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
const PortfolioPage = () => {

  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({
      delay: 300,
      duration: 1000
    })
  })
  return (
    <>
      <Helmet>
        <title>UST | Portfolio</title>
      </Helmet>
      <div className="w-10/12 mb-20 mx-auto ">
        <p className="text-2xl font-bold text-center py-5 text-universe_primary">
          PORTFOLIO
        </p>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-8">

          <div data-aos="zoom-out-right" className=" shadow-2xl border rounded-lg p-5">
            <div>
              <img
                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725537856/Universe%20Soft%20Tech/portfolioPage/q2nnxeoele8zh1dhbmjn.png"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-2xl my-4">UNIVERSE IT INSTITUTE</p>
            </div>
            <div className=" flex justify-end">
              <Link target="_blank" to={"https://www.universeitinstitute.com/"}>
                <button className="bg-universe_primary font-bold text-white p-5 text-xl rounded-lg">
                  Live Link
                </button>
              </Link>
            </div>
          </div>

          <div data-aos="zoom-out-left" className="shadow-2xl border rounded-lg p-5">
            <div>
              <img
                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725537856/Universe%20Soft%20Tech/portfolioPage/q2nnxeoele8zh1dhbmjn.png"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-2xl my-4">UNIVERSE IT INSTITUTE</p>
            </div>
            <div className=" flex justify-end">
              <Link target="_blank" to={"https://www.universeitinstitute.com/"}>
                <button className="bg-universe_primary font-bold text-white p-5 text-xl rounded-lg">
                  Live Link
                </button>
              </Link>
            </div>
          </div>

          <div data-aos="zoom-out-right" className=" shadow-2xl border rounded-lg p-5">
            <div>
              <img
                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725537856/Universe%20Soft%20Tech/portfolioPage/q2nnxeoele8zh1dhbmjn.png"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-2xl my-4">UNIVERSE IT INSTITUTE</p>
            </div>
            <div className=" flex justify-end">
              <Link target="_blank" to={"https://www.universeitinstitute.com/"}>
                <button className="bg-universe_primary font-bold text-white p-5 text-xl rounded-lg">
                  Live Link
                </button>
              </Link>
            </div>
          </div>

          <div data-aos="zoom-out-left" className=" shadow-2xl border rounded-lg p-5">
            <div>
              <img
                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725537856/Universe%20Soft%20Tech/portfolioPage/q2nnxeoele8zh1dhbmjn.png"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-2xl my-4">UNIVERSE IT INSTITUTE</p>
            </div>
            <div className=" flex justify-end">
              <Link target="_blank" to={"https://www.universeitinstitute.com/"}>
                <button className="bg-universe_primary font-bold text-white p-5 text-xl rounded-lg">
                  Live Link
                </button>
              </Link>
            </div>
          </div>

          <div data-aos="zoom-out-right" className="shadow-2xl border rounded-lg p-5">
            <div>
              <img
                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725537856/Universe%20Soft%20Tech/portfolioPage/q2nnxeoele8zh1dhbmjn.png"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-2xl my-4">UNIVERSE IT INSTITUTE</p>
            </div>
            <div className=" flex justify-end">
              <Link target="_blank" to={"https://www.universeitinstitute.com/"}>
                <button className="bg-universe_primary font-bold text-white p-5 text-xl rounded-lg">
                  Live Link
                </button>
              </Link>
            </div>
          </div>

          <div data-aos="zoom-out-left" className="shadow-2xl border rounded-lg p-5">
            <div>
              <img
                src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725537856/Universe%20Soft%20Tech/portfolioPage/q2nnxeoele8zh1dhbmjn.png"
                alt=""
              />
            </div>
            <div>
              <p className="font-bold text-2xl my-4">UNIVERSE IT INSTITUTE</p>
            </div>
            <div className=" flex justify-end">
              <Link target="_blank" to={"https://www.universeitinstitute.com/"}>
                <button className="bg-universe_primary font-bold text-white p-5 text-xl rounded-lg">
                  Live Link
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
