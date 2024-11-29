import React from 'react';
import Button, { ButtonType } from './button/Button';
import Image from 'next/image';
import RupeeIcon from '@/assets/icons/RupeeIcon';

interface ShopCartInterface {
  productName: string;
  productImage: string;
  productOldPrice?: number; // Optional for cases where no old price exists
  productNewPrice: number;
  productDiscount?: number
}

const ShopCart = ({
  productName,
  productImage,
  productNewPrice,
  productOldPrice,
  productDiscount,
}: ShopCartInterface) => {
  // Calculate discount percentage dynamically




  const discountPercentage =
    productOldPrice && productOldPrice > productNewPrice
      ? Math.round(((productOldPrice - productNewPrice) / productOldPrice) * 100)
      : 0;

  return (
    <div
      className="flex justify-between max-w-screen-lg sm:items-center  gap-4 border-b  border-gray-200 bg-white p-2  w-full ">
      <Image src={productImage}
        alt="product_01" width={100} height={100} className=" size-24  rounded object-fit" />
        <div className="flex-1 space-y-2">
          {/* <!-- Title with line clamp for two lines --> */}
          <h1 className="text-base border-0 border-red-600 font-regular mb-1 line-clamp-2">
            {productName}
          </h1>


          {/* <!-- Price and Buttons Section --> */}
          <div className="flex flex-col border-0 border-blue-600 sm:flex-row justify-between items-start sm:items-end">
            {/* <!-- Price Section --> */}
            <div className="text-gray-800  border-0 border-green-600 sm:mb-0">
              <span className="border-0 text-sm line-through text-gray-400">{productOldPrice && productOldPrice}</span>
              <span className=" text-sm text-green-600 font-semibold ml-2">{productDiscount && productDiscount}</span>
              <div className="text-sm text-left  font-bold">{productNewPrice && productNewPrice}</div>
            </div>

            {/* <!-- Buttons --> */}


            <button className="px-4 py-2 text-xs  bg-primary text-white font-regular rounded hover:bg-green-700 transition">
              Remove
            </button>

          </div>

        </div>
    </div>

  );
};

export default ShopCart;
