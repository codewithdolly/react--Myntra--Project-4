import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReportIcon from "@mui/icons-material/Report";
import { Button } from "@mui/material";
import ProductReview3 from "./ProductReview3"
import ProductReview4 from "./ProductReview4"
import ProductReview5 from "./ProductReview5"
import ProductReview6 from "./ProductReview6"

const ProductReview2 = () => {
  return (
    <div>
      <h2>Customer Rewiews(358)</h2>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "2rem",
            paddingTop: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "green",
              fontWeight: "bold",
              padding: "3px",
              margin: "10px",
            }}
          >
            <p>5</p>
            <StarBorderIcon />
          </div>
          <p>
            The quality and look of the product is very nice and elegant but the
            piece of blouse is small which doesn't fit for some people of a
            community. I request seller to make blouse cloth available of 1
            metre.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            variant="contained"
            color="success"
            size="small"
            startIcon={<FavoriteBorderIcon />}
          >
            HelpFull
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="error"
            startIcon={<ReportIcon />}
            sx={{ mx: 1 }}
          >
            Report abuse
          </Button>
          <h3>312 people voted.</h3>
        </div>
      </div>
      <hr />
      <ProductReview3 />
      <ProductReview4 />
      <ProductReview5 />
      <ProductReview6 />
      
    </div>
  );
};

export default ProductReview2;
