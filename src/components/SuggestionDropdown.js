const SuggestionDropdown = () => {
  return (
    <div className="w-full flex justify-center bg-darkslateblue-100">
      <div className="container  flex items-start py-4 gap-2.5  overflow-x-auto scrollbar-hide">
        {[
          "Suggestion 1",
          "Suggestion 2",
          "Suggestion 3",
          "Suggestion 4",
          "Suggestion 5",
          "Suggestion 6",
          "Suggestion 7",
        ].map((suggestion, index) => (
          <button
            key={index}
            className="cursor-pointer py-1 px-3 text-dark-blue bg-white w-34 rounded-43xl box-border flex flex-row items-start justify-start whitespace-nowrap z-2 border border-solid border-gainsboro-300 hover:bg-gainsboro-100 hover:border-silver"
          >
            <span className="text-dark-blue text-center font-Nunito text-[0.8rem] desktop:text-base font-bold leading-5">
              {suggestion}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestionDropdown;
