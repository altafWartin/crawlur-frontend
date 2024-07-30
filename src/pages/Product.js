import React from "react";
import ProductInformation from "./ProductInformation";

const Product = () => {
  return (
    <div className="w-full relative  bg-white-color overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <section className="self-stretch [background:linear-gradient(180deg,_#f5f7ff,_rgba(252,_252,_255,_0))] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.125rem] box-border gap-[5rem] max-w-full lg:gap-[2.5rem] mq825:gap-[1.25rem] mq825:pb-[1.313rem] mq825:box-border mq1425:pb-[2rem] mq1425:box-border">
        <div className="self-stretch h-[87.313rem] relative [background:linear-gradient(180deg,_#f5f7ff,_rgba(252,_252,_255,_0))] hidden" />
        <div
          className={`self-stretch mt-16  flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[2.5rem] text-dark-blue font-typography-desktop-h5-22-bold`}
        >
          <div className="w-[82.5rem] flex flex-row items-start justify-start gap-[1.987rem] max-w-full lg:flex-wrap mq825:gap-[1rem]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[1.8rem] min-w-[26.438rem] max-w-full mq825:min-w-full">
              <div className="h-[39.688rem] flex-1 flex flex-col items-end justify-start gap-[2.018rem] max-w-[calc(100%_-_107px)] mq450:max-w-full mq825:gap-[1rem]">
                <img
                  className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-35@2x.png"
                />
                <div className="w-[32.3rem] flex flex-row items-start justify-end py-[0rem] px-[3.25rem] box-border max-w-full mq825:pl-[1.625rem] mq825:pr-[1.625rem] mq825:box-border">
                  <img
                    className="h-[3.65rem] flex-1 relative max-w-full overflow-hidden z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group-758.svg"
                  />
                </div>
              </div>
              <div className="w-[4.881rem] flex flex-col items-start justify-start gap-[0.95rem] mq450:hidden">
                <img
                  className="w-[4.881rem] h-[4.881rem] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-687@2x.png"
                />
                <img
                  className="w-[4.881rem] h-[4.881rem] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-31@2x.png"
                />
                <img
                  className="w-[4.881rem] h-[4.881rem] relative object-cover z-[1]"
                  alt=""
                  src="/group-31-1@2x.png"
                />
                <div className="self-stretch h-[4.881rem] relative z-[1]">
                  <img
                    className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
                    alt=""
                    src="/group-185@2x.png"
                  />
                  <img
                    className="absolute top-[1.3rem] left-[1.356rem] rounded-sm w-[2.169rem] h-[2.15rem] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/image03.svg"
                  />
                </div>
                <img
                  className="w-[4.881rem] h-[4.881rem] relative object-cover z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-186@2x.png"
                />
                <img
                  className="w-[4.881rem] h-[4.881rem] relative z-[1]"
                  loading="lazy"
                  alt=""
                  src="/group-860.svg"
                />
              </div>
            </div>
            <div className="w-[39.813rem] shadow-[3px_3px_1.5px_rgba(173,_173,_173,_0.25)] rounded-3xl bg-white-color box-border flex flex-col items-start justify-start py-[1.375rem] px-[1.75rem] gap-[2.062rem] min-w-[39.813rem] max-w-full z-[1] border-[2px] border-solid border-whitesmoke-200 lg:flex-1 mq825:gap-[1rem] mq825:pt-[1.25rem] mq825:pb-[1.25rem] mq825:box-border mq825:min-w-full">
              <div className="w-[39.813rem] h-[47.313rem] relative shadow-[3px_3px_1.5px_rgba(173,_173,_173,_0.25)] rounded-3xl bg-white-color box-border hidden max-w-full border-[2px] border-solid border-whitesmoke-200" />
              <div className="self-stretch flex flex-col items-start justify-start gap-[1.875rem]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1rem]">
                  <h1 className="m-0 self-stretch relative text-inherit leading-[2.625rem] font-bold font-inherit z-[2] mq450:text-[1.5rem] mq450:leading-[1.563rem] mq825:text-[2rem] mq825:leading-[2.125rem]">
                    <p className="m-0">{`Vitamix Professional Series `}</p>
                    <p className="m-0">750 Blender</p>
                  </h1>
                  <b className="self-stretch relative text-[1.125rem] leading-[1.625rem] font-typography-desktop-p-18-bold text-grey z-[2]">
                    The Vitamix Professional Series 750 offers commercial-grade
                    blending power in a home blender designed to make quick work
                    of food prep and produce silky-smooth textures.
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start gap-[0.625rem]">
                  <button className="cursor-pointer [border:none] p-[1.25rem] bg-orange rounded-34xl overflow-hidden flex flex-row items-start justify-start z-[2] hover:bg-chocolate-100">
                    <b className="h-[0rem] relative text-[1.313rem] inline-block font-typography-desktop-h5-22-bold text-dark-blue text-center min-w-[5.063rem] mq450:text-[1.063rem]">
                      Amazon
                    </b>
                  </button>
                  <button className="cursor-pointer py-[0.312rem] px-[1.187rem] bg-[transparent] rounded-34xl overflow-hidden flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-orange hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                    <b className="relative text-[1.313rem] leading-[1.625rem] inline-block font-typography-desktop-h5-22-bold text-dark-blue text-center min-w-[5.063rem] mq450:text-[1.063rem] mq450:leading-[1.313rem]">
                      Amazon
                    </b>
                  </button>
                </div>
              </div>
              <div className="self-stretch rounded-sm box-border flex flex-col items-start justify-start pt-[0.875rem] pb-[0.812rem] pr-[1rem] pl-[1.187rem] gap-[1.25rem] max-w-full z-[3] text-[1.125rem] text-dimgray font-typography-desktop-p-18-bold border-[1px] border-solid border-darkslateblue-200">
                <div className="w-[36.063rem] h-[26.625rem] relative rounded-sm box-border hidden max-w-full border-[1px] border-solid border-darkslateblue-200" />
                <div className="self-stretch h-[16.875rem] relative max-w-full">
                  <div className="absolute top-[0.125rem] left-[0rem] w-full flex flex-col items-start justify-start gap-[0.843rem] max-w-full h-full">
                    <b className="relative text-[1.313rem] leading-[1.5rem] inline-block font-typography-desktop-h5-22-bold text-dark-blue min-w-[7.5rem] z-[4] mq450:text-[1.063rem] mq450:leading-[1.188rem]">
                      Product Info
                    </b>
                    <div className="flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="relative leading-[1.625rem] z-[2]">
                        <span className="font-extrabold">
                          <span>Category:</span>
                          <span className="text-grey">{` `}</span>
                        </span>
                        <span className="font-semibold">Technology</span>
                      </div>
                      <img
                        className="w-[11.25rem] h-[0.063rem] relative z-[4]"
                        alt=""
                        src="/category-icon.svg"
                      />
                    </div>
                    <div className="self-stretch relative leading-[1.625rem] z-[4]">
                      <p className="m-0">
                        <span className="font-extrabold font-typography-desktop-p-18-bold text-dimgray">
                          Model:
                        </span>
                        <b className="font-typography-desktop-p-18-bold text-grey">{` `}</b>
                        <span>
                          <span className="font-semibold font-typography-desktop-p-18-bold">
                            #VM0158A
                          </span>
                        </span>
                        <span className="font-extrabold">
                          <span>{` `}</span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span className="font-extrabold">
                          <span className="text-dimgray">Manufacturer:</span>
                        </span>
                        <b className="font-typography-desktop-p-18-bold text-grey">{` `}</b>
                        <span>
                          <span className="font-semibold">Vitamix</span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span>
                          <span className="font-extrabold">
                            Production Year:
                          </span>
                        </span>
                        <b className="font-typography-desktop-p-18-bold text-grey">{` `}</b>
                        <span className="font-semibold font-typography-desktop-p-18-bold">
                          <span className="text-dimgray">2021</span>
                          <span className="text-grey">{` `}</span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span className="font-extrabold font-typography-desktop-p-18-bold text-dimgray">
                          Made In:
                        </span>
                        <b className="font-typography-desktop-p-18-bold text-grey">{` `}</b>
                        <span>
                          <span className="font-semibold">USA</span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span>
                          <span className="font-extrabold font-typography-desktop-p-18-bold">
                            Product Dimensions:
                          </span>
                        </span>
                        <b className="font-typography-desktop-p-18-bold text-grey">{` `}</b>
                        <span>
                          <span className="font-semibold">
                            8.5 x 7.25 x 17.25 inches
                          </span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span>
                          <span className="font-extrabold">
                            Product Weight:
                          </span>
                        </span>
                        <b className="font-typography-desktop-p-18-bold text-grey">{` `}</b>
                        <span>
                          <span className="font-semibold font-typography-desktop-p-18-bold">
                            13 pounds
                          </span>
                        </span>
                      </p>
                      <p className="m-0">
                        <span>
                          <span className="font-extrabold">Product Color:</span>
                        </span>
                        <b className="font-typography-desktop-p-18-bold text-grey">{` `}</b>
                        <span className="font-semibold font-typography-desktop-p-18-bold text-dimgray">
                          Black
                        </span>
                      </p>
                    </div>
                  </div>
                  <img
                    className="absolute top-[0rem] left-[31.688rem] w-[1.875rem] h-[1.875rem] object-contain z-[4]"
                    alt=""
                    src="/group-632@2x.png"
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.893rem] text-[1.313rem] text-dark-blue font-typography-desktop-h5-22-bold">
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full z-[4]"
                    alt=""
                    src="/info-links.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                      <b className="relative leading-[1.5rem] z-[4] mq450:text-[1.063rem] mq450:leading-[1.188rem]">
                        Additional Info
                      </b>
                    </div>
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative object-contain min-h-[1.875rem] z-[4]"
                      alt=""
                      src="/group-631@2x.png"
                    />
                  </div>
                  <img
                    className="self-stretch relative max-w-full overflow-hidden max-h-full z-[4]"
                    alt=""
                    src="/vector-6-1.svg"
                  />
                  <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                      <b className="relative leading-[1.5rem] z-[4] mq450:text-[1.063rem] mq450:leading-[1.188rem]">
                        Product Links
                      </b>
                    </div>
                    <img
                      className="h-[1.875rem] w-[1.875rem] relative object-contain z-[4]"
                      alt=""
                      src="/group-631@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div
          className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-lavender font-typography-desktop-p-18-bold`}
        >
          <div className="w-[82.5rem] rounded-3xl bg-dark-blue flex flex-col items-start justify-start py-[3.125rem] pr-[1.25rem] pl-[3.125rem] box-border gap-[1.875rem] max-w-full z-[1] mq825:gap-[0.938rem] mq1425:pl-[1.563rem] mq1425:box-border">
            <div className="w-[82.5rem] h-[19.375rem] relative rounded-3xl bg-dark-blue hidden max-w-full" />
            <div className="flex flex-row items-start justify-center gap-[0.625rem] max-w-full lg:flex-wrap">
              <button className="cursor-pointer py-[0.687rem] px-[1.437rem] bg-[transparent] rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-grey hover:bg-lightslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightslategray-100">
                <b className="relative text-[1.25rem] leading-[1.5rem] font-typography-desktop-h5-22-bold text-white-color text-center">
                  Product Summary
                </b>
              </button>
              <button className="cursor-pointer [border:none] py-[0.812rem] px-[1.5rem] bg-blue rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[2] hover:bg-royalblue">
                <b className="relative text-[1.25rem] leading-[1.5rem] font-typography-desktop-h5-22-bold text-white-color text-center">
                  Product Features
                </b>
              </button>
              <button className="cursor-pointer py-[0.687rem] px-[1.437rem] bg-[transparent] rounded-8xs flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-grey hover:bg-lightslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightslategray-100">
                <b className="relative text-[1.25rem] leading-[1.5rem] font-typography-desktop-h5-22-bold text-white-color text-center mq450:text-[1rem] mq450:leading-[1.188rem]">
                  Considerations
                </b>
              </button>
              <button className="cursor-pointer py-[0.687rem] px-[1.437rem] bg-[transparent] rounded-8xs flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-grey hover:bg-lightslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightslategray-100">
                <b className="relative text-[1.25rem] leading-[1.5rem] font-typography-desktop-h5-22-bold text-white-color text-center">
                  Technical Specifications
                </b>
              </button>
              <button className="cursor-pointer py-[0.687rem] px-[1.437rem] bg-[transparent] w-[5.563rem] rounded-8xs box-border flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-grey hover:bg-lightslategray-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-lightslategray-100">
                <b className="relative text-[1.25rem] leading-[1.5rem] inline-block font-typography-desktop-h5-22-bold text-white-color text-center min-w-[2.563rem] mq450:text-[1rem] mq450:leading-[1.188rem]">
                  FAQ
                </b>
              </button>
            </div>
            <b className="w-[75.688rem]  relative leading-[1.625rem] inline-block max-w-full z-[2] mq450:text-[1rem] mq450:leading-[1.313rem]">
              <ul className="m-0 font-p-18-bold text-whiteee pl-[1.35rem]">
                <li>Five pre-programmed settings for automated blending.</li>
                <li>
                  Variable Speed Control and Pulse feature for fine-tuning
                  texture.
                </li>
                <li>
                  Powerful 2.2 horsepower motor moves blades at high speeds to
                  blend tough ingredients.
                </li>
                <li>
                  Stainless steel blades designed to handle the toughest
                  ingredients.
                </li>
                <li>
                  Self-cleaning function cleans in 60 seconds with just water
                  and a drop of dish soap.
                </li>
              </ul>
            </b>
          </div>
        </div>
        <section
          className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4.375rem] box-border max-w-full text-center text-[2.5rem] text-dark-blue font-typography-desktop-h5-22-bold lg:pb-[2.813rem] lg:box-border mq825:pb-[1.813rem] mq825:box-border `}
        >
          <div className="flex-1 bg-gray flex flex-col items-end justify-start pt-[3.125rem] pb-[5.5rem] pr-[9.625rem] pl-[8rem] box-border gap-[3.125rem] max-w-full lg:pt-[2rem] lg:pb-[3.563rem] lg:pr-[4.813rem] lg:pl-[4rem] lg:box-border mq825:gap-[1.563rem] mq825:pt-[1.313rem] mq825:pb-[2.313rem] mq825:pr-[2.375rem] mq825:pl-[2rem] mq825:box-border">
            <div className="w-[120rem] h-[60.5rem] relative bg-gray hidden max-w-full" />
            <div className="w-[100.75rem] flex flex-row items-start justify-center max-w-full">
              <h1 className="m-0 relative text-inherit leading-[2.625rem] font-bold font-inherit z-[1] mq450:text-[1.5rem] mq450:leading-[1.563rem] mq825:text-[2rem] mq825:leading-[2.125rem]">
                Lorem Ipsum Is A Dummy Text
              </h1>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[2.125rem] max-w-full text-left text-[1.125rem] text-almost-black font-old-typo-heading-5 mq825:gap-[1.063rem]">
              <div className="h-[12.188rem] flex flex-col items-start justify-start pt-[3.562rem] px-[0rem] pb-[0rem] box-border">
                <div className="w-[8.625rem] h-[8.625rem] relative z-[1] flex items-center justify-center">
                  <img
                    className="w-full h-full z-[1] object-contain absolute left-[0.188rem] top-[2.375rem] [transform:scale(2.013)]"
                    loading="lazy"
                    alt=""
                    src="/group-875.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[0.437rem] min-w-[59.563rem] max-w-full mq1425:flex-wrap mq1425:min-w-full">
                <div className="flex-1 flex flex-col items-start justify-start gap-[1.437rem] max-w-full lg:min-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[1.625rem] max-w-full">
                    <div className="h-[30.313rem] w-[17rem] relative rounded-sm bg-[url('/public/rectangle-160@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1] lg:hidden">
                      <img
                        className="absolute top-[0rem] left-[0rem] rounded-sm w-full h-full object-cover hidden z-[1]"
                        alt=""
                        src="/rectangle-160@2x.png"
                      />
                      <div className="absolute top-[0rem] left-[0rem] rounded-sm [background:linear-gradient(83.24deg,_rgba(14,_39,_93,_0.72),_rgba(6,_42,_114,_0.02)_50%,_rgba(14,_39,_93,_0.72))] w-full h-full z-[2]" />
                      <img
                        className="absolute top-[14.25rem] left-[14.5rem] w-[0.938rem] h-[1.875rem] object-contain z-[3]"
                        alt=""
                        src="/icon-1.svg"
                      />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start gap-[1.562rem] max-w-[calc(100%_-_298px)] lg:max-w-full">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[1.562rem] max-w-full lg:flex-wrap">
                        <div className="flex-1 rounded-sm bg-white-color flex flex-col items-start justify-start pt-[1.375rem] pb-[1.5rem] pr-[1.25rem] pl-[1.875rem] box-border gap-[1.25rem] min-w-[23.75rem] max-w-full z-[2] mq825:min-w-full">
                          <div className="w-[36.563rem] h-[14.375rem] relative rounded-sm bg-white-color hidden max-w-full" />
                          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-[1.375rem] mq450:flex-wrap">
                            <div className="w-[15.375rem] flex flex-row items-center justify-start gap-[1.125rem] z-[3]">
                              <img
                                className="h-[4.375rem] w-[4.375rem] relative rounded-[50%] object-cover min-h-[4.375rem]"
                                loading="lazy"
                                alt=""
                                src="/pfp@2x.png"
                              />
                              <div className="flex-1 flex flex-col items-start justify-start">
                                <div className="flex flex-row items-center justify-start gap-[0.625rem]">
                                  <b className="relative leading-[1.5rem] inline-block min-w-[6.625rem] mq450:text-[1.125rem] mq450:leading-[1.188rem]">
                                    udername
                                  </b>
                                  <img
                                    className="h-[2.625rem] w-[2.625rem] relative"
                                    loading="lazy"
                                    alt=""
                                    src="/badge.svg"
                                  />
                                </div>
                                <div className="relative text-[1.125rem] leading-[1.625rem] font-old-typo-paragraph-18-regular text-dark-grey inline-block min-w-[7.125rem]">
                                  @udername
                                </div>
                              </div>
                            </div>
                            <div className="w-[4.25rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                              <div className="self-stretch h-[1.875rem] flex flex-row items-start justify-start gap-[0.5rem]">
                                <div className="h-[1.875rem] w-[1.875rem] relative">
                                  <div className="absolute top-[1.875rem] left-[1.875rem] rounded-61xl bg-whitesmoke-100 w-full h-full [transform:_rotate(-180deg)] [transform-origin:0_0] z-[3]" />
                                  <img
                                    className="absolute top-[0.625rem] left-[0.75rem] w-[0.313rem] h-[0.625rem] z-[4]"
                                    alt=""
                                    src="/icon-2.svg"
                                  />
                                </div>
                                <div className="h-[1.875rem] w-[1.875rem] relative rounded-61xl bg-whitesmoke-100 z-[3]">
                                  <div className="absolute top-[0rem] left-[0rem] rounded-61xl bg-whitesmoke-100 w-full h-full hidden" />
                                  <img
                                    className="absolute top-[0.625rem] left-[0.813rem] w-[0.313rem] h-[0.625rem] object-contain z-[4]"
                                    alt=""
                                    src="/icon-3.svg"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[30.125rem] relative leading-[1.625rem] font-old-typo-paragraph-18-regular inline-block max-w-full z-[3]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry.
                          </div>
                          <div className="w-[30.938rem] relative font-inter text-dark-grey inline-block whitespace-nowrap max-w-full z-[3]">
                            5:25 PM · Sep 1, 2022 · udername
                          </div>
                        </div>
                        <div className="h-[14.375rem] w-[25.75rem] relative rounded-sm bg-[url('/public/rectangle-1601@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[25.75rem] max-w-full z-[1] lg:flex-1 mq825:min-w-full">
                          <img
                            className="absolute top-[0rem] left-[0rem] rounded-sm w-full h-full object-cover hidden z-[1]"
                            alt=""
                            src="/rectangle-1601@2x.png"
                          />
                          <div className="absolute top-[0rem] left-[0rem] rounded-sm [background:linear-gradient(83.24deg,_rgba(14,_39,_93,_0.72),_rgba(6,_42,_114,_0.02)_50%,_rgba(14,_39,_93,_0.72))] w-full h-full z-[2]" />
                          <img
                            className="absolute top-[6.25rem] left-[23.25rem] w-[0.938rem] h-[1.875rem] object-contain z-[3]"
                            alt=""
                            src="/icon-1.svg"
                          />
                        </div>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start gap-[1.562rem] max-w-full text-[1.5rem] text-white-color font-typography-desktop-h5-22-bold lg:flex-wrap">
                        <div className="flex-1 flex flex-row items-start justify-start relative min-w-[23.75rem] max-w-full mq825:min-w-full">
                          <div className="h-[17.875rem] w-[17.875rem] absolute !m-[0] top-[-3.25rem] left-[9rem] [filter:blur(500px)] rounded-[50%] bg-darkslateblue-300 z-[1]" />
                          <div className="flex-1 rounded-sm [background:linear-gradient(180deg,_#ff7f2d,_#f96302)] flex flex-col items-start justify-start pt-[1.75rem] pb-[1.875rem] pr-[1.25rem] pl-[1.875rem] box-border gap-[1.125rem] max-w-full z-[2]">
                            <div className="w-[36.563rem] h-[14.375rem] relative rounded-sm [background:linear-gradient(180deg,_#ff7f2d,_#f96302)] hidden max-w-full" />
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem]">
                              <div className="relative leading-[1.5rem] font-extrabold z-[3] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
                                About The Company
                              </div>
                              <b className="self-stretch relative text-[1.125rem] leading-[1.625rem] font-typography-desktop-p-18-bold z-[3]">
                                <p className="m-0">{`Vita-Mix Corporation, doing business as Vitamix, is an `}</p>
                                <p className="m-0">{`American company that manufactures and sells commercial `}</p>
                                <p className="m-0">and residential blenders.</p>
                              </b>
                            </div>
                            <button className="cursor-pointer py-[0.312rem] px-[1.062rem] bg-[transparent] rounded overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[3] border-[1px] border-solid border-white-color hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-100">
                              <b className="relative text-[1.125rem] leading-[1.625rem] font-typography-desktop-h5-22-bold text-white-color text-center">
                                Company Website
                              </b>
                            </button>
                          </div>
                        </div>
                        <div className="h-[14.375rem] w-[25.813rem] relative rounded-sm bg-[url('/public/rectangle-1601@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[25.813rem] max-w-full z-[1] lg:flex-1 mq825:min-w-full">
                          <img
                            className="absolute top-[0rem] left-[0rem] rounded-sm w-full h-full object-cover hidden z-[1]"
                            alt=""
                            src="/rectangle-1601@2x.png"
                          />
                          <div className="absolute top-[0rem] left-[0.063rem] rounded-sm [background:linear-gradient(83.24deg,_rgba(14,_39,_93,_0.72),_rgba(6,_42,_114,_0.02)_50%,_rgba(14,_39,_93,_0.72))] w-full h-full z-[2]" />
                          <img
                            className="absolute top-[6.25rem] left-[23.25rem] w-[0.938rem] h-[1.875rem] object-contain z-[3]"
                            alt=""
                            src="/icon-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start max-w-full text-[1.5rem] text-white-color font-typography-desktop-h5-22-bold">
                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
                      <div className="self-stretch rounded-sm [background:linear-gradient(90deg,_#399afb_31.5%,_#0080ff)] flex flex-row items-start justify-start gap-[2.062rem] max-w-full z-[1] lg:flex-wrap mq450:gap-[1rem]">
                        <div className="self-stretch w-[82.5rem] relative rounded-sm [background:linear-gradient(90deg,_#399afb_31.5%,_#0080ff)] hidden max-w-full" />
                        <img
                          className="h-[14.125rem] w-[18.625rem] relative rounded-tl-sm rounded-tr-none rounded-br-none rounded-bl-sm object-cover z-[2] lg:flex-1"
                          loading="lazy"
                          alt=""
                          src="/rectangle-331@2x.png"
                        />
                        <div className="w-[37.313rem] flex flex-col items-start justify-start pt-[2.937rem] px-[0rem] pb-[0rem] box-border min-w-[37.313rem] max-w-full lg:flex-1 lg:min-w-full">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[0.906rem]">
                            <div className="w-[12.938rem] relative leading-[1.5rem] font-extrabold inline-block z-[2] mq450:text-[1.188rem] mq450:leading-[1.188rem]">
                              Blog Article Title
                            </div>
                            <img
                              className="self-stretch relative max-w-full overflow-hidden max-h-full z-[2]"
                              alt=""
                              src="/vector-61-1.svg"
                            />
                            <b className="self-stretch relative text-[1.125rem] leading-[1.625rem] font-typography-desktop-p-18-bold z-[2]">
                              <p className="m-0">{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy `}</p>
                              <p className="m-0">text ever since the 1500s.</p>
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[14.375rem] w-[26.938rem] relative max-w-full ml-[-26.938rem]">
                      <button className="cursor-pointer [border:none] py-[0.625rem] pr-[1rem] pl-[1.25rem] bg-yellow absolute top-[5.563rem] left-[11.188rem] rounded-44xl flex flex-row items-start justify-start gap-[1.062rem] z-[4]">
                        <div className="h-[3.25rem] w-[12.625rem] relative rounded-44xl bg-yellow hidden" />
                        <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
                          <div className="relative text-[1.375rem] leading-[1.5rem] font-extrabold font-typography-desktop-h5-22-bold text-dark-blue text-left inline-block min-w-[7.313rem] z-[1] mq450:text-[1.125rem] mq450:leading-[1.188rem]">
                            Know More
                          </div>
                        </div>
                        <img
                          className="h-[2rem] w-[2rem] relative z-[1]"
                          alt=""
                          src="/group-737.svg"
                        />
                      </button>
                      <div className="absolute top-[0rem] left-[0rem] w-full h-full">
                        <img
                          className="absolute top-[0rem] left-[0rem] w-full h-full object-contain z-[3]"
                          alt=""
                          src="/ornament-70.svg"
                        />
                        <div className="absolute top-[10.25rem] left-[19.188rem] rounded-lg-5 bg-dodgerblue w-[2.063rem] h-[2.063rem] z-[4]">
                          <div className="absolute top-[0rem] left-[0rem] rounded-lg-5 bg-dodgerblue w-full h-full hidden" />
                          <img
                            className="absolute h-[41.21%] w-[23.64%] top-[29.39%] right-[38.18%] bottom-[29.39%] left-[38.18%] max-w-full overflow-hidden max-h-full z-[1]"
                            alt=""
                            src="/icon-6.svg"
                          />
                        </div>
                        <div className="absolute top-[10.25rem] left-[21.75rem] rounded-lg-5 bg-dodgerblue w-[2.063rem] h-[2.063rem] z-[4]">
                          <div className="absolute top-[0rem] left-[0rem] rounded-lg-5 bg-dodgerblue w-full h-full hidden" />
                          <img
                            className="absolute h-[41.21%] w-[23.64%] top-[29.39%] right-[38.18%] bottom-[29.39%] left-[38.18%] max-w-full overflow-hidden max-h-full object-contain z-[1]"
                            alt=""
                            src="/icon-7.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[21.125rem] flex flex-col items-start justify-start pt-[12.5rem] px-[0rem] pb-[0rem] box-border">
                  <div className="w-[8.625rem] h-[8.625rem] relative z-[1] flex items-center justify-center">
                    <img
                      className="w-full h-full z-[1] object-contain absolute left-[0.188rem] top-[2.375rem] [transform:scale(2.013)]"
                      loading="lazy"
                      alt=""
                      src="/group-852.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className={`self-stretch flex flex-row items-start justify-center pt-[0rem] pb-[14.937rem] pr-[1.312rem] pl-[1.25rem] box-border max-w-full text-center text-[2.5rem] text-dark-blue font-typography-desktop-h5-22-bold lg:pb-[9.688rem] lg:box-border mq450:pb-[6.313rem] mq450:box-border `}
        >
          <div className="w-[82.438rem] flex flex-col items-end justify-start gap-[3.125rem] max-w-full mq825:gap-[1.563rem]">
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.25rem] pl-[1.312rem]">
              <h1 className="m-0 relative text-inherit leading-[2.625rem] font-bold font-inherit mq450:text-[1.5rem] mq450:leading-[1.563rem] mq825:text-[2rem] mq825:leading-[2.125rem]">
                Reviews
              </h1>
            </div>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[0.812rem] max-w-full text-left text-[1.75rem] text-white-color">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[26.5rem] max-w-full mq825:min-w-full">
                <div className="self-stretch rounded-t-xl rounded-b-none bg-dark-blue flex flex-row items-start justify-start pt-[1.875rem] px-[1.625rem] pb-[1.562rem] box-border gap-[1.312rem] max-w-full mq450:flex-wrap">
                  <div className="h-[5.938rem] w-[40.813rem] relative rounded-t-xl rounded-b-none bg-dark-blue hidden max-w-full" />
                  <img
                    className="h-[2.5rem] w-[2.5rem] relative min-h-[2.5rem] z-[1]"
                    alt=""
                    src="/group-837.svg"
                  />
                  <div className="w-[19.438rem] flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border">
                    <b className="self-stretch relative leading-[2.125rem] z-[1] mq450:text-[1.375rem] mq450:leading-[1.688rem]">
                      Positive Reviews Say
                    </b>
                  </div>
                </div>
                <div className="self-stretch rounded-t-none rounded-b-xl bg-gray flex flex-row items-start justify-start pt-[1.562rem] px-[1.625rem] pb-[2.187rem] box-border gap-[1.312rem] max-w-full z-[1] text-[1.25rem] text-dark-blue font-typography-desktop-p-18-bold mq450:pt-[1.25rem] mq450:pb-[1.438rem] mq450:box-border mq825:flex-wrap">
                  <div className="h-[25.25rem] w-[40.813rem] relative rounded-t-none rounded-b-xl bg-gray hidden max-w-full" />
                  <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                    <div className="flex flex-col items-start justify-start gap-[3.5rem]">
                      <img
                        className="w-[2.5rem] h-[2.5rem] relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-861.svg"
                      />
                      <img
                        className="w-[2.5rem] h-[2.5rem] relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-861.svg"
                      />
                      <img
                        className="w-[2.5rem] h-[2.5rem] relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-861.svg"
                      />
                      <img
                        className="w-[2.5rem] h-[2.5rem] relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-861.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem] min-w-[21.5rem] max-w-full mq825:gap-[1.25rem] mq825:min-w-full">
                    <div className="self-stretch relative leading-[1.75rem] font-semibold z-[2] mq450:text-[1rem] mq450:leading-[1.375rem]">
                      The power of this blender is unmatched; it turns
                      everything to a smooth consistency.
                    </div>
                    <div className="w-[32.125rem] relative leading-[1.75rem] font-semibold inline-block max-w-full z-[2] mq450:text-[1rem] mq450:leading-[1.375rem]">
                      Versatile and reliable, perfect for daily use from morning
                      smoothies to weekend soups.
                    </div>
                    <div className="w-[32.125rem] relative leading-[1.75rem] font-semibold inline-block max-w-full z-[2] mq450:text-[1rem] mq450:leading-[1.375rem]">
                      The preset functions are a time-saver and foolproof for
                      perfect results every time.
                    </div>
                    <div className="w-[32.125rem] relative leading-[1.75rem] font-semibold inline-block max-w-full z-[2] mq450:text-[1rem] mq450:leading-[1.375rem]">
                      Worth the investment for those serious about cooking and
                      nutrition.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start min-w-[26.5rem] max-w-full mq825:min-w-full">
                <div className="self-stretch rounded-t-xl rounded-b-none bg-dark-blue flex flex-row items-start justify-start pt-[1.875rem] px-[1.625rem] pb-[1.562rem] box-border gap-[1.312rem] max-w-full mq825:flex-wrap">
                  <div className="h-[5.938rem] w-[40.813rem] relative rounded-t-xl rounded-b-none bg-dark-blue hidden max-w-full" />
                  <img
                    className="h-[2.5rem] w-[2.5rem] relative min-h-[2.5rem] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/group-832.svg"
                  />
                  <div className="w-[23.5rem] flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem] box-border max-w-full">
                    <h3 className="m-0 self-stretch relative text-inherit leading-[2.125rem] font-bold font-inherit z-[1] mq450:text-[1.375rem] mq450:leading-[1.688rem]">
                      Negative Reviews Say
                    </h3>
                  </div>
                </div>
                <div className="self-stretch rounded-t-none rounded-b-xl bg-gray flex flex-row items-start justify-start pt-[1.562rem] px-[1.625rem] pb-[2.187rem] box-border gap-[1.312rem] max-w-full z-[1] text-[1.25rem] text-dark-blue font-typography-desktop-p-18-bold mq825:flex-wrap">
                  <div className="h-[19.25rem] w-[40.813rem] relative rounded-t-none rounded-b-xl bg-gray hidden max-w-full" />
                  <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                    <div className="flex flex-col items-start justify-start gap-[3.5rem]">
                      <img
                        className="w-[2.5rem] h-[2.5rem] relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-883.svg"
                      />
                      <img
                        className="w-[2.5rem] h-[2.5rem] relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-883.svg"
                      />
                      <img
                        className="w-[2.5rem] h-[2.5rem] relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-883.svg"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2.5rem] min-w-[21.688rem] max-w-full mq825:gap-[1.25rem] mq825:min-w-full">
                    <div className="self-stretch relative leading-[1.75rem] font-semibold z-[2] mq450:text-[1rem] mq450:leading-[1.375rem]">
                      Much louder than expected, especially on the highest
                      settings.
                    </div>
                    <div className="self-stretch relative leading-[1.75rem] font-semibold z-[2] mq450:text-[1rem] mq450:leading-[1.375rem]">
                      Takes up more space than anticipated, not ideal for small
                      kitchens.
                    </div>
                    <div className="self-stretch relative leading-[1.75rem] font-semibold z-[2] mq450:text-[1rem] mq450:leading-[1.375rem]">
                      The cost can be prohibitive, though it’s a quality
                      investment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductInformation />
      </section>
    </div>
  );
};

export default Product;
