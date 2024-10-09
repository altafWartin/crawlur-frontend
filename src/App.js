import { Routes, Route, useLocation } from "react-router-dom";
import FinalizedHomeDesktop from "./pages/HomeDesktop";
import FinalizedHomeSearchingDeskt from "./pages/HomeDesktop";
import ContactUsDesktop from "./pages/ContactUsDesktop";
import CatalogFinalDesktop from "./pages/CatalogDesktop";
import Footer from "./Component/Footer/Footer";
import Product from "./pages/Product";
import { SearchProvider } from "./context/SearchContext";
import "./Language"; // Import i18n configuration
import FooterMobile from "./Component/Footer/FooterMobile";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <SearchProvider>
        {/* Uncomment the Navbar if needed */}
        {/* {currentPath !== '/Catalog' && "/" && <Navbar />} */}

        <Routes>
          <Route path="/" element={<FinalizedHomeDesktop />} />
          <Route path="/Catalog" element={<CatalogFinalDesktop />} />
          {/* <Route path="/serching" element={<FinalizedHomeSearchingDeskt />} /> */}
          <Route path="/signup" element={<ContactUsDesktop />} />
          <Route path="/product/:asin" element={<Product />} />
        </Routes>

        {/* Render the footer based on screen size */}
        <div className="hidden laptop:block">
          <Footer  />
        </div>
        <div className=" block laptop:hidden mobileFooter " >
          <FooterMobile />
        </div>
      </SearchProvider>
    </>
  );
}

export default App;
