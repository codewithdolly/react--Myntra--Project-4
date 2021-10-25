import React from 'react'
import "./Cards.scss"
import CardsObj2 from "./CardsObj2";
import SingleCard from './SingleCard';

const MultiCards2=()=> {
    return (
        <div className="cards">
            <SingleCard multi= {CardsObj2[0]} />
            <SingleCard multi= {CardsObj2[1]} />
            <SingleCard multi= {CardsObj2[2]} />
            <SingleCard multi= {CardsObj2[3]} />
        </div>
    )
}
export default MultiCards2;