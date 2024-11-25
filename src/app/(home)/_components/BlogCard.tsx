import TopRightArrow from '@/assets/icons/TopRightArrow';
import Image from 'next/image';
import React from 'react';

interface BlogCardInterface {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
}

function BlogCard({id,imageUrl,title,date}:BlogCardInterface) {
  

  return (
    <div className="relative shadow-lg rounded-lg overflow-hidden">
                    <Image src={imageUrl}
                        alt="Blog Image" width={100} height={100} className="w-full h-64 object-cover"/>

                    <div
                        className="absolute bottom-0 px-4 py-4 bg-gradient-to-t from-black via-transparent to-transparent w-full text-white">
                        <h3 className="text-lg font-regular mb-2">{title}
                        </h3>
                        <p className="text-sm">{date}</p>
                    </div>

                    <div className="absolute bottom-2 right-6 bg-white p-2 rounded-full">
                        <TopRightArrow />
                    </div>
                </div>
  );
};

export default BlogCard;
