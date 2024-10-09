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
      className="relative inline-block py-1 text-left desktop:text-[1.3rem] laptop:text-[1rem] mobile:text-[0.8rem] leading-[1.5rem]"
      onMouseEnter={() => setIsOpen(true)} // Open on hover
      onMouseLeave={() => setIsOpen(false)} // Close when hover out
    >
      {/* Dropdown Toggle Button */}
      <button className="flex items-center gap-[0.75rem] text-[1.1rem] desktop:text-[1.3125rem]  leading-[1.5rem] bg-transparent text-white rounded-md font-bold font-Outfit inline-block ">
        {t("browse")}
        <img
          className="w-[0.813rem] h-[0.438rem]"
          alt="dropdown icon"
          src="/button-icon.svg"
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute desktop:w-[12.9375rem] laptop:w-[13rem] flex-shrink-0 z-[99999] mt-1 rounded-[0.5rem] shadow-[0px_0px_6.4px_rgba(0,0,0,0.10)] bg-white ring-1 ring-black ring-opacity-5">
          <div className="gap-7">
            {[
              { label: t("About Us"), path: "/about-us" },
              { label: t("Recently Added"), path: "/recently-added" },
              { label: t("Recently Trending"), path: "/recently-trending" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleSelect(item.path)}
                className="flex justify-between border-b-[1px] border-opacity-50 bg-white items-center px-4 py-2 text-[#0E275D] text-[1.125rem] font-bold font-Nunito hover:bg-[#E8F0FF] w-full text-left"
              >
                <span className="leading-[1.625rem]">{item.label}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.6rem"
                  height="0.6rem"
                  viewBox="0 0 6 11"
                  fill="none"
                >
                  <path
                    d="M1 1L5 5.5L1 10"
                    stroke="#CACACA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BrowseDropdown;
