import React from 'react';


//line needed to render (without tree shacking)
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
import { months, thisReseller, bestReseller } from './Utils';
//components have to receive a dataset [] with properties: 
// labels, data, background color.

const BarChart = ({props}) => {

  //expected props, dataVendor, Best reseller., 
  //of this moment: labels.

  const { labels } = props;

  let datasets =  [
    {
      label:labels[0],
      data : thisReseller(),
      backgroundColor: ['rgba(54, 162, 235, 1)'],
    borderWidth: 1
    },
    {
      label: labels[1],
      data: bestReseller() ,
      backgroundColor: ['rgba(144, 118, 115, 0.3)'],
      borderColor: "red"
    }
  ];

 

  if (props && props.churn){
    const {churn} = props;

    datasets = [
      {
        label: "Churn sum",
        data : [0,0,0,0,2,0,1,0,0,0,0,0],
        backgroundColor: ['rgba(54, 162, 235, 1)'],
      borderWidth: 1
      },
    ]
  }

  return ( <div>

    <Bar
    data={{
      labels: months(),
      datasets
    }}
    height={400}
    width={600}
    options={{maintainAspectRatio:false,
      indexAxis: 'y',
      scales: {
        x: {
          ticks: {
              precision: 0
          }
      }
      }
    }}
    />
  </div> );
}


export default BarChart;