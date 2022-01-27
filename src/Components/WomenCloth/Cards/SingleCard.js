import * as React from 'react';
import Card from '@mui/material/Card';
import "./Cards.scss"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RatingProduct from './RatingProduct';

const SingleCard= ({multi})=> {
  return (
    <Card sx={{ maxWidth: 340, m:1 }}>
      <CardMedia
        component="img"
        height="420"
        width= "50"
        image= {multi.imageURL}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {multi.typography}
        </Typography>
        
        <Typography> {multi.Price} <strike>{multi.realPrice}</strike> </Typography> 
        <div className="rating">
        <RatingProduct /><span>{multi.rating}</span>
        </div>
        <Typography sx={{backgroundColor: "green",  color: "white", fontSize: 18, m:1, p:1}} ><center>Buy Now</center></Typography>
        <Typography sx={{backgroundColor: "orange", color: "white", fontSize: 18, m:1,mt:0, p:1}} ><center>Add to Cart</center></Typography>
        <Typography variant="body2" color="text.secondary">
        The best piece of wearing printed Kurti is that you don't require additional extras with them. It will go well with printed Kurtis.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Offer</Button>
        <Button size="small">Know More</Button>
      </CardActions>
    </Card>
  );
}

export default SingleCard;
