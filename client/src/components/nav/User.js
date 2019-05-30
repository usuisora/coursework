/* eslint-disable no-restricted-globals */
import React from 'react'
import {Query} from 'react-apollo'
import {MyContext} from '../../Provider'
import {SellerByIdQuery,ManagerByIdQuery} from '../../queries'
const handleExit =(Logout)=>{
  const res = confirm("Press OK to log out?")
  console.log(res)
  if (res) {
    Logout(false)
  } 
}
function UserContent({history,Logout,user,role, shop}) {
 
  return (
    <div className="card z-depth-1 center grey lighten-3 ">
        <button className="waves-effect waves-black btn-flat"  onClick={()=>handleExit(Logout)}><i className="material-icons">account_circle</i> </button>
        <div style ={{ textTransform: 'capitalize', }}>
          <div>{role}</div> {user.name}{user.mngrName} {user.lastName}{user.mngrLastname}</div>
        <div className='z-depth-0'>Shop #{shop}</div>
    </div>
  )
}
// obj[Object.keys(obj)[0]]; 

const QueryWrapper  = ({query,userId,Logout,role, shop}) =>  
  <Query query = {query}  variables = {{userId}}>
    {({ loading, error, data }) => {
      console.log('userdata',data);
      let user = data[Object.keys(data)[0]]
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <UserContent Logout ={Logout} user={user} role = {role} shop={shop}/>
      )
    }}
  </Query>


const User = () => <MyContext.Consumer>
  {({role, userId,shop,Logout}) => {
    let query = (role !== 'seller') ? ManagerByIdQuery : SellerByIdQuery;
    {/* console.log("shop ",shop) */}
    return <QueryWrapper query ={query} shop = {shop} userId ={userId} Logout={Logout} role={role}/>
  }}
</MyContext.Consumer>

export default  User
