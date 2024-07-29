import PropTypes from "prop-types";

const Footer = () => {
  return (
    <footer
      className={`self-stretch bg-blue flex flex-col items-start justify-start pt-[4.375rem] px-[18.75rem] pb-[2.812rem] box-border relative gap-[1.875rem] max-w-full z-[2] text-left text-[1.125rem] text-white-color font-p-18-bold `}
    >
      <div className="w-[120rem] h-[26.688rem] relative bg-blue hidden max-w-full z-[0]" />
      <img
        className="w-[7.5rem] h-[1.375rem] relative z-[3]"
        loading="lazy"
        alt=""
        src="/group-144.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full text-light-blue">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
          <div className="w-[34.313rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[34.313rem] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem] max-w-full">
              <b className="w-[31.5rem] relative leading-[1.625rem] inline-block max-w-full z-[3]">
                Lorem Ipsum is simply dummy text.
              </b>
              <b className="self-stretch relative leading-[1.625rem] whitespace-pre-wrap z-[3]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </b>
            </div>
          </div>
          <div className="w-[35.438rem] rounded-3xs bg-mediumslateblue-100 flex flex-col items-start justify-start py-[1.25rem] pr-[1.25rem] pl-[1.75rem] box-border gap-[1.375rem] min-w-[35.438rem] max-w-full z-[3] text-white-color">
            <div className="w-[35.438rem] h-[10.125rem] relative rounded-3xs bg-mediumslateblue-100 hidden max-w-full" />
            <b className="relative leading-[1.625rem] inline-block min-w-[3.125rem] z-[4]">
              Home
            </b>
            <b className="relative leading-[1.625rem] inline-block min-w-[4.125rem] z-[4]">
              Catalog
            </b>
            <b className="relative leading-[1.625rem] inline-block min-w-[4.938rem] z-[4]">
              About Us
            </b>
          </div>
        </div>
        <img
          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[3]"
          alt=""
          src="/divider.svg"
        />
      </div>
      <b className="relative leading-[1.625rem] z-[3]">© Crawlur, 2024</b>
      <div className="w-[51.131rem] !m-[0] absolute top-[-15.787rem] right-[0rem] flex flex-col items-end justify-end pt-[24.662rem] pb-[2.312rem] pr-[18.75rem] pl-[8.187rem] box-border gap-[5.25rem] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start max-w-full">
          <div className="w-[20.813rem] flex flex-row items-start justify-between max-w-full gap-[1.25rem]">
            <div className="flex flex-col items-start justify-start gap-[1.375rem] min-w-[9.5rem]">
              <b className="relative leading-[1.625rem] z-[4]">
                Recently Added
              </b>
              <b className="relative leading-[1.625rem] z-[4]">
                Recently Trending
              </b>
              <b className="relative leading-[1.625rem] inline-block min-w-[5.75rem] z-[4]">
                Contact Us
              </b>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1.375rem]">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.125rem]">
                <b className="relative leading-[1.625rem] inline-block min-w-[2.25rem] z-[4]">
                  TOS
                </b>
              </div>
              <b className="relative leading-[1.625rem] inline-block text-right min-w-[7.25rem] z-[4]">
                Privacy Policy
              </b>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-center gap-[0.875rem]">
          <div className="h-[2.625rem] w-[2.625rem] relative z-[3]">
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
          <div className="h-[2.625rem] w-[2.625rem] relative z-[3]">
            <div className="absolute top-[0rem] left-[0rem] w-full h-full">
              <div className="absolute top-[2.625rem] left-[0rem] rounded-69xl bg-white-color w-full h-full [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              <img
                className="absolute top-[0.481rem] left-[0.513rem] w-[1.638rem] h-[1.638rem] z-[1]"
                alt=""
                src="/image03-11.svg"
             
              />
            </div>
            <img
              className="absolute h-[47.62%] w-[47.62%] top-[26.19%] right-[25.48%] bottom-[26.19%] left-[26.9%] max-w-full overflow-hidden max-h-full z-[2]"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="h-[2.625rem] w-[2.625rem] relative z-[3]">
            <div className="absolute top-[0rem] left-[0rem] w-full h-full">
              <div className="absolute top-[2.625rem] left-[0rem] rounded-69xl bg-white-color w-full h-full [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              <img
                className="absolute top-[0.481rem] left-[0.513rem] w-[1.638rem] h-[1.638rem] z-[1]"
                alt=""
                src="/image03-21.svg"
              
              />
            </div>
            <img
              className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_10.3px)] w-[1.25rem] h-[1.188rem] z-[2]"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <div className="h-[2.625rem] w-[2.625rem] relative z-[3]">
            <div className="absolute top-[0rem] left-[0rem] w-full h-full">
              <div className="absolute top-[2.625rem] left-[0rem] rounded-69xl bg-white-color w-full h-full [transform:_rotate(-90deg)] [transform-origin:0_0]" />
              <img
                className="absolute top-[0.481rem] left-[0.513rem] w-[1.638rem] h-[1.638rem] z-[1]"
                alt=""
                src="/image03-31.svg"
              />
            </div>
            <img
              className="absolute w-[42.86%] top-[calc(50%_-_9px)] right-[28.57%] left-[28.57%] max-w-full overflow-hidden h-[1.188rem] z-[2]"
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
        <img
          className="w-[61.513rem] h-[54.113rem] absolute !m-[0] right-[-10.381rem] bottom-[-11.637rem] object-contain z-[5]"
          alt=""
          src="/divider1.svg"
        />
      </div>
    </footer>
  );
};



export default Footer;
