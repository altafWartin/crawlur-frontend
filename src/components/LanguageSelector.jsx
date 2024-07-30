import React from 'react';
import LanguageOption from './LanguageOption';

const languages = [
  { flagSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/73e141dd45c199d991fa652ebc837dc00d416ca4d62c0e5fc078a6dba5e78b3e?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b", language: "Spanish" },
  { flagSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1009ee38e2579d70f761e88eef5dd76305f8f065551b5b31f0acd0acf4ab5511?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b", language: "French" },
  { flagSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bef95d24b2bfd8345f26b75bde8459832d40a347017db72ce6ed0fe8711af4ce?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b", language: "Portuguese" },
  { flagSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/96bded1316dd98c1658cb4f77e19d0e55fec70ea34c8189c41ab89b9ac3435e0?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b", language: "Japanese" },
  { flagSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/fee504d19897d1e02862f58e03b9b840c69c7d6c84cdcfb1f1d1631cba75d2f6?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b", language: "Chinese" },
  { flagSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/55c1fd928010614ca6043497b0204541fc51e392534750f093672dcf45d3a428?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b", language: "Arabic" }
];

function LanguageSelector() {
  return (
    <div className="flex flex-col px-5 pt-4 pb-7 text-lg font-semibold whitespace-nowrap bg-white max-w-[253px] text-blue-950 text-opacity-90">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8f3384b8e37ad00554547ef3eb4fe771c67ea8ec62102998c6f010bc17912dd?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b" alt="Language selector icon" className="self-end w-16 rounded-none aspect-square" />
      <div className="flex flex-col pb-2.5 mt-2 w-full bg-white rounded-lg shadow-[0px_0px_6px_rgba(0,0,0,0.1)]">
        {languages.map((lang, index) => (
          <div key={lang.language} className={index === 0 ? '' : 'mt-5'}>
            <LanguageOption
              flagSrc={lang.flagSrc}
              language={lang.language}
              isSelected={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguageSelector;