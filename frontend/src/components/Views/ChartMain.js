import React, { useEffect, useState } from 'react';
import Title from '../Title';
import axios from 'axios'

import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import ScatterChart from '../Charts/ScatterChart';
import Center from '../Center';
import Table from '../Charts/Table/Table';
import { useNavigate } from 'react-router-dom';

//logo
import VendorLogo from './VendorLogo'; 

const ChartMain = ({props}) => {

const [subscriptions, setSubscriptions ] = useState([])
const [loading, setLoading] = useState(true)

console.log("i come from home and this are my ",props)
// console.log("props location", props.location);


//on mount equivalent
useEffect(()=>{

  window.scrollTo(0, 0)
  axios.get("/vendor/VA-589-589/subscriptions").then(res => {
  setSubscriptions(res.data.subscriptions)
  setLoading(false)
  })
  //add cleaner if case axios response gets cancelled
  //find out how to do

},[])

const page_body = () => {
  return <div>
    <VendorLogo />
    <Table props={{"subs": subscriptions}}/>

    <br/>
    <br/>
    <br/>
  
    <div className="columns is-desktop">
        <div className="column"></div>
        <div className="column">
          <Title props={{"title": "SKU allocation", "subtitle":"2021"}} />
           <DoughnutChart props={{"request": true}}/>

          <Title props={{"title":"Purchase trend", "subtitle" :"2021"}}/>
          <LineChart props={{"label":"Seats Growth"}} />

          {/* <Title props={{"title":"Vendor capabilities", "subtitle" : `Customers and users` }}/> */}
          <br/>
          
         
        </div>
        <div className="column"></div>
        <div className="column">
        <Title props={{"title":"Growth over time", "subtitle": "2021"}}/>
        <LineChart props={{"label":"Seats Growth"}} />
        <Title props={{"title":"Churn rate over time", "subtitle": "2021"}}/>
        <div><ScatterChart /></div>
        </div>
        <div className="column"></div>        
        <div className="column"></div>
  </div>

  <div>
  <section class="section">
            <h1 class="title">Vendor capabilities</h1>
            <h2 class="subtitle">
             Customer and users <strong> (Trend micro Only) </strong>
            </h2>
            <Table props={{"subs": [], "special": true}}/>
            <h2 class="subtitle">
              {/* <strong> (To be done) </strong> */}
            </h2>
          </section>
  </div>
    
  </div>

}

  console.log({"subscriptions_per_product": subscriptions})
  console.log("loading", !loading, "anc actual one", loading)

    return (<div>

      <Title props={{ "title": "Data visualization", "subtitle": "Here is the data for the reseller." }}></Title>
      <Center props={{ "subtitle": "Aggregated data per vendor", "loading": loading }} />
      {loading ?  <br/> : page_body()   } 



    </div>);

};

export default ChartMain;




