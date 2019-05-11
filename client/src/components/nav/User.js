/* eslint-disable no-restricted-globals */
import React,{useState} from 'react'
import back from '../../images/user.jpg'
import { Link } from "react-router-dom";


const handleExit =(setIsAuth,history)=>{

  const res = confirm("Press OK to log out?")
  console.log(res)
  if (res) {
    setIsAuth(false)
  } 
}
function User({history,setIsAuth}) {
const [to, setTo] = useState('/');
 
  return (
  
    <div className="card z-depth-1 center yellow lighten-4">
      <button class="waves-effect waves-teal btn-flat"  onClick={()=>handleExit(setIsAuth,history)}><i class="material-icons">account_circle</i> </button>
      <div>Seller Ivan Conf</div>
      <div>Shop 3</div>toString
    </div>
  )
}

export default User
