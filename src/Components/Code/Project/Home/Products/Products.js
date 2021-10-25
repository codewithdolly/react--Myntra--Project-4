import React from 'react'
import "./Products.scss";
import ProductsDeals from './ProductsDeals';
import Bigdeal from './Bigdeal';
import ProductCategories from "./ProductCategories";

const Products=()=> {
    return (
        <div>
            <ProductsDeals />
            <ProductCategories />
            <Bigdeal />
            
            
        </div>
    )
}

export default Products;
