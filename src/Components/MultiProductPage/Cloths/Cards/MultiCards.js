import React from 'react'
import "./Cards.scss"
import CardsObj from "./CardsObj";
import SingleCard from './SingleCard';

const MultiCards=()=> {
    return (
        <div className="cards">
            <SingleCard multi= {CardsObj[0]} />
            <SingleCard multi= {CardsObj[1]} />
            <SingleCard multi= {CardsObj[2]} />
            <SingleCard multi= {CardsObj[3]} />
        </div>
    )
}
export default MultiCards;