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
        <h4 className="font-medium text-sm text-gray-900 mb-4 border-0 border-teal-600">{menuName}</h4>
        {
            footerlink.map((item, index)=>(
                <Link href={item.link} key={index} className="text-gray-600 hover:text-gray-900 text-xs">{item.linkName}</Link>
            ))
        }
    </div>
  )
}

export default FooterMenuItem