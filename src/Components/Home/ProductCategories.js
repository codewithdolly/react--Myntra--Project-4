import React from "react";
import "./Products.scss";
import Box from "@mui/material/Box";
import roundImg1 from "../Images/r1.png";
import roundImg2 from "../Images/r2.png";
import roundImg3 from "../Images/r3.png";
import roundImg4 from "../Images/r4.png";
import roundImg5 from "../Images/r5.png";
import roundImg6 from "../Images/r6.png";
import roundImg7 from "../Images/r7.png";
import roundImg8 from "../Images/r8.png";
import roundImg9 from "../Images/r9.png";
import roundImg10 from "../Images/r10.png";
import roundImg11 from "../Images/r11.png";
import roundImg12 from "../Images/r12.png";

const ProductCategories = () => {
  return (
    <div>
      <h2 className="productDeal">CATEGORIES TO BAG</h2>
      <div className="products">
        <Box className="boxImg">
          <div>
            <img src={roundImg1} alt="" className="productImg1" width="240" />
          </div>
          <div id="boxImg--2ndImg">
            <img
              src={roundImg7}
              alt=""
              className="productImg1 "
              id="boxImg--2ndImg"
              width="240"
            />
          </div>
        </Box>

        <Box className="boxImg">
          <div>
            <img src={roundImg2} alt="" className="productImg1" width="240" />
          </div>
          <div id="boxImg--2ndImg">
            <img
              src={roundImg8}
              alt=""
              className="productImg1 "
              id="boxImg--2ndImg"
              width="240"
            />
          </div>
        </Box>

        <Box className="boxImg">
          <div>
            <img src={roundImg3} alt="" className="productImg1" width="240" />
          </div>
          <div id="boxImg--2ndImg">
            <img
              src={roundImg9}
              alt=""
              className="productImg1 "
              id="boxImg--2ndImg"
              width="240"
            />
          </div>
        </Box>

        <Box className="boxImg">
          <div>
            <img src={roundImg4} alt="" className="productImg1" width="240" />
          </div>
          <div id="boxImg--2ndImg">
            <img
              src={roundImg10}
              alt=""
              className="productImg1 "
              id="boxImg--2ndImg"
              width="240"
            />
          </div>
        </Box>

        <Box className="boxImg">
          <div>
            <img src={roundImg5} alt="" className="productImg1" width="240" />
          </div>
          <div id="boxImg--2ndImg">
            <img
              src={roundImg11}
              alt=""
              className="productImg1 "
              id="boxImg--2ndImg"
              width="240"
              height="293"
            />
          </div>
        </Box>

        <Box className="boxImg">
          <div>
            <img src={roundImg6} alt="" className="productImg1" width="240" />
          </div>
          <div id="boxImg--2ndImg">
            <img
              src={roundImg12}
              alt=""
              className="productImg1 "
              id="boxImg--2ndImg"
              width="240"
              height="298"
            />
          </div>
        </Box>
      </div>
    </div>
  );
};

export default ProductCategories;
