import Link from "next/link";

export type LinkType = {
    link: string,
    name: string
}

function FooterLink({link,name}: LinkType) {
  return (
    <Link href={link} className="text-gray-600 hover:text-gray-900 text-sm" > {name} </Link>
  )
}

export default FooterLink