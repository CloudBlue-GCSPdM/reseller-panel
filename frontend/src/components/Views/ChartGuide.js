import React, { Component } from 'react';
import Title from '../Title';


import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import ScatterChart from '../Charts/ScatterChart';

import SubTitle from '../SubTitle';

export default class ChartGuide extends Component {

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  render() {
    return <div>

      <Title props={{ "title": "Data visualization", "subtitle": "Here is the data we have for you." }}></Title>
      
      <div style={{ textAlign: 'center', justifyContent: 'center', display: 'flex' }}>
        <SubTitle props={{ "subtitle": "Individual data per product" }}
        />
      </div>

      <BarChart />
      <DoughnutChart />
      <LineChart />
      <ScatterChart />


    </div>;
  }
}
