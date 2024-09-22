import React from 'react'

const TopContainer = () => {
    return (
        <div className="flex overflow-hidden flex-col bg-white w-full max-w-[1200px] ">
            <div className="flex z-10 flex-col pb-10 w-full rounded-none">
                <div className="flex flex-col items-center self-center mt-16 w-full max-w-[1200px] max-md:mt-8 max-md:max-w-full">
                    <div className="self-stretch max-md:max-w-full">
                        <div className="flex gap-4 max-md:flex-col">
                            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="self-start px-4 py-2 ml-28 text-lg font-extrabold leading-tight text-center text-white bg-blue-950 rounded-[48px] max-md:ml-2">
                                    Active Beta
                                </div>
                                <div className="flex flex-col w-full text-center max-md:mt-6">
                                    <div className="self-end px-6 pt-8 pb-4 mr-10 max-w-full text-sm font-bold leading-5 bg-white rounded-2xl shadow-[30px_30px_60px_rgba(44,115,180,0.05)] text-blue-950 w-[170px] max-md:px-4 max-md:mr-2">
                                        Limited to
                                        <br />
                                        <span className="font-extrabold">Amazon Products</span>
                                    </div>
                                    <div className="flex items-start mt-28 max-md:mt-8">
                                        <div className="flex flex-col flex-1 px-5 py-6 mt-2 bg-white rounded-3xl shadow-[30px_30px_60px_rgba(44,115,180,0.05)] max-md:px-4">
                                            <div className="self-center text-4xl font-extrabold leading-none bg-clip-text bg-[linear-gradient(180deg,#256FFD_0%,#004FE6_100%)] max-md:text-3xl">
                                                256+
                                            </div>
                                            <div className="mt-1 text-sm font-bold leading-5 text-blue-950">
                                                Profiles Searched
                                                <br />
                                                Today
                                            </div>
                                        </div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/91247c07d4ed5c60acdb00a644b0a4063f7de43e39c9c3a7901531a8fd7f99bd?placeholderIfAbsent=true&apiKey=5d2694d87fa84740890eaa127fb54b8a"
                                            className="object-contain shrink-0 max-w-full aspect-[2.03] stroke-[5px] stroke-yellow-400 w-[160px]"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-4 w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col items-center mt-4 w-full text-lg font-bold max-md:mt-8 max-md:max-w-full">
                                    <div className="text-5xl font-extrabold text-center bg-clip-text bg-[linear-gradient(180deg,#256FFD_0%,#004FE6_100%)] leading-[50px] text-blue-950 max-md:max-w-full max-md:text-3xl max-md:leading-[40px]">
                                        <span className="text-blue-950">Unleashing</span>
                                        <br />
                                        Smart Consumer Data
                                    </div>
                                    <div className="mt-8 leading-6 text-center text-slate-500 max-md:mt-8 max-md:max-w-full">
                                        Discover detailed, consumer-driven profiles with insights
                                        from diverse <br />
                                        sources to help you make confident and informed decisions
                                        with ease.
                                    </div>
                                    <div className="flex flex-wrap gap-4 justify-between self-stretch px-6 py-6 mt-8 font-semibold leading-snug border border-solid bg-slate-50 bg-opacity-30 border-blue-950 rounded-[60px] text-blue-950 max-md:px-4 max-md:max-w-full">
                                        <div className="opacity-60">Search product name or url</div>
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd78cce6c9c4e3e0a7e63c7d4d5da5e78025d760e86e4a327373e24dada5da4b?placeholderIfAbsent=true&apiKey=5d2694d87fa84740890eaa127fb54b8a"
                                            className="object-contain shrink-0 self-start aspect-square stroke-[2px] stroke-blue-950 w-[22px]"
                                        />
                                    </div>
                                    <div className="flex gap-4 mt-8 max-w-full text-lg leading-none text-center whitespace-nowrap w-[270px]">
                                        <div className="overflow-hidden gap-2.5 self-stretch px-6 py-3 text-white bg-blue-700 rounded min-h-[45px] max-md:px-4">
                                            Button
                                        </div>
                                        <div className="overflow-hidden gap-2.5 self-stretch px-6 py-3 text-blue-700 rounded border border-blue-700 border-solid min-h-[45px] max-md:px-4">
                                            Button
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-4 w-3/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col self-stretch my-auto w-full max-md:mt-8">
                                    <div className="flex self-end text-sm font-bold leading-none text-center">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7fbdca367be2497f58a4ba477ed0888490aecad635078dd7a5866ce0e280bbe2?placeholderIfAbsent=true&apiKey=5d2694d87fa84740890eaa127fb54b8a"
                                            className="object-contain shrink-0 max-w-full aspect-[0.76] stroke-[5px] stroke-yellow-400 w-[140px]"
                                        />
                                        <div className="flex flex-col items-start self-start px-6 py-6 mt-2 bg-white rounded-3xl h-[130px] shadow-[-30px_30px_60px_rgba(44,115,180,0.05)] w-[130px] max-md:px-4">
                                            <div className="text-blue-950">Available in</div>
                                            <div className="self-stretch text-4xl font-extrabold leading-none bg-clip-text bg-[linear-gradient(180deg,#256FFD_0%,#004FE6_100%)] max-md:text-3xl">
                                                20+
                                            </div>
                                            <div className="text-blue-950">Languages</div>
                                        </div>
                                    </div>
                                    <div className="flex gap-3 self-start mt-2">
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d565cd92c79b48bc725ec160dd683df6946cdd9fdeaa1caf972f59b6d091581?placeholderIfAbsent=true&apiKey=5d2694d87fa84740890eaa127fb54b8a"
                                            className="object-contain shrink-0 w-8 aspect-square"
                                        />
                                        <img
                                            loading="lazy"
                                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f7415ec48dd342b2623db689b83fa933abb38643fb53929c444c05f3fcb9085?placeholderIfAbsent=true&apiKey=5d2694d87fa84740890eaa127fb54b8a"
                                            className="object-contain shrink-0 my-auto aspect-[1.67] stroke-[2px] stroke-blue-950 w-[12px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TopContainer
