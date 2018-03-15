
import React from 'react';


const TableBody=(props)=>{

    return(
        <tr>
        <td>{props.tbData1}</td>
        <td>{props.tbData2}</td>
        <td>{props.tbData3}</td>
        <td>{props.tbData4}</td>
        <td>{props.tbData5}</td>
        <td><button>{props.tbData6}</button></td>
    </tr>

    )}





export default TableBody;