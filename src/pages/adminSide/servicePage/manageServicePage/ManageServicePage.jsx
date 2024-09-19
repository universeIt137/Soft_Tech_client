import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import serviceStore from "./../../../../api-request/service-api/serviceApi";
import { deleteAlert } from "../../../../helper/deleteHelperAlert";

const ManageServicePage = () => {
  const { getAllServiceData, getAllServiceApi, deleteServiceApi } =
    serviceStore();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      await getAllServiceApi();
    })();
  }, []);
  const handleDeleteService = async (id) => {
    const deleteRes = await deleteAlert(id);
    if (deleteRes.isConfirmed) {
      let res = await deleteServiceApi(id);
      if (res) {
        await getAllServiceApi();
      } else {
        alert("delete fail");
      }
    }
  };
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        Manage Service
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-[14px] text-left">Sl</th>
              <th className="py-3 px-6 text-[14px] text-left">Main title</th>
              <th className="py-3 px-6 text-[14px] text-left">Image</th>
              <th className="py-3 px-6 text-[14px] text-left">Tag line</th>
              <th className="py-3 px-6 text-[14px] text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {getAllServiceData &&
              getAllServiceData.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <p>{i + 1}</p>
                  </td>
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <p>{item.main_title}</p>
                  </td>
                  <td className="py-3 px-6 text-left">
                    <img
                      className="w-10 rounded-md text-[16px] transition-transform duration-300 ease-in-out hover:scale-105"
                      src={item.banner_img}
                      alt=""
                    />
                  </td>
                  <td className="py-3 px-6 text-[16px] text-left">
                    <p>{item.tag_line}</p>
                  </td>
                  <td className="py-3 px-6 flex justify-center items-center space-x-2">
                    <NavLink to={`/dashboard/update-service/${item._id}`} >
                      <button className="bg-text_blue outline-none border-0 hover:bg-text_hover text-white px-2 py-2 rounded-md">
                        <i className="block">
                          <FaEdit />
                        </i>
                      </button>
                    </NavLink>
                    <NavLink className="" title="delete">
                      <button
                        onClick={() => {
                          handleDeleteService(item["_id"]);
                        }}
                        className="bg-red-500 outline-none border-0 text-white px-2 py-2 rounded-md hover:bg-red-600"
                      >
                        <i className="block">
                          <MdDelete />
                        </i>
                      </button>
                    </NavLink>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageServicePage;
