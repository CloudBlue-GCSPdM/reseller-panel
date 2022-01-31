import React from 'react';

//routing
import { useNavigate } from 'react-router-dom';
import vendors from './commons';


const randomize = () => Math.floor(Math.random() * 10)

const Tile = ({props}) => {

    let navigate = useNavigate();

    return (
    <div className="tile is-parent">
        <article className="tile is-child notification is-info" onClick={()=>navigate(`/charts/${props.name}`)}>
            <p className="title">{props.name}</p>
            <p className="subtitle"> There are ({randomize()}) products available.</p>
            <figure className="image is-4by3">
                <img src={vendors[`${props.name}`]} />
            </figure>
        </article>
    </div>
    );
}

export default Tile;