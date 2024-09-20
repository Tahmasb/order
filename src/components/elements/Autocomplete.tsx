"use client";
import { useState } from "react";
type AutocompleteProps = {
  label: string;
  options: object[];
};
const Autocomplete: React.FC<AutocompleteProps> = ({ options, label }) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowOptions(true);
  };

  const handleSelectOption = (option) => {
    setInputValue(option);
    setShowOptions(false);
  };

  const handleInputFocus = () => {
    if (!inputValue) {
      setShowOptions(true);
      setFilteredOptions(options);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowOptions(false);
    }, 200);
  };

  return (
    <div className="relative">
      <label
        htmlFor="autocomplete"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id="autocomplete"
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleInputFocus}
        onBlur={handleBlur}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
      {showOptions && (
        <ul className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onMouseDown={() => handleSelectOption(option)} // Use onMouseDown instead of onClick
              className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Autocomplete;
