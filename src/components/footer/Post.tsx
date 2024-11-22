import Image from "next/image"


export type PostType = {
    id: string,
    imageURL: string,
    details: string,
    title: string,
    date: string
}

function Post({id,imageURL,details,title,date}:PostType) {
    return (
        <div className="flex items-center border-b border-gray-200 pb-4" id={id} >
            <Image alt={details}
                className="w-12 h-12 bg-gray-100 object-cover object-center flex-shrink-0 rounded-sm mr-4"
                height={100}
                width={100}
                src={imageURL}
                priority
                />
            <div className="flex-grow">
                <h2 className="text-gray-900 text-xs  font-medium">{title}</h2>
                <p className="text-gray-500 text-xs ">{date}</p>
            </div>
        </div>
    )
}

export default Post