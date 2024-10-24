"use client";
import { cn } from "@utils/style";
import { cva } from "class-variance-authority";

const button = cva(
  "border whitespace-nowrap min-w-max flex items-center justify-center py-1 px-[10px] max-w-full h-10 w-[140px] transition-all rounded-lg",
  {
    variants: {
      variant: {
        contained: " bg-primary text-white hover:bg-primary-hover ",
        outlined: " bg-white border-primary hover:bg-primary hover:text-white ",
      },
    },
    defaultVariants: {
      variant: "contained",
    },
  }
);

// تعریف تایپ برای props دکمه
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "contained" | "outlined";
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
  className,
}) => {
  return (
    <button
      disabled={disabled || isLoading}
      type={type}
      onClick={type === "submit" ? undefined : onClick}
      className={cn(button({ variant }), className || "")}
    >
      {isLoading ? "صبر کنید..." : children}
    </button>
  );
};

export default Button;
