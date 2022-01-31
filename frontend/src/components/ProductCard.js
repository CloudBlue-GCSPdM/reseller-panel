//TODO

import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const ProductCard = () => {

    let navigate = useNavigate()
    let {username} = useParams();

  return <div>

<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">Selected Product</p>
        <p className="subtitle is-6">Graph up here ^</p>
      </div>
    </div>
      <button class="button is-success" onClick={()=>navigate("/charts")}>See more</button>
    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris
      
      <br/>
      <a>Last updated:</a>
      <br/>
      <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
  </div>;
}

export default ProductCard;