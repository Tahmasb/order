"use client";
import { cn } from "@utils/style";
import { useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label: string;
  rows?: number;
  className?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  className,
  rows = 9,
}) => {
  const { register } = useFormContext();

  return (
    <div className={cn("rounded-lg bg-white relative", className || "")}>
      <textarea
        className="focus:border-primary-1 h-full border -mb-2.5 rounded-lg w-full  peer resize-none bg-transparent p-2 outline-none overflow-hidden"
        {...register(name)}
        rows={rows}
      />
      <label
        className="
          absolute right-3 -top-3 text-black-2 transition-all duration-300
          peer-placeholder-shown:top-2.5 peer-placeholder-shown:right-3 
          peer-placeholder-shown:text-black-2 peer-focus:-top-3 
          peer-focus:right-3 peer-focus:text-primary-1 text-sm 
         peer-focus:bg-white  bg-white rounded-md px-1  
        "
      >
        {label}
      </label>
    </div>
  );
};

export default TextArea;
