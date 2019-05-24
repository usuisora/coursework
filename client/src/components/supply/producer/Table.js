
import React from 'react'
import Rows from './Rows'

let col = ['Product id', 'Producer id', 'Count']

const Head =()=>
<thead>
   <tr> {col.map((el,ind)=><td key ={ind}>{el}</td>)}</tr>
</thead>
const Table = () =>
  <table>
                <Head/>
                <tbody>
                <Rows/>
                </tbody>
            </table>

export default Table 