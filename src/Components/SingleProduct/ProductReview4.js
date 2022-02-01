import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReportIcon from "@mui/icons-material/Report";
import { Button } from "@mui/material";

const ProductReview4 = () => {
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
            marginBottom: "5rem",
          }}
        >
          <p>5</p>
          <StarBorderIcon />
        </div>
        <p>
          Beautiful lehenga,😍 looks exactly as in the picture, provided with an
          astar inside. The choli cloth is adequate, work done over it is great.
          The most beautiful part is the dupatta, it is so beautiful, vibrant
          colour and very good material used. The work done is ultimate benarsi
          style. I'm drooling over it. I have bought it for my haldi function,
          yellow and red combination will look great. Thank you Mansvi fashion
          and Amazon.
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
        <h5>162 people voted.</h5>
      </div>
      <hr />
    </>
  );
};

export default ProductReview4;
