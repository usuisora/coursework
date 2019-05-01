import React from 'react'

const HistoryList = () => 
<table>
    <th>
        <td>id</td>
        <td>seller</td>
        <td>date</td>
    </th>
    <tr>
        <td>123</td>
        <td>Loh</td>
        <td>23.23.12</td>
    </tr>
</table>
function History() {
  return (
    <div className ='history'>
      <h4>History</h4>
      <h5>Checks</h5>
      <HistoryList/>
    </div>
  )
}

export default History
