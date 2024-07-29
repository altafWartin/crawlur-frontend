const HomeFooterMobile = () => {
  return (
    <div className="w-full relative bg-blue overflow-hidden flex flex-col items-start justify-start pt-[1.625rem] px-[0rem] pb-[0rem] box-border gap-[1.75rem] leading-[normal] tracking-[normal] text-left text-[0.875rem] text-white-color font-p-18-bold">
      <div className="self-stretch h-[15.188rem] relative bg-blue hidden" />
      <section className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[1.312rem] pl-[1.25rem] box-border max-w-full text-left text-[0.938rem] text-light-blue font-p-18-bold">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
          <img
            className="w-[6.25rem] h-[1.125rem] relative z-[1]"
            loading="lazy"
            alt=""
            src="/crawlur.svg"
          />
          <b className="self-stretch relative leading-[1.375rem] z-[1]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </b>
        </div>
      </section>
      <div className="self-stretch bg-mediumslateblue-100 box-border flex flex-row items-start justify-between pt-[1.25rem] px-[1.25rem] pb-[1.437rem] max-w-full gap-[1.25rem] z-[1] border-t-[1px] border-solid border-gray-200">
        <div className="h-[3.938rem] w-[24.375rem] relative bg-mediumslateblue-100 box-border hidden max-w-full border-t-[1px] border-solid border-gray-200" />
        <b className="relative leading-[1.125rem] inline-block min-w-[6.813rem] z-[2]">
          © Crawlur, 2024
        </b>
        <div className="flex flex-row items-start justify-start gap-[1.875rem] text-[0.938rem]">
          <b className="relative leading-[1.125rem] inline-block min-w-[1.875rem] z-[2]">
            TOS
          </b>
          <a className="[text-decoration:none] relative leading-[1.125rem] font-bold text-[inherit] text-right inline-block min-w-[6.063rem] z-[2]">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeFooterMobile;
