import ProductItems from "./ProductItems";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import SearchContext from './context/SearchContext'; // <-- Add this line

const Content1 = ({ className = "" }) => {
  const location = useLocation();
  const results = location.state?.results || [];
  const error = location.state?.error || "";

  console.log("Catlogresults------>>>>>", results);
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.125rem] text-dark-blue font-p-18-bold ${className}`}
    >
      <div className="w-[82.5rem] flex flex-col items-start justify-start gap-[2.5rem] max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[6.5rem] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-center gap-[0.625rem]">
              <div className="flex-1 rounded box-border flex flex-row items-start justify-start pt-[0.562rem] px-[0.937rem] pb-[0.687rem] gap-[0.5rem] min-w-[9.688rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="h-[3.125rem] w-[14.938rem] relative rounded box-border hidden border-[1.5px] border-solid border-lavender-300" />
                <div className="relative leading-[1.625rem] font-extrabold z-[2]">
                  Product Category
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
              <div className="flex-1 rounded box-border flex flex-row items-start justify-start pt-[0.562rem] px-[0.937rem] pb-[0.687rem] gap-[0.5rem] min-w-[9.688rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="relative leading-[1.625rem] font-extrabold z-[2]">
                  Manufacturer
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
              <div className="rounded flex flex-row items-start justify-start pt-[0.562rem] px-[0.937rem] pb-[0.687rem] gap-[0.562rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="h-[3.125rem] w-[9.875rem] relative rounded box-border hidden border-[1.5px] border-solid border-lavender-300" />
                <div className="relative leading-[1.625rem] font-extrabold inline-block min-w-[6.688rem] z-[2]">
                  Brand Name
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
              <div className="rounded flex flex-row items-start justify-start pt-[0.562rem] px-[0.937rem] pb-[0.687rem] gap-[0.5rem] z-[1] border-[1.5px] border-solid border-lavender-300">
                <div className="h-[3.125rem] w-[11.313rem] relative rounded box-border hidden border-[1.5px] border-solid border-lavender-300" />
                <div className="relative leading-[1.625rem] font-extrabold z-[2]">
                  Date Published
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                  <img
                    className="w-[0.563rem] h-[0.313rem] relative z-[2]"
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.625rem]">
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
          <div className="w-[25rem] rounded-23xl box-border flex flex-row items-start justify-between py-[0rem] pr-[0.25rem] pl-[1rem] max-w-full gap-[1.25rem] z-[1] border-[2px] border-solid border-lavender-300">
            <div className="self-stretch w-[25rem] relative rounded-23xl box-border hidden max-w-full border-[2px] border-solid border-lavender-300" />
            <input
              className="w-[4.875rem] [border:none] [outline:none] bg-[transparent] h-[2.375rem] flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem] box-border font-p-18-bold font-bold text-[1.125rem] text-darkslateblue-300 [text-shadow:1px_0_0_#f9fafe,_0_1px_0_#f9fafe,_-1px_0_0_#f9fafe,_0_-1px_0_#f9fafe]"
              placeholder="Ai search"
              type="text"
            />
            <div className="h-[3.125rem] w-[3.125rem] relative rounded-32xl bg-dark-blue z-[2]">
              <div className="absolute top-[0rem] left-[0rem] rounded-32xl bg-dark-blue w-full h-full hidden" />
              <img
                className="absolute top-[0.938rem] left-[0.938rem] w-[1.25rem] h-[1.25rem] z-[3]"
                alt=""
                src="/icon-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[1.825rem] max-w-full text-dimgray-100">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            alt=""
            src="/vector-61.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.375rem] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
              <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                <div className="relative z-[1]">
                  <span className="leading-[1.625rem] font-semibold">
                    5+ Results for
                  </span>
                  <b className="text-[1rem] leading-[1.25rem] text-dimgray-200">{` `}</b>
                  <span className="leading-[1.625rem] font-extrabold text-dark-blue">{`{Searched Keyword}`}</span>
                </div>
              </div>
              <div className="w-[15.688rem] flex flex-row items-start justify-start gap-[0.625rem] text-right text-dark-blue">
                <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                  <b className="relative leading-[1.625rem] inline-block min-w-[4.25rem] z-[1]">
                    Sort By:
                  </b>
                </div>
                <div className="flex-1 rounded bg-lavender-100 flex flex-row items-start justify-start py-[0.437rem] px-[0.625rem] gap-[0.562rem] z-[1]">
                  <div className="h-[2.5rem] w-[10.813rem] relative rounded bg-lavender-100 hidden" />
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
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.606rem] max-w-full text-dark-blue">
              <div className="self-stretch rounded-lg bg-blue flex flex-row items-start justify-between pt-[1.375rem] pb-[1.312rem] pr-[1.25rem] pl-[5.125rem] box-border max-w-full gap-[1.25rem] z-[1] text-[1.25rem] text-white-color font-h5-22-bold">
                <div className="h-[4.313rem] w-[82.5rem] relative rounded-lg bg-blue hidden max-w-full" />
                <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                  <div className="relative leading-[1.5rem] font-extrabold inline-block min-w-[3.938rem] z-[2]">
                    Profile
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[9.75rem] max-w-full text-center">
                  <div className="flex flex-col items-start justify-start pt-[0.062rem] pb-[0rem] pr-[2rem] pl-[0rem]">
                    <div className="relative leading-[1.5rem] font-extrabold z-[2]">
                      Manufacturer
                    </div>
                  </div>
                  <div className="relative leading-[1.5rem] font-extrabold inline-block min-w-[5.5rem] z-[2]">
                    Category
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] text-left">
                    <div className="relative leading-[1.5rem] font-extrabold inline-block min-w-[7.063rem] z-[2]">
                      Available at
                    </div>
                  </div>
                </div>
              </div>
        

              <div className=" w-full flex flex-col gap-[1.25rem]">
                {results.length > 0 ? (
                  results.map((product) => (
                    <div
                      key={product.id}
                      className="self-stretch w-full flex flex-row items-start hover:shadow-[0px_4px_4px_-1px_rgba(12,_12,_13,_0.1),_0px_4px_4px_-1px_rgba(12,_12,_13,_0.05)] hover:bg-white-color justify-between py-[0rem] pr-[1.125rem] pl-[0rem] box-border relative max-w-full gap-[1.25rem]"
                    >
                      <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-md bg-whitesmoke z-[1]" />
                      <div className="flex flex-row items-start justify-start gap-[1.375rem] max-w-full">
                        <img
                          className="h-[3.75rem] w-[3.75rem] relative rounded-md object-cover z-[2]"
                          loading="lazy"
                          alt={product.title}
                          src={product.imageUrl}
                        />
                        <div className="flex flex-col items-start justify-start pt-[1.062rem] px-[0rem] pb-[0rem]">
                          <b className="relative leading-[1.625rem] z-[2]">
                            {product.title.length > 40
                              ? `${product.title.substring(0, 40)}...`
                              : product.title}{" "}
                          </b>
                        </div>
                      </div>
                      <div className="w-[40.313rem] flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem] box-border max-w-full text-center">
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                          <div className="w-[12.375rem] flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border">
                            <b className="relative leading-[1.625rem] inline-block min-w-[4.125rem] z-[2]">
                              {product.brand}
                            </b>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem]">
                            <b className="relative leading-[1.625rem] inline-block min-w-[5.75rem] z-[2]">
                              {product.category?.[0]?.name ||
                                "Unknown Category"}
                            </b>
                          </div>{" "}
                      
                          <button className="cursor-pointer py-[0.312rem] px-[1.187rem] bg-[transparent] rounded-35xl overflow-hidden flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-orange hover:bg-orange hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100">
                              <div className="relative text-[1.313rem] leading-[1.625rem] font-semibold font-h5-22-bold text-dark-blue text-center inline-block min-w-[4.938rem]">
                                Amazon
                              </div>
                            </button>
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
