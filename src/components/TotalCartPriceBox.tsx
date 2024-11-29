import RupeeIcon from '@/assets/icons/RupeeIcon'
import React from 'react'

interface TotalCartPriceBox {
    total: string,
     discount: string,
      deliveryCharge: string, 
      finalAmmount: string,
      saveAmmount: string,
}

function TotalCartPriceBox({ total, discount, deliveryCharge, finalAmmount, saveAmmount }:TotalCartPriceBox) {
    return (
        <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 w-full">
                {/* Cashback Offer */}
                <div className="border border-gray-300 text-center text-gray-700 text-sm py-2 mb-4 rounded-lg">
                    Bank offer cashback (5%)
                </div>
                {/* Price Details */}
                <div className="text-base font-medium text-gray-700 mb-4">
                    Price Details
                </div>
                <div className="space-y-4">
                    {/* Total Items */}
                    <div className="flex items-center justify-between text-gray-700">
                        <span>Total items</span>
                        <span className='flex  items-center justify-center'>
                        <RupeeIcon color={"#222222"} size={12} />
                            {total}
                        </span>
                    </div>
                    {/* Discount */}
                    <div className="flex justify-between text-gray-700">
                        <span>Discount</span>
                        <span className="text-[#48AD4A] flex items-center justify-center ">
                            <RupeeIcon color={"green"} size={12} />
                            {discount}
                        </span>
                    </div>
                    {/* Delivery Charges */}
                    <div className="flex justify-between text-gray-700">
                        <span>Delivery charges</span>
                        <span className=" flex items-center justify-center ">
                        <RupeeIcon color={"#222222"} size={12} />
                        {deliveryCharge}
                        </span>
                    </div>
                    {/* Total Amount */}
                    <div className="flex justify-between text-gray-700 font-medium pt-2 border-t border-dashed border-gray-400">
                        <span>Total amount</span>
                        <span className='flex  items-center justify-center'>
                        <RupeeIcon color={"#222222"} size={12} />
                        {finalAmmount}
                        </span>
                    </div>
                    {/* Savings Information */}
                    <div className="text-sm text-gray-500 mt-4">
                        <span>You will save</span> {saveAmmount} <span>on this order </span>
                    </div>
                </div>
                {/* Place Order Button */}
                <button className="w-full bg-[#2C2C2C] text-white py-2 mt-6 text-xs font-marcellus rounded-lg hover:bg-gray-900 transition duration-300">
                    Place Order
                </button>
            </div>
        </div>

    )
}

export default TotalCartPriceBox
