import React from 'react'




function List({orderItems,setOrderItems}) {

  const Rows = orderItems.map(({id,model,count}) =>  <tr key = {id}>
                              <td>{model}</td>
                              <td>{count}</td>
</tr>)

  return (
    <React.Fragment>

    <table>
        <thead>
          <tr>
              <th>Model</th>
              <th>Count</th>
          </tr>
        </thead>

        <tbody>
         {Rows}
        </tbody>
      </table>
    </React.Fragment>
  
  )
}

export default List
