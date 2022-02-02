import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = () => {
  return (<div>
    <Line
        data={{
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: 'Churn rate',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                  }]
        }}   
    />

  </div>);
}


export default LineChart;