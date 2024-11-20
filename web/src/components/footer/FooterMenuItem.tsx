import { cn } from "@/libs/utils"
import Link from "next/link"

interface NavMenuItemInterface {
  link: string,
  name: string,
  className: string,
}

function FooterMenuItem({
  link,
  name,
  className,
}: NavMenuItemInterface) {
  return (
    <Link href={link} className={cn(`text-gray-600 hover:text-gray-900 text-xs border-0 border-blue-500`, className)} >
      {name}
    </Link>
  )
}

export default FooterMenuItem