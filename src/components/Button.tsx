import { FC } from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  fullWidth?: boolean;
  outline?: boolean;
  href?: string;
  label?: string;
  icon?: IconType;
}

const Button: FC<ButtonProps> = ({
  fullWidth,
  outline,
  href,
  label,
  icon: Icon,
}) => {
  return (
    <a href={href} target="_blank">
      <button
        className={`
        text-xl
        rounded-full
        font-semibold
        transition
        duration-300
        flex
        items-center
        justify-center
        gap-3
        ${fullWidth ? "px-7 py-4" : "p-4"}
        ${outline ? "bg-transparent" : "bg-gray-900"}
        ${outline ? "outline outline-2 outline-gray-400" : "outline-none"}
        ${outline ? "text-gray-900 dark:text-gray-200" : "text-gray-200"}
        ${
          outline
            ? "hover:bg-gray-300 dark:hover:bg-gray-600"
            : "hover:bg-gray-700"
        }
    `}
      >
        {label} {Icon && <Icon size={24} />}
      </button>
    </a>
  );
};

export default Button;
