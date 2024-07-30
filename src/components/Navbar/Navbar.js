import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Language from '../Language';

const Navebar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <header className="self-stretch bg-blue flex flex-row items-start justify-center py-[2.187rem] px-[1.25rem] box-border top-[0] z-[99] sticky max-w-full text-left text-[1.313rem] text-white-color font-h5-22-bold">
      <div className="h-[7.5rem] w-[120rem] relative bg-blue hidden max-w-full" />
      <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
        <img
          className="w-[8.75rem] h-[1.625rem] relative z-[3]"
          loading="lazy"
          alt="Crawlur Logo"
          src="/crawlur2.svg"
        />
      </div>
      {location.pathname === "/Catalog" && (
        <div className="w-[34.125rem] rounded bg-white-color flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[1.25rem] max-w-full z-[1]">
          <div className="self-stretch w-[34.125rem] relative rounded bg-white-color hidden max-w-full" />
          <input
            className="w-[40.438rem] [border:none] [outline:none] bg-[transparent] h-[2.438rem] flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem] box-border font-p-18-bold font-semibold text-[1.25rem] text-darkslateblue-300"
            placeholder="Vitamix"
            type="text"
          />
          <div className="h-[3.125rem] w-[3.625rem] relative rounded-tl-7xl rounded-tr rounded-br rounded-bl-7xl bg-accent z-[2]">
            <div className="absolute top-[0rem] left-[0rem] rounded-tl-7xl rounded-tr rounded-br rounded-bl-7xl bg-accent w-full h-full hidden" />
            <img
              className="absolute top-[1rem] left-[1.25rem] w-[1.125rem] h-[1.125rem] z-[3]"
              alt=""
              src="/icon2.svg"
            />
          </div>
        </div>
      )}
      <div className="w-[25.938rem] mx-9 rounded-lg bg-mediumslateblue-100 flex flex-row items-start justify-between py-[0.75rem] pr-[2.125rem] pl-[2.187rem] box-border max-w-full gap-[1.25rem] z-[3]">
        <Link
          to="/"
          className="[text-decoration:none] relative leading-[1.5rem] font-bold text-[inherit] text-center inline-block min-w-[3.625rem] z-[4]"
        >
          Home
        </Link>
        <img
          className="self-stretch w-[0.094rem] relative max-h-full min-h-[1.625rem] z-[4]"
          loading="lazy"
          alt=""
          src="/vector-57.svg"
        />
        <Link
          to="/serching"
          className="[text-decoration:none] relative leading-[1.5rem] font-bold text-[inherit] inline-block min-w-[4.875rem] z-[4]"
        >
          Catalog
        </Link>
        <img
          className="self-stretch w-[0.094rem] relative max-h-full min-h-[1.625rem] z-[4]"
          alt=""
          src="/vector-57.svg"
        />
        <div className="flex flex-row items-start justify-start gap-[0.75rem]">
          <a className="[text-decoration:none] relative leading-[1.5rem] font-bold text-[inherit] inline-block min-w-[4.5rem] z-[4]">
            Browse
          </a>
          <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[0.813rem] h-[0.438rem] relative z-[4]"
              alt=""
              src="/button-icon.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[16.125rem] flex flex-row items-start justify-start gap-[0.625rem]">
        <Link
          to="/signup"
          className="cursor-pointer no-underline [border:none] py-[0.75rem] px-[1.875rem] bg-accent rounded overflow-hidden flex flex-row items-start justify-start z-[3] hover:bg-gainsboro-400"
        >
          <a className="[text-decoration:none] relative text-[1.313rem] leading-[1.625rem] font-bold font-h5-22-bold text-blue text-center inline-block min-w-[4rem]">
            SignUp
          </a>
        </Link>
        <Link
          to="/Catalog"
          className="cursor-pointer no-underline py-[0.562rem] px-[1.75rem] bg-[transparent] flex-1 rounded overflow-hidden flex flex-row items-start justify-start z-[3] border-[2px] border-solid border-accent hover:bg-gainsboro-500 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro-400"
        >
          <a className="[text-decoration:none] relative text-[1.313rem] leading-[1.625rem] font-bold font-h5-22-bold text-white-color text-center inline-block min-w-[4rem]">
            Button
          </a>
        </Link>
      </div>
      <button className="bg-transparent" onClick={toggleDropdown}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8f3384b8e37ad00554547ef3eb4fe771c67ea8ec62102998c6f010bc17912dd?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
          className="self-end w-16 rounded-none aspect-square"
          alt="Language selector"
        />
      </button>
 
      {isDropdownVisible && (
        <div className="absolute top-[100%] mr-[100px]  text-slategray right-0 mt-2 bg-white border rounded shadow-lg z-10">
          <Language />
        </div>
      )}
    </header>
  );
};

export default Navebar;
