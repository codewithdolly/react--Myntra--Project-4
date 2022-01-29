import React from "react";
import "./Style.scss";
import IconButton from "@mui/material/IconButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

function FilterWithBrand() {
  return (
    <div>
      <div className="filterItems">
        <div className="cotegories">
          <h4>Discount</h4>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
          </IconButton>
        </div>
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="10% and above"
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="20% and above"
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="30% and above"
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="40% and above"
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="50% and above"
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="60% and above"
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="70% and above"
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="80% and above"
        />
        <FormControlLabel
          value="female"
          control={<Radio />}
          label="90% and above"
        />
      </div>
    </div>
  );
}

export default FilterWithBrand;
