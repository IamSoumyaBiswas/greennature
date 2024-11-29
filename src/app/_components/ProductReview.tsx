import React from 'react'
import ProductDescriptionData from './ProductDescriptionData';
import RatingDistribution from './RatingDistrubution';

const ProductReview = () => {
    const ratingsData = [
        { rating: 5, percentage: 96, count: 2823 },
        { rating: 4, percentage: 76, count: 1823 },
        { rating: 3, percentage: 56, count: 823 },
        { rating: 2, percentage: 36, count: 423 },
        { rating: 1, percentage: 16, count: 223 },
      ];
    
  return (
    <div className='container mx-auto max-w-screen-xl py-8 px-4'>
        <RatingDistribution 
        averageRating={4.5}
        totalReviews='1.25k'
        ratings={ratingsData} />
    </div>
  )
}

export default ProductReview;
