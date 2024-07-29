import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[40px_40px_76.8px_rgba(44,_114,_180,_0.05)] rounded-3xl bg-white-color flex flex-col items-end justify-start pt-[1.75rem] px-[0.875rem] pb-[1.687rem] gap-[0.312rem] z-[3] text-center text-[3rem] text-dark-blue font-h5-22-bold ${className}`}
    >
      <div className="w-[10.688rem] h-[9.375rem] relative shadow-[40px_40px_76.8px_rgba(44,_114,_180,_0.05)] rounded-3xl bg-white-color hidden" />
      <div className="flex flex-row items-start justify-end py-[0rem] pr-[0.937rem] pl-[1.062rem]">
        <div className="relative leading-[3.125rem] font-extrabold text-transparent !bg-clip-text [background:linear-gradient(180deg,_#256ffd,_#004fe6)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[6.938rem] z-[4]">
          256+
        </div>
      </div>
      <b className="self-stretch relative text-[1rem] leading-[1.25rem] font-p-18-bold z-[4]">
        <p className="m-0">Profiles Searched</p>
        <p className="m-0">Today</p>
      </b>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
