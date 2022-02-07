//TODO pènding

import React from 'react';

const Listing = ({props}) => {

  const { product, select } = props;

  return <div>

    <br/>
<div className="card" style={{"backgroundColor" : "white" }} >
  <header className="card-header" >
    <p className="card-header-title" style={{backgroundColor: "rgb(92,168,223, 0.3)"}}>
    {product.name}
    </p>
    <button className="card-header-icon" aria-label="more options" onClick={()=>select(product)} style={{backgroundColor:"rgba(6, 78, 137, 0.8)"}}>
      <span className="icon">
        <p className="fas fa-angle-right" aria-hidden="true" style={{color:"white"}}> > </p>
      </span>
    </button>
  </header>
 
  <footer className="card-footer">
    {/* <a href="#" className="card-footer-item">See more...</a> */}
  </footer>
</div>

  </div>;
};

export default Listing;
