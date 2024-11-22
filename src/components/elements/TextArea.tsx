"use client";
import { cn } from "@utils/style";
import { useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label: string;
  autoFocus?: boolean;
  rows?: number;
  className?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  className,
  autoFocus = false,
  rows = 5,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={cn(
        "flex  gap-3 flex-col relative w-full  rounded-md",
        className || ""
      )}
    >
      <textarea
        className="focus:border-primary  hover:border-primary transition border  rounded-md w-full peer resize-none bg-transparent p-2 outline-none overflow-hidden"
        {...register(name)}
        rows={rows}
        placeholder=" "
        id={name}
        autoFocus={autoFocus}
      />
      {errors[name] && (
        <small className="text-error mr-1">
          {String(errors[name].message)}
        </small>
      )}
      <label
        htmlFor={name}
        className="
          absolute right-3 -top-3 text-black-2 transition-all duration-300
          text-sm bg-white rounded-md px-1  
          peer-placeholder-shown:top-2.5 peer-placeholder-shown:right-3 
          peer-placeholder-shown:text-black-2 peer-focus:-top-3 
          peer-focus:right-3 
        "
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
