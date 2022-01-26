import * as React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./Header.scss";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Logo from "../Images/Logo.png";
import Navbar from "./Navbar";
import Notification from "./Notification";
import SearchBar from './SearchBar';
import { MultiProductPage, SingleProductPage } from '..';


const Header=()=> {
  return (
    <>
      <BrowserRouter>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'white', color: "black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img src={Logo} alt="" width= "40"/>
          </Typography>
          <Navbar />
          <SearchBar />
          <Notification />
        </Toolbar>
      </AppBar>
    </Box>
    {/* <MultiProductPage />
    <SingleProductPage /> */}
    </BrowserRouter>
    </>
  );
}

export default Header;
