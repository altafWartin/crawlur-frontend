import React from 'react';

const ProductInformation = () => {
    return (
        <div className="relative flex justify-center items-center pb-16 bg-accent w-full">

            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ecfef92db5bc51c043d5d0fd2fac79591f15207351808135e8f837d0a6dba15?apiKey=b84dd30bad284682bdd2468de5480c9b"
                className="absolute top-[40rem] right-16 w-9 z-10"
            />
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fead0fe6d2dab3dc18900e8a24c5509389fdbda1eca7ea9ad78085ec7787445?apiKey=b84dd30bad284682bdd2468de5480c9b"
                className="shrink-0 w-9 top-28 left-24 absolute aspect-[0.88] fill-yellow-400"
            />
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc12622fa7b3a53ee2b1c250c5ec3d1bb606b3d5325170561c7622689cec89f4?apiKey=b84dd30bad284682bdd2468de5480c9b"
                className="right-16 top-28 absolute  w-[4rem] h-[6.5rem]"
            />

            <div className="container px-[12rem] flex flex-col items-center justify-center    ">

                <h1 className=" text-dark-blue text-center mt-[4rem] font-Outfit text-[2.1rem] desktop:[2.5rem]">
                    Other Product Information
                </h1>

                <div className="  flex   items-center justify-center  text-lg font-bold leading-7 text-center text-slate-500 ">

                    <div className=" font-Nunito w-[77%]  text-[1rem] desktop:text-[1.125rem]  ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </div>

                </div>

                <div className="flex flex-col justify-center w-full max-w-[1351px] mt-6">
                    <div className="flex flex-col items-start p-6 bg-white rounded-lg border-2 border-sky-200">
                        <div className="flex gap-5 text-2xl leading-6">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f054c47825575f3442def5a959e4a0dccce2aa1f49562d7ef9b3f69bf2f346?apiKey=b84dd30bad284682bdd2468de5480c9b"
                                className="shrink-0 aspect-square w-[25px] desktop:w-[30px] "
                            />
                            <div className="flex-auto font-Outfit text-[1.1rem] desktop:text-[1.375] my-auto">Manufacturer Info</div>
                        </div>
                        <div className="mt-8 text-lg leading-6 font-Nunito text-center">
                            Information Here
                        </div>
                    </div>

                    <div className="flex flex-col items-start p-6 mt-2.5 bg-white rounded-lg">
                        <div className="flex gap-5 text-2xl leading-6">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f054c47825575f3442def5a959e4a0dccce2aa1f49562d7ef9b3f69bf2f346?apiKey=b84dd30bad284682bdd2468de5480c9b"
                                className="shrink-0 aspect-square w-[25px] desktop:w-[30px] "
                            />
                            <div className="flex-auto font-Outfit text-[1.1rem] desktop:text-[1.375] my-auto">Product Documents</div>
                        </div>
                        <div className="flex gap-3 mt-5 text-[1rem] font-Nunito desktop:text-[1.25rem] font-bold leading-6 text-center whitespace-nowrap max-md:flex-wrap">
                            <div className="flex gap-2 justify-center items-center  text-white  bg-dark-blue  rounded-[62px] px-5 py-2 desktop:px-8 desktop:py-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f560e7f046d9442cddfae88f1c726abb5bf33c286124ba1aaaba4abda53e9ed?apiKey=b84dd30bad284682bdd2468de5480c9b"
                                    className=""
                                />
                                <div className="">PDF</div>
                            </div>
                            <div className="flex gap-2 justify-center  bg-white border-[1.5px] border-solid border-dark-blue rounded-[62px] px-4 py-1 desktop:px-8 desktop:py-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/928076b020cf7eea2a1a27338b83f9c074b9d92d54ac03d03c7adff1f314e8c9?apiKey=b84dd30bad284682bdd2468de5480c9b"
                                    className=""
                                />
                                <div className='text-dark-blue flex items-center'>Manuals</div>
                            </div>
                            <div className="flex gap-2 justify-center  bg-white border-[1.5px] border-solid border-dark-blue rounded-[62px] px-4 py-1 desktop:px-8 desktop:py-3">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f61b0226f2c5efd0faeaca42dd16c197e7e372a90d6bf6f1a43d6fd0e990e78?apiKey=b84dd30bad284682bdd2468de5480c9b"
                                    className=""
                                />
                                <div className='text-dark-blue flex items-center'>Tutorials</div>
                            </div>
                        </div>

                    </div>

                    <div className="flex gap-5 p-6 mt-2.5 text-2xl font-semibold leading-6 whitespace-nowrap bg-white rounded-lg">
                        <div className="flex gap-5 text-2xl leading-6">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f054c47825575f3442def5a959e4a0dccce2aa1f49562d7ef9b3f69bf2f346?apiKey=b84dd30bad284682bdd2468de5480c9b"
                                className="shrink-0 aspect-square w-[25px] rotate-180 desktop:w-[30px] "
                            />
                            <div className="flex-auto font-Outfit text-[1.1rem] desktop:text-[1.375] my-auto">Sources</div>
                        </div>
                    </div>

                    <div className='w-full flex justify-center'>


                        <div className="flex  justify-center  mt-16 max-w-full  font-semibold  w-full ">
                            <div className="gap-0 ">
                                <div className='flex justify-center'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[5rem] h-[5rem]   desktop:w-[6rem] desktop:h-[6rem]"
                                            viewBox="0 0 110 110" fill="none">
                                            <g filter="url(#filter0_d_411_1080)">
                                                <circle cx="55" cy="51" r="35" fill="#DFFFF2" />
                                                <circle cx="55" cy="51" r="34.5" stroke="#29E59A" />
                                            </g>
                                            <path d="M47.6209 49.4999L53.7177 36C54.9304 36 56.0934 36.4741 56.951 37.318C57.8085 38.1619 58.2902 39.3065 58.2902 40.5V46.4999H66.9171C67.359 46.495 67.7967 46.5847 68.1998 46.7628C68.603 46.9408 68.962 47.203 69.2519 47.5312C69.5419 47.8594 69.7559 48.2457 69.8791 48.6633C70.0023 49.0809 70.0318 49.5199 69.9655 49.9499L67.8621 63.4498C67.7519 64.1652 67.3826 64.8172 66.8225 65.2858C66.2623 65.7544 65.5489 66.008 64.8137 65.9998H47.6209M47.6209 49.4999V65.9998M47.6209 49.4999H43.0484C42.2399 49.4999 41.4645 49.816 40.8928 50.3786C40.3212 50.9412 40 51.7043 40 52.4999V62.9998C40 63.7955 40.3212 64.5585 40.8928 65.1211C41.4645 65.6837 42.2399 65.9998 43.0484 65.9998H47.6209" stroke="#29E59A" stroke-width="4" />
                                            <defs>
                                                <filter id="filter0_d_411_1080" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="10" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.87451 0 0 0 0 1 0 0 0 0 0.94902 0 0 0 1 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_411_1080" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_411_1080" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[5rem] h-[5rem]   desktop:w-[6rem] desktop:h-[6rem]"
                                            viewBox="0 0 110 110" fill="none">
                                            <g filter="url(#filter0_d_411_1081)">
                                                <circle cx="55" cy="51" r="35" fill="#FFEAE7" />
                                                <circle cx="55" cy="51" r="34.5" stroke="#FF887D" />
                                            </g>
                                            <path d="M62.3791 52.5002L56.2823 66C55.0696 66 53.9066 65.5259 53.049 64.682C52.1915 63.8381 51.7098 62.6935 51.7098 61.5001V55.5002H43.0829C42.641 55.5051 42.2033 55.4154 41.8002 55.2374C41.397 55.0593 41.038 54.7971 40.7481 54.4689C40.4581 54.1408 40.2441 53.7545 40.1209 53.3369C39.9977 52.9192 39.9682 52.4802 40.0345 52.0503L42.1379 38.5505C42.2481 37.8351 42.6174 37.1831 43.1775 36.7145C43.7377 36.2459 44.4511 35.9924 45.1863 36.0005H62.3791M62.3791 52.5002V36.0005M62.3791 52.5002H66.4486C67.3113 52.5153 68.1495 52.218 68.8041 51.665C69.4588 51.112 69.8844 50.3417 70 49.5003V39.0005C69.8844 38.1591 69.4588 37.3888 68.8041 36.8358C68.1495 36.2827 67.3113 35.9855 66.4486 36.0005H62.3791" stroke="#FF887D" stroke-width="4" />
                                            <defs>
                                                <filter id="filter0_d_411_1081" x="0" y="0" width="110" height="110" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                    <feOffset dy="4" />
                                                    <feGaussianBlur stdDeviation="10" />
                                                    <feComposite in2="hardAlpha" operator="out" />
                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.917647 0 0 0 0 0.905882 0 0 0 1 0" />
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_411_1081" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_411_1081" result="shape" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>


                                </div>
                                <div className=" font-Outfit text-[1.375rem] text-dark-blue">Feedback Text Here</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;
