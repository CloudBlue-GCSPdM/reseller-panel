import React from 'react';


const trend_Table = (toggled) => {

  if(toggled){
    return(<thead>
      <tr className="is-selected">
          <th> <abbr title="id">ID</abbr> </th>
          <th> <abbr title="id">Subscription ID</abbr> </th>
          <th> <abbr title="name">Customer name</abbr> </th>
          <th> <abbr title="status">Status</abbr> </th>
          <th> <abbr title="subscriptionDate">Subscription Date</abbr> </th>
          <th> <abbr title="renewalDate">Renewal Date</abbr> </th>
          <th> <abbr title="resellerid">Reseller ID </abbr> </th>
          <th> <abbr title="revenue">   </abbr> </th>
          <th> <abbr title="user_id">  User ID  </abbr> </th>
          <th> <abbr title="name">  Client Name  </abbr> </th>
          <th> <abbr title="email">  Email </abbr> </th>
          <th> <abbr title="email">  TimeZone  </abbr> </th>    
      </tr>
  </thead>);
  }

  return (<thead>
    <tr className="is-selected">
        <th> <abbr title="id">ID</abbr> </th>
        <th> <abbr title="id">Subscription ID</abbr> </th>
        <th> <abbr title="name">Customer name</abbr> </th>
        <th> <abbr title="status">Status</abbr> </th>
        <th> <abbr title="subscriptionDate">Subscription Date</abbr> </th>
        <th> <abbr title="renewalDate">Renewal Date</abbr> </th>
        <th> <abbr title="resellerid">Reseller ID </abbr> </th>
        <th> <abbr title="revenue">   </abbr> </th>
        
        
        
    </tr>
</thead>);
}


const sophos_table = (toggled) => {

 if(toggled){
  return (<thead>
    <tr className="is-selected">
        <th> <abbr title="id">ID</abbr> </th>
        <th> <abbr title="id">Subscription ID</abbr> </th>
        <th> <abbr title="name">Customer name</abbr> </th>
        <th> <abbr title="status">Status</abbr> </th>
        <th> <abbr title="subscriptionDate">Subscription Date</abbr> </th>
        <th> <abbr title="renewalDate">Renewal Date</abbr> </th>
        <th> <abbr title="resellerid">Reseller ID </abbr> </th>
        <th> <abbr title="revenue">    </abbr> </th>
        <th> <abbr title="tenant_name">  Tenant ID </abbr> </th>
        <th> <abbr title="data_region">  Data Region </abbr> </th>

             
    </tr>
</thead>);
 }

 return (<thead>
  <tr className="is-selected">
      <th> <abbr title="id">ID</abbr> </th>
      <th> <abbr title="id">Subscription ID</abbr> </th>
      <th> <abbr title="name">Customer name</abbr> </th>
      <th> <abbr title="status">Status</abbr> </th>
      <th> <abbr title="subscriptionDate">Subscription Date</abbr> </th>
      <th> <abbr title="renewalDate">Renewal Date</abbr> </th>
      <th> <abbr title="resellerid">Reseller ID </abbr> </th>
      <th> <abbr title="revenue">    </abbr> </th>
           
  </tr>
</thead>);



}

// Table #2
// Endpoint Name
// Tenant ID
// Platform
// Health
// Threats

const sophos_special = () => {

  return (<thead>
    <tr className="is-selected">
        <th> <abbr title="id">id</abbr> </th> 
        <th> <abbr title="Endpoint name">Endpoint Name</abbr> </th>
        <th> <abbr title="Tenant ID">Tenant ID</abbr> </th>
        <th> <abbr title="Platform">Platform</abbr> </th>
        <th> <abbr title="Health">Health</abbr> </th>
        <th> <abbr title="Threats">Threats</abbr> </th>
             
    </tr>
</thead>);

}

const bit_defender = (toggled) => {
  if(toggled){

    return (<thead>
    <tr className="is-selected">
        <th> <abbr title="id">ID</abbr> </th>
        <th> <abbr title="id">Subscription ID</abbr> </th>
        <th> <abbr title="name">Customer name</abbr> </th>
        <th> <abbr title="status">Status</abbr> </th>
        <th> <abbr title="subscriptionDate">Subscription Date</abbr> </th>
        <th> <abbr title="renewalDate">Renewal Date</abbr> </th>
        <th> <abbr title="resellerid">Reseller ID </abbr> </th>
        <th> <abbr title="show"></abbr> </th>
        <th> <abbr title="companyName">Company Name</abbr> </th>
        <th> <abbr title="companyiD">Company ID</abbr> </th>
        <th> <abbr title="creationDate">Creation Date</abbr> </th>
        <th> <abbr title="PartnerType">Partner Type</abbr> </th>
        <th> <abbr title="licenseExp">License Exp</abbr> </th>
        <th> <abbr title="usedSlots">Used Slots</abbr> </th>
             
    </tr>
</thead>);
  }

  return (<thead>
    <tr className="is-selected">
        <th> <abbr title="id">ID</abbr> </th>
        <th> <abbr title="id">Subscription ID</abbr> </th>
        <th> <abbr title="name">Customer name</abbr> </th>
        <th> <abbr title="status">Status</abbr> </th>
        <th> <abbr title="subscriptionDate">Subscription Date</abbr> </th>
        <th> <abbr title="renewalDate">Renewal Date</abbr> </th>
        <th> <abbr title="resellerid">Reseller ID </abbr> </th>
        <th> <abbr title="show">    </abbr> </th>
             
    </tr>
  </thead>);

}




const Headers = ({props}) => {
  
  //for each vendor custom table add here the headers.
  if (props && props.special) {
    const {vendor} = props;
    const toggled = props.toggled ? props.toggled : false;

    if (props && props.special) {
      switch(vendor){
        case "TrendMicro":
          return trend_Table(toggled)
        case "Sophos":
          return sophos_table(toggled)
        case "Sophos_special":
          return sophos_special()
        case "BitDefender":
          return bit_defender(toggled)
      }
    }
  }
  


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
