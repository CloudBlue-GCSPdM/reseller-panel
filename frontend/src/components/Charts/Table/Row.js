import React from 'react';

const Row = ({props}) => {

    const { row, i} = props;
    const customerName = row.tiers.customer.name || "not available"
    const createdAt = row.events.created.at.split("T")[0]
    const billinNextDate =  row.billing.hasOwnProperty('next_date') ?  row.billing.next_date.split("T")[0] : "-"

  return (
  <tr>
    <th> {i+1} </th>
    <th> {row.id} </th>
    <th> {customerName}</th>
    <th> {row.status}</th>
    <th> {createdAt} </th>
    <th> {billinNextDate}</th>
    <th> Coming soon... </th>
</tr>
);
};

export default Row;
