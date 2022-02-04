import React from 'react';

 //
// //customer name, 
// fecha de suscripción, 
// customer
//  name,
//   status,
//    ,expiración => (billing.next_date)
//     si puedes meter info financiera podría estar bien.

const special_Table = () => {

  return (<thead>
    <tr className="is-selected">
        <th> <abbr title="id">ID</abbr> </th>
        <th> <abbr title="id">Subscription ID</abbr> </th>
        <th> <abbr title="name">Customer name</abbr> </th>
        <th> <abbr title="status">Status</abbr> </th>
        <th> <abbr title="subscriptionDate">Subscription Date</abbr> </th>
        <th> <abbr title="renewalDate">Renewal Date</abbr> </th>
        <th> <abbr title="resellerid">Reseller id </abbr> </th>
        <th> <abbr title="revenue">  (Expand)  </abbr> </th>
        <th> <abbr title="user_id">  User ID  </abbr> </th>
        <th> <abbr title="name">  Client Name  </abbr> </th>
        <th> <abbr title="email">  Email </abbr> </th>
        <th> <abbr title="email">  TimeZone  </abbr> </th>
        <th> <abbr title="email">  Phone  </abbr> </th>
        
        
        
    </tr>
</thead>);
}




const Headers = ({props}) => {
  
  if (props && props.special) return special_Table()


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
