import React, { useEffect, useState } from 'react';
import Title from '../Title';
import axios from 'axios';


import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import ScatterChart from '../Charts/ScatterChart';
import Center from '../Center';
import Table from '../Charts/Table/Table';


const ChartProduct = () => {
  
  const [subscriptions, setSubscriptions ] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
  
    window.scrollTo(0, 0)
    axios.get("/product/PRD-411-678-887/subscriptions").then(res => {
    setSubscriptions(res.data.subscriptions)
    setLoading(false)
    })
    //add cleaner if case axios response gets cancelled
    //find out how to do
  
  },[])

const page_body = () =>{
    return <div>
      <Table props={{"subs": subscriptions}}/>
      <br/>
      <br/>
      <br/>

      <div className="columns is-desktop">
          <div className="column"></div>
          <div className="column">
            <Title props={{"title":"Total customers (ranking : #8)", "subtitle":"2021"}} />
            <BarChart props={{"labels" : ["Yours", "#1 Reseller"]}}/>

            <Title props={{"title":"Connect order type", "subtitle" :"2021"}}/>
            <DoughnutChart props={{"request": true}}/>
          </div>
          <div className="column"></div>
          <div className="column">
          <Title props={{"title":"Seats Growth", "subtitle": "2021"}}/>
          <LineChart props={{"label":"Seats Growth"}} />
          <Title props={{"title":"Churn rate over time", "subtitle": "2021"}}/>
          <div><ScatterChart /></div>
          </div>
          <div className="column"></div>        
          <div className="column"></div>
    </div>
    </div>
  }



  return (<div>

    <Title props={{ "title": "Data visualization", "subtitle": "Here is the data we have for you." }}></Title>
    <Center props={{ "subtitle": "Subscription's data per product", "loading": loading }} />
    {loading ? <br /> : page_body()}

  </div>);
};

export default ChartProduct;


