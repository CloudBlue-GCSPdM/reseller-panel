//TODO
import React from 'react';

import Listing from './Listing';

const Container = ({props}) => {

  let {products, select} = props;
  return <div className='scrollable-div'>
    
      {products.map(each =>
        <Listing props={{"product": each, select}} key={each.id}/>
        )}
  

</div>;
};

export default Container;
