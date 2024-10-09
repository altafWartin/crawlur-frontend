import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // Import the slider
import ShareComponent from '../ShareComponent/ShareComponent'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageViewer = (props) => {
    const [data, setData] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false); // Track if it's mobile
    const maxVisibleImages = 5;

    useEffect(() => {
        if (props && props.product) {
            const amazonProduct = props.product;
            setData(amazonProduct);
            if (amazonProduct.images && amazonProduct.images.length > 0) {
                setSelectedImage(amazonProduct.images[0].link);
            }
        }

        // Check for mobile view
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Check on initial load

        return () => window.removeEventListener('resize', handleResize);
    }, [props]);

    if (!data) {
        return <p>No product details available.</p>;
    }

    const handleImageClick = (src) => {
        setSelectedImage(src);
    };

    const handleNextClick = () => {
        if (currentIndex + maxVisibleImages < data.images.length) {
            setCurrentIndex(currentIndex + maxVisibleImages);
        } else {
            setCurrentIndex(0); // Loop back to the start
        }
    };

    // Get currently visible images
    const visibleImages = data.images.slice(currentIndex, currentIndex + maxVisibleImages);

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <div className='w-full m-0 '>
            <div className="w-full flex-1 flex flex-row items-start justify-end gap-[1.8rem] min-w-[12.438rem] max-w-full">
                {/* Display the selected image or mobile slider */}
                {isMobile ? (
                    <div className="w-full">
                        <Slider {...sliderSettings}>
                            {data.images.map((image, index) => (
                                <div key={index} onClick={() => handleImageClick(image.link)}>
                                    <img
                                        className="h-[20rem] w-full  object-contain"
                                        loading="lazy"
                                        alt={`Image ${index}`}
                                        src={image.link}
                                    />


                                </div>
                            ))}
                        </Slider>
                    </div>
                ) : (
                    <div className="shrink-0 border-neutral-100 rounded-[24px] border-2 border-solid mq450:max-w-full mq825:gap-[1rem]">
                        <img
                            className="w-[400px] h-auto desktop:w-[530px] rounded-[24px]"
                            loading="lazy"
                            alt="Selected"
                            src={selectedImage} // Display the selected image
                        />
                    </div>
                )}

                {/* Display visible thumbnails on larger screens */}
                {!isMobile && (
                    <div className="w-[3.881rem] flex flex-col items-start justify-start gap-[0.95rem]">
                        {visibleImages.map((image, index) => (
                            <img
                                key={index}
                                className="w-[3.881rem] h-[3.881rem] relative z-[1]"
                                loading="lazy"
                                alt={`Thumbnail ${index}`}
                                src={image.link} // Thumbnail source
                                onClick={() => handleImageClick(image.link)} // Update selectedImage when clicked
                            />
                        ))}
                        {/* Next Button to show more images */}
                        {data.images.length > maxVisibleImages && (
                            <button
                                className="mt-2 bg-blue-500 bg-transparent text-white px-1 py-1 rounded"
                                onClick={handleNextClick}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 79 79" fill="none">
                                    <circle cx="39.1044" cy="39.5021" r="38.5516" fill="url(#paint0_linear_411_946)" stroke="#0E275D" />
                                    <path d="M52.1211 31.9088L38.5615 46.0107L25.0019 31.9088" stroke="#0E275D" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <defs>
                                        <linearGradient id="paint0_linear_411_946" x1="39.1044" y1="0.450439" x2="39.1044" y2="78.5537" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#F5F7FF" />
                                            <stop offset="1" stopColor="#FCFCFF" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </button>
                        )}
                    </div>
                )}
            </div>

            {/* Share Component */}
            <div className='my-10 ml-10 desktop:ml-20 hidden laptop:block'>
                <ShareComponent />

            </div>
        </div>
    );
};

export default ImageViewer;
