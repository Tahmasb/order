import { cn } from "@utils/style";
import React, { useRef, useState, useEffect } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { OptionItemType } from "../types";

type AutocompleteProps = {
  label?: string;
  name: string;
  options: OptionItemType[];
  className?: string;
  disabled?: boolean;
  showChild?: boolean;
};

const Autocomplete: React.FC<AutocompleteProps> = ({
  label,
  name,
  options = [],
  className,
  disabled = false,
  showChild = true,
}) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const inputRef = useRef<HTMLInputElement>(null);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleInputChange = (value: string) => {
    if (inputRef.current) {
      inputRef.current.value = value || "";
    }
    setSelectedIndex(-1);
    if (value) {
      setFilteredOptions(
        options.filter((option) =>
          String(option.label).toLowerCase().includes(value?.toLowerCase())
        )
      );
    } else {
      setFilteredOptions(options);
    }
  };

  const handleOptionSelect = (
    option: OptionItemType,
    onChange: (value: OptionItemType | null) => void
  ) => {
    setIsOpen(false);
    if (inputRef.current) {
      inputRef.current.value = option.label.toString();
    }
    onChange(option);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    onChange: (value: OptionItemType | null) => void
  ) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    if (e.key === "ArrowDown") {
      setSelectedIndex((prevIndex) =>
        prevIndex < filteredOptions.length - 1 ? prevIndex + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : filteredOptions.length - 1
      );
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      handleOptionSelect(filteredOptions[selectedIndex], onChange);
    }
  };

  const clearInput = (onChange: (value: OptionItemType | null) => void) => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    onChange(null);
    setFilteredOptions(options);
  };

  // useEffects

  useEffect(() => {
    if (options.length > 0) {
      const defaultOption = options.find((option) => option.isDefault);
      if (defaultOption) {
        if (inputRef.current) {
          inputRef.current.value = defaultOption.label.toString();
        }
        setValue(name, defaultOption);
      }
      setFilteredOptions(options);
    }
  }, [options]);

  return (
    <div
      className={cn(
        "bg-white my-1 flex-col max-w-[18rem] relative w-full h-10 rounded-md",
        className || "",
        disabled ? "bg-background-4" : "",
        showChild ? "flex" : "hidden"
      )}
    >
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="relative h-full focus-within:border-primary hover:border-primary transition flex flex-col border rounded-md">
            <label
              className={cn(
                "absolute  text-gray-500 right-3 text-sm bg-inherit top-2 pointer-events-none transition-all duration-300",
                inputRef.current?.value
                  ? "text-[13px] -top-3 px-1 bg-white"
                  : "top-1.5 "
              )}
            >
              {label}
            </label>
            <input
              type="text"
              autoComplete="new-password"
              ref={inputRef}
              onClick={() => setIsOpen(true)}
              onFocus={() => setIsOpen(true)}
              onChange={(e) => {
                handleInputChange(e.target?.value);
                field.onChange(null); // پاک کردن مقدار آبجکت انتخاب‌شده در فرم هنگام تایپ
              }}
              onKeyDown={(e) => handleKeyDown(e, field.onChange)}
              onBlur={() => setTimeout(() => setIsOpen(false), 150)}
              disabled={disabled}
              placeholder=" "
              className="w-full h-full bg-transparent px-3 py-2 focus:outline-none focus:ring-0 rounded-md shadow-sm"
            />
            {inputRef.current?.value && isOpen && (
              <IoMdClose
                className="absolute left-11 text-gray-500 top-[34%] cursor-pointer"
                onClick={() => clearInput(field.onChange)}
              />
            )}
            {errors[name] && (
              <small className="text-error mr-1">
                {String(errors[name].message)}
              </small>
            )}

            <IoIosArrowDown
              onClick={() => setIsOpen(!isOpen)}
              className={`absolute cursor-pointer text-gray-500 transition left-5 top-[34%] ${
                isOpen && "rotate-180"
              } `}
            />

            {isOpen && (
              <ul className="absolute mt-10 shadow-md z-20 w-full bg-white border divide-y border-gray-300 rounded-md max-h-48 overflow-y-auto">
                {filteredOptions.map((option, index) => (
                  <li
                    key={option.id}
                    className={cn(
                      "px-4 py-2 hover:bg-gray-200 cursor-pointer",
                      selectedIndex === index ? "bg-gray-300" : ""
                    )}
                    onMouseDown={() =>
                      handleOptionSelect(option, field.onChange)
                    }
                  >
                    {option.label}
                  </li>
                ))}
                {filteredOptions.length < 1 && (
                  <li className="px-4 py-2">آیتمی یافت نشد</li>
                )}
              </ul>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default Autocomplete;
