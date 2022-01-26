import React from "react";
import "./Products.scss";
import Grid from "@mui/material/Grid";
import ProductOffer1 from "../Images/d1.png";
import ProductOffer2 from "../Images/d2.png";
import ProductOffer3 from "../Images/d3.png";
import ProductOffer4 from "../Images/d4.png";
import ProductOffer5 from "../Images/d5.png";

const ProductsBestDeal = () => {
  return (
    <div>
      <div className="products">
        <Grid item sm={6}>
          <img
            src={ProductOffer1}
            alt=""
            className="ProductOffer"
            width="280"
          />
        </Grid>
        <Grid item sm={6}>
          <img
            src={ProductOffer2}
            alt=""
            className="ProductOffer"
            width="280"
          />
        </Grid>
        <Grid item sm={6}>
          <img
            src={ProductOffer3}
            alt=""
            className="ProductOffer"
            width="280"
          />
        </Grid>
        <Grid item sm={6}>
          <img
            src={ProductOffer4}
            alt=""
            className="ProductOffer"
            width="280"
          />
        </Grid>
        <Grid item sm={6}>
          {" "}
          <img
            src={ProductOffer5}
            alt=""
            className="ProductOffer"
            width="280"
          />
        </Grid>
      </div>
    </div>
  );
};

export default ProductsBestDeal;
