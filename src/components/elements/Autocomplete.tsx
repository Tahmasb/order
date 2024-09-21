import { cn } from "@utils/style";
import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";

type Option = {
  label: string;
  value: string | number;
};

interface AutocompleteProps {
  label: string;
  name: string;
  options: Option[];
  disabled?: boolean;
  className?: string;
}

const Autocomplete: React.FC<AutocompleteProps> = ({
  label,
  name,
  options,
  className,
  disabled = false,
}) => {
  const { control } = useFormContext();
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>(""); // حالت جدا برای مدیریت مقدار اینپوت

  const handleInputChange = (value: string) => {
    setInputValue(value); // تنظیم مقدار اینپوت برای تایپ
    if (value) {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(value.toLowerCase())
        )
      );
    } else {
      setFilteredOptions(options); // بازگرداندن تمام آیتم‌ها در صورت پاک شدن ورودی
    }
  };

  const handleOptionSelect = (
    option: Option,
    onChange: (value: any) => void
  ) => {
    setIsOpen(false);
    setInputValue(option.label); // نمایش نام گزینه در اینپوت
    onChange(option); // ذخیره کل آبجکت انتخابی
  };

  return (
    <div
      // className="flex flex-col w-full"
      className={cn(
        "flex flex-col w-full relative rounded-lg",
        className || ""
      )}
    >
      <label className="z-10 px-1.5 right-2.5 bg-white bottom-8  text-sm font-medium text-gray-700 absolute">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className="relative">
            <input
              type="text"
              autoComplete="off"
              value={inputValue} // استفاده از حالت برای کنترل مقدار اینپوت
              onClick={() => setIsOpen(true)} //* باز کردن منو هنگام کلیک */}
              onChange={(e) => {
                handleInputChange(e.target.value);
                field.onChange(null); // پاک کردن مقدار آبجکت انتخاب‌شده در فرم هنگام تایپ
              }}
              onBlur={() => setTimeout(() => setIsOpen(false), 150)} //* بستن منو با کمی تأخیر هنگام خارج شدن از اینپوت */}
              disabled={disabled}
              className="w-full px-3 py-2 focus:border-primary border border-secondary  rounded-lg shadow-sm outline-none disabled:bg-gray-100"
            />
            {isOpen && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md max-h-48 overflow-y-auto">
                {filteredOptions.map((option) => (
                  <li
                    key={option.value}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    onMouseDown={() =>
                      handleOptionSelect(option, field.onChange)
                    } //* ذخیره کل آبجکت */}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default Autocomplete;
