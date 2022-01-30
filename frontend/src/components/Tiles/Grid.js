import React from 'react';
import Tile from './Tile';

const Grid = ({props}) => {

    const {vendors} = props;
    
    return (
        <div className='tile is-ancestor' style={{paddingLeft: 25, paddingRight: 25}}>
            <div className="tile is-parent">
                {vendors.map(tile =>
                    <Tile props={{ name: tile }} key={tile} />
                )}
            </div>
        </div>

    );
}

export default Grid;
