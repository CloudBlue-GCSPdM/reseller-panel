import React from 'react';




const SpecialRow = ({props}) => {

    const { row, i} = props;
    const customerName = row.params[0].id || "not available"
    const createdAt = row.events.created.at.split("T")[0]
    const billinNextDate =  row.billing.hasOwnProperty('next_date') ?  row.billing.next_date.split("T")[0] : "-"
    const user_id = row.extra.users[0].customer_id
    const client_name = row.extra.users[0].first_name +  row.extra.users[0].last_name
    const reseller_id = row.extra.users[0].user_id
    const expand = row.extra.expand ? "button goes here" : " "
    const email = row.extra.users[0].email
    const time_zone = row.extra.users[0].time_zone
    const phone = row.extra.users[0].phone.number



    //missing
    //resellerid, expand, user_id, clientname (first + lastname) , email, time_zone, phone

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
};

export default SpecialRow;
