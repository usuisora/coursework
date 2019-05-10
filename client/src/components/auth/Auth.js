import React,{useState} from 'react'
import {MyContext} from '../../Provider'
import {graphql, compose,Query} from 'react-apollo'
import { checkSellerQuery, checkManagerQuery} from './authQueries'
import QueryComponent from './QueryComponent'


const handleAuth = (e,{checkSellerQuery,history},login,password,Login,isAuth) =>{
     e.preventDefault();
    // //  Login(login,password);
  
    //  (isAuth == true) ? 
    //  history.push('/products')
    //  : alert('Login or password are incorrect')
    
}
function Auth(props) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [who, setWho] = useState('seller');
  const [authId, setAuthId] = useState({});
  

  return (
    <MyContext.Consumer>
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
              <QueryComponent query={(who =='seller') ?  checkSellerQuery:checkManagerQuery } mng={(who =='seller')? false:true}
               setAuthId={setAuthId}  managerQuery={checkManagerQuery} login={login} password={password}/>
              <button className = 'btn btn-flat center' onClick = {(e)=>{handleAuth(e,this.props,login,password,Login,isAuth,)}}>Sumbit</button>
          </form>
    </div>}
    </MyContext.Consumer>
  )
}

export default compose(
graphql( checkSellerQuery,{name:'checkSellerQuery'}),
graphql(checkManagerQuery,{name:'checkManagerQuery'})
)(Auth)
