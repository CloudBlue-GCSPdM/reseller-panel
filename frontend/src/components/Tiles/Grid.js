import React from 'react';
import Tile from './Tile';

const Grid = ({props}) => {

    const {vendors, select } = props;
    
    return (
        <div className='tile is-ancestor'>
            <div className="tile is-parent">
                {vendors.map(tile =>
                    <Tile props={{ name: tile, select }} key={tile} />
                )}
            </div>
        </div>

    );
}

export default Grid;
