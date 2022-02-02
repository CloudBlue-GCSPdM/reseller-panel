import React from 'react';

 //
// //nombre de customer, 
// fecha de suscripción, 
// customer
//  name,
//   status,
//    ,expiración => (billing.next_date)
//     si puedes meter info financiera podría estar bien.

const Headers = () => {
  return (<thead>
    <tr className="is-selected">
        <th> <abbr title="id">ID</abbr> </th>
        <th> <abbr title="id">Subscription ID</abbr> </th>
        <th> <abbr title="name">Customer name</abbr> </th>
        <th> <abbr title="status">Status</abbr> </th>
        <th> <abbr title="subscriptionDate">Subscription Date</abbr> </th>
        <th> <abbr title="renewalDate">Renewal Date</abbr> </th>
        <th> <abbr title="revenue">Revenue</abbr> </th>
    </tr>
</thead>);
};

export default Headers;
