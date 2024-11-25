"use client"

import CrossIcon from "@/assets/icons/CrossIcon";
import { useState } from "react";

    const SidebarDrawer = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleDrawer = () => {
            setIsOpen((prev) => !prev);
        };

        return (
            <>
  
                <div className="flex gap-1 border-none">
                    <button
                        onClick={toggleDrawer}
                        className="text-black rounded lg:hidden"
                        aria-label="Toggle Filters"
                    >
                        <svg
                            width={24}
                            height={16}
                            className="fill-current text-black"
                            viewBox="0 0 16 18"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10.0011 9V16.88C10.0411 17.18 9.94111 17.5 9.71111 17.71C9.61859 17.8027 9.5087 17.8763 9.38773 17.9264C9.26676 17.9766 9.13708 18.0024 9.00611 18.0024C8.87514 18.0024 8.74546 17.9766 8.62448 17.9264C8.50351 17.8763 8.39362 17.8027 8.30111 17.71L6.29111 15.7C6.18211 15.5933 6.09922 15.4629 6.04892 15.319C5.99861 15.175 5.98225 15.0213 6.00111 14.87V9H5.97111L0.211108 1.62C0.0487158 1.41153 -0.0245586 1.14726 0.00729555 0.88493C0.0391497 0.622602 0.173543 0.383546 0.381108 0.22C0.571108 0.08 0.781108 0 1.00111 0H15.0011C15.2211 0 15.4311 0.08 15.6211 0.22C15.8287 0.383546 15.9631 0.622602 15.9949 0.88493C16.0268 1.14726 15.9535 1.41153 15.7911 1.62L10.0311 9H10.0011Z" />
                        </svg>
                    </button>
                </div>

                <div
                    id="drawer"
                    className={`fixed top-0 left-0 z-50 h-full w-64 bg-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 ease-in-out`}
                >
                    <div className="flex justify-between items-center p-4 border-b border-gray-600">
                        <span className="text-xl font-semibold">Menu</span>
                        <button onClick={toggleDrawer} className="text-2xl" aria-label="Close Drawer">
                            <CrossIcon />
                        </button>
                    </div>
                    {/* Filters and content */}
                    {/* <!-- Filter Sidebar --> */}
                    <div className="flex px-4 tems-center text-green-800 justify-between ">
                        <span className="text-primaryLight text-lg font-marcellus font-bold">Filters</span>
                        <button className="border-none px-4 py-2 text-[#475569] rounded-2xl hover:bg-gray-100">Clear
                            All</button>
                    </div>
                    <aside
                        className="px-4 border-none border-gray-800 rounded-lg shadow-lg overflow-scroll  h-full space-y-6  ">
                        {/* <!-- Category Filter --> */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">Category</h3>
                            <ul className="space-y-2">
                                <li><input type="checkbox" id="category1" className="mr-2" /><label htmlFor="category1">Lorem</label>
                                </li>
                                <li><input type="checkbox" id="category2" className="mr-2" /><label htmlFor="category2">Lorem</label>
                                </li>
                                <li><input type="checkbox" id="category3" className="mr-2" /><label htmlFor="category3">Lorem</label>
                                </li>
                                <li><input type="checkbox" id="category4" className="mr-2" /><label htmlFor="category4">Lorem</label>
                                </li>
                                <li><input type="checkbox" id="category5" className="mr-2" /><label htmlFor="category5">Lorem</label>
                                </li>
                                <li><a href="#" className="text-blue-500 text-sm">Show more</a></li>
                            </ul>
                        </div>

                        {/* <!-- Ratings Filter --> */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">Ratings</h3>
                            <ul className="space-y-2">
                                <li><input type="checkbox" id="rating5" className="mr-2" /><label htmlFor="rating5">⭐⭐⭐⭐⭐ & up
                                    (1991)</label></li>
                                <li><input type="checkbox" id="rating4" className="mr-2" /><label htmlFor="rating4">⭐⭐⭐⭐ & up
                                    (200)</label></li>
                                <li><input type="checkbox" id="rating3" className="mr-2" /><label htmlFor="rating3">⭐⭐⭐ & up
                                    (200)</label>
                                </li>
                                <li><input type="checkbox" id="rating2" className="mr-2" /><label htmlFor="rating2">⭐⭐ & up
                                    (200)</label>
                                </li>
                                <li><input type="checkbox" id="rating1" className="mr-2" /><label htmlFor="rating1">⭐ & up
                                    (200)</label>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Brand Filter --> */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">Brand</h3>
                            <ul className="space-y-2">
                                <li><input type="checkbox" id="brand1" className="mr-2" /><label htmlFor="brand1">Lorem</label></li>
                                <li><input type="checkbox" id="brand2" className="mr-2" /><label htmlFor="brand2">Lorem</label></li>
                                <li><input type="checkbox" id="brand3" className="mr-2" /><label htmlFor="brand3">Lorem</label></li>
                                <li><input type="checkbox" id="brand4" className="mr-2" /><label htmlFor="brand4">Lorem</label></li>
                                <li><a href="#" className="text-blue-500 text-sm">Show more</a></li>
                            </ul>
                        </div>

                        {/* <!-- Ratings Filter --> */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">Ratings</h3>
                            <ul className="space-y-2">
                                <li><input type="checkbox" id="rating5" className="mr-2" /><label htmlFor="rating5">⭐⭐⭐⭐⭐ & up
                                    (1991)</label></li>
                                <li><input type="checkbox" id="rating4" className="mr-2" /><label htmlFor="rating4">⭐⭐⭐⭐ & up
                                    (200)</label></li>
                                <li><input type="checkbox" id="rating3" className="mr-2" /><label htmlFor="rating3">⭐⭐⭐ & up
                                    (200)</label>
                                </li>
                                <li><input type="checkbox" id="rating2" className="mr-2" /><label htmlFor="rating2">⭐⭐ & up
                                    (200)</label>
                                </li>
                                <li><input type="checkbox" id="rating1" className="mr-2" /><label htmlFor="rating1">⭐ & up
                                    (200)</label>
                                </li>
                            </ul>
                        </div>

                        {/* <!-- Brand Filter --> */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">Brand</h3>
                            <ul className="space-y-2">
                                <li><input type="checkbox" id="brand1" className="mr-2" /><label htmlFor="brand1">Lorem</label></li>
                                <li><input type="checkbox" id="brand2" className="mr-2" /><label htmlFor="brand2">Lorem</label></li>
                                <li><input type="checkbox" id="brand3" className="mr-2" /><label htmlFor="brand3">Lorem</label></li>
                                <li><input type="checkbox" id="brand4" className="mr-2" /><label htmlFor="brand4">Lorem</label></li>
                                <li><a href="#" className="text-blue-500 text-sm">Show more</a></li>
                            </ul>
                        </div>


                        {/* <!-- Price Filter --> */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">Price</h3>
                            <input type="range" className="w-full" />
                            <div className="flex justify-between text-sm mt-2">
                                <span>₹0</span><span>₹200</span>
                            </div>
                        </div>

                        {/* <!-- Size Filter --> */}
                        <div>
                            <h3 className="font-bold text-lg mb-4">Size</h3>
                            <input type="range" className="w-full" />
                            <div className="flex justify-between text-sm mt-2">
                                <span>5</span><span>10</span>
                            </div>
                        </div>


                    </aside>
                </div>
            </>
        );
    };

    export default SidebarDrawer;




