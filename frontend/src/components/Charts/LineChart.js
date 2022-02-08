import React from 'react';
import { Line } from 'react-chartjs-2';
import { months, bestReseller } from './Utils'


const LineChart = ({props}) => {

  // console.log(months())
  // const {data } = props;
  const {label} = props;

  return (<div>
    <Line
        data={{
                labels: months(),
                datasets: [{
                    label,
                    data: bestReseller(),
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                  }]
        }}   
    />

  </div>);
}


export default LineChart;