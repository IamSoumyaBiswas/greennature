// // components/FilterSidebar.tsx
// import React, { useState } from "react";
// import { FilterCriteria } from "./types"

// interface FilterSidebarProps {
//   onFilterChange: (filters: FilterCriteria) => void;
// }

// const FilterSidebar: React.FC<FilterSidebarProps> = ({ onFilterChange }:FilterSidebarProps) => {
//   const [filters, setFilters] = useState<FilterCriteria>({
//     categories: [],
//     ratings: [],
//     brands: [],
//     priceRange: [0, 2000],
//     sizeRange: [5, 10],
//   });

//   // const handleCheckboxChange = (filterType: string, value: string | number) => {


//   //   setFilters((prev) => {
//   //     const updated = { ...prev };
//   //     const list = updated[filterType as keyof FilterCriteria] as string[] | number[];
//   //     if (list.includes(value)) {
//   //       updated[filterType as keyof FilterCriteria] = list.filter((item) => item !== value);
//   //     } else {
//   //       updated[filterType as keyof FilterCriteria] = [...list, value];
//   //     }
//   //     return updated;
//   //   });
//   // };


//   const handleCheckboxChange = (filterType: keyof FilterCriteria, value: string | number) => {
//     setFilters((prev) => {
//       const updated = { ...prev };
//       const list = updated[filterType];
      
//       // Ensure list is an array before performing operations
//       if (Array.isArray(list)) {
//         if (list.includes(value)) {
//           updated[filterType] = list.filter((item) => item !== value);
//         } else {
//           updated[filterType] = [...list, value];
//         }
//       }
//       return updated;
//     });
//   };
  

//   const handleRangeChange = (filterType: string, value: number, index: number) => {
//     setFilters((prev) => {
//       const updated = { ...prev };
//       updated[filterType as keyof FilterCriteria][index] = value;
//       return updated;
//     });
//   };

//   const clearAll = () => setFilters({
//     categories: [],
//     ratings: [],
//     brands: [],
//     priceRange: [0, 200],
//     sizeRange: [5, 10],
//   });

//   return (
//     <aside className="bg-white p-4 w-80 rounded-lg shadow-lg space-y-6 hidden lg:flex flex-col">
//       <div className="flex items-center justify-between">
//         <span className="text-primaryLight text-lg font-bold">Filters</span>
//         <button onClick={clearAll} className="text-gray-600 rounded-2xl hover:bg-gray-100">Clear All</button>
//       </div>
//       {/* Category Filter */}
//       <div>
//         <h3 className="text-md mb-2">Category</h3>
//         <ul className="space-y-2">
//           {["Tropical", "Herbs", "Ferns", "Indoor Plant", "Outdoor Plant"].map((category) => (
//             <li key={category}>
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange("categories", category)}
//               />
//               <label className="ml-2">{category}</label>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* Ratings Filter */}
//       <div>
//         <h3 className="text-md mb-2">Ratings</h3>
//         <ul className="space-y-2">
//           {[5, 4, 3, 2, 1].map((rating) => (
//             <li key={rating}>
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange("ratings", rating)}
//               />
//               <label className="ml-2">{"⭐".repeat(rating)} & up</label>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {/* Price Range */}
//       <div>
//         <h3 className="text-md mb-2">Price</h3>
//         <input
//           type="range"
//           min={0}
//           max={200}
//           value={filters.priceRange[1]}
//           onChange={(e) => handleRangeChange("priceRange", +e.target.value, 1)}
//         />
//         <div className="flex justify-between text-sm mt-2">
//           <span>₹{filters.priceRange[0]}</span>
//           <span>₹{filters.priceRange[1]}</span>
//         </div>
//       </div>
//     </aside>
//   );
// };

// export default FilterSidebar;


import React from 'react'

const FilterSidebar = () => {
  return (
  
    <div className="border-2  border-blue-500">
      <aside className="bg-white lg:p-4 p-2 w-80 border-0 border-gray-800 rounded-lg shadow-lg space-y-6 lg:flex flex-col hidden">
        {/* Filter Sidebar */}
        <div className="flex items-center justify-between ">
          <span className="text-primaryLight text-lg font-marcellus font-bold">
            Filters
          </span>
          <button className="border-none text-[#475569] rounded-2xl hover:bg-gray-100">
            Clear All
          </button>
        </div>
        {/* Category Filter */}
        <div className="text-sm">
          <h3 className="font-regular text-md mb-2">Category</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <input type="checkbox" id="category1" className="mr-2 text-xs" />
              <label htmlFor="category1">Tropical</label>
            </li>
            <li>
              <input type="checkbox" id="category2" className="mr-2 text-xs" />
              <label htmlFor="category2">Herbs</label>
            </li>
            <li>
              <input type="checkbox" id="category3" className="mr-2 text-xs" />
              <label htmlFor="category3">Ferns</label>
            </li>
            <li>
              <input type="checkbox" id="category4" className="mr-2 text-xs" />
              <label htmlFor="category4">Indoor Plant</label>
            </li>
            <li>
              <input type="checkbox" id="category5" className="mr-2 text-xs" />
              <label htmlFor="category5">Outdoor Plant</label>
            </li>
            <li>
              <a href="#" className="text-blue-500 text-xs">
                Show more
              </a>
            </li>
          </ul>
        </div>
        {/* Ratings Filter */}
        <div>
          <h3 className=" text-md mb-2">Ratings</h3>
          <ul className="space-y-2">
            <li>
              <input type="checkbox" id="rating5" className="mr-2" />
              <label className="text-sm" htmlFor="rating5">
                ⭐⭐⭐⭐⭐ &amp; up (1991)
              </label>
            </li>
            <li>
              <input type="checkbox" id="rating4" className="mr-2" />
              <label className="text-sm" htmlFor="rating4">
                ⭐⭐⭐⭐ &amp; up (200)
              </label>
            </li>
            <li>
              <input type="checkbox" id="rating3" className="mr-2" />
              <label className="text-sm" htmlFor="rating3">
                ⭐⭐⭐ &amp; up (200)
              </label>
            </li>
            <li>
              <input type="checkbox" id="rating2" className="mr-2" />
              <label className="text-sm" htmlFor="rating2">
                ⭐⭐ &amp; up (200)
              </label>
            </li>
            <li>
              <input type="checkbox" id="rating1" className="mr-2" />
              <label className="text-sm" htmlFor="rating1">
                ⭐ &amp; up (200)
              </label>
            </li>
          </ul>
        </div>
        {/* Brand Filter */}
        <div>
          <h3 className="font-regular text-md mb-4">Brand</h3>
          <ul className="space-y-2">
            <li>
              <input type="checkbox" id="brand1" className="mr-2" />
              <label className="text-sm" htmlFor="brand1">
                Lorem
              </label>
            </li>
            <li>
              <input type="checkbox" id="brand2" className="mr-2" />
              <label className="text-sm" htmlFor="brand2">
                Lorem
              </label>
            </li>
            <li>
              <input type="checkbox" id="brand3" className="mr-2" />
              <label className="text-sm" htmlFor="brand3">
                Lorem
              </label>
            </li>
            <li>
              <input type="checkbox" id="brand4" className="mr-2" />
              <label className="text-sm" htmlFor="brand4">
                Lorem
              </label>
            </li>
            <li>
              <a href="#" className="text-blue-500 text-sm">
                Show more
              </a>
            </li>
          </ul>
        </div>
        {/* Price Filter */}
        <div>
          <h3 className="font-regular text-lg mb-2">Price</h3>
          <input
            type="range"
            min={0}
            max={200}
            defaultValue={100}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>₹0</span>
            <span>₹200</span>
          </div>
        </div>
        {/* Size Filter */}
        <div>
          <h3 className="font-regular text-lg mb-2">Size</h3>
          <input
            type="range"
            min={5}
            max={10}
            defaultValue={7}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-2">
            <span>5</span>
            <span>10</span>
          </div>
        </div>
      </aside>
    </div>

  
  )
}

export default FilterSidebar;
