import React, { Component } from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';


const state = {
  labels: ['January', 'February'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#5289c9',
        '#ff6a81'
      ],
      hoverBackgroundColor: [
      '#5192c6',
      '#ff6b92'
      ],
      data: [70, 30]
    }
  ]
}

class Piechart extends Component {
    state = {  }
    render() {
        return (
        <div className="pie-chart">
            <Pie
            data={state}
            width={200}
            height={200}
            options={{
                title:{
                display:false,
                text:'',
                fontSize:20
                },
                legend:{
                display:false,
                position:'right'
                }
            }}
            onElementsClick={elems => {
                if(elems.length == 0) return ;
                alert("Bar-Selected : "+elems[0]._datasetIndex + ', ' + elems[0]._index);
            }}
            />
        </div>
        );
    }
}

export default Piechart;