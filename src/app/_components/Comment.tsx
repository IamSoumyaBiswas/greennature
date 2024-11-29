import React, { useState } from "react";
import StarIcon from "@/assets/icons/StarIcon";

export interface CommentInterface {
  date: string;
  content: string;
  likes: number;
  star: number;
  username: string;
  profileImage: string;
  id: string;
}

function Comment({
  date,
  content,
  likes,
  star,
  username,
  profileImage,
  id,
}: CommentInterface) {
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
      setLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      if (disliked) {
        setLikeCount((prev) => prev + 1); // Remove dislike effect
        setDisliked(false);
      }
      setLiked(true);
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setLikeCount((prev) => prev + 1);
      setDisliked(false);
    } else {
      setLikeCount((prev) => prev - 1);
      if (liked) {
        setLikeCount((prev) => prev - 1); // Remove like effect
        setLiked(false);
      }
      setDisliked(true);
    }
  };

  return (
    <div className="p-4 bg-gray-50 rounded-lg border flex flex-col md:flex-row items-start gap-4">
      {/* Profile image and username */}
      <div className="flex-shrink-0">
        <img
          src={profileImage}
          alt={`${username}'s profile`}
          className="w-8 h-8 rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center w-full justify-between gap-2">
              <span className="font-medium text-base text-gray-800">{username}</span>
              <span className="text-xs text-gray-500">{date}</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-500 mt-1">
              {/* Generate stars based on the star count */}
              {Array.from({ length: star }, (_, index) => (
                <StarIcon key={index} color="yellow" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-700 font-marcellus font-light text-sm mt-1">{content}</p>
        <div className="flex items-center gap-4 mt-1">
          <button
            onClick={handleLike}
            className={`flex text-base items-center gap-1 ${
              liked ? "text-blue-600" : "text-gray-600"
            }`}
          >
            <span>👍</span>
            <span>{likeCount}</span>
          </button>
          <button
            onClick={handleDislike}
            className={`flex text-base items-center gap-1 ${
              disliked ? "text-red-600" : "text-gray-600"
            }`}
          >
            <span>👎</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Comment;
