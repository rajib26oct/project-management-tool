import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';



class LineChart extends Component {
    state = {  }
    render() {
        const data = {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
                {
                label: '# Planned',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                yAxisID: 'y-axis-1',
                },
                {
                label: '# ',
                data: [1, 2, 1, 1, 2, 2],
                fill: false,
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgba(54, 162, 235, 0.2)',
                yAxisID: 'y-axis-2',
                },
            ],
            }

            const options = {
            scales: {
                yAxes: [
                {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                },
                {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                    drawOnArea: false,
                    },
                },
                ],
            },
            }
        data.datasets[1].label = this.props.label;
        return (
        <div className="line-chart">
            <Line
            data={data}
            width={300}
            height={200}
            options={options}
            onElementsClick={elems => {
                if(elems.length == 0) return ;
                alert("Bar-Selected : "+elems[0]._datasetIndex + ', ' + elems[0]._index);
            }}
            />
        </div>
        );
    }
}

export default LineChart;