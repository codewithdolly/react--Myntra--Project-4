import React, {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
  {
    value: 'Value',
    label: 'Short by : Recommended',
  },
  {
    value: 'New',
    label: 'Short by : Whats New ',
  },
  {
    value: 'Popular',
    label: 'Short by : Popularity',
  },
  {
    value: 'Disscount',
    label: 'Short by : Better Discount',
  },
  {
    value: 'Price high',
    label: 'Price : High To Low',
  },
  {
    value: 'Price low',
    label: 'Price : Low To High',
  },
  {
    value: 'Rating',
    label: ' Customer Rating',
  },
];

const Filter=()=> {
  const [currency, setCurrency] = useState('Value');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {width: '25ch', ml: 2 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          variant="standard"
          // color="primary"

        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}

export default Filter;
