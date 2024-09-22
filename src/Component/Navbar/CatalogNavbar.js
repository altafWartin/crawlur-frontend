import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { searchLocalProducts } from "../../api/api";
import { AiOutlineClose } from "react-icons/ai"; // Import clear icon

const SearchResults = ({ results, isLoading, query }) => {
  if (query.length < 3) return null;

  const handleNavigation = () => {
    navigate("/Catalog", { state: { query: query } });
  };
  return (
    <div className="absolute z-10 mt-5 border-b-2 rounded-3xl shadow-md bg-white">
      {isLoading ? (
        <div className="p-4 text-[color:var(--Dark-Blue,#0E275D)] [font-family:Nunito] text-lg font-bold">
          Loading...
        </div>
      ) : results.length === 0 ? (
        <div className="p-4 text-[color:var(--Dark-Blue,#0E275D)] [font-family:Nunito] text-lg font-bold">
          No results found...
        </div>
      ) : (
        results.map((result, index) => (
          <div
            key={index}
            className="flex flex-row items-center border-b-2 justify-between px-2 py-2 border-gray-300 transition-colors duration-300 hover:bg-homeListbg"
          >
            <Link
              to={`/product/${result.product.asin}`}
              className="flex items-center gap-5 no-underline"
              aria-label={`View details for ${result.product.title}`}
            >
              <div className="w-[45px] h-[45px] border border-custom-thin">
                <img
                  className="w-[40px] h-[38px] p-1 object-cover border border-[#F4F8FF] border-[2px]"
                  loading="lazy"
                  alt={result.title}
                  src={result.product.images_flat}
                />
              </div>

              <div className="flex flex-col items-start justify-center">
                <b className="text-[color:var(--Dark-Blue,#0E275D)] [font-family:Nunito] text-lg font-bold leading-[26px]">
                  {result.product.title
                    ? result.product.title.slice(0, 18)
                    : "No Title"}
                  {result.product.title &&
                    result.product.title.length > 18 &&
                    "..."}
                </b>
              </div>
            </Link>

            <div className="flex flex-col items-center">
              <a
                href={result.product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-[91px] no-underline justify-center items-center gap-2.5 border border-[color:var(--Dark-Blue,#0E275D)] px-3.5 py-[5px] rounded-[90px] border-solid hover:[background:var(--Dark-Blue,#0E275D)] hover:text-white transition-colors duration-300 bg-white text-[color:var(--Dark-Blue,#0E275D)]"
              >
                <b className="[font-family:Nunito] text-lg font-extrabold leading-[26px]">
                  Amazon
                </b>
              </a>
            </div>
          </div>
        ))
      )}
      <button
        onClick={handleNavigation}
        className="w-full h-12 flex cursor-pointer items-center mt-2 justify-center rounded-b-3xl mx-auto bg-[color:var(--Dark-Blue,#0E275D)] text-white font-semibold py-2 px-6 rounded- transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg"
      >
        Load More Products From Amazon
      </button>
    </div>
  );
};

const CatalogNavbar = () => {
  const [query, setQuery] = useState(""); // Single state for input value
  const [state, setState] = useState({
    isLoading: false,
    results: [],
  });
  const searchButtonRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (query.length < 3) {
      setState({ isLoading: false, results: [] });
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        setState({ isLoading: true, results: [] });
        const products = await searchLocalProducts(query);
        setState({ isLoading: false, results: products || [] });
      } catch (error) {
        console.error("Error fetching product suggestions:", error);
        setState({ isLoading: false, results: [] });
      }
    }, 300); // Debounce of 300ms

    return () => clearTimeout(timeoutId); // Clear timeout on cleanup to avoid unnecessary API calls
  }, [query]);

  const handleNavigation = () => {
    navigate("/Catalog", { state: { query: query } });
  };

  const clearSearch = () => {
    setQuery("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior of form submission
      if (searchButtonRef.current) {
        searchButtonRef.current.click(); // Trigger click on the search button
      }
    }
  };

  const { isLoading, results } = state;

  return (
    <header className="w-full justify-center sticky top-0 z-[99] bg-blue py-[0.8rem] px-[1.25rem] flex items-start justify-center text-white font-bold text-left text-[1.313rem] max-w-full">
      <div className="w-full flex justify-center items-center ">
        <div className="w-[8.063rem] items-center">
          <img
            className="w-[4.75rem] h-[1.625rem]"
            loading="lazy"
            alt="Crawlur Logo"
            src="/crawlur2.svg"
          />
        </div>
        <div className="">
          <div className="w-[21.438rem] bg-white flex items-center justify-between py-[0rem] pr-[0rem] pl-[1.25rem] rounded gap-[1.25rem] max-w-full z-[1]">
            <input
              className="w-[18.438rem] bg-transparent border-none outline-none h-[2.5rem] text-[1rem] text-darkslateblue-300"
              placeholder="Search product name"
              type="text"
              autoComplete="off"
              value={query} // Use query state directly
              onChange={(e) => setQuery(e.target.value)} // Update query state directly
              onKeyDown={handleKeyDown} // Add onKeyDown handler
            />
            {query && (
              <AiOutlineClose
                className="cursor-pointer text-gray-600 hover:text-black"
                onClick={clearSearch} // Clear the input when clicked
              />
            )}
            <button
              onClick={handleNavigation}
              ref={searchButtonRef} // Add ref to button
              className={`h-[2.125rem] w-[2.625rem] rounded-tl-7xl rounded-tr rounded-br rounded-bl-7xl bg-accent flex items-center justify-center z-[2] ${
                isLoading ? "bg-blue-600" : ""
              }`}
              aria-label="Search"
            >
              {isLoading ? (
                <svg
                  className="animate-spin w-[1.125rem] h-[1.125rem] text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="62.83 62.83"
                  />
                </svg>
              ) : (
                <span>
                  <img
                    className="w-4 h-4"
                    loading="lazy"
                    alt="Catalog Icon"
                    src="/icon.svg"
                  />
                </span>
              )}
            </button>
          </div>
          <SearchResults
            results={results}
            isLoading={isLoading}
            query={query}
          />
        </div>
        {/* Navigation Section */}
        <div className="flex ml-8 items-center gap-[1.25rem] bg-mediumslateblue-100 rounded-lg py-2 px-4 max-w-[23.938rem] text-[0.7525rem]">
          <Link
            to="/"
            className="text-white-color no-underline font-bold leading-[1.5rem] text-center inline-block "
          >
            Home
          </Link>
          <img
            className="w-[2px] h-[1.625rem]"
            loading="lazy"
            alt=""
            src="/vector-57.svg"
          />
          <Link
            to="/Catalog"
            className="text-white-color no-underline font-bold leading-[1.5rem] inline-block "
          >
            Catalog
          </Link>
          <img
            className="w-[0.094rem] h-[1.625rem]"
            alt=""
            src="/vector-57.svg"
          />
          <div className="flex items-center gap-[0.75rem]">
            <a className="text-white-color font-bold leading-[1.5rem] inline-block">
              Browse
            </a>
            <img
              className="w-[0.813rem] h-[0.438rem]"
              alt=""
              src="/button-icon.svg"
            />
          </div>
        </div>
        {/* Action Buttons */}
        <div className="ml-5 flex items-center gap-[0.625rem]">
          <Link className="cursor-pointer py-[0.35rem] no-underline px-[0.875rem] bg-accent rounded overflow-hidden flex items-center justify-center hover:bg-gainsboro-400">
            <span className="text-[0.85rem] leading-[1.625rem] font-bold text-blue text-center">
              Button{" "}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default CatalogNavbar;
