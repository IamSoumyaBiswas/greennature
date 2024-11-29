import Link from "next/link"

interface CategoryCardInterface {
    categoryLink: string,
    categoryTitle: string,
    categoryImage: string,
    categoryDescription: string
}


function CategoryCard({categoryLink,categoryTitle,categoryImage, categoryDescription}:CategoryCardInterface) {
    return (
        <Link href={categoryLink} className="card w-[148px] h-auto shadow flex-shrink-0 border-0 border-blue-300">
            <div
                className="w-full py-4 px-4  h-auto rounded-lg  bg-white transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-sm sm:text-md md:text-md font-medium text-center mb-2">{categoryTitle}</h2>
                <img src={categoryImage}
                    alt={categoryDescription} className="w-full h-[100px] rounded-md bg-red-800 object-cover " />
            </div>
        </Link>
    )
}

export default CategoryCard