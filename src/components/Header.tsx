"use client"
import { useEffect, useState } from 'react';
import NavMenu from './header/NavMenu'

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={`inset-x-0 top-0 z-50  w-full border-0 bg-white border-red-500 ${
        isSticky ? "sticky shadow-md" : ""
      }`} id="header">
    <div className="border-0 border-slate-700 mx-auto max-w-screen-xl container py-4">
        <NavMenu/>
    </div>
    </header>
  )
}

export default Header