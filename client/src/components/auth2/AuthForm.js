import React,{useState} from 'react'

const AuthForm = ({loginMutate, Login, setShop, history }) =>{
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    console.log('from form ',loginMutate)
    const handleClick = (e) =>{
                    // e.preventDefault()
                    loginMutate({variables:{login,password}}).then(({data})=>{
                        console.log('Login',data.login.auth)
                        let {auth} = data.login;
                        if(auth.roleName !== 'norole' ) 
                           { Login(auth.roleId, auth.roleName, auth.shopId)
                            console.log('auth',auth)
                            history.push('products')
                        }
                            
                        else  alert("incorrect ") 
                  },error=>{
                      console.log(error)
                      alert(error)
                  })
     
    }
  return(
  <form className ='card '>
            <h5>Welcome</h5>
                <div>
                    <label htmlFor="login">Login</label>
                    <input type="text" onChange={(e)=>{setLogin(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>
                <button className = 'btn btn-flat center' onClick = {(e)=>{handleClick(e); history.push('/products')}}>
                                  Sumbit</button>
            </form>)
  
  }



export default AuthForm