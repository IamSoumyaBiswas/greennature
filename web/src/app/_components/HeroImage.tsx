import { cn } from '@/libs/utils'
import Image from 'next/image'

interface HeroImageInterface{
    src?: string,
    alt?: string,
    className?: string
}

const defaultImage = "https://plus.unsplash.com/premium_photo-1677756430603-f081a25b0aa7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

function HeroImage({src=defaultImage,alt="",className=""}:HeroImageInterface) {


    return (
        <div className="w-full border-orange-500 border-0 heroImage">
            <Image 
    src={src} 
    alt={alt} 
    className={cn("object-fit w-full lg:h-[664px]", className)} 
    width={2000} 
    height={600
    }
/>

        </div>
    )
}

export default HeroImage