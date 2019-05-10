import React from 'react'
import back from '../../images/user.jpg'
import { Link } from "react-router-dom";

function User({history}) {
  return (
  
    <div className="card z-depth-1 center yellow lighten-4">
      <Link class="waves-effect waves-teal btn-flat" to = '/'><i class="material-icons">account_circle</i> </Link>
      <div>Seller Ivan Conf</div>
      <div>Shop 3</div>
    </div>
  )
}

export default User
