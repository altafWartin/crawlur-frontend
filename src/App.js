import { Routes, Route, useLocation } from "react-router-dom";
import FinalizedHomeDesktop from "./pages/FinalizedHomeDesktop";
import FinalizedHomeSearchingDeskt from "./pages/FinalizedHomeSearchingDeskt";
import ContactUsDesktop from "./pages/ContactUsDesktop";
import CatalogFinalDesktop from "./pages/CatalogFinalDesktop";
import Navebar from "./components/Navbar/Navbar"; // Adjust the import path as necessary
import Footer from "./components/Footer/Footer";
import Product from "./pages/Product";

function App() {
  const location = useLocation();
  const isCatalogPath = location.pathname === "/Catalog";

  return (
    <>
      <Navebar search={isCatalogPath} />
      <Routes>
        <Route path="/" element={<FinalizedHomeDesktop />} />
        <Route path="/serching" element={<FinalizedHomeSearchingDeskt />} />
        <Route path="/signup" element={<ContactUsDesktop />} />
        <Route path="/Catalog" element={<CatalogFinalDesktop />} />
        <Route path="/product" element={<Product />} />
    
      </Routes>
      <Footer />
    </>
  );
}

export default App;
