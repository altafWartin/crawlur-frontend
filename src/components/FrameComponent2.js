import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div
      className={`w-[36.625rem] flex flex-col items-start justify-start gap-[3.187rem] max-w-full text-left text-[2rem] text-dark-blue font-h5-22-bold ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full">
        <div className="flex flex-row items-start justify-start py-[0rem] px-[1.687rem] box-border max-w-full">
          <h2 className="m-0 relative text-inherit leading-[2.125rem] font-bold font-inherit z-[2]">
            Exploring Crawlur
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[1.75rem] max-w-full text-[1.375rem]">
          <div className="self-stretch rounded-2xl bg-azure flex flex-row items-start justify-start pt-[1.75rem] pb-[1.437rem] pr-[1.25rem] pl-[1.75rem] box-border gap-[1.437rem] max-w-full z-[2]">
            <div className="h-[10.125rem] w-[36.625rem] relative rounded-2xl bg-azure hidden max-w-full" />
            <div className="h-[4.375rem] w-[4.375rem] relative">
              <img
                className="absolute top-[0rem] left-[0rem] w-full h-full z-[3]"
                alt=""
                src="/group-527.svg"
              />
              <img
                className="absolute top-[1.063rem] left-[1.063rem] w-[2.25rem] h-[2.25rem] overflow-hidden object-cover z-[4]"
                loading="lazy"
                alt=""
                src="/fi-br-search-alt@2x.png"
              />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[18.063rem] max-w-full">
              <div className="relative leading-[1.5rem] font-semibold inline-block min-w-[5.5rem] z-[3]">
                Discover
              </div>
              <b className="self-stretch relative text-[1.125rem] leading-[1.625rem] font-p-18-bold text-slategray z-[3]">
                In-depth product profiles complete with top features, key
                considerations, and consumer feedback for comprehensive
                insights.
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[1.625rem] pl-[1.75rem] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[1.343rem] max-w-full">
              <div className="w-[4.469rem] flex flex-row items-start justify-start">
                <div className="h-[4.375rem] flex-1 relative">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-lavender-200 w-full h-full z-[2]" />
                  <img
                    className="absolute w-[calc(100%_-_21.2px)] top-[0.644rem] right-[0.681rem] left-[0.644rem] max-w-full overflow-hidden h-[3.144rem] z-[3]"
                    loading="lazy"
                    alt=""
                    src="/group-703.svg"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[17.813rem] max-w-full">
                <div className="relative leading-[1.5rem] font-semibold inline-block min-w-[5.125rem] z-[2]">
                  Explore
                </div>
                <div className="self-stretch relative text-[1.125rem] leading-[1.625rem] font-semibold font-p-18-bold text-slategray z-[2]">
                  Social media content, including video reviews, tutorials,
                  technical specs and more.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[2.187rem] pl-[1.75rem] box-border max-w-full text-[1.375rem]">
        <div className="flex-1 flex flex-row items-start justify-start gap-[1.437rem] max-w-full">
          <div className="h-[4.375rem] w-[4.375rem] relative">
            <img
              className="absolute top-[0rem] left-[0rem] w-full h-full z-[2]"
              alt=""
              src="/group-527-1.svg"
            />
            <img
              className="absolute top-[0.813rem] left-[0.813rem] w-[2.75rem] h-[2.75rem] overflow-hidden z-[3]"
              loading="lazy"
              alt=""
              src="/crown.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[0.562rem] min-w-[17.438rem] max-w-full">
            <div className="relative leading-[1.5rem] font-semibold inline-block min-w-[4.25rem] z-[2]">
              Access
            </div>
            <div className="self-stretch relative text-[1.125rem] leading-[1.625rem] font-semibold font-p-18-bold text-slategray z-[2]">
              Resources such as manuals, PDFs, frequently asked questions, and
              detailed manufacturer information.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
