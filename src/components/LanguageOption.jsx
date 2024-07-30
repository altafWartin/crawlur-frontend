import React from 'react';

function LanguageOption({ flagSrc, language, isSelected }) {
  return (
    <div className={`flex gap-3 ${isSelected ? 'px-3 py-2.5 bg-indigo-50 rounded-lg' : ''}`}>
      <img loading="lazy" src={flagSrc} alt={`${language} flag`} className="shrink-0 aspect-[1.43] w-[37px]" />
      <div className={`flex-auto ${isSelected ? '' : 'my-auto'}`}>{language}</div>
      {isSelected && (
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/630e72342f0e0efe63da3827c4234102fad037e4f03a5281bd3c410e11810d24?apiKey=b84dd30bad284682bdd2468de5480c9b&&apiKey=b84dd30bad284682bdd2468de5480c9b"
          alt="Selected indicator"
          className="shrink-0 my-auto w-4 border-2 border-solid aspect-[1.45] border-blue-950"
        />
      )}
    </div>
  );
}

export default LanguageOption;