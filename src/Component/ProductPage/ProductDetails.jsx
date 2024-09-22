import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductDetails = (product) => {
    console.log("//-----------;;;';''''''''", product)
    const [data, setData] = useState(null);

    useEffect(() => {
        if (product && product.product) {
            setData(product.product);
        }
    }, [product]);

    console.log(data, 'Product Details');

    if (!data) {
        return <p>No product details available.</p>;
    }   

    return (
        <div className="w-[450px] h-auto shrink-0 border-neutral-100 [background:var(--White-Color,#FFF)] shadow-[3rgba(173,173,173,0.25)22px] border-2 border-solid rounded-3xl bg-white-color box-border flex flex-col items-start justify-start py-[1.375rem] px-[1.75rem] gap-[2.062rem] min-w-[19.813rem] max-w-full z-[1] lg:flex-1 mq825:gap-[1rem] mq825:pt-[1.25rem] mq825:pb-[1.25rem] mq825:box-border mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.875rem]">
                <div className="self-stretch flex flex-col items-start justify-start ">
                    <h1 className="flex flex-col items-start justify-start my-[-20px] mx-[-10px] self-stretch relative text-inherit leading-[2.625rem] font-bold text-[1rem] font-inherit z-[2] laptop:text-[1.5rem] laptop:leading-[1.563rem] laptop:text-[2rem] laptop:leading-[2.125rem]">
                        <p className="flex flex-col items-start justify-start text-[#0E275D] [font-family:Outfit] text-[30px] font-bold leading-[32px]">
                            {data.title.length > 45
                                ? `${data.title.substring(0, 45)}...`
                                : data.title}
                        </p>
                    </h1>
                    <b className=" text-[color:var(--Grey,#5D6D80)]  mx-[-10px]  [font-family:Nunito] text-[15px] font-bold leading-[22px]">
                        {data.specifications_flat.length > 200
                            ? `${data.specifications_flat.substring(0, 200)}...`
                            : data.specifications_flat}
                    </b>
                </div>
                <div className="flex flex-row items-center justify-start">
                    <a
                        href={data.link} target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer no-underline py-[0.212rem] px-[1.087rem] bg-[transparent] rounded-34xl overflow-hidden flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-orange hover:bg-chocolate-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-chocolate-100"
                    >
                        <b className="relative text-[1.113rem] leading-[1.625rem] inline-block font-typography-desktop-h5-22-bold text-dark-blue text-center min-w-[5.063rem] mq450:text-[1.063rem] mq450:leading-[1.313rem]">
                            Amazon
                        </b>
                    </a>
                </div>
            </div>
            {/* Removed fixed height (h-[14.875rem]) to allow dynamic height */}

            <div className="self-stretch h-auto  rounded-sm box-border flex flex-col items-start justify-start pb-[2rem] pr-[1rem] pl-[1.187rem] gap-[0.35rem] max-w-full z-[3] text-[1.125rem] text-dimgray font-typography-desktop-p-18-bold border-[1px] border-solid border-darkslateblue-200">
                <div className="self-stretch h-auto relative max-w-full">
                    <div className="left-[0rem] w-full flex flex-col items-start justify-start gap-[0.843rem] max-w-full">
                        <div className="self-stretch flex mt-3 pt-2 flex-row items-start justify-between gap-[1.25rem] mq450:flex-wrap">
                            <div className="flex flex-col items-start justify-start px-[0rem] pb-[0rem]">
                                <b className="relative text-[15px] leading-[0.5rem] z-[4] mq450:text-[1.063rem] mq450:leading-[1.188rem]">
                                Product Info
                                </b>
                            </div>
                            <img
                                className="h-[1rem] w-[1rem] relative object-contain z-[4]"
                                alt=""
                                src="/group-631@2x.png"
                            />
                        </div>
                        <div className="flex text-[1.013rem] flex-col items-start justify-start gap-[0.5rem]">
                            {/* Display Category */}
                            <div className="text-[color:var(--Grey,#4D5B6C)] [font-family:Nunito] text-[12px] font-semibold leading-[26px] relative leading-[1.625rem] z-[2]">
                                <span className="font-extrabold">
                                    <span>Category:</span>
                                    <span className="text-grey">{` `}</span>
                                </span>
                                {data.bestsellers_rank && data.bestsellers_rank[0] && data.bestsellers_rank[0].category ? (
                                    <span className="font-semibold">{data.bestsellers_rank[0].category}</span>
                                ) : (
                                    <span className="font-semibold text-grey">N/A</span> // Fallback text if no category is available
                                )}
                            </div>

                            {/* Display Image */}
                            <img
                                className="w-[11.25rem] h-[0.063rem] relative z-[4]"
                                alt="Category Icon"
                                src="/category-icon.svg"
                            />
                        </div>

                        <div className="text-[color:var(--Grey,#4D5B6C)] h-[200px] overflow-y-auto [font-family:Nunito] text-[12px] font-semibold leading-[19px] hide-scrollbar">
                        

                            {data.specifications.map((spec, index) => (
                                <p key={index} className="m-0">
                                    <span className="font-extrabold">
                                        {spec.name}:
                                    </span>
                                    <b className="font-typography-desktop-p-18-bold text-grey">{` `}</b>
                                    <span className="font-semibold font-typography-desktop-p-18-bold text-dimgray">
                                        {spec.value}
                                    </span>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductDetails;
