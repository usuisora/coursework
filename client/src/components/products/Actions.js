import React,{useState} from 'react'

const handleSale=(e,setMsg,prod,count,updateCheck)=>{
  e.preventDefault();
  if(count != 0 ){
  setMsg(`${count} ${ prod.model} model added to check`)
  updateCheck(count,prod)}
}


  const Sale = ({setMsg,prod,updateCheck}) =>{
    const [newItemCount, setNewItemCount] = useState(0);
            return(
            <form>
              <input type='number' value={newItemCount} placeholder = 'count...' onChange={(e)=>setNewItemCount(parseInt(e.target.value))}/>
              <button className = 'btn btn-flat' onClick={(e,productInfo)=>handleSale(e,setMsg,prod,newItemCount,updateCheck)}>Sale</button>
            </form>
            )}
  const Remove =() =>
           <form >
                <input type='number'  placeholder = 'remove...'/>
                <button className = 'btn btn-flat red-text'>Remove</button>
            </form>
  
  const Actions = ({setMsg,msg,prod,updateCheck}) =>
  <div className="actions">
    <h5>Actions</h5>
      <Sale setMsg={setMsg} prod={prod} updateCheck={updateCheck}/>
      <Remove/>
  </div>

  export default  Actions