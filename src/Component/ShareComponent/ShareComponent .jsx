import React, { useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';

const ShareComponent = () => {
  const shareUrl = 'https://www.example.com';
  const title = 'Check out this awesome website!';

  return (
    <div className="flex space-x-3 mt-4">
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} title={title} source="Example">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={shareUrl} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      {/* Instagram Share */}
      <a href={`https://www.instagram.com/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
        <img src="/path-to-instagram-icon.png" alt="I" width={32} height={32} style={{ borderRadius: '50%' }} />
      </a>
      {/* Threads Share */}
      <a href={`https://www.threads.net/share?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
        <img src="/path-to-threads-icon.png" alt="T" width={32} height={32} style={{ borderRadius: '50%' }} />
      </a>
    </div>
  );
};

const ImageWithShare = () => {
  const [showShareComponent, setShowShareComponent] = useState(false);

  const handleClick = () => {
    setShowShareComponent(prevState => !prevState);
  };

  return (
    <section className="flex flex-col items-stretch bg-white max-w-[513px] px-[40px] pt-[16px] pb-[116px] overflow-hidden medium:px-[20px] medium:pb-[100px]">
      {/* Image 1 */}
      <div className="flex w-[58px] rounded-none relative cursor-pointer" onClick={handleClick}>
        <img
          className="w-full h-auto object-contain"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0950bd4377416a92fad380dae7be578bd0ec00056d913271cf7c609415a335e7?placeholderIfAbsent=true"
          alt="Social Icon 1"
        />
      </div>

      {/* Toggle ShareComponent on image click */}
      {showShareComponent && <ShareComponent />}
    </section>
  );
};

export default ImageWithShare;
