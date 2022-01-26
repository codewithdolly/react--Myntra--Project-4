import React from "react";
import "./Products.scss";
import productImg1 from "../Images/1.png";
import productImg2 from "../Images/2.png";
import productImg3 from "../Images/3.png";
import productImg5 from "../Images/4.png";

const ProductsDeals = () => {
  return (
    <div>
      <h2 className="productDeal">DEALS OF THE DAY</h2>

      <div className="products">
        <img
          src={productImg1}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={productImg2}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={productImg3}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={productImg5}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
        <img
          src={productImg2}
          alt=""
          className="productImg"
          width="280"
          height="480"
        />
      </div>
    </div>
  );
};

export default ProductsDeals;
