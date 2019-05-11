import React,{useState} from 'react'
import back from '../../images/user.jpg'
import { Link } from "react-router-dom";


const handleExit =(setIsAuth,history)=>{

  // eslint-disable-next-line no-restricted-globals
  if (confirm("Press OK to log out?")) {
    setIsAuth(false)
  } else {
     history.puth('/products')
  }
}
function User({history,setIsAuth}) {
const [to, setTo] = useState('/');
 
  return (
  
    <div className="card z-depth-1 center yellow lighten-4">
      <Link class="waves-effect waves-teal btn-flat" to = '/' onClick={()=>handleExit(setIsAuth,history)}><i class="material-icons">account_circle</i> </Link>
      <div>Seller Ivan Conf</div>
      <div>Shop 3</div>toString
    </div>
  )
}

export default User
