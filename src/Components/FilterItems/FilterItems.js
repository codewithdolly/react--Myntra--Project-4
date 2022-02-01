import React from "react";
import "./Style.scss";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FilterItems() {
  return (
    <div>
      <div className="filterItems">
        <div className="cotegories">
          {" "}
          <h4>CATEGORIES</h4>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <SearchIcon />
          </IconButton>
        </div>
        {Category.map((item) => {
          return (
            <>
              <div className="filterItems--short">
                <Checkbox {...label} />
                <p>
                  {item.name} <span className="numbersOfItems">({item.item})</span>
                </p>
              </div>
            </>
          );
        })}
      </div>
      <center className="numbersOfItems2">+ 27 more</center>
    </div>
  );
}

export default FilterItems;

const Category = [
  {
    name: "Saree",
    item: "2345",
  },
  {
    name: "lahanga",
    item: "5345",
  },
  {
    name: "top",
    item: "2345",
  },
  {
    name: "tshirt",
    item: "52345",
  },
  {
    name: "top",
    item: "72345",
  },
  {
    name: "jeans",
    item: "23435",
  },
  {
    name: "Kurta",
    item: "23345",
  },
  {
    name: "Chunari",
    item: "2345",
  },
  {
    name: "sarara",
    item: "32345",
  },
  {
    name: "jacket",
    item: "234565",
  },
  {
    name: "sweatshirt",
    item: "2343",
  },
  {
    name: "belt",
    item: "25346",
  },
  {
    name: "formal pants",
    item: "23345",
  },
  {
    name: "wallets",
    item: "8345",
  },
  {
    name: "Shirts",
    item: "2545",
  },
];
