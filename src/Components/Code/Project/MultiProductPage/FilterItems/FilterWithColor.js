import React from 'react'
import "./Style.scss"
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function FilterWithColor() {
    return (
        <div>
        <div className="filterItems">
       <div className="cotegories"> <h4>Color</h4>
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
            <div id="blackColor"></div>
            <p>Black  <span className="numbersOfItems">(67)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <div id="redColor"></div>
            <p>Red  <span className="numbersOfItems">(67)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <div id="redColor"></div>
            <p>Blue  <span className="numbersOfItems">(53)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <div id="greenColor"></div>
            <p>Green  <span className="numbersOfItems">(65)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <div id="pinkColor"></div>
            <p>Pink  <span className="numbersOfItems">(32)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <div id="goldColor"></div>
            <p>Gold  <span className="numbersOfItems">(10)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <div id="silverColor"></div>
            <p>Silver  <span className="numbersOfItems">(9)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <div id="brownColor"></div>
            <p>Brown  <span className="numbersOfItems">(9)</span></p>
            </div>
        </div>
        </div>
    )
}

export default FilterWithColor;
