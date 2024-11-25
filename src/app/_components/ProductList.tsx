
// import React from 'react'

// const ProductList = () => {
//     return (
//         <div className=''>
//             {/* Left section */}
//             <FilterSidebar />
//             {/* Right section */}
          
//                 {/* Right section */}
//                 <div className="border-0 border-red-700 w-full">
//                     <div className="flex justify-between p-2 items-center mb-6 border-[1px] border-gray-400  rounded-lg w-full">
//                         <div className="flex items-center">
//                             <select className="p-2 border-none  outline-none bg-[#F6F6F6] rounded-lg">
//                                 <option>Sort by Features</option>
//                                 <option>Price: Low to High</option>
//                                 <option>Price: High to Low</option>
//                             </select>
//                         </div>
//                         <div className="flex gap-1 border-none border-blue-600">
//                             {/* Button to open the drawer */}
//                             <button
//                                 onclick="toggleDrawer()"
//                                 className=" text-black rounded lg:hidden"
//                             >
//                                 <svg
//                                     width={24}
//                                     height={16}
//                                     className="fill-current text-black"
//                                     viewBox="0 0 16 18"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path d="M10.0011 9V16.88C10.0411 17.18 9.94111 17.5 9.71111 17.71C9.61859 17.8027 9.5087 17.8763 9.38773 17.9264C9.26676 17.9766 9.13708 18.0024 9.00611 18.0024C8.87514 18.0024 8.74546 17.9766 8.62448 17.9264C8.50351 17.8763 8.39362 17.8027 8.30111 17.71L6.29111 15.7C6.18211 15.5933 6.09922 15.4629 6.04892 15.319C5.99861 15.175 5.98225 15.0213 6.00111 14.87V9H5.97111L0.211108 1.62C0.0487158 1.41153 -0.0245586 1.14726 0.00729555 0.88493C0.0391497 0.622602 0.173543 0.383546 0.381108 0.22C0.571108 0.08 0.781108 0 1.00111 0H15.0011C15.2211 0 15.4311 0.08 15.6211 0.22C15.8287 0.383546 15.9631 0.622602 15.9949 0.88493C16.0268 1.14726 15.9535 1.41153 15.7911 1.62L10.0311 9H10.0011Z" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                     {/* Product Cards Container */}
//                     <div
//                         id="product-container"
//                         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 mx-auto gap-4  mb-6 "
//                     ></div>
//                 </div>
           

//         </div>
//     )
// }

// export default ProductList;

import React, { useState, useEffect } from 'react';
import FilterSidebar from '@/components/filters/FilterSidebar';

const ProductList = () => {
    const [products, setProducts] = useState([]); // State for products
    const [currentPage, setCurrentPage] = useState(1); // State for pagination
    const [productsPerPage] = useState(6); // Products displayed per page

    // Mock Data Fetching
    useEffect(() => {
        // Simulating an API call to fetch products
        const fetchProducts = async () => {
            const mockProducts = Array.from({ length: 50 }, (_, index) => ({
                id: index + 1,
                name: `Product ${index + 1}`,
                price: (Math.random() * 100).toFixed(2),
                image: `https://via.placeholder.com/150?text=Product+${index + 1}`,
            }));
            setProducts(mockProducts);
        };
        fetchProducts();
    }, []);

    // Pagination logic
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            {/* Left section - Filter Sidebar */}
            <div className="w-full lg:w-1/4">
                <FilterSidebar />
            </div>

            {/* Right section */}
            <div className="w-full lg:w-3/4">
                {/* Header */}
                <div className="flex justify-between p-2 items-center mb-6 border-[1px] border-gray-400 rounded-lg w-full">
                    <div className="flex items-center">
                        <select
                            className="p-2 border-none outline-none bg-[#F6F6F6] rounded-lg"
                            onChange={(e) => console.log(e.target.value)} // Handle sorting here
                        >
                            <option>Sort by Features</option>
                            <option value="lowToHigh">Price: Low to High</option>
                            <option value="highToLow">Price: High to Low</option>
                        </select>
                    </div>
                    <button
                        onClick={() => console.log('Toggle Drawer')}
                        className="text-black rounded lg:hidden"
                    >
                        {/* Drawer Toggle Icon */}
                        <svg
                            width={24}
                            height={16}
                            className="fill-current text-black"
                            viewBox="0 0 16 18"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="..." />
                        </svg>
                    </button>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
                    {currentProducts.map((product) => (
                        <div
                            key={product.id}
                            className="border p-4 rounded-lg shadow hover:shadow-lg"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-32 w-full object-cover mb-2 rounded"
                            />
                            <h3 className="text-lg font-semibold">{product.name}</h3>
                            <p className="text-gray-600">${product.price}</p>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-6">
                    {Array.from(
                        { length: Math.ceil(products.length / productsPerPage) },
                        (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => paginate(index + 1)}
                                className={`px-4 py-2 mx-1 ${
                                    currentPage === index + 1
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-200 text-gray-600'
                                } rounded-lg`}
                            >
                                {index + 1}
                            </button>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;

