import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
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
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
