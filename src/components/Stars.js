import React from 'react';
import Star from './Star';
import propTypes from 'prop-types';

function Stars({count}) {

    if (typeof count !== "number" || count < 1 || count > 5) {
    return null;
    }
  
    const stars = [];
    
    for(let i = 0; i < count; i++){
     stars.push(<Star key={i} />);
    }
    return <ul class="card-body-stars u-clearfix">{stars}</ul>;
  };
  
  
  export default Stars;



  Stars.propTypes = {
    count: propTypes.number,
  }
  
  Stars.defaultProps = {
    count: 0,
  }
   