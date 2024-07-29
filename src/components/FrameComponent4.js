import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[11.875rem] flex flex-col items-start justify-start text-center text-[1.25rem] text-white-color font-h5-22-bold ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[1.375rem] pl-[1.312rem]">
        <div className="rounded-37xl bg-dark-blue flex flex-row items-start justify-start pt-[0.75rem] px-[1.187rem] pb-[0.687rem] whitespace-nowrap z-[3]">
          <div className="h-[2.938rem] w-[9.188rem] relative rounded-37xl bg-dark-blue hidden" />
          <div className="relative leading-[1.5rem] font-extrabold inline-block min-w-[6.75rem] z-[4]">
            Active Beta
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[40px_40px_76.8px_rgba(44,_114,_180,_0.05)] rounded-sm bg-white-color flex flex-row items-start justify-start pt-[2.25rem] px-[1.25rem] pb-[1.312rem] z-[2] mt-[-1.438rem] text-[1rem] text-dark-blue font-p-18-bold">
        <div className="h-[6.063rem] w-[11.875rem] relative shadow-[40px_40px_76.8px_rgba(44,_114,_180,_0.05)] rounded-sm bg-white-color hidden" />
        <div className="flex-1 relative leading-[1.25rem] z-[3]">
          <p className="m-0">
            <b>Limited to</b>
          </p>
          <p className="m-0 font-extrabold">Amazon Products</p>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
