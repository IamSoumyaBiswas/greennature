import FooterMenu from "./FooterMenu"
import SocialMedia from "./SocialMedia"


function Footer() {
  return (
    <footer className="bg-white text-gray-800 mt-[90px] w-full  border-0 border-blue-700" >
        <div className="py-[24px] lg:h-[260px] p-4 max-w-screen-xl mx-auto border-0 border-blue-500">
            <SocialMedia/>
            <FooterMenu/>
        </div>
        <div className="bg-green-800 w-full py-4 overflow-hidden border-0 border-blue-500">
            <p className="text-center text-gray-200 lg:text-nowrap md:text-nowrap px-8 border-0 border-blue-500">All
                Copyrights are reserved by
                Mamdou Ghaneemy
            </p>
        </div>
    </footer>
  )
}

export default Footer