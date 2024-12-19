import React, { useState } from "react";

const PaymentList = () => {
    const dummyPayments = [
        { id: 1, customerName: "Alice Johnson", email: "alice@example.com", amount: 100, status: "Completed", date: "2024-12-01" },
        { id: 2, customerName: "Bob Smith", email: "bob@example.com", amount: 250, status: "Pending", date: "2024-12-02" },
        { id: 3, customerName: "Charlie Brown", email: "charlie@example.com", amount: 150, status: "Failed", date: "2024-12-03" },
        { id: 4, customerName: "Diana Ross", email: "diana@example.com", amount: 200, status: "Completed", date: "2024-12-04" },
        { id: 5, customerName: "Ethan Hunt", email: "ethan@example.com", amount: 300, status: "Pending", date: "2024-12-05" },
    ];

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPayments, setFilteredPayments] = useState(dummyPayments);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filtered = dummyPayments.filter(
            (payment) =>
                payment.customerName.toLowerCase().includes(term) ||
                payment.email.toLowerCase().includes(term) ||
                payment.status.toLowerCase().includes(term) ||
                payment.date.includes(term)
        );

        setFilteredPayments(filtered);
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Payment List</h1>

            {/* Search Input */}
            <div className="mb-4">
                <label className="font-bold" htmlFor="">Search by Anything</label>
                <input
                    type="text"
                    placeholder="Search by customer, email, status, or date"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Payment Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-[12px]">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-200 px-4 py-2 text-left">Customer Name</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Email</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Amount</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Status</th>
                            <th className="border border-gray-200 px-4 py-2 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.map((payment) => (
                            <tr key={payment.id}>
                                <td className="border border-gray-200 px-4 py-2">{payment.customerName}</td>
                                <td className="border border-gray-200 px-4 py-2">{payment.email}</td>
                                <td className="border border-gray-200 px-4 py-2">${payment.amount}</td>
                                <td
                                    className={`border border-gray-200 px-4 py-2 font-semibold ${payment.status === "Completed"
                                            ? "text-green-500"
                                            : payment.status === "Pending"
                                                ? "text-yellow-500"
                                                : "text-red-500"
                                        }`}
                                >
                                    {payment.status}
                                </td>
                                <td className="border border-gray-200 px-4 py-2">{payment.date}</td>
                            </tr>
                        ))}
                        {filteredPayments.length === 0 && (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="border border-gray-200 px-4 py-2 text-center text-gray-500"
                                >
                                    No payments found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentList;
