import React, { useState, useEffect } from 'react';
import ShareComponent from '../ShareComponent/ShareComponent ';

const ImageViewer = (props) => {
    const [data, setData] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0); // To control the currently visible set of images
    const maxVisibleImages = 5; // Maximum images to display at once

    useEffect(() => {
        if (props && props.product) {
            const amazonProduct = props.product;
            setData(amazonProduct);
            // Set the default selected image to the first image in the array
            if (amazonProduct.images && amazonProduct.images.length > 0) {
                setSelectedImage(amazonProduct.images[0].link);
            }
        }
    }, [props]);

    if (!data) {
        return <p>No product details available.</p>;
    }

    // Handle image selection
    const handleImageClick = (src) => {
        setSelectedImage(src); // Update the selected image
    };

    // Handle next image batch click
    const handleNextClick = () => {
        if (currentIndex + maxVisibleImages < data.images.length) {
            setCurrentIndex(currentIndex + maxVisibleImages);
        } else {
            // If we are at the end, loop back to the start
            setCurrentIndex(0);
        }
    };

    // Get the currently visible images
    const visibleImages = data.images.slice(currentIndex, currentIndex + maxVisibleImages);

    return (
        <div>
            <div className="w-[450px] flex-1 flex flex-row items-start justify-end gap-[1.8rem] min-w-[15.438rem] max-w-full mq825:min-w-full">
                {/* Display the selected image */}
                <div className="shrink-0 border-neutral-100 rounded-[24px] border-2 border-solid mq450:max-w-full mq825:gap-[1rem]">
                    <img
                        className="w-[300px] h-auto max-h-[500px] rounded-[24px]"
                        loading="lazy"
                        alt="Selected"
                        src={selectedImage} // Display the selected image
                    />
                </div>

                {/* Display the visible thumbnails */}
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
                                <path d="M52.1211 31.9088L38.5615 46.0107L25.0019 31.9088" stroke="#0E275D" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_411_946" x1="39.1044" y1="0.450439" x2="39.1044" y2="78.5537" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#F5F7FF" />
                                        <stop offset="1" stop-color="#FCFCFF" stop-opacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </button>
                    )}
                </div>
            </div>

            {/* Share Component */}
            <ShareComponent />
        </div>
    );
};

export default ImageViewer;
