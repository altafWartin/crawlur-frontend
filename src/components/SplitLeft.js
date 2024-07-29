import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SplitLeft = () => {
  return (
    <header
      className={`self-stretch bg-blue flex flex-row items-start justify-center py-[2.187rem] px-[1.25rem] box-border gap-[12.187rem] top-[0] z-[99] sticky max-w-full text-left text-[1.313rem] text-white-color font-h5-22-bold `}
    >
      <div className="h-[7.5rem] w-[120rem] relative bg-blue hidden max-w-full" />
      <div className="w-[16.063rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border">
        <img
          className="w-[8.75rem] h-[1.625rem] relative z-[3]"
          loading="lazy"
          alt=""
          src="/crawlur2.svg"
        />
      </div>
      <div className="w-[25.938rem] rounded-lg bg-mediumslateblue-100 flex flex-row items-start justify-between py-[0.75rem] pr-[2.125rem] pl-[2.187rem] box-border max-w-full gap-[1.25rem] z-[3]">
        <div className="h-[3.125rem] w-[25.938rem] relative rounded-lg bg-mediumslateblue-100 hidden max-w-full" />
        <Link to="/" className="[text-decoration:none] relative leading-[1.5rem] font-bold text-[inherit] text-center inline-block min-w-[3.625rem] z-[4]">
          Home
        </Link>
        <img
          className="self-stretch w-[0.094rem] relative max-h-full min-h-[1.625rem] z-[4]"
          loading="lazy"
          alt=""
          src="/vector-57.svg"
        />
        <Link to="/serching" className="[text-decoration:none] relative leading-[1.5rem] font-bold text-[inherit] inline-block min-w-[4.875rem] z-[4]">
          Catalog
        </Link>
        <img
          className="self-stretch w-[0.094rem] relative max-h-full min-h-[1.625rem] z-[4]"
          alt=""
          src="/vector-57.svg"
        />
        <div className="flex flex-row items-start justify-start gap-[0.75rem]">
          <a className="[text-decoration:none] relative leading-[1.5rem] font-bold text-[inherit] inline-block min-w-[4.5rem] z-[4]">
            Browse
          </a>
          <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[0.813rem] h-[0.438rem] relative z-[4]"
              alt=""
              src="/button-icon.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[16.125rem] flex flex-row items-start justify-start gap-[0.625rem]">
        <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.875rem] bg-accent rounded overflow-hidden flex flex-row items-start justify-start z-[3] hover:bg-gainsboro-400">
          <a className="[text-decoration:none] relative text-[1.313rem] leading-[1.625rem] font-bold font-h5-22-bold text-blue text-center inline-block min-w-[4rem]">
            Button
          </a>
        </button>
        <button className="cursor-pointer py-[0.562rem] px-[1.75rem] bg-[transparent] flex-1 rounded overflow-hidden flex flex-row items-start justify-start z-[3] border-[2px] border-solid border-accent hover:bg-gainsboro-500 hover:box-border hover:border-[2px] hover:border-solid hover:border-gainsboro-400">
          <a className="[text-decoration:none] relative text-[1.313rem] leading-[1.625rem] font-bold font-h5-22-bold text-white-color text-center inline-block min-w-[4rem]">
            Button
          </a>
        </button>
      </div>
    </header>
  );
};

SplitLeft.propTypes = {
  className: PropTypes.string,
  crawlur: PropTypes.string,
};

export default SplitLeft;
