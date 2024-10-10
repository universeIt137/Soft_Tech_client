import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdDelete } from "react-icons/md";

import ApplicationStore from "../../../api-request/admin-api/application-api";
import { deleteAlert } from "../../../helper/deleteHelperAlert";

const AllApplication = () => {
  const { id } = useParams();
  const { getApplicationRequest, applicationList, deleteApplicationApi } = ApplicationStore();

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
              <tr>
                <th></th>
              </tr>
              {
                applicationList?.map((application, index) =>
                  <tr key={application._id}>
                    <td>{index + 1}</td>
                    <td>{application.fullName}</td>
                    <td>
                      <Link to={application.resume_link}>
                        <button className="btn btn-primary">Resume</button>
                      </Link>
                    </td>
                    <td>{ application.phoneNumber }</td>
                    <td>{ application.address }</td>
                    <td>{application.status}</td>
                    <td><button className="btn btn-primary">Update</button> <button className="btn btn-warning">Delete</button></td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllApplication;

