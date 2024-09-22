import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import IconDropdown from "./IconDropdown";
import ExampleModal from "../EmailModal/Emailmodal";
import BrowseDropdown from "./BrowseDropdown";

const HomeNavbar = () => {
  const { t } = useTranslation(); // Initialize useTranslation and get the 't' function
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <header className=" w-full flex py-5 top-0 z-50 bg-blue text-white-color font-h5-22-bold ">
      {/* Logo and Navigation Section */}
      <div className="w-full  flex justify-between items-center">
        <div className="w-full flex ml-[10rem] justify-between mr-[4rem] ">
          <div className="flex items-center">
            <img
              className="w-[5.75rem] h-[1.825rem]"
              loading="lazy"
              alt="Crawlur Logo"
              src="/crawlur2.svg"
            />
          </div>

          {/* Navigation Section */}
          <div className="flex items-center font-Outfit ml-20 gap-5 bg-mediumslateblue-100 rounded-lg py-[0.1rem] px-4 max-w-[23.938rem] text-[0.7525rem]">
            <Link
              to="/"
              className="text-white no-underline  font-bold leading-4 text-center inline-block min-w-[2.625rem] text-[0.9rem]"
            >
              {t("home")}
            </Link>
            <img
              className="w-[0.094rem] h-[1.625rem]"
              alt=""
              src="/vector-57.svg"
            />
            <Link
              to="/Catalog"
              className="text-white no-underline font-bold leading-4 inline-block min-w-[2.875rem] text-[0.9rem]"
            >
              {t("catalog")}
            </Link>
            <img
              className="w-[0.094rem] h-[1.625rem]"
              alt=""
              src="/vector-57.svg"
            />
            <BrowseDropdown />
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-[0.625rem]">
            <button
              className="cursor-pointer py-[0.35rem] no-underline px-[0.875rem] bg-accent rounded overflow-hidden flex items-center justify-center hover:bg-gainsboro-400"
              onClick={openModal}
            >
              <span className="text-[0.85rem] leading-[1.625rem] font-bold text-blue text-center">
                Sign Up
              </span>
            </button>

            {isModalVisible && (
              <ExampleModal onCancel={closeModal} /> // Modal call
            )}

            <Link
              to="/signup"
              className="cursor-pointer py-[0.35rem] no-underline px-[0.875rem] bg-gainsboro-500 border-2 border-white-color rounded overflow-hidden flex items-center justify-center hover:bg-gainsboro-500 hover:border-gainsboro-400"
            >
              <span className="text-[0.85rem] leading-[1.625rem] font-bold text-white-color text-center">
                {t("ConnetUs")}
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* Icon Dropdown Section */}
      <div className="w-[5rem]  flex justify-center items-center">
        <IconDropdown />
      </div>
    </header>
  );
};

export default HomeNavbar;
