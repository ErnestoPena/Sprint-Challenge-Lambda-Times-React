import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
      var myclassname ='';
      myclassname = props.tab === props.selectedTab ? 'tab active-tab': 'tab'
      
  return (
    <div className={myclassname} onClick={(e) => props.changeSelected(e,props.tab)}>

      {props.tab.toUpperCase()}

    </div>
  );
};

Tab.propTypes = {
  tap: PropTypes.string
}

export default Tab;


