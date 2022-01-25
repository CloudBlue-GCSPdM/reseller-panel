import React from 'react';
//line needed to render (without tree shacking)
import { Chart as ChartJS } from 'chart.js/auto'
import { Scatter }  from 'react-chartjs-2'


 const ScatterChart = () => {
  return <div>
      <Scatter
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label:"# of votes",
            data : [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderWidth: 1
          },
          {
            label: "quantity",
            data: [100,500,63,23,12,450],
            backgroundColor: 'orange',
            borderColor: "red"
          }
        ]
      }}
      height={400}
      width={600}
      options={{maintainAspectRatio:false
      
      }}
      
      />

  </div>;
}
export default ScatterChart;