import React from 'react'
import "./Style.scss"
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function FilterItems() {
    return (
        <div>
        <div className="filterItems">
       <div className="cotegories"> <h4>CATEGORIES</h4>
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
            <p>Saree <span className="numbersOfItems">(5532)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>Tops <span className="numbersOfItems">(5422)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>Salwar <span className="numbersOfItems">(53254)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>Kurtas <span className="numbersOfItems">(1232)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>earings <span className="numbersOfItems">(5453)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>jeans <span className="numbersOfItems">(52332)</span></p>
            </div>

            <div className= "filterItems--short">
            <Checkbox {...label} />
            <p>Lahangas <span className="numbersOfItems">(2432)</span></p>
            </div>
            <center className="numbersOfItems2">+ 7 more</center>
        </div>
        </div>
    )
}

export default FilterItems;
