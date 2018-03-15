import React, { Component } from 'react';
import TableHeade from './table_header';
import TableBody from './table_body';

class Trades extends Component {
    render(){
        return (
            <div>
             <TableHeade data1="Trades" data2="Data-1" data3="Data-2" data4="Data-3" data5="Data-4" data6="Data-5"/>
            </div>
        )
    }
}

export default Trades;