import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageServicePage = () => {
  const [services, setServices] = useState([]);

  // Fetch services from API
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('/api/services'); // Change this to your actual API endpoint
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const handleDelete = async (serviceId) => {
    // Delete service logic
    try {
      await axios.delete(`/api/services/${serviceId}`);
      setServices(services.filter((service) => service._id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  const handleUpdate = (serviceId) => {
    // Update service logic (navigate to update form)
    console.log('Navigate to update page for service:', serviceId);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Manage Service</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-center">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {/* {services.map((service) => (  ))} */}
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">dfkj</td>
                <td className="py-3 px-6 text-left">dfkj</td>
                <td className="py-3 px-6 text-center">
                  <button
                    // onClick={() => handleUpdate(service._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    // onClick={() => handleDelete(service._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageServicePage;
