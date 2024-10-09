import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProductByAsin } from "../api/api";
import ProductInformation from "./ProductInformation";
import ImageViewer from "../Component/ProductPage/ImageViewer";
import ProductDetails from "../Component/ProductPage/ProductDetails";
import SocialContent from "../Component/SocialContent/SocialContent";
import Lottie from "lottie-react";
import loadinggg from "../assets/Animation - 1725965270267.json";

import Reviews from "../Component/Reviews/Reviews";
import { TabView } from "primereact/tabview";
import Tabview from "../Component/Tabview/Tabview";
import ExampleModal from "../Component/EmailModal/Emailmodal";
import CatalogNavbar from "../Component/Navbar/CatalogNavbar";
import socialimg from './../assets/socialmeadia.png'
import socialimgdsk from './../assets/socialmeadiadesk.png'


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
    return <div>      <CatalogNavbar />
      <div className="flex items-center justify-center w-full  laptop:h-[10rem] mobile:[6rem]">
        {/* Loading Spinner */}
        <Lottie
          animationData={loadinggg}
          loop={true}
          style={{ width: 100, height: 100 }}
        />
      </div></div>; // Show loading message while fetching
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there was an error
  }

  return (
    <div className="w-full   [background:var(--Light-background-gradient,linear-gradient(180deg,#F5F7FF_0%,rgba(252,252,255,0.00)_100%))]  overflow-x-hidden  items-center justify-center ">

      {
        loadingMessage && (
          <ExampleModal />
        )
      }
      <CatalogNavbar />

      <div className="w-full my-12   flex justify-center">
        <div className="container ">
          <div className="flex flex-col gap-5 laptop:flex-row">
            <div className="w-full laptop:w-1/2   ">
              <ImageViewer product={product} />
            </div>
            <div className="w-full  laptop:w-1/2 ">
              <ProductDetails product={product} />
            </div>
          </div>
        </div>
      </div>






      <Tabview product={product} />
      <div className="w-full flex justify-center">


        <div className=" hidden laptop:block">
          <h3 className="
  text-[#0E275D] 
  text-center 
  font-Outfit 
  font-bold 
  leading-[2rem]   // Default for mobile
  text-[1.75rem]    // Default font size for mobile
  laptop:text-[2.25rem] 
  laptop:leading-[2.375rem] 
  desktop:text-[2.5rem] 
  desktop:leading-[2.625rem]
">
            Lorem Ipsum Is A Dummy Text
          </h3>

          <img src={socialimgdsk} alt="" className="w-full h-auto object-cover" />
        </div>
      </div>


      {/* Laptop view */}
      <div className="block mobile:hidden">
        <section className="w-full py-10 my-10 bg-slate-100   flex flex-col items-start">
          <img className='w-full' src={socialimg} alt="" />
        </section>
      </div>


      <div className="px-0 mobile:px-2 ">

        <Reviews />
      </div>


      <ProductInformation />




    </div>
  );
};

export default Product;
