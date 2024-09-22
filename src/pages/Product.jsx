import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductByAsin } from "../api/api";
import ProductInformation from "./ProductInformation";
import ImageViewer from "../Component/ProductPage/ImageViewer";
import ProductDetails from "../Component/ProductPage/ProductDetails";
import SocialContent from "../Component/SocialContent/SocialContent";
import Reviews from "../Component/Reviews/Reviews";
import { TabView } from "primereact/tabview";
import Tabview from "../Component/Tabview/Tabview";
import ExampleModal from "../Component/EmailModal/Emailmodal";
import CatalogNavbar from "../Component/Navbar/CatalogNavbar";

const Product = () => {
  const { asin } = useParams(); // Extract 'asin' from URL params
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("Loading product details...");

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Set loading state when fetching begins
      setError(null);   // Clear any previous errors
      try {
        const data = await fetchProductByAsin(asin);

        if (data.message === 'This data is not in local database' || data.amazonProduct?.status === 'Draft') {
          // Set custom loading message if product is not in the local database
          console.log("Product not in local database or is in draft:", data);
          setLoadingMessage("This product is not yet in our database, so we are generating this page for you now! Please excuse any mistakes. This listing will be reviewed before it is posted in our catalog. If you'd like to receive email once that happens, please enter it here:");
        } else {
          // Set product details when valid data is received
          setProduct(data.amazonProduct?.product);
          setLoadingMessage(""); // Clear loading message
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("There was an error fetching the product data. Please try again later.");
      } finally {
        setLoading(false); // Stop the loading state
      }
    };

    fetchProduct();

    return () => {
      setLoading(false); // Cleanup function to prevent state updates on unmounted component
    };
  }, [asin]);

  if (loading) {
    return <div>{loadingMessage}</div>; // Show loading message while fetching
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there was an error
  }

  return (
    <div className="w-full relative  bg-white-color hide-x-scroll overflow-x-hidden flex flex-col items-center justify-center leading-[normal] tracking-[normal]">

      {
        loadingMessage && (
          <ExampleModal />
        )
      }



      <section className="w-full h-[750px]  self-stretch  [background:linear-gradient(180deg,_#f5f7ff,_rgba(252,_252,_255,_0))] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[3.125rem] box-border gap-[5rem] max-w-full lg:gap-[2.5rem] laptop:gap-[1.25rem] laptop:pb-[1.313rem] laptop:box-border laptop:pb-[2rem] mq1425:box-border">
        <CatalogNavbar />
        <div
          className={`self-stretch mt-16  flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-left text-[2.5rem] text-dark-blue font-typography-desktop-h5-22-bold`}
        >
          <div className="w-full flex flex-row  items-start justify-center gap-[1.987rem] max-w-full lg:flex-wrap laptop:gap-[1rem]">
            <div class="w-full flex mb-96 gap-5  justify-center">
              <div class=" h-28 ">
                <ImageViewer product={product} />
              </div>
              <div class=" h-auto">
                <ProductDetails product={product} />
              </div>
            </div>
          </div>
        </div>{" "}
      </section>


      <Tabview product={product} />

      <SocialContent />




      <Reviews />


      <ProductInformation />


    </div>
  );
};

export default Product;
