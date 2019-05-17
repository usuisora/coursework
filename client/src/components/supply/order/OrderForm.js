import React from 'react'

function OrderForm({productInfo,rowCount,setRowCount,ProdCounts,setProdCounts,ProdIds, setProdIds}) {
    const {model,prodId,avalCount}= productInfo
    const handleSubmit = (e) =>{
      e.preventDefault()
      if(rowCount !== 0){
        let arrCounts = [...ProdCounts,rowCount]
        setProdCounts(arrCounts);

        let arrIds = [...ProdIds,prodId]
        setProdIds(arrIds);
      }
      console.log('submit',prodId,rowCount)
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
    <div  className='card yellow lighten-4' >
    <form className='card-content z-depth-0' >
        <p className ='red-text text-darken-2'>model: {model}</p>
        <label className ='yellow lighten-4 right grey-text'>available  {avalCount} psc</label>
        <input type = 'number' className = 'input-field' placeholder= 'count...' value ={rowCount} onChange={({target:{value}})=>handleChange(value)}/>
        <button  className = 'btn btn-flat yellow lighten-4' onClick={(e)=>handleSubmit(e)}>Add</button>
    </form>
    </div>
  
  )
}

export default OrderForm
