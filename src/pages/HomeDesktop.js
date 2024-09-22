import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import TopContainer from "./TopContainer";
import SearchExampleStandard from "../Component/Search/SearchExampleStandard";
import HomeNavbar from "../Component/Navbar/HomeNavbar";
import { useTranslation } from "react-i18next";
import RecentlyProduct from "../Component/RecentlyProduct/RecentlyProduct";
import rightsideimg from "../assets/rightside copy.png";
import leftsideimg from "../assets/leftside.png";

const HomeDesktop = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full relative bg-white-color flex flex-col items-start justify-center leading-normal tracking-normal text-left text-[1.125rem] text-dark-blue font-paragraph-18-medium overflow-x-hidden">
      <HomeNavbar />

      {/* <section className=" self-stretch pt-3  [background:linear-gradient(180deg,#F5F7FF,rgba(252,252,255,0.00))]  flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.937rem] box-border relative gap-[5rem] max-w-full">
        <div
          className={`self-stretch flex flex-row items-start justify-center py-[0rem]  pl-[1.95rem] box-border max-w-full text-center text-[1.25rem] text-white-color font-h5-22-bold `}
        >
          <div className="w-[92.5rem] flex flex-col items-end justify-start gap-[10.187rem] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.662rem] max-w-full">
              <div className="self-stretch mt-11 flex flex-row items-start justify-end max-w-full">
                <div className="w-[8.875rem] left-[200px] flex absolute left-5 flex-col items-start text-[1.25rem] text-white font-h5-22-bold">
                  <div className="flex absolute flex-row items-start justify-start pr-5 pl-5">
                    <div className="rounded-3xl bg-dark-blue flex flex-row items-center justify-center py-2 px-3 whitespace-nowrap z-3">
                      <div className="relative text-[14px] leading-[1rem] font-extrabold z-4">
                        {t("activeBeta")}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch  shadow-[40px_40px_76.8px_rgba(44,_114,_180,_0.05)] rounded-sm bg-white flex flex-row items-start justify-start pt-9 px-5 pb-5 z-2 -mt-[1.438rem] text-[1rem] text-dark-blue font-p-18-bold">
                    <div className="flex-1 relative pt-8 leading-[1rem] z-3 text-[12px]">
                      <p className="m-0">
                        <b>{t("limitedTo")}</b>
                      </p>
                      <p className="m-0 font-extrabold">
                        {t("amazonProducts")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-[82.813rem] flex flex-row items-end justify-between max-w-full gap-[1.25rem]">
                  <div className="h-[7rem] w-[7rem] top-[13rem] left-[11rem] absolute rounded-2xl z-30 bg-white shadow-[2.5rem_2.5rem_4.8rem_rgba(44,_114,_180,_0.05)]  flex flex-col ">
                    <h1 className="text-[2rem] leading-5 text-royalblue-100 from-blue-500 to-blue-800">
                      256+
                    </h1>
                    <b className="self-stretch relative text-dark-blue text-[0.7rem] leading-[0.8rem] font-p-18-bold z-4 text-center mb-[0.5rem]">
                      <p className="m-0">{t("profilesSearched")}</p>
                      <p className="m-0">{t("today")}</p>
                    </b>
                  </div>

                  <div className="w-[63.438rem] pl-1rem ml-[6rem] flex flex-row items-center justify-center gap-[0.937rem] max-w-full">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.812rem] px-0rem pb-0rem box-border min-w-[32.875rem] max-w-full text-[3.5rem] text-dark-blue">
                      <div className="self-stretch flex flex-col items-start justify-start gap-[0.8rem] max-w-full">
                        <div className="self-stretch flex flex-row items-start justify-start py-0rem pr-[4.5rem] pl-[4.437rem] box-border max-w-full">
                          <h2 className="m-0 flex-1 relative text-[1.25rem] text-inherit leading-[2rem] font-extrabold font-inherit inline-block max-w-full z-[2]">
                            <p className="m-0 text-[2rem]">{t("unleashing")}</p>{" "}
                            <p className="m-0 text-[2rem] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#256ffd,_#004fe6)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                              {t("smartConsumerData")}
                            </p>
                          </h2>
                        </div>
                        <b className="self-stretch relative text-[0.75rem] leading-[1.2rem] font-p-18-bold text-slategray z-[2]">
                          <p className="m-0">{t("discoverDetailedProfiles")}</p>
                          <p className="m-0">{t("helpYouMakeDecisions")}</p>
                        </b>
                      </div>
                    </div>
                  </div>

                  <div className="w-[9.188rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.687rem] box-border text-[1rem] text-dark-blue font-p-18-bold">
                    <div className="self-stretch flex flex-row items-start justify-start relative">
                      <div className="w-[5rem]  h-[5rem] flex-1 absolute right-44  top-[-5rem] shadow-[-40px_40px_76.8px_rgba(44,_115,_180,_0.05)] rounded-3xl bg-white-color flex flex-col items-end justify-start py-4 px-4 gap-[0.093rem] z-[3]">
                        <b className="self-stretch text-[12px] relative leading-[1.25rem] z-[4]">
                          {t("availableIn")}
                        </b>
                        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[0.187rem] pl-[0.312rem] text-[2rem] font-h5-22-bold">
                          <div className="relative leading-[2.525rem] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#256ffd,_#004fe6)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.5rem] z-[4]">
                            20+
                          </div>
                        </div>
                        <b className="self-stretch text-[12px] relative leading-[1.25rem] z-[4]">
                          {t("languages")}
                        </b>
                      </div>
                      <img
                        className="h-[4.669rem] w-[4.563rem]   absolute  !m-[0] top-[-1rem] left-[-4.969rem]   object-contain z-[2]"
                        loading="lazy"
                        alt=""
                        src="/dot-1@2x.png"
                      />
                      <img
                        className="h-[8.694rem] w-[6.406rem] absolute   !m-[0] bottom-[-3.812rem] left-[-14.969rem] object-contain z-[4]"
                        loading="lazy"
                        alt=""
                        src="/vector-50.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[70.188rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[3rem] text-dark-blue">
                <div className="w-[10.688rem] flex flex-row items-start justify-start relative">
                  <img
                    className="h-[5rem] w-[5rem] absolute  !m-[0] bottom-[-8.5rem] left-[7.012rem] object-contain z-[2]"
                    loading="lazy"
                    alt=""
                    src="/dot-1@2x.png"
                  />

                  <img
                    className="h-[4.188rem] w-[7.038rem] absolute  !m-[0] top-[-1.012rem] right-[-11.594rem] object-contain z-[99]"
                    loading="lazy"
                    alt=""
                    src="/vector-47.svg"
                  />
                </div>
                <div className="w-[47.538rem] flex flex-col items-start justify-start pt-[0.837rem] px-[0rem] pb-[0rem] box-border max-w-full text-left text-[1.25rem] text-darkslateblue-400 font-p-18-bold">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem] max-w-full">
                      <SearchExampleStandard />

                      <div className="flex flex-col items-start justify-start  py-2">
                        <div className="flex flex-row items-end justify-start gap-[1rem]">
                          <img
                            className="h-[2.5rem] w-[1.5rem] relative z-[2]"
                            loading="lazy"
                            alt=""
                            src="/group-624.svg"
                          />
                          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1rem]">
                            <img
                              className="w-[0.513rem] h-[0.238rem] relative z-[2]"
                              loading="lazy"
                              alt=""
                              src="/vector-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-[24.5rem] flex items-center justify-center px-5 gap-4">
                      <button className="py-2 px-6 bg-blue text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        <span className="text-lg font-semibold">
                          {" "}
                          {t("button")}
                        </span>
                      </button>
                      <button className="py-2 px-6 bg-transparent border border-blue text-blue rounded-lg shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                        <span className="text-lg font-semibold">
                          {" "}
                          {t("button")}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section
        className="w-full  self-stretch pt-3 bg-gradient-to-b from-[#F5F7FF] to-transparent flex flex-col items-center px-0 pb-12 relative gap-5 "
      >
        {" "}
        <div className="w-full mx-[10rem] pt-3 flex flex-row justify-center bg-transparent">
          <div className="w-[17rem]  ">
            <img className="w-full h-[22rem]" src={leftsideimg} />
          </div>
          <div className="w-[30rem] px-2 pt-8  ">
            {" "}
            <div className=" flex flex-col items-center justify-center  text-[1.25rem] text-darkslateblue-400 font-p-18-bold">
              <div className="self-stretch flex flex-col items-center justify-center gap-[1.5rem] ">
                <div className="w-full flex flex-row items-center justify-center gap-[0.937rem]">
                  <div className="flex-1 flex flex-col items-center justify-center pt-[1.812rem] px-0rem pb-0rem box-border text-[3.5rem] text-dark-blue">
                    <div className="self-stretch flex flex-col items-center justify-center gap-[0.8rem]">
                      <div className="self-stretch flex flex-row items-center justify-center box-border">
                        <h2 className="m-0 flex-1 relative text-[1.25rem] font-extrabold text-center leading-[2rem] inline-block max-w-full z-[2]">
                          <p className="m-0 text-[2.4rem] font-[800] leading-[2.875rem] font-[Outfit]">
                            {t("unleashing")}
                          </p>
                          <p className="m-0 text-[2.4rem] font-[800] leading-[2.875rem] font-[Outfit] text-transparent bg-clip-text bg-gradient-to-b from-[#256FFD] to-[#004FE6] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                            {t("smartConsumerData")}
                          </p>
                        </h2>
                      </div>

                      <b className="self-stretch relative text-[0.85rem] leading-[1.2rem] font-p-18-bold text-slategray z-[2] text-center">
                        <p className="m-0">{t("discoverDetailedProfiles")}</p>
                        <p className="m-0">{t("helpYouMakeDecisions")}</p>
                      </b>
                    </div>
                  </div>
                </div>

                <SearchExampleStandard />

                <div className="w-full flex items-center justify-center px-5 gap-4">
                  <button className="py-2 px-6 bg-blue text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    <span className="text-lg font-semibold">
                      {" "}
                      {t("button")}
                    </span>
                  </button>
                  <button className="py-2 px-6 bg-transparent border border-blue text-blue rounded-lg shadow-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                    <span className="text-lg font-semibold">
                      {" "}
                      {t("button")}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[17rem]  ">
            <img className="w-full h-[20rem] " src={rightsideimg} />
          </div>
        </div>
      </section>

      <RecentlyProduct />

      <section className="self-stretch py-10 px-[10.5rem] bg-slate-50  flex flex-col items-center justify-center  text-left  text-dark-blue font-h5-22-bold">
        <div className="w-full flex flex-wrap  justify-center gap-[0.0625rem] pb-[0.625rem] text-[1.8rem]">
          <div className="w-full p-[1rem] max-w-sm">
            <div className="flex flex-col items-start justify-start gap-[2.25rem] max-w-full">
              <h2 className="m-0 relative text-[1.45rem] text-inherit leading-[1.25rem] font-bold font-inherit z-[2]">
                {t("exploringCrawlur")}
              </h2>
              <div className="self-stretch flex flex-col items-start justify-start  max-w-full">
                <div className="w-[35.938rem] p-5 hover:bg-azure rounded-3xl  flex flex-row items-start justify-start gap-[1.437rem] max-w-full text-left text-[1.375rem] text-dark-blue font-h5-22-bold">
                  <div
                    style={{ backgroundColor: "#DDFCFA" }}
                    className="h-[3.375rem] w-[3.375rem] flex items-center justify-center rounded-full relative transition-all duration-300 ease-in-out hover:bg-[#CBEFF3]"
                  >
                    <img
                      className="w-[2.0rem] h-[2.0rem] object-cover z-[4] transition-transform duration-300 ease-in-out hover:scale-110"
                      loading="lazy"
                      alt=""
                      src="/fi-br-search-alt@2x.png"
                    />
                  </div>

                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[18.063rem] max-w-full">
                    <div className="relative text-[1rem] leading-[1rem] font-semibold inline-block min-w-[5.5rem] z-[3]">
                      {t("discover")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito]  text-[0.7375rem] font-bold leading-[1.25rem]">
                      {t("discoverDescription")}
                    </b>
                  </div>
                </div>

                <div className="w-[33.938rem] p-5 hover:bg-bcb8f3 rounded-3xl  flex flex-row items-start justify-start gap-[1.437rem] max-w-full text-left text-[1.375rem] text-dark-blue font-h5-22-bold">
                  <div
                    style={{ backgroundColor: "#EBE5FF" }}
                    className="h-[3.375rem] w-[3.375rem]  rounded-full relative flex items-center justify-center"
                  >
                    <img
                      className="w-[2.0rem] h-[2.0rem] object-cover z-[4] transition-transform duration-300 ease-in-out hover:scale-110"
                      loading="lazy"
                      alt=""
                      src="/group-703.svg"
                    />
                  </div>

                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[18.063rem] max-w-full">
                    <div className="relative text-[1rem] leading-[1rem] font-semibold inline-block min-w-[5.5rem] z-[3]">
                      {t("explore")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito]  text-[0.7375rem] font-bold leading-[1.25rem]">
                      {t("exploreDescription")}
                    </b>
                  </div>
                </div>

                <div className="w-[33.938rem] p-5 hover:bg-[#fef2f2] rounded-3xl  flex flex-row items-start justify-start gap-[1.437rem] max-w-full text-left text-[1.375rem] text-dark-blue font-h5-22-bold">
                  <div
                    style={{ backgroundColor: "#FFEAE7" }}
                    className="h-[3.375rem] w-[3.375rem]  rounded-full relative flex items-center justify-center"
                  >
                    <img
                      className="w-[2.0rem] h-[2.0rem] object-cover z-[4] transition-transform duration-300 ease-in-out hover:scale-110"
                      alt=""
                      src="/crown.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[18.063rem] max-w-full">
                    <div className="relative text-[1rem] leading-[1rem]  font-semibold inline-block min-w-[5.5rem] z-[3]">
                      {t("access")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito]  text-[0.7375rem] font-bold leading-[1.25rem]">
                      {t("accessDescription")}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="w-[0.125rem] h-auto border-l-2 border-gray-300 opacity-20" />
          <div className="w-full p-[1rem] max-w-sm">
            <div className="flex flex-col items-start justify-start gap-[2.25rem] max-w-full">
              <h2 className="m-0 relative text-[1.45rem] text-inherit leading-[1.25rem] font-bold font-inherit font-[Outfit] z-[2]">
                {t("navigatingCrawlur")}
              </h2>
              <div className="self-stretch flex flex-col items-start hover:bg-#F3FFFE justify-start  max-w-full">
                <div className="w-[35.938rem] p-5 hover:bg-[#f0f9ff] rounded-3xl  flex flex-row items-start justify-start gap-[1.437rem] max-w-full text-left text-[1.375rem] text-dark-blue font-h5-22-bold">
                  <div
                    style={{ backgroundColor: "#E5F1FF" }}
                    className="h-[3.375rem] w-[3.375rem]  rounded-full relative flex items-center justify-center"
                  >
                    <img
                      className="w-[2.0rem] h-[2.0rem] object-cover z-[4] transition-transform duration-300 ease-in-out hover:scale-110"
                      loading="lazy"
                      alt=""
                      src="/bx-search-alt.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[18.063rem] max-w-full">
                    <div className="relative text-[1rem] leading-[1rem] font-semibold inline-block  min-w-[5.5rem] z-[3]">
                      {t("search")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito] text-[0.7375rem] font-bold leading-[1.25rem]">
                      {t("searchDescription")}
                    </b>
                  </div>
                </div>

                <div className="w-[33.938rem] p-5 hover:bg-[#f0fdf4] rounded-3xl  flex flex-row items-start justify-start gap-[1.437rem] max-w-full text-left  text-dark-blue font-h5-22-bold">
                  <div
                    style={{ backgroundColor: "#DFFFF2" }}
                    className="h-[3.375rem] w-[3.375rem]  rounded-full relative flex items-center justify-center"
                  >
                    <img
                      className="w-[2.0rem] h-[2.0rem] object-cover z-[4] transition-transform duration-300 ease-in-out hover:scale-110"
                      loading="lazy"
                      alt=""
                      src="/group-663.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[18.063rem] max-w-full">
                    <div className="relative text-[1rem] leading-[1rem] font-semibold inline-block min-w-[5.5rem] z-[3]">
                      {t("evaluate")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito]  text-[0.7375rem] font-bold leading-[1.25rem]">
                      {t("evaluateDescription")}
                    </b>
                  </div>
                </div>

                <div className="w-[33.938rem] p-5 hover:bg-[#fff7ed] rounded-3xl  flex flex-row items-start justify-start gap-[1.437rem] max-w-full text-left  text-dark-blue font-h5-22-bold">
                  <div
                    style={{ backgroundColor: "#FFFADC" }}
                    className="h-[3.375rem] w-[3.375rem]  rounded-full relative flex items-center justify-center"
                  >
                    <img
                      className="w-[2.0rem] h-[2.0rem] object-cover z-[4] transition-transform duration-300 ease-in-out hover:scale-110"
                      alt=""
                      src="/translate.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[18.063rem] max-w-full">
                    <div className="relative text-[1rem] leading-[1rem] font-semibold inline-block min-w-[5.5rem] z-[3]">
                      {t("connect")}
                    </div>
                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito]  text-[0.7375rem] font-bold leading-[1.25rem]">
                      {t("connectDescription")}
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDesktop;
