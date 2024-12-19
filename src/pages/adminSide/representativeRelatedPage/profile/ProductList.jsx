import React, { useState } from "react";

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const products = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "A platform for online stores",
      paymentStatus: "Paid",
      nextPayment: "2024-12-20",
    },
    {
      id: 2,
      name: "POS System",
      description: "Point of Sale system",
      paymentStatus: "Due",
      nextPayment: "2025-01-15",
    },
    {
      id: 3,
      name: "HR Management Software",
      description: "Manage HR processes",
      paymentStatus: "Partial",
      nextPayment: "2024-12-25",
    },
  ];

  const handleClearFilters = () => {
    setSearchQuery("");
    setPaymentStatus("");
    setStartDate("");
    setEndDate("");
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchQuery =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPaymentStatus =
      paymentStatus === "" || product.paymentStatus === paymentStatus;

    const matchesDateRange =
      (!startDate || new Date(product.nextPayment) >= new Date(startDate)) &&
      (!endDate || new Date(product.nextPayment) <= new Date(endDate));

    return matchesSearchQuery && matchesPaymentStatus && matchesDateRange;
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name or description"
          className="p-2 border rounded"
        />
        <select
          value={paymentStatus}
          onChange={(e) => setPaymentStatus(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Payment Status</option>
          <option value="Paid">Paid</option>
          <option value="Due">Due</option>
          <option value="Partial">Partial</option>
        </select>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="p-2 border rounded"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="p-2 border rounded"
        />
      </div>
      <button
        onClick={handleClearFilters}
        className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        Clear Filters
      </button>
      {filteredProducts.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200 text-[12px]">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Payment Status</th>
              <th className="py-2 px-4 border-b">Next Payment</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td className="py-2 px-4 border-b">{product.name}</td>
                <td className="py-2 px-4 border-b">{product.description}</td>
                <td className="py-2 px-4 border-b">{product.paymentStatus}</td>
                <td className="py-2 px-4 border-b">{product.nextPayment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
