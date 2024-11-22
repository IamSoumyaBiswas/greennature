"use client"
import Order, { OrderStatus } from "./_components/Order";
import { useState } from "react";

function Page() {
    const orders = [
        { id: '#172615261525611', date: '21 May 2024', status: 'In Progress', total: '₹1300' },
        { id: '#172615261525612', date: '21 May 2024', status: 'Canceled', total: '₹1300' },
        { id: '#172615261525613', date: '21 May 2024', status: 'Delivered', total: '₹1300' },
        { id: '#172615261525614', date: '21 May 2024', status: 'Delayed', total: '₹1300' },
        { id: '#172615261525615', date: '21 May 2024', status: 'Returned', total: '₹1300' },
        { id: '#172615261525616', date: '21 May 2024', status: 'In Progress', total: '₹1300' },
        { id: '#172615261525617', date: '21 May 2024', status: 'Canceled', total: '₹1300' },
        { id: '#172615261525618', date: '21 May 2024', status: 'Delivered', total: '₹1300' },
        { id: '#172615261525619', date: '21 May 2024', status: 'Delayed', total: '₹1300' },
        { id: '#172615261525620', date: '21 May 2024', status: 'Returned', total: '₹1300' },
        { id: '#172615261525621', date: '21 May 2024', status: 'In Progress', total: '₹1300' },
        { id: '#172615261525622', date: '21 May 2024', status: 'Canceled', total: '₹1300' },
        { id: '#172615261525623', date: '21 May 2024', status: 'Delivered', total: '₹1300' },
        { id: '#172615261525624', date: '21 May 2024', status: 'Delayed', total: '₹1300' },
        { id: '#172615261525625', date: '21 May 2024', status: 'Returned', total: '₹1300' },
        // Add remaining orders...
    ];

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 10;

    // Derived Pagination Logic
    const totalPages = Math.ceil(orders.length / ordersPerPage);
    const paginatedOrders = orders.slice(
        (currentPage - 1) * ordersPerPage,
        currentPage * ordersPerPage
    );

    // Handlers
    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="flex-1 px-4 py-2 space-y-6">
            <h1 className="text-3xl font-bold ">Order Details</h1>
            <div className="overflow-x-auto">
                <table className="w-full bg-white rounded-lg border" role="table">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-4 text-left font-semibold text-gray-600">Order</th>
                            <th className="py-3 px-4 text-left font-semibold text-gray-600">Purchased Date</th>
                            <th className="py-3 px-4 text-left font-semibold text-gray-600">Status</th>
                            <th className="py-3 px-4 text-left font-semibold text-gray-600">Total</th>
                            <th className="py-3 px-4 text-left font-semibold text-gray-600">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginatedOrders.map((order) => (
                            <Order
                                key={order.id}
                                id={order.id}
                                total={order.total}
                                status={order.status as OrderStatus}
                                date={order.date}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-center">
                {/* Pagination */}
                <button
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 disabled:opacity-50"
                    onClick={prevPage}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>
                <span className="mx-4">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    className="px-4 py-2 text-gray-700 hover:text-blue-600 disabled:opacity-50"
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Page;
