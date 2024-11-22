
interface OrderInterface {
    id: string,
    date: string,
    status: OrderStatus,
    total: string,
}

export enum OrderStatus {
    InProgress = "In Progress",
    Canceled = "Canceled",
    Delivered = "Delivered",
    Delayed = "Delayed",
    Returned = "Returned"
}



function Order({ id, date, status, total }: OrderInterface) {

    const statusColors: Record<OrderStatus, string> = {
        [OrderStatus.InProgress]: 'bg-blue-500 text-white',
        [OrderStatus.Canceled]: 'bg-red-500 text-white',
        [OrderStatus.Delivered]: 'bg-green-500 text-white',
        [OrderStatus.Delayed]: 'bg-yellow-500 text-white',
        [OrderStatus.Returned]: 'bg-red-500 text-white',
    };

    return (
        <tr className="border-b text-nowrap bg-white">
            <td className="py-3 px-4">{id}</td>
            <td className="py-3 px-4">{date}</td>
            <td className="py-3 px-4">
                <span className={`px-2 py-1 rounded ${statusColors[status]}`}>{status}</span>
            </td>
            <td className="py-3 px-4">{total}</td>
            <td className="py-3 px-4 text-blue-600 hover:underline cursor-pointer">
                View
            </td>
        </tr>
    )
}

export default Order