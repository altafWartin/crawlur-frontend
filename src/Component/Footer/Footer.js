import PropTypes from "prop-types";
import { useTranslation } from 'react-i18next';
import '../../Language'; // Ensure this import is at the top of the file

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue flex flex-col items-start justify-start py-8 px-48 box-border relative gap-6 max-w-full z-2 text-left text-xl text-white-color font-p-18-bold md:px-8 sm:px-4 sm:pt-8 sm:pb-6">
      <img
        className="w-[80px] h-[16px] relative z-3 sm:w-20 sm:h-4"
        loading="lazy"
        alt=""
        src="/group-144.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-5 max-w-full text-light-blue">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-3 sm:flex-col sm:gap-6">
          <div className="w-[350px] flex flex-col items-start justify-start pt-5 px-0 pb-0 box-border min-w-0 max-w-full sm:px-4">
            <div className=" flex flex-col items-start justify-start gap-4 max-w-full">
              <b className="relative leading-5 inline-block max-w-full z-3 text-[12px] sm:text-base">
                {t('footer.text1')}
              </b>
              <b className="relative leading-5 whitespace-pre-wrap z-3 text-[12px] sm:text-sm">
                {t('footer.text2')}
              </b>
            </div>
          </div>
          <div className=" rounded-3xs  bg-mediumslateblue-100 py-3 px-6 box-border gap-4 text-white-color sm:min-w-0">
            <div className="flex flex-row items-start text-[12px] justify-between  px-4 gap-9 ">
              <div className="flex flex-col items-start justify-between gap-2">
                <b className="relative leading-6 inline-block z-4">{t('footer.home')}</b>
                <b className="relative leading-6 inline-block z-4">{t('footer.catalog')}</b>
                <b className="relative leading-6 inline-block z-4">{t('footer.about_us')}</b>
              </div>
              <div className="flex flex-col items-start justify-between gap-2">
                <b className="relative leading-6 inline-block z-4">{t('footer.recently_added')}</b>
                <b className="relative leading-6 inline-block z-4">{t('footer.recently_trending')}</b>
                <b className="relative leading-6 inline-block z-4">{t('footer.contact_us')}</b>
              </div>
              <div className="flex flex-col items-start justify-between gap-2">
                <b className="relative leading-6 inline-block z-4">{t('footer.tos')}</b>
                <b className="relative leading-6 inline-block z-4">{t('footer.privacy_policy')}</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] border-0 bg-gray-300 opacity-40" />

      <div className="flex flex-row items-center  justify-between w-full  sm:flex-col sm:items-start">
        <b className="relative leading-6 z-3 text-[10px]">{t('footer.copyright')}</b>
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
