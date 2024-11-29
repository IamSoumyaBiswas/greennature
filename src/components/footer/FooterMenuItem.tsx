import Link from "next/link"

interface FooterMenuItemInterface{
    menuName: string,
    footerlink: Array<FooterLinkType>
}

export type FooterLinkType = {
    link: string,
    linkName: string
}


function FooterMenuItem({menuName,footerlink}:FooterMenuItemInterface) {
  return (
    <div>
        <h4 className=" font-thin text-base text-gray-900 md:mt-2 mt-4 lg:mt-0 mb-2 border-0 border-teal-600">{menuName}</h4>
        {
            footerlink.map((item, index)=>(
                <Link href={item.link} key={index} className="text-gray-400 hover:text-gray-900 lg:text-sm md:text-sm text-xs grid grid-cols-1">{item.linkName}</Link>
            ))
        }
    </div>
  )
}

export default FooterMenuItem