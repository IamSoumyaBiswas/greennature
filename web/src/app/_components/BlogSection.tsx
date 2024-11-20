// components/BlogItem.tsx
import Link from "next/link";
import React from "react";
import BlogItem from "./BlogItem";

// Type definition for blog item
interface Blog {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
}

const BlogSection: React.FC = () => {
  // Sample blog data, replace this with a dynamic fetch from an API if needed
  const blogs: Blog[] = [
    {
      id: "1",
      imageUrl:
        "https://images.unsplash.com/photo-1634165461820-73bf7738457d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Lorem Ipsum has been the industry's standard dummy text...",
      date: "May 12 2024",
    },
    {
      id: "2",
      imageUrl:
        "https://images.unsplash.com/photo-1503149779833-1de50ebe5f8a?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Lorem Ipsum has been the industry's standard dummy text...",
      date: "May 12 2024",
    },
    {
      id: "3",
      imageUrl:
        "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          <BlogItem key={blog.id} id={blog.id} title={blog.title} imageUrl={blog.imageUrl} date={blog.date}  />
        ))}
      </div>
      {/* View All */}
      <div className="text-end">
        <Link
          href="#"
          className="hover:underline text-green-800 border-0 hover:text-primaryLight"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default BlogSection;
