import PropTypes from "prop-types";

const SuggestionDropdown = () => {
  return (
    <section
      className="self-stretch flex flex-row items-center justify-start pt-0 px-0  box-border max-w-full text-center text-[1rem] text-dark-blue font-p-18-bold"
    >
      <div className="flex-1 flex flex-row items-start justify-start  py-4 px-48 box-border relative gap-2.5 opacity-60 max-w-full z-1">
        <div className="h-full w-full absolute top-0 right-0 bottom-0 left-0 bg-darkslateblue-100" />
      
        {['Suggestion 1', 'Suggestion 2', 'Suggestion 3', 'Suggestion 4', 'Suggestion 5'].map((suggestion, index) => (
          <button
            key={index}
            className="cursor-pointer py-1 pr-3 pl-3 bg-white w-34 rounded-43xl box-border flex flex-row items-start justify-start whitespace-nowrap z-2 border border-solid border-gainsboro-300 hover:bg-gainsboro-100 hover:border-silver"
          >
            <a className="text-decoration-none text-dark-blue flex-1 relative text-[14px] leading-[1.25rem] font-bold font-p-18-bold text-dark-blue text-center inline-block min-w-25">
              {suggestion}
            </a>
          </button>
        ))}
      </div>
    </section>
  );
};

export default SuggestionDropdown;
