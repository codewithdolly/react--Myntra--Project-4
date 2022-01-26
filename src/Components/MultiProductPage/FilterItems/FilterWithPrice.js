import React from 'react'
import "./Style.scss"
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function FilterWithPrice() {
    return (
        <div>
        <div className="filterItems">
       <div className="cotegories"> <h4>PRICE</h4>
       <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
             <SearchIcon />
          </IconButton></div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>Rs. 99 to Rs. 500 <span className="numbersOfItems">(554)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>Rs. 500 to Rs. 999 <span className="numbersOfItems">(40)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>Rs. 999 to Rs. 2000 <span className="numbersOfItems">(332)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>Rs. 2000 to Rs. 5000 <span className="numbersOfItems">(42)</span></p>
            </div>
        </div>
        </div>
    )
}

export default FilterWithPrice;
