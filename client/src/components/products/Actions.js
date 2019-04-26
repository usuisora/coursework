import React from 'react'
// import {MyContext} from '../../Provider'
// import {graphql, compose,Query} from 'react-apollo'




const handleBuy=()=>{
    console.log('handle buy')
  }
  const Buy = () =>
  <form>
    <input type='number' placeholder = 'count...'/>
    <button onClick={()=>handleBuy()}>Buy</button>
  </form>
  
  const Remove =() =>
           <form>
                <input type='number' placeholder = 'remove...'/>
                <button>Remove</button>
            </form>
  
  const Actions = () =>
  <div className="actions">
    <h5>Actions</h5>
    <Buy/>
    <Remove/>
  </div>

  export default  Actions