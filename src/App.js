import { Routes, Route, useLocation } from "react-router-dom";
import FinalizedHomeDesktop from "./pages/HomeDesktop";
import FinalizedHomeSearchingDeskt from "./pages/HomeDesktop";
import ContactUsDesktop from "./pages/ContactUsDesktop";
import CatalogFinalDesktop from "./pages/CatalogDesktop";
import Footer from "./Component/Footer/Footer";
import Product from "./pages/Product";
import { SearchProvider } from "./context/SearchContext";
import HomeDesktop from "./pages/HomeDesktop";

function App() {
  const location = useLocation();
  const currentPath = location.pathname;
  
  return (
    <>
      <SearchProvider>
        <div className="max-w-[1300px] mx-auto overflow-x-hidden">
          {/* {currentPath !== '/Catalog' && "/" && <Navbar />} */}
          <Routes>
            <Route path="/" element={<HomeDesktop />} />
            <Route path="/Catalog" element={<CatalogFinalDesktop />} />
            {/* <Route path="/serching" element={<FinalizedHomeSearchingDeskt />} /> */}
            <Route path="/signup" element={<ContactUsDesktop />} />
            <Route path="/product/:asin" element={<Product />} />
          </Routes>
          <Footer />
        </div>
      </SearchProvider>
    </>
  );
}

export default App;
