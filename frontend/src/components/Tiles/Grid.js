import React from 'react';
import Tile from './Tile';

const Grid = ({props}) => {

    const {vendors} = props;
    
    return (
        <div className="tile is-ancestor is-four-fifths">
            {vendors.map(tile =>
                <Tile props={{name:tile}} key={tile} />
            )}
        </div>

    );
}

export default Grid;
