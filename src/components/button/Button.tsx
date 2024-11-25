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
          : 'text-white bg-primary border-green-900 text-nowrap lg:w-1/2 w-full lg:mt-0'
      }`}
      onClick={onClick}
      type="button" // Default HTML button type
      aria-label={buttonName} // For accessibility
    >
      {buttonName}
    </button>
  );
};

export default Button;
