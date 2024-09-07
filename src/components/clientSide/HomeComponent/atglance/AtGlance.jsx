import React from "react"
import { PiNotePencilBold } from "react-icons/pi";
import CountUp from "react-countup";

const AtGlance = () => {
  const countUpRef = React.useRef(null);
  return (
    <div className="container mx-auto py-28 text-center">
      <h1 className=" text-2xl font-semibold">Universe Soft Tech</h1>
      <h1 className="font-bold text-text_primari text-5xl">At a Glance</h1>

      <div className="lg:flex gap-4 pt-7 justify-between w-11/12  mx-auto">

        <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg">
          <div ref={countUpRef} />
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725701757/Universe%20Soft%20Tech/Homepage/At%20a%20glance/xogrfzbhpixjz7jyc7vb.png" alt="" className="w-20" />
          <span className="text-xl lg:text-5xl  font-bold">
            <CountUp className="" end={50} duration={10} /> +
          </span>
          <p className="text-xl font-medium">Projects</p>
        </div>

        <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg">
          <div ref={countUpRef} />
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725701870/Universe%20Soft%20Tech/Homepage/At%20a%20glance/p5t4rciw9zg26pihildc.png" alt="" className="w-20" />
          <span className="text-xl lg:text-5xl  font-bold">
            <CountUp className="" end={40} duration={10} /> +
          </span>
          <p className="text-xl font-medium">Projects</p>
        </div>
       
        <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg">
          <div ref={countUpRef} />
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725702021/Universe%20Soft%20Tech/Homepage/At%20a%20glance/e4fukoxe7edxuakm3qqe.png" alt="" className="w-20" />
          <span className="text-xl lg:text-5xl  font-bold">
            <CountUp className="" end={100} duration={7} /> +
          </span>
          <p className="text-xl font-medium">Projects</p>
        </div>

        <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg">
          <div ref={countUpRef} />
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725702143/Universe%20Soft%20Tech/Homepage/At%20a%20glance/et782fty0y6dandxpcui.png" alt="" className="w-20" />
          <span className="text-xl lg:text-5xl  font-bold">
            <CountUp className="" end={100} duration={7} /> +
          </span>
          <p className="text-xl font-medium">Projects</p>
        </div>


        <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg">
          <div ref={countUpRef} />
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725702256/Universe%20Soft%20Tech/Homepage/At%20a%20glance/aavusxbfoy5xpth5dlrh.png" alt="" className="w-20" />
          <span className="text-xl lg:text-5xl  font-bold">
            <CountUp className="" end={100} duration={5} /> +
          </span>
          <p className="text-xl font-medium">Projects</p>
        </div>

        <div className="shadow-lg px-12 p-5 flex flex-col  justify-center items-center space-y-4 border rounded-lg">
          <div ref={countUpRef} />
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725702470/Universe%20Soft%20Tech/Homepage/At%20a%20glance/gzutc6q7h4mpafew0hvx.png" alt="" className="w-20" />
          <span className="text-xl lg:text-5xl  font-bold">
            <CountUp className="" end={10} duration={9} />k +
          </span>
          <p className="text-xl font-medium">Projects</p>
        </div>


      </div>




    </div>
  )
};

export default AtGlance
