import React from "react";
import "./Index2.scss"
import MiniNavbar from "./MiniNavbar/MiniNavbar";
import FilterItems from "../FilterItems/FilterItems";
import FilterWithBrand from "../FilterItems/FilterWithBrand";
import FilterWithPrice from "../FilterItems/FilterWithPrice";
import FilterWithColor from "../FilterItems/FilterWithColor";
import Discount from "../FilterItems/Discount";
import PaginationLink from "./PaginationLink/PaginationLink";
import BeautyItems from "./BeautyItems/BeautyItems";

const BeautyProductsPage = () => {
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
         <BeautyItems />
         <PaginationLink />
        </div>
      </div>
    </>
 
  );
};

export default BeautyProductsPage;
