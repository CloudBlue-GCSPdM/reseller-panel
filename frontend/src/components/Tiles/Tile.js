import React from 'react';

//import pictures
import Sophos from "../../pics/sophos.png"
import McAfee from "../../pics/McAfee.jpeg"
import TrendMicro from "../../pics/TrendMicro.jpg"
import BitDefender from "../../pics/Bitdefender.png"
import Mimecast from "../../pics/mimeast.png"

const vendors = {
    "Sophos" : Sophos,
    "McAfee" : McAfee,
    "TrendMicro" : TrendMicro,
    "BitDefender" : BitDefender,
    "Mimecast" : Mimecast
}

const Tile = ({props}) => {
    return (
    <div className="tile is-parent">
        <article className="tile is-child notification is-info">
            <p className="title">{props.name}</p>
            <p className="subtitle">descriptive text goes here</p>
            <figure className="image is-4by3">
                <img src={vendors[`${props.name}`]} />
            </figure>
        </article>
    </div>
    );
}

export default Tile;