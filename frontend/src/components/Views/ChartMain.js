import React, { Component } from 'react';
import Title from '../Title';
import SubTitle from '../SubTitle';
import axios from 'axios'

import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import ScatterChart from '../Charts/ScatterChart';
import Center from '../Center';

//logo
import VendorLogo from './VendorLogo'; 

export default class ChartMain extends Component {

  
  constructor(...args){
    super(...args)

    this.state= {
      subscriptions: [],
      loading: true,
    }
  }



  componentDidMount(){
    window.scrollTo(0, 0)

    axios.get("/vendor/VA-589-589/subscriptions").then(res => {
      this.setState({ subscriptions: res.data.subscriptions, loading: false })
    })


    try {
      console.log("props from other class component", this.props)
    } catch (error) {
      console.log("not here")
    }
  }
  

  get_jsx = () => {
    return <div>
      <VendorLogo />
      <BarChart />
      <DoughnutChart />
      <LineChart />
      <ScatterChart />
    </div>

  }
  
  render() {
    
    console.log("subscriptions", this.state.subscriptions)
    const page_body = this.get_jsx()
    const {loading} = this.state;
    return <div>

        <Title props={{ "title": "Data visualization", "subtitle": "Here is the data for the reseller." }}></Title>

        <Center props={{"subtitle" : "Aggregated data per vendor", "loading":loading}}/>

      {!loading ? page_body : <br/>}


    </div>;
  }
}
