import FaceBookIcon from "@/assets/icons/FaceBookIcon"
import InstragramIcon from "@/assets/icons/InstragramIcon"
import LinkedinIcon from "@/assets/icons/LinkedinIcon"
import TwitterIcon from "@/assets/icons/TwitterIcon"
import Link from "next/link"

function SocialMedia() {
  return (
    <div className="mb-0 lg:mb-0 md:w-1/4 border-0 flex flex-col justify-between border-blue-500">

      <div className="flex flex-col gap-4">
        <div className="flex items-center">

          <Link href={"/"} className="text-xl font-medium font-marcellus border-0 border-blue-600 text-green-700">
            GreenNatures</Link>
        </div>

        <div className="border-0 ">
          <p className="text-gray-600 text-xs mb-1">Email: example@info.com</p>
          <p className="text-gray-600 text-xs mb-1">Phone: +919912121211</p>
          <p className="text-gray-600 text-xs mb-1">Address: 451 Wall Street, UK, London</p>
        </div>
      </div>

      {/* <!-- Social Profiles --> */}
      <div className="flex space-x-4 mt-4 border-0 border-red-800 items-center justify-start ">
        <Link href={"/"}><FaceBookIcon /></Link>
        <Link href={"/"}><InstragramIcon /></Link>
        <Link href={"/"}><LinkedinIcon /></Link>
        <Link href={"/"}><TwitterIcon /></Link>

      </div>

    </div>
  )
}

export default SocialMedia