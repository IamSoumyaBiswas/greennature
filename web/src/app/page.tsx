import React from 'react'
import SubscribeNews from './_components/SubscribeNews';
import BlogItem from './_components/BlogSection';
import HeroImage from './_components/HeroImage';
import Header from '@/components/Header';

const page = () => {
  return (
    <div>
      <Header/>
      {/* <HeroImage/> */}
      <BlogItem/>
      <SubscribeNews/>

    </div>
  )
}

export default page;
