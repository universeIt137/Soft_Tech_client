import React from "react";
import formatDateTime from "../../../../hooks/useDateTime";

const CustomerList = ({ repClients }) => {
  // Dummy customer data
  const customers = [
    { id: 1, name: "John Doe", email: "john.doe@example.com", contact: "123-456-7890" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com", contact: "987-654-3210" },
    { id: 3, name: "Alice Johnson", email: "alice.johnson@example.com", contact: "555-666-7777" },
    { id: 4, name: "Bob Brown", email: "bob.brown@example.com", contact: "444-333-2222" },
  ];

  return (
    <div className="p-6  ">
      <h1 className="text-2xl font-bold mb-4">Customer List</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg text-[12px]">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Bussiness Type</th>
              <th className="px-4 py-2 text-left">Contact</th>
              <th className="px-4 py-2 text-left">Created Date</th>
              <th className="px-4 py-2 text-left">Created Time</th>
            </tr>
          </thead>
          <tbody>
            {
              repClients?.map((item, index) => {
                const { date, time } = formatDateTime(item.createdAt);
                return (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border-b">{index + 1}</td>
                    <td className="px-4 py-2 border-b">{item.name}</td>
                    <td className="px-4 py-2 border-b">{item.businessType}</td>
                    <td className="px-4 py-2 border-b">{item.phone}</td>
                    <td className="px-4 py-2 border-b">{date}</td>
                    <td className="px-4 py-2 border-b">{time}</td>
                    
                  </tr>
                  )
              }
                
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
