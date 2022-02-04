//TODO pènding

import React from 'react';

const Listing = ({props}) => {

  const { product } = props;

  return <div>

<div className="card"  >
  <header className="card-header" >
    <p className="card-header-title" style={{"backgroundColor" : "rgb(92,168,223, 0.3)"}}>
    {product.name}
    </p>
    <button className="card-header-icon" aria-label="more options">
      <span className="icon">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </header>
  <div className="card-content">
    <div className="content">
      {product.short_description}
      {/* <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a> */}
      <br/>
      {/* <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
    </div>
  </div>
  <footer className="card-footer">
    {/* <a href="#" className="card-footer-item">See more...</a> */}
  </footer>
</div>

  </div>;
};

export default Listing;
