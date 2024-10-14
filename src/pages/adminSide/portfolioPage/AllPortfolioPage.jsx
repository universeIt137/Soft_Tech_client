import React, { useEffect, useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import portfolioStore from '../../../api-request/portfolio-api/portfolioStore';
import { Helmet } from 'react-helmet-async';

const AllPortfolioPage = () => {
  const { portfolioDataListApi, portfolioDataList } = portfolioStore();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    (async () => {
      setLoader(true);
      await portfolioDataListApi();
      setLoader(false);
    })();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Dashboard | All Portfolio Page</title>
      </Helmet>

      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Portfolio Table</h1>

        {loader ? (
          <div className="text-center text-xl">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 p-4 text-center">Serial No</th>
                  <th className="border border-gray-300 p-4 text-center">Title</th>
                  <th className="border border-gray-300 p-4 text-center">Image</th>
                  <th className="border border-gray-300 p-4 text-center">Live Link</th>
                  <th className="border border-gray-300 p-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {portfolioDataList &&
                  portfolioDataList.map((item, i) => (
                    <tr key={i} className="hover:bg-gray-100 text-center ">
                      <td className="border border-gray-300 p-4">{i + 1}</td>
                      <td className="border border-gray-300 p-4">{item?.title}</td>
                      <td className="border border-gray-300 p-4">
                        <img
                          src={item?.img}
                          alt={item?.title}
                          className="w-12 h-12 mx-auto object-cover"
                        />
                      </td>
                      <td className="border border-gray-300 p-4">
                        <NavLink
                          to={item?.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View Live
                        </NavLink>
                      </td>
                      <td className="p-4 flex justify-center space-x-2">
                        <NavLink to="/dashboard/portfolio-update">
                          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                            <FaRegEdit />
                          </button>
                        </NavLink>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                          <MdDeleteOutline />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPortfolioPage;
