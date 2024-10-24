"use client";
import { cn } from "@utils/style";
import { cva } from "class-variance-authority";
import { useFormContext } from "react-hook-form";
import { useId, useState, useEffect } from "react";

const baseClass = cva(
  " bg-white my-1 flex flex-col  max-w-[18rem] relative w-full h-10 rounded-md"
);

type InputNumberProps = {
  name: string;
  label?: string;
  autoFocus?: boolean;
  className?: string;
  disabled?: boolean;
  maxLength?: number;
  children?: React.ReactNode;
  childrenClassName?: string;
};

const InputNumber: React.FC<InputNumberProps> = ({
  name,
  label,
  autoFocus,
  className = "",
  disabled,
  maxLength = 30,
  children,
  childrenClassName = "",
}) => {
  const uniqueId = useId();
  const {
    register,
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();

  // مقدار state برای ذخیره مقدار ورودی
  const [inputValue, setInputValue] = useState("");

  // همگام‌سازی مقدار اولیه با فرم
  useEffect(() => {
    const initialValue = getValues(name) || "";
    setInputValue(initialValue);
  }, [getValues, name]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    // تبدیل اعداد فارسی و عربی به اعداد انگلیسی
    const persianDigits = /[\u06F0-\u06F9]/g;
    const arabicDigits = /[\u0660-\u0669]/g;
    const replaceDigits = (digit: string) =>
      String.fromCharCode(digit.charCodeAt(0) - 1728);

    value = value
      .replace(persianDigits, replaceDigits)
      .replace(arabicDigits, replaceDigits);

    // محدود کردن ورودی به فقط اعداد
    value = value.replace(/[^0-9]/g, "");

    // اعمال محدودیت طول عددی بر اساس پراپ maxLength
    if (maxLength && value.length > maxLength) {
      value = value.slice(0, maxLength);
    }

    // ذخیره مقدار در state
    setInputValue(value);

    setValue(name, value);
  };

  return (
    <div
      className={cn(baseClass(), className, disabled ? "bg-background-4" : "")}
    >
      <span
        className={cn(
          "absolute  left-[6%] top-1/2 -translate-y-1/2 text text-b2 text-black-2  ",
          childrenClassName
        )}
      >
        {children}
      </span>
      <input
        autoComplete="off"
        autoFocus={autoFocus}
        disabled={disabled}
        type="text"
        {...register(name, {
          valueAsNumber: true,
          maxLength,
          disabled,
        })}
        value={inputValue} // مقدار state را به عنوان مقدار اینپوت قرار می‌دهیم
        onChange={handleChange}
        placeholder=" "
        id={uniqueId}
        className="
          peer p-2  rounded-md outline-none w-full h-full bg-inherit 
          focus:border-[1px] border  focus:border-primary  hover:border-primary
          transition-colors duration-300
        "
      />
      {errors[name] && (
        <small className="text-error mr-1">
          {String(errors[name].message)}
        </small>
      )}
      <label
        htmlFor={uniqueId}
        className="
          absolute right-3 text-sm -top-3 text-gray-500 transition-all duration-300
          peer-placeholder-shown:top-2 peer-placeholder-shown:right-3 
          peer-placeholder-shown:text-black-2 peer-focus:-top-3
          peer-focus:right-3 bg-white text-b1
           rounded-md px-1  
        "
      >
        {label}
      </label>
    </div>
  );
};

export default InputNumber;
