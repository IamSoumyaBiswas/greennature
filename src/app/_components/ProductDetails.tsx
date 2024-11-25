"use client";
import RupeeIcon from "@/assets/icons/RupeeIcon";
import Button, { ButtonType } from "@/components/button/Button";
import Image from "next/image";
import React, { useState } from "react";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPrice: number;
  discountPercentage: number;
  rating: number;
  reviews: number;
  images: string[];
  highlights: string[];
}

function ProductDetails() {

  const ProductData: Array<Product> = [
    {
      id: "prod001",
      title: "Philodendron Brasil Pothos With Hanging Pot eith more flexble bonsai plant",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
      price: 15.99,
      discountPrice: 12.99,
      discountPercentage: 18,
      rating: 4.5,
      reviews: 120,
      images: [
        "https://images.unsplash.com/photo-1613143323550-7a9044756070?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1654699878164-909de66be81c?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3",
        "https://images.unsplash.com/photo-1711439964800-db5bf4731b64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1711439964800-db5bf4731b64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      ],
      highlights: [
        "100% Organic",
        "Rich in Antioxidants",
        "Boosts Immune System",
        "Sustainable Packaging",
      ],
    },
  ];

  const [mainImage, setMainImage] = useState(ProductData[0].images[0]);

  return (
    <div className="lg:pt-[48px] lg:pb-[48px] py-[16px] bg-[#F6F6F6]">
      <div className="container mx-auto max-w-screen-xl px-2 py-2 font-marcellus">
        <div className="product-container flex flex-col lg:flex-row md:flex-row items-center lg:items-start md:items-start gap-4">
          {/* Product Image Container */}
          <div className="product-image w-full lg:w-1/2 md:w-1/2 mb-6 lg:mb-0">
            {/* Main Product Image */}
            <Image
              src={mainImage}
              height={600}
              width={600}
              quality={100}
              objectFit="cover"
              alt={ProductData[0].title}
              className="w-full lg:h-[540px] md:h-[540px] h-[440px] object-bottom rounded-md"
              priority
            />
            {/* Thumbnail Images */}
            <div className="flex mt-4 space-x-4 justify-center lg:justify-center">
              {ProductData[0].images.map((image, idx) => (
                <Image
                  key={idx}
                  src={image}
                  alt={`Thumbnail ${idx + 1}`}
                  width={80}
                  height={80}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer ${mainImage === image ? "ring-2 ring-blue-500" : ""
                    }`}
                  onClick={() => setMainImage(image)}
                />
              ))}
            </div>
          </div>
          {/* Product Details */}
          <div className="product-details w-full lg:w-1/2 md:w-1/2  px-4 py-2 rounded-lg space-y-4">

            {/* <p className="text-gray-500 text-xs border-0 border-blue-500">
              Sponsored
            </p>
             */}
            <h1 className="lg:text-xl text-lg font-semibold text-gray-800">
              {ProductData[0].title}
            </h1>

            <p className="text-gray-700 font-regular text-lg ">
              {ProductData[0].description}
            </p>

            {/* Star & review section */}
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-400">
                {[...Array(Math.floor(ProductData[0].rating))].map((_, idx) => (
                  <svg
                    key={idx}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                ({ProductData[0].reviews} reviews)
              </p>
            </div>

            {/* Price Section */}
            <div className="bg-gray-100 h-auto max-w-xs">
              <div className="flex items-center gap-2 font-roboto">
                <span className="text-base flex items-center   line-through text-[#64748B]">
                  <RupeeIcon color="gray" size={13} />
                  {ProductData[0].price}
                </span>
                <span className="text-sm text-[#48AD4A]">
                  {ProductData[0].discountPercentage}% Off
                </span>
              </div>
              <div className="flex items-center font-roboto">
                <span className="lg:text-lg text-base font-bold flex items-center text-black">
                  <RupeeIcon color="black" size={14} />
                  {ProductData[0].discountPrice}
                </span>
              </div>
            </div>
            {/* Highlights */}
            <div className="mt-2">
              <p className="font-semibold text-sm tracking-wider">Highlights</p>
              <ul className="mt-2 space-y-2 text-gray-600 text-sm">
                {ProductData[0].highlights.map((highlight, idx) => (
                  <li key={idx}>✔ {highlight}</li>
                ))}
              </ul>
            </div>

            {/* Button */}
            <div className="flex  lg:gap-6 md:gap-6 gap-2">
              <Button buttonName="Add to cart" type={ButtonType.Primary as ButtonType} />
              <Button buttonName="Buy Now" type={ButtonType.OutLine as ButtonType} />
            </div>

            {/* Enter pincode */}
            <div className="flex items-center w-full space-x-2">
              <div className="flex-grow">
                <input
                  type="text"
                  className="bg-white border border-gray-800 rounded px-4 py-[6px] text-sm w-full"
                  placeholder="Enter Pincode"
                />
              </div>
              <div>
                <button className="bg-green-900 px-4 py-[10px] text-nowrap text-xs text-white rounded">
                  Check Pincode
                </button>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
