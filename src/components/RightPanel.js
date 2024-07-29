import FrameComponent from "./FrameComponent";
import FrameComponent1 from "./FrameComponent1";
import ProfileCard from "./ProfileCard";
import ProductOne from "./ProductOne";
import ProductOne1 from "./ProductOne1";
import PropTypes from "prop-types";

const RightPanel = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] pr-[1.375rem] pl-[1.25rem] box-border max-w-full text-center text-[1.25rem] text-white-color font-h5-22-bold ${className}`}
    >
      <div className="w-[89.5rem] flex flex-col items-end justify-start gap-[10.187rem] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.662rem] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end max-w-full">
            <div className="w-[82.813rem] flex flex-row items-end justify-between max-w-full gap-[1.25rem]">
              <div className="w-[63.438rem] flex flex-row items-start justify-start gap-[0.937rem] max-w-full">
                <div
                  className={`w-[33.938rem] flex flex-row items-start justify-start gap-[1.437rem] max-w-full text-left text-[1.375rem] text-dark-blue font-h5-22-bold ${className}`}
                >
                  <div className="h-[4.375rem] w-[4.375rem] relative">
                    <img
                      className="absolute top-[0rem] left-[0rem] w-full h-full z-[2]"
                      alt=""
                      src="/group-527-3.svg"
                    />
                    <img
                      className="absolute top-[1.063rem] left-[1.063rem] w-[2.25rem] h-[2.25rem] overflow-hidden z-[3]"
                      alt=""
                      src="/translate.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[18.25rem] max-w-full">
                    <div className="relative leading-[1.5rem] font-semibold inline-block min-w-[5.25rem] z-[2]">
                      Connect
                    </div>
                    <div className="self-stretch h-[3.25rem] relative text-[1.125rem] leading-[1.625rem] font-semibold font-p-18-bold text-slategray inline-block z-[2]">{`By translating any profile into over 20 languages and subscribing for updates & early access to new features.`}</div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-[2.812rem] px-[0rem] pb-[0rem] box-border min-w-[32.875rem] max-w-full text-[3.5rem] text-dark-blue">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[1.375rem] max-w-full">
                    <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[4.5rem] pl-[4.437rem] box-border max-w-full">
                      <h1 className="m-0 flex-1 relative text-inherit leading-[3.875rem] font-extrabold font-inherit inline-block max-w-full z-[2]">
                        <p className="m-0">Unleashing</p>
                        <p className="m-0 text-transparent !bg-clip-text [background:linear-gradient(180deg,_#256ffd,_#004fe6)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                          Smart Consumer Data
                        </p>
                      </h1>
                    </div>
                    <b className="self-stretch relative text-[1.25rem] leading-[1.75rem] font-p-18-bold text-slategray z-[2]">
                      <p className="m-0">{`Discover detailed, consumer-driven profiles with insights from diverse `}</p>
                      <p className="m-0">
                        sources to help you make confident and informed
                        decisions with ease.
                      </p>
                    </b>
                  </div>
                </div>
              </div>
              <div className="w-[9.188rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.687rem] box-border text-[1rem] text-dark-blue font-p-18-bold">
                <div className="self-stretch flex flex-row items-start justify-start relative">
                  <img
                    className="h-[6.669rem] w-[5.563rem] absolute !m-[0] right-[-1.812rem] bottom-[-1.669rem] object-contain z-[2]"
                    loading="lazy"
                    alt=""
                    src="/dot@2x.png"
                  />
                  <div className="flex-1 shadow-[-40px_40px_76.8px_rgba(44,_115,_180,_0.05)] rounded-3xl bg-white-color flex flex-col items-end justify-start py-[1.687rem] pr-[1.625rem] pl-[1.562rem] gap-[0.093rem] z-[3]">
                    <div className="w-[9.188rem] h-[9.188rem] relative shadow-[-40px_40px_76.8px_rgba(44,_115,_180,_0.05)] rounded-3xl bg-white-color hidden" />
                    <b className="self-stretch relative leading-[1.25rem] z-[4]">
                      Available in
                    </b>
                    <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.187rem] pl-[0.312rem] text-[3rem] font-h5-22-bold">
                      <div className="relative leading-[3.125rem] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#256ffd,_#004fe6)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[5.5rem] z-[4]">
                        20+
                      </div>
                    </div>
                    <b className="self-stretch relative leading-[1.25rem] z-[4]">
                      Languages
                    </b>
                  </div>
                  <img
                    className="h-[14.694rem] w-[9.406rem] absolute !m-[0] bottom-[-4.812rem] left-[-8.969rem] object-contain z-[4]"
                    loading="lazy"
                    alt=""
                    src="/vector-50.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[72.188rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem] text-[3rem] text-dark-blue">
            <div className="w-[10.688rem] flex flex-row items-start justify-start relative">
              <img
                className="h-[6.669rem] w-[5.563rem] absolute !m-[0] bottom-[-1.669rem] left-[-1.812rem] object-contain z-[2]"
                loading="lazy"
                alt=""
                src="/dot-1@2x.png"
              />
              <div
                className={`self-stretch flex flex-row items-start justify-start gap-[1.437rem] max-w-full text-left text-[1.375rem] text-dark-blue font-h5-22-bold ${className}`}
              >
                <div className="w-[4.375rem] flex flex-row items-start justify-start">
                  <div className="h-[4.375rem] flex-1 relative">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-honeydew w-full h-full z-[2]" />
                    <img
                      className="absolute w-[calc(100%_-_19.7px)] top-[0.625rem] right-[0.606rem] left-[0.625rem] max-w-full overflow-hidden h-[3.144rem] z-[3]"
                      loading="lazy"
                      alt=""
                      src="/group-663.svg"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[22.125rem] max-w-full">
                  <div className="relative leading-[1.5rem] font-semibold inline-block min-w-[5.5rem] z-[2]">
                    Evaluate
                  </div>
                  <div className="self-stretch relative text-[1.125rem] leading-[1.625rem] font-semibold font-p-18-bold text-slategray z-[2]">
                    Profiles by submitting a thumbs up or thumbs down, helping
                    to refine and improve the quality of Crawlur's content.
                  </div>
                </div>
              </div>
              <img
                className="h-[7.188rem] w-[11.038rem] absolute !m-[0] top-[-1.012rem] right-[-10.594rem] object-contain z-[4]"
                loading="lazy"
                alt=""
                src="/vector-47.svg"
              />
            </div>
            <div className="w-[48.938rem] flex flex-col items-start justify-start pt-[1.837rem] px-[0rem] pb-[0rem] box-border max-w-full text-left text-[1.25rem] text-darkslateblue-400 font-p-18-bold">
              <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[1.5rem] max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between py-[1.625rem] pr-[1.625rem] pl-[1.812rem] box-border relative max-w-full gap-[1.25rem]">
                    <div className="h-full w-full absolute !m-[0] top-[0rem] right-[-0.125rem] bottom-[-0.125rem] left-[0rem] rounded-52xl bg-ghostwhite box-border z-[2] border-[1px] border-solid border-dark-blue" />
                    <div className="w-[17.375rem] relative leading-[1.75rem] font-semibold inline-block shrink-0 z-[3]">
                      Search product name or url
                    </div>
                    <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                      <img
                        className="w-[1.5rem] h-[1.5rem] relative rounded-3xs z-[3]"
                        loading="lazy"
                        alt=""
                        src="/icon.svg"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem]">
                    <div className="flex flex-row items-end justify-start gap-[1rem]">
                      <img
                        className="h-[2.5rem] w-[2.5rem] relative z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-624.svg"
                      />
                      <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[1rem]">
                        <img
                          className="w-[0.813rem] h-[0.438rem] relative z-[2]"
                          loading="lazy"
                          alt=""
                          src="/vector-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[43.125rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full">
                  <div className="flex flex-row items-start justify-start gap-[1.25rem]">
                    <button className="cursor-pointer [border:none] py-[0.75rem] px-[2.5rem] bg-blue rounded overflow-hidden flex flex-row items-start justify-start z-[2] hover:bg-royalblue-100">
                      <b className="relative text-[1.313rem] leading-[1.625rem] inline-block font-h5-22-bold text-white-color text-center min-w-[4rem]">
                        Button
                      </b>
                    </button>
                    <button className="cursor-pointer py-[0.625rem] px-[2.437rem] bg-[transparent] rounded overflow-hidden flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-blue hover:bg-royalblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-royalblue-100">
                      <b className="relative text-[1.313rem] leading-[1.625rem] inline-block font-h5-22-bold text-blue text-center min-w-[4rem]">
                        Button
                      </b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[3.437rem] pl-[3.562rem] box-border max-w-full text-left text-[2rem] text-dark-blue">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.75rem] max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[1.875rem] max-w-full">
              <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border max-w-full">
                <h2 className="m-0 relative text-inherit leading-[2.125rem] font-bold font-inherit z-[2]">
                  Recently Added Products
                </h2>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[1.5rem] px-[0rem] pb-[0rem] box-border min-w-[30.563rem] max-w-full">
                <img
                  className="self-stretch relative max-w-full overflow-hidden max-h-full z-[2]"
                  loading="lazy"
                  alt=""
                  src="/vector-38.svg"
                />
              </div>
              <button className="cursor-pointer py-[0.562rem] px-[1.687rem] bg-[transparent] shadow-[0px_9px_35.7px_rgba(0,_0,_0,_0.05)] rounded-81xl overflow-hidden flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-dark-blue hover:bg-steelblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-100">
                <b className="relative text-[1.25rem] leading-[1.75rem] inline-block font-p-18-bold text-dark-blue text-center min-w-[5.125rem]">
                  View All
                </b>
              </button>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.606rem] max-w-full text-[1.125rem] font-p-18-bold">
              <div
                className={`self-stretch rounded-lg bg-blue flex flex-row items-start justify-between pt-[1.5rem] pb-[1.312rem] pr-[1.25rem] pl-[5.125rem] box-border max-w-full gap-[1.25rem] z-[2] text-left text-[1.25rem] text-white-color font-h5-22-bold ${className}`}
              >
                <div className="h-[4.313rem] w-[82.5rem] relative rounded-lg bg-blue hidden max-w-full" />
                <div className="relative leading-[1.5rem] font-extrabold inline-block min-w-[7.438rem] z-[3]">
                  Profile name
                </div>
                <div className="flex flex-row items-start justify-start gap-[8.375rem] max-w-full text-center">
                  <div className="relative leading-[1.5rem] font-extrabold z-[3]">
                    Manufacturer
                  </div>
                  <div className="relative leading-[1.5rem] font-extrabold text-left inline-block min-w-[7.063rem] z-[3]">
                    Available at
                  </div>
                </div>
              </div>
              <div className="self-stretch shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] rounded-md bg-white-color flex flex-row items-start justify-between py-[0rem] pr-[1rem] pl-[0rem] box-border max-w-full gap-[1.25rem] z-[2] text-center">
                <div className="self-stretch w-[82.5rem] relative shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] rounded-md bg-white-color hidden max-w-full" />
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[22.75rem] pl-[0rem] box-border gap-[1.375rem] max-w-full text-left">
                  <img
                    className="h-[3.75rem] w-[3.75rem] relative rounded-md object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-38@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem] box-border max-w-full">
                    <div className="relative leading-[1.625rem] font-extrabold z-[3]">
                      Vitamix Professional Series 750 Blender
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem]">
                  <div className="relative leading-[1.625rem] font-extrabold inline-block min-w-[4.188rem] z-[3]">
                    Vitamix
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] text-[1.313rem] font-h5-22-bold">
                  <div className="rounded-35xl overflow-hidden flex flex-row items-start justify-start py-[0.312rem] px-[1.187rem] z-[3] border-[1px] border-solid border-orange">
                    <b className="relative leading-[1.625rem] inline-block min-w-[5.063rem]">
                      Amazon
                    </b>
                  </div>
                </div>
              </div>
              <div
                className={`self-stretch flex flex-row items-start justify-between py-[0rem] pr-[1rem] pl-[0rem] box-border relative max-w-full gap-[1.25rem] text-left text-[1.125rem] text-dark-blue font-p-18-bold ${className}`}
              >
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-md bg-whitesmoke z-[2]" />
                <div className="flex flex-row items-start justify-start py-[0rem] pr-[25.562rem] pl-[0rem] box-border gap-[1.375rem] max-w-full">
                  <img
                    className="h-[3.75rem] w-[3.75rem] relative rounded-md object-cover z-[3]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-38@2x.png"
                  />
                  <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem]">
                    <b className="relative leading-[1.625rem] z-[3]">
                      Vitamix Professional Series 750 Blender
                    </b>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem] text-center">
                  <b className="relative leading-[1.625rem] inline-block min-w-[4.125rem] z-[3]">
                    Vitamix
                  </b>
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
                  <button className="cursor-pointer [border:none] py-[0.437rem] px-[1.25rem] bg-orange rounded-34xl overflow-hidden flex flex-row items-start justify-start z-[3] hover:bg-chocolate-100">
                    <b className="relative text-[1.313rem] leading-[1.625rem] inline-block font-h5-22-bold text-dark-blue text-center min-w-[5.063rem]">
                      Amazon
                    </b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
