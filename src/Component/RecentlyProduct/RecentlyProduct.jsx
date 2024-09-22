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
        <section className=" h-[37rem] self-stretch md:h-[40rem] mx-[8rem] flex flex-col mt-6 mx-4 sm:mx-8 lg:mx-16 xl:mx-32 items-center justify-start px-4 sm:px-8 lg:px-[5rem] rounded-[2rem] pb-10 text-left text-[1rem] sm:text-[1.25rem] md:text-[1.5rem] text-dark-blue font-h5-22-bold bg-gradient-to-b from-custom-blue to-custom-white">
            <div className="flex flex-col self-stretch px-[5rem] md:flex-row items-start justify-start pt-2 box-border w-full text-left text-[1.5rem] md:text-[2rem] text-dark-blue">
                <div className="flex-1 flex  self-stretch flex-col items-start justify-start gap-[0.2rem] w-full">
                    <div className="w-full flex flex-col items-center justify-start mt-8">
                        {" "}
                        <div className="w-full flex flex-row items-center justify-between">
                            <h1 className="
  text-[#0E275D] 
  font-[Outfit] 
  font-bold 
  text-[1.5rem]           
  leading-[2.125rem]      

  smallMobile:text-[1.75rem]  
  smallMobile:leading-[2rem]

  mobile:text-[2rem]         
  mobile:leading-[2.25rem]

  tablet:text-[2.25rem]      
  tablet:leading-[2.5rem]

  laptop:text-[2.5rem]       
  laptop:leading-[2.75rem]

  desktop:text-[3rem]        
  desktop:leading-[3.25rem]
">
                                {t("recentlyAddedProducts")}
                            </h1>


                            <h1 className="text-[20px] py-1 rounded-lg flex-shrink-0 ">
                                {t("recentlyAddedProducts")}
                            </h1>

                            <hr className="border-t-2 border-gray-300 flex-grow mx-4 opacity-20" />

                            <button className="cursor-pointer py-[0.2rem] px-6 bg-transparent shadow-md rounded-full border border-dark-blue hover:bg-steelblue-200 hover:border-steelblue-100 flex items-center justify-center whitespace-nowrap flex-shrink-0">
                                <b className="text-[0.75rem] leading-[1.75rem] font-bold text-dark-blue text-center">
                                    {t("viewAll")}
                                </b>
                            </button>
                        </div>
                    </div>

                    {/* List Header */}
                    <div className="self-stretch  text-[0.8rem] flex flex-col  items-start justify-start gap-[0.606rem] max-w-full text-[14px] font-p-18-bold">
                        <div className="self-stretch rounded-lg bg-blue flex flex-row items-start justify-between py-3  box-border max-w-full gap-[1.25rem] z-[2] font-outfit font-extrabold leading-[16px] text-white-color font-h5-22-bold">
                            <div className="flex flex-row items-start justify-start gap-[1.375rem] max-w-full text-center">
                                <div className="relative leading-[1.5rem] pl-[3rem] font-extrabold text-left inline-block min-w-[7.063rem] z-[3]">
                                    {/* {t("productName")} */}
                                    Profile name
                                </div>
                            </div>
                            <div className="flex flex-row items-end justify-end gap-[7.2rem] max-w-full text-center">
                                <div className="relative leading-[1.5rem] font-extrabold z-[3]">
                                    {t("manufacturer")}
                                </div>
                                <div className="relative leading-[1.5rem] font-extrabold text-left inline-block min-w-[6.063rem] z-[3]">
                                    {t("availableAt")}
                                </div>
                            </div>
                        </div>

                        {loading && (
                            <div className="flex items-center justify-center w-full h-[10rem]">
                                {/* Loading Spinner */}
                                <Lottie
                                    animationData={loadinggg}
                                    loop={true}
                                    style={{ width: 100, height: 100 }}
                                />
                            </div>
                        )}
                        {error && <p>Error: {error}</p>}
                        {!loading && !error && products.length > 0 ? (
                            products.map((product, index) => (
                                <div
                                    key={index}
                                    className="group self-stretch rounded-md  bg-[#F2F1F1] hover:bg-white flex flex-row font-semibold hover:font-extrabold items-center hover:shadow-md justify-between py-0 pr-4 pl-0 box-border max-w-full gap-4 z-2 text-center"
                                >
                                    <Link
                                        to={`/product/${product.product.asin}`}
                                        className="flex no-underline text-dark-blue flex-row items-start justify-start py-0 pl-0 box-border gap-[1.375rem] max-w-full text-left"
                                    >
                                        <div className="flex flex-row items-start justify-center">
                                            <img
                                                className="h-10 w-10 py-1 relative rounded-md object-cover z-3"
                                                loading="lazy"
                                                alt={product.product.title}
                                                src={product.product.images_flat}
                                            />
                                            <div className="w-96 flex ml-3 mt-3 border-2 flex-col items-start justify-center px-0 pb-0 box-border max-w-full">
                                                <div className="relative leading-7 z-3">
                                                    {product.product.title.length > 45
                                                        ? `${product.product.title.substring(0, 45)}...`
                                                        : product.product.title}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="w-full flex flex-row items-center justify-end gap-24 max-w-full text-center">
                                        <div className="w-[8rem] flex  flex-col items-center justify-center">
                                            <div className="flex flex-col items-center justify-center leading-12 z-3">
                                                {product.product.manufacturer ||
                                                    product.product.brand ||
                                                    "-"}
                                            </div>
                                        </div>

                                        <a
                                            href={product.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cursor-pointer no-underline py-[0.312rem] text-dark-blue px-[0.2rem] bg-[transparent] rounded-35xl overflow-hidden flex flex-row items-center justify-center z-[2] border-[1px] border-solid border-orange bg-orange group-hover:bg-transparent group-hover:border-chocolate-100"
                                        >
                                            <div className="relative text-[0.9rem] leading-[1.025rem] font-semibold font-h5-22-bold text-dark-blue text-center inline-block min-w-[4.938rem]">
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
                </div>
            </div>
        </section>
    );
};

export default RecentlyProduct;
