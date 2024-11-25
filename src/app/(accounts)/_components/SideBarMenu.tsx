'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SideBarMenuItemInterface {
    link: string,
    name: string,
    className?: string
}

function SideBarMenuItem({
    link,
    name,
    className =""
}: SideBarMenuItemInterface) {
    const path = usePathname();
    console.log(path)
  return (
    <Link href={link} className={`py-2 px-4 text-base ${path === link ? "text-green-700" : "text-slate-700" }  hover:text-green-600 font-semibold`}>{name}</Link>
  )
}

export default SideBarMenuItem