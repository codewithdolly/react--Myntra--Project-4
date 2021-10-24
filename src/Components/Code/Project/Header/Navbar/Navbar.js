import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Navbar=()=> {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', pl: 5 }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Man" />
        <Tab value="two" label="Women" />
        <Tab value="three" label="Kids" />
        <Tab value="four" label="Home & Livings" />
        <Tab value="five" label="Beauty" />
      </Tabs>
    </Box>
  );
}
export default Navbar;
