interface ButtonInterface {
  buttonName: string;
  type?: ButtonType;
  fontSize?: string;
}

export enum ButtonType {
  Primary,
  OutLine,
}

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
      type="button" // Default HTML button type
      aria-label={buttonName} // For accessibility
    >
      {buttonName}
    </button>
  );
};

export default Button;
