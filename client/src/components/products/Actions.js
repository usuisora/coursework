import React,{useState} from 'react'
import { Link } from "react-router-dom";

const handleSale=(e,updateMsg,prod,count,updateCheck)=>{
  e.preventDefault();
  if(count != 0 ){
  updateMsg(`${count} ${ prod.model} model added to check`)
  updateCheck(count,prod)}
}


  const Sale = ({updateMsg,prod,updateCheck}) =>{
    const [newItemCount, setNewItemCount] = useState(0);
    const handleChange = (value) =>{
      const res = parseInt(value)
      if(value == ''){
        setNewItemCount('') 
      }  
      else{
        res < prod.avalCount ?  setNewItemCount(res) :  setNewItemCount(prod.avalCount)
      }
    }
    
            return(
            <form>
              <input type='number' value={newItemCount} placeholder = 'count...' onChange={({target:{value}})=>handleChange(value)}/>
              <button className='btn btm-small link blue ' onClick={(e,productInfo)=>handleSale(e,updateMsg,prod,newItemCount,updateCheck)}>Add To Check</button>
            </form>
            )}
  // const Remove =() =>
  //          <form >
  //               <input type='number'  placeholder = 'remove...'/>
  //               <button className = 'btn btn-flat red-text'>Remove</button>
  //           </form>
  
  const Actions = ({updateMsg,msg,prod,updateCheck}) =>
  <div className="actions">
    <h5>Actions</h5>
      <Sale updateMsg={updateMsg} prod={prod} updateCheck={updateCheck}/>
      <Link  className = 'btn btn-flat'  to="/check">Go To Check</Link>
  </div>

  export default  Actions