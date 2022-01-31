import React, { Component } from 'react';
import Title from '../Title';


import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import ScatterChart from '../Charts/ScatterChart';


export default class ChartGuide extends Component {

  render() {
    return <div>

        <Title props={{ "title": "Data visualization", "subtitle": "Here is the data for the reseller." }}></Title>
        Per product

      <BarChart />
      <DoughnutChart />
      <LineChart />
      <ScatterChart />


    </div>;
  }
}
