import { cn } from "@/libs/utils"
import Link from "next/link"

interface LogoInterface {
    link: string,
    name: string,
    className?: string,
}

function Logo({
    link,
    name,
    className="",
}:LogoInterface) {
    return (
        <Link 
            href={link} 
            className={cn("lg:text-[32px] text-[24px] text-green-700 border-0 border-blue-500",className)}
            style={{lineHeight: "28px"}}
        >
            {name}
        </Link>
    )
}

export default Logo