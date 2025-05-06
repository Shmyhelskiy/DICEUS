import { FC } from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  className: string;
  type: "submit" | "reset" | "button" | undefined;
}

const Button: FC<ButtonProps> = ({ label, onClick, className, type = "button", }) => (
  <button
    type={type}
    onClick={onClick}
    className={`${className} cursor-pointer`}
  >
    {label}
  </button>
);

export default Button;
