
import React from 'react';
import Image from 'next/image';
import FilterSidebar from '@/components/filters/FilterSidebar';
import ProductCard from './_cardList/ProductCard';
import SortFilter from './_cardList/SortFilter';

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
  {
    productName: "Stainless Steel Water Bottle",
    productCardLink: "/products/steel-bottle",
    productImage: "https://images.unsplash.com/photo-1711439964807-c29a126f1f72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8",
    productSlug: "Eco-friendly and durable water bottle",
    productOldPrice: 999,
    productNewPrice: 799,
    productCategory: {
      categoryName: "Home & Kitchen",
      categoryDescription: "Essentials for your home",
      _id: "cat005"
    },
    rating: 4.3,
    _id: "prod006"
  },
  {
    productName: "Stainless Steel Water Bottle",
    productCardLink: "/products/steel-bottle",
    productImage: "https://images.unsplash.com/photo-1654699878164-909de66be81c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8",
    productSlug: "Eco-friendly and durable water bottle",
    productOldPrice: 999,
    productNewPrice: 799,
    productCategory: {
      categoryName: "Home & Kitchen",
      categoryDescription: "Essentials for your home",
      _id: "cat005"
    },
    rating: 4.3,
    _id: "prod007"
  },

  {
    productName: "Stainless Steel Water Bottle",
    productCardLink: "/products/steel-bottle",
    productImage: "https://images.unsplash.com/photo-1613143323550-7a9044756070?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQyfHx8ZW58MHx8fHx8",
    productSlug: "Eco-friendly and durable water bottle",
    productOldPrice: 999,
    productNewPrice: 799,
    productCategory: {
      categoryName: "Home & Kitchen",
      categoryDescription: "Essentials for your home",
      _id: "cat005"
    },
    rating: 4.3,
    _id: "prod008"
  },


];

const ProductList = () => {
  return (
    <div className='flex mx-auto max-w-screen-xl space-x-0 px-2 lg:px-2 lg:space-x-4'>
      {/* Filter products */}
      
      <FilterSidebar/>

      <div className='flex flex-col '>
      <SortFilter/>
      <ProductCard/>

      </div>
      
  </div>
  );
};

export default ProductList;
