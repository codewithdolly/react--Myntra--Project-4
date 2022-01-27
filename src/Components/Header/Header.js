import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import "./Header.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Logo from "../Images/Logo.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchBar from "./SearchBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { MultiProductPage, SingleProductPage, WomenCloth } from "..";

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <BrowserRouter>
        <Box sx={{ flexGrow: 1 }} className="header">
          <AppBar
            position="static"
            sx={{ backgroundColor: "white", color: "black" }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              ></IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src={Logo} alt="" width="40" />
              </Typography>
              {/* Navbar starts */}
              <Box sx={{ width: "100%", pl: 5 }}>
                <Link to="/man" className="header--navbar">
                  <Tab value="one" label="Man" className="header--navbar--nav" />
                </Link>

                <Link to="/women" className="header--navbar">
                  <Tab value="two" label="Women" className="header--navbar--nav" />
                </Link>
                <Link to="/kids" className="header--navbar">
                  <Tab value="three" label="Kids" className="header--navbar--nav" />
                </Link>
                <Link to="/home&living" className="header--navbar">
                  <Tab value="four" label="Home & Livings" className="header--navbar--nav" />
                </Link>
                <Link to="/beauty" className="header--navbar">
                  <Tab value="five" label="Beauty" className="header--navbar--nav" />
                </Link>
              </Box>
              {/* Navbar ends */}
              <SearchBar />

              {/* Notification Starts */}
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="icon label tabs example"
              >
                <Tab icon={<PersonOutlineOutlinedIcon />} label="Profile" />
                <Tab icon={<FavoriteBorderIcon />} label="Wishlist" />
                <Tab icon={<ShoppingBagOutlinedIcon />} label="Bag" />
              </Tabs>
            </Toolbar>
          </AppBar>
        </Box>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/women" element={<WomenCloth />} />
        </Routes>
        {/* <MultiProductPage />
    <SingleProductPage /> */}
      </BrowserRouter>
    </>
  );
};

export default Header;
