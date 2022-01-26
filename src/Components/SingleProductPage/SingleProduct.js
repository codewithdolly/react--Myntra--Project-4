import React from "react";
import "./Style.scss"
import Breadcrumb from "./Breadcrumb";
import SingleProductPage from "./SingleProductPage/SingleProductPage";
import SingleProductPage2 from "./SingleProductPage/SingleProductPage2";
import SingleProductPage3 from "./SingleProductPage/SingleProductPage3";
import ProductOfferTable from "./SingleProductPage/ProductOfferTable";
import SingleProductPage4 from "./SingleProductPage/SingleProductPage4";
import ProductReview from "./SingleProductPage/ProductReview";
import ProductReview2 from "./SingleProductPage/ProductReview2";
import ProductQuestion from "./SingleProductPage/ProductQuestion";

const SingleProduct = () => {
  return (
    <>
      <div>
        <Breadcrumb />
      </div>
      <div className="products">
        <div className="leftCon">
          <SingleProductPage />
        </div>
        <div className="rightCon">
          <SingleProductPage2 />
          <SingleProductPage3 />
          <ProductOfferTable />
          <SingleProductPage4 />
          <ProductReview />
        </div>
      </div>

      <div className="review">
        <div className="leftCon">
          <ProductQuestion />
        </div>
        <div className="rightCon">
          <ProductReview2 />
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
