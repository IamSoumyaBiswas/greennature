import CartIcon from '@/assets/icons/CartIcon';
import { cn } from '@/libs/utils';
import NavMenuItem from './NavMenuItem';
import Logo from '../Logo';
import MobileMenuButton from './MobileMenuButton';

function NavMenu() {
    const menu = [
        {
            link: "/",
            name: "Home",
            hasIcon: false,
            icon: null,
        },
        {
            link: "/about-us",
            name: "About Us",
            hasIcon: false,
            icon: null,
        },
        {
            link: "/products",
            name: "Products",
            hasIcon: false,
            icon: null,
        },
        {
            link: "/blogs",
            name: "Blogs",
            hasIcon: false,
            icon: null,
        },
        {
            link: "/contact-us",
            name: "Contact Us",
            hasIcon: false,
            icon: null,
        },
        {
            link: "/auth/log-in",
            name: "Log In",
            hasIcon: false,
            icon: null,
        },
        {
            link: "/cart",
            name: "Cart",
            hasIcon: true,
            icon: <CartIcon />,
        },
    ];

    return (
        <nav className="flex items-center max-w-screen-xl justify-between container mx-auto py-2 lg:py-2  font-marcellus border-0 border-blue-500"
            aria-label="Global">
                <Logo link='/' name='GreenNatures' />

             <MobileMenuButton />   
            <div className={cn(
                    "hidden lg:flex items-center space-x-6 font-marcellus flex-1 justify-end text-nowrap border-0 border-blue-500"
                )}
            >
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
