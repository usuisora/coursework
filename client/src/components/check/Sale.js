import React from 'react'

function Sale() {
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
  return (
   <form onSubmit={(e)=>handleSubmit(e)}>
       <label htmlFor="seller">Saler </label>
       <select name="seller">
           <option value="gohn">name</option>
           <option value="gohn2">name2</option>
       </select>
       <button>Sale</button>
   </form>
  )
}

export default Sale