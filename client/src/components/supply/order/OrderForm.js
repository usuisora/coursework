import React from 'react'

function OrderForm({productInfo,rowCount,setRowCount,setOrderItems,orderItems}) {
    const {model,prodId,avalCount}= productInfo
    const handleSubmit = (e) =>{
      e.preventDefault()
      let newItem = {
        id: prodId,
        model:model,
        count:parseInt(rowCount)
      }
      if(rowCount > 0){
        let doubl = orderItems.find(el => el.id === prodId)
        if  ( doubl == undefined ) {
          let arr = (orderItems.length === 0) ? [newItem]:[...orderItems,newItem]
          setOrderItems(arr)
        }
        else{
          doubl.count += rowCount
          let arr = orderItems.filter(el => el.id !== prodId);
          setOrderItems([...arr, doubl])

        }
        

      }

    }
    const handleChange = (value) =>{
      const res = parseInt(value)
      if(value == ''){
        setRowCount('') 
      }  
      else{
        res < avalCount ? setRowCount(res) : setRowCount(avalCount)
      }
    }
 
  return (
    <div  className='card yellow lighten-4 z-depth-0' >
    <form className='card-content ' >
        <p className ='blue-text text-darken-2'>model: {model}</p>
        <label className ='yellow lighten-4 right grey-text'>available  {avalCount} psc</label>
        <input type = 'number' className = 'input-field' placeholder= 'count...' value ={rowCount} onChange={({target:{value}})=>handleChange(value)}/>
        <button  className = 'btn btn-flat blue lighten-4' onClick={(e)=>handleSubmit(e)}>Add</button>
    </form>
    </div>
  
  )
}

export default OrderForm
