"use client";
import SidebarDrawer from "@/components/filters/FilterDrawer";
import React, { useState } from "react";

const SortFilter: React.FC = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   // Function to toggle the drawer
//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

  return (
    <>
      {/* Sort and Filter Section */}
      <div className="border-0 w-full">
        <div className="flex justify-between px-2 py-4 bg-white items-center border-0 border-gray-400 rounded-lg w-full">
          {/* Sort Dropdown */}
          <div className="flex items-center">
            <select className="p-2 border-none outline-none rounded-lg">
              <option>Sort by Features</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
          {/* Filter Button */}
         <SidebarDrawer />
      </div>
      </div>
    </>
  );
};

export default SortFilter;
