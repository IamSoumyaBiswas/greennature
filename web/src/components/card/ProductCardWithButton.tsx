import RupeeIcon from '@/assets/icons/RupeeIcon'
import Image from 'next/image'
import React from 'react'

interface ProductCardWithButtonInterface {
    imageUrl: string,
    title: string,
    description: string,
    originalPrice: number,
    currentPrice: number,
    discount: number,
    review: number,
    stock:boolean
}

function ProductCardWithButton({
    imageUrl,
    title,
    description,
    originalPrice,
    currentPrice,
    discount,
    review
}: ProductCardWithButtonInterface) {
  return (
    <div  className={"w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow p-2 transform"} >
        <Image src={""} alt={""} width={100} height={100} className={'object-fit lg:h-52 md:h-52  object-cover w-full rounded-md flex items-center'} />
        <h1 className={"lg:text-sm tracking-tighter mt-2"} >title</h1>
        <h2 className={"text-xs text-start text-[#636363] leading-4 mt-1 text-elipses line-clamp-1  overflow-hidden"} >{description}</h2>
        <div className="flex items-center gap-2 lg:mt-2 md:mt-1">
            <span className="text-md  flex items-center gap-1 line-through text-[#64748B] border-none border-blue-500">
                <RupeeIcon/>
                {originalPrice}
            </span>
            <span className={"text-sm text-green-400"} > 
                {discount}
            </span>
        </div>
        <div className={"flex items-center gap-1"} >
            <span className={"lg:text-lg text-sm font-bold text-black gap-1  flex items-center border-none border-blue-500"} >
                <RupeeIcon/>
                {currentPrice}
            </span>
        </div>
        <div className="flex items-center mt-1 gap-1  border-none border-blue-500">
            {/* Star */}

        </div>

        <div className=''>

        </div>
    </div>
  )
}

export default ProductCardWithButton;