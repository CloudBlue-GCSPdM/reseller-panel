import React, { useEffect, useState } from 'react';
import Title from '../Title';
import axios from 'axios';


import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import ScatterChart from '../Charts/ScatterChart';
import Center from '../Center';
import Table from '../Charts/Table/Table';
import { useParams } from 'react-router-dom';

const ChartProduct = () => {
  
  const [subscriptions, setSubscriptions ] = useState([])
  const [show, setShow] = useState(false)
  const [productInfo, setProductInfo] = useState({"id": "","name": "", "status": "", "icon": ""})
  const [loading, setLoading] = useState(true)
  let { product } = useParams();
  
  useEffect(()=>{

    window.scrollTo(0, 0)
    axios.get(`/product/${product}/subscriptions`).then(res => {
    setSubscriptions(res.data.subscriptions)
    if(res.data.subscriptions.length>0) {
      setProductInfo(res.data.product_info)
      setShow(true)
    }
    setLoading(false)
    })
    //add cleaner if case axios response gets cancelled
    //find out how to do
  
  },[])

const validate_body = () => {
  return (
    <div> {show ? page_body() : <Title props={{ "title": "There are no subscriptions", "subtitle": "There is no data for this product." }}></Title> }</div>
  )
}

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
    <Center props={{ "subtitle": `Subscription's data for product: ${productInfo.name}`, "loading": loading }} />
    {loading ? <br /> : validate_body()}

  </div>);
};

export default ChartProduct;


