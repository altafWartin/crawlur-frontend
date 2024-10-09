import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { searchLocalProducts } from "../../api/api";
import { AiOutlineClose } from "react-icons/ai"; // Import clear icon
import BrowseDropdown from "./BrowseDropdown";

const SearchResults = ({ results, isLoading, query }) => {
  if (query.length < 3) return null;

  const handleNavigation = () => {
    navigate("/Catalog", { state: { query: query } });
  };
  return (
    <div className="w-full absolute mobile:max-w-[20rem]: laptop:max-w-[27rem] desktop:max-w-[30rem] z-10 mt-3 border-b-2 rounded-md shadow-md bg-white">
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
            className="flex flex-row items-center border-solid border-[1px] border-[#EDF7FF] border-opacity-50 justify-between px-2  transition-colors duration-300 hover:bg-homeListbg group"
          >
            <Link
              to={`/product/${result.product.asin}`}
              className="flex items-center gap-5 no-underline"
              aria-label={`View details for ${result.product.title}`}
            >
              <img
                className="w-[40px] h-[38px] m-2 p-1 object-cover border-solid border-[#EDF7FF] group-hover:border-[#0E275D] border-[1px]"
                loading="lazy"
                alt={result.title}
                src={result.product.images_flat}
              />

              <div className="flex flex-col items-start justify-center">
                <b className="text-[#0E275D] [font-family:Nunito] group-hover:font-[800] text-lg font-bold leading-[26px]">
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
                className="flex w-[4rem] no-underline justify-center items-center gap-2.5 border border-[color:var(--Dark-Blue,#0E275D)] px-3.5 py-[2px] rounded-[90px] border-solid transition-colors duration-300 bg-white text-[color:var(--Dark-Blue,#0E275D)] group-hover:bg-[var(--Dark-Blue)] group-hover:text-white group-hover:bg-dark-blue"
              >
                <b className="[font-family:Nunito] text-base font-extrabold leading-[26px]">
                  Amazon
                </b>
              </a>
            </div>
          </div>
        ))
      )}
      <div className="w-full flex justify-center">
        <button
          onClick={handleNavigation}
          className="flex cursor-pointer items-center gap-2 my-3 border-none flex-shrink-0 rounded-[5.625rem] bg-white text-[#0E275D] text-center font-Outfit text-[1rem] font-medium leading-[1.625rem] w-[12.1875rem] h-[2.1875rem] py-[0.3125rem] px-[0.875rem] transition-all duration-300 ease-in-out hover:bg-dark-blue hover:text-white shadow-md"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor" // Use currentColor to inherit the text color
            className="" // Add transition for smooth color change
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.0082 0.562855C17.0086 0.563004 17.0089 0.563146 16.6948 1.30526C17.4368 0.991114 17.437 0.991449 17.4372 0.991801L17.4375 0.992582L17.4382 0.994434L17.4403 0.999274L17.4461 1.01346C17.4507 1.0249 17.4569 1.04029 17.4644 1.05946C17.4794 1.0978 17.4995 1.15135 17.5233 1.21883C17.5709 1.35366 17.6332 1.54486 17.6969 1.78203C17.824 2.25468 17.9597 2.91943 17.9925 3.6903C18.0584 5.23411 17.7104 7.25007 16.0145 8.94943C15.3894 9.5956 14.4944 10.2363 13.5077 10.8618C14.0728 12.0295 14.1026 13.1923 13.7519 14.2935C13.3431 15.5762 12.4375 16.7196 11.4328 17.6983C11.2566 17.87 11.0115 17.9518 10.7675 17.9203C10.5235 17.8889 10.3072 17.7477 10.1802 17.5369L7.70139 13.422L4.57774 10.2984L0.463183 7.81971C0.252427 7.69276 0.111217 7.47647 0.0797643 7.23245C0.0483118 6.98842 0.130063 6.7434 0.301738 6.56714C1.28038 5.56241 2.42382 4.65675 3.70655 4.24812C4.8074 3.89742 5.96987 3.92718 7.13722 4.49183C7.76354 3.50493 8.40539 2.60961 9.05056 1.98559C10.7499 0.289536 12.7659 -0.0584602 14.3097 0.00745527C15.0806 0.0403692 15.7453 0.175962 16.218 0.303063C16.4552 0.366844 16.6463 0.429137 16.7812 0.476699C16.8486 0.500502 16.9022 0.520686 16.9405 0.535619C16.9597 0.543087 16.9751 0.549249 16.9866 0.553902L17.0007 0.559729L17.0055 0.561747L17.0075 0.562526L17.0082 0.562855ZM16.6948 1.30526L17.4368 0.991114C17.3552 0.798271 17.2018 0.644779 17.0089 0.563146L16.6948 1.30526ZM11.9602 9.91569C12.0045 9.88551 12.0506 9.86033 12.0981 9.84002C13.3005 9.10631 14.2706 8.4355 14.8596 7.82509L14.8696 7.81474C16.1567 6.52775 16.4356 5.00656 16.3822 3.75905C16.3555 3.13352 16.2448 2.58855 16.1405 2.20059C16.1138 2.10109 16.0876 2.01256 16.0636 1.93635C15.9874 1.91242 15.899 1.88625 15.7994 1.8595C15.4114 1.75517 14.8666 1.64443 14.2409 1.61773C12.9935 1.56446 11.4722 1.84332 10.1852 3.13031L10.175 3.14048C9.56683 3.7273 8.89586 4.69518 8.16399 5.89246C8.14303 5.9432 8.11655 5.99256 8.08438 6.03971C8.0688 6.06252 8.05227 6.08429 8.03487 6.10498C7.98611 6.1857 7.93758 6.26649 7.88926 6.34737L11.6513 10.1094C11.736 10.0589 11.8201 10.0084 11.9035 9.9581C11.9216 9.94329 11.9405 9.92913 11.9602 9.91569ZM11.9115 11.8274C11.9238 11.8206 11.9361 11.8135 11.9481 11.806L12.1212 11.7043C12.4404 12.4445 12.4288 13.1368 12.2161 13.8043C12.0047 14.4679 11.5839 15.1354 11.0139 15.7973L9.47283 13.2392C9.8806 13.0005 10.294 12.7625 10.7077 12.5243L10.8075 12.4668C11.1777 12.2536 11.5477 12.0402 11.9115 11.8274ZM10.2122 10.9497L7.0488 7.78627L6.84748 8.13627C6.58991 8.58428 6.32905 9.03799 6.05828 9.49957L8.49996 11.9412C8.96508 11.6679 9.43567 11.3969 9.8993 11.1299L9.89985 11.1296L10.0032 11.0701L10.2122 10.9497ZM4.19577 5.78381C4.86277 5.57133 5.55452 5.55958 6.29414 5.87801C6.01117 6.35866 5.71931 6.86542 5.42831 7.37074L5.42805 7.37119C5.20336 7.76136 4.97909 8.1508 4.75988 8.52649L2.20274 6.98606C2.86473 6.41605 3.53222 5.9952 4.19577 5.78381ZM0.0116375 17.2335C0.0116226 17.2335 0.0116103 17.2336 0.644706 17.3553L0.0116375 17.2335C-0.0287504 17.4434 0.0376115 17.66 0.188836 17.8111C0.340063 17.9624 0.556438 18.0288 0.766454 17.9884L0.644706 17.3553C0.766454 17.9884 0.766377 17.9884 0.766454 17.9884L0.766814 17.9883L0.76748 17.9881L0.769721 17.9878L0.777785 17.9862L0.807765 17.9803C0.833724 17.9751 0.871404 17.9676 0.919342 17.9578C1.01519 17.9382 1.15223 17.9095 1.31874 17.8729C1.65116 17.7998 2.10394 17.6943 2.58238 17.5651C3.05856 17.4365 3.57186 17.2816 4.02106 17.1081C4.44059 16.9461 4.8988 16.7338 5.18834 16.4566C5.4399 16.2212 5.64177 15.9378 5.78199 15.6231C5.92295 15.3067 5.99872 14.9653 6.00484 14.6191C6.01095 14.2728 5.94725 13.9289 5.81755 13.6077C5.68785 13.2866 5.4948 12.995 5.24994 12.7501C5.00506 12.5052 4.71337 12.3122 4.39226 12.1825C4.07116 12.0528 3.72722 11.9891 3.38096 11.9952C3.03471 12.0013 2.69324 12.0771 2.3769 12.218C2.06219 12.3582 1.77879 12.5601 1.54341 12.8117C1.26619 13.1012 1.05389 13.5594 0.891876 13.9789C0.718414 14.4281 0.563407 14.9414 0.434887 15.4176C0.305757 15.8961 0.200226 16.3488 0.127086 16.6812C0.0904494 16.8478 0.0617804 16.9849 0.0421859 17.0807C0.0323855 17.1286 0.0248459 17.1663 0.0197056 17.1922L0.0138092 17.2222L0.0122413 17.2302L0.0118078 17.2326L0.0116375 17.2335ZM13.5386 3.17216C12.8265 3.17216 12.2492 3.74945 12.2492 4.46155C12.2492 5.17366 12.8265 5.75094 13.5386 5.75094C14.2507 5.75094 14.828 5.17366 14.828 4.46155C14.828 3.74945 14.2507 3.17216 13.5386 3.17216Z"
              fill="currentColor" // Use currentColor to inherit the text color
            />
          </svg>
          Explore All Results
        </button>
      </div>
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
    <header className="w-full py-4  desktop:text-[1.3rem]  laptop:text-[1rem] desktop:leading-[1.5rem] laptop:leading-[1.4rem] flex justify-center   bg-blue desktop:py-[2.19rem] laptop:py-[1.4rem]  mobile:py-5 text-white font-bold text-left  max-w-full overflow-hidden">
      <div className="container  flex flex-row gap-8  justify-between items-center">
        <img
          className="desktop:w-[8.75rem] mobile:w-[3.25rem] laptop:w-[6rem] desktop:h-[1.6rem]  desktop:h-[3.125rem]  laptop:h-[2.3rem]"
          loading="lazy"
          alt="Crawlur Logo"
          src="/crawlur2.svg"
        />
        <div className="w-full max-w-[30rem]  desktop:h-[3.125rem]  laptop:h-[2.4rem] hidden laptop:block ">
          <div className=" bg-white flex items-center justify-between py-0 pr-0 pl-1.25 rounded gap-1.25 max-w-full z-1">
            <input
              className="w-full pl-5 desktop:h-[3.125rem]   laptop:h-[2.3rem] placeholder:font-Nunito placeholder:text-[1rem] desktop:placeholder:text-[1.25rem] placeholder:opacity-50 bg-transparent border-none outline-none  desktop:h-[3.125rem] text-[1rem] text-darkslateblue-300"
              placeholder="Search product name or url"
              type="text"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            {query && (
              <AiOutlineClose
                className="cursor-pointer text-gray-600 mr-2 hover:text-black"
                onClick={clearSearch}
              />
            )}
            <button
              onClick={handleNavigation}
              ref={searchButtonRef}
              className={`h-[2.125rem] w-[2.625rem] rounded-tl-7xl rounded-tr rounded-br rounded-bl-7xl bg-accent flex items-center justify-center z-2 ${
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
        <div className="flex hidden laptop:!flex desktop:h-[3.125rem] laptop:h-[2.4rem] text-[1.1rem] desktop:text-[1.3125rem] text-[color:var(--White-Color,#FFF)] text-center [font-family:Outfit] font-bold items-center gap-4 bg-mediumslateblue-100 rounded-lg px-4">
          <Link
            to="/"
            className="no-underline text-[color:var(--White-Color,#FFF)] text-center inline-block"
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
            className="text-white-color no-underline inline-block"
          >
            Catalog
          </Link>
          <img
            className="w-[0.094rem] h-[1.625rem]"
            alt=""
            src="/vector-57.svg"
          />
          <BrowseDropdown />
        </div>

        {/* Action Buttons */}
        <div className="h-auto hidden laptop:!flex flex items-center justify-end gap-2">
          <Link className="cursor-pointer desktop:h-[3.125rem] laptop:h-[2.3rem] no-underline px-[0.875rem] bg-accent rounded overflow-hidden flex items-center justify-center hover:bg-gainsboro-400">
            <span className="font-Outfit font-bold text-blue text-center text-[1.1rem] desktop:text-[1.3125rem]">
              Button
            </span>
          </Link>
        </div>

        <div className="flex justify-end laptop:hidden ">
          <button className="flex bg-transparent rounded-full mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40" // Same width as the second icon
              height="40" // Same height as the second icon
              viewBox="0 0 35 35"
              fill="none"
            >
              <path
                d="M0 17.5C0 7.83502 7.83502 0 17.5 0C27.165 0 35 7.83502 35 17.5C35 27.165 27.165 35 17.5 35C7.83502 35 0 27.165 0 17.5Z"
                fill="#EDF7FF"
              />
              <path
                d="M21.899 22L25 25M24 17C24 20.866 20.866 24 17 24C13.134 24 10 20.866 10 17C10 13.134 13.134 10 17 10C20.866 10 24 13.134 24 17Z"
                stroke="#0E275D"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className="flex laptop:hidden w-[1.387rem] mr-6">
            <svg
              stroke="white"
              fill="white"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="40" // Same height as the first icon
              width="40" // Same width as the first icon
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CatalogNavbar;
