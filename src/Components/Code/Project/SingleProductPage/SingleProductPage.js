import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

 const SimgleProductPage=()=> {
  return (
    <>
    <ImageList
      sx={{ width: 770, p:2, pr:4}}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </>
  );
}

export default SimgleProductPage;

const itemData = [
  {
    img: 'https://m.media-amazon.com/images/I/61X80-NlwJS._UL1500_.jpg',
    rows: 5,
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/916wN4Adl5S._UL1500_.jpg',
    rows: 4,
    cols: 2,
  },

  {
    img: 'https://m.media-amazon.com/images/I/71ggf+RR4XS._UL1500_.jpg',
    author: '@arwinneil',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/81eFa1HhNVS._UL1500_.jpg',
    rows: 4,
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/71wSIU6PSGS._UL1500_.jpg',
    rows: 1.5,
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/71fxi-2HhyS._UL1500_.jpg',
    rows: 3,
    cols: 2,
  },
  {
    img: 'https://m.media-amazon.com/images/I/61X80-NlwJS._UL1500_.jpg',
    rows: 2,
    cols: 2,
  },
];
