import React, { useState } from 'react';

// Define the TabView component
const TabView = () => {
    // State to track the currently selected tab
    const [activeTab, setActiveTab] = useState('summary');

    // Function to render content based on the active tab
    const renderContent = () => {
        switch (activeTab) {
            case 'summary':
                return (
                    <ul className="m-0 font-p-18-bold text-[0.8rem] text-whiteee pl-[1.35rem]">
                        <li>Five pre-programmed settings for automated blending.</li>
                        <li>Variable Speed Control and Pulse feature for fine-tuning texture.</li>
                        <li>Powerful 2.2 horsepower motor moves blades at high speeds to blend tough ingredients.</li>
                        <li>Stainless steel blades designed to handle the toughest ingredients.</li>
                        <li>Self-cleaning function cleans in 60 seconds with just water and a drop of dish soap.</li>
                    </ul>
                );
            case 'features':
                return (
                    <ul className="m-0 font-p-18-bold text-[0.8rem] text-whiteee pl-[1.35rem]">
                        <li>Five pre-programmed settings for automated blending.</li>
                        <li>Variable Speed Control and Pulse feature for fine-tuning texture.</li>
                        <li>Powerful 2.2 horsepower motor moves blades at high speeds to blend tough ingredients.</li>
                        <li>Stainless steel blades designed to handle the toughest ingredients.</li>
                        <li>Self-cleaning function cleans in 60 seconds with just water and a drop of dish soap.</li>
                    </ul>
                );
            case 'considerations':
                return (
                    <ul className="m-0 font-p-18-bold text-[0.8rem] text-whiteee pl-[1.35rem]">
                        <li>Five pre-programmed settings for automated blending.</li>
                        <li>Variable Speed Control and Pulse feature for fine-tuning texture.</li>
                        <li>Powerful 2.2 horsepower motor moves blades at high speeds to blend tough ingredients.</li>
                        <li>Stainless steel blades designed to handle the toughest ingredients.</li>
                        <li>Self-cleaning function cleans in 60 seconds with just water and a drop of dish soap.</li>
                    </ul>
                );
            case 'technical':
                return (
                    <ul className="m-0 font-p-18-bold text-[0.8rem] text-whiteee pl-[1.35rem]">
                        <li>Five pre-programmed settings for automated blending.</li>
                        <li>Variable Speed Control and Pulse feature for fine-tuning texture.</li>
                        <li>Powerful 2.2 horsepower motor moves blades at high speeds to blend tough ingredients.</li>
                        <li>Stainless steel blades designed to handle the toughest ingredients.</li>
                        <li>Self-cleaning function cleans in 60 seconds with just water and a drop of dish soap.</li>
                    </ul>
                );
            case 'faq':
                return (
                    <ul className="m-0 font-p-18-bold text-[0.8rem] text-whiteee pl-[1.35rem]">
                        <li>Five pre-programmed settings for automated blending.</li>
                        <li>Variable Speed Control and Pulse feature for fine-tuning texture.</li>
                        <li>Powerful 2.2 horsepower motor moves blades at high speeds to blend tough ingredients.</li>
                        <li>Stainless steel blades designed to handle the toughest ingredients.</li>
                        <li>Self-cleaning function cleans in 60 seconds with just water and a drop of dish soap.</li>
                    </ul>
                );
            default:
                return <p>Select a tab to view content.</p>;
        }
    };

    return (
        <section className="self-stretch flex mt-16 text-white flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-lavender font-typography-desktop-p-18-bold">
            <div className="w-full mx-36 rounded-3xl bg-dark-blue flex flex-col items-start justify-start py-[3.125rem] pr-[1.25rem] pl-[3.125rem] box-border gap-[1.875rem] max-w-full z-[1] mq825:gap-[0.938rem] mq1425:pl-[1.563rem] mq1425:box-border">
                <div className="flex flex-row items-start justify-center gap-[0.625rem] max-w-full lg:flex-wrap">
                    <button
                        className={`cursor-pointer text-white py-[0.687rem] px-[1.437rem] rounded-xl flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-slate-500 ${activeTab === 'summary' ? 'bg-blue text-white-color' : 'bg-transparent hover:bg-lightslategray-200'} `}
                        onClick={() => setActiveTab('summary')}
                    >
                        <b className="relative text-[0.8rem] leading-[1.5rem] font-typography-desktop-h5-22-bold text-center">
                            Product Summary
                        </b>
                    </button>
                    <button
                        className={`cursor-pointer text-white py-[0.687rem] px-[1.437rem] rounded-xl flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-slate-500 ${activeTab === 'features' ? 'bg-blue text-white-color' : 'bg-transparent hover:bg-lightslategray-200'} `}
                        onClick={() => setActiveTab('features')}
                    >
                        <b className="relative text-[0.8rem] leading-[1.5rem] font-typography-desktop-h5-22-bold text-center">
                            Product Features
                        </b>
                    </button>
                    <button
                        className={`cursor-pointer text-white py-[0.687rem] px-[1.437rem] rounded-xl flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-slate-500 ${activeTab === 'considerations' ? 'bg-blue text-white-color' : 'bg-transparent hover:bg-lightslategray-200'} `}
                        onClick={() => setActiveTab('considerations')}
                    >
                        <b className="relative text-white text-[0.8rem] leading-[1.5rem] font-typography-desktop-h5-22-bold text-center">
                            Considerations
                        </b>
                    </button>
                    <button
                        className={`cursor-pointer text-white py-[0.687rem] px-[1.437rem] rounded-xl flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-slate-500 ${activeTab === 'technical' ? 'bg-blue text-white-color' : 'bg-transparent hover:bg-lightslategray-200'} `}
                        onClick={() => setActiveTab('technical')}
                    >
                        <b className="relative text-white text-[0.8rem] leading-[1.5rem] font-typography-desktop-h5-22-bold text-center">
                        Technical Specifications
                        </b>
                    </button>
                    <button
                        className={`cursor-pointer text-white py-[0.687rem] px-[1.437rem] rounded-xl flex flex-row items-start justify-start z-[2] border-[1px] border-solid border-slate-500 ${activeTab === 'faq' ? 'bg-blue text-white-color' : 'bg-transparent hover:bg-lightslategray-200'} `}
                        onClick={() => setActiveTab('faq')}
                    >
                        <b className="relative text-[0.8rem] leading-[1.5rem] font-typography-desktop-h5-22-bold text-center">
                            FAQ
                        </b>
                    </button>
                </div>
                <div className="relative leading-[1.625rem] inline-block max-w-full z-[2] mq450:text-[1rem] mq450:leading-[1.313rem]">
                    {renderContent()}
                </div>
            </div>
        </section>
    );
};

export default TabView;
