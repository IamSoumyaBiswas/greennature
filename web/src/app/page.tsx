import React from 'react'
import SubscribeNews from './_components/SubscribeNews';
import BlogItem from './_components/BlogItem';
import NavMenu from '@/components/header/NavMenu';

const page = () => {
  return (
    <div>
      <NavMenu/>
      <BlogItem/>
      <SubscribeNews/>

    </div>
  )
}

export default page;
