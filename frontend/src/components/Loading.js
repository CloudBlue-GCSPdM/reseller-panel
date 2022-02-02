//TODO
import { MutatingDots } from  'react-loader-spinner'

import React from 'react';

const Loading = () => {
  return <div>
      <MutatingDots
          heigth="100"
          width="100"
          color='dark-blue'
          ariaLabel='loading'
      />
  </div>;
};

export default Loading;
