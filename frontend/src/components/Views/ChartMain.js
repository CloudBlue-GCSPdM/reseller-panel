import React, { Component } from 'react';
import Title from '../Title';

import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import ScatterChart from '../Charts/ScatterChart';

//logo
import VendorLogo from './VendorLogo'; 


export default class ChartMain extends Component {

  
  constructor(props){
    super(props)
  }



  componentDidMount(){
    window.scrollTo(0, 0)
  }
  
  
  render() {
    

    return <div>

        <Title props={{ "title": "Data visualization", "subtitle": "Here is the data for the reseller." }}></Title>
        
        <div> Here we plot the charts, depending on the one clicked.</div>

        {/* <progress class="progress is-link" value="30" max="100">30%</progress> */}



      <VendorLogo/>
     
      <BarChart />
      <DoughnutChart />
      <LineChart />
      <ScatterChart />


    </div>;
  }
}
