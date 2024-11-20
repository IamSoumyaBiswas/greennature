import React from 'react'
import SubscribeNews from './_components/SubscribeNews';
import BlogItem from './_components/BlogItem';
import Header from '@/components/Header';

const page = () => {
  return (
    <div>
      <Header/>
      <BlogItem/>
      <SubscribeNews/>

    </div>
  )
}

export default page;
