import FooterMenu from "./FooterMenu"
import SocialMedia from "./SocialMedia"


function Footer() {
  return (
    <footer className="text-gray-800 w-full border-0 bg-white border-gray-800 font-marcellus backImage" >

      <div className="font-sans lg:py-[96px] lg:px-4 px-4  py-[48px]  max-w-screen-xl mx-auto border-0 my-[0px] border-yellow-600">
        <div className="flex flex-col  lg:flex-row justify-between border-0">
          <SocialMedia />
          <FooterMenu />
        </div>
      </div>

      <div className="bg-green-800 py-4">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row lg:flex-col  justify-center items-center text-center text-gray-100">
          <p className="text-white text-xs"> All Rights Reserved © 2024 .</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer