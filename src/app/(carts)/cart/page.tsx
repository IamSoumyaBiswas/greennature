import ShopCart from '@/components/ShopCart'
import TotalCartPriceBox from '@/components/TotalCartPriceBox'
import React from 'react'

function page() {
    const shopCartData = [
        {
          "productName": "Wireless Headphones",
          "productImage": "https://images.unsplash.com/photo-1599307690923-8ffea24780e0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "productOldPrice": 89.99,
          "productNewPrice": 69.99
        },
        {
          "productName": "Smartphone Case",
          "productImage": "https://images.unsplash.com/photo-1599307690923-8ffea24780e0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "productNewPrice": 15.99
        },
        {
          "productName": "Gaming Mouse",
          "productImage": "https://images.unsplash.com/photo-1599307690923-8ffea24780e0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "productOldPrice": 49.99,
          "productNewPrice": 39.99
        },
        {
          "productName": "Fitness Tracker",
          "productImage": "https://images.unsplash.com/photo-1599307690923-8ffea24780e0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "productOldPrice": 129.99,
          "productNewPrice": 99.99
        },
        {
          "productName": "Portable Charger",
          "productImage": "https://images.unsplash.com/photo-1599307690923-8ffea24780e0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "productNewPrice": 29.99
        }
      ]
  return (
    <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto p-4 gap-6 my-[48px]">
        <div className="w-full lg:w-3/4 space-y-4 bg-white p-2">
        {
            shopCartData.map((item,index)=> <ShopCart key={index} productName={item.productName} productImage={item.productImage} productNewPrice={item.productNewPrice} productOldPrice={item.productOldPrice} />)
        }
        </div>
        <TotalCartPriceBox total='1230' discount='10' deliveryCharge='40' finalAmmount='1000' saveAmmount='200' />
    </div>
  )
}

export default page