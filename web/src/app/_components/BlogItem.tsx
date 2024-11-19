// components/BlogItem.tsx
import React from "react";

// Type definition for blog item
interface Blog {
  id: number;
  imageUrl: string;
  title: string;
  date: string;
}

const BlogItem: React.FC = () => {
  // Sample blog data, replace this with a dynamic fetch from an API if needed
  const blogs: Blog[] = [
    {
      id: 1,
      imageUrl:
        "https://images.unsplash.com/photo-1634165461820-73bf7738457d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Lorem Ipsum has been the industry's standard dummy text...",
      date: "May 12 2024",
    },
    // Add more blog items here
  ];

  return (
    <div className="lg:py-24 md:py-12 py-4 lg:px-0 px-4 max-w-screen-xl space-y-8 border-0 container mx-auto">
      <h1 className="lg:text-2xl md:text-2xl text-xl font-marcellus mb-0">
        Latest Plant News
      </h1>
      <div className="grid lg:gap-6 md:gap-4 gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={blog.imageUrl}
              alt="Blog Image"
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 px-4 py-4 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white">
              <h3 className="text-lg font-regular mb-2">{blog.title}</h3>
              <p className="text-sm">{blog.date}</p>
            </div>
            <div className="absolute bottom-2 right-6 bg-white p-2 rounded-full">
              {/* SVG Icon */}
              <svg
                width={20}
                height={20}
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z"
                  fill="white"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.513 32.4856C15.3599 32.3326 15.2818 32.117..."
                  fill="#020617"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
      {/* View All */}
      <div className="text-end">
        <a
          href="#"
          className="hover:underline text-green-800 border-0 hover:text-primaryLight"
        >
          View All
        </a>
      </div>
    </div>
  );
};

export default BlogItem;
