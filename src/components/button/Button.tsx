import React from 'react';

interface ButtonInterface {
  buttonName: string;
  onClick?: () => void; // Optional for cases where no handler is needed
  type?: ButtonType; // Optional with a default value
  fontSize?: string; // Accept Tailwind classes like 'text-sm', 'text-lg'
}

export enum ButtonType {
  Primary,
  OutLine,
}

<<<<<<< HEAD
const Button: React.FC<ButtonInterface> = ({
  buttonName,
  fontSize = 'text-sm', // Default value
  onClick,
  type = ButtonType.Primary, // Default value
}) => {
  return (
    <button
      className={`lg:px-4 md:px-4 px-1 py-1 md:py-2 rounded ${fontSize} ${
        type === ButtonType.Primary
          ? 'text-primary text-center border border-green-900 text-nowrap lg:w-1/2 w-full'
          : 'text-white bg-primary border-green-900 text-nowrap lg:w-1/2 w-full '
      }`}
      onClick={onClick}
=======
const Button= ({
  buttonName,
  fontSize = 'text-sm', // Default value
  type = ButtonType.Primary, // Default value
}:ButtonInterface) => {
  return (
    <button
      className={`lg:px-4 md:px-4 px-1 py-1 text-center text-nowrap md:py-2 rounded border-green-900 ${fontSize} ${
        type === ButtonType.Primary
          ? 'text-primary text-center border'
          : 'text-white bg-green-800'
      }`}
>>>>>>> 1f023cbde3f2c00b9ffe3b3e4f4c0eeaf86cd192
      type="button" // Default HTML button type
      aria-label={buttonName} // For accessibility
    >
      {buttonName}
    </button>
  );
};

export default Button;
