import Image from "next/image"


interface AddressFormHeaderInterface{
    profileImageUrl: string,
    userName: string,
    email: string
}

function AddressFormHeader({profileImageUrl,userName,email}:AddressFormHeaderInterface) {
  return (
      <div className="flex flex-col md:flex-row items-start justify-center xs:justify-between md:space-x-8 border-b pb-8">
          <div className="w-full flex justify-start items-center space-x-4">
              {/* <!-- Profile Image --> */}
              <Image className="w-10 h-10 sm:w-20 sm:h-20 border-2 border-green-600 rounded-full object-cover" src={profileImageUrl} alt="Profile Image" height={100} width={100} priority />
              {/* <!-- User Info --> */}
              <div className="flex flex-col items-start">
                  <h2 className="text-base xs:text-xl font-semibold">{userName}</h2>
                  <p className="text-gray-500 text-xs sm:text-base">{email}</p>
              </div>
          </div>
          {/* <!-- Edit Button --> */}
          <div className="flex items-center gap-2" >
              <button className="border-0 border-teal-700 w-full xs:w-auto px-4 md:px-8 py-1  md:py-2 text-base bg-green-500 text-white rounded hover:bg-green-600 transition mt-4 md:mt-0">
                  Edit
              </button>
              <button className="border-0 border-teal-700 hidden w-full xs:w-auto px-4 py-1  md:py-2 text-base bg-green-500 text-white rounded hover:bg-green-600 transition mt-4 md:mt-0">
                  Save
              </button>
              <button className="border-0 border-teal-700 hidden w-full xs:w-auto px-4 py-1  md:py-2 text-base bg-green-500 text-white rounded hover:bg-green-600 transition mt-4 md:mt-0">
                  Delete
              </button>
          </div>
      </div>
  )
}

export default AddressFormHeader