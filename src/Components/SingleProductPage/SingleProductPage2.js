import React from "react";
import "./SingleProductPage.scss";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

function SingleProductPage2() {
  return (
    <>
      <Button href="#Choli" color="primary">
        Brand: Anara
      </Button>
      <h1>Lehenga Choli</h1>
      <p>
        Anara Women's Net Semi-Stitched Lehenga Choli. Embroidered || Duptta
        Work : Embroidered & Sequence Work|| Stitched Type : Lehenga Full
        Stitched and Zip Attach.{" "}
      </p>
      <div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "& > *": {
              p: 2,
            },
          }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>
              4.2
              <StarIcon />
            </Button>
            <Button>1.2k Ratings</Button>
          </ButtonGroup>
        </Box>
        <hr />
      </div>
    </>
  );
}

export default SingleProductPage2;
