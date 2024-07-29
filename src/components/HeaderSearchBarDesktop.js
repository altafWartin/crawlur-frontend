
const HeaderSearchBarDesktop = () => {
  return (
    <header
      className={`self-stretch bg-blue overflow-hidden flex flex-row items-start justify-center py-[2.187rem] px-[1.25rem] box-border gap-[2.25rem] top-[0] z-[99] sticky max-w-full text-center text-[1.313rem] text-white-color font-h5-22-bold `}
    >
      <div className="h-[7.5rem] w-[120rem] relative bg-blue hidden max-w-full" />
      <div className="w-[7.813rem] flex flex-col items-start justify-start pt-[0.875rem] pb-[0rem] pr-[0.312rem] pl-[0rem] box-border">
        <img
          className="self-stretch h-[1.375rem] relative max-w-full overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/group-502.svg"
        />
      </div>
      <div className="w-[34.125rem] rounded bg-white-color flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[1.25rem] box-border gap-[1.25rem] max-w-full z-[1]">
        <div className="self-stretch w-[34.125rem] relative rounded bg-white-color hidden max-w-full" />
        <input
          className="w-[40.438rem] [border:none] [outline:none] bg-[transparent] h-[2.438rem] flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem] box-border font-p-18-bold font-semibold text-[1.25rem] text-darkslateblue-300"
          placeholder="Vitamix"
          type="text"
        />
        <div className="h-[3.125rem] w-[3.625rem] relative rounded-tl-7xl rounded-tr rounded-br rounded-bl-7xl bg-accent z-[2]">
          <div className="absolute top-[0rem] left-[0rem] rounded-tl-7xl rounded-tr rounded-br rounded-bl-7xl bg-accent w-full h-full hidden" />
          <img
            className="absolute top-[1rem] left-[1.25rem] w-[1.125rem] h-[1.125rem] z-[3]"
            alt=""
            src="/icon2.svg"
          />
        </div>
      </div>
      <div className="w-[26.063rem] flex flex-row items-start justify-start py-[0rem] pr-[0.437rem] pl-[0rem] box-border max-w-full">
        <div className="w-[8.063rem] flex flex-col items-start justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border">
          <div className="self-stretch flex flex-row items-start justify-between py-[0.687rem] pr-[0.25rem] pl-[2.25rem] relative gap-[1.25rem]">
            <a className="[text-decoration:none] relative leading-[1.5rem] font-bold text-[inherit] inline-block min-w-[3.625rem] z-[2]">
              Home
            </a>
            <img
              className="self-stretch w-[0.094rem] relative max-h-full min-h-[1.625rem] z-[2]"
              alt=""
              src="/vector-57.svg"
            />
            <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-md z-[3]" />
          </div>
        </div>
        <div className="flex-1 rounded-lg bg-mediumslateblue-100 flex flex-row items-start justify-between py-[0.75rem] pr-[1.75rem] pl-[8.937rem] box-border max-w-full gap-[1.25rem] z-[1] ml-[-7.563rem] text-left">
          <div className="h-[3.125rem] w-[25.125rem] relative rounded-lg bg-mediumslateblue-100 hidden max-w-full" />
          <a className="[text-decoration:none] relative leading-[1.5rem] font-bold text-[inherit] inline-block min-w-[4.875rem] z-[2]">
            Catalog
          </a>
          <img
            className="self-stretch w-[0.094rem] relative max-h-full min-h-[1.625rem] z-[2]"
            alt=""
            src="/vector-57.svg"
          />
          <div className="flex flex-row items-start justify-start gap-[0.75rem]">
            <a className="[text-decoration:none] relative leading-[1.5rem] font-bold text-[inherit] inline-block min-w-[4.5rem] z-[2]">
              Browse
            </a>
            <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
              <img
                className="w-[0.813rem] h-[0.438rem] relative z-[2]"
                alt=""
                src="/button-icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[0.75rem] px-[1.875rem] bg-accent rounded overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-400">
        <a className="[text-decoration:none] relative text-[1.313rem] leading-[1.625rem] font-bold font-h5-22-bold text-blue text-center inline-block min-w-[4rem]">
          Button
        </a>
      </button>
    </header>
  );
};

export default HeaderSearchBarDesktop;
