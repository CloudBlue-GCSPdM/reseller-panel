//TODO, maybe change to class component

import React from 'react';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({props}) => {

  let navigate = useNavigate()

    const { graph, pic, description, published_at, name, id} = props.selectedProduct;
    console.log("what is going on", {props})
   
  return <div>

<div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={graph} alt="Placeholder image"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={pic} alt="Placeholder image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">{name}</p>
        <p className="subtitle is-6">{id}</p>
      </div>
    </div>
      <button className="button is-success" onClick={()=>navigate("/charts")}>See more</button>
    <div className="content">
      <br/>
        {description}
      <br/>
      <a>Last updated:</a>
      <br/>
      <time>{published_at}</time>
    </div>
  </div>
</div>
  </div>;
}

export default ProductCard;
