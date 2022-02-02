import React, { Component } from 'react';
import Title from '../Title';
import axios from 'axios';


import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import ScatterChart from '../Charts/ScatterChart';
import Loading from '../Loading';
import Center from '../Center';

import SubTitle from '../SubTitle';

export default class ChartProduct extends Component {


  constructor(...args){
    super(...args)

    this.state= {
      subscriptions: [],
      loading : true

    }
  }


  filterData=()=>{
    
  }


  componentDidMount(){
    window.scrollTo(0, 0)

    axios.get("/product/PRD-411-678-887/subscriptions").then(res => {
      console.log("loaded")
      // this.setState({ subscriptions: res.data.subscriptions, loading:false })
      this.setState({ subscriptions: res.data.subscriptions, loading:false })
      
    })
  }

  get_jsx = () =>{
    return <div>
      <BarChart /> 
      <DoughnutChart />
      <LineChart />
      <ScatterChart />
    </div>
  }

  render() {

    // if (this.state.subscriptions.length === 0){
    //   return <div>
    //     <Loading/>
    //   </div>
    // }

    console.log({"subs": this.state.subscriptions})
    const {loading} = this.state;
    const page_body = this.get_jsx()
    return <div>

      <Title props={{ "title": "Data visualization", "subtitle": "Here is the data we have for you." }}></Title>
      <Center props={{"subtitle" : "Individual data per product", "loading":loading}}/>

      {!loading ? page_body : <br/>}
      
    </div>;
  }
}
