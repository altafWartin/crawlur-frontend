import PropTypes from "prop-types";

const ProductOne1 = ({
  className = "",
  rectangle262,
  vitamixA3300AscentSeriesS,
}) => {
  return (
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
  );
};

ProductOne1.propTypes = {
  className: PropTypes.string,
  rectangle262: PropTypes.string,
  vitamixA3300AscentSeriesS: PropTypes.string,
};

export default ProductOne1;
