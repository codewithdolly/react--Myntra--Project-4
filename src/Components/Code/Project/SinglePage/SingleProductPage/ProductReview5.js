import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReportIcon from "@mui/icons-material/Report";
import { Button } from "@mui/material";

const ProductReview5 = () => {
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "2rem",
            paddingTop: "1rem",
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
            The color of the lahanga is as shown in the image, but the quality
            of the Dress is up to the par with the price. But overall It good.
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
    </div>
  );
};

export default ProductReview5;
