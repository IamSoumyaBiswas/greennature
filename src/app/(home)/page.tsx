import React from 'react'
import HeroImage from './_components/HeroImage'
import CategorySlider from './_components/CategorySlider'
import PopularProducts from './_components/PopularProducts'
import Suscribe from './_components/Suscribe'
import BlogList from './_components/BlogList'
import HappyClient from './_components/HappyClient'

function page() {
  return (
    <main>
        <HeroImage />
        <CategorySlider />
        <PopularProducts />
        <Suscribe />
        <BlogList />
        <HappyClient />
    </main>
  )
}

export default page