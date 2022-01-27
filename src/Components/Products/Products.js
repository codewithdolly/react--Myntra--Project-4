import React from "react";
import "./Procucts.scss";
import productImg1 from "../Images/1.png";
import productImg2 from "../Images/2.png";
import productImg3 from "../Images/3.png";
import productImg5 from "../Images/4.png";
import brandsImg1 from "../Images/f1.png";
import brandsImg2 from "../Images/f2.png";
import brandsImg3 from "../Images/f3.png";
import brandsImg4 from "../Images/f4.png";
import brandsImg5 from "../Images/f5.png";
import brandsImg6 from "../Images/f6.png";
import brandsImg7 from "../Images/f7.png";
import brandsImg8 from "../Images/f8.png";
import brandsImg9 from "../Images/f9.png";
import brandsImg10 from "../Images/f10.png";
import ProductCategories from "./ProductCategories";



const Products = () => {
  return (
    <div>
      <h2 className="productDeal">DEALS OF THE DAY</h2>

      <div className = "products">
        <img src={productImg1} alt="" className="productImg"width="280" height="480"/>
        <img src={productImg2} alt="" className="productImg"width="280"height="480"/>
        <img src={productImg3} alt="" className="productImg"width="280"height="480"/>
        <img src={productImg5} alt="" className="productImg"width="280"height="480"/>
        <img src={productImg2} alt="" className="productImg"width="280"height="480"/>
        </div>

        <h2 className="productDeal">BIGGEST DEALS ON TOP BRANDS</h2>
        <div className = "products">
        <img src={brandsImg1} alt="" className="productImg"width="280" height="480"/>
        <img src={brandsImg2} alt="" className="productImg"width="280"height="480"/>
        <img src={brandsImg3} alt="" className="productImg"width="280"height="480"/>
        <img src={brandsImg4} alt="" className="productImg"width="280"height="480"/>
        <img src={brandsImg5} alt="" className="productImg"width="280"height="480"/>
        </div>

        <div className = "products products2">
        <img src={brandsImg6} alt="" className="productImg"width="280"height="480"/>
        <img src={brandsImg10} alt="" className="productImg"width="280"height="480"/>
        <img src={brandsImg7} alt="" className="productImg"width="280"height="480"/>
        <img src={brandsImg8} alt="" className="productImg"width="280"height="480"/>
        <img src={brandsImg9} alt="" className="productImg"width="280"height="480"/>
        </div>
        <ProductCategories />
        
    </div>
  );
};

export default Products;
