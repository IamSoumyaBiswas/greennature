// types.ts
export interface Product {
    id: string,
    name: string,
    cardLink: string,
    image: string,
    slug: string,
    oldPrice: number,
    newPrice: number,
    category: string,
    rating: number,
  }
  
  export interface FilterCriteria {
    categories: string[];
    ratings: number[];
    brands: string[];
    priceRange: [number, number];
    sizeRange: [number, number];
  }
  