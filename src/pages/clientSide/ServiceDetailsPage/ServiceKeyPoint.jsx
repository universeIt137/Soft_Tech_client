import React, { useEffect } from 'react';
import serviceStore from '../../../api-request/service-api/serviceStore';

const ServiceKeyPoint = () => {
  const { serviceDataListApi, serviceDataList } = serviceStore();

  useEffect(() => {
    (async () => {
      await serviceDataListApi();
    })();
  }, []);



  return (
    <div className="container mx-auto">
      <p className="text-2xl lg:text-7xl font-bold text-center my-5">
        Our Service Key Points
      </p>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 lg:gap-7 lg:mx-0 mx-5">
        {serviceDataList[0]?.key_point?.map((feature, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="border p-5 rounded-xl shadow-xl flex flex-col justify-between h-full"
          >
            {/* Avatar Section */}
            <div className="flex justify-center">
              <div className="avatar">
                <div className="ring-universe_secondary ring-offset-base-100 w-12 lg:w-24 rounded-full ring ring-offset-2">
                  <img src={feature?.key_point_img} alt="key point" />
                </div>
              </div>
            </div>

            {/* Title Section */}
            <h2 className="font-bold text-xs lg:text-3xl my-4 text-center">
              {feature?.key_point_title}
            </h2>

            {/* Description Section with Fixed Height */}
            <p
              className="text-gray-600 text-justify text-xs lg:text-sm"
              style={{
                minHeight: '6rem', // Ensures equal height for all descriptions
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'justify',
              }}
            >
              {feature?.key_point_description.slice(0, 200)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceKeyPoint;
