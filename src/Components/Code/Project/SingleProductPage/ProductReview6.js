import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReportIcon from "@mui/icons-material/Report";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const ProductReview6 = () => {
  return (
    <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingBottom: "2rem",
            paddingTop: "3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "green",
              color:"white",
              fontWeight: "bold",
              padding: "3px 7px 3px 7px",
              margin: "10px",
              marginBottom:".7rem"
            }}
          >
            <p>5</p>
            <StarBorderIcon />
          </div>
          <p>
            excellent product, nice lahanga choli, nice color , dupatta length
            is also very good.. packaging is also good, good purchase... 😍😍
            wow product
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
          <h5>32 people voted.</h5>
        </div>
      <hr />
      <Button variant="outlined" fullWidth sx={{mt:2, mr:1}} endIcon={<KeyboardArrowDownIcon />}>Show More</Button>
    </>
  );
};

export default ProductReview6;
