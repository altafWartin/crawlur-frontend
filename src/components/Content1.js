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
      className={`self-stretch flex pt-8 flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.125rem] text-dark-blue font-p-18-bold `}
    >
      <div className="w-[55.5rem] pl-6 flex flex-col items-start justify-start gap-[2.5rem] max-w-full">
        <div className="self-stretch text-[12px] flex flex-row flex-wrap  max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
            <div className="self-stretch flex flex-row  items-start justify-start gap-[0.625rem]">
              <div className="flex-1 rounded box-border flex flex-row items-center justify-center  py-[0.362rem]   gap-[0.5rem] max-w-[8.688rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="relative leading-[1.625rem] font-extrabold z-[2]">
                  Product Category
                </div>
                <div className="flex flex-col ">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
              <div className="flex-1 rounded box-border flex flex-row items-center justify-center  py-[0.362rem]   gap-[0.5rem] max-w-[6.988rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="relative leading-[1.625rem] font-extrabold z-[2]">
                  Manufacturer
                </div>
                <div className="flex flex-col ">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
              <div className="flex-1 rounded box-border flex flex-row items-center justify-center  py-[0.362rem]   gap-[0.5rem] max-w-[7.188rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="relative leading-[1.625rem] font-extrabold z-[2]">
                  Brand Name
                </div>
                <div className="flex flex-col ">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
              <div className="flex-1 rounded box-border flex flex-row items-center justify-center  py-[0.362rem]   gap-[0.5rem] max-w-[8.188rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="relative leading-[1.625rem] font-extrabold z-[2]">
                  Date Published
                </div>
                <div className="flex flex-col ">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row   items-start justify-start gap-[0.625rem]">
              <div className="flex flex-row items-start justify-start pt-[0.25rem] pb-[0.375rem] pr-[0.5rem] pl-[0.625rem] relative z-[1]">
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-53xl bg-darkslateblue-200" />
                <div className="relative leading-[1.625rem] font-semibold inline-block min-w-[6.813rem] z-[1]">
                  Applied filter
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] ml-[-0.063rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/iconsanslinearcross.svg"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start pt-[0.25rem] pb-[0.375rem] pr-[0.5rem] pl-[0.625rem] relative z-[1]">
                <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-53xl bg-darkslateblue-200" />
                <div className="relative leading-[1.625rem] font-semibold inline-block min-w-[6.813rem] z-[1]">
                  Applied filter
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] ml-[-0.063rem]">
                  <img
                    className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/iconsanslinearcross.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-3xl box-border h-11 flex items-center justify-between py-2 pl-4 gap-4 border-2 border-solid border-lavender-300">
            <input
              className="w-[8rem]  border-none outline-none bg-transparent h-[2.375rem] box-border font-bold text-[13px] text-darkslateblue-300 text-shadow-md"
              placeholder="Ai search"
              type="text"
            />
            <div className="h-[2.125rem] w-[2.125rem] flex items-center justify-center rounded-full bg-dark-blue">
              <img
                className="w-[1rem] h-[1rem]"
                alt="Search Icon"
                src="/icon-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[0.825rem] max-w-full text-dimgray-100">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/vector-61.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.375rem] max-w-full">
            <div className="self-stretch flex text-[13px] flex-row items-start justify-between gap-[1.25rem]">
              <div className="flex flex-col  items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                <div className="relative z-[1]">
                  <span className="leading-[1.025rem] font-semibold">
                    {data.total_results} Results for
                  </span>
                  <b className="text-[1rem] leading-[1.25rem] text-dimgray-200">{` `}</b>
                  <span className="leading-[1.625rem] font-extrabold text-dark-blue">{`{${query}}`}</span>
                  </div>
              </div>
              <div className="w-[15.688rem] flex flex-row items-start justify-start gap-[0.625rem] text-right text-dark-blue">
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                  <b className="relative leading-[1.625rem] inline-block min-w-[4.25rem] z-[1]">
                    Sort By:
                  </b>
                </div>
                <div className="flex-1 rounded bg-lavender-100 flex flex-row items-start justify-start py-[0.437rem] px-[0.625rem] gap-[0.562rem] z-[1]">
                  <div className="relative leading-[1.625rem] font-extrabold z-[1]">
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
            <div className="self-stretch text-[13px] flex flex-col items-start justify-start gap-[0.606rem] max-w-full text-dark-blue">
              <div className="self-stretch rounded-lg bg-blue flex flex-row items-start justify-between py-[0.9rem] px-[1.25rem]  box-border max-w-full gap-[1.25rem] z-[1]  text-white-color font-h5-22-bold">
                {/* <!-- Profile section, 50% width --> */}
                <div className="w-1/2 ml-12 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                  <div className="relative leading-[1.5rem] font-extrabold inline-block z-[2]">
                    Profile
                  </div>
                </div>

                {/* <!-- Other elements, 50% width --> */}
                <div className="w-1/2 flex flex-row items-start justify-between max-w-full text-center gap-[1.25rem]">
                  <div className="flex flex-col items-start justify-start pt-[0.062rem] pb-[0rem]">
                    <div className="relative leading-[1.5rem] font-extrabold z-[2]">
                      Manufacturer
                    </div>
                  </div>

                  <div className="relative leading-[1.5rem] font-extrabold inline-block z-[2]">
                    Category
                  </div>

                  <div className="flex flex-col items-start justify-start pt-[0.125rem] pb-[0rem] text-left">
                    <div className="relative leading-[1.5rem] font-extrabold inline-block z-[2]">
                      Available at
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col gap-[0.6rem] h-[calc(100vh-5rem)] overflow-auto">
                {loading ? (
                  <div className="flex items-center justify-center w-full h-[10rem]">
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
                      className="self-stretch w-full flex flex-row items-center justify-between hover:shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] bg-whitesmoke hover:bg-white py-[0rem] pr-[1.125rem] pl-[0rem] box-border relative max-w-full"
                    >
                      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-md z-[1]" />

                      <Link
                        to={`/product/${product.id}`}
                        className="w-1/2 flex no-underline text-dark-blue flex-row items-center justify-start gap-[1.375rem] max-w-full"
                      >
                        <img
                          className="h-[3rem] w-[3rem] relative rounded-md object-cover z-[2]"
                          loading="lazy"
                          alt={product.title}
                          src={product.imageUrl}
                        />
                        <div className="flex flex-col items-center justify-center px-[0rem] pb-[0rem]">
                          <b className="relative leading-[1.625rem] z-[2]">
                            {product.title.length > 30
                              ? `${product.title.substring(0, 30)}...`
                              : product.title}
                          </b>
                        </div>
                      </Link>

                      <div className="w-1/2 flex flex-col items-center justify-center px-[0rem] pb-[0rem] box-border max-w-full text-center">
                        <div className="self-stretch flex flex-row items-center justify-between gap-[1.25rem]">
                          <div className="w-[12.375rem] flex flex-col items-center justify-center px-[0rem] pb-[0rem] box-border">
                            <b className="relative leading-[1.625rem] inline-block min-w-[4.125rem] z-[2]">
                              {product.brand}
                            </b>
                          </div>
                          <div className="flex flex-col items-center justify-center pt-[0.437rem] px-[0rem] pb-[0rem]">
                            <b className="relative leading-[1.625rem] inline-block min-w-[5.75rem] z-[2]">
                              {product.category?.[0]?.name || " - "}
                            </b>
                          </div>
                          <a
                            href={product.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer no-underline py-[0.312rem] text-dark-blue px-[1.087rem] bg-[transparent] rounded-35xl overflow-hidden flex flex-row items-center justify-center z-[2] border-[1px] border-solid border-orange hover:bg-orange hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100"
                          >
                            <div className="relative text-[0.9rem] leading-[1.025rem] font-semibold font-h5-22-bold text-dark-blue text-center inline-block min-w-[4.938rem]">
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
