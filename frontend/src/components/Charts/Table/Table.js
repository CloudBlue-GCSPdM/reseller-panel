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
    let loaded_data = bit_data;
  
    try {
      
      const real_data = props.details.data.result;
      const company_1 = real_data[0].name
      const company_1_id = real_data[0].id
      const company_2 = real_data[1].name
      const company_2_id = real_data[1].id
      const createdAt = real_data[0].createdAt
      const createdAt2 = real_data[1].createdAt

      loaded_data[1].companyName = company_1
      loaded_data[2].companyName = company_2
      loaded_data[1].companyId = company_1_id
      loaded_data[2].companyId = company_2_id
      loaded_data[1].creationDate = createdAt
      loaded_data[2].creationDate = createdAt2

    } catch (error) {
      
    }

    other = showData ? loaded_data: loaded_data.slice(0,1);
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
