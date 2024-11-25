import React from 'react';
import Button, { ButtonType } from './button/Button';
import Image from 'next/image';
import RupeeIcon from '@/assets/icons/RupeeIcon';

interface ShopCartInterface {
  productName: string;
  productImage: string;
  productOldPrice?: number; // Optional for cases where no old price exists
  productNewPrice: number;
}

const ShopCart = ({
  productName,
  productImage,
  productNewPrice,
  productOldPrice,
}: ShopCartInterface) => {
  // Calculate discount percentage dynamically
  const discountPercentage =
    productOldPrice && productOldPrice > productNewPrice
      ? Math.round(((productOldPrice - productNewPrice) / productOldPrice) * 100)
      : 0;

  return (
    <div className="flex justify-between items-center max-w-screen-lg gap-4 border-b border-gray-200 bg-white p-4 w-full rounded-lg shadow-sm">
      {/* Product Image */}
      <div className="relative w-24 h-24 flex-shrink-0">
        <Image
          src={productImage}
          layout="fill"
          objectFit="cover"
          quality={90}
          alt={productName}
          className="rounded-lg"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 space-y-2">
        {/* Product Name */}
        <h1 className="text-base font-medium text-gray-800 line-clamp-2">
          {productName}
        </h1>

        {/* Price Section */}
        <div className="text-sm text-gray-800">
          {productOldPrice && (
            <span className="line-through flex items-center text-gray-400 mr-2">
              <RupeeIcon color='gray' size={12} />
              {productOldPrice.toLocaleString()}
            </span>
          )}
          <span className="text-green-600 flex items-center font-bold">
            <RupeeIcon color='black' size={12} />
            ₹{productNewPrice.toLocaleString()}
          </span>
          {discountPercentage > 0 && (
            <span className="ml-2 text-sm text-red-500">
              {discountPercentage}% Off
            </span>
          )}
        </div>
        
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-2">
        <Button
          buttonName="Remove"
          type={ButtonType.OutLine as ButtonType}
          onClick={() => console.log('Remove item clicked')}
        />
        <Button
          buttonName="Add to Wishlist"
          type={ButtonType.Primary as ButtonType}
          onClick={() => console.log('Add to Wishlist clicked')}
        />
      </div>
    </div>
  );
};

export default ShopCart;
