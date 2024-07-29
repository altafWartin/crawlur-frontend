import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
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
          Profiles by submitting a thumbs up or thumbs down, helping to refine
          and improve the quality of Crawlur's content.
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
