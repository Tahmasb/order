import { cn } from "@utils/style";
import { cva } from "class-variance-authority";
import { useFormContext } from "react-hook-form";
import { useId, useState } from "react";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

const input = cva(
  "bg-white my-1 max-w-[18rem] flex flex-col relative w-full h-10 rounded-md"
);

const formatNumber = (value: string, digits: number): string => {
  const number = value.replace(/[^0-9]/g, "");
  const pattern = `\\B(?=(\\d{${digits}})+(?!\\d))`;
  const regex = new RegExp(pattern, "g");
  return number.replace(regex, "،");
};

interface InputProps {
  name: string;
  label: string;
  type?: string;
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  separateNum?: number;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = "text",
  autoFocus = false,
  className,
  disabled = false,
  separateNum,
}) => {
  const [inputType, setInputType] = useState<string>(type);
  const uniqueId = useId();
  const handleSetInputType = () =>
    setInputType((prev) => (prev === "password" ? "text" : "password"));

  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    const persianDigits = /[\u06F0-\u06F9]/g;
    const arabicDigits = /[\u0660-\u0669]/g;
    const replaceDigits = (digit: string) =>
      String.fromCharCode(digit.charCodeAt(0) - 1728);

    value = value
      .replace(persianDigits, replaceDigits)
      .replace(arabicDigits, replaceDigits);

    if (type === "number" && separateNum) {
      const newValue = formatNumber(value, separateNum);
      setValue(name, newValue);
    } else if (type === "number") {
      value = value.replace(/[^0-9]/g, "");
      setValue(name, value);
    } else {
      setValue(name, value);
    }
  };

  return (
    <div className={cn(input(), className || "")}>
      <input
        autoFocus={autoFocus}
        disabled={disabled}
        type={type === "password" ? inputType : type}
        {...register(name)}
        onChange={handleChange}
        placeholder=" "
        id={uniqueId}
        className="
          peer p-2 rounded-md outline-none w-full h-full bg-inherit 
           focus:border-[1px] hover:border-primary border focus:border-primary 
          transition-colors duration-300
        "
      />
      {errors[name] && (
        <small className="text-red-1 mr-1">
          {errors[name]?.message as string}
        </small>
      )}
      <label
        htmlFor={uniqueId}
        className="
          absolute right-3 -top-3 text-gray-500 transition-all duration-300
          peer-placeholder-shown:top-2 peer-placeholder-shown:right-3 
          peer-placeholder-shown:text-black-2 peer-focus:-top-3 
          peer-focus:right-3 bg-white peer-focus:text-primary-1 text-sm rounded-md px-1  
        "
      >
        {label}
      </label>
      {type === "password" && (
        <div
          className="cursor-pointer child:left-3 child:top-1/3 child:absolute"
          onClick={handleSetInputType}
        >
          <span className={` ${inputType === "password" && "hidden"}`}>
            <IoEyeOutline />
          </span>
          <span className={` ${inputType === "text" && "hidden"}`}>
            <IoEyeOffOutline />
          </span>
        </div>
      )}
    </div>
  );
};

export default Input;
