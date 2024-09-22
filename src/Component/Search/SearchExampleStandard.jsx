import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchLocalProducts } from '../../api/api'; // Import the API function

const SearchExampleStandard = () => {
    const [state, setState] = useState({ isLoading: false, results: [], value: '' });
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const searchButtonRef = useRef(null);

    const handleSearchChange = (e) => {
        const value = e.target.value;
        setQuery(value);
    };

    const handleClear = () => {
        setQuery('');
        setState({ ...state, results: [], value: '' });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent the default behavior of form submission
            if (searchButtonRef.current) {
                searchButtonRef.current.click(); // Trigger click on the search button
            }
        }
    };

    useEffect(() => {
        if (query.length < 3) {
            setState((prevState) => ({ ...prevState, isLoading: false, results: [] }));
            return;
        }

        const timeoutId = setTimeout(async () => {
            try {
                setState((prevState) => ({ ...prevState, isLoading: true }));

                const products = await searchLocalProducts(query);

                console.log("Products fetched:", products);

                setState({ isLoading: false, results: products || [], value: query });
            } catch (error) {
                console.error('Error fetching product suggestions:', error);
                setState({ isLoading: false, results: [], value: query });
            }
        }, 300); // Debounce of 300ms

        return () => clearTimeout(timeoutId); // Clear timeout on cleanup to avoid unnecessary API calls
    }, [query]);

    const handlenavigation = () => {
        navigate("/Catalog", { state: { query: query } });
    };

    const { isLoading, results, value } = state;

    return (
        <div className="w-full flex flex-col">
            <div className="relative">
                <div className="flex items-center justify-between py-[1.2rem] pr-[1rem] pl-[1.75rem] relative gap-[1.25rem] rounded-full  bg-ghostwhite z-2 border-2 border-solid border-gray-300 focus-within:ring-2   focus-within:ring-blue focus-within:rounded-full focus-within:outline-none">
                    {/* Background overlay */}

                    {/* Input field */}
                    <input
                        type="text"
                        autoComplete="off"
                        value={query}
                        className="w-full relative text-dark-blue font-semibold text-[0.8rem] bg-transparent border-none outline-none z-3 placeholder:text-left placeholder:font-semibold placeholder:text-[0.8rem] placeholder:text-gray-400"
                        placeholder="Search product name or URL"
                        onChange={handleSearchChange}
                        onKeyDown={handleKeyDown} // Add onKeyDown handler
                    />

                    {/* Clear Icon */}
                    {query && (
                        <button
                            onClick={handleClear}
                            className="absolute right-[3.5rem] z-4 flex items-center justify-center cursor-pointer bg-transparent text-gray-400 hover:text-gray-600"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-[1.5rem] h-[1.5rem]"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    )}

                    {/* Search Button */}
                    <button
                        onClick={handlenavigation}
                        ref={searchButtonRef} // Add ref to button
                        className="flex items-center justify-center bg-transparent z-[5] cursor-pointer"
                        role="button"
                    >
                        <img
                            className="w-[1rem] h-[1rem] opacity-74"
                            loading="lazy"
                            alt="Catalog Icon"
                            src="/icon.svg"
                        />
                    </button>
                </div>
            </div>

            {query.length >= 3 && (
                <div className="absolute z-10 mt-[4.5rem] border-b-2 rounded-3xl shadow-md bg-white">
                    {isLoading ? (
                        <div className="p-[1rem]">Loading...</div>
                    ) : results && results.length === 0 ? (
                        <div className="p-[1rem]">No results found in crawlur database...</div>
                    ) : (
                        results &&
                        results.map((result, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center border-b-2 justify-between px-[1rem] py-[0.5rem] border-gray-300 transition-colors duration-300 hover:bg-homeListbg"
                            >
                                <Link
                                    to={`/product/${result.product.asin}`}
                                    className="flex items-center gap-[1.25rem] no-underline"
                                >
                                    <div className="w-[2.8125rem] h-[2.8125rem] border border-custom-thin">
                                        <img
                                            className="w-[2.5rem] h-[2.375rem] p-[0.25rem] object-cover border border-[#F4F8FF] border-[0.125rem]"
                                            loading="lazy"
                                            alt={result.title}
                                            src={result.product.images_flat}
                                        />
                                    </div>

                                    <div className="w-[18rem] flex flex-col items-start justify-center">
                                        <b className="text-[color:var(--Dark-Blue,#0E275D)] [font-family:Nunito] text-lg font-bold leading-[1.625rem]">
                                            {result.product.title ? result.product.title.slice(0, 22) : 'No Title'}
                                            {result.product.title && result.product.title.length > 2 && '...'}
                                        </b>
                                    </div>
                                </Link>

                                <div className="flex flex-col items-center">
                                    <a
                                        href={result.product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex w-[5.6875rem] no-underline justify-center items-center gap-[0.625rem] border border-[color:var(--Dark-Blue,#0E275D)] px-[0.875rem] py-[0.3125rem] rounded-[5.625rem] border-solid hover:[background:var(--Dark-Blue,#0E275D)] hover:text-white transition-colors duration-300 bg-white text-[color:var(--Dark-Blue,#0E275D)]"
                                    >
                                        <b className="[font-family:Nunito] text-lg font-extrabold leading-[1.625rem]">
                                            Amazon
                                        </b>
                                    </a>
                                </div>
                            </div>
                        ))
                    )}

                    <button
                        onClick={handlenavigation}
                        className="w-full h-[3rem] flex cursor-pointer items-center mt-[0.5rem] justify-center rounded-b-3xl mx-auto bg-[color:var(--Dark-Blue,#0E275D)] text-white font-semibold py-[0.5rem] px-[1.5rem] transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg"
                    >
                        Load More Products From Amazon
                    </button>
                </div>
            )}
        </div>

    );
};

export default SearchExampleStandard;
