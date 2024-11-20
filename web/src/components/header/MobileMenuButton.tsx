import MenuIcon from '@/assets/icons/MenuIcon'
import { cn } from '@/libs/utils'
import React from 'react'


interface MobileMenuButtonInterface {
    className?: string,
    onClick?: () => {},
    id?: string
}

function MobileMenuButton({ className="", onClick, id = "menu-btn" }: MobileMenuButtonInterface) {
    return (
       
            <button type="button"
                className={cn("lg:hidden flex items-center justify-center mt-1 text-gray-700 border-0 border-blue-500",className)}
                onClick={onClick}
                id={id}
                >
                <MenuIcon />
            </button>
    )
}

export default MobileMenuButton