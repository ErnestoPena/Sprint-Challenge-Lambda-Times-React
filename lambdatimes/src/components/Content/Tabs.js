import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((mappedtabs,i) => (
          <Tab tab = {mappedtabs} key={i} changeSelected={props.changeSelected} selectedTab={props.selectedTab}/>
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  key: PropTypes.number
}

export default Tabs;


