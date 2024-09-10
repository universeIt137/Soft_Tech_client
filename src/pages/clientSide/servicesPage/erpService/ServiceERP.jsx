import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ServiceERP = () => {
  AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  return (
    <>
      <div className="mt-16 md:mt-20 lg:mt-20 ">
        <div className="max-w-screen-xl">
          <div >
            <div data-aos = "fade-down" className="py-10  ">
              <h1 className="text-center text-2xl md:text-5xl font-semibold ">
                Develop Your Business{" "}
                <span className="text-text_blue">ERP</span>{" "}
              </h1>
              <h2 className="text-center mt-4 md:mt-6 md:text-3xl font-medium text-[#565973] " >
                Streamline Your Business Operations with our Comprehensive ERP
                Solutions.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceERP;
