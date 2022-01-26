import React from "react";
import "./HomeImage.scss";
import homeImg1 from "../Images/home Img1.png";
import homeImg4 from "../Images/offer.png";
import homeImg5 from "../Images/home img5.png";
import homeImg6 from "../Images/home Img6.png";
import homeImg7 from "../Images/home7.png";
import ProductsBestDeal from "./ProductsBestDeal";
import ProductsInBudget from "./ProductsInBudget";


const HomeImage = () => {
  return (
    <div>
          <img src={homeImg1} alt="Main Img" title="Home page img" width="100%" height="400px" className="homeImg" />
        <div>
          <img src={homeImg4} alt="Main Img" title="Home page img" width="100%" className="homeImg" />
        </div>
        <div>
          <img src={homeImg5} alt="Main Img" title="Home page img" width="100%" className="homeImg" />
        </div>
        <div>
          <img src={homeImg6} alt="Main Img" title="Home page img" width="100%" className="homeImg" />
        </div>

        <ProductsBestDeal />

        <div>
          <img src={homeImg7} alt="Main Img" title="Home page img" width="100%" className="homeImg" />
        </div>
      <ProductsInBudget />
      
        

    </div>
  );
};

export default HomeImage;
