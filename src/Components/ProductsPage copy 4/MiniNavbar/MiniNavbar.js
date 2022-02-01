import React from "react";
import "./MiniNavbar.scss";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Filter from "./Filter";

const MiniNavbar = () => {
  return (
    <div className="miniNav">
      <p>
       <Link to="/" style={{textDecoration:"none"}} ><b>Home</b></Link> / <b>Women's Fashion Store</b>
      </p>
      <p className="womenStore">
        Women's Fashion Store <span className="items">- 626950 items</span>
      </p>

      <div className="filter">
        <div>
          <h4>FILTERS</h4>
        </div>
        <div>
          <Button variant="text" endIcon={<KeyboardArrowDownIcon />} sx={{mr: 1 }
      }>
            Bundles
          </Button>
          <Button variant="text" endIcon={<KeyboardArrowDownIcon />} sx={{mr: 1 }}>
            Bundles
          </Button>
          <Button variant="text" endIcon={<KeyboardArrowDownIcon />}>
            Bundles
          </Button>
        </div>
        <div>
            <Filter />
        </div>
      </div>
    </div>
  );
};

export default MiniNavbar;
