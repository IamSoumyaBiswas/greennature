
function page() {
  return (
    <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Order Details</h1>
        <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="py-3 px-4 text-left font-semibold text-gray-600">Order</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-600">Purchased Date</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-600">Status</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-600">Total</th>
                        <th className="py-3 px-4 text-left font-semibold text-gray-600">Action</th>
                    </tr>
                </thead>
                <tbody id="orderTableBody">
                    {/* <!-- Rows will be generated here --> */}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default page