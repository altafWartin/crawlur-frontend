import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import IconDropdown from "./IconDropdown";
import ExampleModal from "../EmailModal/Emailmodal";
import BrowseDropdown from "./BrowseDropdown";

const HomeNavbar = () => {
  const { t } = useTranslation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="w-full bg-blue flex ">
      {/* Header Section */}
      <header className="w-full flex justify-between px-6 laptop:ml-12 mobile:mx-12  desktop:text-[1.3rem] laptop:text-[1rem] mobile:text-[0.8rem] leading-[1.5rem] desktop:py-[2.19rem] laptop:py-[1.2rem]">
        <div className="laptop:container desktop:container laptop:mx-auto flex justify-between items-center  text-white-color font-Outfit">
          {/* Logo Section */}
          <div className=" laptop:ml-12 desktop:ml-12   flex items-center">
            <img
              className="desktop:w-[8.75rem] mobile:w-[4.25rem]    laptop:w-[6rem] desktop:h-[1.6rem] "
              loading="lazy"
              alt="Crawlur Logo"
              src="/crawlur2.svg"
            />
          </div>

          <div className="hidden mobile:block desktop:w-[25rem] ml-[8rem] desktop:h-[3.125rem] laptop:w-[19rem]">
            {/* Navigation Section */}
            <nav className=" h-full flex justify-center items-center desktop:gap-7 laptop:gap-5  bg-mediumslateblue-100 rounded-lg">
              <Link
                to="/"
                className="text-white desktop:text-[1.3rem] laptop:text-[1rem] mobile:text-[0.8rem] leading-[1.5rem] bg-transparent text-white rounded-md font-bold font-Outfit  no-underline font-bold text-center  "
              >
                {t("home")}
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="17"
                viewBox="0 0 2 28"
                fill="none"
              >
                <path
                  d="M1 1L1 27"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <Link
                to="/Catalog"
                className="text-white desktop:text-[1.3rem] laptop:text-[1rem] mobile:text-[0.8rem] leading-[1.5rem] bg-transparent text-white rounded-md font-bold font-Outfit no-underline font-bold  inline-block"
              >
                {t("catalog")}
              </Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2"
                height="17"
                viewBox="0 0 2 28"
                fill="none"
              >
                <path
                  d="M1 1L1 27"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <BrowseDropdown />
            </nav>
          </div>
          {/* Action Buttons */}
          <div className="hidden mobile:block">
            <div className="  flex items-center gap-[0.625rem]">
              <Link
                className="cursor-pointer no-underline  desktop:py-[0.8rem] laptop:py-[0.3rem] px-[0.875rem] bg-accent rounded-[4px] flex items-center justify-center hover:bg-gainsboro-400"
                onClick={openModal}
              >
                <span className="font-bold text-center text-[#324F87] desktop:text-[1.3rem] laptop:text-[1rem] mobile:text-[0.8rem] leading-[1.5rem] bg-transparent  rounded-md font-bold font-Outfit">
                  Sign Up
                </span>
              </Link>

              {isModalVisible && <ExampleModal onCancel={closeModal} />}

              <Link
                to="/signup"
                className="no-underline font-Outfit font-bold text-white text-center desktop:text-[1.3rem] laptop:text-[1rem] mobile:text-[0.8rem] leading-[1.5rem] bg-transparent text-white rounded-md font-bold font-Outfit desktop:py-[0.78rem] laptop:py-[0.2rem] rounded-[4px] px-[0.875rem] flex items-center justify-center"
                style={{ border: "1.4px solid var(--White-Color, #FFF)" }} // Inline CSS for border
              >
                {t("ConnetUs")}
              </Link>
            </div>
          </div>
        </div>
        <div className="block laptop:hidden desktop:hidden py-6 w-[1.187rem] h-11 max-md:flex max-md:items-center max-md:justify-center">
          <svg
            stroke="white"
            fill="white"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            height="2em"
            width="2em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </div>
      </header>

      {/* Icon Dropdown Section */}
      <div className=" w-20 hidden mobile:block mt-4  flex justify-center items-center">
        <IconDropdown />
      </div>
    </div>
  );
};

export default HomeNavbar;
