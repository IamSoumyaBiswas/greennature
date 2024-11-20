import TopRightArrow from '@/assets/icons/TopRightArrow'
import Image from 'next/image'
import React from 'react'

interface BlogItemInterface{
    id: string;
    imageUrl: string;
    title: string;
    date: string;
}

<<<<<<< HEAD
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
    {
        id: 2,
        imageUrl:
          "https://images.unsplash.com/photo-1634165461820-73bf7738457d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
        title: "Lorem Ipsum has been the industry's standard dummy text...",
        date: "May 12 2024",
    },
     
    // Add more blog items here
  ];
=======
>>>>>>> 1801d73f6733141360c319e288dc45ead107c40b

function BlogItem({
    id,
    imageUrl,
    title,
    date,}: BlogItemInterface) {
  return (
    <div
            className="relative shadow-lg rounded-lg overflow-hidden"
            id={id}
          >
            <Image
              src={imageUrl}
              alt="Blog Image"
              height={100}
              width={100}
              className="w-full h-64 object-cover"
              
            />
            <div className="absolute bottom-0 px-4 py-4 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white">
              <h3 className="text-lg font-regular mb-2">{title}</h3>
              <p className="text-sm">{date}</p>
            </div>
            <div className="absolute bottom-2 right-6 bg-white rounded-full">
              {/* SVG Icon */}
              <TopRightArrow />
            </div>
          </div>
  )
}

export default BlogItem