import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { connectOrderColors, getLabelrequest } from './Utils';

const DoughnutChart = ({props}) => {

  //add later labels in props, color.
  const {request } = props;
  let backgroundColor,labels = [];
  let label = "# of votes";
  console.log("props of doughnut chart", request)
  //switch for more colors pending, passing type
  if(request === true) {
    console.log("inside if")
    backgroundColor = connectOrderColors()
    labels = getLabelrequest()
  }

  console.log("before render", backgroundColor, labels)
  return <div>
      <Doughnut
      
      data={{
        labels,
        datasets: [
          {
            label,
            data : [12, 19, 3],
            backgroundColor,
          borderWidth: 1
          },
          
        ]
      }}
      height={400}
      width={600}
      options={{maintainAspectRatio:false
      
      }}
      
      
      />
  </div>;
}


export default DoughnutChart;