import HeaderSearchBarDesktop from "../components/HeaderSearchBarDesktop";
import SuggestionDropdown from "../components/SuggestionDropdown";
import Content1 from "../components/Content1";
import FooterDesktop from "../components/FooterDesktop";

const CatalogFinalDesktop = () => {
  return (
    <div className="w-full relative bg-white-color overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <main className="self-stretch [background:linear-gradient(180deg,_#f5f7ff,_rgba(252,_252,_255,_0))] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[7.687rem] box-border max-w-full">
        <div className="self-stretch h-[68.625rem] relative [background:linear-gradient(180deg,_#f5f7ff,_rgba(252,_252,_255,_0))] hidden" />
     
        <SuggestionDropdown />
        <Content1 />
      </main>
    
    </div>
  );
};

export default CatalogFinalDesktop;
