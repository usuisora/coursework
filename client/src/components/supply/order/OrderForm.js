import React from 'react'

function OrderForm({count,rowCount,setRowCount}) {
    
    const handleSubmit = () =>{
        console.log('submiy')
    }
    const handleChange = () =>{
        console.log('submiy')
    }
 
  return (
    <form >
        <label className ='white right grey-text'>available  {count} psc</label>
        <input type = 'number' className = 'input-field' placeholder= 'count...' value ={rowCount} onChange={({target:{value}})=>handleChange(value)}/>
        <button className = 'btn btn-flat yellow lighten-4' onClick={()=>handleSubmit}>Add</button>
    </form>
  )
}

export default OrderForm
