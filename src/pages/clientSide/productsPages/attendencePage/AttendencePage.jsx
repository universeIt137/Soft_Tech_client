import React from "react";

const AttendencePage = () => {
  return (
    <>
      <div className="mt-20">
        <div className="max-w-screen-xl mx-auto  ">
          <div className="bg-universe_secondary py-14 px-6 ">
            <div className="flex  justify-between ">
              <div className="flex-1 mt-16 ">
                <h1 className="text-white text-5xl font-semibold leading-tight " >
                  Soft tech attendance <br /> management system <br /> that empowers your workforce
                </h1>
                <p className="text-white my-6 text-lg " >
                  Transform your company's attendance management with our
                  advanced system. Designed for medium to large businesses, our
                  complete range of services allows you to easily monitor,
                  analyze, and improve workforce attendance, leading to
                  increased efficiency and success.
                </p>
                <button className="btn  " >Request demo</button>
              </div >
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
    </>
  );
};

export default AttendencePage;
