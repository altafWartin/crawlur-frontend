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
        <div className="w-full h-auto shrink-0 border-[#F5F5F5]   shadow-[3px_3px_1.5px_0px_rgba(173,173,173,0.25)] border-[2px] border-solid rounded-3xl laptop:bg-white-color mobile:bg-transparent box-border flex flex-col items-start justify-start pb-[1rem] px-[1.75rem] gap-[2.062rem] min-w-[19.813rem] max-w-full  ">
            <div className="w-full self-stretch flex flex-col items-start justify-center gap-[0.875rem]">
                <div className="w-full self-stretch flex flex-col items-start justify-center">
                    <h1 className="flex flex-col items-start justify-start text-[#0E275D] text-center laptop:text-start 
    [font-family:Outfit] 
    text-[2.5rem] 
    font-bold 
    leading-[2.625rem] 
    laptop:text-[2rem] 
    laptop:leading-[2.625rem] 
    mobile:text-[1.625rem] 
    mobile:leading-[2.125rem] 
    mobile:text-center 
    desktop:text-[2.5rem] 
    desktop:leading-[2.625rem]">
                        {data.title.length > 45
                            ? `${data.title.substring(0, 45)}...`
                            : data.title}
                    </h1>


                    <b className="text-[color:var(--Grey,#5D6D80)] [font-family:Nunito] text-center mobile:text-center 
    laptop:text-start 
    text-[1rem] 
    mobile:text-[1rem] 
    laptop:text-[1.125rem] 
    leading-[1.625rem] 
    mobile:leading-[1.625rem] 
    font-bold">
                        {data.specifications_flat.length > 200
                            ? `${data.specifications_flat.substring(0, 200)}...`
                            : data.specifications_flat}
                    </b>

                </div>
                <div className='flex gap-4'>
                    <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer font-Outfit no-underline text-dark-blue  bg-[#FFA41C] rounded-34xl hover:border-solid hover:border-[1px] hover:border-orange
        hover:bg-transparent py-2 px-4 text-center 
        mobile:text-[1rem] laptop:text-[1.125rem] desktop:text-[1.3125rem] desktop:leading-[1.625rem] 
     font-bold"
                    >
                        Amazon
                    </a>
                    <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer font-Outfit no-underline text-dark-blue font-bold  rounded-34xl border-solid border-[1px] border-orange
        bg-transparent py-2 px-4  text-center
        mobile:text-[1rem] laptop:text-[1.125rem] desktop:text-[1.3125rem] desktop:leading-[1.625rem] 
         "
                    >
                        Amazon
                    </a>
                </div>


            </div>


            <div className="self-stretch h-auto bg-white rounded-sm box-border flex flex-col items-start justify-start gap-[0.35rem] max-w-full  text-[1.125rem] text-dimgray border-[1.5px] border-solid border-darkslateblue-200">
                {/* Product Info Section */}
                <div className="self-stretch p-3 h-auto relative max-w-full">
                    <div className="w-full py-2 flex flex-col items-start justify-start gap-[0.843rem] max-w-full">
                        {/* Product Info Header */}
                        <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
                            <div className="flex flex-col items-start justify-start">
                                <b className="text-[1rem] laptop:text-[1.1rem] desktop:text-[1.312rem] leading-[1.5rem] font-Outfit text-[#0E275D]  font-bold">
                                    Product Info
                                </b>
                            </div>
                            <img className="h-[1rem] w-[1rem] object-contain" alt="" src="/group-631@2x.png" />
                        </div>

                        {/* Category and Image */}
                        <div className="flex  flex-col items-start justify-start gap-[0.5rem] w-full">
                            {/* Display Category */}
                            <div className="text-[1rem] laptop:text-[1rem] desktop:text-[1.125rem] text-[#4D5B6C] border-b-[1.5px] border-solid border-opacity-30 border-gray-300 pb-2 font-Nunito font-semibold leading-[1.625rem]">
                                <span className="font-extrabold">Category: </span>
                                {data.bestsellers_rank && data.bestsellers_rank[0]?.category ? (
                                    <span className="font-semibold text-[#5D6D80]">
                                        {data.bestsellers_rank[0].category}
                                    </span>
                                ) : (
                                    <span className="font-semibold text-grey">N/A</span>
                                )}
                            </div>

                        </div>

                        {/* Specifications */}
                        <div className="pb-4 border-b-[1.5px] border-solid border-opacity-30 border-gray-300 w-full">
                            <div className="text-[1rem] laptop:text-[1rem] desktop:text-[1.125rem] text-[#4D5B6C] h-[130px] overflow-y-auto font-Nunito font-semibold leading-[1.625rem] hide-scrollbar custom-scrollbar">
                                {data.specifications.map((spec, index) => (
                                    <p key={index} className="m-0">
                                        <span className="font-extrabold text-[#4D5B6C]">
                                            {spec.name}:
                                        </span>
                                        {" "}
                                        <span className="font-semibold text-[#5D6D80]">
                                            {spec.value}
                                        </span>
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Additional Info Section */}
                        <div className="w-full pb-3 border-b-[1.5px] border-solid border-opacity-30 border-gray-300 flex   justify-between items-center">
                            <b className="text-[1rem] laptop:text-[1.1rem] desktop:text-[1.312rem] leading-[1.5rem] font-Outfit text-[#0E275D]  font-bold">
                                Additional Info
                            </b>
                            <img className="h-[1rem] w-[1rem] object-contain " alt="" src="/group-631@2x.png" />
                        </div>

                        {/* Product Links Section */}
                        <div className="w-full  flex  justify-between items-center">
                            <b className="text-[1rem] laptop:text-[1.1rem] desktop:text-[1.312rem] leading-[1.5rem] font-Outfit text-[#0E275D]  font-bold">
                                Product Links
                            </b>
                            <img className="h-[1rem] w-[1rem] object-contain " alt="" src="/group-631@2x.png" />
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductDetails;
