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
    this.setState({
      selected: tab
    })  
  };

  filterCards = () => {
    
    var mycards = cardData
    var myselectedtab = this.state.selected
    if (myselectedtab === 'all') {
        return mycards;  
    } else {
        const mycardsresults = mycards.filter(filtercards => {
          return filtercards.tab === myselectedtab;
      })
     return mycardsresults;
    }  
  };

  render() {
    return (
      <div className="content-container">
        <Tabs tabs={this.state.tabs} changeSelected={this.changeSelected} selectedTab={this.state.selected}/>
        <Cards cards={this.filterCards()} />
      </div>
    );
  }
}
