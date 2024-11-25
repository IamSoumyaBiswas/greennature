"use client"
import { cn } from "@/libs/utils";
import { useState, useRef, useEffect } from "react";

interface SelectFieldInterface {
  Options: string[];
  label: string;
  placeHolder: string;
  isDisable: boolean;
  className: string
}

export default function Select({
  Options,
  label,
  placeHolder,
  isDisable,
  className
}: SelectFieldInterface) {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: string) => {
    if (!isDisable) {
      setSelectedOption(option);
      setIsOpen(false);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className={cn("relative",className)} ref={dropdownRef}>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <div
        className={`w-full p-3 border rounded-md ${
          isDisable
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-gray-100 text-gray-600 cursor-pointer"
        } focus:outline-none`}
        onClick={() => {
          if (!isDisable) setIsOpen(!isOpen);
        }}
        aria-expanded={!isDisable && isOpen}
        aria-disabled={isDisable}
      >
        {selectedOption || placeHolder}
      </div>
      {isOpen && !isDisable && (
        <ul
          className="absolute w-full bg-white border rounded-md shadow-md mt-1 z-10"
          role="listbox"
        >
          {Options.map((option, index) => (
            <li
              key={index}
              className={`p-3 cursor-pointer hover:bg-gray-200 ${
                selectedOption === option ? "bg-gray-100 font-semibold" : ""
              }`}
              onClick={() => handleSelect(option)}
              role="option"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
