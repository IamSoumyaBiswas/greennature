// import CartIcon from '@/assets/icons/CartIcon';
// import { cn } from '@/libs/utils';
// import NavMenuItem from './NavMenuItem';
// import Logo from '../Logo';
// import MobileMenuButton from './MobileMenuButton';

// function NavMenu() {
//     const menu = [
//         {
//             link: "/",
//             name: "Home",
//             hasIcon: false,
//             icon: null,
//         },
//         {
//             link: "/about-us",
//             name: "About Us",
//             hasIcon: false,
//             icon: null,
//         },
//         {
//             link: "/products",
//             name: "Products",
//             hasIcon: false,
//             icon: null,
//         },
//         {
//             link: "/blogs",
//             name: "Blogs",
//             hasIcon: false,
//             icon: null,
//         },
//         {
//             link: "/contact-us",
//             name: "Contact Us",
//             hasIcon: false,
//             icon: null,
//         },
//         {
//             link: "/auth/log-in",
//             name: "Log In",
//             hasIcon: false,
//             icon: null,
//         },
//         {
//             link: "/cart",
//             name: "Cart",
//             hasIcon: true,
//             icon: <CartIcon />,
//         },
//     ];

//     return (
//         <nav className="flex bg-white items-center max-w-screen-xl justify-between container mx-auto p-2 lg:py-2  font-marcellus border-0 border-blue-500"
//             aria-label="Global">
//                 <Logo link='/' name='GreenNatures' />

//              <MobileMenuButton />   
//             <div className={cn(
//                     "hidden lg:flex items-center space-x-6 font-marcellus flex-1 justify-end text-nowrap border-0 border-blue-500"
//                 )}
//             >
//                 {menu.map((item) => (
//                     <NavMenuItem
//                         key={item.link}
//                         link={item.link}
//                         name={item.name}
//                         hasIcon={item.hasIcon}
//                         icon={item.icon}
//                     />
//                 ))}
//             </div>
//         </nav>
//     );
// }

// export default NavMenu;

"use client"


import React, { useState } from "react";
import MobileMenuDrawer from "./MobileMenuDrawer";
import Logo from "../Logo";
import MobileMenuButton from "./MobileMenuButton";
import NavMenuItem from "./NavMenuItem";
import CartIcon from "@/assets/icons/CartIcon";

function NavMenu() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const menu = [
    { link: "/", name: "Home" },
    { link: "/about-us", name: "About Us" },
    { link: "/products", name: "Products" },
    { link: "/blogs", name: "Blogs" },
    { link: "/contact-us", name: "Contact Us" },
    { link: "/auth/login", name: "Log In" },
    { link: "/cart", name: "Cart", hasIcon: true, icon: <CartIcon /> },
  ];

  return (
    <nav className="flex bg-white items-center max-w-screen-xl justify-between container mx-auto p-2 lg:py-2 font-marcellus">
      {/* Logo */}
      <Logo link="/" name="GreenNatures" />

      {/* Mobile Menu Button */}
      <MobileMenuButton onClick={() => setIsDrawerOpen(true)} />

      {/* Drawer */}
      <MobileMenuDrawer
    isOpen={isDrawerOpen}
    onClose={() => setIsDrawerOpen(false)}
    menu={menu}
/>


      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-6 font-marcellus flex-1 justify-end">
        {menu.map((item) => (
          <NavMenuItem
            key={item.link}
            link={item.link}
            name={item.name}
            hasIcon={item.hasIcon}
            icon={item.icon}
          />
        ))}
      </div>
    </nav>
  );
}

export default NavMenu;
