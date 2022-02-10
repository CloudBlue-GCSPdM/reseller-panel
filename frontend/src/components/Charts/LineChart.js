import React from 'react';
import { Line } from 'react-chartjs-2';
import { months, bestReseller } from './Utils'


const LineChart = ({props}) => {

  // console.log(months())
  // const {data } = props;
  const {label} = props;
  let data = bestReseller();

  if (props.custom){
    const {custom } = props;

    switch(custom){
      case "growth":
        data = [0,0,0,0,3,1,1,0,0,0,2,0]
        break;
      case "renewal":
        data = [0,1,1,0,1,1,0,0,0,0,0,0]
        break;
      case "product":
        data = [0,1,1,0,0,0,0,0,0,0,0,0]
    }

  }


  return (<div>
    <Line
        data={{
                labels: months(),
                datasets: [{
                    label,
                    data,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.3
                  }]
        }}
        options={{
          scales: {
            y: {
              ticks: {
                  precision: 0
              }
          }
          }
        }}   
    />

  </div>);
}


export default LineChart;