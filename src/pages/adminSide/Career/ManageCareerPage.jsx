import React, { useState, useEffect } from "react";
import axios from "axios";

const ManageCareerPage = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    // Fetch career data from the backend API
    const fetchCareers = async () => {
      try {
        const response = await axios.get("/api/careers");
        setCareers(response.data);
      } catch (error) {
        console.error("Error fetching career data:", error);
      }
    };
    fetchCareers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/careers/${id}`);
      setCareers(careers.filter((career) => career._id !== id)); // Update the state after deletion
      alert("Career deleted successfully!");
    } catch (error) {
      console.error("Error deleting career:", error);
    }
  };

  const handleUpdate = (id) => {
    // Navigate to the update page or handle the update logic
    alert(`Update career with ID: ${id}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Manage Careers</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-6 text-left">SL</th>
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Salary</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Vacancy</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {careers.length > 0 ? ( */}
               {/* careers.map((career, index) => ( */}
                <tr className="border-b hover:bg-gray-50">
                  <td className="py-3 px-6">1</td>
                  <td className="py-3 px-6">Software developer</td>
                  <td className="py-3 px-6">70000</td>
                  <td className="py-3 px-6">
                    <span
                      className={`py-1 px-3 rounded-full text-sm bg-green-100 text-green-800 `}
                    >
                      Remote
                    </span>
                    {/* <span
                      className={`py-1 px-3 rounded-full text-sm ${
                        career.status === "Active"
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      Remote
                    </span> */}
                  </td>
                  <td className="py-3 px-6">10</td>
                  <td className="py-3 px-6 flex space-x-3">
                    <button
                      onClick={() => handleUpdate(career._id)}
                      className="bg-text_blue hover:bg-text_hover text-white font-semibold py-2 px-4 rounded-md"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(career._id)}
                      className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
            {/* //   )) */}
            {/* // ) : (
            //   <tr>
            //     <td colSpan="6" className="text-center py-4">
            //       No careers available.
            //     </td>
            //   </tr>
            // )} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCareerPage;
