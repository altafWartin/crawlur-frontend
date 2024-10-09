import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import TopContainer from "./TopContainer";
import SearchExampleStandard from "../Component/Search/SearchExampleStandard";
import HomeNavbar from "../Component/Navbar/HomeNavbar";
import { useTranslation } from "react-i18next";
import RecentlyProduct from "../Component/RecentlyProduct/RecentlyProduct";
import rightsideimg from "../assets/rightside (2).svg";
import leftsideimg from "../assets/leftside (2).svg";

import frame716 from "../assets/maincomp/Frame 716.svg";
import frame710 from "../assets/maincomp/Frame 710.svg";
import frame711 from "../assets/maincomp/Frame 711.svg";
import frame717 from "../assets/maincomp/Frame 717.svg";
import frame714 from "../assets/maincomp/Frame 714.svg";
import downicon from "../assets/maincomp/Icon.svg";
import translate from "../assets/maincomp/translate.svg";
import FooterMobile from "../Component/Footer/FooterMobile";

const HomeDesktop = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full   text-dark-blue overflow-x-hidden">
      <HomeNavbar />
      <section className="w-screen block laptop:hidden bg-gradient-to-b from-[#F5F7FF] to-transparent flex flex-col items-center px-0 pb-12 relative">
        <div className="container mx-auto flex flex-col items-center bg-transparent">
          <div className="w-full pt-4">
            <div className="flex flex-col items-center justify-center text-[1.25rem] text-darkslateblue-400 font-p-18-bold">
              <h2 className="m-0 text-[2.125rem] font-extrabold text-center">
                <span className="block text-[#0e275d]">{t("unleashing")}</span>
                <span className="block text-[2.125rem] font-[800] text-transparent bg-clip-text bg-gradient-to-b from-[#256FFD] to-[#004FE6] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                  {t("smartConsumerData")}
                </span>
              </h2>
              <p className="text-[1rem] font-bold leading-[1.2rem] text-slategray text-center">
                {t("discoverDetailedProfiles")} {t("helpYouMakeDecisions")}
              </p>

              <div className=" w-full h-full">
                <SearchExampleStandard />
              </div>

              <div className="flex items-center justify-center mt-8 gap-[1.25rem]">
                <button className="py-2 px-6 bg-blue text-white rounded-[4px] shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-[1.3125rem] font-Outfit font-bold">
                  {t("button")}
                </button>

                <button
                  className="py-2 px-6 bg-transparent text-blue rounded-[4px] shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-[1.3125rem] font-Outfit font-bold"
                  style={{ border: "1px solid blue" }}
                >
                  {t("button")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full hidden laptop:block relative">
        <div className="main-container  w-[calc(1920*var(--rpx))]  h-[calc(617*var(--rpx))] bg-gradient-to-b from-[#f2f4fd] to-transparent  z-40 overflow-hidden mx-auto my-0">
          <div className="absolute top-[calc(80*var(--rpx))] bottom-[calc(80*var(--rpx))] left-[calc(212.22086334228516*var(--rpx))] right-[calc(216.22508832525068*var(--rpx))] z-[36]">
            <button className="w-[9.86%] h-[10.28%] bg-[#0e275d] rounded-[calc(56*var(--rpx))] border-none absolute top-0 left-[10.51%] z-[32] pointer">
              <span className="flex w-[97.28%] h-[51.06%] justify-center items-start font-['Outfit'] text-[calc(20*var(--rpx))] font-extrabold leading-[calc(24*var(--rpx))] text-[#fff] absolute top-[23.4%] left-[1.36%] text-center whitespace-nowrap z-[33]">
                Active Beta
              </span>
            </button>
            <div className="w-[calc(190*var(--rpx))]  h-[calc(97*var(--rpx))] bg-[#fff] rounded-[calc(14*var(--rpx))] absolute top-[calc(24*var(--rpx))] left-[calc(135.77913665771484*var(--rpx))] shadow-[calc(40*var(--rpx))_calc(40*var(--rpx))_calc(76.80000305175781*var(--rpx))_0_rgba(44,114,179,0.05)] z-[1]">
              <div className="w-[calc(187*var(--rpx))] h-[calc(40*var(--rpx))] font-['Nunito'] text-[calc(16*var(--rpx))] font-bold leading-[calc(20*var(--rpx))] relative text-center whitespace-nowrap z-[2] mt-[calc(36*var(--rpx))] mr-0 mb-0 ml-[calc(1*var(--rpx))]">
                <span className="font-['Nunito'] text-[calc(16*var(--rpx))] font-bold leading-[calc(20*var(--rpx))] text-[#0e275d] relative text-center">
                  Limited to
                  <br />
                </span>
                <span className="font-['Nunito'] text-[calc(16*var(--rpx))] font-extrabold leading-[calc(20*var(--rpx))] text-[#0e275d] relative text-center">
                  Amazon Products
                </span>
              </div>
            </div>
            <div className="w-[calc(669*var(--rpx))] h-[27.13%] font-['Outfit'] text-[calc(56*var(--rpx))] font-extrabold leading-[calc(62*var(--rpx))] absolute top-[9.85%] left-1/2 text-center translate-x-[-49.78%] translate-y-0 whitespace-nowrap z-[4]">
              <span className="font-['Outfit'] text-[calc(56*var(--rpx))] font-extrabold leading-[calc(62*var(--rpx))] text-[#0e275d] relative text-center">
                Unleashing
                <br />
              </span>
              <span className="font-['Outfit'] text-blue text-[calc(56*var(--rpx))] font-extrabold leading-[calc(62*var(--rpx))] relative text-center">
                Smart Consumer Data
              </span>
            </div>
            <img
              src={frame711}
              alt="Description of the image"
              className="w-[11.15%]  h-[50.88%] absolute top-[17.66%] left-[78.29%] z-[31]"
            />{" "}
            <div className="w-[calc(147*var(--rpx))]  h-[calc(147*var(--rpx))] text-[0px] bg-[#fff] rounded-[calc(22*var(--rpx))] absolute top-[calc(88.9996337890625*var(--rpx))] left-[calc(1290.7792587280273*var(--rpx))] shadow-[calc(-40*var(--rpx))_calc(40*var(--rpx))_calc(76.80000305175781*var(--rpx))_0_rgba(44,115,180,0.05)] z-[26]">
              <span className="flex w-[calc(96*var(--rpx))] h-[calc(20*var(--rpx))] justify-center items-start font-['Nunito'] text-[calc(16*var(--rpx))] font-bold leading-[calc(20*var(--rpx))] text-[#0e275d] relative text-center whitespace-nowrap z-[29] mt-[calc(27*var(--rpx))] mr-0 mb-0 ml-[calc(26*var(--rpx))]">
                Available in
              </span>
              <span className="flex w-[calc(87.99999475479126*var(--rpx))] h-[calc(49.99999701976776*var(--rpx))] justify-center items-start font-['Outfit'] text-[calc(48*var(--rpx))] text-blue font-extrabold leading-[calc(49.99999701976776*var(--rpx))] relative text-center whitespace-nowrap z-[27] mt-[calc(2*var(--rpx))] mr-0 mb-0 ml-[calc(31*var(--rpx))]">
                20+
              </span>
              <span className="flex w-[calc(96*var(--rpx))] h-[calc(20*var(--rpx))] justify-center items-start font-['Nunito'] text-[calc(16*var(--rpx))] font-bold leading-[calc(20*var(--rpx))] text-[#0e275d] relative text-center whitespace-nowrap z-[28] mt-[calc(1.0000029802322388*var(--rpx))] mr-0 mb-0 ml-[calc(26*var(--rpx))]">
                Languages
              </span>
            </div>
            <img
              src={frame710}
              alt="helllllll"
              className="w-[5.97%] h-[23.36%] absolute top-[34.14%] left-[94.03%] z-[24]"
            />
            <img
              src={frame716}
              alt="Frame 711"
              className="w-[11.83%]  h-[23.41%] absolute top-[54.76%] left-[12.03%] z-[22]"
            />
            <div className="w-[calc(171*var(--rpx))]  h-[calc(150*var(--rpx))] text-[0px] bg-[#fff] rounded-[calc(22*var(--rpx))] absolute top-[calc(257.5751953125*var(--rpx))] left-[calc(28.779136657714844*var(--rpx))] shadow-[calc(40*var(--rpx))_calc(40*var(--rpx))_calc(76.80000305175781*var(--rpx))_0_rgba(44,114,179,0.05)] z-[18]">
              <span className="flex w-[calc(110.99999338388443*var(--rpx))] h-[calc(49.99999701976776*var(--rpx))] justify-center items-start font-['Outfit'] text-[calc(48*var(--rpx))] font-extrabold text-blue leading-[calc(49.99999701976776*var(--rpx))] relative text-center whitespace-nowrap z-[19] mt-[calc(28*var(--rpx))] mr-0 mb-0 ml-[calc(32*var(--rpx))]">
                256+
              </span>
              <span className="flex w-[calc(143*var(--rpx))] h-[calc(40*var(--rpx))] justify-center items-start font-['Nunito'] text-[calc(16*var(--rpx))] font-bold leading-[calc(20*var(--rpx))] text-[#0e275d] relative text-center overflow-hidden z-20 mt-[calc(5.000002980232239*var(--rpx))] mr-0 mb-0 ml-[calc(15*var(--rpx))]">
                Profiles Searched
                <br />
                Today
              </span>
            </div>
            <img
              src={translate}
              alt="Description of the image"
              className="w-[2.68%] h-[8.75%] bg-cover bg-no-repeat absolute top-[67.18%] left-[74.74%] overflow-hidden z-[12]"
            />
            <img
              src={frame714}
              alt="Description of the image"
              className="w-[1.01%] h-[1.97%] bg-no-repeat absolute top-[70.68%] left-[78.52%] z-[14]"
            />
            <img
              src={frame717}
              alt="Description of the image"
              className="w-[5.97%] h-[23.36%]  bg-no-repeat absolute top-[71.68%] left-0 z-[16]"
            />
            <button className="flex w-[9.65%] h-[10.94%] pt-[calc(10*var(--rpx))] pr-[calc(30*var(--rpx))] pb-[calc(10*var(--rpx))] pl-[calc(30*var(--rpx))] gap-[calc(10*var(--rpx))] justify-center items-center flex-nowrap bg-[#004fe5] rounded-[calc(4*var(--rpx))] border-none absolute top-[89.06%] left-[39.68%] overflow-hidden z-[34] pointer">
              <span className="flex w-[calc(64*var(--rpx))] h-[calc(26*var(--rpx))] justify-center items-start shrink-0 basis-auto font-['Outfit'] text-[calc(21*var(--rpx))] font-bold leading-[calc(26*var(--rpx))] text-[#fff] relative text-center whitespace-nowrap z-[35]">
                Button
              </span>
            </button>
            <button className="flex w-[9.65%] h-[10.94%] pt-[calc(10*var(--rpx))] pr-[calc(30*var(--rpx))] pb-[calc(10*var(--rpx))] pl-[calc(30*var(--rpx))] gap-[calc(10*var(--rpx))] justify-center items-center flex-nowrap bg-transparent rounded-[calc(4*var(--rpx))] border-solid border-[calc(1*var(--rpx))] border-[#004fe5] absolute top-[89.06%] left-[50.67%] overflow-hidden z-[36] pointer">
              <span className="flex w-[calc(64*var(--rpx))] h-[calc(26*var(--rpx))] justify-center items-start shrink-0 basis-auto font-['Outfit'] text-[calc(21*var(--rpx))] font-bold leading-[calc(26*var(--rpx))] text-[#004fe5] relative text-center whitespace-nowrap z-[37]">
                Button
              </span>
            </button>
          </div>
          <span className="flex w-[calc(690*var(--rpx))] h-[9.08%] justify-center items-start font-['Nunito'] text-[calc(20*var(--rpx))] font-bold leading-[calc(28*var(--rpx))] text-[#5d6d80] absolute top-[43.92%] left-[calc(50%-calc(349*var(--rpx)))] text-center overflow-hidden z-[5]">
            Discover detailed, consumer-driven profiles with insights from
            diverse
            <br />
            sources to help you make confident and informed decisions with ease.
          </span>

          <div>
            <div className=" w-[calc(700*var(--rpx))]  z-50 h-[calc(80*var(--rpx))] absolute top-[calc(367*var(--rpx))] left-[calc(590*var(--rpx))] right-[calc(616*var(--rpx))]">
              <SearchExampleStandard />
            </div>
          </div>
        </div>
      </div>

      <RecentlyProduct />

      <div className="w-full bg-[#FBFBFB] flex mobile:flex-row   items-center justify-center  py-[4rem]">
        <div className="container ">
          <div className="flex  mobile:flex-row flex-col">
            <div className="flex-1  rounded-lg ">
              <h1 className="text-[#0E275D] font-[Outfit] font-bold text-center laptop:text-start  text-[1.5rem] leading-[2.125rem]  laptop:text-[1.5rem] laptop:leading-[1.5rem] desktop:text-[2rem] desktop:leading-[2rem]">
                {t("exploringCrawlur")}
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="desktop:w-[566px] p-5 hover:bg-[#F3FFFE]  rounded-3xl flex flex-row items-start justify-start gap-4 max-w-full text-left text-dark-blue font-h5-22-bold">
                  <div className="h-[30px] w-[30px]   laptop:h-[50px] laptop:w-[50px] desktop:h-[70px] desktop:w-[70px]  rounded-full bg-[#DDFCFA] relative flex items-center justify-center">
                    <img
                      className="h-[24px] w-[24px] laptop:h-[30px] laptop:w-[30px] desktop:h-[50px] desktop:w-[50px]   object-cover z-4 transition-transform duration-300 ease-in-out hover:scale-110"
                      loading="lazy"
                      alt="icon"
                      src="/fi-br-search-alt@2x.png"
                    />
                  </div>

                  <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
                    <div className="relative text-[1rem] leading-[1rem] desktop:text-[1.375rem] desktop:leading-[1.5rem] font-semibold inline-block z-3">
                      {t("discover")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito] text-[0.7375rem] laptop:text-[0.875rem] laptop:leading-[1.2rem] desktop:text-[1rem] desktop:leading-[1.625rem] font-bold">
                      {t("discoverDescription")}
                    </b>
                  </div>
                </div>
                <div className="desktop:w-[566px] p-5 hover:bg-[#bcb8f3] rounded-3xl flex flex-row items-start justify-start gap-4 max-w-full text-left text-dark-blue font-h5-22-bold">
                  <div className="h-[30px] w-[30px]   laptop:h-[50px] laptop:w-[50px] desktop:h-[70px] desktop:w-[70px]  rounded-full bg-[#EBE5FF] relative flex items-center justify-center">
                    <img
                      className="h-[24px] w-[24px] laptop:h-[30px] laptop:w-[30px] desktop:h-[50px] desktop:w-[50px]   object-cover z-4 transition-transform duration-300 ease-in-out hover:scale-110"
                      loading="lazy"
                      alt="icon"
                      src="/group-703.svg"
                    />
                  </div>

                  <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
                    <div className="relative text-[1rem] leading-[1rem] desktop:text-[1.375rem] desktop:leading-[1.5rem] font-semibold inline-block z-3">
                      {t("explore")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito] text-[0.7375rem] laptop:text-[0.875rem] laptop:leading-[1.2rem] desktop:text-[1rem] desktop:leading-[1.625rem] font-bold">
                      {t("exploreDescription")}
                    </b>
                  </div>
                </div>

                <div className="desktop:w-[566px] p-5 hover:bg-[#fef2f2] rounded-3xl flex flex-row items-start justify-start gap-4 max-w-full text-left text-dark-blue font-h5-22-bold">
                  <div className="h-[30px] w-[30px]   laptop:h-[50px] laptop:w-[50px] desktop:h-[70px] desktop:w-[70px]  rounded-full bg-[#FFEAE7] relative flex items-center justify-center">
                    <img
                      className="h-[24px] w-[24px] laptop:h-[30px] laptop:w-[30px] desktop:h-[50px] desktop:w-[50px]   object-cover z-4 transition-transform duration-300 ease-in-out hover:scale-110"
                      alt="icon"
                      src="/crown.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-2 max-w-full">
                    <div className="relative text-[1rem] leading-[1rem] desktop:text-[1.375rem] desktop:leading-[1.5rem]font-semibold inline-block z-3">
                      {t("access")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito] text-[0.7375rem] laptop:text-[0.875rem] laptop:leading-[1.2rem] desktop:text-[1rem] desktop:leading-[1.625rem] font-bold">
                      {t("accessDescription")}
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mobile:hidden tablet:hidden ml-5  mr-10 laptop:block w-[2px] h-auto  border-l-2 border-gray-300 opacity-10" />

            <div className="flex-1    rounded-lg  ">
              <h1 className="text-[#0E275D] font-[Outfit] font-bold text-center laptop:text-start  text-[1.5rem] leading-[2.125rem]  laptop:text-[1.5rem] laptop:leading-[1.5rem] desktop:text-[2rem] desktop:leading-[2rem]">
                {t("navigatingCrawlur")}
              </h1>
              <div className="self-stretch flex flex-col   items-start justify-start max-w-full">
                <div className=" p-5 hover:bg-[#f0f9ff] rounded-3xl flex flex-col laptop:flex-row justify-center   items-center laptop:justify-start gap-4 max-w-full text-left text-dark-blue font-h5-22-bold">
                  <div className="h-[50px] w-[50px]   laptop:h-[50px] laptop:w-[50px] desktop:h-[70px] desktop:w-[70px]  rounded-full bg-[#E5F1FF] relative flex items-center justify-center">
                    <img
                      className="h-[30px] w-[30px] laptop:h-[30px] laptop:w-[30px] desktop:h-[50px] desktop:w-[50px]   object-cover z-4 transition-transform duration-300 ease-in-out hover:scale-110"
                      loading="lazy"
                      alt="icon"
                      src="/bx-search-alt.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[18rem] max-w-full">
                    <div className="relative text-[1rem] leading-[1rem] desktop:text-[1.375rem] desktop:leading-[1.5rem] font-semibold inline-block min-w-[5.5rem] z-3">
                      {t("search")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito] text-[0.7375rem] laptop:text-[0.875rem] laptop:leading-[1.2rem] desktop:text-[1rem] desktop:leading-[1.625rem] font-bold">
                    Our catalog by pasting an Amazon product URL, searching  by name, or describing what you're looking for, further refining results with advanced AI filters.
                    </b>
                  </div>
                </div>

                <div className="desktop:w-[566px] p-5 hover:bg-[#f0fdf4] rounded-3xl flex flex-row items-start justify-start gap-4 max-w-full text-left text-dark-blue font-h5-22-bold">
                  <div className="h-[30px] w-[30px]   laptop:h-[50px] laptop:w-[50px] desktop:h-[70px] desktop:w-[70px] rounded-full bg-[#DFFFF2] relative flex items-center justify-center">
                    <img
                      className="h-[24px] w-[24px] laptop:h-[30px] laptop:w-[30px] desktop:h-[50px] desktop:w-[50px]   object-cover z-4 transition-transform duration-300 ease-in-out hover:scale-110"
                      loading="lazy"
                      alt="icon"
                      src="/group-663.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[18rem] max-w-full">
                    <div className="relative text-[1rem] leading-[1rem] desktop:text-[1.375rem] desktop:leading-[1.5rem] font-semibold inline-block min-w-[5.5rem] z-3">
                      {t("evaluate")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito] text-[0.7375rem] laptop:text-[0.875rem] laptop:leading-[1.2rem] desktop:text-[1rem] desktop:leading-[1.625rem] font-bold">
                    Profiles by submitting a thumbs up or thumbs down, helping to refine and improve the quality of Crawlur's content.
                    </b>
                  </div>
                </div>

                <div className="desktop:w-[566px] p-5 hover:bg-[#fff7ed] rounded-3xl flex flex-row items-start justify-start gap-4 max-w-full text-left text-dark-blue font-h5-22-bold">
                  <div className="h-[30px] w-[30px]   laptop:h-[50px] laptop:w-[50px] desktop:h-[70px] desktop:w-[70px]  rounded-full bg-[#FFFADC] relative flex items-center justify-center">
                    <img
                      className="h-[24px] w-[24px] laptop:h-[30px] laptop:w-[30px] desktop:h-[45px] desktop:w-[45px]   object-cover z-4 transition-transform duration-300 ease-in-out hover:scale-110"
                      alt="icon"
                      src="/translate.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-2">
                    <div className="relative text-[1rem] leading-[1rem] desktop:text-[1.375rem] desktop:leading-[1.5rem] font-semibold inline-block min-w-[5.5rem] z-3">
                      {t("connect")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito] text-[0.7375rem] laptop:text-[0.875rem] laptop:leading-[1.2rem] desktop:text-[1rem] desktop:leading-[1.625rem] font-bold">
                      {t("connectDescription")}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default HomeDesktop;
