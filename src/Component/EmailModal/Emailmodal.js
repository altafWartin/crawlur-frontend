import { useState, useEffect } from "react";
import leftbg from "./leftbg.png";
import rightbg from "./right img.png";
import sideImage from "./sideimg.png"; // Make sure the image path is correct
import leftTringle from "./leftTringle.png"; // Make sure the image path is correct
import cuticon from "./cuticon.png";
import { Link } from "react-router-dom";

function ExampleModal({ onEmailSubmit, onCancel }) {
  const [email, setEmail] = useState("");
  const [showEmailInput, setShowEmailInput] = useState(true);

  const handleCancel = () => {
    setShowEmailInput(false); // Optionally hide the input
    if (onCancel) onCancel(); // Close the modal
  };

  useEffect(() => {
    if (showEmailInput) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [showEmailInput]);

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative z-10 bg-white rounded-lg shadow-lg w-full max-w-[90%] tablet:max-w-[85%] laptop:max-w-[58.1875rem] h-auto py-4 laptop:h-[20.9375rem] flex flex-col tablet:flex-row flex-shrink-0">
        {/* Close Icon */}
        <Link to="/Catalog">
          <img
            src={cuticon}
            alt="Cut Icon"
            className="absolute top-4 right-4 w-[30px] h-[30px] object-cover z-10 cursor-pointer"
            onClick={handleCancel} // Close modal on cut icon click
          />{" "}
        </Link>
        {/* First Div (40% width on larger screens, full width on mobile) */}
        <div className="w-full tablet:w-[40%] h-[30vh] tablet:h-full">
          <div className="relative h-full">
            <img
              src={leftbg}
              alt="Left Background"
              className="absolute inset-0 w-full h-full hidden laptop:block object-cover z-4"
            />
            <div>
              <img
                src={sideImage}
                alt="Side Image"
                className="absolute top-12 left-12  w-[249px] h-[200px] object-cover z-5"
              />{" "}
            </div>
            <img
              src={leftTringle}
              alt="Left Triangle"
              className="absolute top-8 left-8 object-cover z-5"
            />
          </div>
        </div>
        {/* Second Div (60% width on larger screens, full width on mobile) */}
        <div className="relative w-full tablet:w-[60%] h-auto tablet:h-full flex flex-col items-center justify-center">
          <img
            src={rightbg}
            alt="Right Background"
            className="absolute inset-0 w-full h-full hidden laptop:block object-cover z-1"
          />

          <div className="relative z-10 px-4">
            <h2 className="text-2xl tablet:text-3xl font-Outfit font-semibold text-transparent bg-gradient-to-b from-blue to-blue bg-clip-text text-center tablet:text-start">
              Hang Tight!
            </h2>
            <p className="text-[14px] font-Nunito text-dark-blue leading-[20px] mb-4 text-center tablet:text-start">
              This product is not yet in our catalog. We're currently creating
              this profile for you. Once this page has been reviewed and
              published, we’ll send the final version to your email. Please
              enter it below!
            </p>
            <div className="w-full  gap-2 flex flex-col items-center tablet:items-start">
              <input
                type="email"
                id="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="self-stretch px-2 laptop:w-[20.6rem]  h-10  mb-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                autoFocus
              />
              <div className="w-full flex flex-col tablet:flex-row gap-2">
                <button
                  type="submit"
                  className="w-full tablet:w-1/2 bg-blue text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700"
                >
                  Submit
                </button>
                <Link to="/Catalog" className="w-full">
                  <button
                    type="button"
                    className="w-full no-underline tablet:w-1/2 text-black bg-white border-2 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 active:bg-gray-300"
                  >
                    Cancel
                  </button>{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleModal;
