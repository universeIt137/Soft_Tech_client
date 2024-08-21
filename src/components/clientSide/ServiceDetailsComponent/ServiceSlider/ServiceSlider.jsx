const ServiceSlider = () => {
  return (
    <div className="">
      <div className="carousel w-full bg-blue-300">
        <div id="slide1" className="carousel-item relative w-full ">
         
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="lg:flex-1">
                <h2 className="text-3xl text-center lg:text-start py-5  lg:text-6xl uppercase ">Creative Website <span className="text-[#303E44]">Design &</span> <span className="text-[#303E44]">Develpment</span> in Bangladesh </h2>
                  <p className="text-2xl font-medium inter text-center lg:text-start">A well-planned corporate website brings marketing strength to your company. Open the window to great opportunities for your business to grow with our corporate website solutions.</p>
                 <div className="text-center lg:text-start">
                     <button className="py-3 px-5 rounded-md bg-[#303E44] inter hover:bg-white hover:text-[#303E44] text-2xl mt-5">Contact For Price</button>
                 </div>
            </div>
            <div className="lg:flex-1 flex justify-end">
                 <img className="w-[500px] h-[500px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1724264287/webdesignslider_qtuvkq.svg" alt="" />
            </div>
            
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
           <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="lg:flex-1">
                <h2 className=" text-3xl text-center lg:text-start py-5  lg:text-6xl uppercase lg:py-0"><span className="text-[#303E44]">Corporate Website </span>Design   in Bangladesh </h2>
                  <p className="text-2xl font-medium inter text-center lg:text-start">A well-planned corporate website brings marketing strength to your company. Open the window to great opportunities for your business to grow with our corporate website solutions.</p>
                   <div className="text-center lg:text-start">
                     <button className="py-3 px-5 rounded-md bg-[#303E44] inter hover:bg-white hover:text-[#303E44] text-2xl mt-5">Contact For Price</button>
                 </div>
            </div>
            <div className="lg:flex-1 flex justify-end">
                 <img className="w-[500px] h-[500px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1724265331/corporatewebsiteslider_bkspdd.svg" alt="" />
            </div>
            
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="lg:flex-1">
                <h2 className="  text-3xl text-center lg:text-start py-5  lg:text-6xl uppercase lg:py-0"> Build <span className="text-[#303E44]">Business Website </span> in Bangladesh</h2>
                 
                  <p className="text-2xl font-medium inter text-center lg:text-start">A well-planned corporate website brings marketing strength to your company. Open the window to great opportunities for your business to grow with our corporate website solutions.</p>
                  <div className="text-center lg:text-start">
                     <button className="py-3 px-5 rounded-md bg-[#303E44] inter hover:bg-white hover:text-[#303E44] text-2xl mt-5">Contact For Price</button>
                 </div>
            </div>
            <div className="lg:flex-1 flex justify-end">
                 <img className="w-[500px] h-[500px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1724265533/businesswebsiteslider_uz25hz.svg" alt="" />
            </div>
            
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between text-white">
            <div className="lg:flex-1">
                <h2 className="  text-3xl text-center lg:text-start py-5  lg:text-6xl uppercase lg:py-0"><span className="text-[#303E44]">E-commerse Website </span>Design   in Bangladesh </h2>
                  <p className="text-2xl font-medium inter text-center lg:text-start">A well-planned corporate website brings marketing strength to your company. Open the window to great opportunities for your business to grow with our corporate website solutions.</p>
                 <div className="text-center lg:text-start">
                     <button className="py-3 px-5 rounded-md bg-[#303E44] inter hover:bg-white hover:text-[#303E44] text-2xl mt-5">Contact For Price</button>
                 </div>
            </div>
            <div className="lg:flex-1 flex justify-end">
                 <img className="w-[500px] h-[500px]" src="https://res.cloudinary.com/dqescabbl/image/upload/v1724265888/ecommerceslider_pc3ugf.svg" alt="" />
            </div>
            
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
              
          </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
