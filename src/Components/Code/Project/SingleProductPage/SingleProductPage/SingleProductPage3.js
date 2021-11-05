import React from "react";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const SingleProductPage3 = () => {
  return (
    <>
      <h2>
        Rs. 899 <span className="realPrice">Rs. 3599</span>
        <span className="productOffer"> (75% OFF)</span>
      </h2>
      <Typography color="secondary" sx={{ my: 1 }}>
        inclusive of all taxes
      </Typography>
      <div>
        <Button
          variant="contained"
          color="success"
          startIcon={<ShoppingCartIcon />}
          sx={{ px: 10, py: 2, mr: 2 }}
        >
          ADD TO CART
        </Button>
        <Button
          variant="outlined"
          color="warning"
          startIcon={<FavoriteBorderIcon />}
          sx={{ px: 7, py: 2, mr: 2 }}
        >
          WISHLIST
        </Button>
      </div>
      <Button
        variant="contained"
        startIcon={<LocalMallIcon />}
        sx={{
          px: 24,
          py: 2,
          my: 2,
          backgroundColor: "#ff3e6c",
          fontSize: "22px",
        }}
      >
        BUY NOW
      </Button>
      <hr />
      <div style={{ padding: "2rem" }}>
        <h3>
          Rs. 899 <span className="realPrice">Rs. 3599</span>
          <span className="productOffer"> (75% OFF)</span>
        </h3>
        <p>
          <span
            style={{ color: "#ff3e6c", fontWeight: "bold", fontSize: "16px" }}
          >
            Traditional MALL
          </span>
        </p>
      </div>
      <hr />
    </>
  );
};

export default SingleProductPage3;
