import React from 'react';
import Row from './Row'
import Headers from './Headers';

//local components

const Table = ({props}) => {

const {subs} = props;

  return <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
      <table className='table'>
        {<Headers/>}
        {
            subs.map((sub, index) => <Row props={{"i":index, "row":sub }} key={index}/>)
        }
      </table>
  </div>;
};

export default Table;
