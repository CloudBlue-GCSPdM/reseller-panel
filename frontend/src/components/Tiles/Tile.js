import React from 'react';

const Tile = ({props}) => {
    return (
    <div className="tile is-parent">
        <article className="tile is-child notification is-info">
            <p className="title">{props.name}</p>
            <p className="subtitle">(Logo goes here)</p>
            <figure className="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png" />
            </figure>
        </article>
    </div>
    );
}

export default Tile;