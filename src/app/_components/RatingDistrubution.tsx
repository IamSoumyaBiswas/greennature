import React from "react";

interface RatingData {
  rating: number;
  percentage: number;
  count: number;
}

interface RatingDistributionProps {
  averageRating: number;
  totalReviews: string;
  ratings: RatingData[];
}

const RatingDistribution: React.FC<RatingDistributionProps> = ({
  averageRating,
  totalReviews,
  ratings,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 border-gray-400 border-dashed border rounded-lg">
      {/* Average Rating and Total Reviews */}
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold text-green-600">{averageRating}</div>
        <div className="text-sm">from {totalReviews} reviews</div>
      </div>

      {/* Star Rating Distribution */}
      <div className="flex flex-col w-full">
        {ratings.map((ratingData) => (
          <div key={ratingData.rating} className="flex items-center space-x-2 my-1">
            <div className="text-sm font-regular">{ratingData.rating}.0</div>
            <div className="flex-1 h-[6px] bg-gray-200 rounded-full gap-2">
              <div
                className="h-[6px] bg-green-500 rounded-full"
                style={{ width: `${ratingData.percentage}%` }}
              ></div>
            </div>
            <div className="text-sm">{ratingData.count}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingDistribution;
