import React from "react";
import Marquee from "react-fast-marquee";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  FreeMode,
} from "swiper/modules";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import TeamCard from "../ourTeamPage/TeamCard";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const OurTeam = () => {
  window.scrollTo(0, 0);

  const axiosPublic = useAxiosPublic();
  const { data: teams = [] } = useQuery({
    queryKey: ['teams'],
    queryFn: async () => {
      const res = await axiosPublic.get('/member');
      return res.data.data;
    }
  })

  // console.log(teams);
  const CEO = teams.find(member => member.email === "golamkibriya32@gmail.com");

  const otherMembers = teams.filter(member => member.email !== "golamkibriya32@gmail.com");

  return (
    <div className=" my-aos-element my-5">
      <div className="container mx-auto">
        <div className="py-10  text-center">
          <h2 className="lg:text-5xl text-2xl font-bold">The Visionary Team</h2>
          <p className="lg:text-xl pt-5">
            Meet the Innovators Behind Our Cutting-Edge Solutions
          </p>
        </div>

        <TeamCard member={CEO}></TeamCard>


        <div className="lg:pb-20">
          {/* <Swiper
            spaceBetween={10}
            freeMode={true}
            navigation={true}
            // pagination={true}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 640px (mobile view)
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              // when window width is >= 768px (tablet view)
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              // when window width is >= 1024px (desktop view)
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>

            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[350px] max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center py-10">
                <div className="flex flex-col items-center">
                  <img
                    className="h-60  mb-3 rounded-full shadow-lg"
                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725692414/Universe%20Soft%20Tech/Homepage/h1tkdbwomcfjwqzhz1tg.jpg"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-2xl  font-bold text-gray-900 dark:text-white">
                    Engr. Golam Kibriya
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    C.E.O
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[350px] max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center py-10">
                <div className="flex flex-col items-center">
                  <img
                    className="h-60  mb-3 rounded-full shadow-lg"
                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725692414/Universe%20Soft%20Tech/Homepage/h1tkdbwomcfjwqzhz1tg.jpg"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-2xl  font-bold text-gray-900 dark:text-white">
                    Engr. Golam Kibriya
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    C.E.O
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[350px] max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center py-10">
                <div className="flex flex-col items-center">
                  <img
                    className="h-60  mb-3 rounded-full shadow-lg"
                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725692414/Universe%20Soft%20Tech/Homepage/h1tkdbwomcfjwqzhz1tg.jpg"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-2xl  font-bold text-gray-900 dark:text-white">
                    Engr. Golam Kibriya
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    C.E.O
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[350px] max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center py-10">
                <div className="flex flex-col items-center">
                  <img
                    className="h-60  mb-3 rounded-full shadow-lg"
                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725692414/Universe%20Soft%20Tech/Homepage/h1tkdbwomcfjwqzhz1tg.jpg"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-2xl  font-bold text-gray-900 dark:text-white">
                    Engr. Golam Kibriya
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    C.E.O
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[350px] max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center py-10">
                <div className="flex flex-col items-center">
                  <img
                    className="h-60  mb-3 rounded-full shadow-lg"
                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725692414/Universe%20Soft%20Tech/Homepage/h1tkdbwomcfjwqzhz1tg.jpg"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-2xl  font-bold text-gray-900 dark:text-white">
                    Engr. Golam Kibriya
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    C.E.O
                  </span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[350px] max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex justify-center items-center py-10">
                <div className="flex flex-col items-center">
                  <img
                    className="h-60  mb-3 rounded-full shadow-lg"
                    src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725692414/Universe%20Soft%20Tech/Homepage/h1tkdbwomcfjwqzhz1tg.jpg"
                    alt="Bonnie image"
                  />
                  <h5 className="mb-1 text-2xl  font-bold text-gray-900 dark:text-white">
                    Engr. Golam Kibriya
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    C.E.O
                  </span>
                </div>
              </div>
            </SwiperSlide>

          </Swiper> */}

          <marquee speed='1000' behavior="" direction="">
            <div className="flex gap-6 mt-5">
              {
                otherMembers?.map(member => <TeamCard key={member._id} member={member}></TeamCard>)
              }


            </div>
          </marquee>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
