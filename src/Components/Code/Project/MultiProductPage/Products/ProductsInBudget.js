import React from "react";
import "./Procucts.scss";
import Box from "@mui/material/Box";
import budgetImgOffer1 from "../Images/b1.png";
import budgetImgOffer2 from "../Images/b2.png";
import budgetImgOffer3 from "../Images/b3.png";
import budgetImgOffer4 from "../Images/b4.png";
import budgetImgOffer5 from "../Images/b5.png";
import budgetImgOffer6 from "../Images/b6.png";
import budgetImgOffer7 from "../Images/b7.png";
import budgetImgOffer8 from "../Images/b8.png";
import budgetImgOffer9 from "../Images/b9.png";
import budgetImgOffer10 from "../Images/b10.png";

const ProductsInBudget = () => {
  return (
    <div>
      <div className="products">
        <Box className="boxImg1">
          <div>
            <img src={budgetImgOffer1} alt="" className="productImg2"  width="240" />
          </div>
          <div id="productImg2nd">
            <img
              src={budgetImgOffer6}
              alt=""
              className="productImg2 "
              id="productImg2nd"
               width="240"
            />
          </div>
        </Box>

        <Box className="boxImg1">
          <div>
            <img src={budgetImgOffer2} alt="" className="productImg2"  width="240" />
          </div>
          <div id="productImg2nd">
            <img
              src={budgetImgOffer7}
              alt=""
              className="productImg2 "
              id="productImg2nd"
               width="240"
            />
          </div>
        </Box>
        

        <Box className="boxImg1">
          <div>
            <img src={budgetImgOffer3} alt="" className="productImg2"  width="240" />
          </div>
          <div id="productImg2nd">
            <img
              src={budgetImgOffer8}
              alt=""
              className="productImg2 "
              id="productImg2nd"
               width="240"
            />
          </div>
        </Box>

        <Box className="boxImg1">
          <div>
            <img src={budgetImgOffer4} alt="" className="productImg2"  width="240" />
          </div>
          <div id="productImg2nd">
            <img
              src={budgetImgOffer9}
              alt=""
              className="productImg2 "
              id="productImg2nd"
               width="244"
            />
          </div>
        </Box>

        <Box className="boxImg1">
          <div>
            <img src={budgetImgOffer5} alt="" className="productImg2"  width="240" />
          </div>
          <div id="productImg2nd">
            <img
              src={budgetImgOffer10}
              alt=""
              className="productImg2 "
              id="productImg2nd"
               width="240"
               height="305"
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ProductsInBudget;
