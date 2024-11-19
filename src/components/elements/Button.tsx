"use client";
import { cn } from "@utils/style";
import { cva } from "class-variance-authority";

const button = cva(
  "border outline-none whitespace-nowrap  min-w-max flex items-center justify-center py-1 px-[10px] max-w-[18rem] h-10 w-[140px] transition-all rounded-md",
  {
    variants: {
      variant: {
        contained: " bg-primary text-white hover:bg-primary-hover ",
        outlined: " bg-white border-primary hover:bg-primary hover:text-white ",
      },
      size: {
        medium: "w-[140px] h-10 py-2 ",

        small: "w-[120px] h-[34px]  py-[5px] px-2.5  ",
        small2: "w-[100px] h-[34px] py-[5px]  px-2.5  ",
        large: "w-[258px] h-10 py-1 px-2.5",
      },
    },

    defaultVariants: {
      variant: "contained",
      size: "medium",
    },
  }
);

// تعریف تایپ برای props دکمه
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "contained" | "outlined";
  size?: "small" | "medium" | "large";
  className?: string;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  onClick = () => console.log("ok"),
  isLoading,
  disabled = false,
  type = "button",
  variant,
  size,
  className = "",
}) => {
  return (
    <button
      disabled={isLoading || disabled}
      type={type}
      onClick={type === "submit" ? undefined : onClick}
      className={cn(
        button({ variant, size }),
        className,
        disabled || isLoading
          ? "bg-gray-600 hover:bg-gray-600 hover:w-[140px] cursor-default"
          : ""
      )}
    >
      {isLoading ? "صبر کنید..." : children}
    </button>
  );
};

export default Button;
