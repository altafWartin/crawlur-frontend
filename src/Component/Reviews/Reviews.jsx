import React from 'react';

const reviewsData = {
    positive: [
        { id: 1, text: 'The power of this blender is unmatched; it turns everything to a smooth consistency.' },
        { id: 2, text: 'Versatile and reliable, perfect for daily use from morning smoothies to weekend soups.' },
        { id: 3, text: 'The preset functions are a time-saver and foolproof for perfect results every time.' },
        { id: 4, text: 'Worth the investment for those serious about cooking and nutrition.' },
    ],
    negative: [
        { id: 1, text: 'Much louder than expected, especially on the highest settings.' },
        { id: 2, text: 'Takes up more space than anticipated, not ideal for small kitchens.' },
        { id: 3, text: 'The cost can be prohibitive, though it’s a quality investment.' },
    ],
};

const Reviews = () => {
    return (

        <section className="w-full flex flex-col bg-white items-center justify-center  py-10 mb-10 text-center text-dark-blue font-bold">
            <div className='container'>
                <div className='mx-0 mobile:mx-10 laptop:mx-0'>

                    <h1 className="text-[34px] laptop:text-[2rem] desktop:text-[2.5rem] font-Outfit font-bold">Reviews</h1>

                    {/* Flex layout based on screen size */}
                    <div className="w-full flex flex-col laptop:flex-row gap-[2.25rem] laptop:gap-[0.5rem]">

                        {/* Positive Reviews Section */}
                        <div className="flex-1  rounded-3xl flex flex-col items-start justify-start min-w-[20.5rem] max-w-full">
                            <div className="self-stretch rounded-t-xl rounded-b-none bg-dark-blue flex flex-row items-start justify-start pt-[1.875rem] px-[1.625rem] pb-[1.562rem] gap-[1.312rem] max-w-full">
                                <img
                                    className="h-[2.0rem] w-[2.0rem] relative"
                                    alt="Positive Review Icon"
                                    src="/group-837.svg"
                                />
                                <div className="w-[23.5rem] flex flex-col items-start justify-start">
                                    <h3 className="m-0 text-white text-[1.25rem] leading-[2.125rem] font-Outfit  font-bold">Positive Reviews Say</h3>
                                </div>
                            </div>
                            <div
                                className="self-stretch rounded-t-none font-Nunito rounded-b-xl bg-[#FAFBFC] bg-gray flex flex-col items-start justify-start px-[1.625rem] gap-[0.312rem] max-w-full text-dark-blue text-base md:text-lg lg:text-xl font-semibold leading-7"
                            >
                                {reviewsData.positive.map((review) => (
                                    <div
                                        key={review.id}
                                        className="relative flex items-center gap-5 leading-[1rem] font-semibold"
                                    >
                                        <img
                                            className="w-[2.0rem] h-[2.0rem] object-cover"
                                            loading="lazy"
                                            alt="Positive review"
                                            src="/group-861.svg"
                                        />
                                        <p className="flex-grow flex justify-start font-Nunito text-start">{review.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Negative Reviews Section */}
                        <div className="flex-1  rounded-3xl flex flex-col items-start justify-start min-w-[20.5rem] max-w-full">
                            <div className="self-stretch rounded-t-xl rounded-b-none bg-dark-blue flex flex-row items-start justify-start pt-[1.875rem] px-[1.625rem] pb-[1.562rem] gap-[1.312rem] max-w-full">
                                <img
                                    className="h-[2.0rem] w-[2.0rem] relative"
                                    alt="Negative Review Icon"
                                    src="/group-832.svg"
                                />
                                <div className="w-[23.5rem] flex flex-col items-start justify-start">
                                    <h3 className="m-0 text-white text-[1.25rem] leading-[2.125rem] font-Outfit  font-bold">Negative Reviews Say</h3>
                                </div>
                            </div>
                            <div
                                className="self-stretch rounded-t-none font-Nunito bg-[#FAFBFC] rounded-b-xl bg-gray flex flex-col items-start justify-start px-[1.625rem] gap-[1.312rem] max-w-full text-dark-blue text-base md:text-lg lg:text-xl font-semibold leading-7"
                            >
                                {reviewsData.negative.map((review) => (
                                    <div
                                        key={review.id}
                                        className="relative flex items-center gap-5 leading-[1rem] font-semibold"
                                    >
                                        <img
                                            className="w-[2.0rem] h-[2.0rem] object-cover"
                                            loading="lazy"
                                            alt="Negative review"
                                            src="/group-883.svg"
                                        />
                                        <p className="flex-grow flex justify-start font-Nunito text-start">{review.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    );
};

export default Reviews;
