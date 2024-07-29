import PropTypes from "prop-types";

const ProductItems = ({
  className = "",
  rectangle39,
  vitamix5200BlenderProfess,
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between py-[0rem] pr-[1.125rem] pl-[0rem] box-border relative max-w-full gap-[1.25rem] text-center text-[1.125rem] text-dark-blue font-p-18-bold ${className}`}
    >
      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-md bg-whitesmoke z-[1]" />
      <div className="flex flex-row items-start justify-start py-[0rem] pr-[4.375rem] pl-[0rem] box-border gap-[1.375rem] max-w-full text-left">
        <img
          className="h-[3.75rem] w-[3.75rem] relative rounded-md object-cover z-[2]"
          loading="lazy"
          alt=""
          src={rectangle39}
        />
        <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <b className="relative leading-[1.625rem] z-[2]">
            {vitamix5200BlenderProfess}
          </b>
        </div>
      </div>
      <div className="w-[8.375rem] flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem] box-border">
        <b className="relative leading-[1.625rem] inline-block min-w-[4.125rem] z-[2]">
          Vitamix
        </b>
      </div>
      <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem]">
        <b className="relative leading-[1.625rem] inline-block min-w-[5.75rem] z-[2]">
          Electronics
        </b>
      </div>
      <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
        <button className="cursor-pointer [border:none] py-[0.437rem] px-[1.25rem] bg-orange rounded-34xl overflow-hidden flex flex-row items-start justify-start z-[2] hover:bg-chocolate-100">
          <div className="relative text-[1.313rem] leading-[1.625rem] font-semibold font-h5-22-bold text-dark-blue text-center inline-block min-w-[4.938rem]">
            Amazon
          </div>
        </button>
      </div>
    </div>
  );
};

ProductItems.propTypes = {
  className: PropTypes.string,
  rectangle39: PropTypes.string,
  vitamix5200BlenderProfess: PropTypes.string,
};

export default ProductItems;
