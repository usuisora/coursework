import React,{useState} from 'react'
import {MyContext} from '../../Provider'
import {graphql, compose,Query} from 'react-apollo'
import { checkSellerQuery, checkManagerQuery} from './authQueries'
import QueryComponent from './QueryComponent'
import dotenv from 'dotenv'


const handleAuth = (e,who,authId,Login,history) =>{
     e.preventDefault();
     console.log('from handle',authId);
     authId>0 ? Login( authId,who) : alert('incorrect')
     console.log(process.env)
     history.push('/products')
    
}
function Auth({history}) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [who, setWho] = useState('seller');
  const [authId, setAuthId] = useState({});
  
  
  return (
    <MyContext.Consumer>
      {({Login})=>  <div className= 'auth'>
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

              <button className = 'btn btn-flat center' onClick = {(e)=>{handleAuth(e,who,authId,Login,history)}}>
                                Sumbit</button>
          </form>

          <QueryComponent Squery={checkSellerQuery} Mquery= {checkManagerQuery} who={who}
               setAuthId={setAuthId}  login={login} password={password}/>
    </div>}
    </MyContext.Consumer>
  )
}

export default compose(
graphql( checkSellerQuery,{name:'checkSellerQuery'}),
graphql(checkManagerQuery,{name:'checkManagerQuery'})
)(Auth)
