import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchLastRecentProducts } from "../../api/api"; // Adjust the import path
import Lottie from "lottie-react";
import loadinggg from "../../assets/Animation - 1725965270267.json";

const RecentlyProduct = () => {
    const { t } = useTranslation();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log("products------", products);

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            try {
                const data = await fetchLastRecentProducts();
                setProducts(data.data); // Assuming products are in `data.data`
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getProducts();
    }, []);

    return (
        <div className="w-full  flex justify-center pb-5  px-1">
            <section className=" w-full  desktop:max-w-[95rem]  laptop:max-w-[70rem]  rounded-none  laptop:rounded-[2rem]  pb-10 text-left text-[1rem] mobile:text-[1.25rem] tablet:text-[1.5rem] text-dark-blue  bg-gradient-to-b from-custom-blue to-custom-white flex items-center justify-center">
                <div className="container flex flex-col self-stretch px-3 laptop:px-1 mobile:px-8 tablet:px-[5rem] md:flex-row items-start justify-start  box-border w-full">
                    <div className="flex self-stretch flex-col items-center justify-center gap-[0.2rem] w-full">
                        <div className="w-full ">


                            <div className="w-full flex items-center mt-6 justify-center laptop:justify-between ">
                                <h1 className="text-[#0E275D] font-[Outfit] font-bold 
                                              mobile:text-[0.8rem] mobile:leading-[0.8rem] 
                                        laptop:text-[1.5rem] laptop:leading-[1.5rem] 
                                            desktop:text-[2rem] desktop:leading-[2rem]"
                                >
                                    {t("recentlyAddedProducts")}
                                </h1>

                                <hr className="hidden mobile:block border-t-2 border-gray-300 flex-grow mx-4 opacity-20" />

                                <button
                                    className="hidden mobile:block px-[27px] py-[8px] text-[1.25rem] laptop:text-[1rem]
                                             bg-transparent rounded-full border border-[#0E275D] text-[#0E275D] font-Nunito font-bold"
                                    style={{ border: "1px solid #0E275D" }}
                                >
                                    {t("viewAll")}
                                </button>
                            </div>
                        </div>

                        {/* List Header */}
                        <div className="self-stretch  flex flex-col items-start justify-start gap-[0.606rem] max-w-full  desktop:text-lg laptop:text-base  font-p-18-bold">
                            <div className="self-stretch rounded-lg bg-blue font-Outfit flex flex-row items-center justify-between py-4 pl-3 pr-5 box-border max-w-full gap-4  font-outfit font-extrabold text-white">
                                {/* Profile Name */}
                                <div className="w-full laptop:w-1/2 flex flex-row items-center gap-[1.375rem] ml-[2.9rem] justify-center mobile:items-center laptop:justify-start mobile:text-center laptop:text-left">
                                    Profile name
                                </div>


                                {/* Manufacturer and Available At */}
                                <div className="w-1/2 hidden laptop:flex flex-row items-center justify-end gap-[9.4rem] text-center">
                                    <div className="flex flex-col items-center">
                                        <div className="leading-[1.5rem] font-extrabold">
                                            {t("manufacturer")}
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <div className="leading-[1.5rem] font-extrabold">
                                            {t("availableAt")}
                                        </div>
                                    </div>
                                </div>
                            </div>




                            {loading && (
                                <div className="flex items-center justify-center w-full h-[10rem]">
                                    <Lottie
                                        animationData={loadinggg}
                                        loop={true}
                                        style={{ width: 100, height: 100 }}
                                    />
                                </div>
                            )}
                            {error && <p>Error: {error}</p>}
                            {!loading && !error && products.length > 0 ? (
                                products.slice(0, 6).map((product, index) => (
                                    <div
                                    key={index}
                                    className="group self-stretch rounded-md bg-[#F1F1F2] hover:bg-white flex flex-row font-semibold hover:font-extrabold items-center hover:shadow-md justify-between pr-4 pl-0 box-border max-w-full gap-4 text-center transition-colors duration-300"
                                  >
                                    <Link
                                      to={`/product/${product.product.asin}`}
                                      className="flex no-underline text-dark-blue flex-row items-start justify-start py-0 pl-0 box-border gap-[1.375rem] max-w-full text-left"
                                    >
                                      <div className="flex flex-row items-center justify-center">
                                        <img
                                          className="w-[40px] h-[38px] object-contain border-[1.5px] border-solid border-[gray] border-opacity-20 rounded-md transition-all duration-300 group-hover:border-[#0E275D] group-hover:border-[1.5px] group-hover:opacity-100"
                                          loading="lazy"
                                          alt={product.product.title}
                                          src={product.product.images_flat}
                                        />
                                  
                                        {/* This div will only show on laptops */}
                                        <div className="hidden laptop:block w-[30rem] ml-[1.1rem] border-2 box-border max-w-full">
                                          {product.product.title.length > 45
                                            ? `${product.product.title.substring(0, 45)}...`
                                            : product.product.title}
                                        </div>
                                  
                                        {/* This div will only show on mobile */}
                                        <div className="block laptop:hidden w-[20rem] ml-3 border-2">
                                          {product.product.title.length > 34
                                            ? `${product.product.title.substring(0, 34)}...`
                                            : product.product.title}
                                        </div>
                                      </div>
                                    </Link>
                                  
                                    <div className="w-full hidden laptop:flex flex-row items-center justify-end gap-24 max-w-full text-center">
                                      <div className="w-[12rem] flex flex-col items-center justify-center">
                                        <div className="flex flex-col items-center justify-center leading-12">
                                          {product.product.manufacturer ||
                                            product.product.brand ||
                                            "-"}
                                        </div>
                                      </div>
                                  
                                      <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cursor-pointer no-underline py-[0.312rem] text-dark-blue px-[0.2rem] bg-[#FFA41C] hover:bg-transparent rounded-35xl overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-orange group-hover:bg-transparent group-hover:border-chocolate-100 transition-colors duration-300"
                                      >
                                        <div className="desktop:text-lg laptop:text-base desktop:leading-[1.625rem] laptop:leading-[1.125rem] desktop:px-5 laptop:px-2 font-semibold font-h5-22-bold text-dark-blue text-center inline-block min-w-[4.938rem]">
                                          Amazon
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  
                                ))
                            ) : (
                                <div className="flex items-center justify-center h-full w-full">
                                    <p className="text-center">{t("noProductsFound")}</p>
                                </div>
                            )}
                        </div>
                        <button
                            className="block mobile:hidden my-5 px-[27px] py-[11px] text-[1.25rem] 
    bg-transparent rounded-full border border-[#0E275D] text-[#0E275D] font-Nunito font-bold"
                            style={{ border: "1px solid #0E275D" }}
                        >
                            {t("viewAll")}
                        </button>

                    </div>
                </div>
            </section>
        </div>


    );
};

export default RecentlyProduct;
