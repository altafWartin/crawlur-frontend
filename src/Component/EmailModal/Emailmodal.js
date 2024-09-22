import { useState, useEffect } from "react";
import leftbg from "./leftbg.png";
import rightbg from "./right img.png";
import sideImage from "./sideimg.png"; // Make sure the image path is correct
import leftTringle from "./leftTringle.png"; // Make sure the image path is correct
import cuticon from "./cuticon.png";

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
      <div className="relative bg-white rounded-lg shadow-lg w-[700px] h-[300px] max-w-4xl flex">
        {/* Left Side with Images */}
        <div className="relative w-1/2 h-full">
          <div className="relative h-full">
            <img
              src={leftbg}
              alt="Left Background"
              className="absolute inset-0 w-full h-full object-cover z-4"
            />
            <img
              src={sideImage}
              alt="Side Image"
              className="absolute top-12 left-12 w-[249px] h-[200px] object-cover z-5"
            />
            <img
              src={leftTringle}
              alt="Left Triangle"
              className="absolute top-8 left-8 object-cover z-5"
            />
          </div>
        </div>

        {/* Right Side with Content */}
        <div className="relative w-1/2 h-full flex flex-col items-center justify-center">
          <img
            src={rightbg}
            alt="Right Background"
            className="absolute inset-0 w-full h-full object-cover z-1"
          />
          <img
            src={cuticon}
            alt="Cut Icon"
            className="absolute top-4 right-4 w-[30px] h-[30px] object-cover z-10 cursor-pointer"
            onClick={handleCancel} // Close modal on cut icon click
          />
          <div className="relative z-10 px-4">
            <h2 className="text-30px font-outfit font-semibold text-transparent bg-gradient-to-b from-blue to-blue bg-clip-text">
              Hang Tight!
            </h2>

            <p className="text-[14px] font-nunito text-dark-blue leading-[20px] mb-4">
              This product is not yet in our catalog. We're currently creating
              this profile for you. Once this page has been reviewed and
              published, we’ll send the final version to your email. Please
              enter it below!
            </p>

            <div className="space-y-4">
              <input
                type="email"
                id="email"
                placeholder="Enter your email here"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[230px] h-6 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                autoFocus
              />
              <button
                type="submit"
                className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-700"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="text-black bg-white border-2 mx-4 px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 active:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExampleModal;



