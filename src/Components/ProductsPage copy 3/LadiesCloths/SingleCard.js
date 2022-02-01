import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const SingleCard = ({ multi }) => {
  return (
    <>
      <div className="singleCard">
        <CardMedia
          component="img"
          height="420"
          width="50"
          image={multi.imageURL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {multi.typography}
          </Typography>

          <Typography>
            {" "}
            {multi.Price} <strike>{multi.realPrice}</strike>{" "}
          </Typography>
          <div className="rating">
            <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
            <span>{multi.rating}</span>
          </div>
          <Typography
            sx={{
              backgroundColor: "green",
              color: "white",
              fontSize: 18,
              m: 1,
              p: 1,
            }}
          >
            <center>Buy Now</center>
          </Typography>
          <Typography
            sx={{
              backgroundColor: "orange",
              color: "white",
              fontSize: 18,
              m: 1,
              mt: 0,
              p: 1,
            }}
          >
            <center>Add to Cart</center>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The best piece of wearing printed Kurti is that you don't require
            additional extras with them. It will go well with printed Kurtis.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="info">
            Offer
          </Button>
          <Button size="small" color="info">
            Know More
          </Button>
        </CardActions>
      </div>
    </>
  );
};

export default SingleCard;
