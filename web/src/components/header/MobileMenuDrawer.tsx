import Link from "next/link";
import { cn } from "@/libs/utils";

interface MobiledrawerInterface{
  isOpen:boolean,
  onClose:()=>void,
  menu:Array<any>
}
const MobileMenuDrawer = ({ isOpen, onClose, menu }:MobiledrawerInterface) => {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 transform bg-gray-900 bg-opacity-25",
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0",
        "transition-all duration-300 ease-in-out"
      )}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0"
        onClick={onClose} // Close drawer when clicking outside
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white px-6 py-6 shadow-lg">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-regular text-green-700">
            GreenNatures
          </Link>
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700"
            onClick={onClose}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {/* Menu Items */}
        <div className="mt-6 space-y-2">
          {menu.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className=" px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50 hover:underline flex items-center"
              onClick={onClose} // Optional: Close the drawer when an item is clicked
            >
              {item.name}
              {item.hasIcon && <span className="ml-2">{item.icon}</span>}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileMenuDrawer;
