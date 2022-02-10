import React from 'react';
import { BsCloudArrowDown } from 'react-icons/bs'

const trend_row=(props)=>{


    const { toggle } = props;

    const { row, i} = props;
    const customerName = row.params[0].id || "not available"
    const createdAt = row.events.created.at.split("T")[0]
    const billinNextDate =  row.billing.hasOwnProperty('next_date') ?  row.billing.next_date.split("T")[0] : "-"
    const user_id = row.extra.users[0].customer_id
    const client_name = row.extra.users[0].first_name +  row.extra.users[0].last_name
    const reseller_id = row.extra.users[0].user_id
    const expand = row.extra.expand ? buttonToggle(toggle) : " "
    const email = row.extra.users[0].email
    const time_zone = row.extra.users[0].time_zone
    const phone = row.extra.users[0].phone.number


  return (
    <tr>
    <th> {i+1} </th>
    <th> {row.id} </th>
    <th> {customerName}</th>
    <th> {row.status}</th>
    <th> {createdAt} </th>
    <th> {billinNextDate}</th>
    <th> {reseller_id}</th>
    <th> {expand} </th>
    <th> {user_id} </th>
    <th> {client_name} </th>
    <th> {email} </th>
    <th> {time_zone} </th>
    <th> {phone} </th> 
</tr>);
}

const buttonToggle = (cb) => {

 return (
   <div style={{color:"#000000"}}>
      <button className="card-header-icon"  onClick={()=>cb()} >
      <BsCloudArrowDown size="2em"/>
         </button> 
   </div>
 )

}

const sophos_row = (props) =>{

  const { toggle } = props;

  const { row, i} = props;
  const customerName = row.params[0].id || "not available"
  const createdAt = row.events.created.at.split("T")[0]
  const billinNextDate =  row.billing.hasOwnProperty('next_date') ?  row.billing.next_date.split("T")[0] : "-"
  const user_id = row.extra.users[0].customer_id
  const client_name = row.extra.users[0].first_name +  row.extra.users[0].last_name
  const reseller_id = row.extra.users[0].user_id
  const expand = row.extra.expand ? buttonToggle(toggle) : " "
  const email = row.extra.users[0].email
  const time_zone = row.extra.users[0].time_zone


  return (
    <tr>
    <th> {i+1} </th>
    <th> {row.id} </th>
    <th> {customerName}</th>
    <th> {row.status}</th>
    <th> {createdAt} </th>
    <th> {billinNextDate}</th>
    <th> {reseller_id}</th>
    <th> {expand} </th>
    <th> {user_id} </th>
    <th> {email} </th>

</tr>);
}

const bit_defender_row = (props) => {

    const { toggle } = props;

    const {i, row} = props;
    console.log("inside of row", props)

    const createdAt = row.createdAt.split("T")[0];
    const billingNextDate = row.billingNextDate.split("T")[0];
    const creationDate = row.creationDate.split("T")[0];
    const licenseExp = row.licenseExp.split("T")[0];

    const {id, customerName, rowStatus, resellerId,
   companyName, companyId, partnerType, usedSlots } = props.row;

    const expand = row.expand ? buttonToggle(toggle) : " "

    return (
      <tr>
      <th> {i+1} </th>
      <th> {id} </th>
      <th> {customerName}</th>
      <th> {rowStatus}</th>
      <th> {createdAt} </th>
      <th> {billingNextDate}</th>
      <th> {resellerId}</th>
      <th> {expand}</th>
      <th> {companyName}</th>
      <th> {companyId}</th>
      <th> {creationDate}</th>
      <th> {partnerType}</th>
      <th> {licenseExp}</th>
      <th> {usedSlots}</th>
  
  </tr>);


}

const sophos_special_row = (props) => {


const {i} = props;
 const { endpoint_name, tenand_id, platform, health, threats } = props.row

  return (
    <tr>
    <th> {i+1} </th>
    <th> {endpoint_name} </th>
    <th> {tenand_id}</th>
    <th> {platform}</th>
    <th> {health} </th>
    <th> {threats}</th>

</tr>);

}

const SpecialRow = ({props}) => {

    if (props && props.vendor) {
      const {vendor} = props;
        switch(vendor){
          case "TrendMicro":
            return trend_row(props)
            
          case "Sophos":
            return sophos_row(props)
          case "Sophos_special":
            return sophos_special_row(props)
          case "BitDefender":
            return bit_defender_row(props)
            
        } 
    }
    
};

export default SpecialRow;
