import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { PiWatchBold } from "react-icons/pi";
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
        <div className=" bg-universe_secondary" >
          <div className="max-w-screen-xl mx-auto ">
            <div className=" py-14 px-6 ">
              <div className=" flex flex-col md:flex-row  justify-between ">
                <div className="flex-1 mt-16 ">
                  <h1 className="text-white text-2xl md:text-5xl font-semibold leading-tight ">
                    Soft tech attendance <br /> management system <br /> that
                    empowers your workforce
                  </h1>
                  <p className="text-white my-6 text-lg ">
                    Transform your company's attendance management with our
                    advanced system. Designed for medium to large businesses,
                    our complete range of services allows you to easily monitor,
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
      </div>

      {/* Attendance  feature */}

      <div className=" mt-20  ">
        <div className="bg-[#f3f6ff]">
          <div className=" max-w-screen-xl pt-20 ">
            <div>
              <h1 className="text-center text-4xl  font-bold ">
                Soft Tech Attendance Features
              </h1>
            </div>
            <div className="flex  my-32 gap-10 flex-col md:my-32 md:mx-10  md:grid lg:grid lg:grid-cols-2 md:grid-cols-2 md:gap-10  ">
              <div
                className="bg-white px-10 py-12 rounded-xl transform transition-transform duration-300 hover:scale-y-105"
                data-aos="fade-right"
              >
                <div className=" absolute -mt-32 bg-[#0D6EFD] p-8 shadow-3xl rounded-2xl">
                  <span className="text-6xl">
                    <RiPresentationFill />
                  </span>
                </div>
                <h1 className="text-2xl font-bold mt-6">
                  Time and Attendance Tracking
                </h1>
                <p className="my-8 text-xl">
                  Recording and tracking the attendance of individuals,
                  including clock-in and clock-out times, break durations, and
                  total hours worked.
                </p>
              </div>

              <div
                className="bg-white px-10 py-12 rounded-xl transform transition-transform duration-300 hover:scale-y-105"
                data-aos="fade-left"
              >
                <div className=" absolute -mt-32 bg-[#0D6EFD] p-8 shadow-3xl rounded-2xl">
                  <span className="text-6xl">
                    <PiWatchBold />
                  </span>
                </div>
                <h1 className="text-2xl font-bold mt-6">
                  Biometric Authentication
                </h1>
                <p className="my-8 text-xl">
                  Integrating biometric technologies like fingerprint or facial
                  recognition for accurate and secure identification of
                  individuals during the attendance process.
                </p>
              </div>

              <div
                className="bg-white px-10 py-12 rounded-xl transform transition-transform duration-300 hover:scale-y-105 my-16 "
                data-aos="fade-right"
              >
                <div className=" absolute -mt-32 bg-[#0D6EFD] p-8 shadow-3xl rounded-2xl">
                  <span className="text-6xl">
                    <RiPresentationFill />
                  </span>
                </div>
                <h1 className="text-2xl font-bold mt-6">Leave Management</h1>
                <p className="my-8 text-xl">
                  Enabling individuals to request and manage leave or time-off,
                  including different types of leave (sick leave, vacation,
                  etc.), leave balances, and automated leave approval workflows.
                </p>
              </div>

              <div
                className="bg-white px-10 py-12 rounded-xl transform transition-transform duration-300 hover:scale-y-105 my-16 "
                data-aos="fade-left"
              >
                <div className=" absolute -mt-32 bg-[#0D6EFD] p-8 shadow-3xl rounded-2xl">
                  <span className="text-6xl">
                    <PiWatchBold />
                  </span>
                </div>
                <h1 className="text-2xl font-bold mt-6">Shift Management</h1>
                <p className="my-8 text-xl">
                  Managing and scheduling shifts for employees or students,
                  including defining shift timings, assigning individuals to
                  specific shifts, and tracking attendance based on those
                  shifts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="max-w-screen-xl mx-auto ">
          <h1 className="text-center -mt-24 text-3xl  " >Empowering Organizations with Customizable User Settings</h1>
          <p className="my-10" >
            Nimu attendance offers a wealth of flexible, user-based settings,
            allowing organizations to tailor the attendance management system to
            their unique requirements. With Nimu attendance, you can
            effortlessly configure attendance settings to align with your
            preferred level of strictness or leniency. Personalize the system to
            capture valuable data on tardy workers, overtime hours, and more.
            Seamlessly adapt the user experience to match the needs of your
            employees, empowering your organization to optimize attendance
            management with ease and precision.
          </p>
        </div>
      </div>
    </>
  );
};

export default AttendencePage;
