'use client'
import SlashIcon from '@/assets/icons/SlashIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Breadcrumb() {
  const path = usePathname();
  
  // Split the path into segments and filter out any empty strings
  const segments = path.split('/').filter(segment => segment);

  // Build the routes array with path segments and labels
  const routes = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = segment.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase()); // Format label
    return { href, label };
  });

  return (
    <div className="w-full">
      <div className="breadcrumb-bg h-12 md:h-16 lg:h-20 flex items-center justify-center">
        <div className="overlay"></div>
        <div className="relative max-w-screen-xl w-full px-4 breadcrumb-content">
          <nav className="text-white text-sm md:text-xl lg:text-2xl breadcrumb-shadow flex items-center font-marcellus leading-3">
            {/* Static Home Link */}
            <Link href="/" className="md:text-base text-sm">
              Home
            </Link>
            {routes.map((route, index) => (
              <span key={index} className="mx-1 md:mx-2 flex items-center">
                <SlashIcon />
                <Link href={route.href} className="md:text-base text-sm ">
                  {route.label}
                </Link>
              </span>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
