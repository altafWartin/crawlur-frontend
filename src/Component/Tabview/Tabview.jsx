import React, { useState, useRef } from 'react';

// Define the TabView component
const TabView = () => {
    const [activeTab, setActiveTab] = useState('summary');

    // Create a ref for each tab button
    const tabRefs = useRef([]);

    // Define the tabs
    const tabs = [
        { key: 'summary', label: 'Product Summary' },
        { key: 'features', label: 'Product Features' },
        { key: 'considerations', label: 'Considerations' },
        { key: 'technical', label: 'Technical Specifications' },
        { key: 'faq', label: 'FAQ' },
    ];

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
                        <li>Feature 1 description.</li>
                        <li>Feature 2 description.</li>
                    </ul>
                );
            case 'considerations':
                return (
                    <ul className="m-0 font-p-18-bold text-[0.8rem] text-whiteee pl-[1.35rem]">
                        <li>Consideration 1 description.</li>
                        <li>Consideration 2 description.</li>
                    </ul>
                );
            case 'technical':
                return (
                    <ul className="m-0 font-p-18-bold text-[0.8rem] text-whiteee pl-[1.35rem]">
                        <li>Technical spec 1 description.</li>
                        <li>Technical spec 2 description.</li>
                    </ul>
                );
            case 'faq':
                return (
                    <ul className="m-0 font-p-18-bold text-[0.8rem] text-whiteee pl-[1.35rem]">
                        <li>FAQ 1 description.</li>
                        <li>FAQ 2 description.</li>
                    </ul>
                );
            default:
                return <p>Select a tab to view content.</p>;
        }
    };

    // Handle tab change with scrolling
    const handleTabChange = (direction) => {
        const currentIndex = tabs.findIndex(tab => tab.key === activeTab);
        const newIndex = Math.min(Math.max(currentIndex + direction, 0), tabs.length - 1);
        const newTab = tabs[newIndex].key;

        setActiveTab(newTab);

        // Scroll to the new tab button
        if (tabRefs.current[newIndex]) {
            tabRefs.current[newIndex].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            });
        }
    };

    return (
        <div className="w-full flex justify-center">
            <section className="container flex mt-16 text-white flex-row items-start justify-center py-0 box-border text-left text-[1.25rem] text-lavender font-typography-desktop-p-18-bold">
                <div className="w-full laptop:rounded-3xl mobile:rounded-0 bg-dark-blue flex flex-col items-start justify-start py-[3.125rem] px-[2rem] box-border gap-[1.875rem] max-w-full">
                    <div className="w-full flex flex-row items-start justify-start gap-[0.625rem] max-w-full laptop:flex-wrap overflow-x-auto">
                        <div className="w-full flex flex-row items-start gap-[0.625rem]">
                            {tabs.map(({ key, label }, index) => (
                                <button
                                    key={key}
                                    ref={el => tabRefs.current[index] = el} // Assign ref to each button
                                    className={`self-stretch cursor-pointer text-white py-[0.687rem] px-[1.437rem] rounded-xl flex flex-row items-start justify-start border-[1px] font-Outfit border-solid border-slate-500 ${activeTab === key ? 'bg-blue text-white-color' : 'bg-transparent hover:bg-lightslategray-200'} whitespace-nowrap`}
                                    onClick={() => setActiveTab(key)}
                                >
                                    <span>{label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className=" font-Nunito text-[1.25rem] font-bold  leading-[1.325rem] desktop:leading-[1.625] inline-block max-w-full ">
                        {renderContent()}
                    </div>

                    {/* Mobile Navigation */}
                    <div className="w-full flex laptop:hidden justify-between items-center">
                        <div className="cursor-pointer" onClick={() => handleTabChange(-1)}>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                <circle cx="17.5" cy="17.5" r="17.5" fill="#004FE6" />
                                <path d="M10.5 17.4999H25.6667" stroke="#EDF7FF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M15.05 22.1666L10.5 17.4999L15.05 12.8332" stroke="#EDF7FF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></span>
                        </div>
                        <div className="flex space-x-2">
                            {tabs.map((_, index) => (
                                <span key={index} className={`dot w-2 h-2 ${activeTab === tabs[index].key ? 'bg-blue' : 'bg-gray-400'} rounded-full`} />
                            ))}
                        </div>
                        <div className="cursor-pointer" onClick={() => handleTabChange(1)}>
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none">
                                <circle cx="17.5" cy="17.5" r="17.5" transform="rotate(-180 17.5 17.5)" fill="#004FE6" />
                                <path d="M24.5 17.5L9.33333 17.5" stroke="#EDF7FF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M19.95 12.8334L24.5 17.5L19.95 22.1667" stroke="#EDF7FF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg></span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TabView;
