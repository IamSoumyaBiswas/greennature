"use client";

import Button, { ButtonType } from "@/components/button/Button";
import React, { useState } from "react";

// Star Icon Component
interface StarIconProps {
  active: boolean;
}

const StarIcon: React.FC<StarIconProps> = ({ active }) => {
  return (
    <svg
      className={`w-5 h-5 cursor-pointer ${
        active ? "text-yellow-500" : "text-gray-300"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
    </svg>
  );
};

// Review Form Component
const ReviewForm: React.FC = () => {
  const [reviewTitle, setReviewTitle] = useState<string>("");
  const [reviewContent, setReviewContent] = useState<string>("");
  const [rating, setRating] = useState<number>(0); // State to track selected rating

  const handleRatingClick = (star: number) => {
    setRating(star);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const reviewData = {
      title: reviewTitle,
      content: reviewContent,
      rating,
    };

    console.log("Review Submitted:", reviewData);

    // Reset the form
    setReviewTitle("");
    setReviewContent("");
    setRating(0);
  };

  return (
    <div className="bg-gray-100 flex lg:py-[96px] py-[16px] items-center justify-center">
      <div className="max-w-screen-xl w-full mx-auto px-12 py-12 bg-white rounded-lg">
        <h2 className="text-xl font-medium text-gray-800 mb-2">Write a Review</h2>

        <form onSubmit={handleSubmit}>
          {/* Star Rating Section */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2 text-sm">
              Rating
            </label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <div
                  key={star}
                  onClick={() => handleRatingClick(star)}
                  role="button"
                  aria-label={`Rate ${star} star`}
                >
                  <StarIcon active={star <= rating} />
                </div>
              ))}
            </div>
          </div>

          {/* Review Title */}
          <div className="mb-2">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="title"
            >
              Review Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Great Products"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              className="w-full border text-sm border-gray-300 p-2 rounded-lg"
              required
            />
          </div>

          {/* Review Content */}
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2 text-sm"
              htmlFor="content"
            >
              Review Content
            </label>
            <textarea
              id="content"
              rows={5}
              placeholder="Write your review here..."
              value={reviewContent}
              onChange={(e) => setReviewContent(e.target.value)}
              className="w-full border text-sm border-gray-300 p-2 rounded-lg resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary text-white font-regular px-4 py-2 text-sm rounded-lg hover:bg-green-800"
          >
            Submit Review
          </button>
          {/* <Button buttonName="Submit review" type={ButtonType.OutLine} /> */}
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
