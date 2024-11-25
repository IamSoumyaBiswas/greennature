import Image from "next/image"

interface AddressHeaderInterface{
    profileImageUrl: string,
    userName: string,
    email: string
}


function AddressHeader({profileImageUrl,userName,email}:AddressHeaderInterface) {
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
          
      </div>
  )
}

export default AddressHeader