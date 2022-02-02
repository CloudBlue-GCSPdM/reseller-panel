//TODO
import React from 'react';

import Listing from './Listing';

const Container = ({props}) => {

  let {products} = props;
  return <div className='scrollable-div'>
    
      {products.map(each =>
        <Listing props={{"product": each}} key={each.id}/>
        )}
  

</div>;
};

export default Container;
