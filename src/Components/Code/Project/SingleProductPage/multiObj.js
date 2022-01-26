import React from 'react'
import ProductReviewobj from "./ProductReviewobj";
import ProductReview2 from './ProductReview2';

const multiObj=()=> {
    return (
        <>
            <ProductReview2 multi= {ProductReviewobj[0]} />
            <ProductReview2 multi= {ProductReviewobj[1]} />
            <ProductReview2 multi= {ProductReviewobj[2]} />
            <ProductReview2 multi= {ProductReviewobj[3]} />
            <ProductReview2 multi= {ProductReviewobj[5]} />
        </>
    )
}
export default multiObj;
