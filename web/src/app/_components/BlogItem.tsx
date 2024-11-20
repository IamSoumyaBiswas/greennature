import TopRightArrow from '@/assets/icons/TopRightArrow';
import Image from 'next/image';
import React from 'react';

interface BlogItemInterface {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
}

const BlogItem: React.FC = () => {
  // Sample blog data, replace this with a dynamic fetch from an API if needed
  const blogs: BlogItemInterface[] = [
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
        "https://images.unsplash.com/photo-1634165461820-73bf7738457d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Lorem Ipsum has been the industry's standard dummy text...",
      date: "May 12 2024",
    },
    // Add more blog items here
  ];

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog.id} className="blog-item">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            width={500}
            height={300}
            className="blog-image"
          />
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-date">{blog.date}</p>
          <button className="read-more">
            Read More <TopRightArrow />
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogItem;
