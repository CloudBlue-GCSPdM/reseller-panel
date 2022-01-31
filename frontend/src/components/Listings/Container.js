//TODO
import React from 'react';

import Listing from './Listing';

const Container = () => {

  //temp
  let arrayProducts = ["no", "no","no","no","no","no","no","no","no","no","no","no"]
  return <div className='scrollable-div'>
    

      {arrayProducts.map(each =>
        <Listing></Listing>
        )}
  

</div>;
};

export default Container;
