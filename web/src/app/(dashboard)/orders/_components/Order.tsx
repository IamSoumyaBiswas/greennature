import React from 'react'

function Order() {

    enum statusColors {
        'In Progress': 'bg-blue-500 text-white',
        'Canceled': 'bg-red-500 text-white',
        'Delivered': 'bg-green-500 text-white',
        'Delayed': 'bg-yellow-500 text-white',
        'Returned': 'bg-red-500 text-white',
    };

    return (
    <div>Order</div>
  )
}

export default Order