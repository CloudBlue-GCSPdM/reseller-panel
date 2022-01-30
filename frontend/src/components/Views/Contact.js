import React from 'react';
import Title from '../Title';

import BarChart from '../Charts/BarChart';
import DoughnutChart from '../Charts/DoughnutChart';
import LineChart from '../Charts/LineChart';
import ScatterChart from '../Charts/ScatterChart';

const Contact = () => {
  return <div>

    <Title props={{ "title": "Data visualization", "subtitle": "Here is the data for the reseller." }}></Title>

    <BarChart />
      <DoughnutChart />
      <LineChart />
      <ScatterChart />

  </div>;
}

export default Contact;