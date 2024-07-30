import React from 'react';

const ProductInformation = () => {
    return (
        <div className="flex justify-center items-center bg-accent background: var(--Accent, #EDF7FF); py-20 mt-0 w-full bg-blue-50 text-blue-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col items-center mt-2 mb-1 w-full max-w-[1525px] max-md:max-w-full">
                <h1 className="text-dark-blue text-center font-h3-40-bold max-md:max-w-full">
                    Other Product Information
                </h1>


                <div className="flex gap-5 items-start self-stretch mt-6 text-lg font-bold leading-7 text-center text-slate-500 max-md:flex-wrap max-md:max-w-full">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fead0fe6d2dab3dc18900e8a24c5509389fdbda1eca7ea9ad78085ec7787445?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
                        className="shrink-0 mt-1 w-10 aspect-[0.88] fill-yellow-400"
                    />
                    <div className=" w-[769px] flex-auto mt-3 max-md:max-w-full">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc12622fa7b3a53ee2b1c250c5ec3d1bb606b3d5325170561c7622689cec89f4?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
                        className="shrink-0 self-stretch aspect-[0.83] w-[89px]"
                    />
                </div>
                <div className="flex flex-col w-full max-w-[1351px] max-md:max-w-full">
                    <div className="flex flex-col items-start pt-6 pr-20 pb-11 pl-7 font-semibold bg-white rounded-lg border-2 border-sky-200 border-solid max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 text-2xl leading-6">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f054c47825575f3442def5a959e4a0dccce2aa1f49562d7ef9b3f69bf2f346?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
                                className="shrink-0 aspect-square w-[30px]"
                            />
                            <div className="flex-auto my-auto">Manufacturer Info</div>
                        </div>
                        <div className="mt-8 ml-11 text-lg leading-6 text-center max-md:ml-2.5">
                            Information Here
                        </div>
                    </div>
                    <div className="flex flex-col items-start py-7 pr-20 pl-7 mt-2.5 bg-white rounded-lg max-md:px-5 max-md:max-w-full">
                        <div className="flex gap-5 text-2xl font-semibold leading-6">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8f054c47825575f3442def5a959e4a0dccce2aa1f49562d7ef9b3f69bf2f346?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
                                className="shrink-0 aspect-square w-[30px]"
                            />
                            <div className="flex-auto my-auto">Product Documents</div>
                        </div>
                        <div className="flex gap-3 mt-5 ml-14 text-lg font-bold leading-6 text-center whitespace-nowrap max-md:flex-wrap max-md:pr-5">
                            <div className="flex gap-2 justify-center px-5 py-1.5 text-white border-2 border-solid bg-blue border-blue-950 rounded-[62px]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f560e7f046d9442cddfae88f1c726abb5bf33c286124ba1aaaba4abda53e9ed?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
                                    className="shrink-0 self-start w-6 aspect-square"
                                />
                                <div>PDF</div>
                            </div>
                            <div className="flex gap-2 justify-center px-5 py-1.5 bg-white border-2 border-solid border-blue-950 rounded-[62px]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/928076b020cf7eea2a1a27338b83f9c074b9d92d54ac03d03c7adff1f314e8c9?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
                                    className="shrink-0 self-start w-6 aspect-square"
                                />
                                <div>Manuals</div>
                            </div>
                            <div className="flex gap-1 justify-center px-3.5 py-1.5 bg-white border-2 border-solid border-blue-950 rounded-[62px]">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f61b0226f2c5efd0faeaca42dd16c197e7e372a90d6bf6f1a43d6fd0e990e78?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
                                    className="shrink-0 self-start w-6 aspect-square"
                                />
                                <div>Tutorials</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-5 p-6 mt-2.5 text-2xl font-semibold leading-6 whitespace-nowrap bg-white rounded-lg max-md:flex-wrap max-md:px-5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cfed6f1eed98dd08c6a8c4ba9a5a31c56484fe7f93838afe0110f546d34c6f4?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
                            className="shrink-0 aspect-square w-[30px]"
                        />
                        <div className="flex-auto my-auto max-md:max-w-full">Sources</div>
                    </div>
                    <div className="flex gap-5 justify-between self-end mt-16 max-w-full text-2xl font-semibold leading-6 text-center w-[851px] max-md:flex-wrap max-md:mt-10">
                        <div className="flex flex-col">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/de7791f05c9245730d49277e6b7ac2e7dc43c3ed31df17ae76757ec4bc7ccf7f?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
                                className="self-center max-w-full aspect-[2.22] w-[155px]"
                            />
                            <div className="mt-6">Feedback Text Here</div>
                        </div>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ecfef92db5bc51c043d5d0fd2fac79591f15207351808135e8f837d0a6dba15?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
                            className="shrink-0 self-start w-11 aspect-square fill-[linear-gradient(180deg,#256FFD_0%,#004FE6_100%)]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;