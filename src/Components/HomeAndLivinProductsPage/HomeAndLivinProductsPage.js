import React from "react";
import "./Index2.scss"
import MiniNavbar from "./MiniNavbar/MiniNavbar";
import FilterItems from "../FilterItems/FilterItems";
import FilterWithBrand from "../FilterItems/FilterWithBrand";
import FilterWithPrice from "../FilterItems/FilterWithPrice";
import FilterWithColor from "../FilterItems/FilterWithColor";
import Discount from "../FilterItems/Discount";
import PaginationLink from "./PaginationLink/PaginationLink";
import HouseProducts from "./HouseProducts/HouseProducts";

const HomeAndLivinProductsPage = () => {
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
         <HouseProducts />
         <PaginationLink />
        </div>
      </div>
    </>
 
  );
};

export default HomeAndLivinProductsPage;
