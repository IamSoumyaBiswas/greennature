import { cn } from "@/libs/utils"
import Link from "next/link"
import { ReactNode } from "react"

interface NavMenuItemInterface {

    link: string,
    name: string,
    className?: string,
    hasIcon?: boolean,
    icon?: ReactNode
}


function NavMenuItem({

  link,
  name,
  className,
  hasIcon,
  icon
}: NavMenuItemInterface) {
  return (
    <Link  href={link} className={cn(`flex gap-2 items-center text-md leading-6 text-gray-900 border-0 border-blue-500`, className)} >
         {hasIcon && icon && icon} 
         {name}
    </Link>
  )
}

export default NavMenuItem