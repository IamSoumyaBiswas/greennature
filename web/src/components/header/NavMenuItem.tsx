import { cn } from "@/libs/utils"
import Link from "next/link"
import { ReactNode } from "react"

interface NavMenuItemInterface {
<<<<<<< HEAD
  link: string,
  name: string,
  className: string,
=======
    link: string,
    name: string,
    className?: string,
    hasIcon?: boolean,
    icon?: ReactNode
>>>>>>> f1fe97a41c41273277014e4faf146217101da86e
}


function NavMenuItem({
<<<<<<< HEAD
  link,
  name,
  className,
}: NavMenuItemInterface) {
  return (
    <Link href={link} className={cn(`text-md leading-6 text-gray-900 border-0 border-blue-500`, className)} >
      {name}
=======
    link,
    name,
    className,
    hasIcon = false,
    icon
}: NavMenuItemInterface) {
  return (
    <Link  href={link} className={cn(`flex gap-2 items-center text-md leading-6 text-gray-900 border-0 border-blue-500`, className)} >
         {hasIcon && icon && icon} 
         {name}
>>>>>>> f1fe97a41c41273277014e4faf146217101da86e
    </Link>
  )
}

export default NavMenuItem