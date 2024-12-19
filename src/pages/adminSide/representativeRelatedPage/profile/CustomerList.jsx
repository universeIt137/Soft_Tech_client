import React from "react";

const CustomerList = () => {
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
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Contact</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{customer.id}</td>
                <td className="px-4 py-2">{customer.name}</td>
                <td className="px-4 py-2">{customer.email}</td>
                <td className="px-4 py-2">{customer.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
