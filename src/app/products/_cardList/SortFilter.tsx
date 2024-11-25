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
        <div className="flex justify-between p-2 items-center mb-6 border-[1px] border-gray-400 rounded-lg w-full">
          {/* Sort Dropdown */}
          <div className="flex items-center">
            <select className="p-2 border-none outline-none bg-[#F6F6F6] rounded-lg">
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
