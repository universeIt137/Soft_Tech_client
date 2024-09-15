import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2"; 
import ApplicationStore from "../../../api-request/admin-api/application-api";

const AllApplication = () => {

    const navigate = useNavigate()

    const {getApplicationRequest, applicationList} = ApplicationStore()

    useEffect(() => {
        (async() => {
            await getApplicationRequest()
        })()
    }, [])

    console.log(applicationList)

  // Delete handler
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        }).then(() => {
            navigate("dashboard/getSingleApplication/1");
        })
      }
    });
  };

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
                <th className="text-left py-3 px-4">Applicant Name</th>
                <th className="text-left py-3 px-4">Image</th>
                <th className="text-left py-3 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-300">
                <td className="py-3 px-4">1</td>
                <td className="py-3 px-4">Elon Musk</td>
                <td className="py-3 px-4">
                  <NavLink to="/dashboard/getSingleApplication/1">
                    <img
                      src="https://i.pinimg.com/564x/54/b5/a4/54b5a45d5f53fdc2708ffbfaa4d074df.jpg"
                      alt="elon"
                      className="w-16 h-16 py-[16px] object-cover"
                    />
                  </NavLink>
                </td>
                <td className="py-3 px-4 gap-2">
                  <button
                    onClick={handleDelete}
                    className="w-4 bg-red-500 outline-none border-0 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    <i title="delete" className="-ml-[8px] block">
                      <MdDelete />
                    </i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllApplication;
