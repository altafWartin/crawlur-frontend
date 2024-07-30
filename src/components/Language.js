import React, { useState } from "react";

const Language = () => {
  // State to keep track of the selected language
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  // Languages data
  const languages = [
    {
      name: "French",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1009ee38e2579d70f761e88eef5dd76305f8f065551b5b31f0acd0acf4ab5511?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
    },
    {
      name: "Portuguese",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bef95d24b2bfd8345f26b75bde8459832d40a347017db72ce6ed0fe8711af4ce?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
    },
    {
      name: "Japanese",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/96bded1316dd98c1658cb4f77e19d0e55fec70ea34c8189c41ab89b9ac3435e0?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
    },
    {
      name: "Chinese",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fee504d19897d1e02862f58e03b9b840c69c7d6c84cdcfb1f1d1631cba75d2f6?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
    },
    {
      name: "Arabic",
      imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/55c1fd928010614ca6043497b0204541fc51e392534750f093672dcf45d3a428?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
    }
  ];

  // Handler for changing selected language
  const handleLanguageSelect = (name) => {
    setSelectedLanguage(name);
  };

  return (
    <div className="relative w-[243px]">
      {/* Dropdown Menu */}
      <ul className="absolute left-0 mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200">
        {languages.map((lang, index) => (
          <li
            key={index}
            className={`flex gap-3 pr-3 py-2 items-center hover:bg-gray-100 cursor-pointer ${
              selectedLanguage === lang.name ? "bg-gray-200" : ""
            }`}
            onClick={() => handleLanguageSelect(lang.name)}
          >
            <img
              loading="lazy"
              src={lang.imgSrc}
              className="shrink-0 aspect-[1.43] w-[37px]"
            />
            <div className="flex-auto">{lang.name}</div>
            <input
              type="checkbox"
              checked={selectedLanguage === lang.name}
              readOnly
              className="cursor-pointer"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
