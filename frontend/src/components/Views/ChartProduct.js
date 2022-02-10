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
import Footer from "../Footer";
import { BsClipboardData} from "react-icons/bs"
import { BiUnite } from "react-icons/bi"
import { GiTreeGrowth, GiCancel } from "react-icons/gi"
import { AiOutlineStar } from "react-icons/ai"


const ChartProduct = () => {
  
  const [subscriptions, setSubscriptions ] = useState([])
  const [show, setShow] = useState(false)
  const [productInfo, setProductInfo] = useState({"id": "","name": "", "status": "", "icon": ""})
  const [loading, setLoading] = useState(true)
  let { product } = useParams();
  
  useEffect(()=>{

    window.scrollTo(0, 0)
    axios.get(`/product/PRD-411-678-887/subscriptions`).then(res => {
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
      <div className='columns is-desktop'>
        <div className='column'></div>
        <div className='column is-three-fifths' style={{padding: 10}}>
          <div className='whitebg'>
          <BsClipboardData size="2em"/>
          <br/>
            <Table props={{ "subs": subscriptions }} />
          </div>
        </div>
        <div className='column'></div>
      </div>
      
      <br/>
      <br/>
      <br/>
      <div className="columns is-desktop">
          <div className="column"></div>
          <div className="column">
          <div className='whitebg'>
          <AiOutlineStar size="2em"/>
            <Title props={{"title":"Total customers (ranking : #8)", "subtitle":"2021"}} />
            <BarChart props={{"labels" : ["Yours", "#1 Reseller"]}}/>
          </div>
          <br/>   
          <div className='whitebg'>
          <BiUnite  size="2em"/>
            <Title props={{"title":"Connect order type", "subtitle" :"2021"}}/>
            <DoughnutChart props={{"request": true}}/>
          </div>
          </div>
          <div className="column"></div>
          <div className="column">
          <div className='whitebg'>
          <GiTreeGrowth size="2em"/>
          <Title props={{"title":"Seats Growth", "subtitle": "2021"}}/>
          <LineChart props={{"label":"Seats Growth"}} />
          </div>
          <br/>
          <div className='whitebg'>
          <GiCancel size="2em"/>
          <Title props={{"title":"Churn rate over time", "subtitle": "2021"}}/>
          <BarChart props={{"labels" : [""], "churn": true}}/>
          </div>
         
          </div>
          <div className="column"></div>        
          

    </div>
    <br/>
          <br/>
    <Footer/>
    </div>
  }

  let loadingcolor = loading ? "#FFFFFF" : "rgba(169, 235, 243, 0.2)";


  return (<div style={{"background-color": loadingcolor}}>

    <Title props={{ "title": "Data visualization", "subtitle": "Here is the data we have for you." }}></Title>
    <Center props={{ "subtitle": `Subscription's data`, "loading": loading }} />
    {loading ? <br /> : validate_body()}
    

  </div>);
};

export default ChartProduct;


