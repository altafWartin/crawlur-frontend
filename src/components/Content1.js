import ProductItems from "./ProductItems";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import loadinggg from "../assets/Animation - 1725965270267.json";
const Content1 = ({ data, query, loading }) => {
  // Make sure data is properly destructured and used
  const products = Array.isArray(data?.products) ? data.products : [];
  const location = useLocation();

  // const results = location.state?.results || [];
  const error = location.state?.error || "";

  console.log("Catlogresults------>>>>>", data);

  return (
    <section
      className={`self-stretch flex pt-8 pb-8 flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.125rem] text-dark-blue font-p-18-bold `}
    >
      <div className="container  flex flex-col items-start justify-start gap-[2.5rem] ">
        <div className="self-stretch text-[12px] flex flex-row flex-wrap  max-w-full">
          <div className="flex-1 hidden font-Nunito laptop:flex flex-col text-[0.88rem]  desktop:text-[1.25rem] items-start justify-start gap-[1.25rem] max-w-full w-[70%] mx-auto">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.625rem]">
              {/* Box for Product Category */}
              <div className="px-2 rounded box-border flex flex-row items-center justify-center py-[0.362rem] gap-[0.5rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="leading-[1.625rem] font-extrabold">
                  Product Category
                </div>
                <div className="flex flex-col">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>

              {/* Box for Manufacturer */}
              <div className="px-2 rounded box-border flex flex-row items-center justify-center py-[0.362rem] gap-[0.5rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="relative leading-[1.625rem] font-Nunito font-extrabold z-[2]">
                  Manufacturer Country
                </div>
                <div className="flex flex-col">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>

              {/* Box for Brand Name */}
              <div className="px-2 rounded box-border flex flex-row items-center justify-center py-[0.362rem] gap-[0.5rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="relative leading-[1.625rem] font-extrabold z-[2]">
                  Brand Name
                </div>
                <div className="flex flex-col">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>

              {/* Box for Date Published */}
              <div className="px-2 rounded box-border flex flex-row items-center justify-center py-[0.362rem] gap-[0.5rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="relative leading-[1.625rem] font-Nunito font-extrabold z-[2]">
                  Date Published
                </div>
                <div className="flex flex-col">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
            </div>

            {/* Applied Filters */}
            <div className="flex flex-row items-start justify-start gap-[0.625rem]">
              <div className="flex flex-row items-start justify-start">
                <div className="w-[9.375rem] h-[2.25rem] flex-shrink-0 rounded-[4.5rem] flex justify-center bg-opacity-50 bg-darkslateblue-200 flex items-center">
                  <p className="text-[var(--Dark-blue)] font-Nunito font-semibold text-[0.88rem]  desktop:text-[1.25rem] leading-[1.625rem]">
                    Applied filter
                  </p>
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/iconsanslinearcross.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <div className="w-[9.375rem] h-[2.25rem] flex-shrink-0 rounded-[4.5rem] flex justify-center bg-opacity-50 bg-darkslateblue-200 flex items-center">
                  <p className="text-[var(--Dark-blue)] font-Nunito font-semibold text-[0.88rem]  desktop:text-[1.25rem] leading-[1.625rem]">
                    Applied filter
                  </p>
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0"
                    alt=""
                    src="/iconsanslinearcross.svg"
                  />
                </div>
              </div>
            </div>
          </div>

          <button className=" w-[3rem] h-[3rem] flex bg-blue rounded-full laptop:hidden flex items-center justify-center mr-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <path
                d="M18.125 8.4375H4.375C4.12636 8.4375 3.8879 8.33873 3.71209 8.16291C3.53627 7.9871 3.4375 7.74864 3.4375 7.5C3.4375 7.25136 3.53627 7.0129 3.71209 6.83709C3.8879 6.66127 4.12636 6.5625 4.375 6.5625H18.125C18.3736 6.5625 18.6121 6.66127 18.7879 6.83709C18.9637 7.0129 19.0625 7.25136 19.0625 7.5C19.0625 7.74864 18.9637 7.9871 18.7879 8.16291C18.6121 8.33873 18.3736 8.4375 18.125 8.4375Z"
                fill="white"
              />
              <path
                d="M23.75 10C25.1307 10 26.25 8.88071 26.25 7.5C26.25 6.11929 25.1307 5 23.75 5C22.3693 5 21.25 6.11929 21.25 7.5C21.25 8.88071 22.3693 10 23.75 10Z"
                fill="white"
              />
              <path
                d="M25.625 15.9375H11.875C11.6264 15.9375 11.3879 15.8387 11.2121 15.6629C11.0363 15.4871 10.9375 15.2486 10.9375 15C10.9375 14.7514 11.0363 14.5129 11.2121 14.3371C11.3879 14.1613 11.6264 14.0625 11.875 14.0625H25.625C25.8736 14.0625 26.1121 14.1613 26.2879 14.3371C26.4637 14.5129 26.5625 14.7514 26.5625 15C26.5625 15.2486 26.4637 15.4871 26.2879 15.6629C26.1121 15.8387 25.8736 15.9375 25.625 15.9375Z"
                fill="white"
              />
              <path
                d="M6.25 17.5C7.63071 17.5 8.75 16.3807 8.75 15C8.75 13.6193 7.63071 12.5 6.25 12.5C4.86929 12.5 3.75 13.6193 3.75 15C3.75 16.3807 4.86929 17.5 6.25 17.5Z"
                fill="white"
              />
              <path
                d="M18.125 23.4375H4.375C4.12636 23.4375 3.8879 23.3387 3.71209 23.1629C3.53627 22.9871 3.4375 22.7486 3.4375 22.5C3.4375 22.2514 3.53627 22.0129 3.71209 21.8371C3.8879 21.6613 4.12636 21.5625 4.375 21.5625H18.125C18.3736 21.5625 18.6121 21.6613 18.7879 21.8371C18.9637 22.0129 19.0625 22.2514 19.0625 22.5C19.0625 22.7486 18.9637 22.9871 18.7879 23.1629C18.6121 23.3387 18.3736 23.4375 18.125 23.4375Z"
                fill="white"
              />
              <path
                d="M23.75 25C25.1307 25 26.25 23.8807 26.25 22.5C26.25 21.1193 25.1307 20 23.75 20C22.3693 20 21.25 21.1193 21.25 22.5C21.25 23.8807 22.3693 25 23.75 25Z"
                fill="white"
              />
            </svg>
          </button>
          <div className=" desktop:w-[25rem] laptop:w-[18rem] h-[3.125rem] rounded-3xl box-border  flex items-center justify-between  pl-4 gap-4 border-2 border-solid border-lavender-300">
            <input
              className="w-[rem]  border-none outline-none bg-transparent h-[2.375rem] box-border font-bold desktop:text-[1.125rem] laptop:text-[0.9rem]  text-darkslateblue-300 text-shadow-md"
              placeholder="Ai search"
              type="text"
            />
            <div className="h-[3.125rem] w-[3.125rem] flex items-center justify-center rounded-full bg-dark-blue">
              <img
                className="w-[1.25rem] h-[1.25rem]"
                alt="Search Icon"
                src="/icon-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="w-full self-stretch flex flex-col items-start justify-start gap-[0.825rem] max-w-full text-dimgray-100">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/vector-61.svg"
          />
          <div className="w-full self-stretch flex flex-col items-start justify-start gap-[1.375rem] max-w-full">
            <div className="w-full self-stretch flex text-[13px] flex-row items-start justify-between gap-[1.25rem]">
              <div className="flex flex-col  items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                <div className="relative z-[1]">
                  <span className="leading-[1.025rem] text-[0.88rem]  desktop:text-[1.25rem] font-Nunito font-semibold">
                    {data.total_results} Results for 
                  </span>
                  <b className="text-[1rem] leading-[1.25rem] text-dimgray-200">{` `}</b>
                  <span className="leading-[1.625rem] font-extrabold text-dark-blue">{`{${query}}`}</span>
                </div>
              </div>
              <div className="  hidden laptop:flex  flex-row items-start justify-end gap-[0.625rem] text-right text-dark-blue">
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                  <b className="relative leading-[1.625rem] text-[0.88rem]  desktop:text-[1.25rem] font-Nunito inline-block min-w-[4.25rem] z-[1]">
                    Sort By:
                  </b>
                </div>
                <div className="flex-1 rounded bg-lavender-100 flex flex-row items-start justify-start py-[0.437rem] px-[0.625rem] gap-[0.562rem] z-[1]">
                  <div className="relative text-[0.88rem] font-Nunito desktop:text-[1.25rem] leading-[1.625rem] font-extrabold z-[1]">
                    Recently added
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                    <img
                      className="w-[0.438rem] h-[0.188rem] relative z-[1]"
                      alt=""
                      src="/vector-5.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" w-full self-stretch text-[1rem] desktop:text-[1.25rem]  flex flex-col items-start justify-start gap-[0.606rem] max-w-full text-dark-blue">
              <div className="w-full self-stretch rounded-lg bg-blue flex flex-col mobile:items-center laptop:flex-row laptop:justify-between  py-[0.9rem] px-[1.25rem] box-border max-w-full gap-[1.25rem] text-white-color font-h5-22-bold">
                {/* Profile section, full width on mobile and 50% on larger screens */}
                <div className=" laptop:w-1/2  mobile:w-full flex items-start  justify-center laptop:justify-start laptop:ml-12 ">
                  <div className="leading-[1.5rem]  font-extrabold inline-block text-center mobile:text-center">
                    Profile
                  </div>
                </div>

                {/* Other elements, hidden on mobile and 50% width on larger screens */}
                <div className="hidden laptop:flex laptop:w-[70%] flex-row items-start justify-between max-w-full text-center gap-[1.25rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.062rem] pb-[0rem]">
                    <div className="leading-[1.5rem] font-extrabold">
                      Manufacturer
                    </div>
                  </div>

                  <div className="leading-[1.5rem] ml-10 font-extrabold inline-block">
                    Category
                  </div>

                  <div className="flex mr-2 flex-col items-start justify-start pt-[0.125rem] pb-[0rem] text-left">
                    <div className="leading-[1.5rem] font-extrabold inline-block">
                      Available at
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex   flex-col gap-[0.6rem] h-[calc(100vh-5rem)] overflow-auto hide-scrollbar custom-scrollbar">
                {loading ? (
                  <div className="flex items-center justify-center w-full  laptop:h-[10rem] mobile:[6rem]">
                    {/* Loading Spinner */}
                    <Lottie
                      animationData={loadinggg}
                      loop={true}
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
                ) : products.length > 0 ? (
                  products.map((product) => (
                    <div
                      key={product.id}
                      className="self-stretch group w-full flex flex-row items-center justify-between hover:shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] bg-[#F1F1F2] hover:bg-white py-[0rem] pr-[1.125rem] pl-[0rem] box-border relative max-w-full"
                    >
                      <Link
                        to={`/product/${product.id}`}
                        className="laptop:w-1/2 mobile:w-full flex no-underline text-[#0E275D] group-hover:font-extrabold hover:font-[900] flex-row items-center justify-start gap-[1.375rem] max-w-full"
                      >
                        <img
                          className="w-[40px] h-[40px] desktop:w-[50px] desktop:h-[50px] object-contain border-[1.5px] border-solid border-[gray] border-opacity-20 rounded-md transition-all duration-300 group-hover:border-[#0E275D] group-hover:border-[1.5px] group-hover:opacity-100"
                          loading="lazy"
                          alt={product.title}
                          src={product.imageUrl}
                        />
                        <div className="flex flex-col items-center justify-center px-[0rem] pb-[0rem]">
                          <b className="font-Nunito leading-[1.625rem] group-hover:font-[800]">
                            {product.title.length > 35
                              ? `${product.title.substring(0, 35)}...`
                              : product.title}
                          </b>
                        </div>
                      </Link>

                      <div className="w-[70%] hidden laptop:flex flex flex-col items-center justify-center px-[0rem] pb-[0rem] box-border max-w-full text-center">
                        <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
                          <div className="w-[14.375rem] flex flex-col items-center justify-center px-[0rem] pb-[0rem] box-border">
                            <b className="relative leading-[1.625rem] group-hover:font-[800] inline-block min-w-[4.125rem] z-[2]">
                              {product.brand}
                            </b>
                          </div>
                          <div className=" w-[14.375rem] flex flex-col items-center justify-center  px-[0rem] pb-[0rem]">
                            <b className="relative leading-[1.625rem] flex items-center group-hover:font-[800] inline-block  ">
                              {product.category?.[0]?.name || " Unknown Category "}
                            </b>
                          </div>
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer no-underline py-[0.212rem] text-dark-blue px-[0rem] bg-[#FFA41C] hover:bg-transparent rounded-35xl overflow-hidden flex flex-row items-center justify-center z-[2] border-[1px] border-solid border-orange group-hover:bg-transparent group-hover:border-chocolate-100"
                          >
                            <div className="relative text-[1.06rem] desktop:text-[1.3125rem]  desktop:leading-[1.625rem] laptop:leading-[1.125rem] desktop:px-5 laptop:px-2 font-semibold font-h5-22-bold text-dark-blue text-center inline-block min-w-[4.938rem]">
                              Amazon
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-4">
                    <p>No products available.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
