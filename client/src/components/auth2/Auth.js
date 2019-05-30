import React from 'react'
import {MyContext} from '../../Provider'
import {LOGIN} from '../../mutations'
import AuthForm from './AuthForm'
import {Mutation} from 'react-apollo'



function Auth({history}) {

  console.log('history', history)
  return (
    <MyContext.Consumer>
      {({Login, updateMsg,setShop})=>  <div className= 'auth'>
      <Mutation mutation = {LOGIN}>
                        { (loginMutate, {data}) =>{
                            console.log('mutate',loginMutate)
                            return <AuthForm history = {history} loginMutate={loginMutate} setShop = {setShop} Login = {Login} updateMsg = {updateMsg}/>
                        } }
                 </Mutation>
    </div>}
    </MyContext.Consumer>
  )
}

export default Auth





      

          