import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReportIcon from "@mui/icons-material/Report";
import { Button } from "@mui/material";

const ProductReview3 = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingBottom: "1rem",
          paddingTop: "2.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "green",
            color: "white",
            fontWeight: "bold",
            padding: "3px 7px 3px 7px",
            margin: "10px",
            marginBottom: "1rem",
          }}
        >
          <p>4.5</p>
          <StarBorderIcon />
        </div>
        <p>
          The product is exactly same as in pictures. The quality is great and
          is full value for money.
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
        <h5>42 people voted.</h5>
      </div>
      <hr />
    </>
  );
};

export default ProductReview3;
