import PropTypes from "prop-types";

const FooterDesktop = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch h-[26.688rem] relative bg-white-color overflow-hidden shrink-0 max-w-full z-[1] mt-[-2.688rem] text-left text-[1.125rem] text-white-color font-p-18-bold ${className}`}
    >
      <div className="absolute top-[calc(50%_-_213.5px)] left-[calc(50%_-_960px)] bg-blue w-full h-full" />
      <b className="absolute top-[22.25rem] left-[18.75rem] leading-[1.625rem] z-[1]">
        © Crawlur, 2024
      </b>
      <div className="absolute top-[9.5rem] left-[18.75rem] w-[34.313rem] flex flex-col items-start justify-start gap-[1.125rem] max-w-full z-[1] text-light-blue">
        <b className="w-[31.5rem] relative leading-[1.625rem] inline-block max-w-full">
          Lorem Ipsum is simply dummy text.
        </b>
        <b className="self-stretch relative leading-[1.625rem] whitespace-pre-wrap">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </b>
      </div>
      <div className="absolute top-[calc(50%_-_81.5px)] left-[calc(50%_+_93px)] rounded-3xs bg-mediumslateblue-100 w-[35.438rem] h-[10.125rem] z-[1]" />
      <div className="absolute top-[9.5rem] left-[67.563rem] w-[30.25rem] flex flex-row items-start justify-between gap-[1.25rem] max-w-full z-[2]">
        <div className="flex flex-col items-start justify-start py-[0rem] pr-[0.562rem] pl-[0rem] gap-[1.375rem]">
          <b className="relative leading-[1.625rem] inline-block min-w-[3.125rem]">
            Home
          </b>
          <b className="relative leading-[1.625rem] inline-block min-w-[4.125rem]">
            Catalog
          </b>
          <b className="relative leading-[1.625rem] inline-block min-w-[4.938rem]">
            About Us
          </b>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1.375rem]">
          <b className="relative leading-[1.625rem]">Recently Added</b>
          <b className="relative leading-[1.625rem]">Recently Trending</b>
          <b className="relative leading-[1.625rem] inline-block min-w-[5.75rem]">
            Contact Us
          </b>
        </div>
        <div className="flex flex-col items-start justify-start gap-[1.375rem]">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[0.187rem]">
            <b className="relative leading-[1.625rem] inline-block min-w-[2.25rem]">
              TOS
            </b>
          </div>
          <b className="relative leading-[1.625rem] inline-block text-right min-w-[7.25rem]">
            Privacy Policy
          </b>
        </div>
      </div>
      <img
        className="absolute top-[4.375rem] left-[18.75rem] w-[7.5rem] h-[1.375rem] z-[1]"
        loading="lazy"
        alt=""
        src="/group-144.svg"
      />
      <img
        className="absolute top-[20.25rem] left-[18.75rem] w-[82.5rem] h-[0.125rem] z-[1]"
        alt=""
        src="/divider.svg"
      />
      <div className="absolute top-[21.75rem] left-[88.125rem] w-[13.125rem] h-[2.625rem] z-[1]">
        <div className="absolute top-[0rem] left-[0rem] w-full h-full">
          <div className="absolute top-[0rem] left-[0rem] w-[2.625rem] h-[2.625rem]">
            <div className="absolute top-[0rem] left-[0rem] w-full h-full">
              <div className="absolute top-[2.625rem] left-[0rem] rounded-69xl bg-white-color w-full h-full [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              <img
                className="absolute top-[0.506rem] left-[0.506rem] w-[1.613rem] h-[1.613rem] z-[1]"
                alt=""
                src="/image03.svg"
              />
            </div>
            <img
              className="absolute h-[49.76%] w-[26.43%] top-[26.19%] right-[37.86%] bottom-[24.05%] left-[35.71%] max-w-full overflow-hidden max-h-full z-[2]"
              loading="lazy"
              alt=""
              src="/path.svg"
            />
          </div>
          <div className="absolute top-[0rem] left-[7rem] w-[2.625rem] h-[2.625rem]">
            <div className="absolute top-[0rem] left-[0rem] w-full h-full">
              <div className="absolute top-[2.625rem] left-[0rem] rounded-69xl bg-white-color w-full h-full [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              <img
                className="absolute top-[0.481rem] left-[0.513rem] w-[1.638rem] h-[1.638rem] z-[1]"
                alt=""
                src="/image03-13.svg"
              />
            </div>
            <img
              className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_10.3px)] w-[1.25rem] h-[1.188rem] z-[2]"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <div className="absolute top-[0rem] left-[3.5rem] w-[2.625rem] h-[2.625rem]">
            <div className="absolute top-[0rem] left-[0rem] w-full h-full">
              <div className="absolute top-[2.625rem] left-[0rem] rounded-69xl bg-white-color w-full h-full [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              <img
                className="absolute top-[0.481rem] left-[0.513rem] w-[1.638rem] h-[1.638rem] z-[1]"
                alt=""
                src="/image03-23.svg"
              />
            </div>
            <img
              className="absolute h-[47.62%] w-[47.62%] top-[26.19%] right-[25.48%] bottom-[26.19%] left-[26.9%] max-w-full overflow-hidden max-h-full z-[2]"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="absolute top-[0rem] left-[10.5rem] w-[2.625rem] h-[2.625rem]">
            <div className="absolute top-[0rem] left-[0rem] w-full h-full">
              <div className="absolute top-[2.625rem] left-[0rem] rounded-69xl bg-white-color w-full h-full [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              <img
                className="absolute top-[0.481rem] left-[0.513rem] w-[1.638rem] h-[1.638rem] z-[1]"
                alt=""
                src="/image03-33.svg"
              />
            </div>
            <img
              className="absolute w-[42.86%] top-[calc(50%_-_9px)] right-[28.57%] left-[28.57%] max-w-full overflow-hidden h-[1.188rem] z-[2]"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
      </div>
      <img
        className="absolute top-[-15.787rem] left-[68.869rem] w-[61.513rem] h-[54.113rem] object-contain z-[3]"
        alt=""
        src="/vector-551.svg"
      />
      <img
        className="absolute top-[-9.062rem] left-[-51.5rem] w-[61.019rem] h-[53.756rem] object-contain z-[1]"
        loading="lazy"
        alt=""
        src="/vector-562.svg"
      />
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
};

export default FooterDesktop;
