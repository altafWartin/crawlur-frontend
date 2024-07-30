import PropTypes from "prop-types";

const Footer = () => {
  return (
    <footer className="bg-blue flex flex-col items-start justify-start pt-16 pb-12 px-32 box-border relative gap-6 max-w-full z-2 text-left text-xl text-white-color font-p-18-bold md:px-8 sm:px-4 sm:pt-8 sm:pb-6">
      <img
        className="w-30 h-6 relative z-3 sm:w-20 sm:h-4"
        loading="lazy"
        alt=""
        src="/group-144.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-10 max-w-full text-light-blue">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 sm:flex-col sm:gap-6">
          <div className="w-1/2 flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-0 max-w-full sm:px-4">
            <div className="flex flex-col items-start justify-start gap-4 max-w-full">
              <b className="relative leading-6 inline-block max-w-full z-3 text-xl sm:text-base">
                Lorem Ipsum is simply dummy text.
              </b>
              <b className="relative leading-6 whitespace-pre-wrap z-3 text-lg sm:text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </b>
            </div>
          </div>
          <div className="w-auto rounded-3xs flex flex-col bg-mediumslateblue-100 py-5 px-6 box-border gap-4 text-white-color sm:min-w-0">
            <div className="flex flex-row items-start justify-end py-3 px-4 gap-4 sm:flex-col sm:gap-3 sm:items-start">
              <div className="flex flex-col items-start justify-end gap-2">
                <b className="relative leading-6 inline-block z-4">Home</b>
                <b className="relative leading-6 inline-block z-4">Catalog</b>
                <b className="relative leading-6 inline-block z-4">About Us</b>
              </div>
              <div className="flex flex-col items-start justify-end gap-2">
                <b className="w-[200px] relative leading-6 inline-block z-4">
                  Recently Added
                </b>
                <b className="relative leading-6 inline-block z-4">
                  Recently Trending
                </b>
                <b className="relative leading-6 inline-block z-4">
                  Contact Us
                </b>
              </div>
              <div className="flex flex-col items-start justify-end gap-2">
                <b className="relative leading-6 inline-block z-4">TOS</b>
                <b className="relative leading-6 inline-block z-4">
                  Privacy Policy
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full mt-4 sm:flex-col sm:items-start">
        <b className="relative leading-6 z-3">© Crawlur, 2024</b>
        <div className="flex flex-row items-center justify-center gap-3 mt-3 sm:mt-4">
          <div className="h-10 w-10 relative z-3 bg-white rounded-full">
            <img
              className="absolute h-5 w-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              loading="lazy"
              alt=""
              src="/path.svg"
            />
          </div>
          <div className="h-10 w-10 relative z-3 bg-white rounded-full">
            <img
              className="absolute h-5 w-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="h-10 w-10 relative z-3 bg-white rounded-full">
            <img
              className="absolute h-5 w-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
          <div className="h-10 w-10 relative z-3 bg-white rounded-full">
            <img
              className="absolute h-5 w-5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
