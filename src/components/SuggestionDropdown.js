import PropTypes from "prop-types";

const SuggestionDropdown = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[3.125rem] box-border max-w-full text-center text-[1rem] text-dark-blue font-p-18-bold ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start py-[1.5rem] px-[18.75rem] box-border relative gap-[0.625rem] opacity-[0.6] max-w-full z-[1]">
        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-darkslateblue-100" />
      
        <button className="cursor-pointer py-[0.25rem] pr-[1.125rem] pl-[1.187rem] bg-white-color w-[8.688rem] rounded-43xl box-border flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-gainsboro-300 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver">
          <a className="[text-decoration:none] flex-1 relative text-[1rem] leading-[1.25rem] font-bold font-p-18-bold text-dark-blue text-center inline-block min-w-[6.25rem]">
            Suggestion 1
          </a>
        </button>
        <button className="cursor-pointer py-[0.25rem] pr-[1.125rem] pl-[1.187rem] bg-white-color w-[8.688rem] rounded-43xl box-border flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-gainsboro-300 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver">
          <a className="[text-decoration:none] flex-1 relative text-[1rem] leading-[1.25rem] font-bold font-p-18-bold text-dark-blue text-center inline-block min-w-[6.25rem]">
            Suggestion 2
          </a>
        </button>
        <button className="cursor-pointer py-[0.25rem] pr-[1.125rem] pl-[1.187rem] bg-white-color w-[8.688rem] rounded-43xl box-border flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-gainsboro-300 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver">
          <a className="[text-decoration:none] flex-1 relative text-[1rem] leading-[1.25rem] font-bold font-p-18-bold text-dark-blue text-center inline-block min-w-[6.25rem]">
            Suggestion 3
          </a>
        </button>
     
        <button className="cursor-pointer py-[0.25rem] pr-[1.125rem] pl-[1.187rem] bg-white-color w-[8.688rem] rounded-43xl box-border flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-gainsboro-300 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver">
          <a className="[text-decoration:none] flex-1 relative text-[1rem] leading-[1.25rem] font-bold font-p-18-bold text-dark-blue text-center inline-block min-w-[6.25rem]">
            Suggestion 4
          </a>
        </button>
     
        <button className="cursor-pointer py-[0.25rem] pr-[1.125rem] pl-[1.187rem] bg-white-color w-[8.688rem] rounded-43xl box-border flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-gainsboro-300 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver">
          <a className="[text-decoration:none] flex-1 relative text-[1rem] leading-[1.25rem] font-bold font-p-18-bold text-dark-blue text-center inline-block min-w-[6.25rem]">
            Suggestion 5
          </a>
        </button>
     
        <button className="cursor-pointer py-[0.25rem] pr-[1.125rem] pl-[1.187rem] bg-white-color w-[8.688rem] rounded-43xl box-border flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-gainsboro-300 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver">
          <a className="[text-decoration:none] flex-1 relative text-[1rem] leading-[1.25rem] font-bold font-p-18-bold text-dark-blue text-center inline-block min-w-[6.25rem]">
            Suggestion 6
          </a>
        </button>
        <button className="cursor-pointer py-[0.25rem] pr-[1.125rem] pl-[1.187rem] bg-white-color w-[8.688rem] rounded-43xl box-border flex flex-row items-start justify-start whitespace-nowrap z-[2] border-[1px] border-solid border-gainsboro-300 hover:bg-gainsboro-100 hover:box-border hover:border-[1px] hover:border-solid hover:border-silver">
          <a className="[text-decoration:none] flex-1 relative text-[1rem] leading-[1.25rem] font-bold font-p-18-bold text-dark-blue text-center inline-block min-w-[6.25rem]">
            Suggestion 7
          </a>
        </button>
      </div>
    </section>
  );
};

SuggestionDropdown.propTypes = {
  className: PropTypes.string,
};

export default SuggestionDropdown;
