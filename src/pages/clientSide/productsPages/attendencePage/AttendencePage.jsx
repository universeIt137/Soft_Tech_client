import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RiPresentationFill } from "react-icons/ri";

const AttendencePage = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 200,
    });
  }, []);
  return (
    <>
      <div className="mt-20">
        <div className="max-w-screen-xl mx-auto  ">
          <div className="bg-universe_secondary py-14 px-6 ">
            <div className="flex  justify-between ">
              <div className="flex-1 mt-16 ">
                <h1 className="text-white text-5xl font-semibold leading-tight ">
                  Soft tech attendance <br /> management system <br /> that
                  empowers your workforce
                </h1>
                <p className="text-white my-6 text-lg ">
                  Transform your company's attendance management with our
                  advanced system. Designed for medium to large businesses, our
                  complete range of services allows you to easily monitor,
                  analyze, and improve workforce attendance, leading to
                  increased efficiency and success.
                </p>
                <button className="btn  ">Request demo</button>
              </div>
              <div className="flex-1">
                <img
                  className=""
                  src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1725864753/attendence-img_umvin6.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance  feature */}

      <div className=" mt-20  ">
        <div className="bg-[#f3f6ff] max-w-screen-xl py-20 ">
          <div>
            <h1 className="text-center text-4xl  font-bold ">
              Soft Tech Attendance Features
            </h1>
          </div>
          <div className="flex my-20 mx-10  items-center justify-between gap-10 ">
            <div className="bg-white px-10 py-12 rounded-xl " data-aos="fade-right">
              <div>
                <span>
                  <RiPresentationFill/>
                </span>
              </div>
              <h1 className="text-3xl font-bold ">
                Time and Attendance Tracking
              </h1>
              <p className="my-8 text-xl ">
                Recording and tracking the attendance of individuals, including
                clock-in and clock-out times, break durations, and total hours
                worked.
              </p>
            </div>
            <div
              data-aos="fade-left"
              className="bg-white px-10 py-12 rounded-xl "
            >
              <h1 className="text-3xl font-bold ">Biometric Authentication</h1>
              <p className="my-8 text-xl ">
                Integrating biometric technologies like fingerprint or facial
                recognition for accurate and secure identification of
                individuals during the attendance process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AttendencePage;
