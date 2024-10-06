import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import ApplicationStore from "../../../api-request/admin-api/application-api";
import { deleteAlert } from "../../../helper/deleteHelperAlert";

const AllApplication = () => {
  const {id} = useParams();
  const { getApplicationRequest, applicationList,deleteApplicationApi } = ApplicationStore();
  
  useEffect(() => {
    (async () => {
      await getApplicationRequest();
    })();
  }, []);

  const navigate = useNavigate();

  const showResume = (pdf) => {
    const encodedPdf = encodeURIComponent(pdf);
    window.open(`https://soft-tech-server-liart.vercel.app/files/${encodedPdf}`, '_blank', 'noreferrer');
  };

  
  const handleDelete = async (id) => {
    let res = await deleteAlert(id);
  }
  
  

  

  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          All Applications
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="w-full bg-gray-800 text-white">
                <th className="text-left py-3 px-4">SL No</th>
                <th className="text-left py-3 px-4"> Name</th>
                <th className="text-left py-3 px-4">Resume</th>
                <th className="text-left py-3 px-4">Number</th>
                <th className="text-left py-3 px-4">Address</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {applicationList?.map((item, i) => (
                <tr key={i} className="border-t border-gray-300">
                  <td className="py-3 px-4">{i + 1}</td>
                  <td className="py-3 px-4">{item?.fullName}</td>
                  <td className="py-3 px-4">
                    <button onClick={()=>{showResume(item?.resume)}} > See Resume </button>
                  </td>
                  <td className="py-3 px-4">{item.phoneNumber}</td>
                  <td className="py-3 px-4">{item.address.slice(0, 10)}...</td>
                  <td className="py-3 px-4">{item.status}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={handleDelete( )}
                      onClickCapture={d}
                      className="w-4 bg-red-500 outline-none border-0 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    >
                      <i title="delete" onClick={deleteApplicationApi.bind(this, item["_id"])} className="-ml-[8px] block">
                        <MdDelete />
                      </i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllApplication;

