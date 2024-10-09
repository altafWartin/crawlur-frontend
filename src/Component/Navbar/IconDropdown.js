import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import TrancelateButton from "../../assets/trancelateButton.svg";

// Import flag images (You can adjust the paths according to your folder structure)
import enFlag from "../../assets/flags/en.png";
import spFlag from "../../assets/flags/sp.svg";
import frFlag from "../../assets/flags/fr.svg";
import ptFlag from "../../assets/flags/pt.svg";
import jaFlag from "../../assets/flags/ja.svg";
import zhFlag from "../../assets/flags/zh.svg";
import arFlag from "../../assets/flags/ar.svg";

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

  // Options for language selection with flag images
  const languageOptions = [
    { value: "en", name: "English", flag: enFlag },
    { value: "sp", name: "Spanish", flag: spFlag },
    { value: "fr", name: "French", flag: frFlag },
    { value: "pt", name: "Portuguese", flag: ptFlag },
    { value: "ja", name: "Japanese", flag: jaFlag },
    { value: "zh", name: "Chinese", flag: zhFlag },
    { value: "ar", name: "Arabic", flag: arFlag },
  ];

  return (
    <div className=" relative inline-block text-left">
      {/* Dropdown trigger button */}
      <button
        onClick={toggleDropdown}
        className="p-0 h-[2.5rem] flex items-center cursor-pointer w-[2.5rem] rounded-full focus:outline-none"
      >
        <img src={TrancelateButton} alt="Translate" className="h-full w-full" />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute w-[200px] h-[275px] left-[-10rem] mt-2  bg-white border border-gray-200 rounded-lg shadow-lg z-[99999]">
          {/* Map through language options */}
          {languageOptions.map((option) => (
            <button
              key={option.value}
              className={`w-[200px] h-[46px] flex items-center justify-between w-full border-b-[1px] border-opacity-25 border-gray-100 bg-white text-left px-4  text-sm text-gray-700 hover:bg-gray-100 ${
                i18n.language === option.value ? "bg-[#E8F0FF]" : ""
              }`}
              onClick={() => handleLanguageChange(option.value)}
            >
              <span className="flex items-center">
                <img
                  src={option.flag}
                  alt={`${option.name} flag`}
                  className="w-[37px] h-[26px] mr-2"
                />
                <span className="text-[rgba(14,39,93,0.90)] font-poppins text-[1.125rem] font-semibold leading-[1.625rem]">
                  {option.name}
                </span>
              </span>
              {i18n.language === option.value ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="11"
                    viewBox="0 0 16 11"
                    fill="none"
                  >
                    <path
                      d="M1 5.34623L5.84086 10.0001L15 1"
                      stroke="#0E275D"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </>
              ) : (
                <></>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default IconDropdown;
