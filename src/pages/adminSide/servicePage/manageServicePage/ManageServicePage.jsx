import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, NavLink, useParams } from "react-router-dom";
import serviceStore from "../../../../api-request/service-api/serviceApi";
import { MdDelete } from "react-icons/md";
import { deleteAlert } from "../../../../helper/deleteHelperAlert";
import toast from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
const ManageServicePage = () => {
  const { serviceDataList, serviceApiRequest,serviceDeleteApi } = serviceStore();
  const [services, setServices] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  let {id} = useParams();

  useEffect(() => {
    (async () => {
      await serviceApiRequest();
    })();
  }, []);
  const deleteService = async (id) => {
    let deleteResp = await deleteAlert(id)
    if (deleteResp.isConfirmed){
        let resp = await serviceDeleteApi(id);
        if (resp){
          toast.success("Service delete successfully");
          await serviceApiRequest();
        }else {
            errorToast("Purchase data delete fail");
        }
    }
};

  const handleUpdate = (serviceId) => {
    // Update service logic (navigate to update form)
    console.log("Navigate to update page for service:", serviceId);
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
              <th className="py-3 px-6 text-[14px] text-left">Title</th>
              <th className="py-3 px-6 text-[14px] text-left">Description</th>
              <th className="py-3 px-6 text-[14px] text-left">Image</th>
              <th className="py-3 px-6 text-[14px] text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {serviceDataList.map((item, i) => (
              <tr
                key={i}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  {i + 1}
                </td>
                <td className="py-3 px-6 text-left whitespace-nowrap">
                  <Link
                    to="/service-details/erp-solution"
                    className="text-text_blue hover:underline text-[16px] "
                  >
                    {item.title}
                  </Link>
                </td>
                <td className="py-3 px-6 text-[16px] text-left">{item.description}</td>
                <td className="py-3 px-6 text-left">
                  <img className="w-20 text-[16px] " src={item.img} alt={item.title} />
                </td>
                <td className="py-3 flex px-4 gap-2">
                  <NavLink title="update" to={`${item["_id"]}/update/service`}>
                    <button
                      className="bg-text_blue w-4 outline-none border-0 hover:bg-text_hover text-white px-4 py-2 rounded-md mr-2"
                      onClick={() => setSelectedServiceId(item._id)}
                    >
                      <i  className="block -ml-[6px]  "  >
                      <FaEdit />
                      </i>
                    </button>
                  </NavLink>

                  <NavLink className={" "} title="delete">
                    <button onClick={deleteService.bind(this,item["_id"])} className="bg-red-500 w-4 outline-none border-0 text-white px-4 py-2 rounded-md hover:bg-red-600">
                      <i className="block -ml-[6px]  " ><MdDelete /></i>
                    </button>
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Reusable Delete Modal */}
        {selectedServiceId && (
          <dialog id="delete-modal" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Confirm Delete</h3>
              <p>Are you sure you want to delete this service?</p>
              <div className="modal-action">
                <button
                  onClick={() => handleDelete(selectedServiceId)}
                  className="btn bg-red-500 text-white"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => setSelectedServiceId(null)}
                  className="btn"
                >
                  Cancel
                </button>
              </div>
            </div>
          </dialog>
        )}
      </div>
    </div>
  );
};

export default ManageServicePage;
