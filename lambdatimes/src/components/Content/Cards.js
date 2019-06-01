import React from 'react';
import Card from './Card';

const Cards = props => {
  console.log(props)
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}

          {props.cards.map((mycards,i) =>
              <Card cards={mycards} key={i}/>
          )}  

    </div>
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;