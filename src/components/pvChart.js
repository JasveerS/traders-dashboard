import React, { Component } from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class PvChart extends Component {
    constructor(props){
        super(props);
        this.state={
            pvChart:{
                labels:['Alabama','Alaska','Idaho','Hawaii','Idaho','Iowa'],
                datasets:[
                    {label:'PV',
                    data:[49847,19847,29847,59847,39847,36647],
                    backgroundColor:['#1c2e396e']
                }

                ]
               
            }
        }
    }
    render(){
        return (
            <div className="chart">
            <h4 style={{textAlign:'center'}}>PV Cost $</h4>
            <Line
            data={this.state.pvChart}
            width={40}
            height={24}
            options={{
		    maintainAspectRatio: true
	        }}
            />
            </div>
        )
    }
}

export default PvChart;