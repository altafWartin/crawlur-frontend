import PropTypes from "prop-types";

const Footer = () => {
  return (
    <footer className="bg-blue flex flex-col items-start justify-start pt-[4.375rem] px-[18.75rem] pb-[2.812rem] box-border relative gap-[1.875rem] max-w-full z-[2] text-left text-[1.125rem] text-white-color font-p-18-bold md:px-8 sm:px-4 sm:pt-10 sm:pb-6">
      <div className="w-[120rem] h-[26.688rem] relative bg-blue hidden max-w-full z-[0]" />
      <img
        className="w-[7.5rem] h-[1.375rem] relative z-[3] sm:w-[5rem] sm:h-[1rem]"
        loading="lazy"
        alt=""
        src="/group-144.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full text-light-blue">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[1.25rem] sm:flex-col sm:gap-4">
          <div className="w-[34.313rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border min-w-[34.313rem] max-w-full sm:min-w-0">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.125rem] max-w-full">
              <b className="w-[31.5rem] relative leading-[1.625rem] inline-block max-w-full z-[3] sm:w-full">
                Lorem Ipsum is simply dummy text.
              </b>
              <b className="self-stretch relative leading-[1.625rem] whitespace-pre-wrap z-[3]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </b>
            </div>
          </div>
          <div className="w-[40.438rem] rounded-3xs flex flex-row bg-mediumslateblue-100  py-[1.25rem] pr-[1.25rem] pl-[1.75rem] box-border gap-[1.375rem] min-w-[35.438rem] max-w-full z-[3] text-white-color sm:min-w-0 sm:py-4 sm:px-6">
            <div className="flex flex-col items-start justify-start  py-[1.25rem] pr-[1.25rem] pl-[1.75rem] box-border gap-[1.375rem]">
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
            <div className="flex flex-col items-start justify-start  py-[1.25rem] pr-[1.25rem] pl-[1.75rem] box-border gap-[1.375rem]">
              <b className="relative leading-[1.625rem] inline-block min-w-[10.125rem] z-[4]">
                Recently Added
              </b>
              <b className="relative leading-[1.625rem] inline-block min-w-[10.125rem] z-[4]">
                Recently Trending
              </b>
              <b className="relative leading-[1.625rem] inline-block min-w-[10.125rem] z-[4]">
                Contact Us
              </b>
            </div>
            <div className="flex flex-col items-start justify-start  py-[1.25rem] pr-[1.25rem] pl-[1.75rem] box-border gap-[1.375rem]">
              <b className="relative leading-[1.625rem] inline-block min-w-[10.125rem] z-[4]">
                TOS
              </b>
              <b className="relative leading-[1.625rem] inline-block min-w-[10.125rem]z-[4]">
                Privacy Policy{" "}
              </b>
            </div>
          </div>{" "}
        </div>
      </div>
      <b className="relative leading-[1.625rem] z-[3]">© Crawlur, 2024</b>
    </footer>
  );
};

export default Footer;
