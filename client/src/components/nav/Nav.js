import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
        <h4>Shop    </h4>
        <select name="shop" id="selectshop">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        
        <div className="routes">
        <Link to="/">Products</Link>
        <Link to="/Check">Check</Link>
        </div>
    </nav>
  )
}

export default Nav
