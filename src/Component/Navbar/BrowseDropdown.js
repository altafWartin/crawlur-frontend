import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { t } from "i18next"; // For translations

function BrowseDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelect = (route) => {
    navigate(route); // Navigate to the selected route
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div
      className="relative inline-block py-1 text-left"
      onMouseEnter={() => setIsOpen(true)} // Open on hover
      onMouseLeave={() => setIsOpen(false)} // Close when hover out
    >
      {/* Dropdown Toggle Button */}
      <button className="flex items-center gap-[0.75rem] bg-transparent text-white rounded-md font-bold text-[0.9rem] leading-[1.5rem]">
        {t("browse")}
        <img
          className="w-[0.813rem] h-[0.438rem]"
          alt="dropdown icon"
          src="/button-icon.svg"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute  mt-1 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              onClick={() => handleSelect("/about-us")}
              className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 w-full text-left"
            >
              {t("about_us")}
            </button>
            <button
              onClick={() => handleSelect("/recently-added")}
              className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 w-full text-left"
            >
              {t("recently_added")}
            </button>
            <button
              onClick={() => handleSelect("/recently-trending")}
              className="block px-4 py-2 text-gray-700 text-sm hover:bg-gray-100 w-full text-left"
            >
              {t("recently_trending")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BrowseDropdown;
