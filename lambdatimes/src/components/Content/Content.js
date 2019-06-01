import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: tabData,
      cards: cardData
    };
  }
 
  changeSelected = (e,tab) => {
    console.log(tab)
    this.setState({
      selected: tab
    })  
  };

  
  filterCards = () => {
     let myfilteredcards = this.state.cards
      myfilteredcards = myfilteredcards.filter((filtercards) => {
      filtercards.tab === this.state.selected;
      })

      this.setState({
        cards: myfilteredcards
        })
        console.log(myfilteredcards)
    return this.state.cards;
  };

  render() {
    return (
      <div className="content-container">
      
        <Tabs tabs={this.state.tabs} changeSelected={this.changeSelected} selectedTab={this.state.selected}/>
        
        <Cards cards={this.state.cards} />
      </div>
    );
  }
}
