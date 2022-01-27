import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const RatingProduct=()=> {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={3.5} precision={0.5} />
    </Stack>
  );
}

export default RatingProduct;