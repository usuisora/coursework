import React,{useState} from 'react'
import {MyContext} from '../../Provider'
import {graphql, compose,Query} from 'react-apollo'
import { checkSellerQuery, checkManagerQuery} from './authQueries'

const handleAuth = (e,{history},login,password,Login,isAuth) =>{
     e.preventDefault();
    //  Login(login,password);
  
     (isAuth == true) ? 
     history.push('/products')
     : alert('Login or password are incorrect')
    
}


const Form = ()=>  <MyContext.Consumer>
{({Login,isAuth})=>  <div className= 'auth'>
    <form className ='card yellow lighten-4'>
    <h5>Enter the system</h5>
        <div>
            <label htmlFor="login">Login</label>
            <input type="text" onChange={(e)=>{setLogin(e.target.value)}}/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <select className= 'browser-default '  value={who} onChange={({target:{value}})=>{setWho(value)}}>
          <option value="seller">Seller</option>
          <option value="manager">Manager</option>
        </select>
        <button className = 'btn btn-flat center' onClick = {(e)=>{handleAuth(e,props,login,password,Login,isAuth)}}>Sumbit</button>
    </form>
</div>}
</MyContext.Consumer>




export default compose(
graphql( checkSellerQuery,{name:'checkSellerQuery',options:()=>{
  return{
    variables:{
       
    }
  }
}}),
graphql(checkManagerQuery,{name:'checkManagerQuery'})
)(Form)
