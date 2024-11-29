// components/ProductDescription.tsx

import CorrectIcon from '@/assets/icons/CorrectIcon';
import React from 'react';

interface Benefit {
  id: number;
  text: string;
}
interface MoreDetails{
    id:number;
    text:string
}

interface ProductDescriptionProps {
  description: string;
  benefits: Benefit[];
  moredetails:MoreDetails[];
}

const ProductDescriptionData: React.FC<ProductDescriptionProps> = ({ description, benefits, moredetails }) => {
  return (
    <div className="bg-white lg:py-[48px] py-[16px] text-black font-marcellus px-4">

      <div className="max-w-screen-xl mx-auto px-2 py-2">

        {/* Product Description */}
        <div className="pb-4">
          <h2 className="text-[#0F172A] lg:text-lg text-base font-semibold mb-2 font-marcellus">Description</h2>
          <p className="lg:text-base text-sm text-[#303030] font-marcellus">{description}</p>
        </div>

        {/* Benefits Section */}
        <div className="pb-4">
          <h2 className="text-[#0F172A] lg:text-lg text-base font-semibold font-marcellus mb-2">Benefits</h2>
          <ul className="list-none space-y-2 text-[#303030] lg:text-base text-sm ">
            {benefits.map((benefit) => (
              <li key={benefit.id} className="flex items-start font-marcellus">
                <span className="mr-2">

                 <CorrectIcon/>

                </span>
                {benefit.text}
              </li>
            ))}
          </ul>
        </div>

        {/* More detials */}
        <div className='pb-4'>
             <h2 className='text-[#0F172A] lg:text-lg text-base font-semibold mb-2'>More Detials</h2>
             <ul className='list-none space-y-2 text-[#303030] lg:text-base text-sm'>
             {moredetails.map((benefit) => (
              <li key={benefit.id} className="flex items-start font-marcellus">
                <span className="mr-2">

                 <CorrectIcon/>

                </span>
                {benefit.text}
              </li>
            ))}
             </ul>
        </div>

      </div>
    </div>
  );
};

export default ProductDescriptionData;
