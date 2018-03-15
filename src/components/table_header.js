import React from 'react';
import TableBody from './table_body';


const TableHeader=(props)=>{

    return(
        <table id="tableM">
        <thead>
          <tr>
            <th>{props.data1}</th>
            <th>{props.data2}</th>
            <th>{props.data3}</th>
            <th>{props.data4}</th>
            <th>{props.data5}</th>
            <th>{props.data6}</th>
          </tr>
        </thead>
        <tbody>
            <TableBody tbData1="Alabama" tbData2="36912" tbData3="3000" tbData4="49847" tbData5="Nov 23 2016" tbData6="Edit"/>
            <TableBody tbData1="Alaska" tbData2="35750" tbData3="4256" tbData4="19847" tbData5="Jan 23 2017" tbData6="Edit"/>
            <TableBody tbData1="Idaho" tbData2="36523" tbData3="6516" tbData4="29847" tbData5="Oct 23 2016" tbData6="Edit"/>
            <TableBody tbData1="Hawaii" tbData2="35640" tbData3="656"  tbData4="59847" tbData5="Feb 23 2015" tbData6="Edit"/>
            <TableBody tbData1="Idaho" tbData2="35660" tbData3="2556" tbData4="39847" tbData5="March 23 2017" tbData6="Edit"/>
            <TableBody tbData1="Iowa" tbData2="30000" tbData3="2156" tbData4="36647" tbData5="Feb 28 2017" tbData6="Edit"/>
                  
        </tbody>
        </table>


    );}

    export default TableHeader;
