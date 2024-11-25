import Image from 'next/image'
import React from 'react'
import StarIcon from '@/assets/icons/StarIcon'; // Assuming you have a `StarIcon` component

interface ClientReviewInterface {
  clientName: string;
  rating: number;
  review: string;
  clientImage: string;
}

function ClientReview({ clientName, rating, review, clientImage }: ClientReviewInterface) {
  return (
    <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 snap-start bg-[#FFFFFF] shadow-md rounded-lg p-4 flex-shrink-0">
      <div className="flex flex-col items-start gap-2">
        <Image
          src={clientImage}
          alt={`${clientName}-${review}`}
          width={100}
          height={100}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex flex-col items-start justify-center">
          <h2 className="text-sm font-semibold text-gray-900">{clientName}</h2>
          <div className="flex items-center">
            {/* Render 5 stars dynamically using map */}
            {[...Array(5)].map((_, index) => (
              <StarIcon
                key={index}
                color={index < rating ? 'text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
        </div>
      </div>
      <p className="mt-2 text-gray-600 text-sm">{review}</p>
    </div>
  );
}

export default ClientReview;
