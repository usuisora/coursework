import React from 'react'



const ListColumns = (prodCounts,prodIds) =>
<li className ='title'>
            <span>count</span>
            <span>model</span>
         </li>
function List() {
  return (
    <table>
        <thead>
          <tr>
              <th>Model</th>
              <th>Count</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Alvin</td>
            <td>Eclair</td>
          </tr>
        
        </tbody>
      </table>
  )
}

export default List
