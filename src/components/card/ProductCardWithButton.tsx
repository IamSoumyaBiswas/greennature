
import RupeeIcon from '@/assets/icons/RupeeIcon';
import StarIcon from '@/assets/icons/StarIcon';
import Image from 'next/image';
import Link from 'next/link';
import Button, { ButtonType } from '../button/Button';


type ProductCategory = {
    categoryName: string;
    categoryDescription: string;
    _id: string;
};


type ProductType = {
    productName: string;
    productCardLink: string;
    productImage: string;
    productSlug: string;
    productOldPrice?: number;
    productNewPrice: number;
    productCategory: ProductCategory;
    rating?: number;
    _id: string;
};



const ProductCard = ({
    productName,
    productImage,
    productSlug,
    productOldPrice,
    productCardLink,
    productNewPrice,
    productCategory,
    rating = 4.5, // Default rating
    _id,
}: ProductType) => {
    return (
        <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg p-2 shadow-md'>
        <Link href={productCardLink}>
                <div className="relative w-full h-56 rounded-md overflow-hidden">
                    <Image
                        src={productImage}
                        layout="fill" // Automatically fills the container
                        objectFit="cover" // Ensures the image maintains its aspect ratio
                        quality={90} // Enhances image quality
                        alt={productName}
                    />
                </div>
                <div>
                <div className="lg:text-sm font-marcellus text-ellipsis line-clamp-1 overflow-hidden  mt-2">
                    {productName}
                </div>
                <div className="text-xs text-start text-[#636363] leading-4 mt-1 text-ellipsis line-clamp-1 overflow-hidden">
                    {productSlug}
                </div>

                {/* Pricing section */}
                <div className="flex items-start gap-2 lg:mt-1 md:mt-1">
                    {productOldPrice && (
                        <div className="flex  items-center">
                            <RupeeIcon color='gray' size={10}/>

                            <span className="line-through text-sm text-gray-600 ">

                                {productOldPrice}
                            </span>

                        </div>
                    )}
                    <span className="text-sm text-[#48AD4A]">
                        {productOldPrice &&
                            `${(
                                ((productOldPrice - productNewPrice) / productOldPrice) *
                                100
                            ).toFixed(0)}% off`}
                    </span>
                </div>

                <div className="">
                    <span className="lg:text-sm text-sm font-medium text-black flex items-center">
                        <RupeeIcon color='black' size={12} />
                        {productNewPrice}489
                    </span>
                </div>

                {/* Star Rating */}
                <div className="flex items-center mt-1 gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                        <StarIcon
                            key={index}
                            color={`${index < Math.floor(rating) ? 'text-yellow-500' : 'text-gray-400'
                             }`}
                        />
                    ))}
                    <span className="text-sm text-gray-600">({rating.toFixed(1)})</span>
                </div>
            </div>
            </Link>

            <div className="lg:flex flex items-center justify-center overflow-auto w-full lg:gap-[12px] gap-2 mt-1 font-marcellus border-none border-blue-500">
            <Button buttonName="Buy Now" type={ButtonType.Primary as ButtonType}  />
            <Button buttonName="Add to cart" type={ButtonType.OutLine as ButtonType} />

            </div>
      
         </div>
    );
};
export default ProductCard;