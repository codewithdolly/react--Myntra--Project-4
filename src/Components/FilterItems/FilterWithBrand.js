import React from 'react'
import "./Style.scss"
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function FilterWithBrand() {
    return (
        <div>
        <div className="filterItems">
       <div className="cotegories"> <h4>Brands</h4>
       <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
             <SearchIcon />
          </IconButton></div>
            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>swatika <span className="numbersOfItems">(45)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>Art Street <span className="numbersOfItems">(21)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>MORKANTH JEWELLERY <span className="numbersOfItems">(19)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>Swiss Design <span className="numbersOfItems">(10)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>earings <span className="numbersOfItems">(7)</span></p>
            </div>

            <center className="numbersOfItems2">+ 14 more</center>
        </div>
        </div>
    )
}

export default FilterWithBrand;
