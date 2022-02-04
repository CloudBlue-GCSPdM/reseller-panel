import React from 'react';
import Row from './Row'
import SpecialRow from './SpecialRow'
import Headers from './Headers';
import {toggledOff, toggledOn} from './Specialsub'

//local components

//do ON click function button


const Table = ({props}) => {

const {subs} = props;
const special = props.special ? props.special : false;
let other = toggledOff;

if(special){
  
}

  return <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
      <table className='table'>
        {!special ? <Headers/> : <Headers props={{special}}  />}

        { !special ? subs.map((sub, index) => <Row props={{"i":index, "row":sub }} key={index}/>) :
          other.map((sub, index) => <SpecialRow props={{"i":index, "row":sub }} key={index}/>)
        }
      </table>
  </div>;
};

export default Table;
