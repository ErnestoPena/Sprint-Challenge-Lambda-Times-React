import React from 'react';
import './tabs.css'

const Tab = props => {
  
      var myclassname ='';
      myclassname = props.tab === props.selectedTab ? 'tab active-tab': 'tab'
      
  return (
    <div className={myclassname} onClick={(e) => props.changeSelected(e,props.tab)}>

      {props.tab.toUpperCase()}

    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
