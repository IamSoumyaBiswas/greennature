"use client";

import { useState } from "react";
import Comment, { CommentInterface } from "./Comment";

// interface Review {
//   id: number;
//   username: string;
//   date: string;
//   content: string;
  
// }

const ReviewSection: React.FC = () => {
  // Example dynamic data
  const reviews:CommentInterface[] = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    username: `User${i + 1}`,
    date: `2024-11-${(i % 30) + 1}`,
    content: `This is review ${i + 1}. It’s a dynamic comment from User${i + 1}.`,
    likes: 125,
    star: 3,
    profileImage: "https://images.unsplash.com/photo-1599307690923-8ffea24780e0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }));

  const reviewsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const startIndex = (currentPage - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-screen-xl mx-auto  px-2 font-marcellus">
      {/* Review List Section */}
      <section className="md:col-span-4 space-y-4">
        {/* Reviews List */}
        <div id="reviewList" className="space-y-2">
          {currentReviews.map((review) => (
            // <div
            //   key={review.id}
            //   className="p-4 border bg-white border-gray-200 rounded-lg shadow-sm"
            // >
            //   <div className="flex justify-between items-center mb-2">
            //     <h3 className="font-semibold text-sm">{review.username}</h3>
            //     <span className="text-sm text-gray-500">{review.date}</span>
            //   </div>
            //   <p className="text-gray-700 text-sm">{review.content}</p>
            // </div>
            <Comment key={review.id} profileImage={review.profileImage} likes={review.likes} username={review.username} date={review.date} content={review.content} star={review.star} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-4 space-x-2">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-full text-sm ${
              currentPage === 1
                ? "bg-gray-200 cursor-not-allowed"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            Prev
          </button>
          <span id="pageNumber" className="px-3 py-1 text-sm">
            {currentPage}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-full text-sm ${
              currentPage === totalPages
                ? "bg-gray-200 cursor-not-allowed "
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReviewSection;
