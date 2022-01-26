import React from 'react'
import "./Cards.scss"
import CardsObj3 from "./CardsObj3";
import SingleCard from './SingleCard';

const MultiCards=()=> {
    return (
        <div className="cards">
            <SingleCard multi= {CardsObj3[0]} />
            <SingleCard multi= {CardsObj3[1]} />
            <SingleCard multi= {CardsObj3[2]} />
            <SingleCard multi= {CardsObj3[3]} />
        </div>
    )
}
export default MultiCards;