import React from 'react'



function Login({shop,updateShop,history}) {
  
    const handleSubmit =(e)=>{
            e.preventDefault()
            history.push('/products')
    }
  return (
    <div>
<form onSubmit={handleSubmit}>
    <input type="number" placeholder={shop} onChange={(e)=>{updateShop(e.target.value)}}/>
    <button>Submit</button>
</form>
    </div>
  )
}

export default Login
