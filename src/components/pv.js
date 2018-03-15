import React, { Component } from 'react';
import TableHeade from './table_header';
import PvChart from './pvChart';

class Pv extends Component {
    render(){
        return (
            <div id="pvChart">
              <div className="tableData">
                  <TableHeade  data1="State" data2="Zipcode" data3="Size (kw DC)" data4="Cost" data5="Date" data6="Change"/>
              </div>
               <div className="pvChart">
                    <PvChart/>
               </div>
            </div>
        )
    }
}

export default Pv;