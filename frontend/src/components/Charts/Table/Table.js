import React from 'react';
import Row from './Row'
import SpecialRow from './SpecialRow'
import Headers from './Headers';
import {toggledOff, toggledOn, sopho_endpoints, bit_data } from './Specialsub'
import { useState } from 'react';

//local components
//do ON click function button
// const expandClick = () => toggledOn7
//table component should receive array of rows in json format.
//headers should be passed in too


const Table = ({props}) => {

  const [showData, setShowData] = useState(false)

  const ToggleData = () => {
    setShowData(!showData)
  }

const {subs} = props;
const special = props.special ? props.special : false;
const vendor = props.vendor ? props.vendor : "regular";

//in  this switch prepare the dynamic headers too.
let other = [];
switch(vendor){
  case "TrendMicro":
    other = showData ? toggledOff: toggledOff.slice(0,1);

    break;
  case "Sophos":
    other = showData ? toggledOn: toggledOn.slice(0,1);
    break;
  case "Sophos_special":
    other = sopho_endpoints;
    break;

  case "BitDefender":
    other = showData ? bit_data: bit_data.slice(0,1);
    break;

  case "regular":
    other = [];

}

  return <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
      <table className='table'>
        {!special ? <Headers/> :  <Headers props={{special, "vendor" : vendor, "toggled": showData}}  />}

        { !special ? subs.map((sub, index) => <Row props={{"i":index, "row":sub }} key={index}/>) :
          other.map((sub, index) => <SpecialRow props={{"i":index, "row":sub, "vendor": vendor,  "toggle": ToggleData }} key={index}/>)
        }
      </table>
  </div>;
};

export default Table;
