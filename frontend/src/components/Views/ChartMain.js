import React, { useEffect, useState } from 'react';
import Title from '../Title';
import axios from 'axios'

import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import BarChart from '../Charts/BarChart'
import Center from '../Center';
import Table from '../Charts/Table/Table';
import { useNavigate, useParams } from 'react-router-dom';

//logo
import VendorLogo from './VendorLogo'; 

const ChartMain = ({props}) => {

const [subscriptions, setSubscriptions ] = useState([])
const [vendorInfo, setVendorInfo] = useState({"id": "", "name": ""})
const [vendorDetails, setVendorDetails] =useState({})
const [loading, setLoading] = useState(true)


const { vendor } = useParams();

//on mount equivalent
useEffect(()=>{

  window.scrollTo(0, 0)
  axios.get(`/vendor/${vendor}/subscriptions`).then(res => {
  setSubscriptions(res.data.subscriptions)
  setVendorInfo(res.data.vendor_info)
  setVendorDetails(res.data.vendor_details)
 
  //PREPARE TABLE to receive the data.
  setLoading(false)
  })
  //add cleaner if case axios response gets cancelled
  //find out how to do

},[])

const vendor_table = () => {

  return (
    <div>
    <section className="section">
              <h1 className="title">{vendor} subscription details</h1>
              {/* <h2 className="subtitle">
               Customer and users <strong> (Trend micro Only) </strong>
              </h2> */}
              <Table props={{"subs": [], "special": true, "vendor": vendor }}/>
              <h2 className="subtitle">
                {/* <strong> (To be done) </strong> */}
              </h2>
            </section>
    </div>
  )
}

const page_body = () => {
  return <div>

      {/* <div className='whitebg'>  
     Test icon hereee 
     <i class="far fa-pencil"></i>
      </div> */}
  
      <br/>

    <div className="columns is-desktop">
    <div className="column"></div> 
    <div className='whitebg'>
    <VendorLogo />
    <Table props={{"subs": subscriptions}}/>
    </div>
    <div className="column"></div>
    </div>

    <br/>
  
    <div className="columns is-desktop">
        <div className="column"></div>
        <div className="column">
          <div className='whitebg'>
          <Title props={{"title": "SKU allocation", "subtitle":"2021"}} />
           <DoughnutChart props={{"request": true}}/>
          </div>
          <br/>
          <div className='whitebg'>
          <Title props={{"title":"Upcoming renewals", "subtitle" :"2022"}}/>
          <LineChart props={{"label":"renewals", "custom": "renewal"}} />
          </div>
          {/* <Title props={{"title":"Vendor capabilities", "subtitle" : `Customers and users` }}/> */}
          <br/>
          
         
        </div>
        <div className="column"></div>
        <div className="column">
        <div className='whitebg'>
        <Title props={{"title":"Subscription's growth", "subtitle": "2021"}}/>
        <LineChart props={{"label":"Subscription's Growth", "custom": "growth"}} />
        </div>
        <br/>
        <div className='whitebg'>
        <Title props={{"title":"Churn rate over time", "subtitle": "2021"}}/>
        <BarChart props={{"labels" : [""], "churn": true}}/>
        </div>
        </div>
        <div className="column"></div>        
        <div className="column"></div>
  </div>

    <div style={{ paddingLeft: 30, paddingRight: 30 }}>
      <div className='whitebg'>
        {!vendorDetails.showData ? <Title props={{ "title": "Vendor not available yet", "subtitle": "We are working on getting the vendor's api access" }}></Title> : vendor_table()}
      </div>

      {/* add sophoes extra table here */}
      

    </div>
    <br/>
    <br/>
  
  </div>

}

  // console.log({"subscriptions_per_product": subscriptions})
  // console.log("loading", !loading, "anc actual one", loading)
  //${vendorInfo.name}

  let loadingcolor = loading ? "#FFFFFF" : "rgba(169, 235, 243, 0.2)";

  console.log("receiving stub data", vendorDetails)
  

    return (<div style={{"background-color": loadingcolor}}>

      <Title props={{ "title": "Data visualization", "subtitle": "Here is the data for the reseller." }}></Title>
      <Center props={{ "subtitle": `${vendor}'s subscription data`, "loading": loading }} />
      {loading ?  <br/> : page_body()   } 



    </div>);

};

export default ChartMain;




