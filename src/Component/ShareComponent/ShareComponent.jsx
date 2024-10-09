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

    <div className='flex justify-center items-center '>

      <div className='flex justify-center items-center  mr-[-2px]'>


        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
          <path d="M0.158203 9.15311L11.8296 0.453125V17.8531L0.158203 9.15311Z" fill="#0E275D" />
        </svg>
      </div>
      <div className="flex flex-col justify-center rounded-[30px]  space-y-2 w-[20rem] h-[3.5rem] bg-dark-blue">

        <div className="flex  justify-between px-5 items-center">
          {/* Facebook Share Button */}
          <div className='rounded-full p-1 hover:bg-[#2D4372]'>
            <FacebookShareButton url={shareUrl} quote={title}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 37 36" fill="none">
                <path d="M22.7593 18.9609L23.4273 14.3591H19.2487V11.3742C19.2487 10.115 19.8313 8.88682 21.7029 8.88682H23.6039V4.96913C23.6039 4.96913 21.8795 4.6582 20.2316 4.6582C16.7886 4.6582 14.5404 6.86268 14.5404 10.8519V14.3591H10.7148V18.9609H14.5404V30.0858C15.3084 30.2133 16.0941 30.2786 16.8945 30.2786C17.6949 30.2786 18.4806 30.2133 19.2487 30.0858V18.9609H22.7593Z" fill="white" />
              </svg>
            </FacebookShareButton>
          </div>
          <div className='rounded-full p-1 hover:bg-[#2D4372]'>
            <a href={`https://www.instagram.com/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-instagram" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
            </a>
          </div>
          <div className='rounded-full p-1 hover:bg-[#2D4372]'>

            <LinkedinShareButton url={shareUrl} title={title} source="Example">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 22" fill="none">
                <g clip-path="url(#clip0_411_972)">
                  <path d="M0.416016 3.30148C0.416016 2.62579 0.652509 2.06836 1.12548 1.62918C1.59844 1.18999 2.21332 0.970398 2.97007 0.970398C3.71332 0.970398 4.31466 1.1866 4.77412 1.61905C5.24709 2.06499 5.48358 2.64606 5.48358 3.36229C5.48358 4.01094 5.25386 4.55146 4.79439 4.98391C4.32143 5.42986 3.6998 5.65283 2.92953 5.65283H2.90926C2.16601 5.65283 1.56467 5.42986 1.1052 4.98391C0.645739 4.53796 0.416016 3.97715 0.416016 3.30148ZM0.679529 21.038V7.49742H5.17953V21.038H0.679529ZM7.67277 21.038H12.1728V13.4772C12.1728 13.0042 12.2268 12.6393 12.3349 12.3826C12.5241 11.9231 12.8113 11.5346 13.1964 11.217C13.5816 10.8994 14.0647 10.7407 14.6457 10.7407C16.1593 10.7407 16.916 11.7609 16.916 13.8015V21.038H21.416V13.2744C21.416 11.2744 20.943 9.75756 19.9971 8.72377C19.0511 7.68999 17.8012 7.1731 16.2471 7.1731C14.5039 7.1731 13.1457 7.9231 12.1728 9.4231V9.46364H12.1525L12.1728 9.4231V7.49742H7.67277C7.69979 7.92985 7.71331 9.27444 7.71331 11.5312C7.71331 13.788 7.69979 16.9569 7.67277 21.038Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_411_972">
                    <rect x="0.416016" y="0.5" width="21" height="21" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </LinkedinShareButton>

          </div>
          <div className=' rounded-full hover:bg-[#2D4372]'>
            <LinkedinShareButton url={shareUrl} title={title} source="Example">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 37 36" fill="none">
                <path d="M18.8912 4.65826C11.4415 4.65826 5.42188 10.6521 5.42188 18.0452C5.42188 23.7196 8.96936 28.5675 13.9802 30.5177C13.8583 29.46 13.7585 27.8293 14.0245 26.6724C14.2684 25.6257 15.5987 20.0175 15.5987 20.0175C15.5987 20.0175 15.1997 19.2132 15.1997 18.0342C15.1997 16.1722 16.2861 14.7839 17.6385 14.7839C18.7915 14.7839 19.3458 15.6433 19.3458 16.668C19.3458 17.8139 18.6141 19.5327 18.2261 21.1303C17.9046 22.4635 18.9023 23.5543 20.2216 23.5543C22.6161 23.5543 24.4564 21.0422 24.4564 17.4282C24.4564 14.222 22.1394 11.9853 18.8247 11.9853C14.989 11.9853 12.7386 14.839 12.7386 17.7918C12.7386 18.9377 13.182 20.1717 13.7363 20.8438C13.8472 20.9761 13.8583 21.0973 13.825 21.2295C13.7252 21.6482 13.4924 22.5627 13.4481 22.75C13.3926 22.9924 13.2485 23.0475 12.9935 22.9263C11.3307 22.1329 10.2886 19.6869 10.2886 17.7257C10.2886 13.5058 13.3705 9.62741 19.1906 9.62741C23.8577 9.62741 27.4939 12.9328 27.4939 17.3621C27.4939 21.9787 24.5672 25.6918 20.5098 25.6918C19.1462 25.6918 17.8602 24.9866 17.4279 24.1493C17.4279 24.1493 16.7517 26.7055 16.5854 27.3335C16.2861 28.5014 15.4657 29.9558 14.9114 30.8483C16.1752 31.2339 17.5055 31.4432 18.9023 31.4432C26.341 31.4432 32.3717 25.4494 32.3717 18.0563C32.3606 10.6521 26.3299 4.65826 18.8912 4.65826Z" fill="white" />
              </svg>
            </LinkedinShareButton>
          </div>
          <div className='rounded-full hover:bg-[#2D4372]'>
            {/* Threads Share */}
            <a href={`https://www.threads.net/share?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-threads" viewBox="0 0 16 16">
                <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
              </svg>       </a>
          </div>
          <div className='rounded-full hover:bg-[#2D4372]'>


            <TwitterShareButton url={shareUrl} title={title}>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 22 19" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.40601 10.1506L0.539062 0.375H6.77024L11.6264 6.41696L16.8145 0.402204H20.2463L13.2857 8.48142L21.5391 18.75H15.3265L10.0682 12.216L4.45447 18.7319H1.00408L8.40601 10.1506ZM16.232 16.9388L4.35981 2.18624H5.86401L17.7213 16.9388H16.232Z" fill="white" />
              </svg>
            </TwitterShareButton>
          </div>





        </div>

      </div> </div>
  );
};

const ImageWithShare = () => {
  const [showShareComponent, setShowShareComponent] = useState(false);

  const handleClick = () => {
    setShowShareComponent(prevState => !prevState);
  };

  return (
    <section className="flex items-center  overflow-hidden">
      {/* Image Section */}
      <div className="flex w-[58px] rounded-none relative cursor-pointer" onClick={handleClick}>
        <img
          className="w-full h-auto object-contain"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0950bd4377416a92fad380dae7be578bd0ec00056d913271cf7c609415a335e7?placeholderIfAbsent=true"
          alt="Social Icon 1"
        />
      </div>

      {/* ShareComponent to the right of the image */}
      {showShareComponent && (
        <div className="ml-4">
          <ShareComponent />
        </div>
      )}
    </section>
  );
};

export default ImageWithShare;
