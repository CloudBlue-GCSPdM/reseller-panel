import React from 'react';


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
      <button className="card-header-icon" aria-label="more options" onClick={()=>cb()} style={{backgroundColor:"rgba(6, 78, 137, 0.8)"}}>
      <p className="fas fa-angle-right" aria-hidden="true" style={{color:"white"}}> ... </p>
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
    <th> {client_name} </th>
    <th> {email} </th>
    <th> {time_zone} </th>

</tr>);
}


const SpecialRow = ({props}) => {

    if (props && props.vendor) {
      const {vendor} = props;
        switch(vendor){
          case "TrendMicro":
            return trend_row(props)
            break;
          case "Sophos":
            return sophos_row(props)
            break;
        } 
    }
    
};

export default SpecialRow;
