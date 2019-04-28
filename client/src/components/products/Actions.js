import React,{useState} from 'react'

const handleBuy=(e,setMsg,{model})=>{
  e.preventDefault()
  setMsg('1'+ {model}+'model added to check')
}


  const Buy = ({setMsg,productInfo}) =>{
    const [newItemCount, setNewItemCount] = useState(0);
    
  return(
  <form>
    <input type='number' value={newItemCount} placeholder = 'count...' onChange={(e)=>setNewItemCount(parseInt(e.target.value))}/>
    <button onClick={(e)=>handleBuy(e,setMsg,productInfo)}>Buy</button>
  </form>
  )}
  const Remove =() =>
           <form>
                <input type='number' placeholder = 'remove...'/>
                <button>Remove</button>
            </form>
  
  const Actions = ({setMsg,msg}) =>
  <div className="actions">
    <h5>Actions</h5>
      <Buy setMsg={setMsg}/>
      <Remove/>
  </div>

  export default  Actions