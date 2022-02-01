import React from "react";
import "./Index2.scss"
import MiniNavbar from "./MiniNavbar/MiniNavbar";
import FilterItems from "../FilterItems/FilterItems";
import FilterWithBrand from "../FilterItems/FilterWithBrand";
import FilterWithPrice from "../FilterItems/FilterWithPrice";
import FilterWithColor from "../FilterItems/FilterWithColor";
import Discount from "../FilterItems/Discount";
import PaginationLink from "./PaginationLink/PaginationLink";
import LadiesCloths from "./LadiesCloths/LadiesCloths";

const WomensProductsPage = () => {
  return (
    <>
      <MiniNavbar />
      <div className="body2">
        <div className="leftSide">
          <FilterItems />
          <FilterWithBrand />
          <FilterWithPrice />
          <FilterWithColor />
          <Discount />
        </div>
        <div className="rightSide">
         <LadiesCloths />
         <PaginationLink />
        </div>
      </div>
    </>
 
  );
};

export default WomensProductsPage;
