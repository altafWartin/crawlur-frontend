import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "../../Language"; // Ensure this import is at the top of the file
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue   flex flex-col items-center  desktop:text-lg laptop:text-sm mobile:text-sm justify-center pb-5 pt-12 box-border relative gap-6 max-w-full z-2 text-left text-white-color font-p-18-bold mobile:px-4">
      <div className="container  justify-center">
        <img
          className=" desktop:w-[7.5rem] px-2 desktop:h-[1.375rem] laptop:w-[5rem] mobile:w-[4rem]  relative z-3 "
          loading="lazy"
          alt=""
          src="/group-144.svg"
        />
        <div className="w-full self-stretch flex flex-row items-start justify-start gap-5 max-w-full text-light-blue">
          <div className="w-full  self-stretch  flex flex-col mobile:flex-row items-start justify-between max-w-full gap-3 mobile:gap-4">
            <div className="mobile:w-auto px-2 laptop:max-w-[400px] desktop:max-w-[549px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-0 max-w-full sm:px-4">
              <div className="flex flex-col items-start justify-start gap-4 max-w-full">
                <b className="relative hidden laptop:block desktop:leading-[1.5] laptop:leading-[1.4] mobile:leading-[1.3] inline-block max-w-full z-3">
                  {t("footer.text1")}
                </b>
                <b className="relative desktop:leading-[1.5] laptop:leading-[1.4] mobile:leading-[1.3] whitespace-pre-wrap z-3">
                  {t("footer.text2")}
                </b>
              </div>
            </div>

            <div className="w-[35%] p-5 bg-[#065CFF] rounded-[0.625rem] flex justify-between">
              {/* Column 1 */}
              <div className="flex flex-col space-y-4">
                <Link
                  to="/home"
                  className="no-underline text-[#fff] font-bold font-Nunito text-left rounded-[0.5rem] desktop:text-[1.125rem] laptop:text-[0.8rem] mobile:text-[0.9375rem]"
                >
                  {t("footer.home")}
                </Link>
                <Link
                  to="/catalog"
                  className="no-underline text-[#fff] font-bold font-Nunito text-left rounded-[0.5rem] desktop:text-[1.125rem] laptop:text-[0.8rem] mobile:text-[0.9375rem]"
                >
                  {t("footer.catalog")}
                </Link>
                <Link
                  to="/about-us"
                  className="no-underline text-[#fff] font-bold font-Nunito text-left rounded-[0.5rem] desktop:text-[1.125rem] laptop:text-[0.8rem] mobile:text-[0.9375rem]"
                >
                  {t("footer.about_us")}
                </Link>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col space-y-4">
                <Link
                  to="/recently-added"
                  className="no-underline text-[#fff] font-bold font-Nunito text-left rounded-[0.5rem] desktop:text-[1.125rem] laptop:text-[0.8rem] mobile:text-[0.9375rem]"
                >
                  {t("footer.recently_added")}
                </Link>
                <Link
                  to="/recently-trending"
                  className="no-underline text-[#fff] font-bold font-Nunito text-left rounded-[0.5rem] desktop:text-[1.125rem] laptop:text-[0.8rem] mobile:text-[0.9375rem]"
                >
                  {t("footer.recently_trending")}
                </Link>
                <Link
                  to="/contact-us"
                  className="no-underline text-[#fff] font-bold font-Nunito text-left rounded-[0.5rem] desktop:text-[1.125rem] laptop:text-[0.8rem] mobile:text-[0.9375rem]"
                >
                  {t("footer.contact_us")}
                </Link>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col space-y-4">
                <Link
                  to="/tos"
                  className="no-underline text-[#fff] font-bold font-Nunito text-left rounded-[0.5rem] desktop:text-[1.125rem] laptop:text-[0.8rem] mobile:text-[0.9375rem]"
                >
                  {t("footer.tos")}
                </Link>
                <Link
                  to="/privacy-policy"
                  className="no-underline text-[#fff] font-bold font-Nunito text-left rounded-[0.5rem] desktop:text-[1.125rem] laptop:text-[0.8rem] mobile:text-[0.9375rem]"
                >
                  {t("footer.privacy_policy")}
                </Link>
                {/* Empty placeholder for alignment */}
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <hr className="w-full h-[2px] border-0 mt-7 bg-gray-300 opacity-40" />

        <div className="flex  flex-row items-center  justify-between w-full  ">
          <b className="relative leading-6 z-3 ">{t("footer.copyright")}</b>
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
      </div>
    </footer>
  );
};

export default Footer;
