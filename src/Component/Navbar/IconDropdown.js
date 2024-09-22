import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TrancelateButton from "../../assets/trancelateButton.svg";

const IconDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // Handle language change
  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
    setIsOpen(false); // Close the dropdown after selecting a language
  };

  // Options for language selection
  const languageOptions = [
    { value: "en", name: "English" },
    { value: "fr", name: "French" },
    { value: "pt", name: "Portuguese" },
    { value: "ja", name: "Japanese" },
    { value: "zh", name: "Chinese" },
    { value: "ar", name: "Arabic" },
  ];

  return (
    <div className="relative  inline-block text-left">
      {/* Dropdown trigger button */}
      <button
        onClick={toggleDropdown}
        className="p-0 h-[2.5rem] cursor-pointer w-[2.5rem] rounded-full focus:outline-none"
      >
        <img src={TrancelateButton} alt="Translate" className="h-full w-full" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute left-[-10rem] mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-[99999]">
          <div className="py-1">
            {/* Map through language options */}
            {languageOptions.map((option) => (
              <button
                key={option.value}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleLanguageChange(option.value)}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default IconDropdown;
