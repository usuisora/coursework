/* eslint-disable no-restricted-globals */
import React from 'react'
import {Query,graphql} from 'react-apollo'
import {MyContext} from '../../Provider'
import {SellerByIdQuery} from '../../queries'
const handleExit =(Logout,history)=>{
  const res = confirm("Press OK to log out?")
  console.log(res)
  if (res) {
    Logout(false)
  } 
}
function UserContent({history,Logout,user,role}) {
 
  return (
    <div className="card z-depth-1 center grey lighten-2">
      <button className="waves-effect waves-black btn-flat"  onClick={()=>handleExit(Logout,history)}><i className="material-icons">account_circle</i> </button>
      <div style ={{ textTransform: 'capitalize'}}>{role} {user.name} {user.lastName}</div>
      <div>Shop {user.shopId}</div>
    </div>
  )
}

const User = ({history,Logout}) => <MyContext.Consumer>
  {({role, userId,setShop}) => 
    <Query query={SellerByIdQuery} variables = {{userId}}>
    {({ loading, error, data:{sellerById} }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
         setShop(sellerById.shopId)
      return (
        <UserContent Logout ={Logout} user={sellerById} role = {role}/>
      )
    }}
  </Query>
  }
</MyContext.Consumer>

export default  graphql(SellerByIdQuery)(User)
