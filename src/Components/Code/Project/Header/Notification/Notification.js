import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const Notification = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tab icon={<PersonOutlineOutlinedIcon />} label="Profile" />
        <Tab icon={<FavoriteBorderOutlinedIcon />} label="Wishlist" />
        <Tab icon={<ShoppingBagOutlinedIcon />} label="Bag" />
      </Tabs>
    </div>
  );
};
export default Notification;
