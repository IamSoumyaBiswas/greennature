import { cn } from "@/libs/utils"
import Link from "next/link"

interface NavMenuItemInterface {
    link: string,
    name: string,
    className: string,
}


function NavMenuItem({
    link,
    name,
    className,
}: NavMenuItemInterface) {
  return (
    <Link  href={link} className={cn(`text-md leading-6 text-gray-900 border-0 border-blue-500`, className)} >
        {name}
    </Link>
  )
}

export default NavMenuItem