import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderSearchBarDesktop from "../components/HeaderSearchBarDesktop";
import SuggestionDropdown from "../components/SuggestionDropdown";
import Content1 from "../components/Content1";
import FooterDesktop from "../components/FooterDesktop";
import { searchAmazonProducts } from "../api/api"; // Import the API function
import CatalogNavbar from "../Component/Navbar/CatalogNavbar";

const CatalogFinalDesktop = () => {
  const location = useLocation();
  const query = location.state?.query || "";
  console.log("Search term", query);

  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products based on the query
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await searchAmazonProducts(query);
        setResults(data); // Corrected this line
        console.log(data);
        setError("");
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]); // Dependency on query to trigger effect on query change

  return (
    <div className="w-full relative bg-white-color overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <CatalogNavbar query={query} />
      <main className="self-stretch [background:linear-gradient(180deg,_#f5f7ff,_rgba(252,_252,_255,_0))] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[7.687rem] box-border max-w-full">
        <SuggestionDropdown />
        <Content1 data={results} query={query} loading={loading} />
      </main>
      {/* <FooterDesktop />  */}
    </div>
  );
};

export default CatalogFinalDesktop;
