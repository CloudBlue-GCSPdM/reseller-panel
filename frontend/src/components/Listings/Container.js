//TODO
import React from 'react';

import Listing from './Listing';

const Container = () => {

  //temp
  let arrayProducts = ["no", "no1","no2","no3","no4","no5","no6","no7","no8","no9","no10","no11"]
  return <div className='scrollable-div'>
    

      {arrayProducts.map(each =>
        <Listing key={each}/>
        )}
  

</div>;
};

export default Container;
