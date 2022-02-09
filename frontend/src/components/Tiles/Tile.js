import React from 'react';

//routing
import { useNavigate } from 'react-router-dom';
import vendors from './commons';


const randomize = () => Math.floor(Math.random() * (10-1) + 1);

const Tile = ({props}) => {

    const {select, name } = props;

    return (
    <div className="tile is-parent">
        <article className="tile is-child notification is-info custom-mod" onClick={()=>select(name)}>
            <p className="title">{name}</p>
            <p className="subtitle"> There are ({randomize()}) products available.</p>
            <figure className="image is-4by3">
                <img src={vendors[`${name}`]}/>
            </figure>
        </article>
    </div>
    );
}

export default Tile;