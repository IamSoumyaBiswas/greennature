import ProductDescriptionData from '@/app/_components/ProductDescriptionData';
import ProductDetails from '@/app/_components/ProductDetails';
import ReviewForm from '@/app/_components/ReviewForm';
import ProductCartWithoutButton from '@/components/ProductCartWithoutButton';
import React from 'react'

const testData = {
  description:
    "This is a premium-quality product designed to meet your needs. It combines innovative technology and superior craftsmanship to ensure exceptional performance and reliability.  From water-repellent leather to a rugged outsole, the Lunar Force 1 adapts AF-1 style, so you",

  benefits: [
    { id: 1, text: "High durability and long-lasting performance." },
    { id: 2, text: "Ergonomic design for maximum comfort." },
    { id: 3, text: "Eco-friendly and sustainable materials used." },
    { id: 4, text: "Affordable pricing without compromising on quality." }
  ],
  moredetails: [
    { id: 1, text: "High durability and long-lasting performance." },
    { id: 2, text: "Ergonomic design for maximum comfort." },
    { id: 3, text: "Eco-friendly and sustainable materials used." },
    { id: 4, text: "Affordable pricing without compromising on quality." }
  ]
};

const products = [
  {
    productName: "Wireless Bluetooth Headphones",
    productCardLink: "/products/wireless-headphones",
    productImage: "https://images.unsplash.com/photo-1727362123795-efcbc405d113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9uc2FpJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
    productSlug: "High-quality wireless headphones with noise cancellation",
    productOldPrice: 5999,
    productNewPrice: 4999,
    productCategory: {
      categoryName: "Electronics",
      categoryDescription: "Latest gadgets and devices",
      _id: "cat001"
    },
    rating: 4.7,
    _id: "prod001"
  },
  {
    productName: "Fitness Smartwatch",
    productCardLink: "/products/fitness-smartwatch",
    productImage: "https://plus.unsplash.com/premium_photo-1682542226584-e776098d5ea9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Ym9uc2FpJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D",
    productSlug: "Track your fitness goals with precision",
    productOldPrice: 9999,
    productNewPrice: 7999,
    productCategory: {
      categoryName: "Wearables",
      categoryDescription: "Smart devices for your lifestyle",
      _id: "cat002"
    },
    rating: 4.5,
    _id: "prod002"
  },
  {
    productName: "Ergonomic Office Chair",
    productCardLink: "/products/ergonomic-chair",
    productImage: "https://plus.unsplash.com/premium_photo-1682377521362-c4e8be6e62b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvbnNhaSUyMHBsYW50fGVufDB8fDB8fHww",
    productSlug: "Comfortable and stylish office chair for productivity",
    productOldPrice: 15999,
    productNewPrice: 13999,
    productCategory: {
      categoryName: "Furniture",
      categoryDescription: "Modern furniture for home and office",
      _id: "cat003"
    },
    rating: 4.8,
    _id: "prod003"
  },
  {
    productName: "Gaming Laptop",
    productCardLink: "/products/gaming-laptop",
    productImage: "https://images.unsplash.com/photo-1711477300788-9f0ef313091d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8",
    productSlug: "High-performance laptop for gaming enthusiasts",
    productOldPrice: 89999,
    productNewPrice: 79999,
    productCategory: {
      categoryName: "Computers",
      categoryDescription: "Top-notch computing devices",
      _id: "cat004"
    },
    rating: 4.6,
    _id: "prod004"
  },
  {
    productName: "Stainless Steel Water Bottle",
    productCardLink: "/products/steel-bottle",
    productImage: "https://images.unsplash.com/photo-1599845454579-d704f59b4e24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    productSlug: "Eco-friendly and durable water bottle",
    productOldPrice: 999,
    productNewPrice: 799,
    productCategory: {
      categoryName: "Home & Kitchen",
      categoryDescription: "Essentials for your home",
      _id: "cat005"
    },
    rating: 4.3,
    _id: "prod005"
  },



];

const page = () => {
  return (
    <div>
      <ProductDetails />
      <ProductDescriptionData description={testData.description} benefits={testData.benefits} moredetails={testData.moredetails} />
      <ReviewForm />
      <div className="max-w-screen-xl pb-[48px] lg:my-[0px] md:my-[0px] sm:my-[0px] my-[0px] sm:px-8 md:px-8 lg:px-24 container border-0 px-4 border-orange-700 mx-auto  gap-[16px]   grid grid-cols-2 p-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 place-items-center">
        {products.map((product) => (
          <ProductCartWithoutButton key={product._id} {...product} />
        ))}
      </div>


    </div>
  )
}

export default page;
